import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import BackgroundScene from './components/BackgroundScene';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let points = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
    
    const onMouseMove = (e) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
    };
    window.addEventListener('mousemove', onMouseMove);
    
    let animationFrameId;
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < points.length; i++) {
        points[i].age++;
      }
      points = points.filter(p => p.age < 35);
      
      if (points.length > 1) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const opacity = 1 - (p1.age / 35);
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(202, 161, 75, ${opacity})`;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(236,205,128,${opacity})`;
          ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />;
};

function App() {
  return (
    <>
      {/* 3D Background */}
      <BackgroundScene />
      
      {/* Yellow Cursor Trail */}
      <CursorTrail />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
      </main>

      <Footer />
    </>
  );
}

export default App;
