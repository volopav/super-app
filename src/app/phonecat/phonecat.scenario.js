describe('Phone Catalog Module', function() {
  var baseUrl = '/angular/super-app/build/';
  var route = '/phonecat';

  describe('Phone List view', function(){

    beforeEach(function() {
      browser().navigateTo(baseUrl + '#' + route);
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

    it('should render phone specific link', function() {
      input('query').enter('nexus');
      element('.phones li a').click();
      expect(browser().location().url()).toBe(route + '/nexus-s');
    });

    it('should redirect base-url/ to base-url/#home', function() {
      browser().navigateTo(baseUrl);
      expect(browser().location().url()).toBe('/home');
    });
  });

  describe('Phone Detail view', function() {
    beforeEach(function() {
      browser().navigateTo(baseUrl + '#' + route + '/nexus-s');
    });

    it('should display placeholder with phoneId', function() {
      expect(binding('phoneId')).toBe('nexus-s');
    });

    it('should display nexus-s page', function() {
      expect(binding('phone.name')).toBe('Nexus S');
    });
  });
});
