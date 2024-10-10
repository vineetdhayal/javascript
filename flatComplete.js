 function flatten(value) {
    return value.reduce((acc, curr) => {
        return Array.isArray(curr) ? acc.concat(...flatten(curr)) : acc.concat(curr);
    }, [])
  }

console.log(flatten([1,[2,4],[8,9]]));
