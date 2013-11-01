describe('Phone Catalog controllers', function() {
  var scope;
  var ctrl;

  beforeEach(module('SuperApp.phonecat'));

  describe('PhoneListCtrl', function() {

    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/sample-data/phones/phones.json')
        .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();

      ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));

    it('should create phones moder with 2 phones fetched from xhr', inject(function($controller){
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    }));

    it('should create phones collection with 3 phones', inject(function($controller){
      expect(scope.orderProp).toBe('age');
    }));
  });

});