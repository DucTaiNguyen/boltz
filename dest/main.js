console.log('Hello CFD');

let nav = document.querySelector('.nav');
let btnmenu = document.querySelector('header .btnmenu');

// btnmenu.addEventListener('click', toggleMenu);
btnmenu.onclick = function toggleMenu() {
    nav.classList.toggle('active');
    this.classList.toggle('active');
}

let lang = document.querySelector('.lang')
let langCurrent = document.querySelector('.lang .lang__current');
let langOpt = document.querySelector('.lang .lang__option');
lang.addEventListener('click', function () {

    lang.classList.toggle('active');
})
