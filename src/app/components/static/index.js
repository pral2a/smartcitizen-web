import angular from 'angular';

import staticController from './static.controller';

export default angular.module('static',[])
.controller('staticController', staticController)
.name;
