import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import ListSection from '../../page_components/List';
import CTASection from '../../page_components/CTASection';
import CardCollection from '../../page_components/CardCollection';
import ductlessSystemsData from '../../content/pages/ductless_systems.json';
import { useSettings } from '../../components/SettingsContext';

const DuctlessSystems = () => {
  const settings = useSettings();
  const [ductlessData, setDuctlessData] = useState(null);

  useEffect(() => {
    setDuctlessData(ductlessSystemsData);
  }, []);

  if (!ductlessData) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={ductlessData.title} />
      <Image src={ductlessData.imgUrl} alt={ductlessData.title} />

      <ContentSection title={ductlessData.mainSection.title}>
        <>
          {ductlessData.mainSection.content.map((text, idx) => (
            <Para key={idx} text={text.replace('{Company}', settings.Company)} />
          ))}
        </>
      </ContentSection>

      {ductlessData.sections.map((section, index) => (
        <ContentSection key={index} title={section.title} titleSize={section.titleSize} titleAlign={section.titleAlign}>
          {section.type === 'cards' ? (
            <CardCollection cardsPerRow={section.cardsPerRow} cardAlign={section.cardAlign} cardGap={section.cardGap} cardTitleSize={section.cardTitleSize} cards={section.cards} />
          ) : (
            <ListSection steps={section.steps} />
          )}
        </ContentSection>
      ))}

      <CTASection title={ductlessData.cta.title} description={ductlessData.cta.description} buttonText={ductlessData.cta.buttonText} buttonLink={ductlessData.cta.buttonLink} />
    </Layout>
  );
};

export default DuctlessSystems;
