"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _utils = require("../utils");

var _useSortableData = require("./useSortableData");

var _react = require("react");

var _Datatable = _interopRequireDefault(require("./Datatable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EmployeeList = () => {
  const [keyword, setKeyword] = (0, _react.useState)('');
  const {
    items,
    requestSort,
    sortConfig
  } = (0, _useSortableData.useSortableData)(_utils.dataExample);

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const search = rows => {
    return rows.filter(row => row.firstName.toLowerCase().indexOf(keyword.toLowerCase()) > -1 || row.lastName.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  };

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "HRnet"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "keyword"
  }, "Recherche rapide"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "keyword",
    value: keyword,
    onChange: e => setKeyword(e.target.value)
  }))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('firstName'),
    className: getClassNamesFor('firstName')
  }, "Pr\xE9nom"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('lastName'),
    className: getClassNamesFor('lastName')
  }, "Nom"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('birthDate'),
    className: getClassNamesFor('birthDate')
  }, "Date d'arriv\xE9e"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('startDate'),
    className: getClassNamesFor('startDate')
  }, "Date de d\xE9marrage"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('street'),
    className: getClassNamesFor('street')
  }, "Adresse"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('city'),
    className: getClassNamesFor('city')
  }, "Ville"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('usaState'),
    className: getClassNamesFor('usaState')
  }, "\xC9tat"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('zipcode'),
    className: getClassNamesFor('zipcode')
  }, "Code postale"), /*#__PURE__*/React.createElement("th", {
    onClick: () => requestSort('departmentState'),
    className: getClassNamesFor('departmentState')
  }, "Secteur d'activit\xE9"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(_Datatable.default, {
    items: search(items)
  }))));
};

var _default = EmployeeList;
exports.default = _default;