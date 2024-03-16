import { useState } from "react";

const PersonForm = ({ handleOnSubmit, persons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setNewName(value);
    }
    if (name === "number") {
      setNewNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = persons.find((x) => x.name === newName);
    let action = "";

    if (person) {
      let result = confirm(newName + " is already added to phonebook, replace the old number with a new one");

      if (result) {
        console.log(person);
        action = "change";
        const changedPerson = {... person,
         number: newNumber}
         setNewName("");
         setNewNumber("");
         handleOnSubmit(changedPerson, action);
      }
    } else {
      action = "create"
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setNewName("");
      setNewNumber("");
      handleOnSubmit(newPerson, action);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default PersonForm;
