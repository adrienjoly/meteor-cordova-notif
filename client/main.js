import { Template } from 'meteor/templating';

import './main.html';

if(Meteor.isCordova){
  Meteor.startup(function () {

    navigator.notification.local.registerPermission(function (granted) {
      if(confirm("Sample App would like to send you notifications: ") === true) {
        alert('permission granted '+granted)
      } else {
        alert('permission denied')
      }
    });

    cordova.plugins.notification.local.registerPermission(function (granted) {
      if(confirm("Sample App would like to send you notifications: ") === true) {
        alert('permission granted '+granted)
      } else {
        alert('permission denied')
      }
    });
  });

  Template.hello4.events({
    'click button'(event, instance) {
      Meteor.startup(function() {
        cordova.plugins.notification.local.schedule({
          id: 1,
          text: "Single Notification",
          at: new Date(new Date().getTime() + 1000)
        });
        /*
        cordova.plugin.notification.local.add({
            id:         '2',  // A unique id of the notifiction
            title:      '7:00PM - 8:00PM',  // The title of the message
            message:    'BOGO: Premium drinks at some bar!',  // The message that is displayed
            icon:       'file://icon.png',
            led:        '009900',
            sound:      'file://cricket.mp3',
            smallIcon:  'file://res/icon/android/small.png'
        });
        */
      });
    },
  });

}
