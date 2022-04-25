export const checkEmptyArrary = (value) => {
  if (Array.isArray(value) && value.length == 0) return true;
  else return false;
};

export const getLocalLoginStatus = () => {
  return localStorage.getItem("isLogin") == "true" ? true : false;
};

export const storeLocalLoginStatus = (bool) => {
  localStorage.setItem("isLogin", bool);
};
