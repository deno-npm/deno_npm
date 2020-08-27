import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
import defaultTheme from "./defaultTheme.js";

const { withThemeCreator } = styles;

var withTheme = withThemeCreator({
  defaultTheme: defaultTheme,
});
export default withTheme;
