'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: '📱',
      color: '#25D366',
      link: 'https://wa.me/5519983506250',
      description: 'Chamar no Zap'
    },
    {
      name: 'Gmail',
      icon: '✉️',
      color: '#EA4335',
      link: 'mailto:brunomacedolemos15@gmail.com',
      description: 'Enviar E-mail'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: 9999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Backdrop */}
          <div
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer'
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              background: '#0E0E10',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              width: '100%',
              maxWidth: '400px',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'white' }}>
                {t('modal.contact.title')}
              </h3>
              <p style={{ color: 'var(--secondary)', fontSize: '14px' }}>
                {t('modal.contact.subtitle')}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactOptions.map((option) => (
                <a
                  key={option.name}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = option.color;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <span style={{ fontSize: '32px' }}>{option.icon}</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>{option.name}</span>
                    <span style={{ color: 'var(--secondary)', fontSize: '12px' }}>{option.description}</span>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--secondary)' }}>→</span>
                </a>
              ))}
            </div>

            <button
              onClick={onClose}
              style={{
                marginTop: '32px',
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: 'var(--secondary)',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              {t('modal.contact.close')}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
