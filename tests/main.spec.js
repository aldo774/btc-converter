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

  it('should return description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      console.log(err);
      if(err) throw err;
      expect(stdout.includes('Convert Bitcoint to any currency defined'))
        .to.be.true;
      done();
    });
  });

  it('should return the currency option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      console.log(err);
      if(err) throw err;
      expect(stdout.includes('--currency'))
        .to.be.true;
      done();
    });
  });

  it('should return the amount option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      console.log(err);
      if(err) throw err;
      expect(stdout.includes('--amount'))
        .to.be.true;
      done();
    });
  });
});
