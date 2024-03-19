import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/personService";
import Notification from "./components/Notification";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchWord, setSearch] = useState("");
  const [notifyMesssage, setNotifyMessage] = useState("");

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

  const handleOnSubmit = (person, action) => {
    if(action === "create"){
      personService
      .create(person)
      .then(person => {
        setPersons(persons.concat(person))
        setNotifyMessage(
          `Added ${person.name}`
        );
        setTimeout(() => {
          setNotifyMessage(null);
        }, 5000);
      })
    }else if(action === "change"){
      personService
      .change(person)
      .then(person => {
        setPersons(persons.map(x => x.id !== person.id ? x : person))
      } )
      setNotifyMessage(
        `Changed number of ${person.name}`
      );
      setTimeout(() => {
        setNotifyMessage(null);
      }, 5000);
    }
  
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
      <Notification message={notifyMesssage}/>
      <Filter handleChange = {handleOnChange}/>

      <h3>Add a new</h3>
      <PersonForm handleOnSubmit={handleOnSubmit} persons={persons} />
      
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
