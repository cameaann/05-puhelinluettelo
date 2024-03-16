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
    const check = persons.find((x) => x.name === newName);

    if (check) {
      alert(newName + " is already added to phonebook");
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setNewName("");
      setNewNumber("");
      handleOnSubmit(newPerson);
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
