function compute() {
    const condition = true;
    if (condition) {
      var a = false;
      var b = false;
    }
    return {
      a: a || null,
      b: b || null
    }
  }
  var r = compute();
  // What do you think would be the output?
  console.log(r);