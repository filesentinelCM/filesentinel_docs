import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
// import { InteractiveScanner } from './components/InteractiveScanner';
import { FeaturesBento } from './components/FeaturesBento';
import { WhyFileSentinel } from './components/WhyFileSentinel';
import { OpenSourceLicense } from './components/OpenSourceLicense';
// import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export default function App() {
  const [academicModalOpen, setAcademicModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [proModalOpen, setProModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        onOpenAcademicModal={() => setAcademicModalOpen(true)}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
        onOpenProModal={() => setProModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner with Sync Simulator */}
        <Hero
          onOpenAcademicModal={() => setAcademicModalOpen(true)}
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
          onOpenProModal={() => setProModalOpen(true)}
        />

        {/* Social Proof & Metrics Badges Ticker */}
        {/* <TrustTicker /> */}

        {/* Interactive Folder Sync Playground */}
        {/* <div id="simulator">
          <InteractiveScanner />
        </div> */}

        {/* Core Capabilities Bento Grid */}
        <FeaturesBento />

        {/* Why FileSentinel / Problem vs Solution Comparison */}
        <WhyFileSentinel
          onOpenAcademicModal={() => setAcademicModalOpen(true)}
          onOpenProModal={() => setProModalOpen(true)}
        />

        {/* Open Source & BSL 1.1 License Model */}
        <OpenSourceLicense
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
        />

        {/* Transparent Academic & Pro Pricing */}
        {/* <Pricing
          onOpenAcademicModal={() => setAcademicModalOpen(true)}
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
          onOpenProModal={() => setProModalOpen(true)}
        /> */}

        {/* Verified User Stories */}
        {/* <Testimonials /> */}

        {/* Searchable FAQ Accordion */}
        <FAQSection />

        {/* Conversion CTA Banner */}
        <CtaBanner
          onOpenAcademicModal={() => setAcademicModalOpen(true)}
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAcademicModal={() => setAcademicModalOpen(true)}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
      />

      {/* Interactive Modals */}
      <Modals
        academicOpen={academicModalOpen}
        downloadOpen={downloadModalOpen}
        proOpen={proModalOpen}
        onCloseAcademic={() => setAcademicModalOpen(false)}
        onCloseDownload={() => setDownloadModalOpen(false)}
        onClosePro={() => setProModalOpen(false)}
      />

    </div>
  );
}
