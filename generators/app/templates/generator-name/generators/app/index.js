'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (data) {
	  // add, change, delete, transform... whatever here. 
	  // This event is called after loading the data but before loading the templates.
    });
  }
};
