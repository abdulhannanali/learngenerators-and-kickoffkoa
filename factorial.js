function *factorial(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++){
    factorial = factorial * i;
    yield factorial;
  }
}

for (var n of factorial(5)){
  console.log(n);
}
