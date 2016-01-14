module.exports = angular.module('mainModule', [
  require('ui.router'),
  require('page/home').name,
  require('page/list').name,
  require('page/about').name
]);