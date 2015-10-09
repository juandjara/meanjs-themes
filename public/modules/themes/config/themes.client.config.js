'use strict';

// Configuring the Articles module
angular.module('themes').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		// args marked with [...] are optional
		// addMenuItem(menuId, menuItemTitle, menuItemURL, menuItemType,
		//            [menuItemUIRoute], [isPublic], [roles], [position])
        Menus.addMenuItem('topbar', 'Themes', 'themes', 'item');
	}
]);
