import React, { useState } from 'react';
import { PhoneCall, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from "@/components/ui/button";
import NavMenu from './NavMenu.jsx'; // Import the NavMenu component
import { useSettings } from './SettingsContext';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false); // State to handle mobile menu visibility
  const settings = useSettings();

  return (
    <header className="py px-1 bg-light-white dark:bg-dark-800 dark:text-light-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo on the left */}
        <a href="/" className="flex items-center space-x-6 mr-6">
          <img src={theme === 'dark' ? '/img/logod.webp' : '/img/logod.webp'} alt="logo" width="97" height="43" />
        </a>

        {/* Right-aligned section for desktop menu and theme toggle */}
        <div className="flex items-center space-x-2">
          {/* Phone Number - common for both mobile and desktop */}
          <div className="flex items-center">
            <span className="mr-2 font-semibold text-light-500"/>
            <a href={`tel:${settings.PhoneNo}`} 
              className="font-bold text-light-textr-500 hover:text-light-textr-900 transition-colors">
              <PhoneCall className="inline-block mr-2" size={20} />{settings.PhoneNo}
            </a>
            <span className="mr-2 font-semibold text-light-500"/>
          </div>
          {/* Desktop Menu */}
          <NavMenu isMobile={false} />  {/* For Desktop */}

          {/* Hamburger Icon (Visible on Mobile) */}

          <button name="toggleMenu" className="block lg:hidden" onClick={() => setMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"} >
            {isMenuOpen ? 
              (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6L18 18M6 18L18 6" />
              </svg>) : 
              (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>)}
          </button>

          {/* Theme Toggle Button */}
          <Button name="toggleTheme" variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className={`absolute left-0 top-full w-full bg-light-white dark:bg-dark-800 p-4 z-40 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full' }`} >
            <NavMenu isMobile={true} />  {/* For Mobile */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
