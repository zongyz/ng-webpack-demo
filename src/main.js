var angular = require('angular'),
    main = require('./main/index');

angular.element(document).ready(function(){
  angular.bootstrap(document, [main], {
    strictDi: true
  })
});