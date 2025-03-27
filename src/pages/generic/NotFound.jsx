// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/page_components/Layout'; // Import your Layout component
import PageH1 from '@/page_components/PageH1'; // Import PageH1 for the main header

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <PageH1 title="404 - Page Not Found" />
        <p className="text-lg mb-6 text-center">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
