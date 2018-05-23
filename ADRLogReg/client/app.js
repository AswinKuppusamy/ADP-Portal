var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/', {
		controller:'adrmnController',
		templateUrl: 'views/adrrep.html'
		
	})
	.when('/adrmn', {
		controller:'adrmnController',
		templateUrl: 'views/adrrep.html'
	})
	.when('/adrmn/details/:id',{
		controller:'adrmnController',
		templateUrl: 'views/adrdetails.html'
	})
	.when('/adrmn/add',{
		controller:'adrmnController',
		templateUrl: 'views/adraddition.html'
	})
	.when('/adrmn/edit/:id',{
		controller:'adrmnController',
		templateUrl: 'views/adredit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});