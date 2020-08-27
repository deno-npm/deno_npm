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
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 12,
      // half icon
      padding: "0 0 8px",
    },

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: "absolute",
      top: 8 + 4,
      left: "calc(-50% + 20px)",
      right: "calc(50% + 20px)",
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the line element. */
    line: {
      display: "block",
      borderColor: theme.palette.type === "light"
        ? theme.palette.grey[400]
        : theme.palette.grey[600],
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: "solid",
      borderTopWidth: 1,
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: "solid",
      borderLeftWidth: 1,
      minHeight: 24,
    },
  };
};
var StepConnector = React.forwardRef(function StepConnector(props, ref) {
  var active = props.active,
    _props$alternativeLab = props.alternativeLabel,
    alternativeLabel = _props$alternativeLab === void 0
      ? false
      : _props$alternativeLab,
    classes = props.classes,
    className = props.className,
    completed = props.completed,
    disabled = props.disabled,
    index = props.index,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0
      ? "horizontal"
      : _props$orientation,
    other = _objectWithoutProperties(
      props,
      [
        "active",
        "alternativeLabel",
        "classes",
        "className",
        "completed",
        "disabled",
        "index",
        "orientation",
      ],
    );

  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({
      className: clsx(
        classes.root,
        classes[orientation],
        className,
        alternativeLabel && classes.alternativeLabel,
        active && classes.active,
        completed && classes.completed,
        disabled && classes.disabled,
      ),
      ref: ref,
    }, other), /*#__PURE__*/
    React.createElement("span", {
      className: clsx(
        classes.line,
        {
          "horizontal": classes.lineHorizontal,
          "vertical": classes.lineVertical,
        }[orientation],
      ),
    }),
  );
});
StepConnector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

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
  name: "MuiStepConnector",
})(StepConnector);
