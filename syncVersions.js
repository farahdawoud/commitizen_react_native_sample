// const stringifyPackage = require('stringify-package');
// const detectIndent = require('detect-indent');
// const detectNewline = require('detect-newline');
var RNFS = require('react-native-fs');

const cz_json = require('./cz.json');
const package_json = require('./package.json');

export const readVersion = function () {
  let version = cz_json.commitizen.version;
  console.log('cz version', cz_json.commitizen.version);
  return version;
};

export const writeVersion = function (version) {
  package_json.version = version;
  console.log('Updated package.json to version ', version);
};
