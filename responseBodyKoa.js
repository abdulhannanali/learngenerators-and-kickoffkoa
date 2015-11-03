var fs = require("fs");

var koa = require("koa"),
    bodyParser = require("koa-bodyparser");

var app = koa();

var router = require("koa-router")();

app.use(bodyParser());

router.get("/json", function* (next) {
  this.body = {foo: 'bar'};
});

router.get("/stream", function*(next) {
  this.body = fs.createReadStream(process.argv[3]);
});


app.use(router.routes());

app.listen(process.argv[2]);
