let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('change');
    nav.classList.toggle('change');
})

$(".arrow").on('click', function () {
    $(window).scrollTop($('.experience').offset().top)
})

$(".experience-btn").on('click', function () {
    $(window).scrollTop($('.experience').offset().top)
})

$(".islands-btn").on('click', function () {
    $(window).scrollTop($('.islands').offset().top)
})

$(".warranty-btn").on('click', function () {
    $(window).scrollTop($('.warranty').offset().top)
})

$(".contact-btn").on('click', function () {
    $(window).scrollTop($('.footer-section').offset().top)
})

$('.slide-btn').on('click', function () {
    $('.gallery').toggleClass('show');
    $('.slide-btn').toggleClass('show')
})