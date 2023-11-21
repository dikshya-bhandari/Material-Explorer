const API_URL = "https://material-explorer-backend.onrender.com";

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
