'use strict';

describe('Service: Event', function () {

  // load the service's module
  beforeEach(module('tillerApp'));

  // instantiate service
  var Event;
  beforeEach(inject(function (_Event_) {
    Event = _Event_;
  }));

  it('should do something', function () {
    expect(!!Event).toBe(true);
  });

});
