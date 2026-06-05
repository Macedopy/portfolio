'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = (t('faq.items') as any) || [];

  return (
    <section id="faq" className="section-spacing">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            fontSize: '14px', 
            fontWeight: 700, 
            letterSpacing: '0.2em', 
            color: 'var(--secondary)',
            display: 'block',
            marginBottom: '16px'
          }}>FAQ</span>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>{t('faq.title')}</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq: any, index: number) => (
            <div key={index} style={{ 
              background: 'var(--card-bg)', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 500,
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                {faq.question}
                <span style={{ 
                  fontSize: '24px', 
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>+</span>
              </button>
              
              <div style={{ 
                maxHeight: openIndex === index ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease'
              }}>
                <p style={{ 
                  padding: '0 24px 24px', 
                  color: 'var(--secondary)', 
                  lineHeight: '1.6' 
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
