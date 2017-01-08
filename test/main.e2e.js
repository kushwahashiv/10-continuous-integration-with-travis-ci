module.exports = {
  'nightwatch demo': (client) => {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 10000)
      .assert.title('nightwatch demo')
      .assert.visible('input#num1')
      .setValue('input#num1', '7')
      .assert.visible('input#num2')
      .setValue('input#num2', '9')
      .click('button#save')
      .pause(5000)
      .assert.containsText('label#sum', '16')
      .end();
  },

  'Other tests': (client) => {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 10000)
      .assert.containsText('h2', 'Calculator!')
      .assert.visible('input#num1')
      .setValue('input#num1', '10')
      .assert.visible('input#num2')
      .setValue('input#num2', 'r')
      .click('button#save')
      .pause(500)
      .assert.containsText('label#sum', 'NaN')
      .end();
  }
};
