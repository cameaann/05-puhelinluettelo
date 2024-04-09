const Filter = ({handleChange}) => {

  const handleOnChange = (event) =>{
    handleChange(event.target.value);
  }

  return (
    <div className="filter">
      filter shown with 
      <input onChange={handleOnChange} name="search" />
    </div>
  );
};

export default Filter;
