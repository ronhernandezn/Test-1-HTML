/// <reference path="angular.min.js"/>
var MyModule = angular.module('MyModule',[]);
MyModule.controller("MyCtrl", function($scope)
{
	$scope.message = "Learn Angular";

});