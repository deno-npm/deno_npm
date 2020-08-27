import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";

/* eslint-disable jsx-a11y/aria-role */
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import KeyboardArrowLeft from "../internal/svg-icons/KeyboardArrowLeft.js";
import KeyboardArrowRight from "../internal/svg-icons/KeyboardArrowRight.js";
import withStyles from "../styles/withStyles.js";
import ButtonBase from "../ButtonBase.js";
export var styles = {
  root: {
    width: 40,
    flexShrink: 0,
  },
  vertical: {
    width: "100%",
    height: 40,
    "& svg": {
      transform: "rotate(90deg)",
    },
  },
};
/**
 * @ignore - internal component.
 */

var _ref = /*#__PURE__*/ React.createElement(KeyboardArrowLeft, {
  fontSize: "small",
});

var _ref2 = /*#__PURE__*/ React.createElement(KeyboardArrowRight, {
  fontSize: "small",
});

var TabScrollButton = React.forwardRef(function TabScrollButton(props, ref) {
  var classes = props.classes,
    classNameProp = props.className,
    direction = props.direction,
    orientation = props.orientation,
    visible = props.visible,
    other = _objectWithoutProperties(
      props,
      ["classes", "className", "direction", "orientation", "visible"],
    );

  var className = clsx(
    classes.root,
    classNameProp,
    orientation === "vertical" && classes.vertical,
  );

  if (!visible) {
    return /*#__PURE__*/ React.createElement("div", {
      className: className,
    });
  }

  return /*#__PURE__*/ React.createElement(
    ButtonBase,
    _extends({
      component: "div",
      className: className,
      ref: ref,
      role: null,
      tabIndex: null,
    }, other),
    direction === "left" ? _ref : _ref2,
  );
});
TabScrollButton.propTypes = {
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
   * Which direction should the button indicate?
   */
  direction: PropTypes.oneOf(["left", "right"]).isRequired,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,

  /**
   * Should the button be present or just consume space.
   */
  visible: PropTypes.bool.isRequired,
};
export default withStyles(styles, {
  name: "PrivateTabScrollButton",
})(TabScrollButton);
