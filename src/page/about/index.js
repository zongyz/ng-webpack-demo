var app = module.exports = angular.module('aboutModule', [
  require('angular-ui-router')
]);

app.config(state);

state.$inject = ['$stateProvider', '$urlRouterProvider'];
  function state($stateProvider, $urlRouterProvider){
    $stateProvider.state('about', {
      url : '/about',
      controller : ctrl,
      controllerAs : 'about',
      template : require('./about.tpl.html')
    });
  }

ctrl.$inject = ['$scope'];
  function ctrl($scope){

  }