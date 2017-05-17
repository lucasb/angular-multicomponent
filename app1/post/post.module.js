'use strict';

angular.module('app1.post', []);

angular.module('app1.post').controller('PostCtrl', function (messages) {
  var self = this; 

  self.addMessage = function(message) {
    messages.add(message);
    self.newMessage = '';
  };
});
