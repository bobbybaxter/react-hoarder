import axios from 'axios';

import fbKeys from '../apiKeys.json';

const baseUrl = fbKeys.firebaseKeys.databaseURL;

const getStuff = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/stuff.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const items = [];
      console.error(items);
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          items.push(res.data[fbKey]);
        });
      }
      resolve(items);
    })
    .catch(err => reject(err));
});

const getSingleItem = itemId => axios.get(`${baseUrl}/stuff/${itemId}.json`);

const postItem = newItem => axios.post(`${baseUrl}/stuff.json`, newItem);

export default { getStuff, getSingleItem, postItem };
