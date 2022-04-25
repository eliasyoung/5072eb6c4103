import {
  reqCheckLoginStatus,
  reqGetUserPlaylist,
  reqGetUserSubcount,
  reqGetUserDetail,
  reqLogout,
} from "@/api";
import {
  checkEmptyArrary,
  getLocalLoginStatus,
  storeLocalLoginStatus,
} from "@/utils";

const state = {
  isLogin: getLocalLoginStatus() || false,
  account: {},
  // profile: {},
  detail: {},
  playlist: [],
  subcount: {},
};
const mutations = {
  CHANGELOGINSTATUS(state, payload) {
    if (state.isLogin == payload) return;
    state.isLogin = payload;
    storeLocalLoginStatus(payload);
  },
  UPDATEACCOUNT(state, payload) {
    state.account = payload;
  },
  // UPDATEPROFILE(state, payload) {
  //   state.profile = payload;
  // },
  UPDATEUSERPLAYLIST(state, payload) {
    state.playlist = payload;
  },
  UPDATESUBCOUNT(state, payload) {
    state.subcount = payload;
  },
  UPDATEDETAIL(state, payload) {
    state.detail = payload;
  },
};

const actions = {
  toggleLoginStatus({ commit }, payload) {
    commit("CHANGELOGINSTATUS", payload);
  },
  async checkIfLogin({ commit, dispatch }) {
    const res = await reqCheckLoginStatus();

    if (res.data.code == 200 && res.data.account && res.data.profile) {
      commit("UPDATEACCOUNT", res.data.account);
      commit("CHANGELOGINSTATUS", true);
      dispatch("getUserSubcount");
      dispatch("getUserDetail");
      dispatch("getUserPlaylist");
    } else {
      commit("CHANGELOGINSTATUS", false);
    }
  },
  async getUserPlaylist({ commit, getters }) {
    if (getters.uid) {
      const res = await reqGetUserPlaylist(getters.uid);
      if (res.code == 200) commit("UPDATEUSERPLAYLIST", res.playlist);
    }
  },
  async getUserDetail({ commit, getters }) {
    if (getters.uid) {
      const res = await reqGetUserDetail(getters.uid);
      if (res.code == 200) {
        commit("UPDATEDETAIL", res);
        // commit("UPDATEPROFILE", res.profile);
      }
    }
  },
  async getUserSubcount({ commit }) {
    if (!state.isLogin) return;
    const res = await reqGetUserSubcount();
    if (res.code == 200) {
      commit("UPDATESUBCOUNT", res);
    }
  },
  async logout({ state, commit, dispatch }) {
    if (!state.isLogin) return;
    const res = await reqLogout();
    if (res.code == 200) {
      dispatch("toggleLoginStatus", false);
      commit("UPDATEACCOUNT", {});
      commit("UPDATEDETAIL", {});
      return Promise.resolve(res);
    }
  },
};

const getters = {
  uid(state) {
    if (state.account.id) return state.account.id;
    else return undefined;
  },

  userPlaylist(state) {
    const obj = {
      created: { title: "创建的歌单", playlist: [] },
      subscribed: { title: "收藏的歌单", playlist: [] },
    };
    if (!checkEmptyArrary(state.playlist)) {
      state.playlist.forEach((item) => {
        if (item.subscribed == true) obj.subscribed.playlist.push(item);
        else obj.created.playlist.push(item);
      });
    }
    return obj;
  },

  profile(state) {
    return state.detail.profile ? state.detail.profile : {};
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
