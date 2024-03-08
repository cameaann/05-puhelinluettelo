import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if(name === "name"){
      setNewName(value);
    }
    else if(name === "number"){
      setNewNumber(value);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const check = persons.find((x) => x.name === newName);

    if (check) {
      alert(newName + " is already added to phonebook");
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ul>
        {persons.map((x) => (
          <li key={x.id}><span>{x.name}</span> {x.number}</li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnChange} name="name" />
          <div>
          number: <input value={newNumber} onChange={handleOnChange} name="number" />
          </div>
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
