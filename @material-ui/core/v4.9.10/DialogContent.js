import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      // Add iOS momentum scrolling.
      overflowY: "auto",
      padding: "8px 24px",
      "&:first-child": {
        // dialog without title
        paddingTop: 20,
      },
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: "16px 24px",
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider),
    },
  };
};
var DialogContent = React.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$dividers = props.dividers,
    dividers = _props$dividers === void 0 ? false : _props$dividers,
    other = _objectWithoutProperties(
      props,
      ["classes", "className", "dividers"],
    );

  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({
      className: clsx(classes.root, className, dividers && classes.dividers),
      ref: ref,
    }, other),
  );
});
DialogContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Display the top and bottom dividers.
   */
  dividers: PropTypes.bool,
};
export default withStyles(styles, {
  name: "MuiDialogContent",
})(DialogContent);
