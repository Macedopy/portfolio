'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GradientBlinds from './GradientBlinds';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t, setIsContactOpen, setIsJDOpen } = useLanguage();

  const handleContactClick = () => {
    if (window.innerWidth <= 768) {
      setIsJDOpen(true);
      setTimeout(() => {
        setIsJDOpen(false);
        setIsContactOpen(true);
      }, 1500);
    } else {
      setIsContactOpen(true);
    }
  };

  return (
    <section className="section-spacing" style={{ 
      marginTop: '108px', 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
          pointer-events: none;
        }
        .hero-title {
          font-size: 58px;
          font-weight: 300;
          line-height: 1.14;
          margin-bottom: 28px;
          color: #E6E6E6;
        }
        .hero-image-container {
          position: relative;
          height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .profile-wrapper {
          width: 420px;
          height: 520px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          position: relative;
          z-index: 2;
          overflow: visible;
        }
        @media (max-width: 992px) {
          .hero-title {
            font-size: 42px;
          }
          .hero-grid {
            gap: 32px;
          }
          .profile-wrapper {
            width: 340px;
            height: 420px;
          }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title {
            font-size: 32px;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-image-container {
            height: 350px;
            margin-top: 40px;
            display: flex;
            justify-content: center;
          }
          .profile-wrapper {
            width: 280px;
            height: 350px;
          }
        }
      `}</style>
      {/* BACKGROUND GRADIENT BLINDS */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0, // Base layer
        opacity: 0.5,
        pointerEvents: 'auto' // Must be auto to capture mouse
      }}>
        <GradientBlinds
          gradientColors={['#194BFD', '#AD13FB', '#194BFD']}
          angle={45}
          noise={0.2}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.4}
          spotlightSoftness={1.2}
          spotlightOpacity={0.8}
          mouseDampening={0.1}
          distortAmount={1}
          shineDirection="left"
          mixBlendMode="screen"
        />
      </div>

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ pointerEvents: 'none' }}
        >
          <h1 className="hero-title">
            {t('hero.title').split('?')[0]}?<br />
            <span style={{ fontWeight: 700 }}>{t('hero.subtitle')}</span>
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: 'var(--secondary)', 
            marginBottom: '56px',
            maxWidth: '540px'
          }}>
            {t('hero.description')}
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '24px', alignItems: 'center', pointerEvents: 'auto' }}>
            <button className="btn-primary" onClick={handleContactClick}>{t('hero.btn.plan')}</button>
            <button className="btn-secondary" style={{ background: 'transparent', padding: '12px 0' }} onClick={handleContactClick}>
              {t('hero.btn.contact')} <span style={{ marginLeft: '8px' }}>→</span>
            </button>
          </div>
        </motion.div>

        <div className="hero-image-container">
          {/* Animated Background Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              background: 'linear-gradient(135deg, #AD13FB 0%, #194BFD 100%)',
              filter: 'blur(60px)',
              opacity: 0.15,
              zIndex: 0
            }}
          />

          {/* Profile Image Container */}
          <motion.div 
            className="profile-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ 
              zIndex: 10,
              position: 'relative', // ADDED: needed for Image fill
              height: '520px' // ADDED: explicit height for fill
            }}
          >
            <Image 
              src="/images/profile.png" 
              alt="Profile Photo" 
              fill
              style={{ 
                objectFit: 'contain',
                filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.5))'
              }}
              priority
            />
          </motion.div>
          
          {/* Decorative Diamond */}
          <motion.div 
            animate={{ 
              rotate: 405,
              y: [0, -20, 0]
            }}
            transition={{
              rotate: { duration: 0 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ 
              position: 'absolute', 
              top: '20%', 
              left: '0', 
              width: '40px', 
              height: '40px', 
              background: 'var(--accent-secondary)', 
              zIndex: 3,
              boxShadow: '0 0 30px #AD13FB'
            }}
          />
        </div>
      </div>
    </section>
  );
}
