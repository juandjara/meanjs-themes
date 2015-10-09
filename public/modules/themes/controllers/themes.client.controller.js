'use strict';

// Articles controller
angular.module('themes').controller('ThemesController', ['$scope', '$http', 'Themes', 
	function($scope, $http, Themes) {
        $scope.currentTheme = '';
        $scope.themes = [];
        $scope.currentTheme = Themes.get();
        $scope.find = function(){
            $http.get('http://api.bootswatch.com/3/').then(
                function onSuccess(response){
                    if(!!response.data.themes){
                        response.data.themes.forEach(function(theme){
                            var parsedTheme = {
                                name: theme.name,
                                description: theme.description,
                                img: theme.thumbnail,
                                css: theme.cssCdn
                            };
                            $scope.themes.push(parsedTheme);
                        });
                        var defaultTheme = {
                            name: 'Default',
                            description: 'Default bootstrap theme',
                            img: '',
                            css: ''
                        };
                        $scope.themes.push(defaultTheme);
                    }
                    else{
                        console.error('response object contained no themes');
                    }
                },
                function onError(response){
                    console.error('An error was produced while querying bootswatch api');
                }
             );
        };

        $scope.setTheme = function(theme){
            Themes.set(theme);
            $scope.currentTheme = Themes.get();
            Themes.applyTheme(theme.name);
        };
	}
]);
