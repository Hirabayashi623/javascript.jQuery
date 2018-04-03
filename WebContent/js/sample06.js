$(function(){
	//text
	$('.sample01').text('<p>text</p>');

	//html
	$('.sample02').html('<p>html</p>');
	$('.sample02 p').css({
		'background-color': '#dedede'
	});

	//append
	$('.sample03 tr').append('<td>4</td>');

	//prepend
	$('.sample04 tr').prepend('<td>0</td>');

	//appendTo
	$('.sample05 td').eq(1).appendTo('.sample05 tr');

	//prependTo
	$('.sample06 td').eq(1).prependTo('.sample06 tr');

	//before
	$('.sample07 td').on({
		click: function(){
			$(this).before('<td>*</td>');
		}
	});

	//after
	$('.sample08 td').on({
		click: function(){
			$(this).after('<td>*</td>');
		}
	});

	//remove
	$('.sample09 td').on({
		click: function(){
			$(this).remove();
		}
	});
});