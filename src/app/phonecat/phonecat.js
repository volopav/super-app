angular.module('SuperApp.phonecat', [
  'ui.state'
])

.config(function config($stateProvider) {
  $stateProvider.state('phone-cat', {
    url: '/phone-cat',
    views: {
      "main": {
        controller: 'PhoneListCtrl',
        templateUrl: 'phonecat/templates/phonecat.tpl.html'
      }
    },
    data: { pageTitle: 'Phone Catalog' }
  });
})

.controller('PhoneListCtrl', function PhoneListCtrl($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.'}
  ];

  $scope.orderProp = 'age';
});