export default function deepMerge(valA, valB) {
    if(Array.isArray(valA) && Array.isArray(valB)) {
      return [...valA, ...valB];
    }
    if(typeof valB === 'object' && typeof valA === 'object') {
        let newObj = {...valA};
    for(let key in valB) {
      if(Object(newObj).hasOwnProperty(key)) {
        newObj[key] = deepMerge(valA[key], valB[key]);
      }
      else {
        newObj[key] = valB[key];
      }
    }
    return newObj;
    }
    return valB;
  }
  
  
  console.log(deepMerge({ foo: 3, bar: null }, { bar: [1, 2, 3] }));