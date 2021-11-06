import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentStep + 1;

    const updatedData = { ...onBoardingData, ...stepData };

    if (nextIndex < children.length) {
      setCurrentStep(nextIndex);
    } else {
      setCurrentStep(0);
      onFinish(updatedData);
    }

    setOnBoardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentStep];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goToNext,
      onBoardingData,
      setOnBoardingData,
    });
  }

  return currentChild;
};
