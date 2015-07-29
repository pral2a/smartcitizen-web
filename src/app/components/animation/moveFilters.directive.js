(function() {
  'use strict';

  angular.module('app.components')
    .directive('moveFilters', moveFilters);

    moveFilters.$inject = ['$window', '$timeout'];
    function moveFilters($window, $timeout) {
      return {
        link: link
      };

      function link(scope, elem) {
        var chartHeight;
        $timeout(function() {
          chartHeight = angular.element('.kit_chart').height();          
        }, 1000);

        angular.element($window).on('scroll', function() {
          var windowPosition = document.body.scrollTop;
          if(chartHeight > windowPosition) {
            elem.css('bottom', 12 + windowPosition + 'px');
          }
        });
      }
    }
})();
