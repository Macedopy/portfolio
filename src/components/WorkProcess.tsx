'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function WorkProcess() {
  const { t } = useLanguage();

  const steps = (t('process.steps') as any).map((name: string, index: number) => {
    // Distribute steps in a 2x3 grid
    const row = (index % 2) + 1;
    const col = Math.floor(index / 2) + 1;
    return { name, row, col };
  });

  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>{t('process.title')}</h2>
          <p style={{ color: 'var(--secondary)', maxWidth: '430px', margin: '0 auto' }}>
            {t('process.description')}
          </p>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gridTemplateRows: 'repeat(2, 200px)',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {steps.map((step) => (
            <div key={step.name} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              gridRow: step.row,
              gridColumn: step.col,
              marginTop: step.row === 2 ? '40px' : '0',
              marginLeft: step.col === 2 ? '20px' : '0'
            }}>
              <div style={{ 
                width: '144px', 
                height: '144px', 
                background: '#0E0E10', 
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                transform: 'rotate(45deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 25px 36px rgba(0, 0, 0, 0.1), inset 0px 4px 40px #000000'
              }}>
                <div style={{ transform: 'rotate(-45deg)', textAlign: 'center', width: '100%' }}>
                  <span style={{ fontSize: '16px', fontWeight: 500 }}>{step.name}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Decorative Arrows/Lines would be implemented with SVG or absolute positioned elements */}
        </div>
      </div>
    </section>
  );
}
