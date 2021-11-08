import { useState } from "react";
import { Link } from "react-router-dom";

import { ControlledOnboardingFlow } from "../layout/components/ControlledOnboardingFlow";
import { UncontrolledOnboardingFlow } from "../layout/components/UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={() => goToNext({ name: "John" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

export const OnboardingFlows = () => {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnBoardingData({ ...onBoardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  const onFinish = () => {
    setCurrentIndex(0);
  };

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Controlled Flow</h1>
      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}
        onFinish={onFinish}
      >
        <StepOne />
        <StepTwo />
        {onBoardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>

      <h1>Uncontrolled Flow</h1>
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
};
