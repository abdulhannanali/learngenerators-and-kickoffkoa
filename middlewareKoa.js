var koa = require("koa");
var app = koa();


app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  this.body = 'hello koa';
});

function responseTime() {
  return function* (next) {
    // record start time
    var startTime = Date.now();
    yield next;
    var endTime = Date.now() - startTime;
    this.response.set("X-Response-Time", endTime);
  }
}

function upperCase() {
  return function* (next) {
    yield next;
    this.body = this.body.toUpperCase();
  }
}

app.listen(process.argv[2]);
