import { useState } from "react";

export const useForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoadingForm, setIsLoadingForm] = useState(true);

  const isFirstStep = currentStep === 0;

  const onChangeStep = (indice) => {

    if (indice < 0 || indice >= steps.length) {
      return;
    } else {
      setCurrentStep(indice);
    }
  };

  return {
    currentStep,
    currentComponents: steps[currentStep],
    onChangeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep,
    isLoadingForm,
  };
};
