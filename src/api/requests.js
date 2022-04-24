import axios from "axios";
import Vue from "vue";

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/* 封装get */
export default (url, params) => {
  return axios
    .get(url, { params })
    .then((res) => {
      return res.data;
    })

    .catch((err) => {
      Vue.prototype.$message(err);
    });
};
