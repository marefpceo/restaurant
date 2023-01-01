/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");


const address = `1234 Corn Row Dr.<br>
                Some City, CA 90034<br>
                (123) 456-7890`;

function contactLoad() {
  const activeTab = document.getElementById('Contact');
  activeTab.id = 'current';

  const div = document.createElement('div');
  div.className = 'map';

  const img = document.createElement('img');
  img.src = '/src/images/map.png';

  const addressDiv = document.createElement('div');
  addressDiv.className = 'address-div';

  const p = document.createElement('p');
  
  div.appendChild(img);
  p.innerHTML = address;
  addressDiv.appendChild(p);

  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(div);
  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(addressDiv);  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ contactLoad });

/***/ }),

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
  const activeTab = document.getElementById('Home');
  activeTab.id = 'current';
  logo.src = '/src/images/logo.svg';
  logo.width = '249';
  logo.height = '169';
  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(logo);

  const p = document.createElement('p');
  p.textContent = 'Farm to table. . . Fresh to dressed!!';

  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(p);
  _pageload__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(buildHours());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loadHome });


/***/ }),

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
/* harmony export */   "buildMenu": () => (/* binding */ buildMenu),
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
  const nav = document.createElement('nav');  

  for (let i = 0; i < menu.length; i += 1) {
    const button = document.createElement('button');
    button.id = menu[i];
    button.innerHTML = menu[i];
    nav.appendChild(button);
  }
  return nav;
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






function clearSection() {
    _pageload__WEBPACK_IMPORTED_MODULE_0__.header.lastElementChild.replaceWith((0,_pageload__WEBPACK_IMPORTED_MODULE_0__.buildMenu)());
    _pageload__WEBPACK_IMPORTED_MODULE_0__.section.innerHTML = '';
}

function component() {
    (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadPage)();
    _home__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome();

    _pageload__WEBPACK_IMPORTED_MODULE_0__.header.addEventListener('click', (e)=> { 
        if (e.target.id === 'Menu'){
            clearSection();
            _menu__WEBPACK_IMPORTED_MODULE_2__["default"].menuLoad();
        }

        if (e.target.id === 'Contact') {
            clearSection();
            _contact__WEBPACK_IMPORTED_MODULE_3__["default"].contactLoad();
        }

        if (e.target.id === 'Home') {
            clearSection();
            _home__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome();
        }
    });
}

component();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlY3Rpb24gfSBmcm9tICcuL3BhZ2Vsb2FkJztcblxuY29uc3QgYWRkcmVzcyA9IGAxMjM0IENvcm4gUm93IERyLjxicj5cbiAgICAgICAgICAgICAgICBTb21lIENpdHksIENBIDkwMDM0PGJyPlxuICAgICAgICAgICAgICAgICgxMjMpIDQ1Ni03ODkwYDtcblxuZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb250YWN0Jyk7XG4gIGFjdGl2ZVRhYi5pZCA9ICdjdXJyZW50JztcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9ICdtYXAnO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gJy9zcmMvaW1hZ2VzL21hcC5wbmcnO1xuXG4gIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkcmVzc0Rpdi5jbGFzc05hbWUgPSAnYWRkcmVzcy1kaXYnO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIFxuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcC5pbm5lckhUTUwgPSBhZGRyZXNzO1xuICBhZGRyZXNzRGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTsgIFxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGNvbnRhY3RMb2FkIH07IiwiaW1wb3J0IHsgc2VjdGlvbiB9IGZyb20gJy4vcGFnZWxvYWQnO1xuXG5mdW5jdGlvbiBidWlsZEhvdXJzKCkge1xuICBjb25zdCBob3VycyA9ICc3YW0gLSAzcG0nO1xuICBjb25zdCB3SG91cnMgPSAnNmFtIC0gNnBtJztcbiAgY29uc3QgZGF5ID0gW2BNb25kYXk6ICAke2hvdXJzfWAsXG4gICAgICAgICAgICAgIGBUdWVzZGF5OiAgJHtob3Vyc31gLCBcbiAgICAgICAgICAgICAgYFdlZG5lc2RheTogICR7aG91cnN9YCxcbiAgICAgICAgICAgICAgYFRodXJzZGF5OiAgJHtob3Vyc31gLFxuICAgICAgICAgICAgICBgRnJpZGF5OiAgJHt3SG91cnN9YCxcbiAgICAgICAgICAgICAgYFNhdHVyZGF5OiAgJHt3SG91cnN9YCxcbiAgICAgICAgICAgICAgYFN1bmRheTogICR7d0hvdXJzfWBdO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gZGF5W2ldO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XG4gIGFjdGl2ZVRhYi5pZCA9ICdjdXJyZW50JztcbiAgbG9nby5zcmMgPSAnL3NyYy9pbWFnZXMvbG9nby5zdmcnO1xuICBsb2dvLndpZHRoID0gJzI0OSc7XG4gIGxvZ28uaGVpZ2h0ID0gJzE2OSc7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdGYXJtIHRvIHRhYmxlLiAuIC4gRnJlc2ggdG8gZHJlc3NlZCEhJztcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKHApO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1aWxkSG91cnMoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgbG9hZEhvbWUgfTtcbiIsImltcG9ydCB7IHNlY3Rpb24gfSBmcm9tICcuL3BhZ2Vsb2FkJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9tZW51SXRlbXMnO1xuXG5mdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01lbnUnKTtcbiAgYWN0aXZlVGFiLmlkID0gJ2N1cnJlbnQnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5tZW51SXRlbXMubGVuZ3RoOyBpICs9IDEpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGRpdi5jbGFzc05hbWUgPSAnaXRlbXMnO1xuICAgIGltZ0Rpdi5jbGFzc05hbWUgPSAnaW1hZ2UtZGl2JztcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgICBpbWcuc3JjID0gbWVudUl0ZW1zLm1lbnVJdGVtc1tpXS5pbWFnZTtcbiAgICBoMi50ZXh0Q29udGVudCA9IG1lbnVJdGVtcy5tZW51SXRlbXNbaV0uaXRlbTtcbiAgICBwLnRleHRDb250ZW50ID0gbWVudUl0ZW1zLm1lbnVJdGVtc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGgyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgcmV0dXJuIGNvbnNvbGUubG9nKG1lbnVJdGVtcy5tZW51SXRlbXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IG1lbnVMb2FkIH07IiwiY29uc3QgcHVtcGtpblNvdXBJbWcgPSAnL3NyYy9pbWFnZXMvcHVtcGtpbi1zb3VwLXNtLmpwZyc7XG5jb25zdCBjaGlja3BlYVNhbGFkSW1nID0gJy9zcmMvaW1hZ2VzL2NoaWNrcGVhLXNhbGFkLXNtLmpwZyc7XG5jb25zdCB2ZWdnaWVCdXJnZXJJbWcgPSAnL3NyYy9pbWFnZXMvdmVnZ2llLWJ1cmdlci1zbS5qcGcnO1xuXG5jb25zdCBtZW51SXRlbXMgPSBbe1xuICBpdGVtOiAnQ3JlYW15IFJvYXN0ZWQgUHVtcGtpbiBTb3VwJyxcbiAgaW1hZ2U6IHB1bXBraW5Tb3VwSW1nLFxuICBkZXNjcmlwdGlvbjogJ1JvYXN0ZWQgcHVtcGtpbiwgb25pb24sIGdhcmxpYywgd2l0aCBhIGJsZW5kIG9mIHNwaWNlcyB0aGF0IGJyaW5nIG91dCB0aGUgZmFsbCBmbGF2b3JzIG9mIHRoaXMgc2Vhc29uYWwgZGlzaC4gVG9wcGVkIHdpdGggdG9hc3RlZCBncmVlbiBwdW1wa2luIHNlZWRzIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygc291cmRvdWdoIHRvYXN0LicsXG59LFxue1xuICBpdGVtOiAnQ2hpY2twZWEgU2FsYWQnLFxuICBpbWFnZTogY2hpY2twZWFTYWxhZEltZyxcbiAgZGVzY3JpcHRpb246ICdDaGlja3BlYSBzYWxhZCwgbG9hZGVkIHdpdGggc3dlZXQgcG90YXRvZXMsIGJhYnkgc3BpbmFjaCwgZHJpZWQgY3JhbmJlcnJpZXMsIGFuZCB0b3BwZWQgd2l0aCBiYWxzYW1pYyB2aW5haWdyZXR0ZS4nXG59LFxue1xuICBpdGVtOiAnVmVnZ2llIEJ1cmdlcicsXG4gIGltYWdlOiB2ZWdnaWVCdXJnZXJJbWcsXG4gIGRlc2NyaXB0aW9uOiAnSnVpY3kgYmxhY2tiZWFuIHBhdHR5IG9uIGEgYnJpb2NoZSBidW4sIHRvcHBlZCB3aXRoIGdyZWVuIGxlYWYgbGV0dHVjZSwgdG9tb3RvZXMsIHBpY2tsZXMgYW5kIG91ciBzaWduYXR1cmUgdmVnYW4gY2hlZXNlIHNhdWNlLicsXG59XTtcblxuZXhwb3J0IGRlZmF1bHQgeyBtZW51SXRlbXMgfTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG5cbmZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7ICBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSBtZW51W2ldO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBtZW51W2ldO1xuICAgIG5hdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICBjb25zdCBzZXJ2aWNlT3B0ID0gWydEaW5lIEluJywgJ0NhcnJ5IE91dCcsICdEZWxpdmVyeSddO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlT3B0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9IHNlcnZpY2VPcHRbaV07XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9ICdUaGUgVmVnZ2llIFRhYmxlJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1aWxkTWVudSgpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IGxvYWRQYWdlLCBidWlsZE1lbnUsIGhlYWRlciwgc2VjdGlvbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZFBhZ2UgLCBoZWFkZXIgLCBzZWN0aW9uLCBidWlsZE1lbnUgfSBmcm9tICcuL3BhZ2Vsb2FkJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cblxuZnVuY3Rpb24gY2xlYXJTZWN0aW9uKCkge1xuICAgIGhlYWRlci5sYXN0RWxlbWVudENoaWxkLnJlcGxhY2VXaXRoKGJ1aWxkTWVudSgpKTtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgbG9hZFBhZ2UoKTtcbiAgICBob21lLmxvYWRIb21lKCk7XG5cbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7IFxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdNZW51Jyl7XG4gICAgICAgICAgICBjbGVhclNlY3Rpb24oKTtcbiAgICAgICAgICAgIG1lbnVMb2FkLm1lbnVMb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdDb250YWN0Jykge1xuICAgICAgICAgICAgY2xlYXJTZWN0aW9uKCk7XG4gICAgICAgICAgICBjb250YWN0LmNvbnRhY3RMb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgY2xlYXJTZWN0aW9uKCk7XG4gICAgICAgICAgICBob21lLmxvYWRIb21lKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29tcG9uZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9