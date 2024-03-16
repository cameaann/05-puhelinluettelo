const Person = ({ person, handleDelete }) => {
  return (
    <>
      <div className="person">
        <span>{person.name}</span> 
        <span> {person.number}</span> 
        <button className="btn" type="submit" onClick={handleDelete}>delete</button>
      </div>
     
    </>
  );
};

export default Person;
