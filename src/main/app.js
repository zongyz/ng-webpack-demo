module.exports = angular.module('mainModule', [
  require('angular-ui-router'),
  require('../page/home/index').name,
  require('../page/list/index').name,
  require('../page/about/index').name
]);