import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection = ({ title, description, buttonText, buttonLink, sectionClass }) => (
  <section className={sectionClass || "mt-12 text-center"}>
    <h2 className="text-4xl font-semibold mb-4 gradient-text">{title}</h2>
    <p className="text-xl mb-4 text-center dark:text-dark-300">{description}</p>
    <div className="text-center">
      <Link to={buttonLink}>
        <Button name="btnCtaAction" size="lg" className="btn-gradient">{buttonText}</Button>
      </Link>
    </div>
  </section>
);

export default CTASection;
