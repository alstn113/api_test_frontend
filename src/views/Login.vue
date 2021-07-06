<template>
  <div class="container mt-5" style="width: 500px;">
    <div class="card px-5 bg-light">
      <form @submit.prevent="login" class="my-4">
        <!-- @submit.prevent="함수 이름" -->
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password1" v-model="password" />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="submit" class="btn btn-primary float-end">LOGIN</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const email = this.email;
      const password = this.password;
      this.$api("post", "/api/auth/login", { email, password }).then((res) => {
        if (res.status === 200) {
          this.$swal
            .fire({
              title: "로그인에 성공했습니다",
              icon: "success",
              timer: 800,
            })
            .then(() => {
              VueCookies.set("access_token", res.access_token, 60 * 60); // 1second
              VueCookies.set("refresh_token", res.refresh_token, "7d", null, null);
              this.$router.push({ path: "/" });
            });
        } else if (res.status == 401) {
          this.$swal.fire({
            title: "잘못된 값입니다",
            icon: "error",
            timer: 800,
          });
        }
      });
    },
  },
};
</script>
