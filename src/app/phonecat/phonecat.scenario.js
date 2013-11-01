describe('Phone Catalog Module', function() {
  describe('Phone List view', function(){

    beforeEach(function() {
      browser().navigateTo('/angular/super-app/build/#/phonecat');
    });

    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(20);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(8);
    });

    it('should be possible to control phone order via drop down select box', function() {
      input('query').enter('tablet');

      expect(repeater('.phones li', 'Phone List').column('phone.name'))
        .toEqual([
          'Motorola XOOM™ with Wi-Fi',
          'MOTOROLA XOOM™'
        ]);

      select('orderProp').option('Alphabetical');

      expect(repeater('.phones li', 'Phone List').column('phone.name'))
        .toEqual([
          'MOTOROLA XOOM™',
          'Motorola XOOM™ with Wi-Fi'
        ]);
    });
  });
});
