// const y = document.querySelectorAll('div.dropdown button');

// console.log(y);
// y.addEventListener('click', function () { 
//     console.log(y.nextSibling);
// })

var status = '123';
// console.log(window);

const x = () => {
    // console.log(this);
}
x();
setTimeout(() => {
    const status = '345';
    const obj = {
        status: '535',
        getStatus() {
            console.log(this.status);
        }
    }
    obj.getStatus();
    console.log(this);
}, 100);


let p = [1, 2, 3];
let q = [4, 5, 6];
p.push(...q);

console.log(p);
