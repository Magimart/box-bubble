import React from "react";
import { MeshDistortMaterial, Sphere } from '@react-three/drei'




export function AnimatedSphere() {
    return (
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8352bc"
          attach="material"
          distort={1.0}
          speed={4.5}
          roughness={0}
        />
      </Sphere>
    );
  }