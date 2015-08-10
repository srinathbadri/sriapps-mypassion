deluxeMobileApp.controller('deluxeHomePageController', function($scope,$http,$state,deluxeHomePageFactory)
{

alert('deluxeHomePageController');
$scope.getProductDetails = function ()
{
//productDetailsFactory.getProductDetails($scope,$state);
}

$scope.goToCategory = function()
{
    alert('goToCategory');
    $state.transitionTo('root.category');
}



});
