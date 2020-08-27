import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: "row",
  },
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

var FormGroup = React.forwardRef(function FormGroup(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$row = props.row,
    row = _props$row === void 0 ? false : _props$row,
    other = _objectWithoutProperties(props, ["classes", "className", "row"]);

  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({
      className: clsx(classes.root, className, row && classes.row),
      ref: ref,
    }, other),
  );
});
FormGroup.propTypes = {
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

  /**
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool,
};
export default withStyles(styles, {
  name: "MuiFormGroup",
})(FormGroup);
