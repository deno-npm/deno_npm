import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import { exactProp } from "https://cdn.skypack.dev/@material-ui/utils@4.10.2";
import setRef from "./utils/setRef.js";
import useForkRef from "./utils/useForkRef.js";

function getContainer(container) {
  container = typeof container === "function" ? container() : container; // #StrictMode ready

  return ReactDOM.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== "undefined"
  ? React.useLayoutEffect
  : React.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = React.forwardRef(function Portal(props, ref) {
  var children = props.children,
    container = props.container,
    _props$disablePortal = props.disablePortal,
    disablePortal = _props$disablePortal === void 0
      ? false
      : _props$disablePortal,
    onRendered = props.onRendered;

  var _React$useState = React.useState(null),
    mountNode = _React$useState[0],
    setMountNode = _React$useState[1];

  var handleRef = useForkRef(
    React.isValidElement(children) ? children.ref : null,
    ref,
  );
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function () {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref: handleRef,
      });
    }

    return children;
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
});
Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: PropTypes.node,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes
    /* @typescript-to-proptypes-ignore */
    .oneOfType(
      [
        PropTypes.func,
        PropTypes.instanceOf(React.Component),
        PropTypes.instanceOf(
          typeof Element === "undefined" ? Object : Element,
        ),
      ],
    ),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: PropTypes.bool,

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: PropTypes.func,
};

// eslint-disable-next-line
Portal["propTypes" + ""] = exactProp(Portal.propTypes);

export default Portal;
