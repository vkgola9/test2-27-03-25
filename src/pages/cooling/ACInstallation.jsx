import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import ListSection from '../../page_components/List';
import CTASection from '../../page_components/CTASection';
import acInstallationData from '../../content/pages/ac_installation.json';
import { useSettings } from '../../components/SettingsContext';

const ACInstallation = () => {
  const settings = useSettings();
  const [acData, setAcData] = useState(null);

  useEffect(() => {
    setAcData(acInstallationData);
  }, []);

  if (!acData) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={acData.title} />
      <Image src={acData.imgUrl} alt={acData.title} />

      {acData.sections.map((section, index) => (
        <ContentSection key={index} title={section.title}>
          {section.content ? (
            section.content.map((text, idx) => (
              <Para key={idx} text={text.replace("{settings.Company}", settings.Company)} />
            ))
          ) : (
            <ListSection steps={section.steps} />
          )}
        </ContentSection>
      ))}

      <CTASection title={acData.cta.title} description={acData.cta.description} buttonText={acData.cta.buttonText} buttonLink={acData.cta.buttonLink} />
    </Layout>
  );
};

export default ACInstallation;
