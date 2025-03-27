import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = ({ company, subtitle, buttonText, phone, bgimg }) => (
  <section className="relative h-[90vh] bg-cover bg-center" style={{backgroundImage: `url(${bgimg})`}}>
    <div className="absolute inset-0 bg-light-black bg-opacity-50"></div>
    <div className="container mx-auto px-4 h-full flex items-center relative z-10">
      <div className="text-light-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">{company}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <div className="flex space-x-4">
          <Link to="/contact">
            <Button name="btnContact" size="lg" className="btn-gradient">{buttonText}</Button>
          </Link>
          <a href={`tel:${phone}`}>
            <Button name="btnPhone" size="lg" className="btn-gradient">
              <PhoneCall className="mr-2 h-4 w-4" />{phone}
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
