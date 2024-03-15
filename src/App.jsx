import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchWord, setSearch] = useState("");

  useEffect(() => {
    console.log("effect");

    axios.get("http://localhost:3001/persons")
    .then((response) => {
      setPersons(response.data);
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
    axios.post("http://localhost:3001/persons", person)
    .then((response)=>{
      console.log(response.data)
      setPersons(persons.concat(response.data));
    })
      
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
