deluxeMobileApp.controller('userLoginController', function($scope,$http,$state,userLoginFactory)
{
alert("inside userLogincontroller");
$scope.LoginView = { "userName" : "validUser", "userPassword" : "pass"};
$scope.validateLogin = function ()
{
    userLoginFactory.Login($scope,$state);
}
});


