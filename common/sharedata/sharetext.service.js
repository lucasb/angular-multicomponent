'use strict';

angular.module('common.sharedata', []);

angular.module('common.sharedata').factory('sharetexts', function() {
  const sharetexts = {};

  sharetexts.list = [];

  sharetexts.add = function(text) {
    sharetexts.list.push(text);
  };

  return sharetexts;
});
