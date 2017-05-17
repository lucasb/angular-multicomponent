'use strict';

angular.module('app1.list', ['app1.post']);

angular.module('app1.list').controller('ListCtrl', function (messages) {
  var self = this;

  self.messages = messages.list;
});
