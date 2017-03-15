angular.module('myApp.directives', [])
  .directive('checkStrength', function () {
    return {
      replace: false,
      restrict: 'EACM',
      link: function (scope, iElement, iAttrs) {

    	  var strength = {
    			  colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
    			  mesureStrength: function (p) {
    			    // return the evaluated strength of the password
    		}
    	  };

        scope.$watch(iAttrs.checkStrength, function () {
          if (scope.pw === '') {
            iElement.css({ "display": "none"  });
          } else {
            var strength = strength.mesureStrength(scope.pw);
            var c = strength.getColor(strength);
            iElement.css({ "display": "inline" });
            iElement.children('li')
              .css({ "background": "#DDD" })
              .slice(0, c.idx)
              .css({ "background": c.col });
          }
        });

      },
      template: ''
    };
  });