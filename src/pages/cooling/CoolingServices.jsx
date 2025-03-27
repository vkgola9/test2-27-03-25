import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import CTASection from '../../page_components/CTASection';
import coolingServicesData from '../../content/pages/cooling_services.json';

const CoolingServices = () => {
  const [coolingData, setCoolingData] = useState(null);

  useEffect(() => {
    setCoolingData(coolingServicesData);
  }, []);

  if (!coolingData) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={coolingData.title} />
      <Image src={coolingData.imgUrl} alt={coolingData.title} />

      {coolingData.sections.map((section, index) => (
        <ContentSection key={index} title={section.title} titleLink={section.titleLink}>
          {section.content.map((text, idx) => (
            <Para key={idx} text={text} />
          ))}
        </ContentSection>
      ))}

      <CTASection title={coolingData.cta.title} description={coolingData.cta.description} buttonText={coolingData.cta.buttonText} buttonLink={coolingData.cta.buttonLink} />
    </Layout>
  );
};

export default CoolingServices;
