<template>
  <Products :products="products" :filters="filters" @set-filters="load" :lastpage="lastpage" />
  <!-- ":" v-bind이고 prop에 동적인 값 전달하고, "@"은 v-on이고 전달받는 것 인듯 -->
</template>

<script>
import Products from "../components/Product.vue";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
export default {
  components: { Products },
  setup() {
    const products = ref([]); // 하나의 변수만
    const filters = reactive({
      s: "",
      sort: "",
      page: 1,
    }); // 여러개의 변수 가능
    const lastpage = ref(0);

    const load = async (f) => {
      filters.s = f.s;
      filters.sort = f.sort;
      filters.page = f.page;
      const arr = [];
      if (filters.s) {
        arr.push(`s=${filters.s}`);
      }
      if (filters.sort) {
        arr.push(`sort=${filters.sort}`);
      }
      if (filters.page) {
        arr.push(`page=${filters.page}`);
      }
      const response = await axios.get(`/api/get_List?${arr.join("&")}`);
      products.value = filters.page === 1 ? response.data.productList : [...products.value, ...response.data.productList];
      // filters.page가 1이면 response.data.productList이고 아니면 [...products.value, ...response.data.productList]
      // ...product.value에 ...response.data.produtList를 붙여주는 것
      lastpage.value = response.data.lastpage;
    };

    onMounted(() => load(filters)); //렌더링 후
    return {
      products,
      filters,
      lastpage,
      load,
    };
  },
};
</script>
