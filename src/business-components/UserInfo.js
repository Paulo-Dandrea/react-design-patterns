export const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user;
  return (
    <>
      <h3>
        {name} {age}
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
