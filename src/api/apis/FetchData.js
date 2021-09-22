import axios from 'axios';

const FetchData = setUsers => {
  axios
    .get('https://randomuser.me/api/')
    .then(response => {
      setUsers(usersSpread => [...usersSpread, response.data.results[0]]);
    })
    .catch(error => {
      console.log(error);
    });
};

export {FetchData};
