import axios from "axios";

axios.defaults.timeout = 10000;

/* 封装get */
export default (url, params) => {
  return axios
    .get(url, { params })
    .then((res) => res.data)
    .catch((err) => err);
};
