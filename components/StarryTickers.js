// components/StarryTickers.js
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarryTickers({ hyperspace }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 2. Create "Stars" (Placeholder Tickers)
    const starGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    // Make material transparent so we can change opacity for twinkle
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
    });

    const stars = [];
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial.clone());
      // Random position
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10));
      star.position.set(x, y, z);
      // Give each star a random "twinkle offset"
      star.userData.offset = Math.random() * 100;
      scene.add(star);
      stars.push(star);
    }

    // 3. Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // We remove the scene rotation for a "forward flight" feel:
      // scene.rotation.y += 0.0005; // <-- comment this out or remove

      stars.forEach((star) => {
        // Twinkle effect
        // const phase = elapsed * 2 + star.userData.offset;
        // const opacity = 0.5 + 0.5 * Math.sin(phase);
        // star.material.opacity = opacity;

        // Move the star forward in z to simulate flying
        // Slow speed if not hyperspace, faster if hyperspace is true
        const speed = hyperspace ? 0.2 : 0.001;
        star.position.z += speed;

        // If the star moves past the camera, reset it behind
        if (star.position.z > 5) {
          star.position.z = -5; 
          // Optionally randomize x/y again so it looks fresh
          star.position.x = THREE.MathUtils.randFloatSpread(10);
          star.position.y = THREE.MathUtils.randFloatSpread(10);
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    // 4. Handle Window Resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [hyperspace]);

  return <div ref={mountRef} className="fixed inset-0 z-[-1]" />;
}
