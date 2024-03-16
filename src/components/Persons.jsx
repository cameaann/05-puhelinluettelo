import Person from "./Person";

const Persons = ({persons, handleDelete}) => {

    const handleOnDelete = (person)=>{
        let result = confirm(`Delete ${person.name}?`)
        if(result){
            handleDelete(person)
        }
    }
    return (persons.map(person => <Person key={person.id} person = {person} handleDelete = {()=>handleOnDelete(person)}/>))
}
export default Persons;