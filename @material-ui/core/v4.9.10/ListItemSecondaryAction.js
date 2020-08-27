import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
  },
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

var ListItemSecondaryAction = React.forwardRef(
  function ListItemSecondaryAction(props, ref) {
    var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

    return /*#__PURE__*/ React.createElement(
      "div",
      _extends({
        className: clsx(classes.root, className),
        ref: ref,
      }, other),
    );
  },
);
ListItemSecondaryAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally an `IconButton` or selection control.
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
};
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
export default withStyles(styles, {
  name: "MuiListItemSecondaryAction",
})(ListItemSecondaryAction);
