const Person = ({ person, handleDelete }) => {
  return (
    <>
      <div>
        <span>{person.name} {person.number}</span>  
        <button type="submit" onClick={handleDelete}>delete</button>
      </div>
     
    </>
  );
};

export default Person;
