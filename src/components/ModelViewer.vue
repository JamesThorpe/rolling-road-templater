<template>
    <div ref="threeContainer" class="three-container"></div>
  </template>
  
  <script setup lang="ts">
    import { defineComponent, onMounted, onUpdated, ref, watch } from 'vue';
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
  import {STLExporter} from 'three/examples/jsm/exporters/STLExporter'

const props = defineProps<{
  offsets: number[],
  rrWidth: number,
  rrLength: number
}>();

const exportObject = function downloadSTL() {
  const filename = 'model.stl';
  // Ensure the mesh is a valid Three.js object
  if (!mesh || !mesh.geometry) {
    console.error('Invalid mesh provided.');
    return;
  }

  // Create the STLExporter
  const exporter = new STLExporter();

  // Export the mesh to an STL string
  const stlString = exporter.parse(mesh);

  // Create a Blob from the STL string
  const blob = new Blob([stlString], { type: 'application/octet-stream' });

  // Create a link element and set its href to the Blob URL
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // Programmatically click the link to trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

defineExpose({ exportObject });

watch(props, () => {
  createMesh();
}, {deep:true});


let mesh:THREE.Mesh=null;
let scene: THREE.Scene;



const threeContainer = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (!threeContainer.value) return;

  // Scene setup
  scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0,250,0);
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  threeContainer.value.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  // Optional settings for smoother control behavior
  controls.enableDamping = true; // Enables inertial damping (smooth motion)
  controls.dampingFactor = 0.05; // Lower values mean smoother damping

  controls.enablePan = true; // Enable dragging the camera
  controls.enableZoom = true; // Allow zooming
  controls.target.set(50, 0, 0); // Focus on the origin or a specific point





  

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

  function makeHole(offset: number) {
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

  // Extrude the shape to give it thickness
  const extrudeSettings = { depth: 1, bevelEnabled: true, bevelOffset: -1, steps: 1, bevelSegments: 1, bevelSize: 1, bevelThickness: 1 };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x1470ae ,
    roughness: 0.5
  });



  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = Math.PI / 2;
  mesh.rotation.z = Math.PI / 2;
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