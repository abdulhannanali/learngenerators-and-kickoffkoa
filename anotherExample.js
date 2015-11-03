function *anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function *generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

var done = false;
while (!done) {
  var value = gen.next();
  console.log(value.value);
  done = value.done;
}
