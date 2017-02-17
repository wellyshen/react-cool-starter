import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

// Loading chai-enzyme
chai.use(chaiEnzyme());

// Declare as global variable
// therefore you don't have to declare it in every script
global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;

const context = require.context('../../src', true, /-test\.jsx?$/);
context.keys().forEach(context);
