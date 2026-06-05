'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';

type Language = 'pt' | 'en';
type Locale = 'br' | 'us';

interface LanguageContextType {
  language: Language;
  locale: Locale;
  setLanguage: (lang: Language) => void;
  setLocale: (loc: Locale) => void;
  t: (key: string) => any;
  isContactOpen: boolean;
  setIsContactOpen: (open: boolean) => void;
}

const localeToLang: Record<Locale, Language> = {
  br: 'pt',
  us: 'en',
};

const langToLocale: Record<Language, Locale> = {
  pt: 'br',
  en: 'us',
};

const translations: any = {
  pt: {
    'nav.home': 'Home',
    'nav.service': 'Serviço',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contato',
    'nav.plan': 'Planejar projeto',
    'modal.contact.title': 'Vamos conversar?',
    'modal.contact.subtitle': 'Escolha sua plataforma preferida.',
    'modal.contact.close': 'Fechar',
    'hero.title': 'Precisa de uma solução digital?',
    'hero.subtitle': 'Bruno Macedo Lemos',
    'hero.description': 'A entrega é garantida, profissional focado em desenvolver soluções digitais que impactam o negócio transformando em produtos rentáveis, sua aplicação ganhará destaque no mercado.',
    'hero.btn.plan': 'Planejar Projeto',
    'hero.btn.contact': 'Entrar em contato',
    'hero.btn.view': 'View Portfolios',
    'eng.software': 'Engenheiro de Software',
    'specialities.tag': 'Serviço',
    'specialities.title': 'Especialidades',
    'specialities.description': 'Com uma abordagem centrada no cliente e em seu negócio, aprofundo sobre as suas necessidades e objetivos de cada projeto para entregar soluções personalizadas e eficazes.',
    'specialities.items': [
      {
        title: 'Desenvolvimento de soluções de software',
        description: 'Realizo o desenvolvimento e o suporte de implementações tecnológicas, utilizando as melhores práticas de engenharia de software para garantir a qualidade e a eficiência dos sistemas.'
      },
      {
        title: 'Cloud & Arquitetura de sistemas',
        description: 'Especializado em arquiteturas escaláveis e resilientes, utilizando serviços de nuvem ou On-Premisses para garantir alta disponibilidade, segurança e desempenho dos sistemas.'
      },
      {
        title: 'Anúncios e estratégias de marketing digital',
        description: 'Auxilio na criação e execução de campanhas de marketing digital, utilizando estratégias eficazes para alcançar o público-alvo e promover os produtos ou serviços de forma impactante.'
      }
    ],
    'services.tag': 'SERVIÇOS',
    'services.title': 'Outros serviços.',
    'services.description': 'Auxilio na criação e execução de campanhas de marketing digital, utilizando estratégias eficazes para alcançar o público-alvo e promover os produtos ou serviços de forma impactante.',
    'services.items': [
      { title: 'Anúncios e estratégias de marketing digital', desc: 'Auxilio na criação e execução de campanhas de marketing digital, utilizando estratégias eficazes para alcançar o público-alvo e promover os produtos ou serviços de forma impactante.' },
      { title: 'Criações de Dashboards e BI personalizados ', desc: 'Desenvolvimento de dashboards e soluções de business intelligence personalizadas para facilitar a tomada de decisão com base em dados analíticos.' },
      { title: 'UI & UX Design, ', desc: 'Criação de experiências de usuário intuitivas e interfaces gráficas atraentes para aplicativos e sites.' },
      { title: 'Soluções criativas', desc: 'Desenvolvimento de soluções criativas para problemas complexos, combinando arte e tecnologia.' },
      { title: 'Soluções de marketing', desc: 'Estratégias e implementações de marketing para impulsionar o crescimento do negócio.' },
      { title: 'Design', desc: 'Utilizando arte e técnicas avançadas para identificar a necessidade do cliente, aplico design intuitivo e visual.' }
    ],
    'services.btn.plan': 'Planejar projeto',
    'services.tech.title': 'Minhas Tecnologias',
    'portfolio.tag': 'PORTFÓLIO',
    'portfolio.title': 'Meus Projetos',
    'portfolio.description': 'Uma seleção de alguns dos meus trabalhos recentes, demonstrando minha experiência em desenvolvimento e design.',
    'process.title': 'Processo de trabalho',
    'process.description': 'Um processo estruturado para garantir a melhor entrega e o sucesso do seu projeto.',
    'process.steps': [
      'Entendimento do negócio',
      'Definição de requisitos',
      'Prototipação',
      'Criação de um MVP (Minimum Viable Product)',
      'Testes',
      'Acabamentos e entrega de produto pronto'
    ],
    'faq.title': 'Perguntas Frequentes',
    'faq.items': [
      {
        question: 'Quanto custa um projeto?',
        answer: 'O custo varia dependendo da complexidade e dos requisitos. Entre em contato para um orçamento personalizado.'
      },
      {
        question: 'Qual o tempo de entrega?',
        answer: 'O prazo depende do escopo, mas geralmente um MVP leva de 4 a 8 semanas.'
      },
      {
        question: 'Você oferece manutenção?',
        answer: 'Sim, ofereço planos de manutenção e suporte contínuo para garantir que sua aplicação continue rodando perfeitamente.'
      },
      {
        question: 'Quais ferramentas você usa?',
        answer: 'Utilizo Figma para design e tecnologias como React, Next.js e Node.js para desenvolvimento.'
      }
    ],
    'footer.col1.title': 'Engenheiro de Software',
    'footer.col1.desc': 'Especialista em criar soluções digitais que unem design intuitivo e tecnologia de ponta para impactar negócios.',
    'footer.col4.title': 'Contatos',
    'footer.rights': 'Todos os direitos reservados',
    'trust.by': 'Confiado por',
    'trust.by.desc': 'Líderes globais da indústria que confiaram em minha experiência'
  },
  en: {
    'nav.home': 'Home',
    'nav.service': 'Service',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.plan': 'Plan project',
    'modal.contact.title': 'Let\'s talk?',
    'modal.contact.subtitle': 'Choose your preferred platform.',
    'modal.contact.close': 'Close',
    'hero.title': 'Need a digital solution?',
    'hero.subtitle': 'Bruno Macedo Lemos',
    'hero.description': 'Delivery is guaranteed, a professional focused on developing digital solutions that impact the business, transforming them into profitable products, your application will stand out in the market.',
    'hero.btn.plan': 'Plan Project',
    'hero.btn.contact': 'Get in touch',
    'hero.btn.view': 'View Portfolios',
    'eng.software': 'Software Engineer',
    'specialities.tag': 'Service',
    'specialities.title': 'Specialties',
    'specialities.description': 'With a client-centered approach focused on your business, I dive deep into the needs and goals of each project to deliver customized and effective solutions.',
    'specialities.items': [
      {
        title: 'Software Solutions Development',
        description: 'I perform the development and support of technological implementations, using software engineering best practices to ensure system quality and efficiency.'
      },
      {
        title: 'Cloud & System Architecture',
        description: 'Specialized in scalable and resilient architectures, using cloud services or On-Premises to ensure high availability, security, and system performance.'
      },
      {
        title: 'Ads and Digital Marketing Strategies',
        description: 'I assist in the creation and execution of digital marketing campaigns, using effective strategies to reach the target audience and promote products or services impactfully.'
      }
    ],
    'services.tag': 'SERVICES',
    'services.title': 'Other services.',
    'services.description': 'I assist in the creation and execution of digital marketing campaigns, using effective strategies to reach the target audience and promote products or services impactfully.',
    'services.items': [
      { title: 'Ads and Digital Marketing Strategies', desc: 'I assist in the creation and execution of digital marketing campaigns, using effective strategies to reach the target audience and promote products or services impactfully.' },
      { title: 'Custom Dashboards and BI Creations', desc: 'Development of custom dashboards and business intelligence solutions to facilitate data-driven decision making.' },
      { title: 'UI & UX Design', desc: 'Creation of intuitive user experiences and attractive graphic interfaces for applications and websites.' },
      { title: 'Creative solutions', desc: 'Development of creative solutions for complex problems, combining art and technology.' },
      { title: 'Marketing solutions', desc: 'Marketing strategies and implementations to drive business growth.' },
      { title: 'Design', desc: 'Using art and advanced techniques to identify client needs, I apply intuitive and visual design.' }
    ],
    'services.btn.plan': 'Plan project',
    'services.tech.title': 'My Technologies',
    'portfolio.tag': 'PORTFOLIO',
    'portfolio.title': 'My Projects',
    'portfolio.description': 'A selection of some of my recent work, demonstrating my experience in development and design.',
    'process.title': 'Work Process',
    'process.description': 'A structured process to ensure the best delivery and success of your project.',
    'process.steps': [
      'Business understanding',
      'Requirements definition',
      'Prototyping',
      'MVP creation (Minimum Viable Product)',
      'Testing',
      'Finishing and delivery of ready product'
    ],
    'faq.title': 'Frequently Asked Questions',
    'faq.items': [
      {
        question: 'How much does a project cost?',
        answer: 'The cost varies depending on complexity and requirements. Contact me for a custom quote.'
      },
      {
        question: 'What is the turnaround time?',
        answer: 'The timeframe depends on the scope, but typically an MVP takes 4 to 8 weeks.'
      },
      {
        question: 'Do you offer maintenance?',
        answer: 'Yes, I offer maintenance plans and ongoing support to ensure your application continues running perfectly.'
      },
      {
        question: 'Which tools do you use?',
        answer: 'I use Figma for design and technologies like React, Next.js, and Node.js for development.'
      }
    ],
    'footer.col1.title': 'Software Engineer',
    'footer.col1.desc': 'Specialist in creating digital solutions that combine intuitive design and cutting-edge technology to impact businesses.',
    'footer.col4.title': 'Contacts',
    'footer.rights': 'All Rights Reserved',
    'trust.by': 'Trusted by',
    'trust.by.desc': 'Global industry leaders that have trusted my expertise'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const initialLocale = (params?.lang as Locale) || 'br';
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [language, setLanguageState] = useState<Language>(localeToLang[initialLocale] || 'pt');
  
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (params?.lang && params.lang !== locale) {
      const newLocale = params.lang as Locale;
      if (localeToLang[newLocale]) {
        setLocaleState(newLocale);
        setLanguageState(localeToLang[newLocale]);
      }
    }
  }, [params?.lang, locale]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    // Replace the locale in the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    router.push(newPath);
  };

  const setLanguage = (newLang: Language) => {
    setLocale(langToLocale[newLang]);
  };

  const t = (key: string) => {
    const langData = translations[language];
    
    if (langData[key] !== undefined) {
      return langData[key];
    }

    const keys = key.split('.');
    let value: any = langData;
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, locale, setLanguage, setLocale, t, isContactOpen, setIsContactOpen }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
