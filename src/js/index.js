// Main js file

"use strict";

document.addEventListener('DOMContentLoaded', ()=>{
    let menuBtn = document.querySelector('.menu__btn');
    let menu = document.querySelector('.menu');
    let countVisibleAnimals = 6;
    let animalsListLink = document.querySelector('.animals__list-link');

    let startDataAnimals = [
        {img : "/assets/img/catalog/cat2.jpg", sale : '-40%', name : "Кот полосатый", color : 'Коричневый окрас', old : '2 мес.', hand : '4', price : 30000, state : ''},
        {img : "/assets/img/catalog/cat1.jpg", sale : ''    , name : "Кот пушистый", color : 'Коричневый окрас', old : '6 мес.', hand : '4', price : 35000, state : 'sold-out'},
        {img : "/assets/img/catalog/cat3.jpg", sale : ''    , name : "Кот полосатый", color : 'Коричневый окрас', old : '6 мес.', hand : '4', price : 20000, state : ''},
        {img : "/assets/img/catalog/cat1.jpg", sale : '-30%', name : "Кот полосатый", color : 'Коричневый окрас', old : '4 мес.', hand : '4', price : 10000, state : ''},
        {img : "/assets/img/catalog/cat2.jpg", sale : '-10%', name : "Кот полосатый", color : 'Коричневый окрас', old : '4 мес.', hand : '4', price : 15000, state : ''},
        {img : "/assets/img/catalog/cat3.jpg", sale : '',     name : "Кот полосатый", color : 'Коричневый окрас', old : '2 мес.', hand : '4', price : 30000, state : 'sold-out'},
        {img : "/assets/img/catalog/cat1.jpg", sale : '-50%', name : "Кот полосатый", color : 'Коричневый окрас', old : '1 мес.', hand : '4', price : 40000, state : ''},
        {img : "/assets/img/catalog/cat2.jpg", sale : '',     name : "Кот полосатый", color : 'Коричневый окрас', old : '3 мес.', hand : '4', price : 40000, state : ''},
        {img : "/assets/img/catalog/cat3.jpg", sale : '',     name : "Кот полосатый", color : 'Коричневый окрас', old : '3 мес.', hand : '4', price : 10000, state : ''},
        {img : "/assets/img/catalog/cat3.jpg", sale : '-40%', name : "Кот полосатый", color : 'Коричневый окрас', old : '2 мес.', hand : '4', price : 5000, state : 'sold-out'},
        {img : "/assets/img/catalog/cat2.jpg", sale : '',     name : "Кот полосатый", color : 'Коричневый окрас', old : '2 мес.', hand : '4', price : 10000, state : ''},
        {img : "/assets/img/catalog/cat1.jpg", sale : '-30%', name : "Кот полосатый", color : 'Коричневый окрас', old : '3 мес.', hand : '4', price : 10000, state : ''},
        {img : "/assets/img/catalog/cat2.jpg", sale : '',     name : "Кот полосатый", color : 'Коричневый окрас', old : '7 мес.', hand : '4', price : 30000, state : ''},
        {img : "/assets/img/catalog/cat2.jpg", sale : '-20%', name : "Кот полосатый", color : 'Коричневый окрас', old : '7 мес.', hand : '4', price : 20000, state : ''},
        {img : "/assets/img/catalog/cat3.jpg", sale : '-15%', name : "Кот полосатый", color : 'Коричневый окрас', old : '8 мес.', hand : '4', price : 30000, state : 'sold-out'},
        {img : "/assets/img/catalog/cat1.jpg", sale : '-10%', name : "Кот полосатый", color : 'Коричневый окрас', old : '2 мес.', hand : '4', price : 30000, state : ''},
    ];

    let arrayAnimals = startDataAnimals;

    document.querySelector('.header__bottom-text').textContent = `Найдено ${startDataAnimals.length} котов`;
    
    function loadAnimalItems (arr) {
        let animalsItemBox = document.querySelector('.animals__item-box');
        
        animalsItemBox.innerHTML = '';
 
        arr.forEach((item) => {
            let animalNewItem = document.createElement('div');
            let bgBlack = '';
            let soldText = 'Купить';

            animalNewItem.classList.add('animal__item');
            if (item.state == 'sold-out') {
                bgBlack ='bg-black';
                soldText = 'Продан';
            }
            animalNewItem.innerHTML = `
                    <div class="animal__img-box">
                        <img class="animal__img" src="${item.img}"></img>
                        <div class="animal__sale">${item.sale}</div>
                        <img src="/assets/img/heart.svg" alt="" class="animal__sale-heart"> 
                    </div>
                    <div class="animal__infobox">
                        <div class="animal__name">${item.name}</div>
                        <div class="animal__pror-box">
                            <div class="animal__color">${item.color}</div>
                            <div class="animal__old-box">
                            <div class="animal__old">${item.old}</div>
                            <div class="animal__old-text">Возраст</div>
                            </div>
                            <div class="animal__hand-box">
                            <div class="animal__hand">${item.hand}</div>
                            <div class="animal__hand-text">Кол-во лап</div>
                            </div>
                        </div>
                        <div class="animal__price">${item.price} руб</div>
                    </div>
                    <div class="animal__link ${bgBlack}">${soldText}</div>
            `;
            animalsItemBox.append(animalNewItem);
        });

        let animalItem = document.querySelectorAll('.animal__item');
        let i = 0;
        animalItem.forEach(item => {
            i++;
            if (item.querySelector('.animal__sale').textContent == '') {
                item.querySelector('.animal__sale').classList.add('hide');
            }

            if (item.querySelector('.animal__sale').textContent == '') {
                item.querySelector('.animal__sale').classList.add('hide');
            }

            item.classList.remove('hide');

            if (i > countVisibleAnimals) {
                item.classList.add('hide');
            }
        });

        if (arr.length > 6) {
            animalsListLink.style.display = 'block';
            if (arr.length >= 12) {
                animalsListLink.textContent = 'Показать еще 6';
            } else {
                animalsListLink.textContent = `Показать еще ${arr.length-6}`;
            }
        }else {
            animalsListLink.style.display = 'none';
        }
        
    }

    function sortArrayByPrice(arr, side = true) {
        if (side) {
            arr.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                    return 0;
            });
        } else {
            arr.sort(function (a, b) {
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
                    return 0;
            });
        }
            
        loadAnimalItems(arr);
    }

    function sortArrayByOld(arr, side = true) {
        if (side) {
            arr.sort(function (a, b) {
                if (a.old > b.old) {
                    return 1;
                }
                if (a.old < b.old) {
                    return -1;
                }
                    return 0;
            });
        } else {
            arr.sort(function (a, b) {
                if (a.old > b.old) {
                    return -1;
                }
                if (a.old < b.old) {
                    return 1;
                }
                    return 0;
            });
        }
            
        loadAnimalItems(arr);
    }

    loadAnimalItems(arrayAnimals);

    let priceSortBox = document.querySelector('.price__sortbox');
    let priceArrow = document.querySelector('.price__arrow');
   
    priceSortBox.addEventListener('click', ()=>{
        if (priceArrow.classList.contains('up')) {
            priceArrow.classList.remove('up');
            sortArrayByPrice(arrayAnimals, false);
        } else {
            priceArrow.classList.add('up');
            sortArrayByPrice(arrayAnimals);
        }
    });


    //***

    let oldSortBox = document.querySelector('.old__sortbox');
    let oldArrow = document.querySelector('.old__arrow');
   
    oldSortBox.addEventListener('click', ()=>{
        if (oldArrow.classList.contains('up')) {
            oldArrow.classList.remove('up');
            sortArrayByOld(arrayAnimals, false);
        } else {
            oldArrow.classList.add('up');
            sortArrayByOld(arrayAnimals);
        }
    });

    animalsListLink.addEventListener('click', (e) => {
        countVisibleAnimals = countVisibleAnimals +6;
        loadAnimalItems(arrayAnimals);
        
        if (arrayAnimals.length > countVisibleAnimals) {
            animalsListLink.style.display = 'block';
            if (arrayAnimals.length >= (countVisibleAnimals+6)) {
                animalsListLink.textContent = 'Показать еще 6';
            } else {
                animalsListLink.textContent = `Показать еще ${arrayAnimals.length-countVisibleAnimals}`;
            }
        } else {
            animalsListLink.style.display = 'none';
        }
    });

    menuBtn.addEventListener('click',()=>{
        if (menu.style.display == 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
    let top = 0;
    window.addEventListener('scroll', ()=> {
        top =Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if (top > 600) {
            document.querySelector('.top__button').style.display = 'block';
        } else {
            document.querySelector('.top__button').style.display = 'none';
        }
    });

    let topButton = document.querySelector('.top__button');
    let t;
    function up() {
        let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
            window.scrollBy(0,-1);
            t = setTimeout(up(),20000);
        } else {
            clearTimeout(t);
        }
        return false;
    }

    topButton.addEventListener('click',()=>{
        up();    
    });

    let animalSaleHeart = document.querySelectorAll('.animal__sale-heart');

    animalSaleHeart.forEach(item =>{
        item.addEventListener('click', (e)=>{
            if (e.target.getAttribute('src') == "/assets/img/heart-white.svg") {
                e.target.setAttribute('src',"/assets/img/heart.svg");
            } else {
                e.target.setAttribute('src',"/assets/img/heart-white.svg");
            }
        });
    });


});