//prod = angular.module('productList', ['ionic'])

deluxeMobileApp.factory('productListFactory', function($http) {
var getProductList = function(scope, categoryValue)
{
       $http.post('http://t3bab013.deluxe.com:3000/',{category:categoryValue})
       .success(function (products)
       {
            scope.products = products;
//            alert(products[0].productId);
//
//            console.log(products[0].productId);
       });

};
return {
getProductList:getProductList
};

});
