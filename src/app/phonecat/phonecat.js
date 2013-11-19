angular.module('SuperApp.phonecat', [
  'ui.router',
  'checkmark',
  'phonecatServices'
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

.controller('PhoneListCtrl', function PhoneListCtrl($scope, Phone) {
  $scope.phones = Phone.query();

  $scope.orderProp = 'age';
  $scope.url = '/phonecat';
  $scope.urlDataPrefix = '/sample-data';
})

.controller( 'PhoneDetailsCtrl', function PhoneDetailsCtrl($scope, $stateParams, Phone) {
  $scope.phoneId = $stateParams.phoneId;

  $scope.phone = Phone.get({ phoneId: $scope.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };

  $scope.urlDataPrefix = '/sample-data';
});