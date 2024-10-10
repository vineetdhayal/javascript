let config = [{
    open: false,
    heading: 'heading 1',
    content: 'heading 1wefufchws wefiuwehbudfwe ndwebdfbhjwefdnwe fwebfbwe jhefhwehfwehfuewfuygwefyugwe fduiweuhyfewkjdfhbwedhjbwedfn we '
},
{
    open: false,
    heading: 'heading 2',
    content: 'heading 2'
},
{
    open: false,
    heading: 'heading 3',
    content: 'heading 3'
}];

const x = document.querySelector('.accordion-data');

function callMe() {
    config.forEach((z) => {
        const div = document.createElement('div');
        div.setAttribute('title', z.heading);
        const child = document.createElement('div');
        child.classList.add('accordion-title');
        child.textContent = z.heading;
        div.appendChild(child);
        x.appendChild(div);
    })
}

callMe();

x.addEventListener('click', (event) => {
    const el = event.target.parentNode;
    const attr = el.getAttribute('title');
    const myConfig = config.find((z) => z.heading === attr);
    console.log(myConfig);
    myConfig.open = !myConfig.open;
    if (myConfig.open) {
        let z = document.createElement('div');
        z.textContent = myConfig.content;
        el.appendChild(z);
        const p = event.target;
        console.log(p);
    }
    else {
        if (el.childNodes[1]) {
            el.childNodes[1].remove();
        }
    }
})
