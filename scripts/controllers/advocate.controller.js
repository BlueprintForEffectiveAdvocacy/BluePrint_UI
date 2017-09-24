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
      vm.official = response.data;
      console.log("vm.official", vm.offical);

    });
  }
  // vm.getReps(address);



  vm.getTopic = function() {
      $http.get('http://172.16.254.125:8000/issues/?format=json').then(function(response) {
        console.log('get Issue called');
        console.log('issue ', response);


      });
    }


    vm.getTopic('Racial Justice');

}); //end of AdvocateController
