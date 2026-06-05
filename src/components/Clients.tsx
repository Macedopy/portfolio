'use client';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Clients() {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  const { t } = useLanguage();

  const clients = [
    { name: 'Enumerate', logo: 'ENUMERATE' },
    { name: 'John Deere', logo: 'JOHN DEERE' },
    { name: 'Power One', logo: 'POWER ONE' },
  ];

  return (
    <section id="clients" style={{ padding: '120px 0', position: 'relative', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            fontSize: '16px', 
            fontWeight: 700, 
            letterSpacing: '0.3em', 
            color: 'var(--secondary)',
            display: 'block',
            marginBottom: '12px'
          }}>{t('trust.by')}</span>
          <p style={{ color: 'var(--secondary)', fontSize: '18px' }}>{t('trust.by.desc')}</p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          gap: '60px',
        }}>
          {clients.map((client) => (
            <div 
              key={client.name} 
              style={{ position: 'relative', cursor: 'pointer' }}
              onMouseEnter={() => setHoveredClient(client.name)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <motion.div 
                animate={{ 
                  opacity: hoveredClient === client.name ? 1 : 0.4,
                  scale: hoveredClient === client.name ? 1.1 : 1,
                  color: hoveredClient === 'John Deere' && client.name === 'John Deere' ? '#367C2B' : 'var(--foreground)'
                }}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.05em' }}>
                  {client.logo}
                </span>
              </motion.div>

              {/* Animated Community/Condo effect for Enumerate */}
              {client.name === 'Enumerate' && (
                <AnimatePresence>
                  {hoveredClient === 'Enumerate' && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      style={{
                        position: 'absolute',
                        top: '-60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '5px',
                        pointerEvents: 'none'
                      }}
                    >
                      {['🏢', '🏠', '🏘️'].map((building, i) => (
                        <motion.span
                          key={i}
                          animate={{ 
                            y: [0, -10, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5, 
                            delay: i * 0.2 
                          }}
                          style={{ fontSize: '30px' }}
                        >
                          {building}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Animated Tractor for John Deere */}
              {client.name === 'John Deere' && (
                <AnimatePresence>
                  {hoveredClient === 'John Deere' && (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      style={{
                        position: 'absolute',
                        top: '-80px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none',
                        width: '120px',
                        height: 'auto'
                      }}
                    >
                      <img 
                        src="/images/tractor.png" 
                        alt="John Deere Tractor" 
                        style={{ width: '100%', height: 'auto' }} 
                      />
                      <motion.div
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], x: [0, -10, -20], y: [0, -10, -20] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        style={{ position: 'absolute', top: '10px', left: '0', fontSize: '20px' }}
                      >
                        💨
                      </motion.div>
                    </motion.div>
                    )}
                    </AnimatePresence>
                    )}

                    {/* Animated SAP Logo for Power One */}
                    {client.name === 'Power One' && (
                    <AnimatePresence>
                    {hoveredClient === 'Power One' && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      style={{
                        position: 'absolute',
                        top: '-60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none',
                        width: '80px',
                        height: 'auto'
                      }}
                    >
                      <img 
                        src="/images/sap_logo.png" 
                        alt="SAP Logo" 
                        style={{ width: '100%', height: 'auto' }} 
                      />
                    </motion.div>
                    )}
                    </AnimatePresence>
                    )}

                    {/* Special Glow for Enumerate or others */}              {hoveredClient === client.name && (
                <motion.div
                  layoutId="glow"
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    background: 'radial-gradient(circle, rgba(173, 19, 251, 0.1) 0%, transparent 70%)',
                    zIndex: -1
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

