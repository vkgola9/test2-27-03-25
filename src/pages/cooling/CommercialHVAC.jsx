import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import ListSection from '../../page_components/List';
import CTASection from '../../page_components/CTASection';
import CardCollection from '../../page_components/CardCollection';
import commercialHvacData from '../../content/pages/commercial_hvac.json';
import { useSettings } from '../../components/SettingsContext';

const CommercialHVAC = () => {
  const settings = useSettings();
  const [hvacData, setHvacData] = useState(null);

  useEffect(() => {
    setHvacData(commercialHvacData);
  }, []);

  if (!hvacData) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={hvacData.title} />
      <Image src={hvacData.imgUrl} alt={hvacData.title} />

      {hvacData.sections.map((section, index) => (
        <ContentSection key={index} title={section.title} titleSize={section.titleSize} titleAlign={section.titleAlign}>
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

      <CTASection title={hvacData.cta.title} description={hvacData.cta.description} buttonText={hvacData.cta.buttonText} buttonLink={hvacData.cta.buttonLink} />
    </Layout>
  );
};

export default CommercialHVAC;
