<template>
    <div ref="threeContainer" class="three-container"></div>
  </template>
  
  <script setup lang="ts">
    import { defineComponent, onMounted, onUpdated, ref, watch } from 'vue';
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const props = defineProps<{
  offsets: Number[],
  rrWidth: Number,
  rrLength: Number
}>();

watch(props, () => {
  createMesh();
}, {deep:true});


let mesh=null;
let scene;



const threeContainer = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (!threeContainer.value) return;

  // Scene setup
  scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);
  // Optional settings for smoother control behavior
  controls.enableDamping = true; // Enables inertial damping (smooth motion)
  controls.dampingFactor = 0.05; // Lower values mean smoother damping

  controls.enablePan = true; // Enable dragging the camera
  controls.enableZoom = true; // Allow zooming
  controls.target.set(0, 0, 0); // Focus on the origin or a specific point

  renderer.setSize(window.innerWidth, window.innerHeight);
  threeContainer.value.appendChild(renderer.domElement);


  camera.position.set(30,50,0);
  camera.lookAt(0, 0, 0);
  

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 10, 10); // Position the light
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  createMesh();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  
});
  
function createMesh() {
  if (mesh!=null) {
    scene.remove(mesh);
  }
  const totalOffsets = props.offsets.reduce((t, c) => t + c, 0);
  const overallWidth = props.rrWidth + 10;
  const overallLength = totalOffsets + props.rrLength + 10;
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, overallWidth);
  shape.lineTo(overallLength, overallWidth);
  shape.lineTo(overallLength, 0);
  shape.lineTo(0, 0);

  function makeHole(offset: Number) {
    const hole = new THREE.Path();
    hole.moveTo(offset - (props.rrLength/2), 5);
    hole.lineTo(offset + (props.rrLength/2), 5);
    hole.lineTo(offset + (props.rrLength/2), props.rrWidth+5);
    hole.lineTo(offset - (props.rrLength/2), props.rrWidth+5);
    hole.lineTo(offset - (props.rrLength/2), 5);
    shape.holes.push(hole);
  }
  let offset = (props.rrLength / 2) + 5;
  makeHole(offset);
  for (let i = 0; i < props.offsets.length; i++) {
    offset += props.offsets[i];
    makeHole(offset);
  }

  /*
  for (let i = 0; i < props.offsets.length; i++) {
    const hole = new THREE.Path();
    hole.moveTo(i*2.5+1, 2);
    hole.lineTo((i*2.5)+2+1, 2);
    hole.lineTo((i*2.5)+2+1, 8);
    
    hole.lineTo(i*2.5+1, 8);
    hole.lineTo(i*2.5+1, 2);
    shape.holes.push(hole);
  }*/

  // Extrude the shape to give it thickness
  const extrudeSettings = { depth: 1, bevelEnabled: true };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = Math.PI / 2;
  scene.add(mesh);
}

  </script>
  
  <style>
  .three-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  </style>