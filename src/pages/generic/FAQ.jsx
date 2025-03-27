import React, { useState, useEffect } from 'react';
import Layout from '../../page_components/Layout';
import PageH1 from '../../page_components/PageH1';
import Image from '../../page_components/Image';
import ContentSection from '../../page_components/ContentSection';
import CTASection from '../../page_components/CTASection';
import List from '../../page_components/List';
import faqData from '../../content/pages/faq.json';

const FAQ = () => {
  const [openSections, setOpenSections] = useState({});
  const [faqItems, setFaqItems] = useState(null);

  useEffect(() => {
    setFaqItems(faqData); // Load data from JSON file
  }, []);

  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (!faqItems) return null; // Prevents render until data is loaded

  return (
    <Layout>
      <PageH1 title={faqItems.title} enableCityInH1={false} />
      
      <Image src={faqData.imgUrl} alt={faqItems.title} width={1920} height={352} />

      <ContentSection title="" titleSize={3} titleAlign={1}>
        <List disableStyle="1" steps={faqItems.items.map((item, index) => ({
            description: (
              <div>
                <h2 className="text-xl font-semibold mb-2 dark:text-dark-white cursor-pointer" onClick={() => toggleSection(index)}>
                  {openSections[index] ? '- ' : '+ '} {item.question}
                </h2>
                {openSections[index] && (
                  <p className="text-m mb-4 dark:text-dark-300">
                    {item.answer}
                  </p>
                )}
              </div>
            ),
          }))}
        />
      </ContentSection>

      <CTASection title={faqItems.cta.title} description={faqItems.cta.description} buttonText={faqItems.cta.buttonText} buttonLink={faqItems.cta.buttonLink} />
    </Layout>
  );
};

export default FAQ;
