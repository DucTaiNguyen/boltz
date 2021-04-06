console.log('Hello CFD');

let nav = document.querySelector('.nav');
let btnmenu = document.querySelector('header .btnmenu');

// btnmenu.addEventListener('click', toggleMenu);
btnmenu.onclick = function toggleMenu() {
    nav.classList.toggle('active');
    this.classList.toggle('active');
}


//
window.addEventListener('resize', function () {
    let positionResize = window.innerWidth;
    if (positionResize > 985) {
        nav.classList.remove('active')
    }
    // console.log(positionResize)
})



///#################################################################################################

let lang = document.querySelector('.lang')
let langCurrent = document.querySelector('.lang .lang__current span');
let langOpt = document.querySelector('.lang .lang__option');
let langItems = document.querySelectorAll('.lang .lang__option a')
lang.addEventListener('click', function (e) {
    e.stopPropagation();
    lang.classList.toggle('active');
    // console.log(lang);
});



langItems.forEach(function (item) {
    item.addEventListener('click', function () {
        let langText = this.textContent;
        let langCurrentSpan = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentSpan;
        // console.log(langCurrentSpan);
    })
})

document.addEventListener('click', function () {


    lang.classList.remove('active');
})


//###########################################################################

let menu = document.querySelectorAll('header .menu a');
let heightHeader = document.querySelector('header').offsetHeight;//chieu cao va padding
let sections = [];

function removeActiveMenu() {
    menu.forEach(function (menu_element) {
        menu_element.classList.remove('active');
    })
}

menu.forEach(function (element, index) {
    let className = element.getAttribute('href').replace('#', "");
    let section = document.querySelector('.' + className);
    sections.push(section);
    element.addEventListener('click', function (e) {

        e.preventDefault();
        let positionSection = section.offsetTop;
        window.scrollTo({
            top: positionSection - heightHeader + 1,
            behavior: 'smooth'
        })
        // removeActiveMenu();
        // element.classList.add('active');
    })
})

window.addEventListener('scroll', function () {
    let positionScroll = window.pageYOffset;
    // console.log(positionScroll);
    sections.forEach(function (section, index) {

        if (positionScroll > section.offsetTop - heightHeader && positionScroll < section.offsetTop + section.offsetHeight) {
            removeActiveMenu();
            menu[index].classList.add('active');
        } else {
            menu[index].classList.remove('active');

        }
    })
})

//#########################################################################################################################################
// Back to To
let backtotop = document.querySelector('.back-to-top');
backtotop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
let positionSectionProduct = document.querySelector('.product').offsetTop;
window.addEventListener('scroll', function () {
    let positionScroll = window.pageYOffset;
    // console.log(positionScroll);
    if (positionScroll > positionSectionProduct) {
        backtotop.style.display = 'block';

    } else {
        backtotop.style.display = 'none';
    }
})

////########## POUP VIDEOS #####################################

let button_videos = document.querySelectorAll('.play_button');
let popup_videos = document.querySelector('.popup-video');
let close_popup_video = document.querySelector('.popup-video .close');
let iframe = document.querySelector('.popup-video iframe');
button_videos.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function () {
        let video_id = button.getAttribute('data-video-id');
        iframe.setAttribute('src', "https://www.youtube.com//embed/" + video_id);
        console.log(video_id);
        popup_videos.style.display = 'flex';
    })
})

close_popup_video.addEventListener('click', function () {
    iframe.setAttribute('src', '');
    popup_videos.style.display = 'none';
})

document.querySelector('.popup-video').addEventListener('click', function (event) {

    // console.log(event);
    iframe.setAttribute('src', '');
    popup_videos.style.display = 'none';
})

//############################## Slider ###########################
// 

let listItemSlider = document.querySelectorAll('.slider__item');
let currentSlider = 0;
let number = document.querySelector('.paging__number');

listItemSlider.forEach(function (itemSlider, index) {
    if (itemSlider.classList.contains('active')) {
        currentSlider = index;
    }
})


number.innerHTML = (currentSlider + 1).toString().padStart(2, '0');
console.log(number);






// console.log(currentSlider);
document.querySelector('.control__btn.next').addEventListener('click', function () {
    if (currentSlider < listItemSlider.length - 1) {
        // listItemSlider[currentSlider].classList.remove('active');
        // listItemSlider[currentSlider + 1].classList.add('active');
        // currentSlider++;

        goTo(currentSlider + 1);
    } else {
        // listItemSlider[currentSlider].classList.remove('active');
        // listItemSlider[0].classList.add('active');
        // currentSlider = 0;
        goTo(0);
    }



})

document.querySelector('.control__btn.prev').addEventListener('click', function () {
    // console.log(1);
    if (currentSlider > 0) {
        // listItemSlider[currentSlider].classList.remove('active');
        // listItemSlider[currentSlider - 1].classList.add('active');
        // currentSlider--;
        goTo(currentSlider - 1);
    } else {
        // listItemSlider[currentSlider].classList.remove('active');
        // listItemSlider[listItemSlider.length - 1].classList.add('active');
        // currentSlider = listItemSlider.length - 1;
        goTo(listItemSlider.length - 1);
    }


})

function goTo(index) {
    listItemSlider[currentSlider].classList.remove('active');
    listItemSlider[index].classList.add('active');
    currentSlider = index;
}