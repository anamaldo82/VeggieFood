ducument.addEventListener('DOMContentLoaded', () => {
    const elementosCarrousel = document.querySelectorAll('.carrousel');
    M.Carrousel.init(elementosCarrousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
    });
});