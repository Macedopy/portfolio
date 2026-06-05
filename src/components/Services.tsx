'use client';
import { useLanguage } from '@/context/LanguageContext';
import LogoLoop from './LogoLoop';

export default function Services() {
  const { t, setIsContactOpen } = useLanguage();

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const services = (t('services.items') as any).map((item: any, index: number) => {
    const icons = ['🌐', '📊', '💻', '🎨', '📈', '📷'];
    return {
      ...item,
      icon: icons[index]
    };
  });

  const techList = [
    "C#", ".NET Core", "Entity Framework", "Dapper", "Java", 
    "Spring Boot", "Node.js", "Express.js", "NestJS",
    "Python", "Flask", "FastAPI", "Django", "Golang",
    "React.js", "React Native", "Angular", "TypeScript", "Tailwind CSS",
    "PostgreSQL", "SQL Server", "MongoDB", "Redis", "AWS", 
    "Azure", "Docker", "Kubernetes", "Terraform",
    "RabbitMQ", "Kafka", "GraphQL", "gRPC"
  ];

  const getIconClass = (tech: string) => {
    const mapping: Record<string, string> = {
      "C#": "csharp-plain",
      ".NET Core": "dotnetcore-plain",
      "Entity Framework": "dot-net-plain",
      "Dapper": "dotnetcore-plain", // Dapper doesn't have a specific DevIcon, using .NET core as fallback
      "Java": "java-plain",
      "Spring Boot": "spring-plain",
      "Node.js": "nodejs-plain",
      "Express.js": "express-original",
      "NestJS": "nestjs-plain",
      "Python": "python-plain",
      "Flask": "flask-original",
      "FastAPI": "fastapi-plain",
      "Django": "django-plain",
      "Golang": "go-original-wordmark",
      "React.js": "react-original",
      "React Native": "react-original",
      "Angular": "angular-plain",
      "TypeScript": "typescript-plain",
      "Tailwind CSS": "tailwindcss-original",
      "PostgreSQL": "postgresql-plain",
      "SQL Server": "microsoftsqlserver-plain",
      "MongoDB": "mongodb-plain",
      "Redis": "redis-plain",
      "AWS": "amazonwebservices-plain-wordmark",
      "Azure": "azure-plain",
      "Docker": "docker-plain",
      "Kubernetes": "kubernetes-plain",
      "Terraform": "terraform-plain",
      "RabbitMQ": "rabbitmq-plain",
      "Kafka": "apachekafka-original",
      "GraphQL": "graphql-plain",
      "gRPC": "google-plain", // gRPC uses google icon as fallback
    };

    return mapping[tech] || `${tech.toLowerCase().replace(/[^a-z0-9]/g, '')}-plain`;
  };

  const techLogos = techList.map(tech => ({
    node: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '12px',
        padding: '10px'
      }}>
        <i className={`devicon-${getIconClass(tech)} colored`} style={{ fontSize: '40px' }}></i>
        <span style={{ 
          fontSize: '12px', 
          fontWeight: 600, 
          color: 'var(--secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>{tech}</span>
      </div>
    ),
    title: tech
  }));

  return (
    <section className="section-spacing">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            fontSize: '14px', 
            fontWeight: 700, 
            letterSpacing: '0.2em', 
            color: 'var(--secondary)',
            display: 'block',
            marginBottom: '16px'
          }}>{t('services.tag')}</span>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>{t('services.title')}</h2>
          <p style={{ color: 'var(--secondary)', maxWidth: '420px', margin: '0 auto' }}>
            {t('services.description')}
          </p>
        </div>

        <style jsx>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 64px;
          }
          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 600px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="services-grid">
          {services.map((service: any) => (
            <div key={service.title} style={{ 
              background: 'var(--card-bg)', 
              padding: '40px 24px', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ fontSize: '32px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{service.title}</h3>
              <div style={{ width: '30px', height: '2px', background: 'var(--accent-primary)' }}></div>
              <p style={{ fontSize: '14px', color: 'var(--secondary)', marginBottom: '16px' }}>
                {service.desc}
              </p>
              <button className="btn-secondary" style={{ fontSize: '12px', padding: '10px 18px' }} onClick={handleContactClick}>
                {t('services.btn.plan')} <span style={{ marginLeft: '4px' }}>→</span>
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', overflow: 'hidden' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '32px' }}>{t('services.tech.title')}</h3>
          <LogoLoop
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={80}
            gap={40}
            scaleOnHover
            fadeOut
          />
        </div>
      </div>
    </section>
  );
}
