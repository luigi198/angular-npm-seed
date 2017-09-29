#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("mkdir -p dist/js && cat app/app.js > dist/js/app-cat.js && find app/ -name '*.js' -not -path 'app/app.js' -exec cat {} + >> dist/js/app-cat.js && uglifyjs dist/js/app-cat.js -m -o dist/js/app.js && uglifyjs dist/js/app-cat.js -m -c -o dist/js/app.min.js");
