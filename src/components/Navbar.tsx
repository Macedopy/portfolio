'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale, setLocale, setIsContactOpen, setIsJDOpen } = useLanguage();

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: t('nav.home'), href: '#' },
        { name: t('nav.service'), href: '#service' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.faq'), href: '#faq' },
        { name: t('nav.contact'), href: '#client' }
      ];

      for (const section of sections) {
        if (section.href === '#') continue;
        const element = document.querySelector(section.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section.href);
            return;
          }
        }
      }
      
      // Default to Home if at top
      if (window.scrollY < 100) {
        setActiveSection('#');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      zIndex: 500,
      background: 'rgba(23, 23, 25, 0.44)',
      backdropFilter: 'blur(25px)',
      boxShadow: '0px 5px 16px rgba(0, 0, 0, 0.25)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <style jsx>{`
        .top-info {
          background: rgba(23, 23, 25, 0.6); 
          padding: 10px 0;
          font-size: 14px;
          color: var(--secondary);
        }
        @media (max-width: 768px) {
          .top-info {
            display: none;
          }
          .nav-links {
            display: ${isMobileMenuOpen ? 'flex' : 'none'} !important;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #171719;
            flex-direction: column;
            padding: 20px;
            gap: 20px !important;
            border-bottom: 1px solid var(--border-color);
          }
          .hamburger {
            display: flex !important;
          }
          .nav-btn {
            display: none !important;
          }
        }
      `}</style>
      {/* Top Info Bar */}
      <div className="top-info">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>📞 +55 19 98350-6250</span>
            <span>✉️ brunomacedolemos15@gmail.com</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px', marginRight: '16px', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '16px' }}>
              {[
                { locale: 'br' as const, flag: '🇧🇷', title: 'Português', color: '#009c3b', bg: 'rgba(0, 255, 0, 0.1)' },
                { locale: 'us' as const, flag: '🇺🇸', title: 'English', color: '#002868', bg: 'rgba(0, 0, 255, 0.1)' }
              ].map((item) => (
                <button 
                  key={item.locale}
                  onClick={() => setLocale(item.locale)} 
                  style={{ 
                    cursor: 'pointer', 
                    background: locale === item.locale ? item.bg : 'transparent',
                    border: locale === item.locale ? `1px solid ${item.color}` : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    opacity: locale === item.locale ? 1 : 0.6
                  }} 
                  title={item.title}
                >
                  <span style={{ fontSize: '18px' }}>{item.flag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{ padding: '15px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '0.05em' }}>{t('eng.software')}</span>
          </div>

          <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
            {[
              { name: t('nav.home'), href: '#' },
              { name: t('nav.service'), href: '#service' },
              { name: t('nav.projects'), href: '#projects' },
              { name: t('nav.about'), href: '#about' },
              { name: t('nav.faq'), href: '#faq' },
              { name: t('nav.contact'), href: '#client' }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  textDecoration: 'none', 
                  color: activeSection === item.href ? 'var(--accent-primary)' : 'var(--secondary)',
                  fontWeight: 700,
                  fontSize: '14px',
                  textShadow: activeSection === item.href ? '0 0 8px var(--accent-primary)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button 
              className="btn-primary nav-btn" 
              style={{ fontSize: '14px' }}
              onClick={handleContactClick}
            >
              {t('nav.plan')}
            </button>

            {/* Hamburger Button */}
            <button 
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ 
                display: 'none', 
                background: 'transparent', 
                border: 'none', 
                color: 'white', 
                fontSize: '24px',
                cursor: 'pointer',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ width: '25px', height: '2px', background: 'white', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : '' }}></div>
              <div style={{ width: '25px', height: '2px', background: 'white', opacity: isMobileMenuOpen ? 0 : 1 }}></div>
              <div style={{ width: '25px', height: '2px', background: 'white', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : '' }}></div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
