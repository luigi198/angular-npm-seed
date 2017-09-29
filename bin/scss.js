#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("node-sass --output-style nested --indent-type tab --indent-width 4 -o dist/css app/styles");
