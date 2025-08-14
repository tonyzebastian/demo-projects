import React from 'react';

const Welcome = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-8">
      {/* Logo */}
      <div className="mb-6">
        <img src="/loop.png" alt="LOOP" className="h-10 w-auto mx-auto" />
      </div>

      {/* Welcome Message */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 font-noto">
        Supercharge your existing KYC with e-IDs
        </h1>
        <p className="text-base text-slate-700 max-w-2xl mx-auto font-noto">
        Add government-issued digital IDs, identity wallets and Bank IDs to your existing KYC/AML & KYB infrastructure. No manual checks. No deep-fakes or forged documents. Customise your onboarding without the need of IT, using our modular workflow architecture.
        </p>
      </div>

      {/* Get Started Button */}
      <button
        onClick={onGetStarted}
        className="bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 transition-colors font-noto"
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;