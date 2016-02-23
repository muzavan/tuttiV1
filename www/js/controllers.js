var API_URL = "http://8e40ee8f.ngrok.io/iscrime/";

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})
.controller('HomeCtrl',function ($scope){
    $scope.name = "Muhammad Reza Irvanda";
    $scope.phoneNumber = "08566160880";
    $scope.location = "Bandung";
})
.controller('NotificationCtrl',function ($scope){
    $scope.name = "Muhammad Reza Irvanda";
    $scope.phoneNumber = "08566160880";
    $scope.location = "Bandung";
})
.controller('ProfileCtrl',function ($scope){
    $scope.name = "Muhammad Reza Irvanda";
    $scope.phoneNumber = "08566160880";
    $scope.location = "Bandung";
})
.controller('DiscoveryCtrl',function ($scope){
    $scope.distanceRange = 80;
})
.controller('MusicPreferencesCtrl',function ($scope,$state){
    $scope.filter = {
      rock : false,
      jazz : true,
      pop : true,
      alternative : false,
      folk : false,
      classic : false,
      traditional : true,
      dangdut : true,
      metal : true,
      country : false,
      hiphop : false,
    };
})
.controller('PartnerPreferencesCtrl',function ($scope,$state){
    $scope.filter = {
      trainer : true,
      vocalist : false,
      guitarist : false,
      bassist : true,
      drummer : true,
      pianist : false,
    };
})
.controller('ChatCtrl',function ($scope){
})

.controller('SupportCtrl',function ($scope){
    $scope.name = "Muhammad Reza Irvanda";
    $scope.phoneNumber = "08566160880";
    $scope.location = "Bandung";
});