$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('.swiper-wrapper');

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
