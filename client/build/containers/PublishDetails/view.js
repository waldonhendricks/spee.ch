"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _PublishUrlInput = _interopRequireDefault(require("@containers/PublishUrlInput"));

var _PublishThumbnailInput = _interopRequireDefault(require("@containers/PublishThumbnailInput"));

var _PublishMetadataInputs = _interopRequireDefault(require("@containers/PublishMetadataInputs"));

var _ChannelSelect = _interopRequireDefault(require("@containers/ChannelSelect"));

var _Row = _interopRequireDefault(require("@components/Row"));

var _ButtonPrimaryJumbo = _interopRequireDefault(require("@components/ButtonPrimaryJumbo"));

var _ButtonTertiary = _interopRequireDefault(require("@components/ButtonTertiary"));

var _SpaceAround = _interopRequireDefault(require("@components/SpaceAround"));

var _PublishFinePrint = _interopRequireDefault(require("@components/PublishFinePrint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var PublishDetails =
/*#__PURE__*/
function (_React$Component) {
  function PublishDetails(props) {
    var _this;

    _classCallCheck(this, PublishDetails);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PublishDetails).call(this, props));
    _this.onPublishSubmit = _this.onPublishSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PublishDetails, [{
    key: "onPublishSubmit",
    value: function onPublishSubmit() {
      this.props.startPublish(this.props.history);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_Row.default, null, _react.default.createElement(_PublishUrlInput.default, null)), _react.default.createElement(_Row.default, null, _react.default.createElement(_ChannelSelect.default, null)), this.props.file.type === 'video/mp4' && _react.default.createElement(_Row.default, null, _react.default.createElement(_PublishThumbnailInput.default, null)), _react.default.createElement(_Row.default, null, _react.default.createElement(_PublishMetadataInputs.default, null)), _react.default.createElement(_Row.default, null, _react.default.createElement(_ButtonPrimaryJumbo.default, {
        value: 'Publish',
        onClickHandler: this.onPublishSubmit
      })), _react.default.createElement(_Row.default, null, _react.default.createElement(_SpaceAround.default, null, _react.default.createElement(_ButtonTertiary.default, {
        value: 'Cancel',
        onClickHandler: this.props.clearFile
      }))), _react.default.createElement(_Row.default, null, _react.default.createElement(_PublishFinePrint.default, null)));
    }
  }]);

  _inherits(PublishDetails, _React$Component);

  return PublishDetails;
}(_react.default.Component);

;

var _default = (0, _reactRouterDom.withRouter)(PublishDetails);

exports.default = _default;