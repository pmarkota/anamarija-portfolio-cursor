import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

const BlogBackground = () => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const particlesRef = useRef();
  const { isDarkMode } = useTheme(); // Get dark mode state

  useEffect(() => {
    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setClearColor(0x000000, 0);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#8B5CF6",
      transparent: true,
      opacity: isDarkMode ? 0.8 : 0, // Set opacity based on dark mode
      blending: THREE.AdditiveBlending,
    });

    particlesRef.current = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    sceneRef.current.add(particlesRef.current);

    cameraRef.current.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesRef.current.rotation.x += 0.0003;
      particlesRef.current.rotation.y += 0.0005;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [isDarkMode]); // Add isDarkMode to dependencies

  // Update particle opacity when dark mode changes
  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.material.opacity = isDarkMode ? 0.8 : 0;
    }
  }, [isDarkMode]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default BlogBackground;
