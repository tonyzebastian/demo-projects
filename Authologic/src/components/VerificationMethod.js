import React from 'react';
import { ArrowLeft, CreditCard, Shield, Lightbulb, Smartphone, Building2, Building, Globe, Key, Coins, Clock, Users, ScanLine, Fingerprint, Search, CreditCard as IdCard } from 'lucide-react';
import { verificationMethods } from '../data/verificationMethods';


const VerificationMethod = ({ selectedMethod, onMethodSelect, onNext, onBack, onCancel }) => {
  const iconMap = {
    CreditCard: CreditCard,
    Shield: Shield,
    Lightbulb: Lightbulb,
    Smartphone: Smartphone,
    Building2: Building2,
    Building: Building,
    IdCard: IdCard,
    Globe: Globe,
    Key: Key,
    Coins: Coins,
    Clock: Clock,
    Users: Users,
    ScanLine: ScanLine,
    Fingerprint: Fingerprint,
    Search: Search
  };

  const MethodCard = ({ method }) => {
    const isSelected = selectedMethod?.id === method.id;
    const IconComponent = iconMap[method.icon];
    
    return (
      <div 
        className={`border rounded-lg transition-all cursor-pointer p-4 h-24 flex items-center gap-3 ${
          isSelected 
            ? 'border-green-600 bg-green-50' 
            : 'border-slate-200 hover:border-slate-300'
        }`}
        style={isSelected ? { boxShadow: 'inset 0 0 0 0.5px rgb(22 163 74)' } : {}}
        onClick={() => onMethodSelect(method)}
      >
        {method.logo ? (
          <img 
            src={method.logo} 
            alt={`${method.name} logo`}
            className="flex-shrink-0 w-8 h-8 object-contain rounded"
          />
        ) : (
          <IconComponent className="text-slate-600 flex-shrink-0" size={24} />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-900 font-semibold font-noto text-sm mb-1 leading-tight">
            {method.name}
          </h3>
          <p className="text-slate-500 text-xs font-noto">
            {method.estimatedTime}
          </p>
        </div>
      </div>
    );
  };


  return (
    <div className="flex flex-col h-[calc(100vh-170px)] mt-10">
      {/* Fixed Header Section */}
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-medium text-slate-800 font-noto mb-6">
          Select your favourite ID verification method
        </h1>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-0 space-y-6">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {verificationMethods.map((method) => (
            <MethodCard key={method.id} method={method} />
          ))}
        </div>
        
        {/* Selected Method Details */}
        {selectedMethod && (
          <div className="pt-6">
            <div>
              <h3 className="text-slate-900 font-semibold font-noto text-lg mb-4">
                {selectedMethod.name} method checklist
              </h3>
              
              <div className="space-y-3">
                {selectedMethod.checklist.map((item, index) => {
                  const ChecklistIcon = iconMap[item.icon];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <ChecklistIcon className="text-slate-600 mt-1 flex-shrink-0" size={16} />
                      <span className="text-slate-600 font-noto text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Actions */}
      <div className="flex-shrink-0 flex justify-between pt-4 pb-2 bg-white">
          <button
            onClick={onCancel}
            className="px-6 py-1 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 font-noto font-normal transition-colors"
          >
            Cancel
          </button>
        <div className="flex gap-3">
          <button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-1 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 font-noto font-normal transition-colors"
            >
              <ArrowLeft size={16} />
              Back
          </button>
          <button
            onClick={onNext}
            disabled={!selectedMethod}
            className={`px-6 py-2 rounded-full font-noto font-normal transition-colors ${
              selectedMethod
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Start Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationMethod;