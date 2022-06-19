import {Suspense} from 'react'
import {Canvas } from '@react-three/fiber'
import {OrbitControls } from '@react-three/drei'
import './index.css';
import React from "react";
import { Cube } from './components/Cube';
import { AnimatedSphere } from './components/BallonBubble';
import { RotatingLogo } from './components/RotatingLogo';





function App() {
  return (
    <div className="wrapper" >
      <Canvas  camera={{ fov:70, position: [0,0,15]}}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[0,0,50]} />
          {/* <RotatingLogo />  uncomment for the rotating logo*/} 
          <Cube/>
          <AnimatedSphere/>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>

    </div>
  );
}

export default App;














