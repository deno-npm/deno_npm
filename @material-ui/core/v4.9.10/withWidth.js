import _toConsumableArray from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import { getDisplayName } from "https://cdn.skypack.dev/@material-ui/utils@4.10.2";
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
import hoistNonReactStatics from "https://cdn.skypack.dev/hoist-non-react-statics";
import useTheme from "./styles/useTheme.js";
import { keys as breakpointKeys } from "./styles/createBreakpoints.js";
import useMediaQuery from "./useMediaQuery.js"; // By default, returns true if screen width is the same or greater than the given breakpoint.

const { getThemeProps } = styles;

export var isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined
    ? arguments[2]
    : true;

  if (inclusive) {
    return breakpointKeys.indexOf(breakpoint) <= breakpointKeys.indexOf(width);
  }

  return breakpointKeys.indexOf(breakpoint) < breakpointKeys.indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.

export var isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined
    ? arguments[2]
    : true;

  if (inclusive) {
    return breakpointKeys.indexOf(width) <= breakpointKeys.indexOf(breakpoint);
  }

  return breakpointKeys.indexOf(width) < breakpointKeys.indexOf(breakpoint);
};
var useEnhancedEffect = typeof window === "undefined"
  ? React.useEffect
  : React.useLayoutEffect;

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined
    ? arguments[0]
    : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
      withThemeOption = _options$withTheme === void 0
        ? false
        : _options$withTheme,
      _options$noSSR = options.noSSR,
      noSSR = _options$noSSR === void 0 ? false : _options$noSSR,
      initialWidthOption = options.initialWidth;

    function WithWidth(props) {
      var contextTheme = useTheme();
      var theme = props.theme || contextTheme;

      var _getThemeProps = getThemeProps({
          theme: theme,
          name: "MuiWithWidth",
          props: _extends({}, props),
        }),
        initialWidth = _getThemeProps.initialWidth,
        width = _getThemeProps.width,
        other = _objectWithoutProperties(
          _getThemeProps,
          ["initialWidth", "width"],
        );

      var _React$useState = React.useState(false),
        mountedState = _React$useState[0],
        setMountedState = _React$useState[1];

      useEnhancedEffect(function () {
        setMountedState(true);
      }, []);
      /**
       * innerWidth |xs      sm      md      lg      xl
       *            |-------|-------|-------|-------|------>
       * width      |  xs   |  sm   |  md   |  lg   |  xl
       */

      var keys = _toConsumableArray(theme.breakpoints.keys).reverse();

      var widthComputed = keys.reduce(function (output, key) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null);

      var more = _extends(
        {
          width: width || (mountedState || noSSR ? widthComputed : undefined) ||
            initialWidth || initialWidthOption,
        },
        withThemeOption
          ? {
            theme: theme,
          }
          : {},
        {},
        other,
      ); // When rendering the component on the server,
      // we have no idea about the client browser screen width.
      // In order to prevent blinks and help the reconciliation of the React tree
      // we are not rendering the child component.
      //
      // An alternative is to use the `initialWidth` property.

      if (more.width === undefined) {
        return null;
      }

      return /*#__PURE__*/ React.createElement(Component, more);
    }

    WithWidth.propTypes = {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty component during the first mount.
       * You might want to use an heuristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * https://caniuse.com/#search=client%20hint
       */
      initialWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

      /**
       * @ignore
       */
      theme: PropTypes.object,

      /**
       * Bypass the width calculation logic.
       */
      width: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    };

    WithWidth.displayName = "WithWidth(".concat(getDisplayName(Component), ")");

    hoistNonReactStatics(WithWidth, Component);
    return WithWidth;
  };
};

export default withWidth;
