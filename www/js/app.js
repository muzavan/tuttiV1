// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova','highcharts-ng','jett.ionic.filter.bar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })
    
    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html",
          controller:'ProfileCtrl',
        }
      }
    })

    .state('app.notification', {
      url: "/notification",
      views: {
        'menuContent' :{
          templateUrl: "templates/notification.html",
          controller: 'NotificationCtrl'
        }
      }
    })

    .state('app.discovery', {
      url: "/discovery",
      views: {
        'menuContent' :{
          templateUrl: "templates/discovery.html",
          controller: 'DiscoveryCtrl'
        }
      }
    })

    .state('app.musicPreferences', {
      url: "/musicPreferences",
      views: {
        'menuContent' :{
          templateUrl: "templates/music_preferences.html",
          controller: 'MusicPreferencesCtrl'
        }
      }
    })
    .state('app.partnerPreferences', {
      url: "/partnerPreferences",
      views: {
        'menuContent' :{
          templateUrl: "templates/partner_preferences.html",
          controller: 'PartnerPreferencesCtrl'
        }
      }
    })

    .state('app.chat', {
      url: "/chat",
      views: {
        'menuContent' :{
          templateUrl: "templates/chat.html",
          controller: 'ChatCtrl'
        }
      }
    })
    
    .state('app.support', {
      url: "/support",
      views: {
        'menuContent' :{
          templateUrl: "templates/support.html",
          controller: 'SupportCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profile');
});
