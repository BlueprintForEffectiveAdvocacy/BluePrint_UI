// var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('AdvController', function($http, $location) {
  console.log('AdvController created');
  var vm = this;

  // alert('adv controller');
  function sendEmail(address) {
    window.location.href = 'mailto:' + address;
  }


  vm.official;

vm.getReps = function(address) {
    $http.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBlOIeTeyReDkPTNQEL-rt_xe634WuRKSE&address='+encodeURIComponent(address)).then(function(response) {
      console.log('get reps called');
      console.log('offical ', response.data);


    });
  }
  // vm.getReps(address);

  vm.videoURL = 'https://www.youtube.com/watch?v=nHbOUD5aXsc';
  // https://www.npmjs.com/package/ng-youtube-embed

}); //end of AdvocateController
