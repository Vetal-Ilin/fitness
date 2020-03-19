$(document).ready(function(){

    /* Cкрипт для меню бургер  */
    $('.header-major__menu__burger').click(function(event) {
        $('.header-major__menu__nav, .header-major__menu__burger, .header-major__menu__burger__span').toggleClass('active');
        $('body').toggleClass('lock');
    });

    /* Скрипт для уравнивания тектса по ширине #content-one */
    $('.content-one__text__top, .content-one__text__buttom').width($('.content-one__text__title').width());

    /* Скрипт для уравнивания блоков по высоте #content-two */
    $.fn.equivalent = function (){
      
        var $blocks = $(this),
        maxH    = $blocks.eq(0).height();

        $blocks.each(function() {
        
            if ( $(this).height() > maxH ) {
                maxH = $(this).height();
            }  

        });

        $blocks.height(maxH);
    }
    
    $('.content-two__cards__item').equivalent();

    /* Скрипт для уравнивания тектса по ширине #content-four */
    $('.content-four__trainers__item__text').width($('.content-four__trainers__img').width());
    
}); 