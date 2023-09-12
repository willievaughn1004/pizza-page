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

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendComponent: () => (/* binding */ appendComponent),\n/* harmony export */   buildComponent: () => (/* binding */ buildComponent)\n/* harmony export */ });\nconst buildComponent = (elem, text, attributes = {}) => {\r\n  const element = document.createElement(`${elem}`);\r\n  element.innerText = text;\r\n\r\n  // Add attributes\r\n  for (const [key, value] of Object.entries(attributes)) {\r\n    element.setAttribute(key, value);\r\n  }\r\n\r\n  return element;\r\n};\r\n\r\nconst appendComponent = (targetElement, componentArr) => {\r\n  let content;\r\n\r\n  // Determines if targetElement is already a DOM element.\r\n  if (typeof targetElement === \"string\") {\r\n    content = document.querySelector(targetElement);\r\n  } else {\r\n    content = targetElement;\r\n  };\r\n\r\n  for (let i = 0; i < componentArr.length; i++) {\r\n    content.appendChild(componentArr[i]);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\r\n\r\nfunction createContactCopy(elem) {\r\n  const copyContactComponent = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"\", {\r\n    class: \"copy-contact\",\r\n  });\r\n\r\n  const phoneComponent = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"\");\r\n  const phoneText = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"999-999-9999\");\r\n  const phoneSymbol = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"i\", \"\", {\r\n    class: \"fa-solid fa-phone\",\r\n  });\r\n  (0,_components__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(phoneComponent, [phoneSymbol, phoneText]);\r\n\r\n  const addressComponent = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"\");\r\n  const addressText = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"3701 SW 12th St, Topeka, KS 66604\");\r\n  const addressSymbol = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"i\", \"\", {\r\n    class: \"fa-solid fa-house\",\r\n  });\r\n\r\n  const addressImgComponent = (0,_components__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"img\", \"\", { src: \"./img/restaurant-location.PNG\", alt: \"map\" })\r\n  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(addressComponent, [addressSymbol, addressText]);\r\n\r\n  (0,_components__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(copyContactComponent, [phoneComponent, addressComponent, addressImgComponent]);\r\n  (0,_components__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(`${elem}`, [copyContactComponent]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactCopy);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n\r\n\r\nfunction createHomeCopy(elem) {\r\n  const copyHomeComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"\", { class: \"copy-home\" });\r\n\r\n  const paragraph1 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"p\", \"It started as an obsession\");\r\n  const paragraph2 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"p\", \"But became my guiding light\");\r\n  const image = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"img\", \"\", {\r\n    src: \"./img/pizza-copy.webp\",\r\n    alt: \"pizza\",\r\n  });\r\n  const paragraph3 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"p\", \"Order online, visit us, or join us!\");\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(copyHomeComponent, [\r\n    paragraph1,\r\n    paragraph2,\r\n    image,\r\n    paragraph3,\r\n  ]);\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(`${elem}`, [copyHomeComponent]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeCopy);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const headerComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"header\", \"\");\r\n\r\n  const headerText = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"Joe's Pizzaria\", {\r\n    class: \"headerText\",\r\n  });\r\n  const headerSubText = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"(We're not a cult)\", {\r\n    class: \"headerSubText\",\r\n  });\r\n  const links = createNav();\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(headerComponent, [headerText, headerSubText, links]);\r\n\r\n  function createNav() {\r\n    const navComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"nav\", \"\");\r\n\r\n    const link1 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"button\", \"Home\", { class: \"home\" });\r\n    const link2 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"button\", \"Menu\", { class: \"menu\" });\r\n    const link3 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"button\", \"Contact\", { class: \"contact\" });\r\n\r\n    navComponent.appendChild(link1);\r\n    navComponent.appendChild(link2);\r\n    navComponent.appendChild(link3);\r\n\r\n    return navComponent;\r\n  }\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(\"#content\", [headerComponent]);\r\n}\r\n\r\nfunction createMain() {\r\n  const mainComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"main\", \"\", { class: \"main\" });\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(\"#content\", [mainComponent]);\r\n}\r\n\r\nfunction createFooter() {\r\n  const footerComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"footer\", \"\");\r\n\r\n  const copyrightText = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"Copyright\");\r\n  const githubUsername = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"willievaughn1004\");\r\n  const copyrightSymbol = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"i\", \"\", {\r\n    class: \"fa-regular fa-copyright\",\r\n  });\r\n  const githubSymbol = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"i\", \"\", {\r\n    class: \"fa-brands fa-github\",\r\n  });\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(footerComponent, [\r\n    copyrightText,\r\n    copyrightSymbol,\r\n    githubUsername,\r\n    githubSymbol,\r\n  ]);\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(\"#content\", [footerComponent]);\r\n}\r\n\r\nfunction addPageContent() {\r\n  createHeader();\r\n  createMain();\r\n\r\n  // Dom Elements\r\n  const mainContent = document.querySelector(\".main\");\r\n  const homeButton = document.querySelector(\".home\");\r\n  const menuButton = document.querySelector(\".menu\");\r\n  const contactButton = document.querySelector(\".contact\");\r\n\r\n  // TODO: Refactor eventListeners to be less big.\r\n  homeButton.addEventListener(\"click\", function () {\r\n    mainContent.innerHTML = \"\";\r\n    homeButton.classList.add(\"border\");\r\n    menuButton.classList.remove(\"border\");\r\n    contactButton.classList.remove(\"border\");\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"main\");\r\n  });\r\n\r\n  menuButton.addEventListener(\"click\", function () {\r\n    mainContent.innerHTML = \"\";\r\n    homeButton.classList.remove(\"border\");\r\n    menuButton.classList.add(\"border\");\r\n    contactButton.classList.remove(\"border\");\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"main\");\r\n  });\r\n\r\n  contactButton.addEventListener(\"click\", function () {\r\n    mainContent.innerHTML = \"\";\r\n    homeButton.classList.remove(\"border\");\r\n    menuButton.classList.remove(\"border\");\r\n    contactButton.classList.add(\"border\");\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"main\");\r\n  });\r\n\r\n  homeButton.classList.add(\"border\");\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"main\");\r\n  createFooter();\r\n}\r\n\r\naddPageContent();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n\r\n\r\nfunction createMenuCopy(elem) {\r\n  const copyMenuComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"\", { class: \"copy-menu\" });\r\n\r\n  function createMenuItem(img, header) {\r\n    const copyMenuItem = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"\", { class: \"menu-item\" })\r\n    const createImg = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"img\", \"\", {\r\n      src: `${img}`,\r\n      alt: \"pizza-item\",\r\n    });\r\n    const createHeaderText = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", `${header}`);\r\n\r\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(copyMenuItem, [createImg, createHeaderText]);\r\n\r\n    return copyMenuItem;\r\n  }\r\n\r\n  const menuItem1 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n  const menuItem2 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n  const menuItem3 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n  const menuItem4 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n  const menuItem5 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n  const menuItem6 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n  const menuItem7 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n  const menuItem8 = createMenuItem(\"./img/pizza-copy.webp\", \"Pepperoni\");\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(copyMenuComponent, [\r\n    menuItem1,\r\n    menuItem2,\r\n    menuItem3,\r\n    menuItem4,\r\n    menuItem5,\r\n    menuItem6,\r\n    menuItem7,\r\n    menuItem8,\r\n  ]);\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(`${elem}`, [ copyMenuComponent ]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuCopy);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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