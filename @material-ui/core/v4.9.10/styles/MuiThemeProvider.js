import React from "https://dev.jspm.io/react@16.13.1";
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";

const { ThemeProvider } = styles;

/**
 * @ignore - internal component.
 *
 * TODO v5: remove
 */

export default function MuiThemeProvider(props) {
  console.error(
    [
      "Material-UI: you have imported a private module.",
      "",
      "Please replace the '@material-ui/core/styles/MuiThemeProvider' import with:",
      "`import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';`",
      "",
      "See https://github.com/mui-org/material-ui/issues/17900 for more detail.",
    ].join("\n"),
  );

  return /*#__PURE__*/ React.createElement(ThemeProvider, props);
}
