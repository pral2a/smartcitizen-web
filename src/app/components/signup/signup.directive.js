'use strict';


  angular.module('app.components')
    .directive('signup', signup);


  function signup($window) {
    
    return {
      scope: false,
      restrict: 'E',
      controller: 'SignupController',
      controllerAs: 'vm',
      templateUrl: 'app/components/signup/signup.html'
    };
  }