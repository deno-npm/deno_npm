import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import KeyboardArrowLeft from "../internal/svg-icons/KeyboardArrowLeft.js";
import KeyboardArrowRight from "../internal/svg-icons/KeyboardArrowRight.js";
import useTheme from "../styles/useTheme.js";
import IconButton from "../IconButton.js";
/**
 * @ignore - internal component.
 */

var _ref = /*#__PURE__*/ React.createElement(KeyboardArrowRight, null);

var _ref2 = /*#__PURE__*/ React.createElement(KeyboardArrowLeft, null);

var _ref3 = /*#__PURE__*/ React.createElement(KeyboardArrowLeft, null);

var _ref4 = /*#__PURE__*/ React.createElement(KeyboardArrowRight, null);

var TablePaginationActions = React.forwardRef(
  function TablePaginationActions(props, ref) {
    var backIconButtonProps = props.backIconButtonProps,
      count = props.count,
      nextIconButtonProps = props.nextIconButtonProps,
      onChangePage = props.onChangePage,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      other = _objectWithoutProperties(
        props,
        [
          "backIconButtonProps",
          "count",
          "nextIconButtonProps",
          "onChangePage",
          "page",
          "rowsPerPage",
        ],
      );

    var theme = useTheme();

    var handleBackButtonClick = function handleBackButtonClick(event) {
      onChangePage(event, page - 1);
    };

    var handleNextButtonClick = function handleNextButtonClick(event) {
      onChangePage(event, page + 1);
    };

    return /*#__PURE__*/ React.createElement(
      "div",
      _extends({
        ref: ref,
      }, other), /*#__PURE__*/
      React.createElement(
        IconButton,
        _extends({
          onClick: handleBackButtonClick,
          disabled: page === 0,
          color: "inherit",
        }, backIconButtonProps),
        theme.direction === "rtl" ? _ref : _ref2,
      ), /*#__PURE__*/
      React.createElement(
        IconButton,
        _extends({
          onClick: handleNextButtonClick,
          disabled: count !== -1
            ? page >= Math.ceil(count / rowsPerPage) - 1
            : false,
          color: "inherit",
        }, nextIconButtonProps),
        theme.direction === "rtl" ? _ref3 : _ref4,
      ),
    );
  },
);
TablePaginationActions.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) element.
   */
  backIconButtonProps: PropTypes.object,

  /**
   * The total number of rows.
   */
  count: PropTypes.number.isRequired,

  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: PropTypes.object,

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChangePage: PropTypes.func.isRequired,

  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,

  /**
   * The number of rows per page.
   */
  rowsPerPage: PropTypes.number.isRequired,
};
export default TablePaginationActions;
