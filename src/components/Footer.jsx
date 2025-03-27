import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from './SettingsContext';

const Footer = () => {
  const settings = useSettings();

  return (
    <footer className="bg-light-100 py-8 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{settings.Company}</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-accent transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/heating/services" className="hover:text-accent transition-colors">Heating Services</Link></li>
              <li><Link to="/cooling/services" className="hover:text-accent transition-colors">Cooling Services</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p>Email: <a href={"mailto:"+settings.Email} className="hover:text-accent transition-colors">{settings.Email}</a></p>
            <p>Phone: <a href={"tel:"+settings.PhoneNo} className="hover:text-accent transition-colors">{settings.PhoneNo}</a></p>
          </div>
        </div>
        {settings.IncludeMarketingWebsiteDisclaimer === 1 && (
            <div className="mt-8 text-center">
              <p>This is a 3rd party website, we do not perform the work itself but are merely a marketing website for {settings.Company}.</p>
            </div>
        )}
        {settings.IncludeMarketingWebsiteDisclaimer === 0 && (
          <div className="mt-8 text-center">
            <p>&copy; {settings.Year} {settings.Company}{settings.IncludeCreatedBy === 1 && (
              <span>, designed by <span className="font-semibold text-light-500 hover:text-accent transition-colors">
                <a href={`${settings.MyCompanyURL}`} target="_blank">{settings.MyCompany}</a></span>
              </span>)}. All rights reserved.</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
