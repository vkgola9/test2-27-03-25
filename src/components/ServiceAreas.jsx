import React from 'react';
import { useSettings } from '../components/SettingsContext'; // Adjust the import path as necessary

const ServiceAreas = ({ sectionClassName, headingClassName, paragraphClassName }) => {
  const settings = useSettings();
  if (settings.ServiceAreas.length === 0) {
    return null; // Return null to not render anything if there are no areas
  }

  return (
    <section className={sectionClassName || "mt-12"}>
      <h2 className={headingClassName || "text-2xl font-semibold mb-8 gradient-text"}>Service Areas</h2>
      <p className={paragraphClassName || "mb-4 dark:text-gray-300"}>We proudly serve the following areas: &nbsp;</p>
      <div className="my-4 flex flex-wrap justify-center">
        {settingsServiceAreas.map((item, index) => (
          <span key={index} className="mx-2 my-1 p-2 border rounded shadow bg-indigo-100 dark:bg-indigo-900">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ServiceAreas;
