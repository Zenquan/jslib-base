// rollup.config.lib.js
var multi = require('rollup-plugin-multi-entry');
var utils = require('./utils.js');
var common = require('./rollup.js');

var plugins = [
  multi(), 
  common.getCompiler()
];

var formatConfig = function (inputDir) {
  var config = [];
  var dirs = utils.getDirs(inputDir);
  dirs.forEach(function (item) {
    config.push({
      input: inputDir + '/' + item,
      output: {
        file: 'dist/' + item.replace(/.ts/, '.js'),
        format: 'es',
        name: item
      },
      plugins: plugins
    });
  });
  return config;
};

module.exports = formatConfig('src');
