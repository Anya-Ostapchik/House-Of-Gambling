// меню (бургер)
const body = document.querySelector('body');
const headerNav = document.querySelector('.header__nav');
const nav = document.querySelector('.nav');
const btns = document.querySelector('.btns');
const burger = document.querySelector('.burger');
const burger__itm = document.querySelector('.burger__itm');

burger.addEventListener('click', function() {
    body.classList.toggle('active');
    headerNav.classList.toggle('nav');
    nav.classList.toggle('active');
    btns.classList.toggle('active');
    burger.classList.toggle('active');
    burger__itm.classList.toggle('active');
});

// в блоге активные ссылки синие
const blogItems = document.querySelectorAll('.blog__item');

for(let item of blogItems){
    item.addEventListener('click', function(){
        for(let elem of blogItems){
            if(elem.classList.contains('active')){
                elem.classList.remove('active');
            }
        }
        this.classList.add('active');
    });
}

// Изменение языка по клику
const btnLang = document.querySelector('.header__btn_lang');
const btnLangTxt = document.querySelector('.header__btn_lang_txt');

btnLang.addEventListener('click', function(){
    if(btnLangTxt.textContent === 'EN'){
        btnLangTxt.textContent = 'RU';
    } else{
        btnLangTxt.textContent = 'EN';
    }
});

// анимация с движением иконок
const imgOne = document.querySelector('.img__item_1');
const imgTwo = document.querySelector('.img__item_2');
const imgThree = document.querySelector('.img__item_3');