import React, { useState } from "react";

export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  if (children.length - 1 <= currentIndex) {
    onFinish();
  }

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goToNext,
    });
  }

  return currentChild;
};
