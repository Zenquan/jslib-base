const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/doc: init');
    const type = option.type;
    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/package.${type}.json`),
        path.resolve(cmdPath, name, './package.json')
    );
}

function update(cmdPath, option) {
    console.log('@js-lib/doc: update');
    const type = option.type;
    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/package.${type}.json`),
        path.resolve(cmdPath, './package.json')
    );
}

module.exports = {
    init: init,
    update: update,
}