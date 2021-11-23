"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Datatable = _ref => {
  let {
    items
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, items && items.map((item, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, item.firstName), /*#__PURE__*/React.createElement("td", null, item.lastName), /*#__PURE__*/React.createElement("td", null, item.birthDate), /*#__PURE__*/React.createElement("td", null, item.startDate), /*#__PURE__*/React.createElement("td", null, item.street), /*#__PURE__*/React.createElement("td", null, item.city), /*#__PURE__*/React.createElement("td", null, item.usaState), /*#__PURE__*/React.createElement("td", null, item.zipcode), /*#__PURE__*/React.createElement("td", null, item.departmentState))));
};

var _default = Datatable;
exports.default = _default;