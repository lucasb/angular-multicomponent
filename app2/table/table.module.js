'use strict';

angular.module('app2.table', ['common']);

angular.module('app2.table').controller('TableCtrl', function (sharetexts) {
  var self = this; 

  self.sharetexts = sharetexts;
});
