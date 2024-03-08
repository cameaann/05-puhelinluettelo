import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const initial = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const App = () => {
  const [persons, setPersons] = useState(initial);
  const [searchWord, setSearch] = useState("");

  const filteredPersons =
    searchWord === ""
      ? persons
      : persons.filter((x) =>
          x.name.toLowerCase().includes(searchWord.toLowerCase())
        );

  const handleOnChange = (event) => {
   setSearch(event)
  };

  const handleOnSubmit = (event) => {
      setPersons(persons.concat(event));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange = {handleOnChange}/>

      <h3>Add a new</h3>
      <PersonForm handleOnSubmit={handleOnSubmit} persons={persons} />
      
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
