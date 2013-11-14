angular.module( 'SuperApp', [
  'templates-app',
  'templates-common',
  'SuperApp.home',
  'SuperApp.about',
  'SuperApp.todo',
  'SuperApp.phonecat',
  'ui.route',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | SuperApp' ;
    }
  });
})

;

