import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarryTickers() {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000); // black background
    mountRef.current.appendChild(renderer.domElement);

    // 2. Create "Stars" (Placeholder Tickers)
    const starGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    function createStar() {
      const star = new THREE.Mesh(starGeometry, starMaterial);

      // Randomly position the star in some range
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(10));
      star.position.set(x, y, z);

      scene.add(star);
    }

    // Generate multiple stars
    Array(300).fill().forEach(createStar);

    // 3. Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      // Optionally rotate the scene or add slight camera movement
      // scene.rotation.y += 0.0005; // slow rotation for a "twinkle" effect
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
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-[-1]" />;
}
