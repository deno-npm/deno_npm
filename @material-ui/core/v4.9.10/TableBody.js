import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import Tablelvl2Context from "./Table/Tablelvl2Context.js";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: "table-row-group",
  },
};
var tablelvl2 = {
  variant: "body",
};
var defaultComponent = "tbody";
var TableBody = React.forwardRef(function TableBody(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0
      ? defaultComponent
      : _props$component,
    other = _objectWithoutProperties(
      props,
      ["classes", "className", "component"],
    );

  return /*#__PURE__*/ React.createElement(
    Tablelvl2Context.Provider,
    {
      value: tablelvl2,
    }, /*#__PURE__*/
    React.createElement(
      Component,
      _extends({
        className: clsx(classes.root, className),
        ref: ref,
        role: Component === defaultComponent ? null : "rowgroup",
      }, other),
    ),
  );
});
TableBody.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
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
  name: "MuiTableBody",
})(TableBody);
