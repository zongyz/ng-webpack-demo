var app = module.exports = require('./app');

app.config(state);

// state.$inject = ['$stateProvider', '$urlRouterProvider'];
function state($stateProvider, $urlRouterProvider){
  $stateProvider.state('list', {
    url : '/list',
    controller : ctrl,
    controllerAs : 'list',
    template : require('raw!./index.html')
  });
}


function ctrl($scope){
  console.log($scope);
}