"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";

export default function KnowledgeSphere() {
  return (
    <div className="w-full h-[520px]">
      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={2} />

        <directionalLight position={[3, 3, 5]} intensity={2} />

        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Sphere args={[1.2, 64, 64]}>
            <meshStandardMaterial
              color="#BD4444"
              roughness={0.15}
              metalness={0.6}
            />
          </Sphere>
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.7}
        />

      </Canvas>
    </div>
  );
}