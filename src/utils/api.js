import Axios from "axios";

export const requestsData = (url, parms) => {
  return new Promise(function(resolve, reject) {
    return Axios.get(url, {
      params: parms
    })
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        // if (error.response.status === 404) {
        //   return reject((window.location.href = "http://stackoverflow.com"));
        //   //return resolve({ error: "Url Not Found" });
        // }
        if (!error.response) {
        } else {
          if (error.response.status === 404) {
          }
        }

        console.log(error);
        //return reject((window.location.href = "http://stackoverflow.com"));
      });
  });
};
export const patchData = (url, data) => {
  return new Promise(function(resolve, reject) {
    return Axios.patch(url, data)
      .then(response => {
        console.log(response);
        return resolve(response.status);
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};

export const deleteData = url => {
  return new Promise(function(resolve, reject) {
    return Axios.delete(url)
      .then(response => {
        return resolve(response);
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};

export const insertData = (url, data) => {
  console.log(data);
  return new Promise(function(resolve, reject) {
    return Axios.post(url, data)
      .then(response => {
        console.log(response);
        return resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};
export default {
  requestsData,
  patchData,
  insertData,
  deleteData
};
