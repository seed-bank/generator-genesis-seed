'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');
var prompt          = require('prompt');
const chalk         = require('chalk');
const _             = require('lodash');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (yeoman) {
      return new Promise(function(resolve, reject) {
        prompt.start();
        console.log(chalk.red("A simple example to get you started!"));
        console.log("Feel free to remove, override or whatever.");
        prompt.get(['name'], function (err, result) {
          yeoman.data = {};
          yeoman.data.names = {};
          yeoman.data.names.original    = result.name;
          yeoman.data.names.camelized   = _.camelCase(result.name);
          yeoman.data.names.dasherized  = _.kebabCase(result.name);
          yeoman.data.names.uppercase   = yeoman.data.names.camelized.charAt(0).toUpperCase() + yeoman.data.names.camelized.slice(1);
          yeoman.data.names.humanized   = _.startCase(result.name);
          resolve();
        });
      });
    });
  }
};