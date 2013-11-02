angular.module('SuperApp.phonecat', [
  'ui.state'
])

.config(function config($stateProvider) {
  $stateProvider
    .state('phonecat', {
      url: '/phonecat',
      views: {
        "main": {
          controller: 'PhoneListCtrl',
          templateUrl: 'phonecat/templates/phonecat.tpl.html'
        }
      },
      data: { pageTitle: 'Phone Catalog' }
    })
    .state('phones', {
      url: '/phonecat/:phoneId',
      views: {
        "main": {
          templateUrl: 'phonecat/templates/phonecat-details.tpl.html',
          controller: 'PhoneDetailsCtrl'
        }
      },
      data: { pageTitle: 'Phone Details' }
    });
})

.controller('PhoneListCtrl', function PhoneListCtrl($scope, $http) {
  $http.get('/sample-data/phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
  $scope.url = '/phonecat';
  $scope.urlDataPrefix = '/sample-data';
})

.controller( 'PhoneDetailsCtrl', function PhoneDetailsCtrl($scope, $stateParams, $http) {
  $http.get('/sample-data/phones/' + $stateParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
  });

  $scope.urlDataPrefix = '/sample-data';
});