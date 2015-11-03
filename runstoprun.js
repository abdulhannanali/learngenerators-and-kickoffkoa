function *foo(){
  var stop = yield 'woo';
  console.log(stop, "inside woo");
}

var G = foo();

console.log(G.next("bar"));
console.log(G.next());
