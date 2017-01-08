exports.command = function(result) {
  var SauceLabs = require("saucelabs");

  var saucelabs = new SauceLabs({
    username: 'typescriptcookbook',
    password: 'd6fabf65-fa7c-4987-b628-056095c0ebcc'
  });

  var sessionid = this.capabilities['webdriver.remote.sessionid'];
  var jobName = this.currentTest.name;

  saucelabs.updateJob(sessionid, {
    passed: this.currentTest.results.failed === 0,
    name: jobName
  }, function() {});

  console.log("SauceOnDemandSessionID=" + sessionid + " job-name=" + jobName);
  this.end();
};
