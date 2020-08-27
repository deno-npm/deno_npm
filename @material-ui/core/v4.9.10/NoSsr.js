import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import { exactProp } from "https://cdn.skypack.dev/@material-ui/utils@4.10.2";
var useEnhancedEffect = typeof window !== "undefined"
  ? React.useLayoutEffect
  : React.useEffect;
/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 * - Escape hatch for broken dependencies not supporting SSR.
 * - Improve the time-to-first paint on the client by only rendering above the fold.
 * - Reduce the rendering time on the server.
 * - Under too heavy server load, you can turn on service degradation.
 */

function NoSsr(props) {
  var children = props.children,
    _props$defer = props.defer,
    defer = _props$defer === void 0 ? false : _props$defer,
    _props$fallback = props.fallback,
    fallback = _props$fallback === void 0 ? null : _props$fallback;

  var _React$useState = React.useState(false),
    mountedState = _React$useState[0],
    setMountedState = _React$useState[1];

  useEnhancedEffect(function () {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React.useEffect(function () {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    mountedState ? children : fallback,
  );
}

NoSsr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * You can wrap a node.
   */
  children: PropTypes.node,

  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   */
  defer: PropTypes.bool,

  /**
   * The fallback content to display.
   */
  fallback: PropTypes.node,
};

// eslint-disable-next-line
NoSsr["propTypes" + ""] = exactProp(NoSsr.propTypes);

export default NoSsr;
