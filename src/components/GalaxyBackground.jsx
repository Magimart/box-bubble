import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame} from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
 import '../index.css';
import { RotatingLogo } from './RotatingLogo';
import { Cube } from './Cube';
import { AnimatedSphere } from './BallonBubble';


 export function Model({ url }) {
    const { nodes } = useGLTF(url)
    return (
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={1}>
        <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
          <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} />
          <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} />
        </group>
      </group>
    )
  }




function GalaxyBackground() {  //_working
  return (
    <div className="GalaxyBackgrounder" >

    <div className="bg" />
      <h1>
        Learn <span style={{ fontSize: '0.4em' }}>with</span>
        <br />
        <span>Numbers</span>
      </h1>
      <Canvas dpr={[1.5, 2]} linear shadows>

        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          {/* <Model url="/scene.glb" /> */}
          <RotatingLogo/>
          <AnimatedSphere/>
          <Cube/>
          
        </Suspense>
        <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>

    </div>
  );
}

export default GalaxyBackground;














