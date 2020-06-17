////
let burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
    document.querySelector('.header__menu-column').classList.toggle("displayBLock");
})
////Change Location
let navLinks = document.querySelectorAll('.header__menu');
for (let i = 0; i<navLinks.length; i++){
    navLinks[i].addEventListener('click', function () {
        window.location.href = 'categoryAll.html';
    })
}

let logo = document.querySelector('.header__logo');
logo.addEventListener('click', function () {
    window.location.href = 'index.html';
})

let basket = document.querySelector('.header__basket');
basket.addEventListener('click', function () {
    window.location.href = 'shoppingBag.html';
})

///filter
let filterInput = document.querySelector('#filter');
let filterBtn = document.querySelector('#filterBtn');

filterBtn.addEventListener('click', function () {
    document.querySelector('.header__filter ').classList.toggle("focus");
    document.querySelector('.header__filter-btn').classList.toggle("bg-grey");
    filterInput.focus();
    changeLink()
})
filterInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        changeLink()
    }
});
function changeLink() {
    if (filterInput.value.length > 0) {
        window.location.href = 'categoryAll.html';
        filterInput.value = ''
    }
};
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        if ( document.querySelector('.header__filter ').classList.contains('focus')) {
            document.querySelector('.header__filter ').classList.remove('focus');
            document.querySelector('.header__filter-btn').classList.remove('bg-grey');
        }
        filterInput.value = '';
    }
});
////
