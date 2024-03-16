import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/personService";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchWord, setSearch] = useState("");

  useEffect(() => {
    console.log("effect");

    personService
    .getAll()
    .then((initialPersons) =>{
      console.log(initialPersons)
      setPersons(initialPersons)
    })
    
  }, []);

  const filteredPersons =
    searchWord === ""
      ? persons
      : persons.filter((x) =>
          x.name.toLowerCase().includes(searchWord.toLowerCase())
        );

  const handleOnChange = (word) => {
   setSearch(word)
  };

  const handleOnSubmit = (person) => {
    personService
    .create(person)
    .then(person => {
      setPersons(persons.concat(person))
    })
  };

  const handleDelete = (person) => {
    personService
    .delPerson(person)
    .then(person => {
       setPersons(persons.filter(p => p.id !== person.id))
    })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange = {handleOnChange}/>

      <h3>Add a new</h3>
      <PersonForm handleOnSubmit={handleOnSubmit} persons={persons} />
      
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
