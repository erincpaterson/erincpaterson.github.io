let slidePosition = 0
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.
    getElementById('carousel-button--next')
    .addEventListener("click", function() {
        moveToNextSlide();
    })
document.
    getElementById('carousel-button--prev')
    .addEventListener("click", function() {
        moveToPrevSlide(moveToNextSlide);
    })

function moveToNextSlide() {
    console.log('hello next')
}

function moveToPrevSlide() {
    console.log('hello prev')
}