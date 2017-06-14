var app = angular.module('routeApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
    controller: 'DefaultController as dc'
  }).when('/batman', {
    templateUrl: 'views/partials/batman.html',
  }).when('/superman', {
    templateUrl: 'views/partials/superman.html',
  }).when('/holmes', {
    templateUrl: 'views/partials/holmes.html',
  });
});

app.controller('DefaultController', ['$location', DefaultController]);

function DefaultController($location) {
  console.log('DefaultController is loaded');
  var vm = this;

  vm.go = function ( hash ) {
    $location.path( hash );
  };
}
