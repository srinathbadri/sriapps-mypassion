deluxeMobileApp.factory('userLoginFactory', function($http,$window) {

 var Login=function(scope,state)
 {
alert("calling factory");

 state.transitionTo('root.home');

      /* $http.post('http://localhost:3000/', scope.LoginView
                               ).success(function (msg) {

                               if(msg.description=="Success")
                               {
                                    $window.location="../../home/html/homePage.html";
                               }
                                  else
                                  {
                                  scope.displayLoginError=true;
                                  }


                                                              });*/

 };

return {

Login:Login

};

});
