<template>
  <div>
    <h1>This is an about home page</h1>
    <div class="row">
      <button class="btn btn-primary m-3" type="button" @click="get_submit_data()">get_submit_data()</button>
      <button class="btn btn-primary m-3" type="button" @click="get_submit_params()">get_submit_params()</button>
    </div>
    <div class="row">
      <button class="btn btn-primary m-3" type="button" @click="post_submit_data()">post_submit_data()</button>
      <button class="btn btn-primary m-3" type="button" @click="post_submit_params()">post_submit_params()</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [],
      data2: [],
      data3: { first: "kim", last: "minsu" },
      data4: [
        { name: "식빵", family: "웰시코기", age: 1, weight: 2.14 },
        { name: "콩콩", family: "포메라니안", age: 3, weight: 2.5 },
        { name: "젤리", family: "푸들", age: 7, weight: 3.1 },
      ],
      num: 1,
    };
  },
  created() {},
  methods: {
    async get_submit_data() {
      this.data1 = await this.$api("get", "/api/get_submit_data");
      console.log("this.data1", this.data1, this.data1.first, this.data1.last);
    },

    async get_submit_params() {
      this.data2 = await this.$api("get", `/api/get_submit_params/${this.num}`);
      console.log("this.data2", this.data2);
    },
    async post_submit_data() {
      this.data3 = await this.$api("post", "/api/post_submit_data", this.data3);
      console.log("this.data3", this.data3, this.data3.first, this.data3.last);
    },
    async post_submit_params() {
      this.data4 = await this.$api("post", `/api/post_submit_params/${this.num}`, this.data4);
      console.log("this.data4", this.data4);
    },
  },
};
</script>
