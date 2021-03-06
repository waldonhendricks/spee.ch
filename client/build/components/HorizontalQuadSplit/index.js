"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Row = _interopRequireDefault(require("@components/Row"));

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

var HorizontalTriSplit =
/*#__PURE__*/
function (_React$Component) {
  function HorizontalTriSplit() {
    _classCallCheck(this, HorizontalTriSplit);

    return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalTriSplit).apply(this, arguments));
  }

  _createClass(HorizontalTriSplit, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: 'horizontal-quad-split'
      }, _react.default.createElement("div", {
        className: 'left-side'
      }, _react.default.createElement("div", {
        className: 'column-a'
      }, _react.default.createElement(_Row.default, null, this.props.columnA)), _react.default.createElement("div", {
        className: 'column-b'
      }, _react.default.createElement(_Row.default, null, this.props.columnB))), _react.default.createElement("div", {
        className: 'right-side'
      }, _react.default.createElement("div", {
        className: 'column-c'
      }, _react.default.createElement(_Row.default, null, this.props.columnC)), _react.default.createElement("div", {
        className: 'column-d'
      }, _react.default.createElement(_Row.default, null, this.props.columnD))));
    }
  }]);

  _inherits(HorizontalTriSplit, _React$Component);

  return HorizontalTriSplit;
}(_react.default.Component);

var _default = HorizontalTriSplit;
exports.default = _default;