'use client';

import Navbar from '@/components/Navbar';
import MainContent from '@/components/MainContent';
import Specialities from '@/components/Specialities';
import WorkProcess from '@/components/WorkProcess';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Grid helper background */}
      <div className="bg-grid">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-grid-col"></div>
        ))}
      </div>

      <Navbar />
      
      <main>
        <MainContent />
        <Specialities />
        <Services />
        <Portfolio />
        <WorkProcess />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
