export const PeopleLargeListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <>
      <h3>
        {name} {age}
      </h3>
    </>
  );
};