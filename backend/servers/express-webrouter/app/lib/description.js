'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _transactionsExpressData = require('transactions-express-data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var description = (0, _transactionsExpressData.createDescriptionFromDir)(_path2.default.join(__dirname, 'models'), {
  isAllDeepJoins: true,
  isAllJoins: true
});

exports.default = description;