import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import debounce from "../utils/debounce.js";
var styles = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
};

/**
 * @ignore - internal component.
 * The component is originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

export default function ScrollbarSize(props) {
  var onChange = props.onChange,
    other = _objectWithoutProperties(props, ["onChange"]);

  var scrollbarHeight = React.useRef();
  var nodeRef = React.useRef(null);

  var setMeasurements = function setMeasurements() {
    scrollbarHeight.current = nodeRef.current.offsetHeight -
      nodeRef.current.clientHeight;
  };

  React.useEffect(function () {
    var handleResize = debounce(function () {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();

      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener("resize", handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  React.useEffect(function () {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({
      style: styles,
      ref: nodeRef,
    }, other),
  );
}
ScrollbarSize.propTypes = {
  onChange: PropTypes.func.isRequired,
};
