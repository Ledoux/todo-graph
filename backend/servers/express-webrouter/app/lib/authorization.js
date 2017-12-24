'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _transactionsExpressData = require('transactions-express-data');

var _description = require('./description');

var _description2 = _interopRequireDefault(_description);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authorization = (0, _transactionsExpressData.createAuthorizationFromDir)(_path2.default.join(__dirname, 'modes'), {
  description: _description2.default,
  isAllJoins: true,
  isAllDeepJoins: true
});

exports.default = authorization;