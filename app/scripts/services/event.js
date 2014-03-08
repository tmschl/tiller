'use strict';

angular.module('tillerApp')
  .service('Event', function Event() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var allEvents = [{
      name    : 'Younguns',
      date    : '2014/06/15',
      venue   : 'Beacon',
      speaker : 'Tim Schiller'
    },{
      name    : 'Creative Mornings',
      date    : '2014/05/23',
      venue   : 'Disney World',
      speaker : 'Impasse Passe'
    }];

    var newEventObject = {
      name    : '',
      date    : '',
      venue   : '',
      speaker : ''
    };

    var eventInterface = {
      setEventName: function (eventName) {
        newEventObject.name = eventName;
      },
      setEventDate: function (eventDate) {
        newEventObject.date = eventDate;
      },
      setEventVenue: function (eventVenue) {
        newEventObject.venue = eventVenue;
      },
      setEventSpeaker: function (eventSpeaker) {
        newEventObject.speaker = eventSpeaker;
      },
      getCurrentEvents: function () {
        return allEvents;
      },
      createNewEvent: function () {
        allEvents.push(newEventObject);
      },
      removeEvent: function ($index) {
        allEvents.splice($index,1);
      }
    };

    return eventInterface;

  });
