;(function() {

    'use strict';


 var app = angular.module('app', [ 'UserModule', 'ui.router',  'ngMaterial', 'ngCookies', 'spotify']);

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


    app.config(function (SpotifyProvider) {
  			SpotifyProvider.setClientId('<CLIENT_ID>');
  			SpotifyProvider.setRedirectUri('<CALLBACK_URI>');
  			SpotifyProvider.setScope('<SCOPE>');
 			 // If you already have an auth token
  			SpotifyProvider.setAuthToken('<AUTH_TOKEN>');
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
		      .state('portal.single', {
		      	url: '/single/{id}',
               templateUrl: 'views/single.gig.tpl.html',
               controller: 'SingleCtrl'
				})
		      
		      .state('portal.addgig', {
		      	url:'/addgig',
		      	templateUrl: 'views/add.gig.tpl.html'
		      })
//*************************Set Routes**********************************

		      .state('portal.singleSet', {
		      	url: '/singleSet/{id}',
               templateUrl: 'views/single.edit.sets.tpl.html',
               controller: 'SingleSetCtrl'
				})

		      .state('portal.download', {
		      	url: '/singleSetdownload/{id}',
               templateUrl: 'views/download.pdf.tpl.html',
               controller: 'SingleSetCtrl'
				})
		      
		      .state('portal.addset', {
		      	url:'/addset',
		      	templateUrl: 'views/add.sets.tpl.html'
		      })
//**************************Song Routes**********************************
		      .state('portal.songList', {
		      	url:'/songlist',
		      	templateUrl: 'views/songs.tpl.html',
		      	controller: 'SongCtrl'
		      })
		      .state('portal.singleSong', {
		      	url: '/singleSong/{id}',
               templateUrl: 'views/single.song.tpl.html',
               controller: 'EditSongCtrl'
				})
		      
		      .state('portal.addSong', {
		      	url:'/addsong',
		      	templateUrl: 'views/add.songs.tpl.html',
		      	controller: 'SongCtrl'
		      })
		      .state('portal.viewLyrics', {
		      	url:'/lyrics/{id}',
		      	templateUrl: 'views/view.lyrics.tpl.html',
		      	controller: 'EditSongCtrl'
		      })
		      .state('portal.editLyrics', {
		      	url:'/editlyrics/{id}',
		      	templateUrl: 'views/add.lyrics.tpl.html',
		      	controller: 'EditSongCtrl'
		      })
//**********************************Venue Routes**********************************
		      .state('portal.venueList', {
		      	url:'/venuelist',
		      	templateUrl: 'views/venues.tpl.html',
		      	controller: 'VenueCtrl'
		      })
		      .state('portal.singleVenue', {
		       url: '/singleVenue/{id}',
               templateUrl: 'views/single.venue.tpl.html',
               controller: 'EditVenueCtrl'
				})

		      .state('portal.addvenue', {
		      	url:'/addvenue',
		      	templateUrl: 'views/add.venue.tpl.html',
		      	controller: 'VenueCtrl'
		      })

		      .state('portal.venueContact', {
		      	url:'/addContactList',
		      	templateUrl: 'views/venue.contact.tpl.html',
		      	controller: 'VenueCtrl'
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