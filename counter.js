const counter = {
    num: 0,
    get value() {
        return ++this.num;
    }
}

console.log(counter.value, counter.value, counter.value);


// const counter = {
//     value: 0,
//   };
//   What modifications would you make to the above snippet / counter object so that output of the following expression would be 1 2 3.
  
//   console.log(counter.value, counter.value, counter.value);
