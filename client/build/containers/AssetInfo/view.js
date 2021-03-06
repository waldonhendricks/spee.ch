"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Label = _interopRequireDefault(require("@components/Label"));

var _RowLabeled = _interopRequireDefault(require("@components/RowLabeled"));

var _Row = _interopRequireDefault(require("@components/Row"));

var _SpaceBetween = _interopRequireDefault(require("@components/SpaceBetween"));

var _AssetShareButtons = _interopRequireDefault(require("@components/AssetShareButtons"));

var _ClickToCopy = _interopRequireDefault(require("@components/ClickToCopy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

var AssetInfo =
/*#__PURE__*/
function (_React$Component) {
  function AssetInfo() {
    _classCallCheck(this, AssetInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssetInfo).apply(this, arguments));
  }

  _createClass(AssetInfo, [{
    key: "render",
    value: function render() {
      var _this$props$asset = this.props.asset,
          shortId = _this$props$asset.shortId,
          _this$props$asset$cla = _this$props$asset.claimData,
          channelName = _this$props$asset$cla.channelName,
          certificateId = _this$props$asset$cla.certificateId,
          description = _this$props$asset$cla.description,
          name = _this$props$asset$cla.name,
          claimId = _this$props$asset$cla.claimId,
          fileExt = _this$props$asset$cla.fileExt,
          contentType = _this$props$asset$cla.contentType,
          thumbnail = _this$props$asset$cla.thumbnail,
          host = _this$props$asset$cla.host;
      return _react.default.createElement("div", null, channelName && _react.default.createElement(_Row.default, null, _react.default.createElement(_RowLabeled.default, {
        label: _react.default.createElement(_Label.default, {
          value: 'Channel:'
        }),
        content: _react.default.createElement("span", {
          className: "text"
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: "/".concat(channelName, ":").concat(certificateId)
        }, channelName))
      })), _react.default.createElement(_Row.default, null, _react.default.createElement(_RowLabeled.default, {
        label: _react.default.createElement(_Label.default, {
          value: 'Share:'
        }),
        content: _react.default.createElement(_AssetShareButtons.default, {
          host: host,
          name: name,
          shortId: shortId
        })
      })), _react.default.createElement(_Row.default, null, _react.default.createElement(_RowLabeled.default, {
        label: _react.default.createElement(_Label.default, {
          value: 'Link:'
        }),
        content: _react.default.createElement(_ClickToCopy.default, {
          id: 'short-link',
          value: "".concat(host, "/").concat(shortId, "/").concat(name)
        })
      })), _react.default.createElement(_Row.default, null, _react.default.createElement(_RowLabeled.default, {
        label: _react.default.createElement(_Label.default, {
          value: 'Embed:'
        }),
        content: _react.default.createElement("div", null, contentType === 'video/mp4' ? _react.default.createElement(_ClickToCopy.default, {
          id: 'embed-text-video',
          value: "<video width=\"100%\" controls poster=\"".concat(thumbnail, "\" src=\"").concat(host, "/").concat(claimId, "/").concat(name, ".").concat(fileExt, "\"/></video>")
        }) : _react.default.createElement(_ClickToCopy.default, {
          id: 'embed-text-image',
          value: "<img src=\"".concat(host, "/").concat(claimId, "/").concat(name, ".").concat(fileExt, "\"/>")
        }))
      })), _react.default.createElement(_Row.default, null, _react.default.createElement(_SpaceBetween.default, null, _react.default.createElement("a", {
        className: "link--primary",
        href: "".concat(host, "/").concat(claimId, "/").concat(name, ".").concat(fileExt)
      }, "Direct Link"), _react.default.createElement("a", {
        className: 'link--primary',
        href: "".concat(host, "/").concat(claimId, "/").concat(name, ".").concat(fileExt),
        download: name
      }, "Download"), _react.default.createElement("a", {
        className: 'link--primary',
        target: "_blank",
        href: "https://lbry.io/dmca"
      }, "Report"))), description && _react.default.createElement(_Row.default, null, _react.default.createElement("p", null, description)), _react.default.createElement(_Row.default, null, _react.default.createElement("p", null, "Hosted via the ", _react.default.createElement("a", {
        className: 'link--primary',
        href: 'https://lbry.io/get',
        target: '_blank'
      }, "LBRY"), " blockchain")));
    }
  }]);

  _inherits(AssetInfo, _React$Component);

  return AssetInfo;
}(_react.default.Component);

;
var _default = AssetInfo;
exports.default = _default;