$(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
       //რომ ცამოჩნდეს ღილაკები (previuos & next)
       arrows: true,
       //რომ გამოჩნდეს ბურთულები
       dots:true,
       centermode:true,
       centerpadding:'0',
    })
});

// burger

let navbarlinks = document.getElementById('nav');
let toggleButtonBurger = document.getElementById ('toggleButton')

toggleButtonBurger.addEventListener ('click', function () {
    navbarlinks.classList.toggle('active');
    
});