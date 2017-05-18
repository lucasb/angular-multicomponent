'use strict';

angular.module('component1.post', []);

angular.module('component1.post').controller('PostCtrl', function (messages) {
  var self = this; 

  self.addMessage = function(message) {
    messages.add(message);
    self.newMessage = '';
  };
});
