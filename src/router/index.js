import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Search from "../views/Search.vue";
import VueCookies from "vue-cookies";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { unauthorized: true },
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { unauthorized: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { unauthorized: true },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: { unauthorized: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  //1. 쿠키에 access_token값이 없고 refresh_token 값만 있을 경우 -> 토큰 재발급 함수 실행
  if (VueCookies.get("access_token") === null && VueCookies.get("refresh_token") !== null) {
    console.log("access 토큰 재발급");
  }
  //2. 쿠키에 token값이 있거나 ~ unauthorized 가 참일 경우 -> 다음 페이지로 이동
  if (to.matched.some((record) => record.meta.unauthorized) || VueCookies.get("access_token")) {
    return next();
  }
  //3. 아무것도 아닐 경우 (token값도 없고 Refresh Token도 없고) -> 로그인 페이지로 이동
  alert("로그인 해주세요");
  return next("/login");
});

export default router;
