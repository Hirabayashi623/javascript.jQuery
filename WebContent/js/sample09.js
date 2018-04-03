$(function(){
	//フェードイン
	$('.sample01').css({
		'width': 50,
		'height' : 50,
		'background-color' : '#9d0',
		'display' : 'none'
	});
	$('.button01').on({
		'click' : function(){
			$('.sample01').fadeIn(1000);
		}
	})

	$('.button02').on({
		'click' : function(){
			$('.sample01').fadeOut('slow');
		}
	})

	$('.button03').on({
		'click' : function(){
			$('.sample01').slideDown('slow');
		}
	})

	$('.button04').on({
		'click' : function(){
			$('.sample01').slideUp('slow');
		}
	})

	$('.button05').on({
		'click' : function(){
			$('.sample01').slideToggle(500);
		}
	})
});