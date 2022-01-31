new Swiper(".swiper",{
    effect:"coverflow",
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    speed:1500,
    loop:true,
    navigation: { //добовляем стрелк
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { //добовляем булиты
        el: '.swiper-pagination', //добовляем елемент
        type: 'bullets', //добовляем тип 
        clickable: true, //добовляем нажатие
        dynamicBullets: true, //добовляем трансформацию булитов
    },    
    
})


let hamburgesa = document.querySelector(".hamburgesa");
let navLinks = document.querySelector(".nav__elements");
hamburgesa.onclick = function(){
hamburgesa.classList.toggle("hamburgesa_active");
navLinks.classList.toggle("nav__links_active")
}