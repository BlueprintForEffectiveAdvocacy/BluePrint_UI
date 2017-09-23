var myApp = angular.module('myApp', ['ngRoute']);
console.log('myApp sourced');
/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/advocate', {
    templateUrl: '/views/templates/advocate.html',
    controller: 'AdvocateController as ac'
  //   resolve: {
  //     getuser : function(UserService){
  //       return UserService.getuser();
  //     }
  //   }
   })
  .otherwise({
    redirectTo: 'home'
  });
});



  //end of info controller
