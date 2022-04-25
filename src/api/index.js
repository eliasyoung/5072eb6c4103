import get from "@/api/requests";

export const reqGetLoginQrKey = () => get("/login/qr/key");

/* 发现音乐Discover页面使用api */

export const reqGetDiscoverBanner = () => get("/banner");
export const reqGetPersonalized = (limit) => get("/personalized", { limit });
export const reqGetPersonalizedNewsong = (limit) =>
  get("/personalized/newsong", { limit });
export const reqGetPrivateContent = () => get("/personalized/privatecontent");
export const reqGetPersonalizedMv = () => get("/personalized/mv");
// 获取每日推荐歌单（需登录后调用）
export const reqGetRecomResource = () => get("/recommend/resource");
export const reqGetRecomSong = () => get("/recommend/songs");
/* qrcode */
export const reqGetQrcodeKey = () =>
  get("/login/qr/key", { timestamp: new Date().getTime() });

export const reqGetQrcodeImg = (key, qrimg = true) =>
  get("/login/qr/create", { key, qrimg, timestamp: new Date().getTime() });

export const reqCheckQrcodeStatus = (key) =>
  get("/login/qr/check", { key, timestamp: new Date().getTime() });

/* login */

export const reqCheckLoginStatus = () =>
  get("/login/status", { timestamp: new Date().getTime() });

export const reqLogout = () =>
  get("/logout", { timestamp: new Date().getTime() });

/* get user info */

export const reqGetUserAccount = () => get("/user/account");

export const reqGetUserSubcount = () => get("/user/subcount"); // several count

export const reqGetUserDetail = (uid) => get("/user/detail", { uid });

export const reqGetUserPlaylist = (uid, offset, limit) =>
  get("/user/playlist", { uid, offset, limit });
