(function (jq, sw) {
	jq(function () {
		var topLevelListItems = jq('.main-menu > li');
		//adds the separator elements to the menu, which, unfortunately,
		//need to be separate elements

		topLevelListItems.each(function () {
			//adds item<num> classes to the top-level items
			jq(this).addClass( 'item' + ( topLevelListItems.index(this) + 1 ) );
		}).not(':last-child').after('<li class="separator"/>');

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
		
		sw.registerObject('home-carousel-flash', '9.0.0');

		jq('body').on('mouseenter', '.nutrition-info', function (evt) {
			jq('.nutrition-label', this).show();
		}).on('mouseleave', '.nutrition-info', function (evt) {
			jq('.nutrition-label', this).hide();
		})
	});
}(window.jQuery, window.swfobject));