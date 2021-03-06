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
        console.log(chalk.red("Provide a name for the generator."));
        console.log("alpha numberic only");
        console.log("use "+ chalk.red( "'-'") + " for spaces.");
        console.log("I will prefix the name with "+ chalk.red( "'generator-'") + " to adhere to yeoman naming conventions.")
        prompt.get(['name', 'author'], function (err, result) {
          yeoman.data = {};
          yeoman.data.name      = "generator-" + result.name;
          yeoman.data.author    = result.author;
          resolve();
        });
      });
    });
  }
};