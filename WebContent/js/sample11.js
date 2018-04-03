$(function() {

	var activeClass = 'active';

	// ハンバーガーボタン
	function hamburgBtn() {
		$('.btn_hamburger').on('click', function(event) {
			$button = $(this);
			event.preventDefault();

			$button.find('a').toggleClass(activeClass);
			$button.next().slideToggle(250);
		});
	};



	// DEMO 1, DEMO 2
	function demo1_2(triggerSelector) {
		// 引数で指定したトリガーをクリックしたとき、クリックしたトリガーの次の要素を展開
		$(triggerSelector).on('click', function(event) {
			$trigger = $(triggerSelector);
			event.preventDefault();

			$(this).toggleClass(activeClass);
			$(this).next().slideToggle(250);
		});
	};



	// DEMO 3
	function demo3(triggerSelector) {
		// 引数で指定したトリガーをクリックしたとき、クリックしたトリガーの次の要素を展開
		$(triggerSelector).on('click', function(event) {
			$trigger = $(triggerSelector);
			event.preventDefault();

			// 他に既に開いている項目がある場合は一度全て閉じる
			if (!$(this).hasClass(activeClass)) {
				if ($trigger.hasClass(activeClass)) {
					$trigger.removeClass(activeClass);
					$trigger.next().slideUp(250);
				}
			}

			$(this).toggleClass(activeClass);
			$(this).next().slideToggle(250);
		});
	};



	// 実行
	hamburgBtn();

	// 引数でトリガーを指定
	demo1_2('#demo1 .trigger');
	demo1_2('#demo2 .trigger');
	demo3('#demo3 .trigger');

});
