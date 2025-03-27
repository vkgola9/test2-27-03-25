import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-dark-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
