import React, { Suspense, useRef } from 'react'
import GalaxyBackground from './components/GalaxyBackground';
 import { Canvas, useFrame } from '@react-three/fiber';
 import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';

// import '../index.css';
import { Cube } from './components/Cube';
import { AnimatedSphere } from './components/BallonBubble';
import { RotatingLogo } from './components/RotatingLogo';
import AppRotatingLetterBubbleCube from './components/AppRotatingCubeBubbleLetter';





function App() {
  return (
    <>
        {/* <AppRotatingLetterBubbleCube/> */}
        <GalaxyBackground/>
    </>
  );
}

export default App;














