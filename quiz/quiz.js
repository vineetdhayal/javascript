const quiz = document.querySelector('.quiz');
const btn = document.querySelector('.btn');
const score = document.querySelector('.score');

let sore = 0;
let currentQuestion = 0;
let selectedOption = '';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Paris',
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: [
            'Charles Dickens',
            'William Shakespeare',
            'J.K. Rowling',
            'Mark Twain',
        ],
        answer: 'William Shakespeare',
    },
    {
        question: 'What is the square root of 64?',
        options: ['6', '7', '8', '9'],
        answer: '8',
    },
];

function renderQuestion() {
    quiz.innerHTML = '';
    selectedOption = '';
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.innerText = questions[currentQuestion].question;
    let newDiv = document.createElement('div');
    questions[currentQuestion].options.forEach((option) => {
        const el = document.createElement('input');
        const label = document.createElement('label');
        el.type = 'radio';
        el.value = option;
        el.checked = selectedOption === option;
        el.addEventListener('click', () => {
            console.log('i am called');
            const elems = document.querySelectorAll('[type=radio]');
            console.log(elems);
            elems.forEach((z) => z.checked = false);
            selectedOption = el.nextSibling.innerText;
            el.checked = el.value === selectedOption;
        })
        label.innerText = option;
        newDiv.appendChild(el);
        newDiv.appendChild(label);
    })
    div.appendChild(span);
    div.appendChild(newDiv);
    quiz.appendChild(div);
    console.log(quiz);
}

renderQuestion();

btn.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');
    console.log(selected);
    if (selected.value === questions[currentQuestion].answer) {
        sore++;
    }
    score.innerHTML = sore;
    currentQuestion += 1;
    renderQuestion();
})

// score.innerHTML