(function (jq) {
	jq(function () {
		//adds the separator elements to the menu, which, unfortunately,
		//need to be separate elements
		jq('#the-menu .main-menu > li').not(':last-child').after('<li class="separator"/>');

		jq('.main-menu li').addClass(function () {
			//if the element has sub ul elements, 
			//add a class to it so we can distinguish it from those that don't
			if (jq(this).children('ul').length > 0) {
				return 'has-children';
			} 
		});

		// jq('.main-menu').superfish({
		// 	autoArrows: false
		// });
	});
}(window.jQuery));