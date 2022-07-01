import './App.css';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';


export const Box = () =>  {


      const ref= useFrame();

      console.log(ref)

      useFrame(state => {
            ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;

            console.log(state)
      });

      return(
        <mesh>
            <boxBufferGeometry/>
            <meshBasicMaterial color="#ffff" />
        </mesh>
      )
}




function App() {




        return (

          <div  style={{height:"100vh", width:"100vw"}}>
                 <Canvas style={{background: "#abc"}}>
                      <Box/>
                </Canvas>

          </div>

        );
}

export default App;














// import { useEffect, useState } from 'react';
// import './App.css';
// import * as THREE from 'three';

// function App() {
//     const [windowDimensions, setWindowDimensions] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight
//     });

//     useEffect(() => {
//         window.addEventListener('resize', handleResize);
//     }, [windowDimensions]);

//     const handleResize = () => {
//         setWindowDimensions({
//             width: window.innerWidth,
//             height: window.innerHeight
//         });
//     };



//       const scene = new THREE.Scene()
//       const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//       const renderer = new THREE.WebGLRenderer();
//       renderer.setSize( window.innerWidth, window.innerHeight)


//      // remove other layers bg on the doc body
//         document.body.innerHTML = "";

//         document.body.appendChild(renderer.domElement);


//       const geomentry = new THREE.BoxGeometry()
//       const material = THREE.MeshBasicMaterial({color: "red"})


//         camera.position.z = 5
//         const cube = new THREE.Mesh(geomentry, material);
//         scene.add(cube)


//     function animate(){
//             requestAnimationFrame(animate)
//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;

//             renderer.render(scene, camera);
//         }

//       //  animate()

//         window.addEventListener("resize", () => {
//             renderer.setSize(window.innerWidth, window.innerHeight)
//         })

//         return (
//             null
//         );
// }

// export default App;
