$(document).ready(function(){
    
    $('.button_open_form').click(function(){
        $('.close_form').fadeOut();
        var open_class=$(this).attr('open_class');
        $('.'+open_class).fadeIn();
    });
	
	/*
	$(".button").click(function(){
		jQuery.scrollTo(".portf_class", 800);
	});
	*/
	
	
	$('.counter_1').countdown({
		timestamp	: (new Date(2018, 04, 14)).getTime() + 01*01*01*60*1000
	});	
	
	$('.counter_2').countdown({
		timestamp	: (new Date(2018, 04, 14)).getTime() + 01*01*01*60*1000
	});	
	
	
	
	$(window).scroll(function () {
     	scroller=window.pageYOffset;
		if(scroller>900){
			$('.door_avto').animate({'left':'400px'},500);
		}
		
		
		if(scroller>1000){
			$('.avt_back').animate({'left':'2900px'},3000);	
			$('.circle_1').rotate({
				angle: 0, 
				animateTo:500,
				duration:6000,
			});
			$('.circle_2').rotate({
				angle: 0, 
				animateTo:500,
				duration:6000,
			});
		}
	});
	
	
	
	$(".button_tel").click(function(){
		$(".form_tels").fadeIn();
	});
	$(".close").click(function(){
		$(".close_form").fadeOut();
	});
	
	$(".CTA").each(function(){
		var ID=(Math.random() * (999 - 1) + 1).toFixed(0);
		
		var name=$(this).attr('name');
		var last_name=$(this).attr('last_name');
		var tel=$(this).attr('tel');
		var email=$(this).attr('email');
		var titles=$(this).attr('titles');
		
		$(this).append("<div class='title_main'>"+$(this).attr('title_main')+"</div>");
		
		$(this).append("<input class='titles_"+ID+"' type='hidden' value='"+titles+"'>");
		if(name){
			$(this).append("<input class='name_"+ID+"' type='text' placeholder='"+name+"'>");
		}
		if(last_name){
			$(this).append("<input class='last_name_"+ID+"' type='text' placeholder='"+last_name+"'>");
		}
		if(tel){
			$(this).append("<input class='tel_"+ID+"' type='text' placeholder='"+tel+"'>");
		}
		if(email){
			$(this).append("<input class='email_"+ID+"' type='text' placeholder='"+email+"'>");
		}
		$(this).append('<div onclick="CTA('+ID+')" class="button button_'+ID+'">'+$(this).attr('button')+'</div>');			
	});
});


function CTA(id){

		if($("input").is(".name_"+id)){
			var name=$(".name_"+id).val();
		}else{
			var name="0";	
		}
		
		if($("input").is(".last_name_"+id)){
			var last_name=$(".last_name_"+id).val();
		}else{
			var last_name="0";	
		}
		
		if($("input").is(".tel_"+id)){
			var tel=$(".tel_"+id).val();
		}else{
			var tel="0";	
		}
		
		if($("input").is(".email_"+id)){
			var email=$(".email_"+id).val();
		}else{
			var email="0";	
		}
		var titles=$(".titles_"+id).val();
		var what_use=name+"&"+last_name+"&"+tel+"&"+email;
		var send_email=$(".save_email").attr('email');
	 	$.post(
			"post.php",
			{
				what_use:what_use,
				send_email:send_email,
				titles:titles,
			},
			function(data){
				if(data!=""){
					$(".errors_show").html(data);
					$(".errors_show").slideDown();	
					setTimeout(function(){$(".errors_show").slideUp();},3000);
					$(".form_tel").fadeOut();
				}
			}
		);
}