Function.prototype.mybind = function(obj) {
    let p = obj;
    p.fn = this;
    return function (...args) {
      p.fn(...args)
    }
  }
  
  function callMe() {
    console.log(this.name, 'this.name');
  }
  
  let fn = callMe.mybind({name: 'vineet'});
  
  fn();
  