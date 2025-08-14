import React from 'react';
import Header from './Header';

const Layout = ({ children, showHeader = true }) => {
  return (
    <div className="min-h-screen bg-white font-noto">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {showHeader && <Header />}
        
        {/* Main Content */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;