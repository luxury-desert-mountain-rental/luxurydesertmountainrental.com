$(function(){

	setMenuStatus();

	window.onhashchange = setMenuStatus;

	function setMenuStatus(){
		console.log("set");
		$('#nav li.active').removeClass('active');
		if(window.location.href.indexOf('booking') >= 0){
			$('#nav li.booking').addClass('active');
		}else if(window.location.href.indexOf('photos') >= 0){
			$('#nav li.photos').addClass('active');
		}else if(window.location.href.indexOf('contact') >= 0){
			$('#nav li.contact').addClass('active');
		}else{
			$('#nav li.home').addClass('active');
		}
	}

});
