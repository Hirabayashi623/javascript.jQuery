$(function(){
	//変数の定義
	var $color_default = '#dedede';
	var $color_selected = '#9d0';

	//共通設定
	$('td').css({
		'color': 'white',
		'background-color': $color_default,
		'cursor': 'default'
	});

	//clickイベント
	$('.tab01 td').on('click', function(){
		$(this).css('background-color', $color_selected);
	});

	//focusイベント
	$('.tab02 td').on('focus', function(){
		$(this).css('background-color', $color_selected);
	});

	//mouseover,mouseleaveイベント
	$('.tab03 td').on({
		mouseover: function(){
			$(this).css('background-color', $color_selected);
		},
		mouseleave: function(){
			$(this).css('background-color', $color_default);
		}
	});
});