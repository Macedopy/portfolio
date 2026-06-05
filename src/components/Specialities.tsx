'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Specialities() {
  const { t } = useLanguage();

  const specialities = (t('specialities.items') as any).map((item: any, index: number) => {
    const icons = ['📧', '📊', '🔍'];
    const colors = ['#B419FD', '#19D4FD', '#7949FF'];
    return {
      ...item,
      icon: icons[index],
      color: colors[index]
    };
  });

  return (
    <section id="service" className="section-spacing">
      <style jsx>{`
        .specialities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 992px) {
          .specialities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .specialities-grid {
            grid-template-columns: 1fr;
          }
          .title-text {
            font-size: 24px !important;
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
          }}>{t('specialities.tag')}</span>
          <h2 className="title-text" style={{ fontSize: '32px', marginBottom: '16px' }}>{t('specialities.title')}</h2>
          <p style={{ color: 'var(--secondary)', maxWidth: '500px', margin: '0 auto' }}>
            {t('specialities.description')}
          </p>
        </div>

        <div className="specialities-grid">
          {specialities.map((spec: any) => (
            <div key={spec.title} style={{ 
              background: 'var(--card-bg)', 
              padding: '40px 24px', 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                fontSize: '48px', 
                color: spec.color, 
                marginBottom: '24px' 
              }}>{spec.icon}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>{spec.title}</h3>
              <div style={{ width: '30px', height: '2px', background: 'var(--accent-primary)', margin: '0 auto 16px' }}></div>
              <p style={{ fontSize: '14px', color: 'var(--secondary)' }}>{spec.description}</p>
              
              {/* Decorative element from design */}
              <div style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                width: '50px', 
                height: '50px', 
                background: 'rgba(53, 53, 53, 0.2)', 
                transform: 'rotate(45deg)',
                zIndex: -1
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
