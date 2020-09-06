import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import { isFragment } from "https://cdn.skypack.dev/react-is";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import withStyles from "./styles/withStyles.js";
import Popover from "./Popover.js";
import MenuList from "./MenuList.js";
import ReactDOM from "https://cdn.skypack.dev/react-dom@16.13.1";
import setRef from "./utils/setRef.js";
import useTheme from "./styles/useTheme.js";
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right",
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left",
};
export var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: "calc(100% - 96px)",
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: "touch",
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
  },
};
var Menu = React.forwardRef(function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
    children = props.children,
    classes = props.classes,
    _props$disableAutoFoc = props.disableAutoFocusItem,
    disableAutoFocusItem = _props$disableAutoFoc === void 0
      ? false
      : _props$disableAutoFoc,
    _props$MenuListProps = props.MenuListProps,
    MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
    onClose = props.onClose,
    onEntering = props.onEntering,
    open = props.open,
    _props$PaperProps = props.PaperProps,
    PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
    PopoverClasses = props.PopoverClasses,
    _props$transitionDura = props.transitionDuration,
    transitionDuration = _props$transitionDura === void 0
      ? "auto"
      : _props$transitionDura,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "selectedMenu" : _props$variant,
    other = _objectWithoutProperties(
      props,
      [
        "autoFocus",
        "children",
        "classes",
        "disableAutoFocusItem",
        "MenuListProps",
        "onClose",
        "onEntering",
        "open",
        "PaperProps",
        "PopoverClasses",
        "transitionDuration",
        "variant",
      ],
    );

  var theme = useTheme();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = React.useRef(null);
  var contentAnchorRef = React.useRef(null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();

      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  React.Children.map(children, function (child, index) {
    if (!React.isValidElement(child)) {
      return;
    }

    if (isFragment(child)) {
      console.error(
        [
          "Material-UI: the Menu component doesn't accept a Fragment as a child.",
          "Consider providing an array instead.",
        ].join("\n"),
      );
    }

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = React.Children.map(children, function (child, index) {
    if (index === activeItemIndex) {
      return React.cloneElement(child, {
        ref: function ref(instance) {
          // #StrictMode ready
          contentAnchorRef.current = ReactDOM.findDOMNode(instance);
          setRef(child.ref, instance);
        },
      });
    }

    return child;
  });
  return /*#__PURE__*/ React.createElement(
    Popover,
    _extends({
      getContentAnchorEl: getContentAnchorEl,
      classes: PopoverClasses,
      onClose: onClose,
      onEntering: handleEntering,
      anchorOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
      transformOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
      PaperProps: _extends({}, PaperProps, {
        classes: _extends({}, PaperProps.classes, {
          root: classes.paper,
        }),
      }),
      open: open,
      ref: ref,
      transitionDuration: transitionDuration,
    }, other), /*#__PURE__*/
    React.createElement(
      MenuList,
      _extends(
        {
          onKeyDown: handleListKeyDown,
          actions: menuListActionsRef,
          autoFocus: autoFocus &&
            (activeItemIndex === -1 || disableAutoFocusItem),
          autoFocusItem: autoFocusItem,
          variant: variant,
        },
        MenuListProps,
        {
          className: clsx(classes.list, MenuListProps.className),
        },
      ),
      items,
    ),
  );
});
Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: PropTypes
    /* @typescript-to-proptypes-ignore */
    .oneOfType(
      [
        PropTypes.func,
        PropTypes.instanceOf(
          typeof Element === "undefined" ? Object : Element,
        ),
      ],
    ),

  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: PropTypes.bool,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,

  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: PropTypes.bool,

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: PropTypes.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: PropTypes.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: PropTypes.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: PropTypes.func,

  /**
   * If `true`, the menu is visible.
   */
  open: PropTypes.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: PropTypes.object,

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: PropTypes.object,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: PropTypes.oneOfType(
    [
      PropTypes.oneOf(["auto"]),
      PropTypes.number,
      PropTypes.shape({
        appear: PropTypes.number,
        enter: PropTypes.number,
        exit: PropTypes.number,
      }),
    ],
  ),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: PropTypes.oneOf(["menu", "selectedMenu"]),
};
export default withStyles(styles, {
  name: "MuiMenu",
})(Menu);
