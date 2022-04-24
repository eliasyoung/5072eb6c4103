export const checkEmptyArrary = (value) => {
  if (Array.isArray(value) && value.length == 0) return true;
  else return false;
};
