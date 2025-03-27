import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import ListSection from '../../page_components/List';
import CTASection from '../../page_components/CTASection';
import CardCollection from '../../page_components/CardCollection';
import acRepairData from '../../content/pages/ac_repair.json';
import { useSettings } from '../../components/SettingsContext';

const ACRepair = () => {
  const settings = useSettings();
  const [repairData, setRepairData] = useState(null);

  useEffect(() => {
    setRepairData(acRepairData);
  }, []);

  if (!repairData) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={repairData.title} />
      <Image src={repairData.imgUrl} alt={repairData.title} />

      {repairData.sections.map((section, index) => (
        <ContentSection key={index} title={section.title}>
          {section.content ? (
            section.content.map((text, idx) => (
              <Para key={idx} text={text.replace("{settings.Company}", settings.Company)} />
            ))
          ) : section.steps ? (
            <ListSection steps={section.steps} />
          ) : section.cards ? (
            <CardCollection cards={section.cards} cardsPerRow={section.cards.length === 3 ? 3 : 2} cardAlign="0" cardGap="6" cardTitleSize={1} />
          ) : null}
        </ContentSection>
      ))}

      <CTASection title={repairData.cta.title} description={repairData.cta.description} buttonText={repairData.cta.buttonText} buttonLink={repairData.cta.buttonLink} />
    </Layout>
  );
};

export default ACRepair;
