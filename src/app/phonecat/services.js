angular.module('phonecatServices', ['ngResource'])

.factory('Phone', function($resource) {
  return $resource('/sample-data/phones/:phoneId.json', {}, {
    query: { method: 'GET', params: {phoneId: 'phones'}, isArray: true}
  });
});
