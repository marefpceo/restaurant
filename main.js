/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");



function menuLoad() {
  
  for (let i = 0; i < _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems.length; i += 1){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const imgDiv = document.createElement('div');
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.className = 'items';
    imgDiv.className = 'image-div';
    card.className = 'card';
    img.src = _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems[i].image;
    h2.textContent = _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems[i].item;
    p.textContent = _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems[i].description;
    imgDiv.appendChild(img);
    div.appendChild(imgDiv);
    card.appendChild(h2);
    card.appendChild(p);
    div.appendChild(card);
    _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(div);
  }
  return console.log(_menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ menuLoad });

/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pumpkinSoupImg = '/src/images/pumpkin-soup-sm.jpg';
const chickpeaSaladImg = '/src/images/chickpea-salad-sm.jpg';
const veggieBurgerImg = '/src/images/veggie-burger-sm.jpg';

const menuItems = [{
  item: 'Creamy Roasted Pumpkin Soup',
  image: pumpkinSoupImg,
  description: 'Roasted pumpkin, onion, garlic, with a blend of spices that bring out the fall flavors of this seasonal dish. Topped with toasted green pumpkin seeds and served with a side of sourdough toast.',
},
{
  item: 'Chickpea Salad',
  image: chickpeaSaladImg,
  description: 'Chickpea salad, loaded with sweet potatoes, baby spinach, dried cranberries, and topped with balsamic vinaigrette.'
},
{
  item: 'Veggie Burger',
  image: veggieBurgerImg,
  description: 'Juicy blackbean patty on a brioche bun, topped with green leaf lettuce, tomotoes, pickles and our signature vegan cheese sauce.',
}];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ menuItems });

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildFooter": () => (/* binding */ buildFooter),
/* harmony export */   "buildMenu": () => (/* binding */ buildMenu),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "section": () => (/* binding */ section)
/* harmony export */ });
const content = document.getElementById('content');
const header = document.createElement('header');
const section = document.createElement('section');
const footer = document.createElement('footer');

function buildMenu() {
  const menu = ['Home', 'Menu', 'Contact'];
  const ul = document.createElement('ul');

  for (let i = 0; i < menu.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = menu[i];
    ul.appendChild(li);
  }
  return ul;
}

function buildFooter() {
  const serviceOpt = ['Dine In', 'Carry Out', 'Delivery'];
  
  for (let i = 0; i < serviceOpt.length; i += 1) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = serviceOpt[i];
    div.appendChild(p);
    footer.appendChild(div);
  }
  return footer;
}

function loadPage() {
  const h1 = document.createElement('h1');
  h1.innerText = 'The Veggie Table';
  header.appendChild(h1);
  header.appendChild(buildMenu());

  content.appendChild(header);

  content.appendChild(section);
  content.appendChild(buildFooter());
  return content;
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
// import defaultExport from './home';




function component() {
    
    (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadPage)();
    _menu__WEBPACK_IMPORTED_MODULE_1__["default"].menuLoad();
    // defaultExport.loadHome();
    return console.log('index.js test');
}

component();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0Q7O0FBRXBDO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxtRUFBMEIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0REFBbUI7QUFDakMscUJBQXFCLDREQUFtQjtBQUN4QyxvQkFBb0IsNERBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFtQjtBQUN2QjtBQUNBLHFCQUFxQiw0REFBbUI7QUFDeEM7O0FBRUEsaUVBQWMsRUFBRSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQzdCMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxFQUFFLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNzQztBQUNSOzs7QUFHOUI7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWixJQUFJLHNEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlY3Rpb24gfSBmcm9tICcuL3BhZ2Vsb2FkJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9tZW51SXRlbXMnO1xuXG5mdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLm1lbnVJdGVtcy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdpdGVtcyc7XG4gICAgaW1nRGl2LmNsYXNzTmFtZSA9ICdpbWFnZS1kaXYnO1xuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIGltZy5zcmMgPSBtZW51SXRlbXMubWVudUl0ZW1zW2ldLmltYWdlO1xuICAgIGgyLnRleHRDb250ZW50ID0gbWVudUl0ZW1zLm1lbnVJdGVtc1tpXS5pdGVtO1xuICAgIHAudGV4dENvbnRlbnQgPSBtZW51SXRlbXMubWVudUl0ZW1zW2ldLmRlc2NyaXB0aW9uO1xuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICByZXR1cm4gY29uc29sZS5sb2cobWVudUl0ZW1zLm1lbnVJdGVtcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0eyBtZW51TG9hZCB9OyIsImNvbnN0IHB1bXBraW5Tb3VwSW1nID0gJy9zcmMvaW1hZ2VzL3B1bXBraW4tc291cC1zbS5qcGcnO1xuY29uc3QgY2hpY2twZWFTYWxhZEltZyA9ICcvc3JjL2ltYWdlcy9jaGlja3BlYS1zYWxhZC1zbS5qcGcnO1xuY29uc3QgdmVnZ2llQnVyZ2VySW1nID0gJy9zcmMvaW1hZ2VzL3ZlZ2dpZS1idXJnZXItc20uanBnJztcblxuY29uc3QgbWVudUl0ZW1zID0gW3tcbiAgaXRlbTogJ0NyZWFteSBSb2FzdGVkIFB1bXBraW4gU291cCcsXG4gIGltYWdlOiBwdW1wa2luU291cEltZyxcbiAgZGVzY3JpcHRpb246ICdSb2FzdGVkIHB1bXBraW4sIG9uaW9uLCBnYXJsaWMsIHdpdGggYSBibGVuZCBvZiBzcGljZXMgdGhhdCBicmluZyBvdXQgdGhlIGZhbGwgZmxhdm9ycyBvZiB0aGlzIHNlYXNvbmFsIGRpc2guIFRvcHBlZCB3aXRoIHRvYXN0ZWQgZ3JlZW4gcHVtcGtpbiBzZWVkcyBhbmQgc2VydmVkIHdpdGggYSBzaWRlIG9mIHNvdXJkb3VnaCB0b2FzdC4nLFxufSxcbntcbiAgaXRlbTogJ0NoaWNrcGVhIFNhbGFkJyxcbiAgaW1hZ2U6IGNoaWNrcGVhU2FsYWRJbWcsXG4gIGRlc2NyaXB0aW9uOiAnQ2hpY2twZWEgc2FsYWQsIGxvYWRlZCB3aXRoIHN3ZWV0IHBvdGF0b2VzLCBiYWJ5IHNwaW5hY2gsIGRyaWVkIGNyYW5iZXJyaWVzLCBhbmQgdG9wcGVkIHdpdGggYmFsc2FtaWMgdmluYWlncmV0dGUuJ1xufSxcbntcbiAgaXRlbTogJ1ZlZ2dpZSBCdXJnZXInLFxuICBpbWFnZTogdmVnZ2llQnVyZ2VySW1nLFxuICBkZXNjcmlwdGlvbjogJ0p1aWN5IGJsYWNrYmVhbiBwYXR0eSBvbiBhIGJyaW9jaGUgYnVuLCB0b3BwZWQgd2l0aCBncmVlbiBsZWFmIGxldHR1Y2UsIHRvbW90b2VzLCBwaWNrbGVzIGFuZCBvdXIgc2lnbmF0dXJlIHZlZ2FuIGNoZWVzZSBzYXVjZS4nLFxufV07XG5cbmV4cG9ydCBkZWZhdWx0IHsgbWVudUl0ZW1zIH07IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICBjb25zdCBtZW51ID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVySFRNTCA9IG1lbnVbaV07XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIHJldHVybiB1bDtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb290ZXIoKSB7XG4gIGNvbnN0IHNlcnZpY2VPcHQgPSBbJ0RpbmUgSW4nLCAnQ2FycnkgT3V0JywgJ0RlbGl2ZXJ5J107XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcnZpY2VPcHQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gc2VydmljZU9wdFtpXTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gJ1RoZSBWZWdnaWUgVGFibGUnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnVpbGRNZW51KCkpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgYnVpbGRNZW51LCBidWlsZEZvb3RlciwgbG9hZFBhZ2UsIGNvbnRlbnQsIGhlYWRlciwgc2VjdGlvbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IGRlZmF1bHRFeHBvcnQgZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAnLi9wYWdlbG9hZCc7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSAnLi9tZW51JztcblxuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgXG4gICAgbG9hZFBhZ2UoKTtcbiAgICBtZW51TG9hZC5tZW51TG9hZCgpO1xuICAgIC8vIGRlZmF1bHRFeHBvcnQubG9hZEhvbWUoKTtcbiAgICByZXR1cm4gY29uc29sZS5sb2coJ2luZGV4LmpzIHRlc3QnKTtcbn1cblxuY29tcG9uZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9