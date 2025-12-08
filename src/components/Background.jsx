import React, { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const letters = "01";
    const fontSize = 18;

    // LOW DENSITY (only 40% of full density)
    const columns = Math.floor(canvas.width / fontSize * 0.40);

    const drops = Array(columns).fill(1);

    function draw() {
      // Dark transparent layer for fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff15ff"; 
      ctx.font = fontSize + "px monospace";

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        
        const x = i * fontSize * 2; // Spread columns wider → lower density

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = 0; // occasional reset
        }
        drops[i]++;
      });
    }

    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -100,
        width: "100vw",
        height: "100vh",
        opacity: 0.35, // LIGHT effect
      }}
    />
  );
}
