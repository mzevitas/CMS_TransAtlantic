;(function() {

    'use strict';


 var app = angular.module('app', [ 'UserModule', 'ui.router',  'ngMaterial', 'ngCookies']);

    app.constant('PARSE', {
        URL: 'https://api.parse.com/1/',
        CONFIG: {
            headers: {
                'X-Parse-Application-Id': app_key,
                'X-Parse-REST-API-Key': rest_parse,
                'Content-Type': 'application/json'
            }

        }
    });

        
		app.config( function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		      $stateProvider
//**************************Main Routes**********************************
		      .state( 'login', {
		        url: '/',
		        templateUrl: 'views/login.tpl.html',
		        controller: 'UserCtrl'
		      })
		      .state('register', {
		        url: '/register',
		        templateUrl: 'views/register.tpl.html',
		        controller: 'UserCtrl'  
		      })
		      .state('portal', {
		        url: '/portal',
		        templateUrl: 'views/portal.tpl.html'

		      })
//**************************Gig Routes**********************************
		      .state('portal.blogList', {
		      	url:'/gigList',
		      	templateUrl: 'views/blogs.tpl.html',
		      	controller: 'BlogCtrl'
		      })
		      .state('portal.single', {
		      	url: '/single/{id}',
               templateUrl: 'views/single.blog.tpl.html',
               controller: 'SingleCtrl'
				})
		      
		      .state('portal.addblog', {
		      	url:'/addblog',
		      	templateUrl: 'views/add.blog.tpl.html'
		      })
		      .state('portal.blogview', {
		      	url: '/blogview/{id}',
               templateUrl: 'views/blog.view.tpl.html',
               controller: 'SingleCtrl'
				})				


//**************Mailing List Routed Routes**********************************
		      .state('portal.mailing', {
		      	url:'/mailing',
		      	templateUrl: 'views/mailing.tpl.html',
		      	controller: ''
		      })


		    })

		 .run([ '$rootScope', '$state', 'UserFactory', 'PARSE',

			    function ($rootScope, $state, UserFactory, PARSE) {

			      $rootScope.$on('$stateChangeStart', function () {
			        
			        // Run my Login Status
			     UserFactory.checkuser();
			     console.log(UserFactory.checkuser);

		 });
    
   }

  ]);






}());