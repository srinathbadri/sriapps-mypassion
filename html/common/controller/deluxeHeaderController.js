deluxeMobileApp.controller('deluxeHeaderController', function($scope,$http)
{
    //alert('deluxeHeaderController... this ');
    $scope.togglesearchbox = true;

    $scope.toggleSearch = function()
    {
        //alert('search cancel');
        $scope.togglesearchbox = !($scope.togglesearchbox);
    }
});
