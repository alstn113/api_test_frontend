<template>
  <div class="container mt-5" style="width: 500px;">
    <div class="card px-5 bg-light">
      <form @submit.prevent="register" class="my-4">
        <!-- @submit.prevent="함수 이름" -->
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>
        <div class="mb-3">
          <label for="nick" class="form-label">nick</label>
          <input type="text" class="form-control" id="nick" v-model="nick" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password1" v-model="password" />
        </div>
        <div class="mb-3">
          <label for="passwordConfirm" class="form-label">Password Confirm</label>
          <input type="password" class="form-control" id="passwordConfirm" v-model="passwordConfirm" />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="submit" class="btn btn-primary">REGISTER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      nick: "",
      password: "",
      passwordConfirm: "",
      result: "",
    };
  },
  methods: {
    register() {
      const email = this.email;
      const password = this.password;
      const passwordConfirm = this.passwordConfirm;
      const nick = this.nick;
      if (!email || !password || !passwordConfirm || !nick) {
        this.$swal.fire({
          title: "잘못된 값입니다",
          icon: "error",
          timer: 800,
        });
        return false;
      }
      this.$api("post", "/api/auth/register", { email, password, nick }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.$swal
            .fire({
              title: "회원가입에 성고했습니다",
              icon: "success",
              timer: 800,
            })
            .then(() => {
              this.$router.push({ path: "/login" });
            });
        } else if (res.status === 409) {
          this.$swal.fire({
            title: "이미 있는 이메일입니다",
            icon: "error",
            timer: 800,
          });
        }
      });
    },
  },
};
</script>
