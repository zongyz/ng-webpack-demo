require('common/common.scss');
require('./index.less');

var app = module.exports = require('./app'),
    cons = require('./cons');

app.config(routerConfig);

// 
app.directive('main', function(){
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

function ctrl(){
  this.nav = cons.nav;
}