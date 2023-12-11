import * as THREE from 'three';
//3
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//3
camera.position.z = 5;

const light = new THREE.PointLight(0xffffff, 1000);
light.position.set( -2, 4, 4 );
light.castShadow = true;
scene.add( light );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshPhongMaterial( {color: 0x3010ff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

function animate() {
    requestAnimationFrame( animate );
    
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    cube.rotation.z -= 0.001;

    controls.update();
	renderer.render(scene, camera);
}

animate();