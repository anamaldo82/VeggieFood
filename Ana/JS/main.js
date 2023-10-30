const carrousel = document.querySelector(".carrousel-item");

let maxScrollLeft = carrousel.scrolWidth - carrousel.clientWidth;
let intervalo = null;
let step = 10;

const start = () => {
    intervalo = setInterval(function () {
        carrousel.scrollLeft = carrousel.scrollLeft + step;
        if (carrousel.scrollLeft === maxScrollLeft) {
            step = -1;
        }
    }, 10)
};

const stop = () => {}

start();
