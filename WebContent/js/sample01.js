//class「class01」を持つ要素をクリックしたときにアラートを発生させる
$(function(){
	$('.class01').on('click', function(){
		alert('click event');
	});
});

//class「class02」を持つ要素をクリックしたときに、配色を変更する
$(function(){
	$('.class02').on({
		click: function(event){
			event.preventDefault();
			$('body').toggleClass('toggle_color');
		},
		mouseenter: function(){
			$(this).css('background-color', '#1a1a1a');
		},
		mouseleave: function(){
			$(this).css('background-color', 'transparent');
		}
	});
});