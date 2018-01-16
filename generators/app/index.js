'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');
const _             = require('lodash');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (yeoman) {
      return new Promise(function(resolve, reject) {
        yeoman.data.names = {};
        yeoman.data.names.camelized   = _.camelCase(yeoman.data["generator-name"]);
        yeoman.data.names.dasherized  = _.kebabCase(yeoman.data["generator-name"]);
        yeoman.data.names.uppercase   = yeoman.data.names.camelized.charAt(0).toUpperCase() + yeoman.data.names.camelized.slice(1);
        yeoman.data.names.humanized   = _.startCase(yeoman.data["generator-name"]);
        console.log(JSON.stringify(yeoman.data));
        resolve();
      });
    });
  }
};
