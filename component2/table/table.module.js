'use strict';

// module: table
angular.module('component2.table', ['common.sharedata']);

// controller
angular.module('component2.table').controller('TableCtrl', function (tableinfos) {
  const self = this;
  // read from local service
  self.infos = tableinfos.get();
});

// service
angular.module('component2.table').factory('tableinfos', function(sharetexts) {
  const tableinfos = {};

  tableinfos.get = function() {
    // read from share data service
    return sharetexts.list.map(function(element) {
      return { text: element, size: (element ? element.length : 0) }
    });
  }

  return tableinfos;
});
