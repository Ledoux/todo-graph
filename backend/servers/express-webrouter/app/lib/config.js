'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// DEVELOPMENT is for localhost with dev tools (watchers, hot server...)
// LOCALHOST is for localhost either dev or prod context
// PRODUCTION is for not-localhost condition
// SANDBOX is for localhost with build and prod server
// STAGING if for not-localhost beta testing
var IS_DEVELOPMENT = process.env.TYPE === 'development';
var IS_SANDBOX = !IS_DEVELOPMENT && process.env.NODE_ENV !== 'production';
var IS_LOCALHOST = IS_DEVELOPMENT || IS_SANDBOX;
var IS_PRODUCTION = !IS_SANDBOX && process.env.NODE_ENV === 'production';
var IS_STAGING = !IS_SANDBOX && process.env.TYPE === 'staging';

exports.IS_DEVELOPMENT = IS_DEVELOPMENT;
exports.IS_SANDBOX = IS_SANDBOX;
exports.IS_LOCALHOST = IS_LOCALHOST;
exports.IS_PRODUCTION = IS_PRODUCTION;
exports.IS_STAGING = IS_STAGING;