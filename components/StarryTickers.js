// components/StarryTickers.js
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarryTickers({ hyperspace }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
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
    mountRef.current.appendChild(renderer.domElement);

    // Create stars
    const starGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stars = [];

    function createStar() {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(10));
      star.position.set(x, y, z);
      scene.add(star);
      stars.push(star);
    }

    Array(300).fill().forEach(createStar);

    // Animate
    function animate() {
      requestAnimationFrame(animate);

      // If hyperspace == true, move stars quickly along z-axis
      if (hyperspace) {
        stars.forEach((star) => {
          // increase the speed
          star.position.z += 0.2;
          // if star goes beyond camera, reset it behind
          if (star.position.z > 5) {
            star.position.z = -5;
          }
        });
      }

      renderer.render(scene, camera);
    }
    animate();

    // Resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      // Only remove the renderer if mountRef.current is still valid
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [hyperspace]);

  return <div ref={mountRef} className="fixed inset-0 z-[-1]" />;
}
