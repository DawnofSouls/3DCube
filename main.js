import * as THREE from 'three';


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(
  75,                                       // FOV
  window.innerWidth / window.innerHeight,   // ASPECT RATIO
  0.1,                                      // NEAR 
  1000                                      // FAR
);


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//renders everything to show up on screen
renderer.render( scene, camera );

