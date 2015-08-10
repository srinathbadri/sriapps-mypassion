//var prod = angular.module('productList', ['ionic']);

deluxeMobileApp.controller('categoryListController',function($scope,$http,$rootScope,$location,$state, $window, productListFactory)
{
$scope.selectedCategory = '';

$scope.selectCategory = function(selValue) {
alert(selValue);
$rootScope.selectedCategory = selValue;
 $state.transitionTo('root.product');
}

});
