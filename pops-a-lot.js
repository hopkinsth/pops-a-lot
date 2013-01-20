(function (jq, sw) {
	jq(function () {
		var topLevelListItems = jq('.main-menu > li'),
			contentArea = jq('#content_area'),
			theBody = jq('#the-body'),
			flavorNavHTML,
			prependFlavorNav;

		flavorNavHTML = '<div class="clear"></div><div id="flavor-nav"><div class="nav-item london-kettle"><a href="/Articles.asp?ID=260"></a></div><div class="nav-item clandestine-caramel"><a href="/Articles.asp?ID=269"></a></div><div class="nav-item roman-holiday"><a href="/Articles.asp?ID=267"></a></div><div class="nav-item saigon-sunrise"><a href="/Articles.asp?ID=268"></a></div><div class="nav-item brazilian-samba last"><a href="/Articles.asp?ID=261"></a></div><div class="nav-item southern-surprise"><a href="/Articles.asp?ID=263"></a></div><div class="nav-item honolulu-aloha"><a href="/Articles.asp?ID=262"></a></div></div><div class="clear"></div>';
		//adds the separator elements to the menu, which, unfortunately,
		//need to be separate elements

		//if there's a div in the content with the id copy-to-external, grab
		//the elements in the contents div and move them elsewhere
		//to thwart volusion's stupid template "system"
		
		if (jq('#content_area #copy-to-external').length === 1) {
			if (contentArea.find('#prepend-flavor-menu').length === 1) {
				prependFlavorNav = true;
			}

			theBody.prepend( contentArea.find('#to-copy').html() );
			contentArea.remove();

			if (prependFlavorNav) {
				theBody.prepend( flavorNavHTML );
			}
		}

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