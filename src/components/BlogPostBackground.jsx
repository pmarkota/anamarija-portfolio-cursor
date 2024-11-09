import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const BlogPostBackground = () => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();

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

    // Create multiple wave geometries with different colors
    const createWave = (color, yOffset, speed) => {
      const waveGeometry = new THREE.PlaneGeometry(15, 15, 32, 32);
      const waveMaterial = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });

      const wave = new THREE.Mesh(waveGeometry, waveMaterial);
      wave.rotation.x = -Math.PI / 3;
      wave.position.y = yOffset;
      sceneRef.current.add(wave);
      return { geometry: waveGeometry, mesh: wave, speed: speed };
    };

    const waves = [
      createWave("#8B5CF6", 0, 0.5), // Violet
      createWave("#EC4899", -2, 0.3), // Pink
      createWave("#6366F1", 2, 0.7), // Indigo
    ];

    cameraRef.current.position.z = 5;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      waves.forEach((wave) => {
        const positions = wave.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          positions[i + 2] =
            Math.sin((x + time * wave.speed) * 0.5) * 0.5 +
            Math.sin((y + time * wave.speed) * 0.5) * 0.5;
        }
        wave.geometry.attributes.position.needsUpdate = true;
        wave.mesh.rotation.z += 0.001 * wave.speed;
      });

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
      containerRef.current?.removeChild(rendererRef.current.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default BlogPostBackground;
