
let collageBlock = document.querySelectorAll('.collage__block');

for (let i = 0; i<collageBlock.length; i++){
    collageBlock[i].addEventListener('click', function () {
         window.location.href = 'categoryAll.html';
    })
}
document.querySelector('.check').addEventListener('click', function () {
    window.location.href = 'categoryAll.html';
})
///regular expression for mail
let reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
let singUpBtn = document.querySelector('.singUp__button');
let singUp = document.querySelector('.singUp__input');
singUpBtn.addEventListener('click', function () {
    let singUpValue = singUp.value;
    if (!(reg.test(singUpValue))) {
        document.querySelector('.wrongPass').style.display = 'block';
        document.querySelector('.correctPass').style.display = 'none';
        singUpValue = '';
        singUp.value = singUpValue;
    } else {
        document.querySelector('.wrongPass').style.display = 'none';
        document.querySelector('.correctPass').style.display = 'block';
        singUpValue = '';
        singUp.value = singUpValue;
    }
});

