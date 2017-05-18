'use strict';

angular.module('component1.list', ['component1.post']);

angular.module('component1.list').controller('ListCtrl', function (messages) {
  const self = this;

  self.messages = messages.list;
});
