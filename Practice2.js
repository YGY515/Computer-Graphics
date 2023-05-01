import * as THREE from 'three';
import {OrbitControls} from "../Test/node_modules/three/examples/jsm/controls/OrbitControls.js";



// Renderer Setting
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight ); 

const container = document.getElementById( 'myContainer' );
container.appendChild( renderer.domElement );


// Camera Setting
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000); // Fov 값은 90
camera.position.set( 0, 0, 20 );   
camera.up.set( 0, 1, 0 );   // 업벡터는 y = 1
camera.lookAt( 0, 0, 0 );   // 어디서든지 원점을 보기

const controls = new OrbitControls( camera, renderer.domElement );


// Material & line Setting
const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true } );
const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const Cube = new THREE.Mesh( geometry, material );


// Resize Setting
function WindowResize(){
    camera.aspect =  window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', WindowResize);


// Scene Setting
const Scene = new THREE.Scene();
Scene.add( Cube );
Scene.add( new THREE.AxesHelper ( 10 ) );  // 3차원 좌표계 추가
animate();


function animate(){
    requestAnimationFrame( animate );

    controls.update();
    renderer.render( Scene, camera );
}