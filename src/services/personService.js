import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
  const promise = axios.get(url);
  return promise.then((response) => response.data);
};

const create = (person) => {
  const promise = axios.post(url, person);
  return promise.then((response) => response.data)
  .catch(error => console.log("fail, ", error))
};

const delPerson = (person) => {
  const promise = axios.delete(`${url}/${person.id}`);
  return promise.then((response) => response.data)
  .catch(error => console.log("fail, ", error))
};

const change = (person) => {
  const promise = axios.put(`${url}/${person.id}`, person);
  return promise.then(response => response.data)
  .catch(error => console.log("fail, ", error))
}

export default { getAll, create, change, delPerson };
