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

    const imgOneHeight = parseInt(imgOne.clientHeight);
    const imgTwoHeight = parseInt(imgTwo.clientHeight);
    const imgThreeHeight = parseInt(imgThree.clientHeight);

    if(window.innerWidth > 916){
        let imgOnePosY = imgOne.getBoundingClientRect().y;
        let imgTwoPosY = imgTwo.getBoundingClientRect().y;
        let imgThreePosY = imgThree.getBoundingClientRect().y;

        const imgBlockPosY = imgBlock.getBoundingClientRect().y;
        const imgBlockHeight = parseInt(imgBlock.clientHeight);

        const topOne = imgBlockPosY + imgBlockHeight - imgOneHeight;
        const bottomOne = imgBlockPosY + imgOneHeight;
        const topTwo = imgBlockPosY + imgBlockHeight - imgTwoHeight;
        const bottomTwo = imgBlockPosY + imgTwoHeight;
        const topThree = imgBlockPosY + imgBlockHeight - imgThreeHeight;
        const bottomThree = imgBlockPosY + imgThreeHeight;

        imgOne.style.top = `${imgOneTop + speedOne}px`;

        if(imgOnePosY < topOne){
            speedOne = 1;
        }
        if(imgOnePosY + imgOneHeight > bottomOne){
            speedOne = -2;
        }

        imgTwo.style.top = `${imgTwoTop + speedTwo}px`;

        if(imgTwoPosY < topTwo){
            speedTwo = 1;
        }
        if(imgTwoPosY + imgTwoHeight > bottomTwo){
            speedTwo = -2;
        }

        imgThree.style.top = `${imgThreeTop + speedThree}px`;

        if(imgThreePosY < topThree){
            speedThree = 1;
        }
        if(imgThreePosY + imgThreeHeight > bottomThree){
            speedThree = -2;
        }
    } 
    else{
        let imgOnePosX = imgOne.getBoundingClientRect().x;
        let imgTwoPosX = imgTwo.getBoundingClientRect().x;
        let imgThreePosX = imgThree.getBoundingClientRect().x;

        const imgBlockPosX = 0;
        const imgBlockWidth = window.innerWidth;

        const leftOne = imgBlockPosX + imgBlockWidth - imgOneHeight;
        const rightOne = imgBlockPosX + imgOneHeight;
        const leftTwo = imgBlockPosX + imgBlockWidth - imgTwoHeight;
        const rightTwo = imgBlockPosX + imgTwoHeight;
        const leftThree = imgBlockPosX + imgBlockWidth - imgThreeHeight;
        const rightThree = imgBlockPosX + imgThreeHeight;

        imgOne.style.top = `${imgOneTop + speedOne}px`;

        if(imgOnePosX < leftOne){
            speedOne = 1;
        }
        if(imgOnePosX + imgOneHeight > rightOne){
            speedOne = -2;
        }

        imgTwo.style.top = `${imgTwoTop + speedTwo}px`;

        if(imgTwoPosX < leftTwo){
            speedTwo = 1;
        }
        if(imgTwoPosX + imgTwoHeight > rightTwo){
            speedTwo = -2;
        }

        imgThree.style.top = `${imgThreeTop + speedThree}px`;

        if(imgThreePosX < leftThree){
            speedThree = 1;
        }
        if(imgThreePosX + imgThreeHeight > rightThree){
            speedThree = -2;
        }
   }
    requestAnimationFrame(movementElems);
}

requestAnimationFrame(movementElems);