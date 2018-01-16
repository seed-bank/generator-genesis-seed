'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');
var prompt          = require('prompt');
const chalk         = require('chalk');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (yeoman) {
      return new Promise(function(resolve, reject) {
        resolve();
      });
    });
  }
};