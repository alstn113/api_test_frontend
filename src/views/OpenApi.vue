<template>
  <div>
    <div>오늘은 {{ base_date }}이고, {{ base_time }} 기준입니다</div>
    <div>날씨는 {{ weather_state }}이고, {{ weather_degree }}도입니다</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      base_date: "",
      base_time: "",
      weather_state: "",
      weather_degree: "",
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      await this.$api("get", "/api/get_open_api").then((res) => {
        this.weather_state = res.weather_state;
        this.weather_degree = res.weather_degree;
        this.base_date = res.base_date;
        this.base_time = res.base_time;
      });
    },
  },
};
</script>
