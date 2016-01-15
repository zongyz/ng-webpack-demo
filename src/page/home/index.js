require('./index.scss');

var app = module.exports = require('./app');

app.config(state);

// state.$inject = ['$stateProvider', '$urlRouterProvider'];
function state($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url : '/home',
    controller : ctrl,
    controllerAs : 'home',
    template : require('raw!./index.html')
  });
}

// ctrl.$inject = ['$scope'];
function ctrl($scope){

}