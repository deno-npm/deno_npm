import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
import defaultTheme from "./defaultTheme.js";

const { withStyles: withStylesWithoutDefault } = styles;

function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(
    stylesOrCreator,
    _extends({
      defaultTheme: defaultTheme,
    }, options),
  );
}

export default withStyles;
