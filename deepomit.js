export default function deepOmit(val, keys) {
    let newObj = Array.isArray(val) ? [] : {};
    for(let key in val) {
      if(Array.isArray(val[key]) && !keys.includes(key)) {
        newObj[key] = val[key].map((z)=>{
          if(typeof z === 'object') {
            return deepOmit(z, keys);
          }
          return z;
        });
      }
     else if(typeof val[key] === 'object' && !keys.includes(key)) {
        newObj[key] = deepOmit(val[key], keys);
      }
      else if(!keys.includes(key)) {
        newObj[key] = val[key];
      }
    }
  
    return newObj;
  }

//   const data =  {
//           a: 1,
//           b: [{ c: 2 }, [3]],
//           c: [[{ a: 2, b: 3 }]],
//         };
  
//   const keysToOmit = ['b', 'e'];
//   console.log(deepOmit(data, keysToOmit));

// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//       d: 3,
//       e: 4,
//     },
//     f: [5, 6],
//   };
//   deepOmit(obj, ['b', 'c', 'e']); // { a: 1, f: [5, 6] }
  