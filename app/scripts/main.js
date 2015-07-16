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

		$urlRouterProvider.otherwise('/');

		      $stateProvider
//**************************Main Routes**********************************
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
//**************************Gig Routes**********************************
		      .state('portal.single', {
		      	url: '/single/{id}',
               templateUrl: 'scripts/gigs/single.gig.tpl.html',
               controller: 'SingleCtrl'
				})
		      
		      .state('portal.addgig', {
		      	url:'/addgig',
		      	templateUrl: 'scripts/gigs/add.gig.tpl.html'
		      })
//*************************Set Routes**********************************

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
//**************************Song Routes**********************************
		      .state('portal.songList', {
		      	url:'/songlist',
		      	templateUrl: 'scripts/songs/songs.tpl.html',
		      	controller: 'SongCtrl'
		      })
		      .state('portal.singleSong', {
		      	url: '/singleSong/{id}',
               templateUrl: 'scripts/songs/single.song.tpl.html'
				})
		      
		      .state('portal.addSong', {
		      	url:'/addsong',
		      	templateUrl: 'scripts/songs/add.songs.tpl.html'
		      })
//**********************************Venue Routes**********************************
		      .state('portal.venueList', {
		      	url:'/venuelist',
		      	templateUrl: 'scripts/venues/venues.tpl.html',
		      	controller: 'VenueCtrl'
		      })
		      .state('portal.addvenue', {
		      	url:'/addvenue',
		      	templateUrl: 'scripts/venues/add.venue.tpl.html',
		      	controller: 'VenueCtrl'
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