import { useRef } from "react";

export const UncontrolledForm = () => {
  const nameInput = useRef(null);
  const ageInput = useRef(null);

  const handleSubmit = (e) => {
      console.log(nameInput.current.value);
      console.log(ageInput.current.value);
      e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input type="submit" value="Submit" />
    </form>
  );
};
