import ownerDocument from "./ownerDocument.js";
export default function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc.defaultView || window;
}
