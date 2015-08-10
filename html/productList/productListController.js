//var prod = angular.module('productList', ['ionic']);

deluxeMobileApp.controller('productListController',function($scope,$rootScope,$http,$location, $window, productListFactory)
{
$scope.products = {};

alert($rootScope.selectedCategory)
 productListFactory.getProductList($scope, $rootScope.selectedCategory);

//    $scope.getProductDetails = function ()
//    {
//        productListFactory.getProductList($scope, $location);
//    }
});
