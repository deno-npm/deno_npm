import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import React from "https://dev.jspm.io/react@16.13.1";
import PropTypes from "https://cdn.skypack.dev/prop-types@15.7.2";
import withStyles from "./styles/withStyles.js";
import Typography from "./Typography.js";
export var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12,
  },
};
var DialogContentText = React.forwardRef(
  function DialogContentText(props, ref) {
    return /*#__PURE__*/ React.createElement(
      Typography,
      _extends({
        component: "p",
        variant: "body1",
        color: "textSecondary",
        ref: ref,
      }, props),
    );
  },
);
DialogContentText.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles, {
  name: "MuiDialogContentText",
})(DialogContentText);
