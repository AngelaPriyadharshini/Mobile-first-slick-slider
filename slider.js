jQuery(document).ready(function(){
               jQuery('.container-middle').slick({
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   autoplay: true,
                   autoplaySpeed: 2000,
                   accessibility:true,
                   arrows:true,
                   adaptiveHeight: false,
                   draggable:true,
                   touchMove:true,
                   appendArrows:jQuery('button'),
                   prevArrow:'#btnPrevious',
                   nextArrow:'#btnNext',
                   responsive: [{
                       breakpoint: 1024,
                       settings: {
                           slidesToShow: 3,
                           slidesToScroll: 1,
                       }
                   },{
                       breakpoint: 992,
                       settings: {
                           slidesToShow: 3,
                           slidesToScroll: 1,
                       }
                   },{
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 1,
                           slidesToScroll: 1,
                       }
                   }, {
                       breakpoint: 480,
                       settings: {
                           slidesToShow: 1,
                           slidesToScroll: 1,
                           arrows:false,
                       } 
                   }]
               });
           });