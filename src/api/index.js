import get from "@/api/requests";

export const reqGetLoginQrKey = () => get("/login/qr/key");

/* 发现音乐Discover页面使用api */

export const reqGetDiscoverBanner = () => get("/banner");
export const reqGetPersonalized = (limit) => get("/personalized", { limit });
export const reqGetPersonalizedNewsong = (limit) =>
  get("/personalized/newsong", { limit });
export const reqGetPrivateContent = () => get("/personalized/privatecontent");
export const reqGetPersonalizedMv = () => get("/personalized/mv");
