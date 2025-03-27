import React from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import ListSection from '../../page_components/List';
import CTASection from '../../page_components/CTASection';
import CardCollection from '../../page_components/CardCollection';
import { useSettings } from '../../components/SettingsContext';
import data from '../../content/pages/emergency_heating_repairs.json';

const EmergencyHeatingRepairs = () => {
  const settings = useSettings();

  return (
    <Layout>
      <PageH1 title={data.title} />
      <Image src={data.image.src} alt={data.image.alt} />

      {data.sections.map((section, index) => (
        <ContentSection key={index} title={section.title} titleSize={section.titleSize} titleAlign={section.titleAlign}>
          {section.paragraphs && section.paragraphs.map((text, idx) => (
            <Para key={idx} text={text.replace("{settings.Company}", settings.Company)} />
          ))}
          {section.cards && (
            <CardCollection cardsPerRow="3" cardAlign="0" cardGap="6" cardTitleSize="1" cards={section.cards} />
          )}
          {section.list && <ListSection steps={section.list.map(item => ({ description: item }))} />}
        </ContentSection>
      ))}

      <CTASection title={data.callToAction.title} description={data.callToAction.description} buttonText={data.callToAction.buttonText} buttonLink={data.callToAction.buttonLink.replace("{settings.PhoneNo}", settings.PhoneNo)} />
    </Layout>
  );
};

export default EmergencyHeatingRepairs;
