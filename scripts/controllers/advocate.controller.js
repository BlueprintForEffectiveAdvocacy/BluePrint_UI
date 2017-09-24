myApp.controller('AdvController', function($http, $location) {
  console.log('AdvController created');
  var vm = this;

  // alert('adv controller');
  function sendEmail(address) {
    window.location.href = 'mailto:' + address;
  }

vm.getEducated = false;

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


// }


vm.getReps = function(address) {
    $http.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBlOIeTeyReDkPTNQEL-rt_xe634WuRKSE&address='+encodeURIComponent(address)).then(function(response) {
      console.log('get reps called');
      console.log('offical ', response.data);
      vm.rep = response.data.officials;
      console.log("vm.rep", vm.rep);
    });
  }
  // vm.getReps(address);

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
