import React from "https://dev.jspm.io/react@16.13.1";
/**
 * @ignore - internal component.
 */

var FormControlContext = React.createContext();

FormControlContext.displayName = "FormControlContext";

export function useFormControl() {
  return React.useContext(FormControlContext);
}
export default FormControlContext;
