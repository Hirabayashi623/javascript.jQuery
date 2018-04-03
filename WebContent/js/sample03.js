$(function() {
	//共通設定
	$('td').css({
		'color': 'white',
		'background-color': '#aaa'
	});

	//findセレクタ
	$('.tab01').find('.col03').addClass('target');
	$('.tab01 .target').css({
		'color': 'white',
		'background-color': '#8b0'
	});

	//prevセレクタ
	$('.tab02 .col03').prev().addClass('target');
	$('.tab02 .col03').css({
			'color':'white',
			'background-color':'#3cd'
	});
	$('.tab02 .target').css({
		'color': 'white',
		'background-color': '#8b0'
	});

	//nextセレクタ
	$('.tab03 .col03').next().addClass('target');
	$('.tab03 .col03').css({
			'color':'white',
			'background-color':'#3cd'
	});
	$('.tab03 .target').css({
		'color': 'white',
		'background-color': '8b0'
	});

	//eqセレクタ
	$('.tab04 td').eq(2).addClass('target');
	$('.tab04 .target').css({
			'color':'white',
			'background-color':'#3cd'
	});

	//firstセレクタ
	$('.tab05 td').first().addClass('target');
	$('.tab05 .target').css({
			'color':'white',
			'background-color':'#dc3'
	});

	//lastセレクタ
	$('.tab06 td').last().addClass('target');
	$('.tab06 .target').css({
			'color':'white',
			'background-color':'#dc3'
	});

	//isセレクタ
	if($('.tab07 td').is($('.tab07 td:even'))){
		$('.tab07 td:even').addClass('target');
	}
	$('.tab07 .target').css({
			'color':'white',
			'background-color':'#d33'
	});

	//notセレクタ
	$('.tab08 td').not('.col03').addClass('target');
	$('.tab08 .target').css({
			'color':'white',
			'background-color':'#8b0'
	});
	$('.tab08 .col03').css({
		'color': 'white',
		'background-color': '#3cd'
	})

	//childrenセレクタ
	$('.button09').on('click', function() {
		$('.tab09 .row01').children().addClass('target');
		$('.tab09 .target').css({
			'color':'white',
			'background-color':'#8b0'
		});
	});
	$('.tab09 .row01').children().css({
		'color': 'white',
		'background-color': '#3cd'
	});

	//parentセレクタ
	$('.button10').on('click', function() {
		$('.tab10 .row01 span').parent().addClass('target');
		$('.tab10 .target').css({
			'color':'white',
			'background-color':'#8b0'
		});
	});
	$('.tab10 .row01 span').parent().css({
		'color': 'white',
		'background-color': '#3cd'
	});

});