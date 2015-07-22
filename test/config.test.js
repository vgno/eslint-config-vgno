'use strict';

var assert = require('assert');
var config = require('../');
var reactConfig = require('../react');

// Ensure that the config has some expected values
assert.equal(config.env.node, true);
assert.equal(config.rules.yoda, 2);

// Ensure we don't have any react rules in the base config
assert(typeof config.rules['react/jsx-boolean-value'] === 'undefined');
assert.equal((config.plugins || []).indexOf('react'), -1);

// Ensure the React config extends the base config
assert.equal(reactConfig.env.node, true);
assert.equal(reactConfig.rules.yoda, 2);

// Ensure the React config specifies React rules, JSX and React plugin
assert(reactConfig.rules['react/jsx-boolean-value'], 2);
assert((reactConfig.plugins || []).indexOf('react') > -1);
assert(reactConfig.ecmaFeatures.jsx);
