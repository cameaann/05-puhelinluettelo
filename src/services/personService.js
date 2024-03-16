import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
  const promise = axios.get(url);
  return promise.then((response) => response.data);
};

const create = (person) => {
  const promise = axios.post(url, person);
  return promise.then((response) => response.data);
};

const delPerson = (person) => {
  const promise = axios.delete(`${url}/${person.id}`);
  return promise.then((response) => response.data);
};

export default { getAll, create, delPerson };
