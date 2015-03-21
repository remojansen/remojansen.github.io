define(['website/js/app'], function(app) {
  "use strict";

  console.log("--------->" + app.LOG_TRANSITIONS);

  var assert = chai.assert,
      expect = chai.expect,
      should = chai.should();

  describe('app', function() {

    it('app is not null', function() {
      expect(app).not.to.equal(null);
    });

    it('app settings set correctly', function() {
      expect(app.LOG_TRANSITIONS).to.equal(false);
      expect(app.LOG_TRANSITIONS_INTERNAL).to.equal(false);
      expect(app.LOG_VIEW_LOOKUPS).to.equal(false);
    });

    it('app is in the global scope', function() {
      expect(app).to.equal(window.app);
    });

  });
});
