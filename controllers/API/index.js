module.exports = {
  "GET /": async ctx => {
    // 设置Content-Type:
    ctx.response.type = "application/json";
    // 设置Response Body:
    ctx.response.body = {
      products: [{ jaso: "aaaa" }],
    };
  },
};
