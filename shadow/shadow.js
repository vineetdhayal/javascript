const elem = document.getElementById('elem');
elem.attachShadow({ mode: 'open' });
console.log(elem.shadowRoot);
const newEl = document.createElement('h1');
newEl.textContent = ' wefreferf';
elem.shadowRoot.appendChild(newEl);
