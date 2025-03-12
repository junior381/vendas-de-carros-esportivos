let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveToNextImage() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarouselPosition();
}

function moveToPreviousImage() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const carousel = document.getElementById('carousel');
    const offset = -currentIndex * 100; // Cada item tem 100% da largura
    carousel.style.transform = `translateX(${offset}%)`;
}
