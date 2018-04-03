$(function (){

	//width
	$('.sample01 .target').css({
		'background-color': '#ffcc55',
		'width': '100px',
		'height': '100px'
	});
	$('.sample01 .button01').on({
		click: function(){
			$('.sample01 .target').width(80);
		}
	});
	$('.sample01 .button02').on({
		click: function(){
			$('.sample01 .target').width(160);
		}
	});
	$('.sample01 .button03').on({
		click: function(){
			$('.sample01 .target').width(240);
		}
	});

	//height
	$('.sample02 .target').css({
		'background-color': '#ffcc55',
		'width': '100px',
		'height': '100px'
	});
	$('.sample02 .button01').on({
		click: function(){
			$('.sample02 .target').height(80);
		}
	});
	$('.sample02 .button02').on({
		click: function(){
			$('.sample02 .target').height(160);
		}
	});
	$('.sample02 .button03').on({
		click: function(){
			$('.sample02 .target').height(240);
		}
	});

	//attr
	var demo03_title = $('.google').attr('title');
	var demo03_href = $('.google').attr('href');
	$('.title').text(demo03_title);
	$('.href').text(demo03_href);

	//removeAttr
	$('.sample04 .button01').on({
		click: function(){
			$('.sample04 .google').removeAttr('href');
		}
	});

	//prop
	$('.sample05 .check').on({
		change: function(){
			$('.sample05 .prop').text($('.sample05 .check').prop('checked'));
		}
	});

	//addClass
	$('.sample06 td').css({
		'color': 'black',
		'background-color': '#dedede',
		'cursor': 'default'
	});
	$('.sample06 .col03').addClass('target');
	$('.sample06 .target').css({
		'color': 'white',
		'background-color': '#dc3'
	});

	//addClass
	$('.sample07 td').eq(2).removeClass('target');
	$('.sample07 td').css({
		'color': 'black',
		'background-color': '#dedede',
		'cursor': 'default'
	});
	$('.sample07 .target').css({
		'background-color': '#9d0',
		'cursor': 'default'
	});

	//toggleClass
	$('.sample08 .button').on({
		click: function(){
			$('.sample08 .button').toggleClass('target');
			$('.sample08 .button').css('background-color', '#dedede');
			$('.sample08 .target').css('background-color', '#9d0');
		}
	});

	//hasClass
	if($('.smaple09 td').hasClass('target')){
		$(this).css({
			'background-color': '#9d0'
		});
	}else{
		$(this).css({
			'background-color': '#dedede'
		});
	}

});