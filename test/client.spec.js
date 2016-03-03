import jsdom from 'mocha-jsdom';
import {
  expect
} from 'chai';
import makeLogger from '../src/client/console';

describe('Client Monitor Code', () => {

  jsdom();

  it('should track basic message', () => {
    const log = makeLogger({
      host: '//localhost:3000'
    });
    log.info('hello tracking message');
    const imgEls = document.getElementsByTagName('img');
    expect(imgEls.length).to.be.above(0);
  });

});
