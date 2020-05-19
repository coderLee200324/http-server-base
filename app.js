#!/usr/bin/env node
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
// 处理静态文件的中间件
const staticFiles = require("./middleware/static-files");
const controller = require("./middleware/controller");

const host = "localhost";
const port = 3000;
const app = new Koa();

app.use(async (ctx, next) => {
  // console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  const start = new Date().getTime();
  await next();
  const execTime = new Date().getTime() - start;
  ctx.response.set("X-Response-Time", `${execTime}ms`);
});

// 注册处理静态文件的中间件
app.use(staticFiles("/static/", `${__dirname}/static`));

// 路由中间件
app.use(controller());

app.listen(port, host, () => {
  console.log(`app started at http://${host}:${port}`);
});
