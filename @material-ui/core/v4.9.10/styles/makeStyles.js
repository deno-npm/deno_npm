import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
import defaultTheme from "./defaultTheme.js";

const { makeStyles: makeStylesWithoutDefault } = styles;

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined
    ? arguments[1]
    : {};
  return makeStylesWithoutDefault(
    stylesOrCreator,
    _extends({
      defaultTheme: defaultTheme,
    }, options),
  );
}

export default makeStyles;
