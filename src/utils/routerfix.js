import VueRouter from "vue-router";

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve || reject) {
    return originPush.call(this, location, resolve, reject);
  }
  return originPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err;
    }
    return Promise.reject(err);
  });
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve || reject) {
    return originReplace.call(this, location, resolve, reject);
  }
  return originReplace.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err;
    }
    return Promise.reject(err);
  });
};
