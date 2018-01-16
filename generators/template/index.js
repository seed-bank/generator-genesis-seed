'use strict';
const Generator     = require('yeoman-generator');

module.exports = class extends Generator {
  doit() {
	  var data = {};
	  data["generator-name"] 	= "generator-your-generator";
	  data["description"] 		= "description of your generator.";
	  data["keywords"]			= ["whatever", "you like"];
	  data["author"]			= "Your Name";
	  console.log(JSON.stringify(data, null, 2));
  }
};
