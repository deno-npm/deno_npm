import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import React from "https://dev.jspm.io/react@16.13.1";
import SvgIcon from "../SvgIcon.js";

/**
 * Private module reserved for @material-ui/x packages.
 */

export default function createSvgIcon(path, displayName) {
  var Component = React.memo(React.forwardRef(function (props, ref) {
    return /*#__PURE__*/ React.createElement(
      SvgIcon,
      _extends({
        ref: ref,
      }, props),
      path,
    );
  }));

  Component.displayName = "".concat(displayName, "Icon");

  Component.muiName = SvgIcon.muiName;
  return Component;
}
