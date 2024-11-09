import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";
import { SectionTransition } from "./SectionTransition";

function MovingStars() {
  const starsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    starsRef.current.rotation.y = time * 0.03;
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={50}
        depth={50}
        count={3000}
        factor={4}
        saturation={0.5}
        fade
        speed={1}
      />
    </group>
  );
}

function Planet({ position, size, colors, hasRing, rotationSpeed = 0.001 }) {
  const planetRef = useRef();
  const ringRef = useRef();

  useFrame(() => {
    planetRef.current.rotation.y += rotationSpeed;
    if (hasRing && ringRef.current) {
      ringRef.current.rotation.z += rotationSpeed * 0.5;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <group position={position}>
        <Sphere ref={planetRef} args={[size, 32, 32]}>
          <meshStandardMaterial
            color={colors[0]}
            roughness={0.6}
            metalness={0.4}
            emissive={colors[0]}
            emissiveIntensity={0.2}
          />
        </Sphere>

        {hasRing && (
          <group ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
            <mesh geometry={new THREE.RingGeometry(size * 1.5, size * 1.7, 64)}>
              <meshBasicMaterial
                color={colors[1]}
                transparent
                opacity={0.7}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        )}
      </group>
    </Float>
  );
}

function Scene() {
  const planets = [
    {
      position: [-3, 2, -4],
      size: 0.5,
      colors: ["#a78bfa", "#c4b5fd"],
      hasRing: true,
      rotationSpeed: 0.002,
    },
    {
      position: [3, -2, -5],
      size: 0.7,
      colors: ["#f9a8d4", "#fbcfe8"],
      hasRing: false,
      rotationSpeed: 0.001,
    },
    {
      position: [-2, -2, -3],
      size: 0.4,
      colors: ["#5eead4", "#99f6e4"],
      hasRing: true,
      rotationSpeed: 0.003,
    },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={["#0a0a0a"]} />

      <fog attach="fog" args={["#2d1b69", 6, 15]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#8b5cf6" />
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#4c1d95" />
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#7c3aed" />

      <MovingStars />

      {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))}
    </Canvas>
  );
}

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      <div className="relative z-10 w-full px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 p-4 sm:p-8 rounded-2xl bg-gray-900/30 backdrop-blur-xl border border-gray-700/30"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            HEY, I'M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-600">
              ANAMARIJA
            </span>
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A passionate UI/UX Designer crafting beautiful and functional
            digital experiences that users love.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-400 hover:from-violet-500 hover:via-fuchsia-400 hover:to-violet-300 shadow-lg hover:shadow-xl shadow-violet-500/20"
            >
              Get in Touch
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 border-2 rounded-full border-violet-500 hover:bg-violet-500 hover:text-white backdrop-blur-sm"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <SectionTransition isTop={false} />
    </section>
  );
};
