'use strict';
const Generator     = require('yeoman-generator');
const genesis       = require('genesis-seed-tiller');

module.exports = class extends Generator {
  doit() {
    genesis.bang(this, function (yeoman) {
      return new Promise(function(resolve, reject) {
        console.log("Here is the data that you appended to the genesis.json file using init.");
        console.log("Data: " + yeoman.data.<%= submodule %>.example); 
		// Put any code here for enriching the data
		// can be async or not.
        resolve();
      });
    });
  };
};
