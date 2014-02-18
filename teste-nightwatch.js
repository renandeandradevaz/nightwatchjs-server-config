module.exports = {
  "Teste de demonstração" : function (client) {
    client
      .url("https://github.com/search")
      .setValue("#js-command-bar-field", "monitoramento-sites")
      .click("#search_form button")
      .pause(1000)
      .assert.containsText(".repolist-name", "renandeandradevaz/monitoramento-sites")
      .end();
  }
};
