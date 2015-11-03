function *dummy(){
  try {
    null.foo();
  } catch (e) {
    console.log("Caught exception: %s", e);
  }
  yield 'got here without crashing.'
}

dummy().next();
