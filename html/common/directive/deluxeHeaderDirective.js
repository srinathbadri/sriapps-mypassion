deluxeMobileApp.directive('deluxeHeader', function() {
  return {
    scope: {
		pagetitle: '@',
    },
	templateUrl: '../../common/html/header.html',
    controller : 'deluxeHeaderController',
    link: function(scope, element, attrs) {
    }
  }
});
 /* .controller('deluxeHeaderController', function($scope,$http)
  {
//  //alert('deluxeHeaderController');
//  $scope.togglesearchbox = true;
//
//   $scope.$watch("togglesearchbox", function(newValue){
//       //alert(newValue);
//       } );
//
//  $scope.toggleSearch = function()
//  {
//      alert('search cancel');
//      $scope.toggleSearchBox = !($scope.toggleSearchBox);
//  }

  });*/
//  ;

//
//angular.module('testingHeader', []).directive('testingHeader', function() {
//    return {
//      templateUrl: '../../common/html/header.html'
//    };
//  });


