import React from 'react';
import { useSettings } from '../components/SettingsContext';

const PageH1 = ({ title, enableCityInH1 = true }) => {
  const settings = useSettings();

  return (
    <h1 className="text-4xl font-bold mb-6 gradient-text">{ enableCityInH1 ? `${settings.City} ${title}`: `${title}`}</h1>
  );
}

export default PageH1;
