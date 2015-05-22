'use strict';

var babel = require('babel-core');
var transform = babel.transform;
var options = babel.options;
var util = babel.util;

module.exports = function (content, file, conf) {
    var result = transform(content, conf);
    var code = result.code;
    //var map = result.map;
    //var ast = result.ast;

    return code;
};
