'use client';
import CircularGallery from './CircularGallery';
import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  const items = [
    { image: '/images/projects/central.png', text: 'Central' },
    { image: '/images/projects/enumerate all apps.jpg', text: 'Enumerate All Apps' },
    { image: '/images/projects/Goup.jpg', text: 'Goup' },
    { image: '/images/projects/John Deere App.jpg', text: 'John Deere App' },
    { image: '/images/projects/MoneyCart.jpg', text: 'MoneyCart' },
    { image: '/images/projects/Repobra.jpg', text: 'Repobra' },
  ];

  return (
    <section id="projects" className="section-spacing" style={{ overflow: 'hidden' }}>
      <style jsx>{`
        .gallery-container {
          height: 500px;
          width: 100%;
          position: relative;
        }
        @media (max-width: 768px) {
          .gallery-container {
            height: 300px;
          }
        }
        @media (max-width: 480px) {
          .gallery-container {
            height: 200px;
          }
        }
      `}</style>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            fontSize: '14px', 
            fontWeight: 700, 
            letterSpacing: '0.2em', 
            color: 'var(--secondary)',
            display: 'block',
            marginBottom: '16px'
          }}>{t('portfolio.tag')}</span>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>{t('portfolio.title')}</h2>
          <p style={{ color: 'var(--secondary)', maxWidth: '420px', margin: '0 auto' }}>
            {t('portfolio.description')}
          </p>
        </div>
      </div>

      <div className="gallery-container">
        <CircularGallery 
          items={items} 
          bend={2} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.05}
          scrollSpeed={2}
        />
      </div>
    </section>
  );
}
