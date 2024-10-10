/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE THE FUNCTION NAME

function stringToObject(input, finalValue) {
    // write your code below
    if(!input) {
      throw new TypeError();
    }
    let arr;
    if(input.includes('"')) {
     arr = input
      .replaceAll('."', '[')
      .replaceAll('".', '[')
      .replaceAll('"', '')
      .split('[');
    }
    else {
      arr = input.split('.');
    }
  
      console.log(arr);

    let obj = arr.reverse().reduce((acc, curr) => {
      console.log('acc', curr,  JSON.parse(JSON.stringify(acc)));
      if(!isNaN(+curr)) {
        let arr = new Array((+curr)+1).fill('');
        arr[curr] = acc;
        return arr;
      }
      else {
        return acc = {[curr]: acc};
      }
    }, finalValue);
  
    console.log(obj);
    return obj;
  }

  //   stringToObject('a."b.c"."d.e"', 1);

//   stringToObject('a.b.c', 1);
// // { a: { b: { c: 1 } } }

// stringToObject('', 1);
// // throw a TypeError

// stringToObject('a."b.c"."d.e"', 2);
// // consider "b.c" and "d.e" as individual keys
// // output => { a: { 'b.c': { 'd.e': 2 } } }

// stringToObject('users.0.name', 'devtools tech')
// // users would be an array that contains one single object with name property with final value
// // { users: [{ name: 'devtools tech' }] }