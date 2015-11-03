function *upper(items) {
  // my code goes here
  try {
    for (var i = 0; i < items.length; i++) {
      if (isNaN(items[i])) {
        yield items[i].toUpperCase();
      }
      else {
        yield null;
      }
    }
  }
  catch (e) {
    console.log("Error occured somewhere");
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
