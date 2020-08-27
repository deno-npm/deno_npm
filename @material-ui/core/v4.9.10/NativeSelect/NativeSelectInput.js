import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { refType } from "https://cdn.skypack.dev/@material-ui/utils@4.10.2";
import capitalize from "../utils/capitalize.js";
/**
 * @ignore - internal component.
 */

var NativeSelectInput = React.forwardRef(
  function NativeSelectInput(props, ref) {
    var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? "standard" : _props$variant,
      other = _objectWithoutProperties(
        props,
        [
          "classes",
          "className",
          "disabled",
          "IconComponent",
          "inputRef",
          "variant",
        ],
      );

    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null, /*#__PURE__*/
      React.createElement(
        "select",
        _extends({
          className: clsx(
            classes.root, // TODO v5: merge root and select
            classes.select,
            classes[variant],
            className,
            disabled && classes.disabled,
          ),
          disabled: disabled,
          ref: inputRef || ref,
        }, other),
      ),
      props.multiple ? null : /*#__PURE__*/ React.createElement(IconComponent, {
        className: clsx(
          classes.icon,
          classes["icon".concat(capitalize(variant))],
          disabled && classes.disabled,
        ),
      }),
    );
  },
);
NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.elementType.isRequired,

  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType,

  /**
   * @ignore
   */
  multiple: PropTypes.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,

  /**
   * The input value.
   */
  value: PropTypes.any,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),
};
export default NativeSelectInput;
