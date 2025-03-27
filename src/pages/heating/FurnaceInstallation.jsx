import React from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import Para from '../../page_components/Para';
import List from '../../page_components/List';
import CTASection from '../../page_components/CTASection';
import { useSettings } from '../../components/SettingsContext';
import data from '../../content/pages/furnace_installation.json';

const FurnaceInstallation = () => {
  const settings = useSettings();

  return (
    <Layout>
      <PageH1 title={data.title} />
      <Image src={data.image.src} alt={data.image.alt} />

      {data.sections.map((section, index) => (
        <ContentSection key={index} title={section.title}>
          {section.paragraphs && section.paragraphs.map((text, idx) => (
            <Para key={idx} text={text.replace("{settings.Company}", settings.Company)} />
          ))}
          {section.list && (
            <List steps={section.list.map((step) => (
              step.item
                ? { item: step.item, description: step.description }
                : { description: step.description }
            ))} />
          )}
        </ContentSection>
      ))}

      <CTASection 
        title={data.callToAction.title}
        description={data.callToAction.description}
        buttonText={data.callToAction.buttonText}
        buttonLink={data.callToAction.buttonLink}
      />
    </Layout>
  );
};

export default FurnaceInstallation;
