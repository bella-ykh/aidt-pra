/* 슬라이드, 인디케이터 */
const slides = document.querySelector('.cm_slides');
const indicators = document.querySelectorAll('.cm_indicator');
const prevButton = document.querySelector('.cm_prev');
const nextButton = document.querySelector('.cm_next');
let currentSlide = 0;

function updateSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('cm_current', i === index);
    });
    prevButton.disabled = index === 0;
    nextButton.disabled = index === indicators.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide -= 1;
        updateSlide(currentSlide);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < indicators.length - 1) {
        currentSlide += 1;
        updateSlide(currentSlide);
    }
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentSlide = i;
        updateSlide(currentSlide);
    });
});

updateSlide(currentSlide);