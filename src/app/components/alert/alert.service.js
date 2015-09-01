(function() {
  'use strict';

  angular.module('app.components')
    .factory('alert', alert);
  
  alert.$inject = ['$mdToast'];
  function alert($mdToast) {
    var service = {
      success: success,
      error: error,
      info: {
        noData: {
          visitor: infoNoDataVisitor,
          owner: infoNoDataOwner
        },
        longTime: infoLongTime,
        generic: info
      }
    };

    return service;

    ///////////////////

    function success(message) {
      toast('success', message);
    }

    function error(message) {
      toast('error', message);
    }

    function infoNoDataVisitor() {
      info('Woha! This kit has still not published any data yet. Leave a comment to its owner to make him/ her know', 10000, {button: 'Leave comment'});
    }
    function infoNoDataOwner() {
      info('Woha! This kit has still not published any data yet. Please, check its settings or reach the support team', 10000, {button: 'Kit settings'});
    }

    function infoLongTime() {
      info('😅 It looks like this post has not posted any data since long time ago. Leave a comment to its owner to make him/ her know', 10000, {button: true});
    }

    function info(message, delay, options) {
      if(options.button) {
        toast('infoButton', message, options.button, undefined, delay);
      } else {
        toast('info', message, button, undefined, delay);     
      }
    }

    function toast(type, message, button, position, delay) {
      position = position === undefined ? 'top': position;
      delay = delay === undefined ? 5000 : delay;

       $mdToast.show({
        controller: 'AlertController',
        controllerAs: 'vm',
        templateUrl: 'app/components/alert/alert' + type + '.html',
        hideDelay: delay,
        position: position,
        locals: {
          message: message,
          button: button
        }
      });
    }
  }
})();