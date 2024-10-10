function call() {
    const stars = document.querySelectorAll('.my-star');
    const mainStar = document.getElementsByClassName('star-rating');
    console.log(stars);
    let i = 0;
    while (i < stars.length) {
        stars[i].addEventListener('click', function () {
            let attr = this.getAttribute('data-star');
            console.log(attr);
            let z = stars.length;

            while (z >= 1) {
                const y = document.querySelector(`star-${z}`);
                y.classList.remove('is-active');
                z--;
            }
            i++;

            z = 1;

            while (z <= attr) {
                const y = document.querySelector(`star-${z}`);
                y.classList.add('is-active');
                z--;
            }
        })
    }
}

call();
