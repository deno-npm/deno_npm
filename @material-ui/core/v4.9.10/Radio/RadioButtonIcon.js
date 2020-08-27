import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import RadioButtonUncheckedIcon from "../internal/svg-icons/RadioButtonUnchecked.js";
import RadioButtonCheckedIcon from "../internal/svg-icons/RadioButtonChecked.js";
import withStyles from "../styles/withStyles.js";
export var styles = function styles(theme) {
  return {
    root: {
      position: "relative",
      display: "flex",
      "&$checked $layer": {
        transform: "scale(1)",
        transition: theme.transitions.create("transform", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest,
        }),
      },
    },
    layer: {
      left: 0,
      position: "absolute",
      transform: "scale(0)",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      }),
    },
    checked: {},
  };
};
/**
 * @ignore - internal component.
 */

function RadioButtonIcon(props) {
  var checked = props.checked,
    classes = props.classes,
    fontSize = props.fontSize;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: clsx(classes.root, checked && classes.checked),
    }, /*#__PURE__*/
    React.createElement(RadioButtonUncheckedIcon, {
      fontSize: fontSize,
    }), /*#__PURE__*/
    React.createElement(RadioButtonCheckedIcon, {
      fontSize: fontSize,
      className: classes.layer,
    }),
  );
}

RadioButtonIcon.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * The size of the radio.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: PropTypes.oneOf(["small", "default"]),
};
export default withStyles(styles, {
  name: "PrivateRadioButtonIcon",
})(RadioButtonIcon);
