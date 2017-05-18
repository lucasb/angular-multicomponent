'use strict';

angular.module('component2.post', ['common.sharedata']);

angular.module('component1.post').factory('messages', function(sharetexts) {
  const messages = {};

  messages.list = [];

  messages.add = function(message) {
    messages.list.push({id: messages.list.length, text: message});
    sharetexts.add(message);
  };

  return messages;
});
