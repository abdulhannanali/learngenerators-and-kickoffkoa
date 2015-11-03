var koa = require("koa");

var app = koa();

app.use(function* (next) {
  if (this.request.is("json")) {
    this.body = {message: 'hi!'};
  }
  else {
    return yield next;
  }
});

app.use(function* (next) {
  this.body = "ok"
});

app.listen(process.argv[2]);
