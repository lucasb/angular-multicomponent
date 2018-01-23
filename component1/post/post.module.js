'use strict';

// module: post 
angular.module('component1.post', ['common.sharedata']);

// controller
angular.module('component1.post').controller('PostCtrl', function (messages) {
  const self = this;

  self.addMessage = function(message) {
    // Add message to local service
    messages.add(message);
    
    self.newMessage = '';
  };
});

// service
angular.module('component1.post').factory('messages', function(sharetexts) {
  const messages = {};

  messages.list = sharetexts.list

  messages.add = function(message) {
    // Add add same message to sharetexts in sharedata service
    sharetexts.add(message);
  };

  return messages;
});