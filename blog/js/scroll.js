<script type="text/javascript">//<![CDATA[
jQuery(document).ready(function($){"use strict";$('#top-search a').on('click',function(e){e.preventDefault();$('.show-search').slideToggle('fast');});$('.to-top').click(function(){$('html, body').animate({scrollTop:0},800);return false;});$(document).ready(function(){$(".container").fitVids();});$('.menu').slicknav({prependTo:'.menu-mobile',label:''});});


 // Homepage Carousel
    $('.homepage-carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-nav slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-nav slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
             {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });


    // Homepage Slider and Gallery Slider
    $('.post-gallery').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      adaptiveHeight:true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-nav slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-nav slick-next"><i class="fa fa-angle-right"></i></button>'
    });


 // Related post
    $('.related-slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      adaptiveHeight:true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-nav slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-nav slick-next"><i class="fa fa-angle-right"></i></button>',

responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true, 
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });

$('#top-social').children().clone().appendTo('#author-social');
$('.post-body').fitVids();
$('.separator').css('float', '');
$('.separator,.separator a').css('margin-left', '').css('margin-right', '').css('margin-bottom', '');

//]]>
</script>