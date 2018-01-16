'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');
var prompt          = require('prompt');
const chalk         = require('chalk');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (yeoman) {
      return new Promise(function(resolve, reject) {
        prompt.start();
        console.log(chalk.red("Provide a name for the submodule."));
        console.log("alpha numberic only");
        console.log("No spaces");
        prompt.get(['name'], function (err, result) {
          yeoman.data = {};
          yeoman.data.name      = "generator-" + result.name;
          resolve();
        });
      });
    });
  }
};