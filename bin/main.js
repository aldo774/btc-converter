#!/usr/bin/env node
'use strict';

var pkg = require('../package.json');
var program = require('commander');
var convertBTC = require('./ConvertBTC');

program.version(pkg.version).description('Convert Bitcoint to any currency defined').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A, --amount <currency>', 'Value in Bitcoin to convert. (Default: 1)').parse(process.argv);

convertBTC(program.currency, program.amount);