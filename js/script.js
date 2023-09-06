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
const imgBlock = document.querySelector('.imgs');
const imgOne = document.querySelector('.img__item_1');
const imgTwo = document.querySelector('.img__item_2');
const imgThree = document.querySelector('.img__item_3');
let speedOne = 1;
let speedTwo = 1;
let speedThree = 1;

function movementElems() {
    let imgOneTop = parseInt(getComputedStyle(imgOne).top);
    let imgTwoTop = parseInt(getComputedStyle(imgTwo).top);
    let imgThreeTop = parseInt(getComputedStyle(imgThree).top);

    let imgOnePosY = imgOne.getBoundingClientRect().y;
    let imgTwoPosY = imgTwo.getBoundingClientRect().y;
    let imgThreePosY = imgThree.getBoundingClientRect().y;

    const imgOneHeight = parseInt(imgOne.clientHeight);
    const imgTwoHeight = parseInt(imgTwo.clientHeight);
    const imgThreeHeight = parseInt(imgThree.clientHeight);

    const imgBlockPosY = imgBlock.getBoundingClientRect().y;
    const imgBlockHeight = parseInt(imgBlock.clientHeight);

    const topOne = imgBlockPosY + imgBlockHeight - imgOneHeight;
    const bottomOne = imgBlockPosY + imgOneHeight;
    const topTwo = imgBlockPosY + imgBlockHeight - imgTwoHeight;
    const bottomTwo = imgBlockPosY + imgTwoHeight;
    const topThree = imgBlockPosY + imgBlockHeight - imgThreeHeight;
    const bottomThree = imgBlockPosY + imgThreeHeight;

    if(window.innerWidth > 916){
        imgOne.style.top = `${imgOneTop + speedOne}px`;

        if(imgOnePosY < topOne){
            speedOne = 1;
        }
        if(imgOnePosY + imgOneHeight > bottomOne){
            speedOne = -1;
        }

        imgTwo.style.top = `${imgTwoTop + speedTwo}px`;

        if(imgTwoPosY < topTwo){
            speedTwo = 1;
        }
        if(imgTwoPosY + imgTwoHeight > bottomTwo){
            speedTwo = -1;
        }

        imgThree.style.top = `${imgThreeTop + speedThree}px`;

        if(imgThreePosY < topThree){
            speedThree = 1;
        }
        if(imgThreePosY + imgThreeHeight > bottomThree){
            speedThree = -1;
        }
    } 
    // else{
    //     imgOne.style.top = `${imgOneTop + speedOne}px`;
    // }
    requestAnimationFrame(movementElems);
}

requestAnimationFrame(movementElems);
