import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import CTASection from '../../page_components/CTASection';
import heatingServicesData from '../../content/pages/heating_services.json';

const HeatingServices = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    setServicesData(heatingServicesData);
  }, []);

  if (!servicesData) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={servicesData.title} />
      <Image src={servicesData.imgUrl} alt={servicesData.imgAlt} />

      {servicesData.sections.map((section, index) => (
        <ContentSection key={index} title={section.title} titleLink={section.titleLink}>
          {section.content.map((text, idx) => (
            <Para key={idx} text={text} />
          ))}
        </ContentSection>
      ))}

      <CTASection title={servicesData.cta.title} description={servicesData.cta.description} buttonText={servicesData.cta.buttonText} buttonLink={servicesData.cta.buttonLink} />
    </Layout>
  );
};

export default HeatingServices;
