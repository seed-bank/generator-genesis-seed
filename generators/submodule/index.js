'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');
const _             = require('lodash');
var prompt          = require('prompt');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (yeoman) {
      return new Promise(function(resolve, reject) {
        prompt.start();
        prompt.get(['submodule'], function (err, result) {
          yeoman.data.submodule      = result.submodule;
          resolve();
        }); 
      });
    });
  };  
};
