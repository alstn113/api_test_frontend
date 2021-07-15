import { createStore } from "vuex";
import { login } from "./module/login"; //로그인 모듈
import { test } from "./module/test"; //vuex 테스트

export const store = createStore({
  modules: {
    login,
    test,
  },
});
