<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>params is {{ this.data }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "",
    };
  },
  created() {
    this.data = this.$route.params.id;
  },
};
</script>
