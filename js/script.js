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