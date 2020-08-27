import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "../styles/withStyles.js";
import capitalize from "../utils/capitalize.js";
export var styles = function styles(theme) {
  return {
    root: {
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: theme.transitions.create(),
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
    },
    vertical: {
      height: "100%",
      width: 2,
      right: 0,
    },
  };
};
/**
 * @ignore - internal component.
 */

var TabIndicator = React.forwardRef(function TabIndicator(props, ref) {
  var classes = props.classes,
    className = props.className,
    color = props.color,
    orientation = props.orientation,
    other = _objectWithoutProperties(
      props,
      ["classes", "className", "color", "orientation"],
    );

  return /*#__PURE__*/ React.createElement(
    "span",
    _extends({
      className: clsx(
        classes.root,
        classes["color".concat(capitalize(color))],
        className,
        orientation === "vertical" && classes.vertical,
      ),
      ref: ref,
    }, other),
  );
});
TabIndicator.propTypes = {
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
   * @ignore
   * The color of the tab indicator.
   */
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
};
export default withStyles(styles, {
  name: "PrivateTabIndicator",
})(TabIndicator);
