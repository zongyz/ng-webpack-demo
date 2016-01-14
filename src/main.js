var angular = require('angular'),
    main = require('./main/index');

angular.element(document).ready(function(){
  angular.bootstrap(document, [main.name], {
    strictDi: true
  })
});