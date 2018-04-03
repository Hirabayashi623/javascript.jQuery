$(function(){
	//color
	$('.sample01 td').css({
		'background-color': '#9d0'
	});

	//表示・非表示
	$('.sample02 td').on({
		click: function(){
			$(this).hide();
		}
	});
	$('.sample02 .show').on({
		click: function(){
			$('.sample02 td').show();
		}
	})
});