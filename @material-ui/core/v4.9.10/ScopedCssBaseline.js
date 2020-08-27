import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
import { html, body } from "./CssBaseline.js";

const { withStyles } = styles;

export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, html, {}, body(theme), {
      "& *, & *::before, & *::after": {
        boxSizing: "inherit",
      },
      "& strong, & b": {
        fontWeight: theme.typography.fontWeightBold,
      },
    }),
  };
};
var ScopedCssBaseline = React.forwardRef(
  function ScopedCssBaseline(props, ref) {
    var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

    return /*#__PURE__*/ React.createElement(
      "div",
      _extends({
        className: clsx(classes.root, className),
        ref: ref,
      }, other),
    );
  },
);
ScopedCssBaseline.propTypes = {
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
};
export default withStyles(styles, {
  name: "MuiScopedCssBaseline",
})(ScopedCssBaseline);
