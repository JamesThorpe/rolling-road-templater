<template>
    <div ref="threeContainer" class="three-container"></div>
  </template>
  
  <script setup lang="ts">

const props = defineProps<{
  offsets: Number[]
}>();

  import { defineComponent, onMounted, onUpdated, ref } from 'vue';
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

      const threeContainer = ref<HTMLDivElement | null>(null);
      onUpdated(() => {});
      onMounted(() => {
        if (!threeContainer.value) return;
  
        // Scene setup
        const scene = new THREE.Scene();
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
  
  
        camera.position.set(10,30,10);
        camera.lookAt(0, 0, 0);
        

        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(0, 10);
        shape.lineTo(props.offsets.length * 4, 10);
        shape.lineTo(props.offsets.length * 4, 0);
        shape.lineTo(0, 0);

        for (let i = 0; i < props.offsets.length; i++) {
          const hole = new THREE.Path();
          hole.moveTo(i*2.5+1, 2);
          hole.lineTo(i*2.5+1, 8);
          hole.lineTo((i*2.5)+2+1, 8);
          hole.lineTo((i*2.5)+2+1, 2);
          hole.lineTo(i*2.5+1, 2);
          shape.holes.push(hole);
        }

// Extrude the shape to give it thickness
const extrudeSettings = { depth: 1, bevelEnabled: true };
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = Math.PI / 2;
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 10); // Position the light
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
// Add the mesh to the scene
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
        
      });
  

  </script>
  
  <style>
  .three-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  </style>