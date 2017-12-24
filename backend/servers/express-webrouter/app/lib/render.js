'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRender = useRender;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var packageConfig = JSON.parse(_fs2.default.readFileSync(_path2.default.join(__dirname, '../../package.json')).toString('utf-8'));
var _process$env = process.env,
    SITE_EMAIL = _process$env.SITE_EMAIL,
    SITE_LABEL = _process$env.SITE_LABEL,
    TRACKING_ID = _process$env.TRACKING_ID;

var TELEPORT_WELCOME = {};
var teleportDir = _path2.default.join(__dirname, '../../config/teleport_welcome.json');
if (_fs2.default.existsSync(teleportDir)) {
  TELEPORT_WELCOME = JSON.parse(_fs2.default.readFileSync(teleportDir));
}
var TELEPORT_WELCOME_STRING = '\'' + JSON.stringify(TELEPORT_WELCOME) + '\'';

function useRender(app) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // unpack
  var getExtraConfig = config.getExtraConfig;
  // set render
  app.set('view engine', 'html');
  app.engine('html', _ejs2.default.renderFile);
  app.use(_express2.default.static(_path2.default.join(__dirname, '../')));
  // use
  app.use('/', function (req, res) {
    // choose the correct html entry point
    var indexFileName = void 0;
    var indexFileDir = void 0;
    if (_config.IS_DEVELOPMENT) {
      indexFileName = '_dev_index.html';
    } else {
      var pageName = req.originalUrl === '/' ? '/home' : req.originalUrl;
      // remove also the first slash
      indexFileName = '_' + pageName.slice(1) + '_index.html';
      if (!_fs2.default.existsSync(_path2.default.join(__dirname, '../templates/' + indexFileName))) {
        indexFileName = '_prod_index.html';
      }
    }
    indexFileDir = _path2.default.join(__dirname, '../templates/' + indexFileName);
    // set the extraContext
    var extraConfig = getExtraConfig && getExtraConfig(req, res) || config.extraContext || {};
    // update the context
    app.set('config', Object.assign(app.get('config') || {}, {
      SITE_EMAIL: SITE_EMAIL,
      SITE_LABEL: SITE_LABEL,
      TELEPORT_WELCOME: TELEPORT_WELCOME,
      TELEPORT_WELCOME_STRING: TELEPORT_WELCOME_STRING,
      TRACKING_ID: TRACKING_ID
    }, extraConfig));
    // render
    res.render(indexFileDir, app.get('config'));
  });
}