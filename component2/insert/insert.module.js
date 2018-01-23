'use strict';

// module: post 
angular.module('component2.insert', ['common.sharedata']);

// controller
angular.module('component2.insert').controller('InsertCtrl', function (texts) {
  const self = this;

  self.addMessage = function(text) {
    // Add text to local service
    texts.add(text);
    
    self.newMessage = '';
  };
});

// service
angular.module('component2.table').factory('texts', function(sharetexts) {
  const texts = {};

  texts.list = sharetexts.list

  texts.add = function(text) {
    // Add text to sharetexts in sharedata service
    sharetexts.add(text);
  };

  return texts;
});
