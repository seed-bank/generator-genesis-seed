'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');
var prompt          = require('prompt');
const chalk         = require('chalk');
var prompt          = require('prompt');

module.exports = class extends Generator {
  doit() {
    var config = this.fs.readJSON('./genesis.json', 'utf8');
    var fspointer = this.fs;
    config.<%= submodule %> = {};
    var promise = new Promise(function(resolve, reject) {
      prompt.start();
      prompt.get(['example'], function (err, result) {
        config.<%= submodule %>.example = result.example;
        resolve();
      }); 
    });
    promise.then(function() {
      fspointer.writeJSON('./genesis.json', config);
      console.log("config appended to the genesis.json file.");
      }, function(err) {
          console.log(err);
      });
  };
};