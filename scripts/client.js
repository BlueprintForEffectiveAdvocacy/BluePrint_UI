// Basic angular set up, initiate the app
var myApp = angular.module('myApp', ['ngRoute', 'ngYoutubeEmbed', 'ui.bootstrap']);
console.log('myApp sourced');
/// Routes ///
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/adv', {
    templateUrl: '/views/advocate.html',
    controller: 'AdvController as ac'
   })
  .otherwise({
    redirectTo: 'adv'
  });

  function sendEmail(address) {
    window.location.href = 'mailto:' + address;
}
});//end of info controller
