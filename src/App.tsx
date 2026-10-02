import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ProductGrades } from './components/ProductGrades';
import { QualitySection } from './components/QualitySection';
import { ManufacturingProcess } from './components/ManufacturingProcess';
import { CashewAnatomyStory } from './components/CashewAnatomyStory';
import { GlobalReach } from './components/GlobalReach';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QualityStandards } from './components/QualityStandards';
import { Gallery } from './components/Gallery';
import { BuyerCTA } from './components/BuyerCTA';
import { ContactSection } from './components/ContactSection';
import { ExportFAQ } from './components/ExportFAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('W-180');

  const handleSelectGrade = (gradeCode: string) => {
    setSelectedGrade(gradeCode);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const navOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F2] text-[#1C1917] selection:bg-amber-200 selection:text-amber-950 font-sans antialiased overflow-x-hidden">
      {/* 1. Navigation Bar with sticky scroll glassmorphism & mobile drawer */}
      <Navbar />

      {/* 2. Main Narrative Export Experience */}
      <main className="relative z-10">
        {/* Section 1: Command Hero with 16:9 Cinema Player, Exporter Profile & Visiting Card Modal */}
        <HeroSection />

        {/* Section 2: Qualitative Trust Bar */}
        <TrustBar />

        {/* Section 3: About SVCM, Single-Origin Terroir & Factory Heritage */}
        <AboutSection />

        {/* Section 4: Export Grades Showcase with Quick-View Technical Specification Modal */}
        <ProductGrades onSelectGrade={handleSelectGrade} />

        {/* Section 5: Six-Stage Quality Journey */}
        <QualitySection />

        {/* Section 6: Manufacturing Process Timeline with Real Factory Photography */}
        <ManufacturingProcess />

        {/* Section 7: Cashew Anatomy Story with Interactive Layer Selector */}
        <CashewAnatomyStory />

        {/* Section 8: Global Reach, Deepwater Port Logistics & Container Specifications */}
        <GlobalReach />

        {/* Section 9: Why Choose SVCM — 6 Grounded Commercial Advantages */}
        <WhyChooseUs />

        {/* Section 10: Quality Standards, APEDA & Phytosanitary Compliance */}
        <QualityStandards />

        {/* Section 11: Photographic Archive & Filterable Processing Lightbox */}
        <Gallery />

        {/* Section 12: High-Converting B2B Buyer Call-to-Action Banner */}
        <BuyerCTA />

        {/* Section 13: Export RFQ Desk & Validated Commercial Quotation Form */}
        <ContactSection selectedGrade={selectedGrade} />

        {/* Section 14: Frequently Asked Questions Accordion */}
        <ExportFAQ />
      </main>

      {/* Section 15: Corporate Factory Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Direct Conversion Widget */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
