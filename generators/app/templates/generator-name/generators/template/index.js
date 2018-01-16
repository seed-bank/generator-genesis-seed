'use strict';
const Generator     = require('yeoman-generator');

module.exports = class extends Generator {
  doit() {
	  var data = {};
	  data["title"] 	= "A Title For You Generator";
	  console.log(JSON.stringify(data, null, 2));
  }
};
