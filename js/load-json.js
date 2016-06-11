$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});
    
	var start = $('.swiper-container');
	var output = $('.swiper-wrapper');

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
		observer: true
    });
    start.append(swiper);

	$.ajax({
		url: 'http://gestisciapp.it/gruppodipalo/db_to_app_home.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<div class="swiper-slide"><img src="http://gestisciapp.it/gruppodipalo/images/'+item.img+'" style="width:100%;"></img></div>';			
				output.append(landmark);

			}); 
			
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
	
});
