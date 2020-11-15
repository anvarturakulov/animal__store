// Main js file

"use strict";

document.addEventListener('DOMContentLoaded', ()=>{
    let menuBtn = document.querySelector('.menu__btn');
    let menu = document.querySelector('.menu');


    menuBtn.addEventListener('click',()=>{
        if (menu.style.display == 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }

    });

});