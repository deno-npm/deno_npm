import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import ListContext from "./List/ListContext.js";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    minWidth: 56,
    flexShrink: 0,
  },

  /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: {
    marginTop: 8,
  },
};
/**
 * A simple wrapper to apply `List` styles to an `Avatar`.
 */

var ListItemAvatar = React.forwardRef(function ListItemAvatar(props, ref) {
  var classes = props.classes,
    className = props.className,
    other = _objectWithoutProperties(props, ["classes", "className"]);

  var context = React.useContext(ListContext);
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({
      className: clsx(
        classes.root,
        className,
        context.alignItems === "flex-start" && classes.alignItemsFlexStart,
      ),
      ref: ref,
    }, other),
  );
});
ListItemAvatar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component – normally `Avatar`.
   */
  children: PropTypes.element.isRequired,

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
  name: "MuiListItemAvatar",
})(ListItemAvatar);
