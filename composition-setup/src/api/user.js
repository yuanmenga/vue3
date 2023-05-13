export default () => {
  return {
    async request(url = "", methods = { method: "get" }) {
      return await fetch(`http://127.0.0.1:3008/news/${url}`, methods).then(
        (r) => r.json()
      );
    },
    async get() {
      return await this.request();
    },
    async delete(url) {
      return await this.request(url, { method: "delete" });
    },
    async add(data) {
      console.log(data);
      return await this.request("", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    },
  };
};
