deluxeMobileApp.factory('deluxeHomePageFactory', function($http) {

 var getProductDetails=function(scope)
 {

alert(scope.productID);
       $http.post('http://localhost:3000/',{prodID:scope.productID}).success(function (product)
       {
                                    scope.productId=product.productId;
                                    scope.productDescription=product.productName;
                                    scope.productMediumImage= product.imageURL.mediumImageURL;
       });

 };

return {
getProductDetails:getProductDetails
};

});
