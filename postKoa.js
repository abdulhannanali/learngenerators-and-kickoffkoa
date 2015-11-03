var koa =  require("koa"),
    bodyParser = require("koa-bodyparser");

var router = require("koa-router")();
var app = koa();

app.use(bodyParser());


router.post('/', function *(next){
  var name = this.request.body.name;
  if (name) {
    this.body = name.toUpperCase();
  }
  else {
    return yield next;
  }
});

app.use(router.routes());

app.listen(process.argv[2]);
