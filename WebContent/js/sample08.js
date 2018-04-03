$(function(){
	//ウィンドウの大きさ
	var widthOfWindow = $(window).width();
	var heightOfWindor = $(window).height();
	$('.sample01 .width .value').text(widthOfWindow);
	$('.sample01 .height .value').text(heightOfWindor);

	//要素の大きさ
	var widthOfBody = $('body').width();
	var heightOfBody = $('body').height();
	$('.sample02 .width .value').text(widthOfBody);
	$('.sample02 .height .value').text(heightOfBody);
});