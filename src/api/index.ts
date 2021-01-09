import axios from 'axios';

export default () => {
  const accessPoint = 'https://cors-anywhere.herokuapp.com';
  const url = 'https://jobs.github.com/positions.json';
  return axios.get(`${accessPoint}/${url}`);
};
