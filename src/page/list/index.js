var app = module.exports = require('./app');

app.config(state);

state.$inject = ['$stateProvider', '$urlRouterProvider'];
  function state($stateProvider, $urlRouterProvider){
    $stateProvider.state('list', {
      url : '/list',
      controller : ctrl,
      controllerAs : 'list',
      template : require('raw!./index.html')
    });
  }

ctrl.$inject = ['$scope'];
  function ctrl($scope){

  }