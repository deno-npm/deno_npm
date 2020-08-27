import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import capitalize from "./utils/capitalize.js";
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: "none",
      fontSize: theme.typography.pxToRem(24),
      width: "1em",
      height: "1em",
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: "hidden",
      flexShrink: 0,
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active,
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main,
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled,
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: "inherit",
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20),
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(36),
    },
  };
};
var Icon = React.forwardRef(function Icon(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? "inherit" : _props$color,
    _props$component = props.component,
    Component = _props$component === void 0 ? "span" : _props$component,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === void 0 ? "default" : _props$fontSize,
    other = _objectWithoutProperties(
      props,
      ["classes", "className", "color", "component", "fontSize"],
    );

  return /*#__PURE__*/ React.createElement(
    Component,
    _extends({
      className: clsx(
        "material-icons",
        classes.root,
        className,
        color !== "inherit" && classes["color".concat(capitalize(color))],
        fontSize !== "default" &&
          classes["fontSize".concat(capitalize(fontSize))],
      ),
      "aria-hidden": true,
      ref: ref,
    }, other),
  );
});
Icon.propTypes = {
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(
    ["inherit", "primary", "secondary", "action", "error", "disabled"],
  ),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(["inherit", "default", "small", "large"]),
};
Icon.muiName = "Icon";
export default withStyles(styles, {
  name: "MuiIcon",
})(Icon);
