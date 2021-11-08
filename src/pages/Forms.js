import { Link } from "react-router-dom";
import { ControlledForm } from "../layout/components/ControlledForm";
import { UncontrolledForm } from "../layout/components/UncontrolledForm";

export const Forms = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <UncontrolledForm/>
      <ControlledForm />
    </>
  );
};
