const API_URL = "https://material-explorer-backend.onrender.com/api";
// const API_URL = `http://localhost:4000/api`;

const getAllData = () =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/getAllData`)
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

const searchData = (query) =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/searchData/${query}`)
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

const getDetail = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/getDetail/${id}`)
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

export { getAllData, searchData, getDetail };
