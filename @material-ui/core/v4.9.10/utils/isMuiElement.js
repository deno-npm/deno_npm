import React from "https://dev.jspm.io/react@16.13.1";
export default function isMuiElement(element, muiNames) {
  return React.isValidElement(element) &&
    muiNames.indexOf(element.type.muiName) !== -1;
}
