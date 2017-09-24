myApp.controller('AdvController', function($http, $location) {
  console.log('AdvController created');
  var vm = this;

  // alert('adv controller');
  function sendEmail(address) {
    window.location.href = 'mailto:' + address;
  }

  // http://www.chaosm.net/blog/2014/05/21/angularjs-contact-form-with-bootstrap-and-phpmailer/
  // this could be useful for emailing from the webpage instead of using a mail app

vm.getEducated = false;
vm.showReps = false;

vm.educationContent = {};

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
       You can help change that reality.";
       vm.educationContent.title = topic;
       vm.educationContent.org1 = "Jewish Community Action (JCA)";
       vm.educationContent.org1website = "http://www.jewishcommunityaction.org/our-work/criminal-justice-reform";
       vm.educationContent.org1email = "david@jewishcommunityaction.org";
       vm.educationContent.org1desc = "Despite its name, the criminal justice system is not just. JCA is working to prevent the use of private prisons in MN, and to restore voting rights to felons who have completed incarceration and are living and working in their communities.";
       vm.educationContent.org2 = "Take Action Minnesota";
       vm.educationContent.org2website = "http://www.takeactionminnesota.org/work/criminal-justice-reform/";
       vm.educationContent.org2email = "justin@takeactionminnesota.org";
       vm.educationContent.org2desc = "TakeAction's Justice 4 All (J4A) campaign is focused on removing barriers to employment and Democracy for individuals and families impacted by the just system";
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
      vm.educationContent.summary = "780,000 taxpaying immigrants face deportation and uncertainty, if Congress fails to overturn Trump's reversal of Deferred Action for Childhood Arrivals (DACA). You can help protect these immigrants today!";
      vm.educationContent.title = topic;
      vm.educationContent.org1 = "Navigate MN";
      vm.educationContent.org1website = "http://www.navigatemn.org/";
      vm.educationContent.org1email = "Emilia@navigatemn.org";
      vm.educationContent.org1desc = "NAVIGATE is a leadership development program for immigrant young adults in Minnesota facing financial, social and legal barriers to achieve their dreams through changing unjust systems.";
      vm.educationContent.org2 = "Immigrant Law Center of Minnesota (ICLM)";
      vm.educationContent.org2website = "https://www.ilcm.org/";
      vm.educationContent.org2email = "oficinalegal@ilcm.org";
      vm.educationContent.org2desc = "ICLM is a nonprofit agency that provides immigration legal assistance to low-income immigrants and refugees in Minnesota.";
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
