const Persons = ({ persons, filter }) => {
  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <div>
      {personsToShow.map((person) => (
        <p key={person.name}>{`${person.name} ${person.number}`}</p>
      ))}
    </div>
  );
};

export default Persons;
