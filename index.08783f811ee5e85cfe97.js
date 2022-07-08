/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/_style.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/_style.scss ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Mingzat&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".gui-left {\\n  position: absolute;\\n  background-color: black;\\n  width: 14vw;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n}\\n\\n.gui-left-ctn-center {\\n  height: 70vh;\\n  margin-top: 15vh;\\n  margin-bottom: 15vh;\\n  width: 14vw;\\n  left: 0;\\n  background-color: #34495e;\\n  border-top-right-radius: 6px;\\n  border-bottom-right-radius: 6px;\\n}\\n\\n.gui-left-content {\\n  width: 12vw;\\n  margin-left: 1vw;\\n  margin-right: 1vw;\\n  height: 50vh;\\n  margin-top: 10vh;\\n  margin-bottom: 10vh;\\n  position: absolute;\\n}\\n\\n.brush-container {\\n  background-color: #48627c;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 12vw;\\n  height: 80px;\\n  top: 30%;\\n  border-radius: 8px;\\n}\\n\\n.brush-container:hover {\\n  background-color: #57718b;\\n  cursor: pointer;\\n}\\n\\n#brush-icon {\\n  width: 32px;\\n  cursor: pointer;\\n  margin: 6px;\\n  padding: 6px;\\n  background-color: #7392b1;\\n  border-radius: 4px;\\n}\\n\\n.eraser-container {\\n  background-color: #48627c;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  left: 0;\\n  width: 12vw;\\n  height: 80px;\\n  bottom: 30%;\\n  border-radius: 8px;\\n}\\n\\n.eraser-container:hover {\\n  cursor: pointer;\\n  background-color: #57718b;\\n}\\n\\n#eraser-icon {\\n  width: 32px;\\n  margin: 6px;\\n  cursor: pointer;\\n  padding: 6px;\\n  background-color: #7392b1;\\n  border-radius: 4px;\\n}\\n\\n.gui-right {\\n  position: absolute;\\n  background-color: black;\\n  width: 14vw;\\n  top: 0;\\n  right: 0;\\n  height: 100vh;\\n}\\n.gui-right .gui-right-ctn-center {\\n  border-top-left-radius: 6px;\\n  border-bottom-left-radius: 6px;\\n  height: 70vh;\\n  margin-top: 15vh;\\n  margin-bottom: 15vh;\\n  width: 14vw;\\n  right: 0;\\n  background-color: #34495e;\\n}\\n.gui-right .gui-right-ctn-center .gui-right-content {\\n  position: absolute;\\n  height: 60vh;\\n  margin-top: 5vh;\\n  margin-bottom: 5vh;\\n  width: 12vw;\\n  margin-left: 1vw;\\n  margin-right: 1vw;\\n}\\n\\n.texture-panel-title {\\n  border-radius: 6px;\\n  margin-bottom: 8px;\\n  font-size: 18px;\\n  color: white;\\n}\\n\\n#texture-panel {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#texture-panel #backgroundBlockId {\\n  width: 12vw;\\n  margin-bottom: 4px;\\n  background-color: white;\\n  margin-bottom: 14px;\\n  border: none;\\n  color: black;\\n  border: 1px solid #57718b;\\n  outline: none;\\n}\\n\\n#backgroundBlockId::placeholder {\\n  color: grey;\\n}\\n\\n.texture-selector-container-div {\\n  background-color: #293949;\\n  height: 40vh;\\n  width: 12vw;\\n  overflow-y: auto;\\n}\\n.texture-selector-container-div #texture-selector-container {\\n  margin: 12px 0px 8px 20px;\\n  display: flex;\\n  align-content: flex-start;\\n  flex-wrap: wrap;\\n  flex-direction: row;\\n  row-gap: 4px;\\n  height: 60vh;\\n  gap: 10px;\\n}\\n\\n#texture-tile {\\n  cursor: pointer;\\n  width: 32px;\\n  height: 32px;\\n  margin: 2px;\\n  border: 2px solid #57718b;\\n  border-radius: 6px;\\n}\\n\\n#texture-tile:hover {\\n  border: 2px solid #7591af;\\n  border-radius: 6px;\\n}\\n\\n.reset-container {\\n  width: 12vw;\\n  background-color: #7591af;\\n  border-radius: 6px;\\n  margin-top: 8px;\\n  font-size: 18px;\\n  color: white;\\n}\\n\\n#reset-button {\\n  cursor: pointer;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 12vw;\\n}\\n\\n#save-button {\\n  color: white;\\n  border-radius: 6px;\\n  margin-top: 2vh;\\n  font-size: 18px;\\n  background-color: #7591af;\\n  cursor: pointer;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 12vw;\\n}\\n\\nhtml, body {\\n  color-scheme: dark;\\n  width: 100%;\\n  height: 100%;\\n  margin: 0 !important;\\n  padding: 0 !important;\\n  background-color: black;\\n  color: lightblue;\\n  font-family: \\\"Mingzat\\\", sans-serif !important;\\n}\\n\\n.main-ctn {\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#canvas {\\n  background-color: #48627c;\\n}\\n\\n.utils-div {\\n  height: 70vh;\\n}\\n\\n#map-id {\\n  visibility: hidden;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  width: 70vw;\\n  top: 0;\\n  margin-top: 2vh;\\n  font-size: 18px;\\n  color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://map-editor/./src/_style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://map-editor/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://map-editor/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/_style.scss":
/*!*************************!*\
  !*** ./src/_style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./_style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/_style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://map-editor/./src/_style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://map-editor/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://map-editor/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://map-editor/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://map-editor/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://map-editor/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://map-editor/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Atlas.ts":
/*!**********************!*\
  !*** ./src/Atlas.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * For creating texture collection\r\n */\r\nvar Atlas = /** @class */ (function () {\r\n    /**\r\n     * Creates texture atlas from given image url\r\n     * @param _url\r\n     */\r\n    function Atlas(_url) {\r\n        this.width = 3200;\r\n        this.blockWidth = 32;\r\n        this.blocksPerRow = 3200 / 32;\r\n        this.blockId = [];\r\n        this.texturesImage = new Image(this.width, this.width);\r\n        this.texturesImage.src = _url;\r\n        this.cropForBlocks();\r\n    }\r\n    /**\r\n     * Returns block width on atlas image\r\n     */\r\n    Atlas.prototype.getBlockWidth = function () {\r\n        return this.blockWidth;\r\n    };\r\n    /**\r\n     * Returns Promise for image load\r\n     */\r\n    Atlas.prototype.loadImage = function () {\r\n        var _this = this;\r\n        return new Promise(function (resolve, reject) {\r\n            _this.texturesImage.onload = function () { return resolve(_this.texturesImage); };\r\n            _this.texturesImage.onerror = function () { return reject(\"Not loaded\"); };\r\n        });\r\n    };\r\n    /**\r\n     * Maps block id to coordinates on texturesImage (sx, sy).\r\n     */\r\n    Atlas.prototype.cropForBlocks = function () {\r\n        this.blockId[0] = [-this.blockWidth, -this.blockWidth]; // id = 0 is empty (air block) \r\n        for (var i = 0; i < Math.pow((this.blocksPerRow), 2); i++) {\r\n            var j = Math.floor(i / this.blocksPerRow) * this.blocksPerRow;\r\n            this.blockId[i + 1] = [(i - j) * this.blockWidth, j * this.blockWidth];\r\n        }\r\n    };\r\n    /**\r\n     * Returns sx and sy of block with given id\r\n     * @param _id id of choosed block\r\n     * @returns tuple where 0 index is sx of block and index 1 is sy of block\r\n     */\r\n    Atlas.prototype.getBlockCoords = function (_id) {\r\n        return this.blockId[_id];\r\n    };\r\n    /**\r\n     * Returns image with every texture from atlas (texture atlas)\r\n     * @returns image with texture atlas\r\n     */\r\n    Atlas.prototype.getTexturesImage = function () {\r\n        return this.texturesImage;\r\n    };\r\n    return Atlas;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Atlas);\r\n\n\n//# sourceURL=webpack://map-editor/./src/Atlas.ts?");

/***/ }),

/***/ "./src/BackgroundLayer.ts":
/*!********************************!*\
  !*** ./src/BackgroundLayer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ \"./src/Layer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar BackgroundLayer = /** @class */ (function (_super) {\r\n    __extends(BackgroundLayer, _super);\r\n    function BackgroundLayer(_atlas) {\r\n        var _this = _super.call(this) || this;\r\n        _this.atlas = _atlas;\r\n        _this.drawTiles();\r\n        return _this;\r\n    }\r\n    BackgroundLayer.prototype.drawTiles = function () {\r\n        this.ctx.fillStyle = \"#34495e\";\r\n        var nRow = 32;\r\n        var nCol = 32;\r\n        var width = 24;\r\n        var height = 24;\r\n        for (var i = 0; i < nRow; ++i) {\r\n            for (var j = 0, col = nCol / 2; j < col; ++j) {\r\n                this.ctx.fillRect(2 * j * width + (i % 2 ? 0 : width), i * height, width, height);\r\n            }\r\n        }\r\n    };\r\n    BackgroundLayer.prototype.drawBackgorund = function (_id) {\r\n        var _a;\r\n        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, 720, 720);\r\n        var nRow = 32;\r\n        var nCol = 32;\r\n        var width = 24;\r\n        var height = 24;\r\n        for (var i = 0; i < nRow; i++) {\r\n            for (var j = 0; j < nCol; j++) {\r\n                this.drawBlock(_id, i, j);\r\n            }\r\n        }\r\n    };\r\n    BackgroundLayer.prototype.drawBlock = function (_id, _x, _y) {\r\n        var _a = this.atlas.getBlockCoords(_id), sx = _a[0], sy = _a[1];\r\n        this.ctx.drawImage(this.atlas.getTexturesImage(), sx, sy, this.atlas.getBlockWidth(), this.atlas.getBlockWidth(), _x * 24, _y * 24, 24, 24);\r\n    };\r\n    return BackgroundLayer;\r\n}(_Layer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundLayer);\r\n\n\n//# sourceURL=webpack://map-editor/./src/BackgroundLayer.ts?");

/***/ }),

/***/ "./src/Block.ts":
/*!**********************!*\
  !*** ./src/Block.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Block = /** @class */ (function () {\r\n    function Block(_id, _x, _y) {\r\n        this.id = _id;\r\n        this.x = _x;\r\n        this.y = _y;\r\n    }\r\n    Block.prototype.getId = function () {\r\n        return this.id;\r\n    };\r\n    Block.prototype.getPosition = function () {\r\n        return [this.x, this.y];\r\n    };\r\n    return Block;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);\r\n\n\n//# sourceURL=webpack://map-editor/./src/Block.ts?");

/***/ }),

/***/ "./src/DrawingLayer.ts":
/*!*****************************!*\
  !*** ./src/DrawingLayer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ \"./src/Layer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar DrawingLayer = /** @class */ (function (_super) {\r\n    __extends(DrawingLayer, _super);\r\n    function DrawingLayer(_atlas) {\r\n        var _this = _super.call(this) || this;\r\n        _this.selectedBrush = 1;\r\n        _this.atlas = _atlas;\r\n        return _this;\r\n    }\r\n    DrawingLayer.prototype.changeBrush = function (_id) {\r\n        this.selectedBrush = _id;\r\n    };\r\n    DrawingLayer.prototype.drawBlock = function (_id, _x, _y) {\r\n        var _a = this.atlas.getBlockCoords(_id), sx = _a[0], sy = _a[1];\r\n        this.ctx.drawImage(this.atlas.getTexturesImage(), sx, sy, this.atlas.getBlockWidth(), this.atlas.getBlockWidth(), _x * 24, _y * 24, 24, 24);\r\n    };\r\n    DrawingLayer.prototype.eraseBlock = function (_x, _y) {\r\n        this.ctx.clearRect(_x * 24, _y * 24, 24, 24);\r\n    };\r\n    return DrawingLayer;\r\n}(_Layer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawingLayer);\r\n\n\n//# sourceURL=webpack://map-editor/./src/DrawingLayer.ts?");

/***/ }),

/***/ "./src/Layer.ts":
/*!**********************!*\
  !*** ./src/Layer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Layer = /** @class */ (function () {\r\n    function Layer() {\r\n        this.tileSize = 32;\r\n        this.createLayer();\r\n    }\r\n    Layer.prototype.getCtx = function () {\r\n        return this.ctx;\r\n    };\r\n    Layer.prototype.getCanvas = function () {\r\n        return this.canvas;\r\n    };\r\n    Layer.prototype.clear = function () {\r\n        var _a;\r\n        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, 720, 720);\r\n    };\r\n    Layer.prototype.createLayer = function () {\r\n        var canvas = document.createElement('canvas');\r\n        canvas.width = 720;\r\n        canvas.height = 720;\r\n        var ctx = canvas.getContext('2d');\r\n        this.canvas = canvas;\r\n        this.ctx = ctx;\r\n    };\r\n    return Layer;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layer);\r\n\n\n//# sourceURL=webpack://map-editor/./src/Layer.ts?");

/***/ }),

/***/ "./src/MouseEvents.ts":
/*!****************************!*\
  !*** ./src/MouseEvents.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.ts\");\n/* harmony import */ var _MousePos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MousePos */ \"./src/MousePos.ts\");\n\r\n\r\nvar MouseEvents = /** @class */ (function () {\r\n    function MouseEvents(_mouseLayer) {\r\n        this.canvas = document.getElementById('canvas');\r\n        this.mouseLayer = _mouseLayer;\r\n    }\r\n    MouseEvents.prototype.changeCursor = function () {\r\n        var _this = this;\r\n        this.mouseLayer.getCtx().fillStyle = \"rgba(0,0,0,0.4)\";\r\n        document.addEventListener(\"mousemove\", function (event) {\r\n            var mousePosition = (0,_MousePos__WEBPACK_IMPORTED_MODULE_1__.getMousePos)(event, _this.canvas);\r\n            _this.mouseLayer.clear();\r\n            _this.mouseLayer.getCtx().fillRect(mousePosition.x * 24, mousePosition.y * 24, 24, 24);\r\n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateLayers)();\r\n        });\r\n    };\r\n    return MouseEvents;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MouseEvents);\r\n\n\n//# sourceURL=webpack://map-editor/./src/MouseEvents.ts?");

/***/ }),

/***/ "./src/MouseLayer.ts":
/*!***************************!*\
  !*** ./src/MouseLayer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ \"./src/Layer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar MouseLayer = /** @class */ (function (_super) {\r\n    __extends(MouseLayer, _super);\r\n    // domCanvas:HTMLCanvasElement\r\n    function MouseLayer() {\r\n        return _super.call(this) || this;\r\n    }\r\n    return MouseLayer;\r\n}(_Layer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MouseLayer);\r\n\n\n//# sourceURL=webpack://map-editor/./src/MouseLayer.ts?");

/***/ }),

/***/ "./src/MousePos.ts":
/*!*************************!*\
  !*** ./src/MousePos.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMousePos\": () => (/* binding */ getMousePos)\n/* harmony export */ });\nfunction getMousePos(event, canvas) {\r\n    var rect = canvas.getBoundingClientRect();\r\n    return {\r\n        x: Math.round((event.clientX - rect.left) / 24),\r\n        y: Math.round((event.clientY - rect.top) / 24)\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://map-editor/./src/MousePos.ts?");

/***/ }),

/***/ "./src/ToggleBrush.ts":
/*!****************************!*\
  !*** ./src/ToggleBrush.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeBrush\": () => (/* binding */ changeBrush),\n/* harmony export */   \"getBrush\": () => (/* binding */ getBrush)\n/* harmony export */ });\nvar selectedBrush = 1;\r\nfunction changeBrush(_id) {\r\n    selectedBrush = _id;\r\n}\r\nfunction getBrush() {\r\n    return selectedBrush;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://map-editor/./src/ToggleBrush.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateLayers\": () => (/* binding */ updateLayers)\n/* harmony export */ });\n/* harmony import */ var _BackgroundLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundLayer */ \"./src/BackgroundLayer.ts\");\n/* harmony import */ var _DrawingLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawingLayer */ \"./src/DrawingLayer.ts\");\n/* harmony import */ var _MouseLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MouseLayer */ \"./src/MouseLayer.ts\");\n/* harmony import */ var _MousePos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MousePos */ \"./src/MousePos.ts\");\n/* harmony import */ var _ToggleBrush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToggleBrush */ \"./src/ToggleBrush.ts\");\n/* harmony import */ var _Atlas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Atlas */ \"./src/Atlas.ts\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_style.scss */ \"./src/_style.scss\");\n/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Block */ \"./src/Block.ts\");\n/* harmony import */ var _MouseEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MouseEvents */ \"./src/MouseEvents.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar mouseDown = false;\r\nvar brushElement = document.getElementById('brush-icon');\r\nvar eraserElement = document.getElementById('eraser-icon');\r\nvar canvas = document.getElementById('canvas');\r\nvar ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\r\nvar backgroundBlockIdInput = document.getElementById('backgroundBlockId');\r\nvar saveBtn = document.getElementById('save-button');\r\nvar resetBtn = document.getElementById('reset-button');\r\ncanvas.height = 720;\r\ncanvas.width = 720;\r\nvar backgroundLayer;\r\nvar mouseLayer;\r\nvar drawingLayer;\r\nvar mouseEvents;\r\nvar atlas;\r\n// let selectedBrush:number = 1\r\nvar selectedBlockId = 1;\r\nvar blocksPlaced = [];\r\nvar backgroundBlockId = 0;\r\nvar stuctures;\r\n// let interactions = []\r\n// const atlasUrl = \"http://192.168.8.101:4444/getatlas\"\r\nvar serverUrl = \"http://squ3-server.herokuapp.com\";\r\nvar atlasUrl = serverUrl + \"/getatlas\";\r\nfunction updateLayers() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    ctx.drawImage(backgroundLayer.getCanvas(), 0, 0);\r\n    ctx.drawImage(drawingLayer.getCanvas(), 0, 0);\r\n    ctx.drawImage(mouseLayer.getCanvas(), 0, 0);\r\n}\r\nstart();\r\nfunction start() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    atlas = new _Atlas__WEBPACK_IMPORTED_MODULE_5__[\"default\"](atlasUrl);\r\n                    backgroundLayer = new _BackgroundLayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](atlas);\r\n                    mouseLayer = new _MouseLayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n                    mouseEvents = new _MouseEvents__WEBPACK_IMPORTED_MODULE_8__[\"default\"](mouseLayer);\r\n                    return [4 /*yield*/, atlas.loadImage()];\r\n                case 1:\r\n                    _a.sent();\r\n                    console.log(\"Textures loaded!\");\r\n                    drawingLayer = new _DrawingLayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](atlas);\r\n                    updateLayers();\r\n                    createTextureSelector();\r\n                    mouseEvents.changeCursor();\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nbrushElement.addEventListener(\"click\", function () {\r\n    (0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.changeBrush)(1);\r\n    console.log(\"brush changed to \".concat((0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.getBrush)()));\r\n});\r\neraserElement.addEventListener(\"click\", function () {\r\n    (0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.changeBrush)(0);\r\n    console.log(\"brush changed to \".concat((0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.getBrush)()));\r\n});\r\nbackgroundBlockIdInput.addEventListener(\"keyup\", function (e) {\r\n    var id = parseInt(this.value);\r\n    if (id && id < 10000) {\r\n        backgroundLayer.drawBackgorund(id);\r\n        backgroundBlockId = id;\r\n        updateLayers();\r\n    }\r\n});\r\nfunction createTextureSelector() {\r\n    var _a;\r\n    var url = atlasUrl;\r\n    for (var i = 1; i < 100; i++) {\r\n        var createdTile = createTile(i, url);\r\n        (_a = document.getElementById(\"texture-selector-container\")) === null || _a === void 0 ? void 0 : _a.append(createdTile);\r\n    }\r\n}\r\nfunction calcutePositionInArray(x, y) {\r\n    return x + y * 30;\r\n}\r\nfunction createMapObject() {\r\n    var mapObj = { backgroundBlock: backgroundBlockId, structures: [], interactions: [] };\r\n    var mapAfter = { backgroundBlockId: 0, mapString: \"\", collisionString: \"\", interactions: [] };\r\n    blocksPlaced.forEach(function (block) {\r\n        var _a = block.getPosition(), x = _a[0], y = _a[1];\r\n        var id = block.getId();\r\n        mapObj.structures.push({ id: id, x: x, y: y, c: false });\r\n    });\r\n    var len = 900;\r\n    var mapArray = [];\r\n    var collisionArray = [];\r\n    for (var i = 0; i < len; i++) {\r\n        mapArray[i] = \"x\";\r\n        collisionArray[i] = \"0\";\r\n    }\r\n    mapObj.structures.forEach(function (structure) {\r\n        var position = calcutePositionInArray(structure.x, structure.y);\r\n        mapArray[position] = structure.id.toString();\r\n        if (structure.c)\r\n            collisionArray[position] = \"1\";\r\n    });\r\n    mapAfter[\"backgroundBlockId\"] = mapObj.backgroundBlock;\r\n    mapAfter[\"mapString\"] = mapArray.toString().replace(/,/g, ';');\r\n    mapAfter[\"collisionString\"] = collisionArray.toString().replace(/,/g, '');\r\n    mapAfter[\"interactions\"] = mapObj.interactions;\r\n    return mapAfter;\r\n}\r\nfunction createTile(_id, _url) {\r\n    var tile = document.createElement('div');\r\n    tile.addEventListener(\"click\", function (e) {\r\n        selectedBlockId = _id;\r\n    });\r\n    tile.id = \"texture-tile\";\r\n    var _a = atlas.getBlockCoords(_id), sx = _a[0], sy = _a[1];\r\n    tile.style.setProperty('background', \"url(\".concat(_url, \") -\").concat(sx, \"px -\").concat(sy, \"px\"));\r\n    return tile;\r\n}\r\n// function changeCursor(): void{\r\n//     mouseLayer.getCtx().fillStyle = \"rgba(0,0,0,0.4)\"\r\n//     document.addEventListener(\"mousemove\", (event:MouseEvent) => {\r\n//         let mousePosition = getMousePos(event,canvas);\r\n//         mouseLayer.clear()\r\n//         mouseLayer.getCtx().fillRect(mousePosition.x*24,mousePosition.y*24,24,24)\r\n//         updateLayers()\r\n//     })\r\n// }\r\nresetBtn.addEventListener(\"click\", function (e) {\r\n    drawingLayer.clear();\r\n    blocksPlaced = [];\r\n    updateLayers();\r\n});\r\nsaveBtn.addEventListener(\"click\", function (e) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var map, json, response, responseJson, mapIdP;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                map = createMapObject();\r\n                return [4 /*yield*/, JSON.stringify({ map: map })];\r\n            case 1:\r\n                json = _a.sent();\r\n                return [4 /*yield*/, fetch(serverUrl + \"/addmap\", {\r\n                        method: \"POST\",\r\n                        mode: \"cors\",\r\n                        headers: {\r\n                            \"Content-Type\": \"application/json\"\r\n                        },\r\n                        body: json\r\n                    })];\r\n            case 2:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 3:\r\n                responseJson = _a.sent();\r\n                mapIdP = document.getElementById('map-id');\r\n                mapIdP.innerText = serverUrl + '/map?game=' + responseJson.id;\r\n                mapIdP.style.visibility = \"visible\";\r\n                console.log(responseJson);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\ncanvas.addEventListener(\"mousedown\", function (event) {\r\n    var _a = (0,_MousePos__WEBPACK_IMPORTED_MODULE_3__.getMousePos)(event, canvas), x = _a.x, y = _a.y;\r\n    mouseDown = true;\r\n    if ((0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.getBrush)() === 0) {\r\n        drawingLayer.eraseBlock(x, y);\r\n        var blockToEraseIndex = blocksPlaced.findIndex(function (block) { return block.getPosition()[0] === x && block.getPosition()[1] === y; });\r\n        if (blockToEraseIndex !== -1) {\r\n            blocksPlaced.splice(blockToEraseIndex, 1);\r\n        }\r\n        updateLayers();\r\n        return;\r\n    }\r\n    console.log(blocksPlaced.length);\r\n    var findBlock = blocksPlaced.find(function (block) { return block.getPosition()[0] === x && block.getPosition()[1] === y; });\r\n    if (findBlock) {\r\n        return;\r\n    }\r\n    if ((0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.getBrush)() === 1) {\r\n        drawingLayer.drawBlock(selectedBlockId, x, y);\r\n        blocksPlaced.push(new _Block__WEBPACK_IMPORTED_MODULE_7__[\"default\"](selectedBlockId, x, y));\r\n        updateLayers();\r\n    }\r\n});\r\ncanvas.addEventListener(\"mousemove\", function (event) {\r\n    if (mouseDown == true) {\r\n        if ((0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.getBrush)() === 0) {\r\n            var _a = (0,_MousePos__WEBPACK_IMPORTED_MODULE_3__.getMousePos)(event, canvas), x_1 = _a.x, y_1 = _a.y;\r\n            console.log('erasing');\r\n            drawingLayer.eraseBlock(x_1, y_1);\r\n            var blockToEraseIndex = blocksPlaced.findIndex(function (block) { return block.getPosition()[0] === x_1 && block.getPosition()[1] === y_1; });\r\n            if (blockToEraseIndex !== -1) {\r\n                blocksPlaced.splice(blockToEraseIndex, 1);\r\n            }\r\n            updateLayers();\r\n        }\r\n        if ((0,_ToggleBrush__WEBPACK_IMPORTED_MODULE_4__.getBrush)() === 1) {\r\n            var _b = (0,_MousePos__WEBPACK_IMPORTED_MODULE_3__.getMousePos)(event, canvas), x_2 = _b.x, y_2 = _b.y;\r\n            var findBlock = blocksPlaced.find(function (block) { return block.getPosition()[0] === x_2 && block.getPosition()[1] === y_2; });\r\n            if (findBlock)\r\n                return;\r\n            drawingLayer.drawBlock(selectedBlockId, x_2, y_2);\r\n            blocksPlaced.push(new _Block__WEBPACK_IMPORTED_MODULE_7__[\"default\"](selectedBlockId, x_2, y_2));\r\n            updateLayers();\r\n        }\r\n    }\r\n});\r\ndocument.addEventListener(\"mouseup\", function (event) {\r\n    mouseDown = false;\r\n});\r\n\r\n\n\n//# sourceURL=webpack://map-editor/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;