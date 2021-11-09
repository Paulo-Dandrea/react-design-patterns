import { BigSuccessButton, DangerButton } from "../composition";
import { PartiallyApplyDangerButton, PartiallyApplySuccessButton } from "../HOCs/partiallyApply";
import { RecursiveComponent } from "../recursive-components/RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

export const UsingRecursiveComponent = () => {
  return (
    <div>
      <RecursiveComponent data={nestedObject} />

      <DangerButton text="Don't do it!" />
      <BigSuccessButton text="Yes!!!" />

	  <PartiallyApplyDangerButton text="Don't do it!" />
	  <PartiallyApplySuccessButton text="Don't do it!" />
    </div>
  );
};
