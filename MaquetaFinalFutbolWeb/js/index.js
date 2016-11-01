$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("header").css({"background-color": "#151515"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "335px", "width": "300px","height": "300px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});