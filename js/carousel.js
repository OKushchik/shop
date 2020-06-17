
const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

let width = carousel.offsetWidth;

next.addEventListener("click", e => {
    carousel.scrollBy(width , 0);
    prev.style.display = "flex";
    if (content.scrollWidth - width <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width), 0);
    next.style.display = "flex";
    if (carousel.scrollLeft - width <= 0) {
        prev.style.display = "none";
    }
});

window.addEventListener("resize", e => (width = carousel.offsetWidth));

/////
let carouselItem = document.querySelectorAll('.item');

for (let i = 0; i<carouselItem.length; i++){
    carouselItem[i].addEventListener('click', function () {
        window.location.href = 'categoryAll.html';
    })
}
