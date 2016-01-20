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

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
}

function ctrl($scope){
  console.log($scope);
  this.nav = cons.nav;
}