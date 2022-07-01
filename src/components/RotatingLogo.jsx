import React, {useRef} from "react"
import { useGLTF} from '@react-three/drei'
import { useFrame} from '@react-three/fiber'


export function RotatingLogo() {
    const group = useRef()
    const { nodes, materials } = useGLTF('/demo-text.glb')
  
    useFrame( ({clock})=> { 
               group.current.rotation.x =clock.getElapsedTime()
               
    })
  
    
    return (
      <group ref={group}  dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0,]} scale={0.5}>
          <mesh  geometry={nodes['3D_Text_-_D'].geometry} material={nodes['3D_Text_-_D'].material} position={[-4.49, 1.55, 0.32]} scale={0.1}  />
        </group>
      </group>
    )
  }
  



  
