import React from 'react';
import { Lock } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <img src="/loop.png" alt="LOOP" className="h-5 w-auto" />
      </div>
      <div className="flex items-center gap-2 text-green-700 text-xs font-medium rounded-full py-[2px] px-2 border border-green-500">
        <Lock size={14} className="text-green-700" />
        <span>Secure</span>
      </div>
    </header>
  );
};

export default Header;