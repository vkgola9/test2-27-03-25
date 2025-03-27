import React from 'react';
import { Link } from 'react-router-dom';
import Constants from '../lib/Constants';

const ContentSection = ({wrapContainer, title, titleSize = 3, titleAlign = 0, titleBold = 1, titleLink, children}) => {
  const sectionClass = wrapContainer !== "1" ? "mb-12" : "py-8 dark:bg-dark-900";
  const containerClass = wrapContainer === "1" ? "container mx-auto px-4" : "";
  const titleClass = `${Constants.sizeMap[titleSize] || "text-3xl"} ${Constants.boldMap[titleBold] || "font-semibold"} mb-8 ${Constants.alignMap[titleAlign] || ""} gradient-text`;

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        {titleLink ? (
          <Link to={titleLink}>
            <h2 className={titleClass}>{title}</h2>
          </Link>
        ) : (
          <h2 className={titleClass}>{title}</h2>
        )}
        <div className="text-lg mb-4 dark:text-dark-300">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;