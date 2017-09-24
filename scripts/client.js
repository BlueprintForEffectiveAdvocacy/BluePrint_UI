var myApp = angular.module('myApp', ['ngRoute', 'ngYoutubeEmbed']);
console.log('myApp sourced');
/// Routes ///
myApp.config(function($routeProvider) {
  // $locationProvider.hashPrefix('');
  $routeProvider
  .when('/adv', {
    templateUrl: '/views/advocate.html',
    controller: 'AdvController as ac'
  //   resolve: {
  //     getuser : function(UserService){
  //       return UserService.getuser();
  //     }
  //   }
   })
  .otherwise({
    redirectTo: 'adv'
  });

  function sendEmail(address) {
    window.location.href = 'mailto:' + address;
}
});//end of info controller
