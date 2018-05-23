import angular from 'angular';

import setuptool from './setuptool.directive';

import scktoolService from './scktool.service';

export default angular.module('setupModule',[])
.service('scktoolService', scktoolService)
.directive('setuptool', setuptool)
.name;
