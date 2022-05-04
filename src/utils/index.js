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

//格式化时间
export const songDurationFormat = (time) => {
  const m = Math.floor(time / 1000 / 60);
  const s = Math.floor((time / 1000) % 60);
  const mm = m >= 10 ? m : `0${m}`;
  const ss = s >= 10 ? s : `0${s}`;
  return `${mm}:${ss}`;
};
