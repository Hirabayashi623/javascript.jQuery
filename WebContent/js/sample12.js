$(function(){
	var activeClass = 'active';

	$('.triger').on({
		'click': function(){
			$(this).next('.target').slideToggle(250);
		}
	});

	$('.categoryList1 h3').on({
		'click': function(){
			$(this).toggleClass('active')
		}
	});

	$('.threeLines').on({
		'click': function(){
			$(this).toggleClass('active')
		}
	})
})