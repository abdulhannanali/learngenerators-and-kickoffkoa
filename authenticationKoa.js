var koa = require("koa"),
    bodyparser = require("koa-bodyparser"),
    koaRouter = require("koa-router"),
    session = require("koa-session"),
    views = require("co-views");

var app = koa();
var router = koaRouter();

// adding views middleware
var render = (views(__dirname + "/views", {
  ext: 'jade'
}));

app.keys = ["G,fpH^7KvLVm*6W{rF})|5C+)&z~M7",
            "1s>RxinW)I?=(5p}1J#12313121123z2X7[%,tcw2"];

app.use(bodyparser());
app.use(session(app));
/// Routes
app.use(router.routes());

// home Route
router
  .get("/", function* (next) {
    if (this.session.authenticated) {
      this.body = "hello world";
    }
    else {
      this.status = 401;
      this.body = "sorry the unauthorized access to this server is not allowed";
    }
  });

// routes for /login
router
  .get("/login", function* (next) {
    if (this.session.authenticated) {
      return  this.redirect("/");
    }
    this.body = yield render("form", {});
  })
  .post("/login", function* (next) {
    if (this.request.body.username == "username" &&
        this.request.body.password == "password")
        {
          this.session.authenticated = true;
          this.redirect("/");
        }
    else {
      this.status = 400;
      this.body = "Sorry! The username or password was incorrect. Try again."
    }

  });

router.get("/logout", function* (next) {
  if (this.session.authenticated) {
    this.session.authenticated = false;
  }
  this.redirect("/login");
});



app.listen(process.argv[2]);
