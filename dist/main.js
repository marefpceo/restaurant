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
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.className = 'items';
    card.className = 'card';
    img.src = _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems[i].image;
    h2.textContent = _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems[i].item;
    p.textContent = _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].menuItems[i].description;
    div.appendChild(img);
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
  description: 'Chickpea',
},
{
  item: 'Veggie Burger',
  image: veggieBurgerImg,
  description: 'Veggie Burger',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0Q7Ozs7QUFJcEM7QUFDQTtBQUNBLGtCQUFrQixJQUFJLG1FQUEwQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsNERBQW1CO0FBQ2pDLHFCQUFxQiw0REFBbUI7QUFDeEMsb0JBQW9CLDREQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQW1CO0FBQ3ZCO0FBQ0EscUJBQXFCLDREQUFtQjtBQUN4Qzs7QUFFQSxpRUFBYyxFQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDNUIxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEVBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3NDO0FBQ1I7OztBQUc5QjtBQUNBO0FBQ0EsSUFBSSxtREFBUTtBQUNaLElBQUksc0RBQWlCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VjdGlvbiB9IGZyb20gJy4vcGFnZWxvYWQnO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL21lbnVJdGVtcyc7XG5cblxuXG5mdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLm1lbnVJdGVtcy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdpdGVtcyc7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgaW1nLnNyYyA9IG1lbnVJdGVtcy5tZW51SXRlbXNbaV0uaW1hZ2U7XG4gICAgaDIudGV4dENvbnRlbnQgPSBtZW51SXRlbXMubWVudUl0ZW1zW2ldLml0ZW07XG4gICAgcC50ZXh0Q29udGVudCA9IG1lbnVJdGVtcy5tZW51SXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChoMik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIHJldHVybiBjb25zb2xlLmxvZyhtZW51SXRlbXMubWVudUl0ZW1zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHR7IG1lbnVMb2FkIH07IiwiY29uc3QgcHVtcGtpblNvdXBJbWcgPSAnL3NyYy9pbWFnZXMvcHVtcGtpbi1zb3VwLXNtLmpwZyc7XG5jb25zdCBjaGlja3BlYVNhbGFkSW1nID0gJy9zcmMvaW1hZ2VzL2NoaWNrcGVhLXNhbGFkLXNtLmpwZyc7XG5jb25zdCB2ZWdnaWVCdXJnZXJJbWcgPSAnL3NyYy9pbWFnZXMvdmVnZ2llLWJ1cmdlci1zbS5qcGcnO1xuXG5jb25zdCBtZW51SXRlbXMgPSBbe1xuICBpdGVtOiAnQ3JlYW15IFJvYXN0ZWQgUHVtcGtpbiBTb3VwJyxcbiAgaW1hZ2U6IHB1bXBraW5Tb3VwSW1nLFxuICBkZXNjcmlwdGlvbjogJ1JvYXN0ZWQgcHVtcGtpbiwgb25pb24sIGdhcmxpYywgd2l0aCBhIGJsZW5kIG9mIHNwaWNlcyB0aGF0IGJyaW5nIG91dCB0aGUgZmFsbCBmbGF2b3JzIG9mIHRoaXMgc2Vhc29uYWwgZGlzaC4gVG9wcGVkIHdpdGggdG9hc3RlZCBncmVlbiBwdW1wa2luIHNlZWRzIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygc291cmRvdWdoIHRvYXN0LicsXG59LFxue1xuICBpdGVtOiAnQ2hpY2twZWEgU2FsYWQnLFxuICBpbWFnZTogY2hpY2twZWFTYWxhZEltZyxcbiAgZGVzY3JpcHRpb246ICdDaGlja3BlYScsXG59LFxue1xuICBpdGVtOiAnVmVnZ2llIEJ1cmdlcicsXG4gIGltYWdlOiB2ZWdnaWVCdXJnZXJJbWcsXG4gIGRlc2NyaXB0aW9uOiAnVmVnZ2llIEJ1cmdlcicsXG59XTtcblxuZXhwb3J0IGRlZmF1bHQgeyBtZW51SXRlbXMgfTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG5mdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gbWVudVtpXTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgcmV0dXJuIHVsO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgY29uc3Qgc2VydmljZU9wdCA9IFsnRGluZSBJbicsICdDYXJyeSBPdXQnLCAnRGVsaXZlcnknXTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VydmljZU9wdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSBzZXJ2aWNlT3B0W2ldO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lclRleHQgPSAnVGhlIFZlZ2dpZSBUYWJsZSc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidWlsZE1lbnUoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgeyBidWlsZE1lbnUsIGJ1aWxkRm9vdGVyLCBsb2FkUGFnZSwgY29udGVudCwgaGVhZGVyLCBzZWN0aW9uIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgZGVmYXVsdEV4cG9ydCBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL3BhZ2Vsb2FkJztcbmltcG9ydCBtZW51TG9hZCBmcm9tICcuL21lbnUnO1xuXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBcbiAgICBsb2FkUGFnZSgpO1xuICAgIG1lbnVMb2FkLm1lbnVMb2FkKCk7XG4gICAgLy8gZGVmYXVsdEV4cG9ydC5sb2FkSG9tZSgpO1xuICAgIHJldHVybiBjb25zb2xlLmxvZygnaW5kZXguanMgdGVzdCcpO1xufVxuXG5jb21wb25lbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=