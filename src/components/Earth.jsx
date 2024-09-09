import React, { useEffect } from "react";
import * as THREE from "three";
import earthpic from "../assets/earth.jpg"; // Ensure this path is correct

const Earth = () => {
  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Create the renderer with alpha enabled for transparency
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding; // Correct gamma correction
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer to a specific container
    const container = document.getElementById("earth-container");
    container.appendChild(renderer.domElement);

    // Create the Earth geometry and texture
    const geometry = new THREE.SphereGeometry(1, 64, 64); // Higher segments for smoother appearance
    const texture = new THREE.TextureLoader().load(earthpic);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    earth.scale.set(2, 2, 2); // Scale up the Earth (adjust as needed)
    scene.add(earth);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 5); // Adjusted intensity for better illumination
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 4, 100); // Adjusted intensity
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Add a directional light for more natural lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight.position.set(2, 5, 5).normalize();
    scene.add(directionalLight);

    // Position the camera
    camera.position.z = 4;

    // Update renderer and camera on resize
    const updateSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    updateSize(); // Initial update
    window.addEventListener("resize", updateSize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateSize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      id="earth-container"
      className="lg:w-[40vw] lg:h-[70vh] md:w-[60vw] md:h-[60vh] sm:w-[70vw] sm:h-[50vh] w-full h-[40vh] bg-transparent "
    ></div>
  );
};

export default Earth;
