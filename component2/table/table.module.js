'use strict';

angular.module('component2.table', ['common.sharedata']);

// Controller
angular.module('component2.table').controller('TableCtrl', function (tableinfos) {
  const self = this;

  self.infos = tableinfos.get();
});

// Service
angular.module('component2.table').factory('tableinfos', function(sharetexts) {
  const tableinfos = {};

  tableinfos.get = function() {
    return sharetexts.list.map(function(element) {
      return { text: element, size: (element ? element.length : 0) }
    });
  }

  return tableinfos;
});
