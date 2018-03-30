#!/usr/bin/env node
const pkg = require('../package.json');
const program = require('commander');
const convertBTC = require('./ConvertBTC');

program
  .version(pkg.version)
  .description('Convert Bitcoint to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-A, --amount <currency>', 'Value in Bitcoin to convert. (Default: 1)')
  .parse(process.argv);

convertBTC(program.currency, program.amount);
