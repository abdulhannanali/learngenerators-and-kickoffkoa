function *foo() {
  try {
    yield 'inside foo';
  }
  catch (e) {
    console.log("yo");
  }

}

var it = foo();
try {
  it.throw("BOO From Outside");
}
catch (errorFromIt) {
  console.log("Error: %s", errorFromIt);
}
