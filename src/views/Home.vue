<template>
  <div>
    <h1>This is an about home page</h1>
    <div>
      <div class="row">
        <button class="btn btn-primary m-3" type="button" @click="get_submit_data()">get_submit_data()</button>
        <button class="btn btn-primary m-3" type="button" @click="get_submit_params()">get_submit_params()</button>
        <button class="btn btn-primary m-3" type="button" @click="get_submit_query()">get_submit_query()</button>
      </div>
      <div class="row">
        <button class="btn btn-primary m-3" type="button" @click="post_submit_data()">post_submit_data()</button>
        <button class="btn btn-primary m-3" type="button" @click="post_submit_params()">post_submit_params()</button>
      </div>
      <div class="row">
        <input type="file" id="img" accept="image/*" @change="uploadFile($event.target.files, 1)" />
        <img :src="`/img/1/image1-1624599370025.jpg`" />
      </div>
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
      data5: "",
      num: 2,
    };
  },
  methods: {
    //sweetalert2 router test
    get_submit_data() {
      this.$swal
        .fire({
          title: "저장 하시겠습니까?",
          showCancelButton: true,
          confirmButtonText: `확인`,
          cancelButtonText: `취소`,
        })
        .then(async (result) => {
          console.log("확인 전");
          if (result.isConfirmed) {
            this.data1 = await this.$api("get", "/api/get_submit_data");
            console.log(this.data1);
            this.$swal
              .fire({
                title: "저장되었습니다",
                icon: "success",
                timer: 800,
              })
              .then(() => {
                console.log("라우터 이동 전");
                console.log("this.data1", this.data1, this.data1.first, this.data1.last);
                this.$router.push({ name: "About", params: { id: 4 } });
              });
          }
        });
    },

    async get_submit_params() {
      this.data2 = await this.$api("get", `/api/get_submit_params/${this.num}`);
      console.log("this.data2", this.data2);
    },
    async get_submit_query() {
      this.data5 = await this.$api("get", `/api/get_submit_query?data=example1`);
      console.log("this.data5", this.data5);
    },
    async post_submit_data() {
      this.data3 = await this.$api("post", "/api/post_submit_data", this.data3);
      console.log("this.data3", this.data3, this.data3.first, this.data3.last);
    },
    async post_submit_params() {
      this.data4 = await this.$api("post", `/api/post_submit_params/${this.num}`, this.data4);
      console.log("this.data4", this.data4);
    },
    async uploadFile(files, type) {
      const formData = new FormData();
      formData.append("img", files[0]);
      await this.$api("post", `/api/post_image/${this.num}/${type}`, formData);
    },
  },
};
</script>
