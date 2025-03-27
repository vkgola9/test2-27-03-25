import React, { createContext, useContext, useState } from 'react';
import settings from '../../settings/settings.json'; // Importing settings synchronously

const SettingsContext = createContext(settings);

export const SettingsProvider = ({ children }) => {
  // Directly setting settingsData with the imported settings
  const [settingsData] = useState(settings);

  return (
    <SettingsContext.Provider value={settingsData}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  
  return context; // Returning the settings data
};
