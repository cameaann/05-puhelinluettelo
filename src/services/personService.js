import axios from "axios";

const url = "https://phonebook-backend-iyw2.onrender.com/api/persons";

const getAll = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error)
  }
};

const create = async (person) => {
  try {
    const config = {'content-type': 'application/json'}
    const res = await axios.post(url, person, config);
    return res.data;
  } catch (error) {
    console.error(error)
  }
};

const delPerson = async (person) => {
  try {
    const res = await axios.delete(`${url}/${person.id}`);
    return res.data;
  } catch (error) {
    console.error(error)
  }
};

const change = async (person) => {
  try {
    const res = await axios.put(`${url}/${person.id}`, person);
    return res.data;
  } catch (error) {
    console.error(error)
  }
};

export default { getAll, create, change, delPerson };
