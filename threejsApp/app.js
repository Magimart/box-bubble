import * as THREE from '../libs/three126/three.module.js';
import { OrbitControls } from '../libs/three126/OrbitControls.js';


class App{

	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
		// console.log(this)
        // let unbinded = window.addEventListener('resize', this );
	    // let binded = window.addEventListener('resize', this.resize.bind(this) );
		// console.log(unbinded)
		// console.log(binded)

		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
	    this.camera.position.set(0, 0, 4);
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xBBAAA);
		
		this.renderer = new THREE.WebGL1Renderer({antialias: true});
		this.renderer.setPixelRatio(window.devicePixelRatio)
		this.renderer.setSize(window.innerWidth, window.innerHeight);
        
	    const ambietLight = new THREE.HemisphereLight(0xFFFFFF, 0xBBBBFF, 0.3)
        this.scene.add(ambietLight)
	    const lightPosition = new THREE.DirectionalLight()
	    lightPosition.position.set(0.2, 1, 1);
		this.scene.add(lightPosition)


         container.appendChild(this.renderer.domElement);
         this.renderer.setAnimationLoop(this.render.bind(this));


		 //---create ab0x
		 const geometry = new THREE.BoxGeometry();
		 const material = new THREE.MeshStandardMaterial({color:0xFF000})

		 this.mesh =  new THREE.Mesh(geometry, material);
		 this.scene.add(this.mesh)

	   const constrols = new OrbitControls(this.camera, this.renderer.domElement)



       window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
		this.camera.aspect = window.innerWidth/ window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight)
        
    }
    
	render( ) {   
        this.renderer.render(this.scene, this.camera);
		this.mesh.rotateX(0.01)
    }
}

export { App };