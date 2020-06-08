export default {
  data() {
    return {
      api: "",
      loading: true
    };
  },
  methods: {
    async fetchData(url) {
      this.api = "";
      this.loading = true;

      const response = await fetch(`http://localhost:3000${url}`);
      const json = await response.json();
      setTimeout(() => {
        this.api = json;
        this.loading = false;
      }, 1000)
    }
  }
};