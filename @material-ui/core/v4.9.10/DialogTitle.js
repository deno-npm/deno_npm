import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import Typography from "./Typography.js";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: "16px 24px",
    flex: "0 0 auto",
  },
};
var DialogTitle = React.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$disableTypogra = props.disableTypography,
    disableTypography = _props$disableTypogra === void 0
      ? false
      : _props$disableTypogra,
    other = _objectWithoutProperties(
      props,
      ["children", "classes", "className", "disableTypography"],
    );

  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({
      className: clsx(classes.root, className),
      ref: ref,
    }, other),
    disableTypography
      ? children
      : /*#__PURE__*/ React.createElement(Typography, {
        component: "h2",
        variant: "h6",
      }, children),
  );
});
DialogTitle.propTypes = {
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
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: PropTypes.bool,
};
export default withStyles(styles, {
  name: "MuiDialogTitle",
})(DialogTitle);
