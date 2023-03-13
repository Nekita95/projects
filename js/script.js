$(document).ready(function(){
    /*$('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/left.jpg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.jpg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  }); */

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.slick-prev').onclick = function () {
    slider.goTo('prev');
  };

  document.querySelector('.slick-next').onclick = function () {
    slider.goTo('next');
  };

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog__item__content').eq(i).toggleClass('catalog__item__content_active');
        $('.catalog__item__list').eq(i).toggleClass('catalog__item__list_active');
      })
    })
  }
  toggleSlide('.catalog__link');
  toggleSlide('.catalog__item__back');
})