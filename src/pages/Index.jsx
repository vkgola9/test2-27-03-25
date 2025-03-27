import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceAreas from '../components/ServiceAreas';
import { useSettings } from '../components/SettingsContext';

import HeroSection from '../page_components/HeroSection';
import OurServicesSection from '../page_components/OurServicesSection';
import WhyChooseUsSection from '../page_components/WhyChooseUsSection';
import TestimonialsSection from '../page_components/TestimonialsSection';
import CTASection from '../page_components/CTASection';
import data from '../content/pages/index.json';

const Index = () => {
  const settings = useSettings();

  return (
    <div className="min-h-screen flex flex-col dark:bg-dark-900">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection company={settings.Title ? settings.Title : settings.Company} subtitle={data.heroSection.subtitle} buttonText={data.heroSection.buttonText} phone={settings.PhoneNo} bgimg={data.heroSection.bgimg}/>

        {/* Services Section */}
        <OurServicesSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection company={settings.Company} />

        {/* Testimonials Section */}
        {settings.IncludeTestimonials === 1 && (
          <TestimonialsSection company={settings.Company} />
        )}

        {/* Service Areas Section */}
        <ServiceAreas />

        {/* CTA Section */}
        <CTASection title={data.ctaSection.title} description={data.ctaSection.description} buttonText={data.ctaSection.buttonText} 
          buttonLink={data.ctaSection.buttonLink} sectionClass={data.ctaSection.sectionClass}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
