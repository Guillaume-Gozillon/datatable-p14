"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSortableData = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.sort.js");

var _react = require("react");

const useSortableData = function useSortableData(items) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const [sortConfig, setSortConfig] = (0, _react.useState)(config);
  const sortedItems = (0, _react.useMemo)(() => {
    let sortableItems = [...items];

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }

        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({
      key,
      direction
    });
  };

  return {
    items: sortedItems,
    requestSort,
    sortConfig
  };
};

exports.useSortableData = useSortableData;