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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/index.css */ \"./src/assets/styles/index.css\");\n/* harmony import */ var _locales_de_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales/de.json */ \"./src/locales/de.json\");\n/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/en.json */ \"./src/locales/en.json\");\n/* harmony import */ var _locales_es_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/es.json */ \"./src/locales/es.json\");\n/* harmony import */ var _locales_fr_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/fr.json */ \"./src/locales/fr.json\");\n/* harmony import */ var _locales_ja_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/ja.json */ \"./src/locales/ja.json\");\n/* harmony import */ var _locales_pt_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/pt.json */ \"./src/locales/pt.json\");\n\n\n\n\n\n\n\nconst locales = {\n  de: _locales_de_json__WEBPACK_IMPORTED_MODULE_1__,\n  en: _locales_en_json__WEBPACK_IMPORTED_MODULE_2__,\n  es: _locales_es_json__WEBPACK_IMPORTED_MODULE_3__,\n  fr: _locales_fr_json__WEBPACK_IMPORTED_MODULE_4__,\n  ja: _locales_ja_json__WEBPACK_IMPORTED_MODULE_5__,\n  pt: _locales_pt_json__WEBPACK_IMPORTED_MODULE_6__\n};\ndocument.addEventListener('DOMContentLoaded', () => {\n  const defaultLang = 'en';\n  const allLangs = Object.keys(locales);\n  const lang = getLanguage();\n  if (!!lang && allLangs.includes(lang) && lang != defaultLang) {\n    localizeСontent(lang);\n  } else {\n    setPrice();\n  }\n  const subscriptionContainer = document.querySelector('[data-subscription]');\n  const continueButton = document.querySelector('[data-continue-button]');\n  !!subscriptionContainer && subscriptionContainer.addEventListener('click', event => {\n    if (event.target.closest('[data-link]')) {\n      const target = event.target.closest('[data-link]');\n      [...subscriptionContainer.children].forEach(el => el.classList.remove('active'));\n      target.classList.add('active');\n      continueButton.setAttribute('href', target.dataset.link);\n    }\n  });\n});\nfunction getLanguage() {\n  const params = new URLSearchParams(window.location.search);\n  const browserLang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;\n  if (params.has('lang') || !!browserLang) {\n    return params.has('lang') ? params.get('lang').toLowerCase() : browserLang.split('-')[0];\n  } else {\n    return '';\n  }\n}\nfunction localizeСontent(lang) {\n  const els = [...document.querySelectorAll('[data-loc]')];\n  els.forEach(el => {\n    const key = el.innerHTML.replace(/\\r?\\n|\\r/g, '').trim();\n    el.innerHTML = locales[lang][key] || '';\n    setPrice(el);\n    el.removeAttribute('data-loc');\n  });\n  document.querySelector('html').lang = lang.toUpperCase();\n}\nfunction setPrice(node) {\n  if (!!node) {\n    node.innerHTML = node.innerHTML.replace('{{price}}', node.dataset.price);\n    node.classList.remove('hidden');\n  } else {\n    [...document.querySelectorAll('[data-price]')].forEach(el => {\n      el.innerHTML = el.innerHTML.replace('{{price}}', el.dataset.price);\n      el.classList.remove('hidden');\n    });\n  }\n}\n\n//# sourceURL=webpack://bp-mobile/./src/index.js?");

/***/ }),

/***/ "./src/assets/styles/index.css":
/*!*************************************!*\
  !*** ./src/assets/styles/index.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bp-mobile/./src/assets/styles/index.css?");

/***/ }),

/***/ "./src/locales/de.json":
/*!*****************************!*\
  !*** ./src/locales/de.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Erhalten Sie unbegrenzten <br>Zugriff\",\"Unlimited Art <br>Creation\":\"Unbegrenzte <br>Kunstschaffung\",\"Exclusive <br>Styles\":\"Exklusive <br>Stile\",\"Magic Avatars <br>With 20% Off\":\"20 % Rabatt auf <br>KI-Avatare\",\"YEARLY ACCESS\":\"JÄHRLICHER ZUGRIFF\",\"BEST OFFER\":\"BESTES ANGEBOT\",\"Just {{price}} per year\":\"Nur {{price}} pro Jahr\",\"WEEKLY ACCESS\":\"WÖCHENTLICHER ZUGRIFF\",\"{{price}} <br>per week\":\"{{price}} <br>pro Woche\",\"Terms of Use\":\"Nutzungsbedingungen\",\"Privacy Policy\":\"Datenschutzrichtlinie\",\"Restore\":\"Wiederherstellen\",\"Continue\":\"Weiter\"}');\n\n//# sourceURL=webpack://bp-mobile/./src/locales/de.json?");

/***/ }),

/***/ "./src/locales/en.json":
/*!*****************************!*\
  !*** ./src/locales/en.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Get Unlimited <br>Access\",\"Unlimited Art <br>Creation\":\"Unlimited Art <br>Creation\",\"Exclusive <br>Styles\":\"Exclusive <br>Styles\",\"Magic Avatars <br>With 20% Off\":\"Magic Avatars <br>With 20% Off\",\"YEARLY ACCESS\":\"YEARLY ACCESS\",\"BEST OFFER\":\"BEST OFFER\",\"Just {{price}} per year\":\"Just {{price}} per year\",\"WEEKLY ACCESS\":\"WEEKLY ACCESS\",\"{{price}} <br>per week\":\"{{price}} <br>per week\",\"Terms of Use\":\"Terms of Use\",\"Privacy Policy\":\"Privacy Policy\",\"Restore\":\"Restore\",\"Continue\":\"Continue\"}');\n\n//# sourceURL=webpack://bp-mobile/./src/locales/en.json?");

/***/ }),

/***/ "./src/locales/es.json":
/*!*****************************!*\
  !*** ./src/locales/es.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtén acceso <br>ilimitado\",\"Unlimited Art <br>Creation\":\"Ilimitada creación <br>de arte\",\"Exclusive <br>Styles\":\"Estilos <br>exclusivos\",\"Magic Avatars <br>With 20% Off\":\"20 % de descuento en <br>avatares de IA\",\"YEARLY ACCESS\":\"ACCESO ANUAL\",\"BEST OFFER\":\"MEJOR OFERTA\",\"Just {{price}} per year\":\"Solo {{price}} por año\",\"WEEKLY ACCESS\":\"ACCESO SEMANAL\",\"{{price}} <br>per week\":\"{{price}} <br>por semana\",\"Terms of Use\":\"Términos de uso\",\"Privacy Policy\":\"Política de privacidad\",\"Restore\":\"Restaurar\",\"Continue\":\"Continuar\"}');\n\n//# sourceURL=webpack://bp-mobile/./src/locales/es.json?");

/***/ }),

/***/ "./src/locales/fr.json":
/*!*****************************!*\
  !*** ./src/locales/fr.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtenez un accès <br>illimité\",\"Unlimited Art <br>Creation\":\"Création artistique <br>illimitée\",\"Exclusive <br>Styles\":\"Styles <br>exclusifs\",\"Magic Avatars <br>With 20% Off\":\"20&nbsp;% de réduction <br>sur les avatars IA\",\"YEARLY ACCESS\":\"ACCÈS ANNUEL\",\"BEST OFFER\":\"MEILLEURE OFFRE\",\"Just {{price}} per year\":\"Seulement {{price}} par an\",\"WEEKLY ACCESS\":\"ACCÈS HEBDOMADAIRE\",\"{{price}} <br>per week\":\"{{price}} <br>par semaine\",\"Terms of Use\":\"Conditions d’utilisation\",\"Privacy Policy\":\"Politique de confidentialité\",\"Restore\":\"Restaurer\",\"Continue\":\"Continuer\"}');\n\n//# sourceURL=webpack://bp-mobile/./src/locales/fr.json?");

/***/ }),

/***/ "./src/locales/ja.json":
/*!*****************************!*\
  !*** ./src/locales/ja.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"無制限アクセス<br>を入手\",\"Unlimited Art <br>Creation\":\"アート作品を<br>無制限に創造\",\"Exclusive <br>Styles\":\"特別な<br>スタイル\",\"Magic Avatars <br>With 20% Off\":\"AIアバターが<br>20%オフ\",\"YEARLY ACCESS\":\"年間アクセス\",\"BEST OFFER\":\"ベストオファー\",\"Just {{price}} per year\":\"わずか{{price}}/年\",\"WEEKLY ACCESS\":\"週ごとのアクセス\",\"{{price}} <br>per week\":\"{{price}}/週<br>\",\"Terms of Use\":\"利用規約\",\"Privacy Policy\":\"プライバシーポリシー\",\"Restore\":\"復元する\",\"Continue\":\"続行する\"}');\n\n//# sourceURL=webpack://bp-mobile/./src/locales/ja.json?");

/***/ }),

/***/ "./src/locales/pt.json":
/*!*****************************!*\
  !*** ./src/locales/pt.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtenha Acesso <br>Ilimitado\",\"Unlimited Art <br>Creation\":\"Criação de Arte <br>Ilimitada\",\"Exclusive <br>Styles\":\"Estilos <br>Exclusivos\",\"Magic Avatars <br>With 20% Off\":\"20% de Desconto em <br>Avatares de IA\",\"YEARLY ACCESS\":\"ACESSO ANUAL\",\"BEST OFFER\":\"MELHOR OFERTA\",\"Just {{price}} per year\":\"Apenas {{price}} por ano\",\"WEEKLY ACCESS\":\"ACESSO SEMANAL\",\"{{price}} <br>per week\":\"{{price}} <br>por semana\",\"Terms of Use\":\"Termos de Uso\",\"Privacy Policy\":\"Política de Privacidade\",\"Restore\":\"Restaurar\",\"Continue\":\"Continuar\"}');\n\n//# sourceURL=webpack://bp-mobile/./src/locales/pt.json?");

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