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
  const activeTab = document.getElementById('Menu');
  activeTab.id = 'current';
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
    li.id = menu[i];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0Q7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLG1FQUEwQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDREQUFtQjtBQUNqQyxxQkFBcUIsNERBQW1CO0FBQ3hDLG9CQUFvQiw0REFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQW1CO0FBQ3ZCO0FBQ0EscUJBQXFCLDREQUFtQjtBQUN4Qzs7QUFFQSxpRUFBZSxFQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDOUIzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEVBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDc0M7QUFDUjs7O0FBRzlCO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1osSUFBSSxzREFBaUI7QUFDckI7QUFDQTtBQUNBOztBQUVBLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZWN0aW9uIH0gZnJvbSAnLi9wYWdlbG9hZCc7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vbWVudUl0ZW1zJztcblxuZnVuY3Rpb24gbWVudUxvYWQoKSB7XG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNZW51Jyk7XG4gIGFjdGl2ZVRhYi5pZCA9ICdjdXJyZW50JztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubWVudUl0ZW1zLmxlbmd0aDsgaSArPSAxKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBkaXYuY2xhc3NOYW1lID0gJ2l0ZW1zJztcbiAgICBpbWdEaXYuY2xhc3NOYW1lID0gJ2ltYWdlLWRpdic7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgaW1nLnNyYyA9IG1lbnVJdGVtcy5tZW51SXRlbXNbaV0uaW1hZ2U7XG4gICAgaDIudGV4dENvbnRlbnQgPSBtZW51SXRlbXMubWVudUl0ZW1zW2ldLml0ZW07XG4gICAgcC50ZXh0Q29udGVudCA9IG1lbnVJdGVtcy5tZW51SXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChoMik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIHJldHVybiBjb25zb2xlLmxvZyhtZW51SXRlbXMubWVudUl0ZW1zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBtZW51TG9hZCB9OyIsImNvbnN0IHB1bXBraW5Tb3VwSW1nID0gJy9zcmMvaW1hZ2VzL3B1bXBraW4tc291cC1zbS5qcGcnO1xuY29uc3QgY2hpY2twZWFTYWxhZEltZyA9ICcvc3JjL2ltYWdlcy9jaGlja3BlYS1zYWxhZC1zbS5qcGcnO1xuY29uc3QgdmVnZ2llQnVyZ2VySW1nID0gJy9zcmMvaW1hZ2VzL3ZlZ2dpZS1idXJnZXItc20uanBnJztcblxuY29uc3QgbWVudUl0ZW1zID0gW3tcbiAgaXRlbTogJ0NyZWFteSBSb2FzdGVkIFB1bXBraW4gU291cCcsXG4gIGltYWdlOiBwdW1wa2luU291cEltZyxcbiAgZGVzY3JpcHRpb246ICdSb2FzdGVkIHB1bXBraW4sIG9uaW9uLCBnYXJsaWMsIHdpdGggYSBibGVuZCBvZiBzcGljZXMgdGhhdCBicmluZyBvdXQgdGhlIGZhbGwgZmxhdm9ycyBvZiB0aGlzIHNlYXNvbmFsIGRpc2guIFRvcHBlZCB3aXRoIHRvYXN0ZWQgZ3JlZW4gcHVtcGtpbiBzZWVkcyBhbmQgc2VydmVkIHdpdGggYSBzaWRlIG9mIHNvdXJkb3VnaCB0b2FzdC4nLFxufSxcbntcbiAgaXRlbTogJ0NoaWNrcGVhIFNhbGFkJyxcbiAgaW1hZ2U6IGNoaWNrcGVhU2FsYWRJbWcsXG4gIGRlc2NyaXB0aW9uOiAnQ2hpY2twZWEgc2FsYWQsIGxvYWRlZCB3aXRoIHN3ZWV0IHBvdGF0b2VzLCBiYWJ5IHNwaW5hY2gsIGRyaWVkIGNyYW5iZXJyaWVzLCBhbmQgdG9wcGVkIHdpdGggYmFsc2FtaWMgdmluYWlncmV0dGUuJ1xufSxcbntcbiAgaXRlbTogJ1ZlZ2dpZSBCdXJnZXInLFxuICBpbWFnZTogdmVnZ2llQnVyZ2VySW1nLFxuICBkZXNjcmlwdGlvbjogJ0p1aWN5IGJsYWNrYmVhbiBwYXR0eSBvbiBhIGJyaW9jaGUgYnVuLCB0b3BwZWQgd2l0aCBncmVlbiBsZWFmIGxldHR1Y2UsIHRvbW90b2VzLCBwaWNrbGVzIGFuZCBvdXIgc2lnbmF0dXJlIHZlZ2FuIGNoZWVzZSBzYXVjZS4nLFxufV07XG5cbmV4cG9ydCBkZWZhdWx0IHsgbWVudUl0ZW1zIH07IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICBjb25zdCBtZW51ID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlkID0gbWVudVtpXTtcbiAgICBsaS5pbm5lckhUTUwgPSBtZW51W2ldO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICBjb25zdCBzZXJ2aWNlT3B0ID0gWydEaW5lIEluJywgJ0NhcnJ5IE91dCcsICdEZWxpdmVyeSddO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlT3B0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9IHNlcnZpY2VPcHRbaV07XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9ICdUaGUgVmVnZ2llIFRhYmxlJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1aWxkTWVudSgpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IGJ1aWxkTWVudSwgYnVpbGRGb290ZXIsIGxvYWRQYWdlLCBjb250ZW50LCBoZWFkZXIsIHNlY3Rpb24gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBkZWZhdWx0RXhwb3J0IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gJy4vcGFnZWxvYWQnO1xuaW1wb3J0IG1lbnVMb2FkIGZyb20gJy4vbWVudSc7XG5cblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIFxuICAgIGxvYWRQYWdlKCk7XG4gICAgbWVudUxvYWQubWVudUxvYWQoKTtcbiAgICAvLyBkZWZhdWx0RXhwb3J0LmxvYWRIb21lKCk7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKCdpbmRleC5qcyB0ZXN0Jyk7XG59XG5cbmNvbXBvbmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==