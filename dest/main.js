console.log('Hello CFD');

// let $carousel = $('.slider__item-wrap');
// $carousel.flickity({
//     //options
//     cellAlign: 'left',
//     contain: true,
//     wrapAround: true,
//     prevNextButtons: false,
//     // pageDots: false,
//     on: {
//         ready: function () {
//             // console.log('flicktify');
//             let dotted = $('.flickity-page-dots'); // Tao DOM ao
//             // console.log(dotted);
//             paging = $('.paging .paging__dotted');
//             dotted.appendTo(paging);
//         },
//         change: function (index) {
//             let number = $('.paging .paging__number');
//             let indexPage = index + 1;
//             // console.log(index);
//             number.text(indexPage.toString().padStart(2, 0));
//             // console.log(number);
//         }
//     }
// })

// $('.control .prev').on('click', function () {
//     console.log('dawdaw')
//     $carousel.flickity('previous');
// })
// $('.control .next').on('click', function () {
//     $carousel.flickity('next');
// })

// $('.main-carousel').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true,
//     wrapAround: true,
//     prevNextButtons: false,
// });


let listItemSlider = $('.slider__item');
let currentSlider = 0;
let number = $('.paging__number');
let dot_li = $('.paging__dotted ol li');

listItemSlider.each(function (index) {

    currentSlider = $(this).hasClass('active') ? index : currentSlider;
}
)

function showNumber(index) {
    number.html((index).toString().padStart(2, '0'));
}

// Mac Dinh
showNumber(currentSlider + 1);


$(dot_li[currentSlider]).addClass('is-selected');




// console.log(currentSlider);
$(document).on('click', '.control__btn.next', function () {
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

$(document).on('click', '.control__btn.prev', function () {
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
    $(listItemSlider[currentSlider]).removeClass('active'); // remove truoc, roi add sau
    $(listItemSlider[index]).addClass('active');
    $(dot_li[currentSlider]).removeClass('is-selected');
    $(dot_li[index]).addClass('is-selected');
    currentSlider = index;
    showNumber(currentSlider + 1);
}

dot_li.click(function () {
    goTo($(this).index());
})