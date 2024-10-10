document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const date = new Date();
        const hh = date.getHours();
        const mm = date.getMinutes();
        const ss = date.getSeconds();
        const el = document.querySelector('#clock');
        el.innerHTML = `hours:${hh} minutes:${mm} seconds:${ss}`;
    }
    let interval = setInterval(updateClock, 1000)

    window.addEventListener('unload', () => {
        clearInterval(interval);
    })
})