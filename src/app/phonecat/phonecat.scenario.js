describe('Phone Catalog Module', function() {
  describe('Phone List view', function(){

    beforeEach(function() {
      browser().navigateTo('/angular/super-app/build/#/phone-cat');
    });

    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
    });
  });
});
