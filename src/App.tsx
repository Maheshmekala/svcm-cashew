import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofMetrics } from './components/SocialProofMetrics';
import { ProcessingJourney } from './components/ProcessingJourney';
import { ExportGrades } from './components/ExportGrades';
import { ExportInquiry } from './components/ExportInquiry';
import { ExportFAQ } from './components/ExportFAQ';
import { CrosscutLoupeModal } from './components/CrosscutLoupeModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { CashewScrollEngine } from './components/CashewScrollEngine';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'crosscut' | 'loupe' | 'video'>('crosscut');
  const [selectedGrade, setSelectedGrade] = useState<string>('W-180');

  const handleOpenModal = (tab: 'crosscut' | 'loupe' | 'video') => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleSelectGrade = (gradeCode: string) => {
    setSelectedGrade(gradeCode);
    const inquiryEl = document.getElementById('inquiry');
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#faf8f2] text-[#1c1917] selection:bg-amber-200 selection:text-amber-950 font-sans antialiased overflow-x-hidden">
      {/* 1. Full-Page Botanical Motion Scroll Engine (Runs throughout entire page synchronized with scroll) */}
      <CashewScrollEngine onOpenModal={handleOpenModal} />

      {/* 2. Top Navigation Bar (Anatomy tab cleanly removed as requested) */}
      <Navbar />

      {/* 3. Main Narrative & Commercial Export Content */}
      <main className="relative z-10">
        {/* Section 1: Command Hero Origin, Editorial Headline, Trust Strip & Exporter Card */}
        <HeroSection />

        {/* Section 2: Global Export Provenance & Authority Metrics (21st.dev Style) */}
        <div id="metrics">
          <SocialProofMetrics />
        </div>

        {/* Section 3: Vetapalem 4-Pillar Processing Refinery Standard */}
        <div id="processing">
          <ProcessingJourney onOpenModal={handleOpenModal} />
        </div>

        {/* Section 5: Commercial Export Grades Matrix (W-180 King to W-320) */}
        <div id="export-grades" className="pt-8 sm:pt-12">
          <ExportGrades onSelectGrade={handleSelectGrade} />
        </div>

        {/* Section 6: Live Export RFQ Container Calculator & WhatsApp Generator */}
        <div id="inquiry" className="pt-8 sm:pt-12">
          <ExportInquiry selectedGrade={selectedGrade} />
        </div>

        {/* Section 7: Interactive Commercial FAQ with Framer Motion Accordion */}
        <div id="faq" className="pt-8 sm:pt-12 pb-16">
          <ExportFAQ />
        </div>
      </main>

      {/* 4. Official Factory & Corporate Footer */}
      <Footer />

      {/* 5. Interactive Crosscut, Macro Loupe & Botanical Cinema Modal */}
      <CrosscutLoupeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />

      {/* 6. Persistent Floating WhatsApp Direct Conversion Widget */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
