import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/personService";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchWord, setSearch] = useState("");
  const [notifyMesssage, setNotifyMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const notifyClass = isError ? "error" : "notification";

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const filteredPersons =
    searchWord === ""
      ? persons
      : persons.filter((x) =>
          x.name.toLowerCase().includes(searchWord.toLowerCase())
        );

  const handleOnChange = (word) => {
    setSearch(word);
  };

  const handleOnSubmit = (person, action) => {
    if (action === "create") {
      personService.create(person).then((person) => {
        setPersons(persons.concat(person));
        setNotifyMessage(`Added ${person.name}`);
        setTimeout(() => {
          setNotifyMessage(null);
        }, 5000);
      });
    } else if (action === "change") {
      personService
        .change(person)
        .then((person) => {
          setPersons(persons.map((x) => (x.id !== person.id ? x : person)));
          setNotifyMessage(`Changed number of ${person.name}`);
          setTimeout(() => {
            setNotifyMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setIsError(true);
          setNotifyMessage(
            `Information of ${person.name} has already been removed from server`
          );
          setTimeout(() => {
            setNotifyMessage(null);
            setIsError(false);
          }, 5000);
        });
    }
  };

  const handleDelete = (person) => {
    personService.delPerson(person).then(() => {
      const p = persons.filter((p) => p.id !== person.id);
      setPersons(p);
    });
  };

  return (
    <div className="wrap-container">
      <div className="phonebook-container">
        <h2>Phonebook</h2>
        <Notification message={notifyMesssage} className={notifyClass} />
        <Filter handleChange={handleOnChange} />

        <h3>Add a new</h3>
        <PersonForm handleOnSubmit={handleOnSubmit} persons={persons} />

        <h3>Numbers</h3>
        <Persons persons={filteredPersons} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
