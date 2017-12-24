'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transactionsExpressPassport = require('transactions-express-passport');

_transactionsExpressPassport.user.subscriptions = [{
  collectionName: 'notifications',
  tokens: [_transactionsExpressPassport.userSubscriptionToken]
}];

exports.default = _transactionsExpressPassport.user;