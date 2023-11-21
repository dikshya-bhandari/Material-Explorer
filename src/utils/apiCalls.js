const API_URL = "http://192.168.100.83:4000";

const getAllData = () =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/api/getAllData`)
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

const searchData = (query) =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/api/searchData/${query}`)
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

const getDetail = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/api/getDetail/${id}`)
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

export { getAllData, searchData, getDetail };
