
renderItem('footwear','.coats .goods');
renderItem('sweatshirt','.sweatshirt .goods');
renderItem('shirt','.shirts .goods');

function renderItem(itemStr,innerContent) {
    let footwear = '';
    for (let i = 0; i<catalog.length; i++) {
        if (catalog[i].category === itemStr) {
            footwear +=
                `
              <div class="goods__block" data-id = '${catalog[i].id}'>
                    <div class="goods__block-img">
                        <img src="img/catalog/${catalog[i].preview}" alt="pic">
                    </div>
                    <div class="goods__block-text">
                        <h3>${catalog[i].title}</h3>
                        <p><em>${catalog[i].price} $</em></p>
                    </div>
                </div>
            `
        }
    }
    document.querySelector(innerContent).innerHTML = footwear;
}

let goods = document.querySelectorAll('.goods__block');
for (let i = 0; i<goods.length; i++){
    goods[i].addEventListener('click', function () {
        let itemId = this.getAttribute('data-id');
        localStorage.setItem('itemId', JSON.stringify(itemId));
        window.location.href = 'productDetails.html';
    })

}
