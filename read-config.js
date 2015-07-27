'use strict';

var fs = require('fs');

module.exports = function readConfig(file) {
    var content = fs.readFileSync(
        require.resolve('vgno-coding-standards/' + file),
        'utf8'
    );

    return JSON.parse(content);
};
