'use strict';

// module: table
angular.module('component2.table', ['common.sharedata']);

// controller
angular.module('component2.table').controller('TableCtrl', function (texts) {
  const self = this;
  // read from local service
  self.infos = texts.list
});
