import { createRouter, createWebHistory } from "vue-router";
import VueCookies from "vue-cookies";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/about/:id",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/openapi",
    name: "OpenApi",
    component: () => import("@/views/OpenApi.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/storeTest",
    name: "StoreTest",
    component: () => import("@/views/StoreTest.vue"),
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
