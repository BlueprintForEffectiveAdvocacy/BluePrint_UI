myApp.controller('AdvController', function($http, $location) {
  console.log('AdvController created');
  var vm = this;

  // alert('adv controller');
  function sendEmail(address) {
    window.location.href = 'mailto:' + address;
  }

vm.getEducated = false;
vm.showReps = false;

vm.educationContent = {}

vm.educate = function(topic) {
  vm.getEducated = !vm.getEducated;
  // vm.select = function (topic) {
  console.log("topic select called -> " + topic);
  switch (topic) {
    case "Racial Justice":
      console.log('Logging Racial Justice');
      break;
    case "Criminal Justice Reform":
      console.log('Logging Criminal Justice Reform');
      vm.educationContent.summary = "African-American men are 12 times more likely than their white counterparts to be incarcerated in Minnesota. \
       You can help change that reality."
      break;
    case "LGBTQ":
      console.log('Logging LGBTQ');
      break;
    case "Reproductive Rights":
      console.log('Reproductive Rights');
      break;
    case "Healthcare":
      console.log('Logging Healthcare');
      break;
    case "Education":
      console.log('Logging Education');
      break;
    case "Worker's Rights/Equal Pay":
      console.log('Logging Worker\'s Rights/Equal Pay');
      break;
    case "Immigration Rights":
      console.log('Logging Immigration Rights');
      break;
    case "Climate Change and Environment":
      console.log('Logging Climate Change and Environment');
      break;
    default:
      console.log('Logging error in vm.select switch');
      break;
  }
};





vm.federalOffices = ["United States Senate", "United States House of Representatives"];
vm.stateOffices = ["Governor", "State Senate", "State House"];
vm.getReps = function(address) {
    vm.showReps = !vm.showReps;
    $http.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBlOIeTeyReDkPTNQEL-rt_xe634WuRKSE&address='+encodeURIComponent(address)).then(function(response) {
      vm.stateOfficials = [];
      vm.federalOfficials = [];
      console.log('get reps called');
      console.log('offical ', response.data);
      for (i = 0; i < vm.federalOffices.length; i++) {
        for (_i = 0; _i < response.data.offices.length; _i++) {
          if(response.data.offices[_i].name.includes(vm.federalOffices[i])) {
            for (e = 0; e < response.data.offices[_i].officialIndices.length; e++) {
              vm.federalOfficials.push(response.data.officials[response.data.offices[_i].officialIndices[e]]);
            }
          }
        }
      }
      for (i = 0; i < vm.stateOffices.length; i++) {
        for (_i = 0; _i < response.data.offices.length; _i++) {
          if(response.data.offices[_i].name.includes(vm.stateOffices[i])) {
            if(vm.stateOffices[i] == "Governor" && response.data.offices[_i].name != "Governor") {
              continue;
            }
            for (e = 0; e < response.data.offices[_i].officialIndices.length; e++) {
              vm.stateOfficials.push(response.data.officials[response.data.offices[_i].officialIndices[e]])
            }
          }
        }
      }
    });
  }

  vm.videoURL = 'https://www.youtube.com/watch?v=nHbOUD5aXsc';
  // https://www.npmjs.com/package/ng-youtube-embed


  vm.getTopic = function() {
      $http.get('http://172.16.254.125:8000/issues/?format=json').then(function(response) {
        console.log('get Issue called');
        console.log('issue ', response);
      });
    }
    vm.getTopic('Racial Justice');

}); //end of AdvocateController
