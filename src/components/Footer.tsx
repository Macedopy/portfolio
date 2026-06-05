'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ padding: '100px 0 32px', borderTop: '1px solid var(--border-color)' }}>
      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 64px;
          margin-bottom: 64px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: var(--secondary);
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-item:hover {
          color: var(--foreground);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .footer-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .contact-list {
            align-items: center !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '24px', height: '24px', background: 'var(--accent-primary)', borderRadius: '4px' }}></div>
              <span style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '0.05em' }}>{t('footer.col1.title')}</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--secondary)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '400px' }}>
              {t('footer.col1.desc')}
            </p>
          </div>

          {/* Col 4 (Now 2nd) */}
          <div className="footer-col" id="client">
            <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>{t('footer.col4.title')}</h4>
            <div className="contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="tel:+5519983506250" className="contact-item">
                <span style={{ fontSize: '20px' }}>📞</span> 
                <span>+55 19 98350-6250</span>
              </a>
              <a href="mailto:brunomacedolemos15@gmail.com" className="contact-item">
                <span style={{ fontSize: '20px' }}>✉️</span> 
                <span>brunomacedolemos15@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '32px', 
          textAlign: 'center',
          fontSize: '14px',
          color: 'var(--secondary)'
        }}>
          Copyright 2022 | {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
