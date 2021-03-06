"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AssetPreview = _interopRequireDefault(require("@components/AssetPreview"));

var _HorizontalQuadSplit = _interopRequireDefault(require("@components/HorizontalQuadSplit"));

var _Row = _interopRequireDefault(require("@components/Row"));

var _ButtonSecondary = _interopRequireDefault(require("@components/ButtonSecondary"));

var _createGroupedList = require("../../utils/createGroupedList.js");

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

var ChannelClaimsDisplay =
/*#__PURE__*/
function (_React$Component) {
  function ChannelClaimsDisplay(props) {
    var _this;

    _classCallCheck(this, ChannelClaimsDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChannelClaimsDisplay).call(this, props));
    _this.showNextResultsPage = _this.showNextResultsPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showPreviousResultsPage = _this.showPreviousResultsPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ChannelClaimsDisplay, [{
    key: "showPreviousResultsPage",
    value: function showPreviousResultsPage() {
      var currentPage = this.props.channel.claimsData.currentPage;
      var previousPage = parseInt(currentPage) - 1;
      this.showNewPage(previousPage);
    }
  }, {
    key: "showNextResultsPage",
    value: function showNextResultsPage() {
      var currentPage = this.props.channel.claimsData.currentPage;
      var nextPage = parseInt(currentPage) + 1;
      this.showNewPage(nextPage);
    }
  }, {
    key: "showNewPage",
    value: function showNewPage(page) {
      var _this$props = this.props,
          channelKey = _this$props.channelKey,
          _this$props$channel = _this$props.channel,
          name = _this$props$channel.name,
          longId = _this$props$channel.longId;
      this.props.onUpdateChannelClaims(channelKey, name, longId, page);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$channel$ = _this$props2.channel.claimsData,
          claims = _this$props2$channel$.claims,
          currentPage = _this$props2$channel$.currentPage,
          totalPages = _this$props2$channel$.totalPages,
          defaultThumbnail = _this$props2.defaultThumbnail;
      var groupedClaimsList = (0, _createGroupedList.createGroupedList)(claims, 4);

      if (claims.length > 0) {
        return _react.default.createElement("div", {
          className: 'channel-claims-display'
        }, _react.default.createElement("div", null, groupedClaimsList.map(function (group, index) {
          var itemA = group[0];
          var itemB = group[1];
          var itemC = group[2];
          var itemD = group[3];
          return _react.default.createElement(_HorizontalQuadSplit.default, {
            key: "claims-row-".concat(index),
            columnA: itemA && _react.default.createElement(_AssetPreview.default, {
              defaultThumbnail: defaultThumbnail,
              claimData: itemA,
              key: "".concat(itemA.name, "-").concat(itemA.id)
            }),
            columnB: itemB && _react.default.createElement(_AssetPreview.default, {
              defaultThumbnail: defaultThumbnail,
              claimData: itemB,
              key: "".concat(itemB.name, "-").concat(itemB.id)
            }),
            columnC: itemC && _react.default.createElement(_AssetPreview.default, {
              defaultThumbnail: defaultThumbnail,
              claimData: itemC,
              key: "".concat(itemC.name, "-").concat(itemC.id)
            }),
            columnD: itemD && _react.default.createElement(_AssetPreview.default, {
              defaultThumbnail: defaultThumbnail,
              claimData: itemD,
              key: "".concat(itemD.name, "-").concat(itemD.id)
            })
          });
        })), _react.default.createElement(_Row.default, null, currentPage > 1 && _react.default.createElement(_ButtonSecondary.default, {
          value: 'Previous Page',
          onClickHandler: this.showPreviousResultsPage
        }), currentPage < totalPages && _react.default.createElement(_ButtonSecondary.default, {
          value: 'Next Page',
          onClickHandler: this.showNextResultsPage
        })));
      } else {
        return _react.default.createElement("p", null, "There are no claims in this channel");
      }
    }
  }]);

  _inherits(ChannelClaimsDisplay, _React$Component);

  return ChannelClaimsDisplay;
}(_react.default.Component);

var _default = ChannelClaimsDisplay;
exports.default = _default;