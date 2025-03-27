import React from 'react';
import { PhoneCall, ThumbsUp, Award, Clock, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ContentSection from './ContentSection';
import testimonials from '../content/pages/testimonials.json';

const TestimonialsSection = ({ company }) => (
  <ContentSection wrapContainer="1" title="What Our Customers Say" titleSize="4" titleAlign="1" titleBold="2" >
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map(({ text, author }, index) => (
        <Card className="card-hover dark:bg-dark-700" key={index}>
          <CardContent className="p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, idx) => (
                <Star className="text-light-star-400" fill="currentColor" key={idx} />
              ))}
            </div>
            <p className="mb-4 dark:text-dark-300">"{text.replace('{company}', company)}"</p>
            <p className="font-semibold dark:text-dark-white">- {author}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </ContentSection>
);

export default TestimonialsSection;
