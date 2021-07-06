import axios from "axios";
export default {
  methods: {
    async $api(method, url, data) {
      return (
        await axios({
          method,
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
