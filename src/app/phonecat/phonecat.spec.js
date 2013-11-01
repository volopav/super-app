describe('Phone Catalog controllers', function() {
  var scope;
  var ctrl;

  beforeEach(module('SuperApp.phonecat'));

  describe('PhoneListCtrl', function() {
    it('should create phones collection with 3 phones', inject(function($controller){
      scope = {};
      ctrl = $controller('PhoneListCtrl', { $scope: scope });
      expect(scope.phones.length).toBe(3);
    }));

    it('should create phones collection with 3 phones', inject(function($controller){
      scope = {};
      ctrl = $controller('PhoneListCtrl', { $scope: scope });
      expect(scope.orderProp).toBe('age');
    }));
  });

});