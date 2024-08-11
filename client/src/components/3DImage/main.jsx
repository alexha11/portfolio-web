import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDEarth = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Set renderer with alpha: true for transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere geometry for the Earth
    const geometry = new THREE.SphereGeometry(3, 32, 32); // Radius 1, 32 segments for width and height for smoothness

    // Load Earth's texture
    const texture = new THREE.TextureLoader().load('https://res.cloudinary.com/ddfq0pl1q/image/upload/v1723399989/Earth_xjhfwu.png');

    // Create a material with the Earth's texture
    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });

    // Create the Earth mesh
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    camera.position.z = 5;

    // Add lighting for better material visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add OrbitControls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enables inertia (smooth camera movement)
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI; // Allow full rotation around the globe

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001; // Slowly rotate the Earth
      controls.update(); // Required if controls.enableDamping is set to true
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '400px' }} className='flex items-center justify-center' />;
};

export default ThreeDEarth;