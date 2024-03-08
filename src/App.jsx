import { useState } from "react";

const initial = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const App = () => {
  const [persons, setPersons] = useState(initial);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchWord, setSearch] = useState("");

  const filteredPersons =
    searchWord === ""
      ? persons
      : persons.filter((x) =>
          x.name.toLowerCase().includes(searchWord.toLowerCase())
        );
  console.log(filteredPersons);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setNewName(value);
    }
    if (name === "number") {
      setNewNumber(value);
    }
    if (name === "search") {
      setSearch(value);
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
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={searchWord} onChange={handleOnChange} name="search" />
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnChange} name="name" />
          <div>
            number:{" "}
            <input value={newNumber} onChange={handleOnChange} name="number" />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {filteredPersons.map((x) => (
          <div key={x.id}>
            <span>{x.name}</span> {x.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
