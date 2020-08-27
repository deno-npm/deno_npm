import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: "transparent",
  },
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = React.forwardRef(function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
    invisible = _props$invisible === void 0 ? false : _props$invisible,
    open = props.open,
    other = _objectWithoutProperties(props, ["invisible", "open"]);

  return open
    ? /*#__PURE__*/ React.createElement(
      "div",
      _extends(
        {
          "aria-hidden": true,
          ref: ref,
        },
        other,
        {
          style: _extends(
            {},
            styles.root,
            {},
            invisible ? styles.invisible : {},
            {},
            other.style,
          ),
        },
      ),
    )
    : null;
});
SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: PropTypes.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: PropTypes.bool.isRequired,
};
export default SimpleBackdrop;
