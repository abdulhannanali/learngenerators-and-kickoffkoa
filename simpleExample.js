function *idMaker(){
  var index = 0;
  while(index < 3){
    yield index++;
  }
  // return 4;
}

var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
