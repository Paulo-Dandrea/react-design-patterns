export const PeopleLargeListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>
        {name} {age}{" "}
      </h3>
      <p> {hairColor} </p>
      <ul>
        {hobbies.map((hobby) => (
          <li> {hobby} </li>
        ))}
      </ul>
    </>
  );
};
