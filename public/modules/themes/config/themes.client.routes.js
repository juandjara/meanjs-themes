'use strict';

// Setting up route
angular.module('themes').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listThemes', {
			url: '/themes',
			templateUrl: 'modules/themes/views/list-themes.client.view.html'
		});
	}
]);
