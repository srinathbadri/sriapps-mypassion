var deluxeMobileApp = angular.module('deluxeMobileApp', ['ui.state']);

deluxeMobileApp.config(['$stateProvider',  function($stateProvider){
    $stateProvider
       .state('root',{
          url: '',
          abstract: true,
          views: {
            'header': {
              templateUrl: 'common/html/header.html',
              controller: 'deluxeHeaderController'
            },

            'footer':{
              template: 'footer'
            }
          }
        })
        .state('root.login', {
          url: '/login',
          views: {
            'mainContent@':{
                         templateUrl: 'userLogin/userLogin.html',
                           controller: 'userLoginController'
                       },
          }
        })

          .state('root.home', {
                  url: '/home',
                  views: {
                     'mainContent@':{
                                  templateUrl: 'home/homePage.html',
                                   controller: 'deluxeHomePageController'
                                }
                  }
                })

         .state('root.category', {
                  url: '/category',
                  views: {
                     'mainContent@':{
                                  templateUrl: 'category/categoryList.html',
                                  controller: 'categoryListController'
                                }
                  }
                })

         .state('root.product', {
                  url: '/product',
                  views: {
                     'mainContent@':{
                                  templateUrl: 'productList/productList.html',
                                  controller: 'productListController'

                                }
                  }
                })

}]);
deluxeMobileApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $state.transitionTo('root.login');
}]);


// app.controller('HeaderCtrl', ['$scope', function($scope){
//   // $scope.links = [
//   //   {name: 'home', url:'/'},
//   //   {name: 'about', url: '/about'},
//   //   {name: 'contacts', url:'/contact'}
//   //   ];
// }]);

// app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

// }]);
