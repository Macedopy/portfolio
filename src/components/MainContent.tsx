'use client';
import Hero from './Hero';
import Clients from './Clients';
import GradualBlur from './GradualBlur';

export default function MainContent() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* The content to be blurred */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Clients />
      </div>

      {/* 
          Changing target to "page" and position to "bottom" 
          makes it stay fixed at the bottom of the screen.
          This blurs whatever content passes behind it as you scroll.
      */}
      <GradualBlur
        target="page"
        position="bottom"
        height="15vh"      // 15% of the viewport height
        strength={10}
        divCount={10}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={400}       // Below Navbar (500) but above content
      />
    </div>
  );
}
