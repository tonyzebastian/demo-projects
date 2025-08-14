import React, { useState } from 'react';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import CountrySelection from './components/CountrySelection';
import VerificationMethod from './components/VerificationMethod';
import SuccessState from './components/SuccessState';
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from './components/ui/stepper';
import { Check } from 'lucide-react';

const IdentityVerificationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0 for welcome, 1-3 for steps
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const steps = [
    { id: 1, title: "Choose your country" },
    { id: 2, title: "Identity verification" },
    { id: 3, title: "Verification complete" }
  ];

  const handleGetStarted = () => {
    setCurrentStep(1);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCancel = () => {
    setCurrentStep(0); // Go back to welcome screen
    setSelectedCountry(null);
    setSelectedMethod(null);
  };

  const handleDone = () => {
    setCurrentStep(0); // Go back to welcome screen
    setSelectedCountry(null);
    setSelectedMethod(null);
  };

  return (
    <Layout showHeader={currentStep !== 0}>
      {currentStep === 0 ? (
        <Welcome onGetStarted={handleGetStarted} />
      ) : (
        <div className="space-y-8">
          {/* New Advanced Stepper */}
          <Stepper
            value={currentStep}
            onValueChange={setCurrentStep}
            indicators={{
              completed: <Check className="size-4" />,
            }}
            className="mb-8"
          >
          <StepperNav className="flex items-center w-full">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <StepperItem 
                  step={index + 1} 
                  completed={currentStep > index + 1}
                >
                  <StepperTrigger 
                    className="flex items-center gap-1.5 whitespace-nowrap"
                    disabled={index + 1 > currentStep}
                  >
                    <StepperIndicator>{index + 1}</StepperIndicator>
                    <StepperTitle className="text-slate-900 data-[state=inactive]:text-slate-500">
                      {step.title}
                    </StepperTitle>
                  </StepperTrigger>
                </StepperItem>
                {index < steps.length - 1 && (
                  <StepperItem step={index + 1} completed={currentStep > index + 1} className="flex-1">
                    <StepperSeparator />
                  </StepperItem>
                )}
              </React.Fragment>
            ))}
          </StepperNav>

          <StepperPanel>
            <StepperContent value={1}>
              <CountrySelection
                selectedCountry={selectedCountry}
                onCountrySelect={handleCountrySelect}
                onNext={handleNext}
                onCancel={handleCancel}
              />
            </StepperContent>
            
            <StepperContent value={2}>
              <VerificationMethod
                selectedMethod={selectedMethod}
                onMethodSelect={handleMethodSelect}
                onNext={handleNext}
                onBack={handleBack}
                onCancel={handleCancel}
              />
            </StepperContent>
            
            <StepperContent value={3}>
              <SuccessState onDone={handleDone} />
            </StepperContent>
          </StepperPanel>
        </Stepper>
        </div>
      )}
    </Layout>
  );
};

export default IdentityVerificationFlow;