function getElementsByTagName(tagName) {
  // write your code below
  let elements = [];
  function travserse(child) {
    if (!child) {
      return;
    }
    console.log(child.tagName, 'tag name');
    if (child.tagName && child.tagName.toLowerCase() == tagName.toLowerCase()) {
      console.log('came inside')
      elements.push(child);
    }
    for (let childs of child.children) {
      travserse(childs);
    }
  }
  for (let child of document.body.children) {
    travserse(child);
  }

  return elements;
}

console.log(getElementsByTagName('p'));
