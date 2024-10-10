function read(collection, property) {
    // write your solution below
    let newProperty = property.replaceAll('[','.').replaceAll(']','.').split('.').filter(Boolean);
    // let dot = newProperty.indexOf('.');
  
    if(collection === null) {
      return undefined
    }
    if(!newProperty.length) {
      return undefined;
    }
    for(let i=0;i<newProperty.length;i++) {
      collection = collection[newProperty[i]];
    }
    return collection;
  }

//   console.log(read([{ developer: "Tom" }, [0, null]], "[1][1]"));

//   const collection = {
//     a: {
//       b: {
//         c: {
//           d: {
//             e: 2
//           }
//         }
//       }
//     }
//   }
  
//   // should return 2
//   read(collection, 'a.b.c.d.e');
  
//   // should return undefined
//   read(collection, 'a.b.c.f');