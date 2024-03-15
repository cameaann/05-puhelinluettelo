import axios from "axios";

const url = "http://localhost:3001/persons"

const getAll = () => {
  const promise = axios.get(url)
  return promise.then(response => response.data)
};

const create = (person) => {
  const promise = axios.post(url, person)
  return promise.then(response => response.data)
}


export default { getAll, create };
