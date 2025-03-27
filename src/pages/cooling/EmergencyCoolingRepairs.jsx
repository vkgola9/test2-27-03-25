import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import ListSection from '../../page_components/List';
import CTASection from '../../page_components/CTASection';
import CardCollection from '../../page_components/CardCollection';
import emergencyRepairsData from '../../content/pages/emergency_cooling_repairs.json';
import { useSettings } from '../../components/SettingsContext';

const EmergencyCoolingRepairs = () => {
  const settings = useSettings();
  const [repairsData, setRepairsData] = useState(null);

  useEffect(() => {
    setRepairsData(emergencyRepairsData);
  }, []);

  if (!repairsData) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={repairsData.title} />
      <Image src={repairsData.imgUrl} alt={repairsData.imgAlt} />

      <ContentSection title={repairsData.mainSection.title}>
        <>
          {repairsData.mainSection.content.map((text, idx) => (
            <Para key={idx} text={text.replace('{Company}', settings.Company)} />
          ))}
        </>
      </ContentSection>

      {repairsData.sections.map((section, index) => (
        <ContentSection key={index} title={section.title} titleSize={section.titleSize} titleAlign={section.titleAlign}>
          {section.type === 'cards' ? (
            <CardCollection cardsPerRow={section.cardsPerRow} cardAlign={section.cardAlign} cardGap={section.cardGap} cardTitleSize={section.cardTitleSize} cards={section.cards} />
          ) : (
            <ListSection steps={section.steps} />
          )}
        </ContentSection>
      ))}

      <CTASection title={repairsData.cta.title} description={repairsData.cta.description} buttonText={repairsData.cta.buttonText} buttonLink={"tel:" + settings.PhoneNo} />
    </Layout>
  );
};

export default EmergencyCoolingRepairs;
