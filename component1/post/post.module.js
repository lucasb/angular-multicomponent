'use strict';

angular.module('component1.post', []);

// controller
angular.module('component1.post').controller('PostCtrl', function (messages) {
  const self = this;

  self.addMessage = function(message) {
    messages.add(message);
    self.newMessage = '';
  };
});

// Service
angular.module('component1.post').factory('messages', function(sharetexts) {
  const messages = {};

  messages.list = [];

  messages.add = function(message) {
    messages.list.push({id: messages.list.length, text: message});
    sharetexts.add(message);
  };

  return messages;
});