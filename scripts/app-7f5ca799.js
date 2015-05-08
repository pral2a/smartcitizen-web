"use strict";function signup(){return{scope:!1,restrict:"E",controller:"SignupController",controllerAs:"vm",templateUrl:"app/components/signup/signup.html"}}function SignupController(n,e,o,t){function a(n){t.blur(),e.show({controller:DialogController,templateUrl:"app/components/signup/signupModal.html",targetEvent:n}).then(function(n){r(n)})["finally"](function(){t.unblur()})}function r(n){o.post(n).then(function(n){console.log("res",n)})}var l=this;l.showSignup=a,l.signup=r}function search(){function n(){}return{link:n,scope:!0,restrict:"E",templateUrl:"./app/components/search/search.html",controller:"SearchController",controllerAs:"vm"}}function SearchController(n,e){function o(n){console.log("text",n)}function t(n){console.log("item",n)}function a(n){return e.globalSearch(n).then(function(n){return console.log(n),0===n.length?n:n.map(function(n){if("Location"!==n.type){var e=r(n),o=l(n);return{type:n.type,name:o,location:e,image:"User"===n.type?"./assets/images/avatar.svg":"./assets/images/kit.svg"}}})})}function r(n){var e="";return n.city&&(e+=n.city),n.country&&(e+=", "+n.country),e}function l(n){var e="User"===n.type?n.username:n.name;return e?e:"No name"}var i=this;i.searchTextChange=o,i.selectedItemChange=t,i.querySearch=a,i.isIconWhite=!0,n.$on("removeNav",function(){n.$apply(function(){i.isIconWhite=!1})}),n.$on("addNav",function(){n.$apply(function(){i.isIconWhite=!0})})}function navbar(){function n(){}return{link:n,scope:!0,restrict:"E",templateUrl:"app/components/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}function NavbarController(n){n.isShown=!0,n.$on("removeNav",function(){n.$apply(function(){n.isShown=!1})}),n.$on("addNav",function(){n.$apply(function(){n.isShown=!0})})}function HomeController(){}function DialogController(n,e){n.answer=function(n){e.hide(n)}}function user(n){return n.all("users")}function search(n,e){function o(n){return e.all("search").getList({q:n})}var t={globalSearch:o};return t}function geolocation(n){return n.jsonp("http://ipinfo.io/?callback=JSON_CALLBACK")}function auth(){function n(){e()}function e(){a=$window.localStorage.getItem("smartcitizen.token")}function o(){return a}function t(){return!!a}var a=null;n();var r={isAuth:t,setCurrentUser:e,getCurrentUser:o};return r}function animation(n){function e(){n.$broadcast("blur")}function o(){n.$broadcast("unblur")}function t(){n.$broadcast("removeNav")}function a(){n.$broadcast("addNav")}var r={blur:e,unblur:o,removeNav:t,addNav:a};return r}function moveDown(){function n(n,e){n.$watch("moveDown",function(n){n?e.addClass("move_down"):e.removeClass("move_down")})}return{link:n,scope:!1,restrict:"A"}}function stick(n){function e(e,o){var t=o[0].offsetTop,a=(o[0].offsetHeight,64);angular.element(n).on("scroll",function(){var n=document.body.scrollTop;n+a>=t?(o.addClass("stickMenu"),e.$apply(function(){e.moveDown=!0})):(o.removeClass("stickMenu"),e.$apply(function(){e.moveDown=!1}))})}return{link:e,scope:!1,restrict:"A"}}function blur(){function n(n,e){n.$on("blur",function(){e.addClass("blur")}),n.$on("unblur",function(){e.removeClass("blur")})}return{link:n,scope:!1,restrict:"A"}}function focus(n){function e(e,o){o.on("focusin",function(){console.log("aqui"),n.removeNav()}),o.on("focusout",function(){console.log("alli"),n.addNav()})}return{link:e}}angular.module("app.components",["oauth"]),angular.module("app.components").directive("signup",signup),signup.$inject=["$window"],angular.module("app.components").controller("SignupController",SignupController),SignupController.$inject=["$scope","$mdDialog","user","animation"],angular.module("app.components").directive("search",search),angular.module("app.components").controller("SearchController",SearchController),SearchController.$inject=["$scope","search","$http"],angular.module("app.components").directive("navbar",navbar),angular.module("app.components").controller("NavbarController",NavbarController),NavbarController.$inject=["$scope"],angular.module("app.components"),angular.module("app.components").controller("HomeController",HomeController),HomeController.$inject=["$scope"],angular.module("app.components").controller("DialogController",DialogController),DialogController.$inject=["$scope","$mdDialog"],angular.module("app.components").factory("user",user),user.$inject=["Restangular"],angular.module("app.components").factory("search",search),search.$inject=["$http","Restangular"],angular.module("app.components").factory("geolocation",geolocation),geolocation.$inject=["$http"],angular.module("app.components").factory("auth",auth),auth.$inject=["$http"],angular.module("app.components").factory("animation",animation),animation.$inject=["$rootScope"],angular.module("app.components").directive("moveDown",moveDown).directive("stick",stick).directive("blur",blur).directive("focus",focus),stick.$inject=["$window"],focus.$inject=["animation"],angular.module("app.auth",[]),angular.module("app",["ngMaterial","ui.router","restangular","app.components","app.auth"]),angular.module("app").config(["$stateProvider","$urlRouterProvider","$locationProvider","RestangularProvider",function(n,e,o,t){n.state("home",{url:"/",templateUrl:"app/components/home/home.html",controller:"HomeController",controllerAs:"vm"}).state("test",{url:"/test",templateUrl:"app/core/html/passwordRecovery.html"}),e.otherwise("/"),o.html5Mode({enabled:!0,requireBase:!1}).hashPrefix("!"),t.setBaseUrl("https://new-api.smartcitizen.me/v0")}]),angular.module("app").run(["$templateCache",function(n){n.put("app/components/home/home.html",'<div layout="vertical" layout-fill=""><md-content><section class="content"><section class="map"><h1>Here\'s the map</h1></section><section class="kit_data"><section class="kit_menu" layout="row" layout-align="center center" stick=""><p>Bar with kit info</p></section><section class="kit_fixed" move-down=""><section class="kit_overview" layout="row" layout-align="center center"><p>Kit data overview</p></section><section class="kit_detailed" layout="row" layout-align="center center"><section class="kit_dashboard"><p>Here it\'s the data</p></section></section></section></section></section></md-content></div>'),n.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="end center" class="stickNav"><section flex="" layout="row" layout-align="space-around center"><a href="/" flex="20" class="logo_link"><md-icon md-svg-src="./assets/images/LogotipoSmartCitizen.svg" alt="Insert Drive Icon" class="logo_icon"></md-icon></a><md-button flex="" href="#" class="md-flat"><md-icon md-svg-src="./assets/images/map_icon.svg" ng-show="isShown" class="nav_icon"></md-icon><span ng-show="isShown">Map</span></md-button><md-button flex="" href="#" class="md-flat"><md-icon md-svg-src="./assets/images/community_icon.svg" ng-show="isShown" class="nav_icon"></md-icon><span ng-show="isShown">Community</span></md-button></section><search flex="40"></search><section flex="" layout="row" layout-align="space-around center"><md-button flex="" href="#" class="md-flat" ng-show="isShown">Get your Kit</md-button><md-button flex="" class="md-flat" ng-show="isShown"><oauth site="https://id.smartcitizen.me/" client-id="82ef2ebe26dcdabcf149420f817ea89b9f853e8b8bd4f1560c5a00f268ce19be" redirect-uri="http://localhost:3000" profile-uri="https://new-api.smartcitizen.me/v0/me" scope=""></oauth></md-button><signup flex="" class="md-display-1" ng-show="isShown"></signup></section></md-toolbar>'),n.put("app/components/search/search.html",'<div class="search_icon"><img src="./assets/images/search_icon_white.svg" ng-show="vm.isIconWhite"> <img src="./assets/images/search_icon_black.svg" ng-show="!vm.isIconWhite"></div><md-autocomplete md-selected-item="vm.selectedItem" md-selected-item-change="vm.selectedItemChange(item)" md-search-text="vm.searchText" md-search-text-change="vm.searchTextChange(vm.searchText)" md-items="item in vm.querySearch(vm.searchText)" md-item-text="" placeholder="Search" md-delay="400" focus=""><md-item-template><md-icon md-svg-src="{{ item.image }}" class="result_icon"></md-icon><span class="result_name">{{ item.name }}</span> <span class="result_location">{{ item.location }}</span></md-item-template></md-autocomplete>'),n.put("app/components/signup/signup.html",'<md-button ng-click="vm.showSignup($event)">Sign Up</md-button>'),n.put("app/components/signup/signupModal.html",'<md-dialog><md-dialog-content class="modal signup"><div><h2>SIGN UP</h2><div class="modal_message"><p>People looking for a better city</p><p>You\'re part of them? Feel free to join us!</p></div><div layout="" layout-sm="column"><md-input-container flex=""><label>Username</label> <input type="text" ng-model="vm.user.username"></md-input-container></div><div layout="" layout-sm="column"><md-input-container flex=""><label>Password</label> <input type="password" ng-model="vm.user.password"></md-input-container></div><div layout="" layout-sm="column"><md-input-container flex=""><label>Email</label> <input type="email" ng-model="vm.user.email"></md-input-container></div></div><md-button class="md-raised md-primary" ng-click="answer(vm.user)">Sign up</md-button></md-dialog-content><p>Already have an account?<span>LOG IN</span></p></md-dialog>')}]);