var app = require("koa")();

app.keys = ["secret", "yolola"];

app.use(function* () {
  var viewCookie = parseInt(this.cookies.get("view", {signed: true}));
  if (!viewCookie) {
    viewCookie = 0;
  }
  viewCookie += 1;
  this.cookies.set("view", viewCookie, {
    signed: true
  });
  this.body = viewCookie + ' views';
});

app.listen(process.argv[2]);
