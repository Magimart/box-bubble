import React, { Suspense, useRef } from 'react'
 import { Canvas, useFrame } from '@react-three/fiber';
 import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';

// import '../index.css';
import { Cube } from '../components/Cube';
import { AnimatedSphere } from '../components/BallonBubble';
import { RotatingLogo } from '../components/RotatingLogo';





function AppRotatingLetterBubbleCube() {   //___working
  return (
    <>
      {/* <Canvas  camera={{ fov:70, position: [0,0,15]}}> */}
      <Canvas dpr={[1.5, 2]} linear shadows>

        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[0,0,50]} />
          <RotatingLogo />           
          <Cube/>
          <AnimatedSphere/>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas> 
    </>
  );
}

export default AppRotatingLetterBubbleCube;














