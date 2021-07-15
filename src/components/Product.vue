<template>
  <div>
    <div class="row mx-5">
      <div class="col-8">
        <input class="form-control" placeholder="Search" @keyup="search($event.target.value)" />
      </div>
      <div class="col-4">
        <div class="input-group-append">
          <select class="form-select" @change="sort($event.target.value)">
            <option>Select</option>
            <option value="asc">가격이 낮은 순</option>
            <option value="desc">가격이 높은 순</option>
          </select>
        </div>
      </div>
    </div>
    <div class="mx-5 my-5">
      <table class="table table-bordered align-middle text-center">
        <thead>
          <tr>
            <th width="10%">아이디</th>
            <th width="20%">제품명</th>
            <th width="20%">제품가격</th>
            <th width="20%">카테고리1</th>
            <th width="20%">카테고리2</th>
            <th width="10%">이미지</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(product, i) in products">
            <td>{{ product.id }}</td>
            <td>{{ product.product_name }}</td>
            <td>{{ product.product_price }}</td>
            <td>{{ product.Category.category1 }}</td>
            <td>{{ product.Category.category1 }}</td>
            <td><img v-if="product.Images[0] != null" :src="`${product.Images[0].path}`" style="height:50px;width:auto;" /></td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-center my-5" v-if="filters.page < lastpage">
        <button class="btn btn-primary" @click="loadMore()">Load More</button>
      </div>
      <div v-else class="d-flex justify-content-center my-5">
        목록의 마지막입니다.
        <div @click="scrollToTop()">위로</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products", "filters", "lastpage"],
  emits: ["set-filters"],
  setup(props, context) {
    const search = (s) => {
      //검색창에 변화가 있을 경우 s(검색창에 친 문자열)을 set-filters에 s를 담아서 보냄 -> 거기서 받으면 load 실행
      context.emit("set-filters", { ...props.filters, s, page: 1 });
    };
    const sort = (sort) => {
      if (sort !== "Select") {
        context.emit("set-filters", { ...props.filters, sort, page: 1 });
      }
    };
    const loadMore = () => {
      context.emit("set-filters", { ...props.filters, page: props.filters.page + 1 });
    };
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    return {
      search,
      sort,
      loadMore,
      scrollToTop,
    };
  },
};
</script>
