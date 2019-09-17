#!/usr/bin/env node

var htmllint = require('htmllint');

var opts = {
  "indent-style": false,
  "indent-width": false,
  "line-end-style": false,
  "line-no-trailing-whitespace": false,
  "tag-name-match": true
};

var file = require('fs').readFileSync('/dev/stdin', 'utf8');
var output = htmllint(file, opts);
output.then(function(o){ console.log(o); });
