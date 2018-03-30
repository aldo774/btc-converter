import { expect } from 'chai';
import pkg from '../package.json';

const exec = require('child_process').exec;
const btcConverter = 'node ./src/main.js';

describe('Main CLI', () => {
  it('should return Hello World', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      console.log(err);
      if(err) throw err;
      expect(stdout.replace('\n' ,'')).to.be.equal(pkg.version);
      done();
    });
  });
});
