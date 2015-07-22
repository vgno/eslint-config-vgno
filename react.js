'use strict';

var merge = require('lodash.merge');
var readConfig = require('./read-config');
var baseConfig = readConfig('.eslintrc');
var reactConfig = readConfig('.eslintrc-react');

// We're manually merging the configurations here, no need to extend
delete reactConfig.extends;

module.exports = merge({}, baseConfig, reactConfig);
