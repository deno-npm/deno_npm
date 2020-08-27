import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10"; // let warnOnce = false;
// To remove in v5

const { createStyles: createStylesOriginal } = styles;

export default function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStylesOriginal(styles);
}
