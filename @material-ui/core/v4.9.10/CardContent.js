import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    "&:last-child": {
      paddingBottom: 24,
    },
  },
};
var CardContent = React.forwardRef(function CardContent(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? "div" : _props$component,
    other = _objectWithoutProperties(
      props,
      ["classes", "className", "component"],
    );

  return /*#__PURE__*/ React.createElement(
    Component,
    _extends({
      className: clsx(classes.root, className),
      ref: ref,
    }, other),
  );
});
CardContent.propTypes = {
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
};
export default withStyles(styles, {
  name: "MuiCardContent",
})(CardContent);
