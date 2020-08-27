import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
import React from "https://dev.jspm.io/react@16.13.1";
import defaultTheme from "./defaultTheme.js";

const { useTheme: useThemeWithoutDefault } = styles;

export default function useTheme() {
  var theme = useThemeWithoutDefault() || defaultTheme;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useDebugValue(theme);

  return theme;
}
