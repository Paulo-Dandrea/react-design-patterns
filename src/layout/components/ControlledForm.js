import { useState, useEffect } from "react";

export const ControlledForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();

  const handleSubmit = (e) => {
      console.log(name);
      console.log(age);
      e.preventDefault();
  };

  useEffect(() => {
    if (name.length < 2) {
        console.log('name must be more than two characteres')
    }
  }, [name]);

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input name="age" type="number" placeholder="Age"  value={age} onChange={e => setAge(e.target.value)}  />
      <button>Submit</button>
    </form>
  );
};
