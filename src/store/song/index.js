//test song id 1940769764 祝福 叶倩文
// 185694
// 64435 喜帖街 duo
import { reqCheckMusicValid, reqGetSongUrl, reqGetSongDetail } from "@/api";

const state = {
  currentSongInfo: {},
  // currentSongUrl: undefined,
  currentSongUrl: undefined,
  currentSongDetail: undefined,
  currentPlayedTime: 0,
};
const mutations = {
  UPDATECURRENTSONG(state, payload) {
    state.currentSongInfo = payload;
  },
  UPDATECURRENTSONGURL(state, payload) {
    /* state.currentSongInfo = Object.assign({}, state.currentSongInfo, {
      url: payload,
    }); */
    state.currentSongUrl = payload;
  },
  UPDATECURRENTSONGDETAIL(state, payload) {
    state.currentSongDetail = payload;
  },
  UPDATECURRENTPLAYEDTIME(state, payload) {
    state.currentPlayedTime = payload;
  },
};
const actions = {
  async checkMusicValid(context, payload) {
    const res = await reqCheckMusicValid(payload);
    if (res && res.success == true) {
      context.dispatch("getSongUrl", payload);
      context.dispatch("getSongDetail", payload);
    }
  },

  async getSongUrl(context, payload) {
    const res = await reqGetSongUrl(payload);
    if (res.code == 200) {
      context.commit("UPDATECURRENTSONGURL", res.data[0].url);
    }
  },

  async getSongDetail(context, payload) {
    const res = await reqGetSongDetail(payload);
    if (res.code == 200) {
      context.commit("UPDATECURRENTSONGDETAIL", res.songs[0]);
    }
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
