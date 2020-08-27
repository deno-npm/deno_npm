import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/defineProperty";
import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import ListItem from "./ListItem.js";
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends(
      {},
      theme.typography.body1,
      _defineProperty(
        {
          minHeight: 48,
          paddingTop: 6,
          paddingBottom: 6,
          boxSizing: "border-box",
          width: "auto",
          overflow: "hidden",
          whiteSpace: "nowrap",
        },
        theme.breakpoints.up("sm"),
        {
          minHeight: "auto",
        },
      ),
    ),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: _extends({}, theme.typography.body2, {
      minHeight: "auto",
    }),
  };
};
var MenuItem = React.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    component = _props$component === void 0 ? "li" : _props$component,
    _props$disableGutters = props.disableGutters,
    disableGutters = _props$disableGutters === void 0
      ? false
      : _props$disableGutters,
    ListItemClasses = props.ListItemClasses,
    _props$role = props.role,
    role = _props$role === void 0 ? "menuitem" : _props$role,
    selected = props.selected,
    tabIndexProp = props.tabIndex,
    other = _objectWithoutProperties(
      props,
      [
        "classes",
        "className",
        "component",
        "disableGutters",
        "ListItemClasses",
        "role",
        "selected",
        "tabIndex",
      ],
    );

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/ React.createElement(
    ListItem,
    _extends({
      button: true,
      role: role,
      tabIndex: tabIndex,
      component: component,
      selected: selected,
      disableGutters: disableGutters,
      classes: _extends({
        dense: classes.dense,
      }, ListItemClasses),
      className: clsx(
        classes.root,
        className,
        selected && classes.selected,
        !disableGutters && classes.gutters,
      ),
      ref: ref,
    }, other),
  );
});
MenuItem.propTypes = {
  /**
   * Menu item contents.
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

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,

  /**
   * @ignore
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * `classes` prop applied to the [`ListItem`](/api/list-item/) element.
   */
  ListItemClasses: PropTypes.object,

  /**
   * @ignore
   */
  role: PropTypes.string,

  /**
   * @ignore
   */
  selected: PropTypes.bool,

  /**
   * @ignore
   */
  tabIndex: PropTypes.number,
};
export default withStyles(styles, {
  name: "MuiMenuItem",
})(MenuItem);
