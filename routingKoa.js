var koa = require("koa");
var router = require("koa-router");

var app = koa();

app.use(function* (next) {
  if (this.path === "/") {
    this.body = "hello koa";
  }
  else {
    return yield next;
  }
});

app.use(function* (next) {
  if (this.path === "/404") {
    this.body = "page not found";
  }
  else {
    return yield next;
  }
});

app.use(function* (next) {
  if (this.path === "/500") {
    this.body = "<h1 style='color: red'>internal server error</h1>";
  }
  else {
    return yield next;
  }
});

app.listen(process.argv[2], function () {
  console.log("Listening on port %s", process.argv[2]);
});
