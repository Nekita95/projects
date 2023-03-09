/* $(document).ready(function(){
    $('.carousel__inner').slick({
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