import VueCookies from "vue-cookies";

export const login = {
  state: {
    access_Token: null,
    refresh_Token: null,
  },
  mutations: {
    removeToken() {
      VueCookies.remove("access_token");
      VueCookies.remove("refresh_token");
    },
  },
  actions: {
    logout: ({ commit }) => {
      // 로그아웃
      commit("removeToken");
      location.reload();
    },
  },
};
