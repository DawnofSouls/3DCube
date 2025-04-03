import * as THREE from "three";
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; //camera controlls, disable when finished


//scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, // ASPECT RATIO
  0.1, // NEAR
  1000 // FAR
);

//
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//

//grid
const size = 50;                    // How big the grid is
const divisions = 100;              // division inside of grid
const colorCenterLine = 0xd8d8d8;   // the cross center grid, will enable to see the origin, darker color
const colorGrid = 0x666666;         // the general grid, lighter color

const gridHelper = new THREE.GridHelper(
  size,                             
  divisions,
  colorGrid,
  colorCenterLine
);
scene.add(gridHelper);

//cube
const loader = new OBJLoader();
loader.load('OBJS/cube.obj', (obj) => {
    obj.scale.set(0.01, 0.01, 0.01);       // Scale it up/down if it's too big/small
    obj.position.set(-0.5, 0, 2.5);    // Center it if it's off-screen
    scene.add(obj);
});


//camera position
camera.position.z = 5;
camera.position.y = 1; //default 0.5

//moves camera via mouse (disable this when finished)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // optional for smoother movement
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0); // look at cube center
controls.update();

//renders everything to show up on screen
function animate() {

    requestAnimationFrame(animate);         // disable this when finished 
    controls.update(); // important!        //disable this when finsihed

    renderer.render( scene, camera );
  }
  renderer.setAnimationLoop( animate );
