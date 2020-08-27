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
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8,
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0,
  },
};
var List = React.forwardRef(function List(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? "ul" : _props$component,
    _props$dense = props.dense,
    dense = _props$dense === void 0 ? false : _props$dense,
    _props$disablePadding = props.disablePadding,
    disablePadding = _props$disablePadding === void 0
      ? false
      : _props$disablePadding,
    subheader = props.subheader,
    other = _objectWithoutProperties(
      props,
      [
        "children",
        "classes",
        "className",
        "component",
        "dense",
        "disablePadding",
        "subheader",
      ],
    );

  var context = React.useMemo(function () {
    return {
      dense: dense,
    };
  }, [dense]);
  return /*#__PURE__*/ React.createElement(
    ListContext.Provider,
    {
      value: context,
    }, /*#__PURE__*/
    React.createElement(
      Component,
      _extends({
        className: clsx(
          classes.root,
          className,
          dense && classes.dense,
          !disablePadding && classes.padding,
          subheader && classes.subheader,
        ),
        ref: ref,
      }, other),
      subheader,
      children,
    ),
  );
});
List.propTypes = {
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

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: PropTypes.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: PropTypes.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: PropTypes.node,
};
export default withStyles(styles, {
  name: "MuiList",
})(List);
