import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import ButtonBase from "./ButtonBase.js";
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "block",
      textAlign: "inherit",
      width: "100%",
      "&:hover $focusHighlight": {
        opacity: theme.palette.action.hoverOpacity,
      },
      "&$focusVisible $focusHighlight": {
        opacity: 0.12,
      },
    },

    /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
    focusVisible: {},

    /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
    focusHighlight: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
      opacity: 0,
      backgroundColor: "currentcolor",
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.short,
      }),
    },
  };
};
var CardActionArea = React.forwardRef(function CardActionArea(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    focusVisibleClassName = props.focusVisibleClassName,
    other = _objectWithoutProperties(
      props,
      ["children", "classes", "className", "focusVisibleClassName"],
    );

  return /*#__PURE__*/ React.createElement(
    ButtonBase,
    _extends({
      className: clsx(classes.root, className),
      focusVisibleClassName: clsx(focusVisibleClassName, classes.focusVisible),
      ref: ref,
    }, other),
    children, /*#__PURE__*/
    React.createElement("span", {
      className: classes.focusHighlight,
    }),
  );
});
CardActionArea.propTypes = {
  /**
   * The content of the component.
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
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
};
export default withStyles(styles, {
  name: "MuiCardActionArea",
})(CardActionArea);
