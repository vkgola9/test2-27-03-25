import React from 'react';
import { ThumbsUp, Award, Clock, PhoneCall } from 'lucide-react';
import CardCollection from './CardCollection';
import ContentSection from './ContentSection';
import why_choose_reasons from '../content/pages/why_choose_reasons.json';

const iconMap = {
  ThumbsUp: <ThumbsUp className="mx-auto mb-4 h-12 w-12" />, Award: <Award className="mx-auto mb-4 h-12 w-12" />,
  Clock: <Clock className="mx-auto mb-4 h-12 w-12" />, PhoneCall: <PhoneCall className="mx-auto mb-4 h-12 w-12" />
};

const WhyChooseUsSection = ({ company }) => (
  <ContentSection wrapContainer="1" title={`Why Choose ${company}?`} titleSize="4" titleAlign="1" titleBold="2" >
    <CardCollection cardsPerRow="4" cardAlign="1" cardGap="8" cardTitleBold="1" cardTitleSize="1" cards={why_choose_reasons} />
  </ContentSection>
);

export default WhyChooseUsSection;
