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
      let result = confirm(
        newName +
          " is already added to phonebook, replace the old number with a new one"
      );

      if (result) {
        console.log(person);
        action = "change";
        const changedPerson = { ...person, number: newNumber };
        resetFields();
        handleOnSubmit(changedPerson, action);
      }
    } else {
      action = "create";
      if (newName.length < 1 || newNumber < 1) {
        alert("You need to enter the name and number");
      } else {
        const newPerson = {
          name: newName,
          number: newNumber,
        };
        resetFields();
        handleOnSubmit(newPerson, action);
      }
    }
  };

  function resetFields(){
    setNewName("");
    setNewNumber("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
         <label htmlFor="name">name:</label> 
         <input value={newName} onChange={handleOnChange} name="name" id="name" />
      </div>
      <div className="form-field">
          <label htmlFor="phone">number:</label>
          <input value={newNumber} onChange={handleOnChange} name="number" id="phone"/>
      </div>
      <div>
        <button className="btn" type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
