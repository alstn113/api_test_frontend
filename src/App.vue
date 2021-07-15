<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link :to="{ name: 'About', params: { id: 3 } }">About</router-link> |
      <router-link to="/search">Search</router-link> | <router-link to="/openapi">OpenApi</router-link> |
      <router-link :to="{ name: 'StoreTest' }">StoreTest</router-link>
      <p><router-link to="/login">Login</router-link> | <router-link to="/register">Register</router-link></p>
      <p class="btn btn-primary" @click="logout()">logout</p>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$swal.fire({
          title: "로그아웃했습니다",
          icon: "success",
          timer: 800,
        });
      });
    },
  },
};
</script>
