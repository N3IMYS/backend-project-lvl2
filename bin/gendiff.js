#!/usr/bin/env node
const program  = require('commander');

program
    .usage('[options] <filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .option('-f, --format [type]', 'output format')
    .parse(process.argv);