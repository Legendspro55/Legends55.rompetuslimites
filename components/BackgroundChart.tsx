import React, { useEffect, useRef } from 'react';

const BackgroundChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let animationFrameId: number;

    // Data points for the chart
    const points: number[] = [];
    const numPoints = Math.ceil(width / 10); // Density of points
    
    // Initialize points
    let currentY = height / 2;
    for (let i = 0; i < numPoints; i++) {
      points.push(currentY);
      currentY += (Math.random() - 0.5) * 20;
      // Clamp
      currentY = Math.max(height * 0.2, Math.min(height * 0.8, currentY));
    }

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Update Data (Simulate Live Market)
      const lastPoint = points[points.length - 1];
      let newPoint = lastPoint + (Math.random() - 0.5) * 30;
      
      // Trending logic (make it look like a market)
      const time = Date.now() / 1000;
      newPoint += Math.sin(time) * 5; 

      // Clamp
      newPoint = Math.max(height * 0.1, Math.min(height * 0.9, newPoint));
      
      points.shift();
      points.push(newPoint);

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Draw Grid (Tech look)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 100;
      
      ctx.beginPath();
      for(let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for(let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();


      // Draw Chart Line
      ctx.beginPath();
      ctx.moveTo(0, points[0]);

      // Smooth curve
      for (let i = 0; i < points.length - 1; i++) {
        const xMid = (i * 10 + (i + 1) * 10) / 2;
        const yMid = (points[i] + points[i + 1]) / 2;
        const cp1x = (xMid + i * 10) / 2;
        const cp1y = points[i];
        const cp2x = (xMid + (i + 1) * 10) / 2;
        const cp2y = points[i + 1];
        
        ctx.quadraticCurveTo(i * 10, points[i], xMid, yMid);
      }

      // Gradient Fill
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.3)'); // legendsGold
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0.0)');

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke Line
      ctx.beginPath();
      for (let i = 0; i < points.length - 1; i++) {
        const xMid = (i * 10 + (i + 1) * 10) / 2;
        const yMid = (points[i] + points[i + 1]) / 2;
        ctx.quadraticCurveTo(i * 10, points[i], xMid, yMid);
      }
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw Interaction (Crosshair/Highlight)
      if (mouseX > 0 && mouseX < width) {
          const index = Math.floor(mouseX / 10);
          if (points[index]) {
              const y = points[index];
              
              // Glow point
              ctx.beginPath();
              ctx.arc(index * 10, y, 6, 0, Math.PI * 2);
              ctx.fillStyle = '#fff';
              ctx.fill();
              ctx.shadowBlur = 15;
              ctx.shadowColor = '#F59E0B';
              ctx.stroke();
              ctx.shadowBlur = 0;

              // Vertical Line
              ctx.beginPath();
              ctx.moveTo(index * 10, 0);
              ctx.lineTo(index * 10, height);
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
              ctx.setLineDash([5, 5]);
              ctx.stroke();
              ctx.setLineDash([]);
          }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
    </div>
  );
};

export default BackgroundChart;