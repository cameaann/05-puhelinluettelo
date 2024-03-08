import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const check = persons.find((x) => x.name === newName);
    console.log(check);
    if (check) {
      alert(newName + " is already added to phonebook");
    } else {
      const newPerson = { 
        name: newName, 
        id: persons.length + 1 
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ul>
        {persons.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
