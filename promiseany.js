export default function promiseAny(iterable) {
    if (!iterable.length) { return iterable; }
    return new Promise((res, rej) => {
      let pending = iterable.length;
      let errors = new Array(iterable.length);
      return iterable.forEach((x, index) => {
        Promise.resolve(x).then((ans) => {
          res(ans);
          pending--;
        }).catch((err) => { pending--;         errors[index] = err;
   if(pending===0) {
            rej(new AggregateError(errors));
        }})
      })
    })
  }