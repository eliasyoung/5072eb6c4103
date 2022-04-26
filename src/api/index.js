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

/* song */

export const reqCheckMusicValid = (id, br) => get("/check/music", { id, br }); //检查歌曲是否可用，如 有无版权

//获取歌曲url
//部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
export const reqGetSongUrl = (id, br) => get("/song/url", { id, br });
