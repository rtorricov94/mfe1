// node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs
function applyCssPrefixes(target) {
  for (let key in target) {
    let value = target[key] ?? "";
    switch (key) {
      case "display":
        if (value === "flex") {
          target["display"] = ["-webkit-flex", "flex"];
        } else if (value === "inline-flex") {
          target["display"] = ["-webkit-inline-flex", "inline-flex"];
        } else {
          target["display"] = value;
        }
        break;
      case "align-items":
      case "align-self":
      case "align-content":
      case "flex":
      case "flex-basis":
      case "flex-flow":
      case "flex-grow":
      case "flex-shrink":
      case "flex-wrap":
      case "justify-content":
        target["-webkit-" + key] = value;
        break;
      case "flex-direction":
        target["-webkit-flex-direction"] = value;
        target["flex-direction"] = value;
        break;
      case "order":
        target["order"] = target["-webkit-" + key] = isNaN(+value) ? "0" : value;
        break;
    }
  }
  return target;
}
var INLINE = "inline";
var LAYOUT_VALUES = ["row", "column", "row-reverse", "column-reverse"];
function buildLayoutCSS(value) {
  let [direction, wrap, isInline] = validateValue(value);
  return buildCSS(direction, wrap, isInline);
}
function validateValue(value) {
  value = value?.toLowerCase() ?? "";
  let [direction, wrap, inline] = value.split(" ");
  if (!LAYOUT_VALUES.find(x => x === direction)) {
    direction = LAYOUT_VALUES[0];
  }
  if (wrap === INLINE) {
    wrap = inline !== INLINE ? inline : "";
    inline = INLINE;
  }
  return [direction, validateWrapValue(wrap), !!inline];
}
function isFlowHorizontal(value) {
  let [flow] = validateValue(value);
  return flow.indexOf("row") > -1;
}
function validateWrapValue(value) {
  if (!!value) {
    switch (value.toLowerCase()) {
      case "reverse":
      case "wrap-reverse":
      case "reverse-wrap":
        value = "wrap-reverse";
        break;
      case "no":
      case "none":
      case "nowrap":
        value = "nowrap";
        break;
      default:
        value = "wrap";
        break;
    }
  }
  return value;
}
function buildCSS(direction, wrap = null, inline = false) {
  return {
    display: inline ? "inline-flex" : "flex",
    "box-sizing": "border-box",
    "flex-direction": direction,
    "flex-wrap": wrap || null
  };
}
function extendObject(dest, ...sources) {
  if (dest == null) {
    throw TypeError("Cannot convert undefined or null to object");
  }
  for (let source of sources) {
    if (source != null) {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
  }
  return dest;
}
export { INLINE, LAYOUT_VALUES, applyCssPrefixes, buildLayoutCSS, extendObject, isFlowHorizontal, validateValue, validateWrapValue };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/