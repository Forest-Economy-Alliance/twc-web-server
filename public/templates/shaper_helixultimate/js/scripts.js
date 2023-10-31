jQuery(document).ready(function($) {
		 $("#currentYear").text( (new Date).getFullYear() );
  // COUNTER
	$('.odometer').appear(function(e){var odo=$(".odometer");odo.each(function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber);});});
  
 // Seach Modal
$(document).ready(function () {
				$('.search_menu').on("click", ".search_open", function (e) {
				    e.stopPropagation();
					$('.search_modal').addClass('show');
				});
				$('.search_close').on("click", function () {
					$('.search_modal').removeClass('show');
				});
				$('.search_modal').on("click", function () {
					$('.search_modal').removeClass('show');
				});
				$(".search_box").on('click', function (e) {
					e.stopPropagation();
				});				
			});  
  
	 $("#single_slide").owlCarousel({
                    items: 1, margin:20, 
					loop: true,dots:false,autoplay:true,nav:true,
					smartSpeed:1200,autoplayTimeout: 6000,
					autoplayHoverPause: true,responsiveClass:true,
					/* animateOut: 'animate__slideInLeft',
					animateIn: 'animate__slideInRight', */
					 navText: [ '<span class="la la-angle-left"></span>', '<span class="la la-angle-right"></span>' ],
					responsive:{
        0:{
            items:1, dots:true,
        },
        768:{
            items:1, 
        },
		1200:{
            items:1, 
        }
    }	
		});
		 
  $(function(){
/*	$('.news_ticker').easyTicker({
		direction: 'up',
		easing: 'swing', interval: 2000
	});
	}); */
$("p, a, h3, h5, h6, li, span, td, th").jfontsize({
                btnMinusClasseId: "#jfontsize-m",
                btnDefaultClasseId: "#jfontsize-d",
                btnPlusClasseId: "#jfontsize-p",
            });
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/*
$(window).scroll(function() {
    if ($(this).scrollTop()>0)
     {
        $('.floating_media').show(500);
     }
    else
     {
      $('.floating_media').hide(1000);
     }
  });
  
  
  $(document).ready(function(){
    $("#popup_window").animate({bottom: '-5px'}, "slow");
    $("#popup_close").click(function(){
        $("#popup_window").animate({bottom: '-50%'}, "slow");
    });
  */  

});
});

  


					
					
   