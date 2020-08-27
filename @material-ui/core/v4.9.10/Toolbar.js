import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/defineProperty";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: _defineProperty(
      {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      theme.breakpoints.up("sm"),
      {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    ),

    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48,
    },
  };
};
var Toolbar = React.forwardRef(function Toolbar(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? "div" : _props$component,
    _props$disableGutters = props.disableGutters,
    disableGutters = _props$disableGutters === void 0
      ? false
      : _props$disableGutters,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "regular" : _props$variant,
    other = _objectWithoutProperties(
      props,
      ["classes", "className", "component", "disableGutters", "variant"],
    );

  return /*#__PURE__*/ React.createElement(
    Component,
    _extends({
      className: clsx(
        classes.root,
        classes[variant],
        className,
        !disableGutters && classes.gutters,
      ),
      ref: ref,
    }, other),
  );
});
Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["regular", "dense"]),
};
export default withStyles(styles, {
  name: "MuiToolbar",
})(Toolbar);
