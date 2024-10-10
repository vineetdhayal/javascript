function merge(left, right) {
    let l=0;
    let r=0;
    let mergeResult = [];
    while(l<left.length && r<right.length) {
     if(left[l]<right[l]) {
      mergeResult.push(left[l]);
      l++;
     }
     else {
      mergeResult.push(right[r]);
      r++;
     }
    }
  
    mergeResult.push(...left.slice(l),...left.slice(r));
    return mergeResult;
  }

  export default function recursiveMergeSort(arr) {
      if(arr.length<=1) {
          return arr;
      }
    let mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const sortedleft = recursiveMergeSort(left);
    const sortedRight = recursiveMergeSort(right);
  
    return merge(sortedleft, sortedRight);
  }