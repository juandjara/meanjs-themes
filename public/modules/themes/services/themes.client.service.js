'use strict';

//Themes service used for communicating with the themes REST endpoints
angular.module('themes').factory('Themes',
	function() {
	    return {
            get: function getTheme(){
                if(typeof(Storage) !== 'undefined'){
                    var res = localStorage.getItem('currentTheme');
                    return res === null ? 'Default' : res;
                }else{
                    //TODO: Add fallback 
                    window.alert('No localStorage support in this browser');
                    return null;
                }
            },
            set: function setTheme(theme){
                if(typeof(Storage) !== 'undefined'){
                    localStorage.setItem('currentTheme', theme.name);
                }else{
                    //TODO: Add fallback 
                    window.alert('No localStorage support in this browser');
                }
            },
            nameToCss: function nameToCss(name){
                if(typeof(name) !== 'string')
                    return name;
                var prefix = 'https://maxcdn.bootstrapcdn.com/bootswatch/latest/';
                var suffix = '/bootstrap.min.css';
                return prefix + name.toLowerCase() + suffix;
            },
            applyTheme: function applyTheme(themename){            
                //TODO: Move DOM manipulation where it belongs
                var link = document.getElementById('theme');
                var css = themename === 'Default'? '' : this.nameToCss(themename);
                angular.element(link).attr('href', css);
            }
        };

	}
);
