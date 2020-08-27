import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/defineProperty";
import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import Paper from "./Paper.js";
import { emphasize } from "./styles/colorManipulator.js";
export var styles = function styles(theme) {
  var emphasis = theme.palette.type === "light" ? 0.8 : 0.98;
  var backgroundColor = emphasize(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: _extends(
      {},
      theme.typography.body2,
      _defineProperty(
        {
          color: theme.palette.getContrastText(backgroundColor),
          backgroundColor: backgroundColor,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "6px 16px",
          borderRadius: theme.shape.borderRadius,
          flexGrow: 1,
        },
        theme.breakpoints.up("sm"),
        {
          flexGrow: "initial",
          minWidth: 288,
        },
      ),
    ),

    /* Styles applied to the message wrapper element. */
    message: {
      padding: "8px 0",
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      paddingLeft: 16,
      marginRight: -8,
    },
  };
};
var SnackbarContent = React.forwardRef(function SnackbarContent(props, ref) {
  var action = props.action,
    classes = props.classes,
    className = props.className,
    message = props.message,
    _props$role = props.role,
    role = _props$role === void 0 ? "alert" : _props$role,
    other = _objectWithoutProperties(
      props,
      ["action", "classes", "className", "message", "role"],
    );

  return /*#__PURE__*/ React.createElement(
    Paper,
    _extends({
      role: role,
      square: true,
      elevation: 6,
      className: clsx(classes.root, className),
      ref: ref,
    }, other), /*#__PURE__*/
    React.createElement("div", {
      className: classes.message,
    }, message),
    action
      ? /*#__PURE__*/ React.createElement("div", {
        className: classes.action,
      }, action)
      : null,
  );
});
SnackbarContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: PropTypes.node,

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
   * The message to display.
   */
  message: PropTypes.node,

  /**
   * The ARIA role attribute of the element.
   */
  role: PropTypes.string,
};
export default withStyles(styles, {
  name: "MuiSnackbarContent",
})(SnackbarContent);
