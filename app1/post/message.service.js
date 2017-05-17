'use strict';

angular.module('app1.post').factory('messages', function() {
  const messages = {};

  messages.list = [];

  messages.add = function(message) {
    messages.list.push({id: messages.list.length, text: message});
  };

  return messages;
});
