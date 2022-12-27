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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildMenu\": () => (/* binding */ buildMenu),\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"loadHomepage\": () => (/* binding */ loadHomepage),\n/* harmony export */   \"section\": () => (/* binding */ section)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst header = document.createElement('header');\nconst section = document.createElement('section');\nconst footer = document.createElement('footer');\n\nfunction buildMenu() {\n  const menu = ['Home', 'Breakfast', 'Lunch'];\n  const ul = document.createElement('ul');\n\n  for (let i = 0; i < menu.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerHTML = menu[i];\n    ul.appendChild(li);\n  }\n  return ul;\n}\n\nfunction buildHours() {\n  const hours = '7am - 3pm';\n  const wHours = '6am - 6pm';\n  const day = [`Monday ${hours}`,\n              `Tuesday ${hours}`, \n              `Wednesday ${hours}`,\n              `Thursday ${hours}`,\n              `Friday ${wHours}`,\n              `Saturday ${wHours}`,\n              `Sunday ${wHours}`];\n  const ul = document.createElement('ul');\n\n  for (let i = 0; i < day.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerHTML = day[i];\n    ul.appendChild(li);\n  }\n  return ul;\n}\n\nfunction buildFooter() {\n  const serviceOpt = ['Dine In', 'Carry Out', 'Delivery'];\n  \n  for (let i = 0; i < serviceOpt.length; i += 1) {\n    const p = document.createElement('p');\n    p.innerHTML = serviceOpt[i];\n    footer.appendChild(p);\n  }\n  return footer;\n}\n\nfunction loadHomepage() {\n  const h1 = document.createElement('h1');\n  h1.innerText = 'The Veggie Table';\n  header.appendChild(h1);\n  header.appendChild(buildMenu());\n\n  const logo = document.createElement('img');\n  logo.src = '/src/images/logo.svg';\n  section.appendChild(logo);\n\n  const p = document.createElement('p');\n  p.textContent = 'Farm to table. . . Fresh to dressed!!';\n  section.appendChild(p);\n  section.appendChild(buildHours());\n\n  content.appendChild(header);\n  content.appendChild(section);\n  content.appendChild(buildFooter());\n  \n  return content;\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\nfunction component() {\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n    return console.log('index.js test');\n}\n\ncomponent();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;