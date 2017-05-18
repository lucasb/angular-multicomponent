'use strict';

angular.module('component2.table', ['common.sharedata']);

angular.module('component2.table').controller('TableCtrl', function (sharetexts) {
  var self = this; 

  self.sharetexts = sharetexts.list;
});
