import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import CheckCircle from "./internal/svg-icons/CheckCircle.js";
import Warning from "./internal/svg-icons/Warning.js";
import withStyles from "./styles/withStyles.js";
import SvgIcon from "./SvgIcon.js";
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "block",
      color: theme.palette.text.disabled,
      "&$completed": {
        color: theme.palette.primary.main,
      },
      "&$active": {
        color: theme.palette.primary.main,
      },
      "&$error": {
        color: theme.palette.error.main,
      },
    },

    /* Styles applied to the SVG text element. */
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily,
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
  };
};

var _ref = /*#__PURE__*/ React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "12",
});

var StepIcon = React.forwardRef(function StepIcon(props, ref) {
  var _props$completed = props.completed,
    completed = _props$completed === void 0 ? false : _props$completed,
    icon = props.icon,
    _props$active = props.active,
    active = _props$active === void 0 ? false : _props$active,
    _props$error = props.error,
    error = _props$error === void 0 ? false : _props$error,
    classes = props.classes;

  if (typeof icon === "number" || typeof icon === "string") {
    var className = clsx(
      classes.root,
      active && classes.active,
      error && classes.error,
      completed && classes.completed,
    );

    if (error) {
      return /*#__PURE__*/ React.createElement(Warning, {
        className: className,
        ref: ref,
      });
    }

    if (completed) {
      return /*#__PURE__*/ React.createElement(CheckCircle, {
        className: className,
        ref: ref,
      });
    }

    return /*#__PURE__*/ React.createElement(
      SvgIcon,
      {
        className: className,
        ref: ref,
      },
      _ref, /*#__PURE__*/
      React.createElement("text", {
        className: classes.text,
        x: "12",
        y: "16",
        textAnchor: "middle",
      }, icon),
    );
  }

  return icon;
});
StepIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,

  /**
   * Mark the step as failed.
   */
  error: PropTypes.bool,

  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};
export default withStyles(styles, {
  name: "MuiStepIcon",
})(StepIcon);
