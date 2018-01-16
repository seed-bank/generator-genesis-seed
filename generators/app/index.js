'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');
const _             = require('lodash');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (data) {
      data.names = {};
      data.names.camelized   = _.camelCase(data["generator-name"]);
      data.names.dasherized  = _.kebabCase(data["generator-name"]);
      data.names.uppercase   = data.names.camelized.charAt(0).toUpperCase() + data.names.camelized.slice(1);
      data.names.humanized   = _.startCase(data["generator-name"]);
    });
  }
};
