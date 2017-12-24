'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transactionsExpressPassport = require('transactions-express-passport');

_transactionsExpressPassport.guest.subscriptions = _transactionsExpressPassport.guest.subscriptions.concat([{
  collectionName: 'subscribers',
  method: ['POST']
}]);

exports.default = _transactionsExpressPassport.guest;