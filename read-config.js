'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function readConfig(file) {
    var content = fs.readFileSync(
        path.join(
            __dirname,
            'node_modules',
            'vgno-coding-standards',
            file
        ),
        'utf8'
    );

    return JSON.parse(content);
};
