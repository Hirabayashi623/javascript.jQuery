// 処理用のファイル
$(function() {

	// find
	$('p').find('.demo01_target2').addClass('demo01_target4');

	// prev
	$('.demo02_target2').prev().addClass('demo02_target3');

	// next
	$('.demo03_target2').next().addClass('demo03_target3');

	// eq
	$('.demo04_inner p').eq(6).toggleClass('demo04_target');

	// first
	$('.demo05_inner p').first().toggleClass('demo05_target');

	// last
	$('.demo06_inner p').last().toggleClass('demo06_target');

	// is
	if($('.demo07_inner p').is($('.demo07_inner p:even'))) {
		$('.demo07_inner p:even').toggleClass('demo07_target');
	}

	// not
	$('.demo08_inner p').not('.demo08_target').addClass('.demo08_target2');

	// children
	$('.demo09_trigger').on('click', function() {
		$('.demo09_target p').children().toggleClass('demo09_target2');
	});

	// parent
	$('.demo10_trigger').on('click', function() {
		$('.demo10_target').parent().toggleClass('demo10_target2');
	});

});
