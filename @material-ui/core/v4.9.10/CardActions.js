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
    alignItems: "center",
    padding: 8,
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8,
    },
  },
};
var CardActions = React.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
    disableSpacing = _props$disableSpacing === void 0
      ? false
      : _props$disableSpacing,
    classes = props.classes,
    className = props.className,
    other = _objectWithoutProperties(
      props,
      ["disableSpacing", "classes", "className"],
    );

  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({
      className: clsx(
        classes.root,
        className,
        !disableSpacing && classes.spacing,
      ),
      ref: ref,
    }, other),
  );
});
CardActions.propTypes = {
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
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,
};
export default withStyles(styles, {
  name: "MuiCardActions",
})(CardActions);
