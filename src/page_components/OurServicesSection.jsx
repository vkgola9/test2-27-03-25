import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import servicesData from '../content/pages/our_services.json';

const OurServicesSection = () => (
  <section className="py-8 bg-light-100 dark:bg-dark-800">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {servicesData.services.map(({ title, link, items }) => (
          <Card className="card-hover dark:bg-dark-700" key={title}>
            <CardContent className="p-6">
              <Link to={link}>
                <h3 className="text-2xl font-semibold mb-4 text-light-600 dark:text-dark-white">{title}</h3>
              </Link>
              <ul className="list-disc list-inside mb-4 dark:text-dark-300">
                {items.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
              <Link to={link}>
                <Button name="btnLearnServices" className="btn-gradient">Learn More About Our {title}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default OurServicesSection;
