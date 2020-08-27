import _extends from "https://cdn.skypack.dev/@babel/runtime/helpers/esm/extends";
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
import defaultTheme from "./defaultTheme.js";

const { styled: styledWithoutDefault } = styles;

var styled = function styled(Component) {
  var componentCreator = styledWithoutDefault(Component);
  return function (style, options) {
    return componentCreator(
      style,
      _extends({
        defaultTheme: defaultTheme,
      }, options),
    );
  };
};

export default styled;
