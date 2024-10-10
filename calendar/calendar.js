const day = document.querySelector('.daytxt');
const date = document.querySelector('.datetxt');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const daysCalendar = document.querySelector('.daysCalendar');

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const today = new Date().getDay();
const year = new Date().getFullYear();
const month = new Date().getMonth();
const todaydate = new Date().getDate();
let currmonth = month;

day.innerHTML = days[today - 1];
date.innerHTML = `${today}-${month + 1}-${year}`;

day.classList.add('center');

function generateDates() {
    const lastDate = new Date(year, currmonth + 1, 0).getDate();
    daysCalendar.innerHTML = '';
    console.log('lastDate', lastDate, todaydate);
    for (let i = 1; i <= 35; i++) {
        const newEl = document.createElement('div');
        if (i === todaydate) {
            newEl.classList.add('active');
        }
        if (i > lastDate) {
            newEl.style.backgroundColor = blur;
            newEl.innerHTML = i - lastDate;
        }
        else {
            newEl.innerHTML = i;
        }
        newEl.style.height = lastDate === 30 ? 50 + 'px' : 50 + 'px'
        daysCalendar.appendChild(newEl);
    }
}

prev.addEventListener('click', () => {
    currmonth = currmonth - 1
    generateDates()
});

next.addEventListener('click', () => {
    currmonth = currmonth + 1;
    generateDates()
});

generateDates();
