#!/usr/bin/env node

var shell = require('shelljs');
var directors = shell.ls('-A', './');
var str = '';

for(var i = 0; i < directors.length; i++) {
	str = str + directors[i] + '      ';
}

console.log('\033[32m'+str+'\033[39m');