/////////
let item = {};
let contentItem = '';
let itemId;
if (localStorage.getItem('itemId') !== null) {
    itemId = JSON.parse(localStorage.getItem('itemId'));
}

for (let i = 0;i<catalog.length; i++) {
    if(catalog[i].id === itemId) {
        contentItem =
            `
            <div class="boxImg">
            <ul class="slides">
                <li><img src="img/catalog/${catalog[i].preview}"  alt="" /></li>
            </ul>
            <ul class="thumbnails">
                <li>
                     <img src="img/catalog/${catalog[i].thumbnail[0]}" style="opacity: 0.5" />
                </li>
                <li>
                    <img src="img/catalog/${catalog[i].thumbnail[1]}" />
                </li>
                <li>
                    <img src="img/catalog/${catalog[i].thumbnail[2]}" />
                </li>
            </ul>
        </div>
        <h2 class="product__title">${catalog[i].title}</h2>
        <p class="product__price"><em>${catalog[i].price}$</em></p>
        <p class="product__description">
            <em>${catalog[i].description}</em>
        </p>
        <h3 class="product__sizeTitle">size</h3>
        <ul class="product__sizeChoice">
            <!--sizes input-->
        </ul>
        <h3 class="product__colorTitle">color</h3>
        <ul class="product__colorChoice">
            <!--colors input-->
        </ul>
        <button class="product__button">add to card</button>
    `;
document.querySelector('.product').innerHTML = contentItem;

        <!--sizes output-->
        let sizes = catalog[i].sizes;
        let sizeChoice = document.querySelector('.product__sizeChoice');
        let sizeContent = '';
        for (let j = 0; j<sizes.length; j++){
            sizeContent += `<li><button class="size">${sizes[j]}</button></li>`
        }
        sizeChoice.innerHTML = sizeContent;

        <!--colors output-->
        let color = catalog[i].colors;
        let colorChoice = document.querySelector('.product__colorChoice');
        let colorContent = '';
        for (let j = 0; j<color.length; j++){
            colorContent += `<li><button class="color" data-color = '${color[j]}' style="background:${color[j]} "></button></li>`
        }
        colorChoice.innerHTML = colorContent;

        item.id = catalog[i].id;
        item.name = catalog[i].title;
        item.price = catalog[i].price;
        item.img = catalog[i].preview;
        item.quantity = 1;
    }
}

///slides
let slides = document.querySelector('.slides');
let thumbnails = document.querySelector('.thumbnails');
thumbnails.addEventListener('click', function(event) {
    let thumbnailsNode = thumbnails.querySelectorAll('li');
    for (let i = 0; i<thumbnailsNode.length; i++){
        thumbnailsNode[i].querySelector('img').style.opacity = '1';
    }
    let target = event.target;
    if (target.getAttribute('src')!== null) {
        let img = target.getAttribute('src');
        slides.innerHTML = `<li><img src="${img}" alt="" /></li>`
        target.style.opacity = '0.5'
    }
});
///////////////////
let sizeItem = document.querySelectorAll('.size');

for(let i = 0; i<sizeItem.length; i++){
    sizeItem[i].addEventListener('click', function () {
        for(let j = 0; j<sizeItem.length; j++) {
            sizeItem[j].classList.remove('chosen')
        }
        sizeItem[i].classList.add('chosen')
    })
}

////////////
let colorsItem = document.querySelectorAll('.color');

for(let i = 0; i<colorsItem.length; i++){
    colorsItem[i].addEventListener('click', function () {
        for(let j = 0; j<colorsItem.length; j++) {
            colorsItem[j].classList.remove('chosen')
        }
        colorsItem[i].classList.add('chosen')
    })
}
////////////
let productBtn = document.querySelector('.product__button');

let sizesButton = document.querySelectorAll('.size');
let colorsButton = document.querySelectorAll('.color');

let isChooseSize = false;
let isChooseColor = false;

for (let i = 0; i<sizesButton.length; i++) {
    sizesButton[i].addEventListener('click', function () {
        item.size = this.textContent;
        let chosenSize = document.querySelector('.size.chosen');
        if (chosenSize) {
            isChooseSize = true;
        }
    })
}
for (let i = 0; i<colorsButton.length; i++) {
    colorsButton[i].addEventListener('click', function () {
        item.color = this.getAttribute('data-color');
        let chosenColor = document.querySelector('.color.chosen');
        if (chosenColor) {
            isChooseColor = true;
        }
    })
}

productBtn.addEventListener('click', function () {
    if (isChooseSize === false || isChooseColor === false) {
        document.querySelector('.popup').style.display = 'block';
    } else {
        productBtn.textContent = 'product added';
        productBtn.style.background = '#008000';
        productBtn.style.outline = 'none';
        setInterval(function () {
            let goods;
            if (localStorage.getItem('goods') !== null) {
                goods = JSON.parse(localStorage.getItem('goods'));
            } else {
                goods = [];
            }
            goods.push(item);
            localStorage.setItem('goods', JSON.stringify(goods));
            window.location.href = 'shoppingBag.html';
        },1000)
    }
})
////

////close popup
document.querySelector('.popup p').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
})
