require('../common/common.scss');
require('./index.less');

var app = require('./app'),
    cons = require('./cons');

module.exports = app.name;

app.config(routerConfig);

// 
app.directive('main', function(){
  
  var ctrl = function(){
    this.nav = cons.nav;
  }
  return {
    restrict : 'AE',
    transclude : true,
    controller : ctrl,
    controllerAs : 'main',
    template : require('./index.tpl.html'),
    link : function($scope, $el, $attr){

    }
  }
});

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routerConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
  }
