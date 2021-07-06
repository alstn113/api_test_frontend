import { createStore } from "vuex";
import { login } from "./module/login"; //로그인 모듈

export const store = createStore({
  modules: {
    login,
  },
});
