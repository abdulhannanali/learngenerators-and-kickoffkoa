var koa     = require("koa"),
    session = require("koa-session");

const app = koa();
app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function* (next) {
  var n = this.session.views || 0;
  this.session.views = ++n;
  this.body = n + " views";
});

app.listen(process.argv[2]);

(function(){
  let x = 0;
}());
