import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessState = ({ onDone }) => {
  return (
    <div className="text-center py-16">
      <div className="mb-8 mt-8">
        <CheckCircle className="mx-auto text-green-600 mb-6" size={64} />
        <h1 className="text-2xl font-semibold text-slate-900 font-noto mb-2">
          Verification Complete!
        </h1>
        <p className="text-slate-600 font-noto text-base">
          Your identity has been successfully verified
        </p>
      </div>

      <button
        onClick={onDone}
        className="px-8 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 font-noto font-medium transition-colors"
      >
        Done
      </button>
    </div>
  );
};

export default SuccessState;