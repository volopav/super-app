describe('Phone Catalog controllers', function() {
  beforeEach(module('SuperApp.phonecat'));

  describe('PhoneListCtrl', function() {
    it('should create phones collection with 3 phones', inject(function($controller){
      var scope = {},
          ctrl = $controller('PhoneListCtrl', { $scope: scope });

      expect(scope.phones.length).toBe(3);
    }));
  });
});