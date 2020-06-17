
    let goods = JSON.parse(localStorage.getItem('goods'));

    for (let i = 0;i<goods.length; i++){
        goods[i].amount = function () {
            return (this.quantity * this.price).toFixed(2) + ' $' ;
        };
    }

    getBasketCount();

///// products output

 function render () {

     let table = document.querySelector('.table');
     let content = `
<ul class="head">
        <li>Product</li>
        <li>Description</li>
        <li>color</li>
        <li>size</li>
        <li>QTY</li>
        <li>Amount</li>
        <li>delete</li>
</ul>
<hr/>
`;
     for (let i = 0; i<goods.length; i++){
         content += `
 <div class="itemRow">
 <div class="group-1"">
    <div class="group-2">
        <div class="bag__img elem">
            <img src="img/catalog/${goods[i].img}" />
        </div>
    </div>
    <div class="group-3">
        <div class="elem">${goods[i].name}</div>
        <div class="elem">${goods[i].color}</div>
        <div class="elem">${goods[i].size}</div>
        <div class="elem">
            <form class="bag__counter">
                <input type="number" class="quantity" name="quantity" min="1" value="${goods[i].quantity}" data-id="${goods[i].id}" />
            </form>
        </div>
    </div >
</div>
    <div class="group-4">
        <div class="elem">${goods[i].amount()}</div>
        <div class="elem">
            <div class="bag__delete">
                <i class="icon i-plus-solid" data-id="${goods[i].id}"></i>
            </div>
        </div>
    </div>
</div>
    <hr>
`
     }
     table.innerHTML = content;
     document.querySelector('.basketCounter span').innerHTML = basketCount;
     addEventQuantity();
     addEventDel()
     result();

 }
render();
///// result
function result (){
    let content = document.querySelector('.subtotal span')
    let res = 0;
    for (let i = 0; i<goods.length; i++){
        res += goods[i].price * goods[i].quantity;
    }
    content.innerHTML = res.toFixed(2) + ' $'
}
////addEventQuantity
function addEventQuantity() {
    let count = document.querySelectorAll('.quantity');
    for (let i = 0; i<count.length; i++) {
        count[i].addEventListener('change', function (e) {
            let target = e.target;
            let id = target.getAttribute('data-id');
            for (let j = 0; j<goods.length; j++){
                if(goods[j].id === id){
                    goods[j].quantity = target.value;
                }
            }
            localStorage.setItem('goods', JSON.stringify(goods));
            getBasketCount();
            render();
        })
    }
}
////delete
 function addEventDel() {
     let del = document.querySelectorAll('.bag__delete')
     for(let i = 0; i<del.length; i++) {
         del[i].addEventListener('click', deleteItem)
     }
 }
 function deleteItem (e) {
     let target = e.target;
     let id = target.getAttribute('data-id')
     for (let i = 0; i<goods.length; i++) {
         if (id === goods[i].id) {
             goods.splice(i,1)
         }
     }
     localStorage.setItem('goods', JSON.stringify(goods));
     getBasketCount();
     render();
 }
 ///getBasketCount
function getBasketCount() {
    basketCount = 0;
    for (let j = 0; j<goods.length; j++){
        basketCount += +goods[j].quantity;
    }
}
///change location
 let orderBtn = document.querySelector('.bag__order')
 orderBtn.addEventListener('click', function () {
     window.location.href = 'thanks.html';
 });
    localStorage.setItem('goods', JSON.stringify(goods));
