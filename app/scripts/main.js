;(function() {

    'use strict';


angular.module('app', [ 'ui.router', 'ngCookies','UserModule', 'ngMaterial'])
    .constant('PARSE', {
        URL: 'https://api.parse.com/1/',
        CONFIG: {
            headers: {
                'X-Parse-Application-Id': 'RBIg848SejjBwRjJgCFobwJesEan2nd2TzCU6oSq',
                'X-Parse-REST-API-Key': 'MdMDZR1bD02sD8UPu97Hxk9MrGT0NJoMvwiyrbk0',
                'Content-Type': 'application/json'
            }

        }
    })
        
		.config( function ($stateProvider, $urlRouterProvider) {

		// $urlRouterProvider.otherwise('/');

		      $stateProvider

		      .state( 'login', {
		        url: '/',
		        templateUrl: 'scripts/users/login.tpl.html',
		        controller: 'UserCtrl'
		      })
		      .state('register', {
		        url: '/register',
		        templateUrl: 'scripts/users/register.tpl.html',
		        controller: 'UserCtrl'  
		      })
		      .state('portal', {
		        url: '/portal',
		        templateUrl: 'views/portal.tpl.html'

		      })

		      .state('portal.single', {
		      	url: '/single/{id}',
               templateUrl: 'scripts/gigs/single.gig.tpl.html',
               controller: 'SingleCtrl'
				})
		      
		      .state('portal.addgig', {
		      	url:'/addgig',
		      	templateUrl: 'scripts/gigs/add.gig.tpl.html'
		      })


		      .state('portal.singleSet', {
		      	url: '/singleSet/{id}',
               templateUrl: 'scripts/sets/single.edit.sets.tpl.html',
               controller: 'SingleSetCtrl'
				})

		      .state('portal.download', {
		      	url: '/singleSetdownload/{id}',
               templateUrl: 'scripts/sets/download.pdf.tpl.html',
               controller: 'SingleSetCtrl'
				})
		      
		      .state('portal.addset', {
		      	url:'/addset',
		      	templateUrl: 'scripts/sets/add.sets.tpl.html'
		      })

		     
		      

		    })

		 .run([ '$rootScope', 'UserFactory', 'PARSE',

			    function ($rootScope, UserFactory, PARSE) {

			      $rootScope.$on('$routeChangeStart', function () {
			        
			        // Run my Login Status
			        UserFactory.status();

		 });
    
   }

  ]);


}());