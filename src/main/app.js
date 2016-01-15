module.exports = angular.module('mainModule', [
  'ui.router',
  require('page/home').name,
  require('page/list').name,
  require('page/about').name
]);