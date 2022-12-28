/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");


function buildHours() {
  const hours = '7am - 3pm';
  const wHours = '6am - 6pm';
  const day = [`Monday:  ${hours}`,
              `Tuesday:  ${hours}`, 
              `Wednesday:  ${hours}`,
              `Thursday:  ${hours}`,
              `Friday:  ${wHours}`,
              `Saturday:  ${wHours}`,
              `Sunday:  ${wHours}`];
  const ul = document.createElement('ul');

  for (let i = 0; i < day.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = day[i];
    ul.appendChild(li);
  }
  return ul;
}

function loadHome() {
  const logo = document.createElement('img');
  logo.src = '/src/images/logo.svg';
  logo.width = '249';
  logo.height = '169';
  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(logo);

  const p = document.createElement('p');
  p.textContent = 'Farm to table. . . Fresh to dressed!!';

  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(p);
  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(buildHours());

  _pageload__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(_pageload__WEBPACK_IMPORTED_MODULE_0__.section);
  _pageload__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_pageload__WEBPACK_IMPORTED_MODULE_0__.buildFooter)());

  return _pageload__WEBPACK_IMPORTED_MODULE_0__.content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loadHome });


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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");




function component() {
    
    (0,_pageload__WEBPACK_IMPORTED_MODULE_1__.loadPage)();
    _home__WEBPACK_IMPORTED_MODULE_0__["default"].loadHome();
    return console.log('index.js test');
}

component();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDLDJCQUEyQixNQUFNO0FBQ2pDLDZCQUE2QixNQUFNO0FBQ25DLDRCQUE0QixNQUFNO0FBQ2xDLDBCQUEwQixPQUFPO0FBQ2pDLDRCQUE0QixPQUFPO0FBQ25DLDBCQUEwQixPQUFPO0FBQ2pDOztBQUVBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFtQjs7QUFFckI7QUFDQTs7QUFFQSxFQUFFLDBEQUFtQjtBQUNyQixFQUFFLDBEQUFtQjs7QUFFckIsRUFBRSwwREFBbUIsQ0FBQyw4Q0FBTztBQUM3QixFQUFFLDBEQUFtQixDQUFDLHNEQUFXOztBQUVqQyxTQUFTLDhDQUFPO0FBQ2hCOztBQUVBLGlFQUFlLEVBQUUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDRzs7O0FBR3RDO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1osSUFBSSxzREFBc0I7QUFDMUI7QUFDQTs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRGb290ZXIsIGNvbnRlbnQsIHNlY3Rpb24gfSBmcm9tICcuL3BhZ2Vsb2FkJztcblxuZnVuY3Rpb24gYnVpbGRIb3VycygpIHtcbiAgY29uc3QgaG91cnMgPSAnN2FtIC0gM3BtJztcbiAgY29uc3Qgd0hvdXJzID0gJzZhbSAtIDZwbSc7XG4gIGNvbnN0IGRheSA9IFtgTW9uZGF5OiAgJHtob3Vyc31gLFxuICAgICAgICAgICAgICBgVHVlc2RheTogICR7aG91cnN9YCwgXG4gICAgICAgICAgICAgIGBXZWRuZXNkYXk6ICAke2hvdXJzfWAsXG4gICAgICAgICAgICAgIGBUaHVyc2RheTogICR7aG91cnN9YCxcbiAgICAgICAgICAgICAgYEZyaWRheTogICR7d0hvdXJzfWAsXG4gICAgICAgICAgICAgIGBTYXR1cmRheTogICR7d0hvdXJzfWAsXG4gICAgICAgICAgICAgIGBTdW5kYXk6ICAke3dIb3Vyc31gXTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVySFRNTCA9IGRheVtpXTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgcmV0dXJuIHVsO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsb2dvLnNyYyA9ICcvc3JjL2ltYWdlcy9sb2dvLnN2Zyc7XG4gIGxvZ28ud2lkdGggPSAnMjQ5JztcbiAgbG9nby5oZWlnaHQgPSAnMTY5JztcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChsb2dvKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0Zhcm0gdG8gdGFibGUuIC4gLiBGcmVzaCB0byBkcmVzc2VkISEnO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQocCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYnVpbGRIb3VycygpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGxvYWRIb21lIH07XG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG5mdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gbWVudVtpXTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgcmV0dXJuIHVsO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgY29uc3Qgc2VydmljZU9wdCA9IFsnRGluZSBJbicsICdDYXJyeSBPdXQnLCAnRGVsaXZlcnknXTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VydmljZU9wdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSBzZXJ2aWNlT3B0W2ldO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lclRleHQgPSAnVGhlIFZlZ2dpZSBUYWJsZSc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidWlsZE1lbnUoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgYnVpbGRNZW51LCBidWlsZEZvb3RlciwgbG9hZFBhZ2UsIGNvbnRlbnQsIGhlYWRlciwgc2VjdGlvbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRlZmF1bHRFeHBvcnQgZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAnLi9wYWdlbG9hZCc7XG5cblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIFxuICAgIGxvYWRQYWdlKCk7XG4gICAgZGVmYXVsdEV4cG9ydC5sb2FkSG9tZSgpO1xuICAgIHJldHVybiBjb25zb2xlLmxvZygnaW5kZXguanMgdGVzdCcpO1xufVxuXG5jb21wb25lbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=