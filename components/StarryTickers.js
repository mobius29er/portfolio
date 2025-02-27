// components/StarryTickers.js
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function StarryTickers({ hyperspace }) {
  const mountRef = useRef(null);
  const [tickers, setTickers] = useState([]);

  // Adjust these to define the "no-spawn" zone around the center
  const NO_SPAWN_X = 2.0; // half-width in x
  const NO_SPAWN_Y = 2.0; // half-height in y

  // 1. Create a helper function for the canvas text
  function createTextTexture(tickerSymbol) {
    // Make an in-memory canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Size can be tweaked if text is too large/small
    canvas.width = 256;
    canvas.height = 128;

    // Draw the text in white, using Cinzel Decorative
    ctx.fillStyle = "white";
    // Adjust the font size if needed
    ctx.font = "40px 'Cinzel Decorative', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(tickerSymbol, canvas.width / 2, canvas.height / 2);

    // Convert to a Three.js texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }

  // 2. Create a plane geometry with that text texture
  function createTextPlane(tickerSymbol) {
    const texture = createTextTexture(tickerSymbol);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true, // so the background is invisible
    });
    // The plane is 1x0.5; adjust if needed
    const geometry = new THREE.PlaneGeometry(1, 0.5);

    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

  // 3. Fetch the S&P 500 ticker list from our local API
  useEffect(() => {
    async function fetchTickers() {
      try {
        const res = await fetch("/api/sp500");
        const data = await res.json();
        setTickers(data);
      } catch (err) {
        console.error(err);
        // fallback
        setTickers(["AAPL", "TSLA", "GOOGL"]);
      }
    }
    fetchTickers();
  }, []);

  // 4. Once we have tickers, create the scene
  useEffect(() => {
    if (tickers.length === 0) return;

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

    const tickerPlanes = [];

    // 5. Create a plane for each ticker, avoiding the center bounding box
    tickers.forEach((symbol) => {
      const plane = createTextPlane(symbol);

      let x, y, z;
      do {
        x = THREE.MathUtils.randFloatSpread(10); // range [-5..5]
        y = THREE.MathUtils.randFloatSpread(10);
        z = THREE.MathUtils.randFloatSpread(10);
        // If it's in the no-spawn box, re-roll
      } while (Math.abs(x) < NO_SPAWN_X && Math.abs(y) < NO_SPAWN_Y);

      plane.position.set(x, y, z);
      scene.add(plane);
      tickerPlanes.push(plane);
    });

    // 6. Animate forward motion
    function animate() {
      requestAnimationFrame(animate);

      tickerPlanes.forEach((plane) => {
        // Slow if not hyperspace, faster if hyperspace
        const speed = hyperspace ? 0.2 : 0.001;
        plane.position.z += speed;

        // Once it goes beyond camera, reset behind
        if (plane.position.z > 5) {
          plane.position.z = -5;
          plane.position.x = THREE.MathUtils.randFloatSpread(10);
          plane.position.y = THREE.MathUtils.randFloatSpread(10);
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    // 7. Handle Resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [tickers, hyperspace]);

  return <div ref={mountRef} className="fixed inset-0 z-[-1]" />;
}
