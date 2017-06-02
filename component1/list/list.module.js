'use strict';

// module: list 
angular.module('component1.list', ['component1.post']);

angular.module('component1.list').controller('ListCtrl', function (messages) {
  const self = this;

  // Read from post module
  self.messages = messages.list;
});
