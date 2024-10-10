const slider = document.querySelector('.slides');
const containerDots = document.querySelector('.container-dots');

var slideIndex = 1;

const images = [
    { src: "https://rb.gy/ohx0bd" },
    { src: "https://rb.gy/gggxy8" },
    { src: "https://rb.gy/z2a0fy" },
    { src: "https://rb.gy/nsefjh" },
    { src: "https://rb.gy/dssu2a" }
];

images.map((img, index) => {
    console.log('hello');
    var imgtag = document.createElement('img');
    imgtag.src = img.src;

    var dot = document.createElement('div');
    dot.classList.add('dot');

    slider.appendChild(imgtag);
    containerDots.appendChild(dot);
    console.log(slider);
});

function updateImageAndDot() {
    const images = document.querySelectorAll('img');
    const dots = document.querySelectorAll('.dot');
    console.log(images, dots);
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        dots[i].style.backgroundColor = 'white';
    }
    images[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].style.backgroundColor = 'black';
    for (let i = 0; i < images.length; i++) {
        console.log(images[i].style.display);
    }
    console.log(slider);
    //    console.log(slider.querySelector('[data-active]'));
    //    const activeSlide = slider.querySelector('[data-active]');
    //    console.log(slider.children, slideIndex);
    //    slider.children[slideIndex - 1].dataset.active = true;
    //    activeSlide && delete activeSlide.dataset.active;
}

const nextSlide = () => {
    if (slideIndex !== images.length) {
        slideIndex++;
    }
    else if (slideIndex === images.length) {
        slideIndex = 1;
    }
    updateImageAndDot();
}

const prevSlide = () => {
    if (slideIndex !== 1) {
        slideIndex--;
    }
    else if (slideIndex === 1) {
        slideIndex = images.length - 1;
    }
    updateImageAndDot();
}

const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', nextSlide);

const prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', prevSlide);

updateImageAndDot();

setInterval(() => {
    if (slideIndex >= images.length) {
        slideIndex = 1;
    }
    else {
        slideIndex = slideIndex + 1;
    }
    updateImageAndDot();
}, 1000)
