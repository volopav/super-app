describe('Phone Catalog controllers', function() {
  var scope;
  var ctrl;

  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

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
      expect(scope.phones).toEqual([]);
      $httpBackend.flush();

      expect(scope.phones).toEqualData([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    }));

    it('should create phones collection with 3 phones', inject(function($controller){
      expect(scope.orderProp).toBe('age');
    }));
  });

  describe('PhoneDetailsCtrl', function() {
    var scope, $httpBackend, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $stateParams, $controller) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('/sample-data/phones/xyz.json').respond({name: 'phone xyz', images: []});

      $stateParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('PhoneDetailsCtrl', {$scope: scope});
    }));

    it('should fetch phone detail', function() {
      expect(scope.phone).toEqualData({});
      $httpBackend.flush();

      expect(scope.phone).toEqualData({name: 'phone xyz', images: []});
    });
  });

});