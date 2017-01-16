$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.menu').toggleClass('ouvert');
		$('#main').toggleClass('ouvert');
	});
});

$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
	setTimeout(function(){
		$('body').addClass('sho');
	}, 2400);
});