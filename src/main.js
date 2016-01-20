var main = require('page/main/index');

angular.element(document).ready(function(){
  angular.bootstrap(document, [main.name], {
    // strictDi: true
  })
});