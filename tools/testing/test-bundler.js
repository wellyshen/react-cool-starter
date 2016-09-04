import 'babel-polyfill';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

const context = require.context('../../src', true, /-test\.jsx?$/);
context.keys().forEach(context);
