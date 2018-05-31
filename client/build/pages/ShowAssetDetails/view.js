"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SEO = _interopRequireDefault(require("@components/SEO"));

var _index = _interopRequireDefault(require("../../containers/NavBar/index"));

var _index2 = _interopRequireDefault(require("../ErrorPage/index"));

var _index3 = _interopRequireDefault(require("../../containers/AssetTitle/index"));

var _index4 = _interopRequireDefault(require("../../containers/AssetDisplay/index"));

var _index5 = _interopRequireDefault(require("../../containers/AssetInfo/index"));

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

var ShowAssetDetails =
/*#__PURE__*/
function (_React$Component) {
  function ShowAssetDetails() {
    _classCallCheck(this, ShowAssetDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowAssetDetails).apply(this, arguments));
  }

  _createClass(ShowAssetDetails, [{
    key: "render",
    value: function render() {
      var asset = this.props.asset;

      if (asset) {
        var name = asset.claimData.name;
        return _react.default.createElement("div", null, _react.default.createElement(_SEO.default, {
          pageTitle: "".concat(name, " - details"),
          asset: asset
        }), _react.default.createElement(_index.default, null), _react.default.createElement("div", {
          className: "row row--tall row--padded"
        }, _react.default.createElement("div", {
          className: "column column--10"
        }, _react.default.createElement(_index3.default, null)), _react.default.createElement("div", {
          className: "column column--5 column--sml-10 align-content-top"
        }, _react.default.createElement("div", {
          className: "row row--padded show-details-container"
        }, _react.default.createElement(_index4.default, null))), _react.default.createElement("div", {
          className: "column column--5 column--sml-10 align-content-top"
        }, _react.default.createElement("div", {
          className: "row row--padded"
        }, _react.default.createElement(_index5.default, null)))));
      }

      ;
      return _react.default.createElement(_index2.default, {
        error: 'loading asset data...'
      });
    }
  }]);

  _inherits(ShowAssetDetails, _React$Component);

  return ShowAssetDetails;
}(_react.default.Component);

;
var _default = ShowAssetDetails;
exports.default = _default;