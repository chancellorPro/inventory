/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!*****************************************************!*\
  !*** /app/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../node_modules/moment/locale/af.js",
	"./af.js": "../../../node_modules/moment/locale/af.js",
	"./ar": "../../../node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../node_modules/moment/locale/ar.js",
	"./az": "../../../node_modules/moment/locale/az.js",
	"./az.js": "../../../node_modules/moment/locale/az.js",
	"./be": "../../../node_modules/moment/locale/be.js",
	"./be.js": "../../../node_modules/moment/locale/be.js",
	"./bg": "../../../node_modules/moment/locale/bg.js",
	"./bg.js": "../../../node_modules/moment/locale/bg.js",
	"./bm": "../../../node_modules/moment/locale/bm.js",
	"./bm.js": "../../../node_modules/moment/locale/bm.js",
	"./bn": "../../../node_modules/moment/locale/bn.js",
	"./bn.js": "../../../node_modules/moment/locale/bn.js",
	"./bo": "../../../node_modules/moment/locale/bo.js",
	"./bo.js": "../../../node_modules/moment/locale/bo.js",
	"./br": "../../../node_modules/moment/locale/br.js",
	"./br.js": "../../../node_modules/moment/locale/br.js",
	"./bs": "../../../node_modules/moment/locale/bs.js",
	"./bs.js": "../../../node_modules/moment/locale/bs.js",
	"./ca": "../../../node_modules/moment/locale/ca.js",
	"./ca.js": "../../../node_modules/moment/locale/ca.js",
	"./cs": "../../../node_modules/moment/locale/cs.js",
	"./cs.js": "../../../node_modules/moment/locale/cs.js",
	"./cv": "../../../node_modules/moment/locale/cv.js",
	"./cv.js": "../../../node_modules/moment/locale/cv.js",
	"./cy": "../../../node_modules/moment/locale/cy.js",
	"./cy.js": "../../../node_modules/moment/locale/cy.js",
	"./da": "../../../node_modules/moment/locale/da.js",
	"./da.js": "../../../node_modules/moment/locale/da.js",
	"./de": "../../../node_modules/moment/locale/de.js",
	"./de-at": "../../../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../node_modules/moment/locale/de.js",
	"./dv": "../../../node_modules/moment/locale/dv.js",
	"./dv.js": "../../../node_modules/moment/locale/dv.js",
	"./el": "../../../node_modules/moment/locale/el.js",
	"./el.js": "../../../node_modules/moment/locale/el.js",
	"./en-SG": "../../../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../../../node_modules/moment/locale/en-SG.js",
	"./en-au": "../../../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../node_modules/moment/locale/en-ie.js",
	"./en-il": "../../../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../../node_modules/moment/locale/en-il.js",
	"./en-nz": "../../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../node_modules/moment/locale/en-nz.js",
	"./eo": "../../../node_modules/moment/locale/eo.js",
	"./eo.js": "../../../node_modules/moment/locale/eo.js",
	"./es": "../../../node_modules/moment/locale/es.js",
	"./es-do": "../../../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../node_modules/moment/locale/es-do.js",
	"./es-us": "../../../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../../node_modules/moment/locale/es-us.js",
	"./es.js": "../../../node_modules/moment/locale/es.js",
	"./et": "../../../node_modules/moment/locale/et.js",
	"./et.js": "../../../node_modules/moment/locale/et.js",
	"./eu": "../../../node_modules/moment/locale/eu.js",
	"./eu.js": "../../../node_modules/moment/locale/eu.js",
	"./fa": "../../../node_modules/moment/locale/fa.js",
	"./fa.js": "../../../node_modules/moment/locale/fa.js",
	"./fi": "../../../node_modules/moment/locale/fi.js",
	"./fi.js": "../../../node_modules/moment/locale/fi.js",
	"./fo": "../../../node_modules/moment/locale/fo.js",
	"./fo.js": "../../../node_modules/moment/locale/fo.js",
	"./fr": "../../../node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../node_modules/moment/locale/fr.js",
	"./fy": "../../../node_modules/moment/locale/fy.js",
	"./fy.js": "../../../node_modules/moment/locale/fy.js",
	"./ga": "../../../node_modules/moment/locale/ga.js",
	"./ga.js": "../../../node_modules/moment/locale/ga.js",
	"./gd": "../../../node_modules/moment/locale/gd.js",
	"./gd.js": "../../../node_modules/moment/locale/gd.js",
	"./gl": "../../../node_modules/moment/locale/gl.js",
	"./gl.js": "../../../node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../node_modules/moment/locale/gom-latn.js",
	"./gu": "../../../node_modules/moment/locale/gu.js",
	"./gu.js": "../../../node_modules/moment/locale/gu.js",
	"./he": "../../../node_modules/moment/locale/he.js",
	"./he.js": "../../../node_modules/moment/locale/he.js",
	"./hi": "../../../node_modules/moment/locale/hi.js",
	"./hi.js": "../../../node_modules/moment/locale/hi.js",
	"./hr": "../../../node_modules/moment/locale/hr.js",
	"./hr.js": "../../../node_modules/moment/locale/hr.js",
	"./hu": "../../../node_modules/moment/locale/hu.js",
	"./hu.js": "../../../node_modules/moment/locale/hu.js",
	"./hy-am": "../../../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../node_modules/moment/locale/hy-am.js",
	"./id": "../../../node_modules/moment/locale/id.js",
	"./id.js": "../../../node_modules/moment/locale/id.js",
	"./is": "../../../node_modules/moment/locale/is.js",
	"./is.js": "../../../node_modules/moment/locale/is.js",
	"./it": "../../../node_modules/moment/locale/it.js",
	"./it-ch": "../../../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../../node_modules/moment/locale/it-ch.js",
	"./it.js": "../../../node_modules/moment/locale/it.js",
	"./ja": "../../../node_modules/moment/locale/ja.js",
	"./ja.js": "../../../node_modules/moment/locale/ja.js",
	"./jv": "../../../node_modules/moment/locale/jv.js",
	"./jv.js": "../../../node_modules/moment/locale/jv.js",
	"./ka": "../../../node_modules/moment/locale/ka.js",
	"./ka.js": "../../../node_modules/moment/locale/ka.js",
	"./kk": "../../../node_modules/moment/locale/kk.js",
	"./kk.js": "../../../node_modules/moment/locale/kk.js",
	"./km": "../../../node_modules/moment/locale/km.js",
	"./km.js": "../../../node_modules/moment/locale/km.js",
	"./kn": "../../../node_modules/moment/locale/kn.js",
	"./kn.js": "../../../node_modules/moment/locale/kn.js",
	"./ko": "../../../node_modules/moment/locale/ko.js",
	"./ko.js": "../../../node_modules/moment/locale/ko.js",
	"./ku": "../../../node_modules/moment/locale/ku.js",
	"./ku.js": "../../../node_modules/moment/locale/ku.js",
	"./ky": "../../../node_modules/moment/locale/ky.js",
	"./ky.js": "../../../node_modules/moment/locale/ky.js",
	"./lb": "../../../node_modules/moment/locale/lb.js",
	"./lb.js": "../../../node_modules/moment/locale/lb.js",
	"./lo": "../../../node_modules/moment/locale/lo.js",
	"./lo.js": "../../../node_modules/moment/locale/lo.js",
	"./lt": "../../../node_modules/moment/locale/lt.js",
	"./lt.js": "../../../node_modules/moment/locale/lt.js",
	"./lv": "../../../node_modules/moment/locale/lv.js",
	"./lv.js": "../../../node_modules/moment/locale/lv.js",
	"./me": "../../../node_modules/moment/locale/me.js",
	"./me.js": "../../../node_modules/moment/locale/me.js",
	"./mi": "../../../node_modules/moment/locale/mi.js",
	"./mi.js": "../../../node_modules/moment/locale/mi.js",
	"./mk": "../../../node_modules/moment/locale/mk.js",
	"./mk.js": "../../../node_modules/moment/locale/mk.js",
	"./ml": "../../../node_modules/moment/locale/ml.js",
	"./ml.js": "../../../node_modules/moment/locale/ml.js",
	"./mn": "../../../node_modules/moment/locale/mn.js",
	"./mn.js": "../../../node_modules/moment/locale/mn.js",
	"./mr": "../../../node_modules/moment/locale/mr.js",
	"./mr.js": "../../../node_modules/moment/locale/mr.js",
	"./ms": "../../../node_modules/moment/locale/ms.js",
	"./ms-my": "../../../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../node_modules/moment/locale/ms.js",
	"./mt": "../../../node_modules/moment/locale/mt.js",
	"./mt.js": "../../../node_modules/moment/locale/mt.js",
	"./my": "../../../node_modules/moment/locale/my.js",
	"./my.js": "../../../node_modules/moment/locale/my.js",
	"./nb": "../../../node_modules/moment/locale/nb.js",
	"./nb.js": "../../../node_modules/moment/locale/nb.js",
	"./ne": "../../../node_modules/moment/locale/ne.js",
	"./ne.js": "../../../node_modules/moment/locale/ne.js",
	"./nl": "../../../node_modules/moment/locale/nl.js",
	"./nl-be": "../../../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../node_modules/moment/locale/nl.js",
	"./nn": "../../../node_modules/moment/locale/nn.js",
	"./nn.js": "../../../node_modules/moment/locale/nn.js",
	"./pa-in": "../../../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../node_modules/moment/locale/pa-in.js",
	"./pl": "../../../node_modules/moment/locale/pl.js",
	"./pl.js": "../../../node_modules/moment/locale/pl.js",
	"./pt": "../../../node_modules/moment/locale/pt.js",
	"./pt-br": "../../../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../node_modules/moment/locale/pt.js",
	"./ro": "../../../node_modules/moment/locale/ro.js",
	"./ro.js": "../../../node_modules/moment/locale/ro.js",
	"./ru": "../../../node_modules/moment/locale/ru.js",
	"./ru.js": "../../../node_modules/moment/locale/ru.js",
	"./sd": "../../../node_modules/moment/locale/sd.js",
	"./sd.js": "../../../node_modules/moment/locale/sd.js",
	"./se": "../../../node_modules/moment/locale/se.js",
	"./se.js": "../../../node_modules/moment/locale/se.js",
	"./si": "../../../node_modules/moment/locale/si.js",
	"./si.js": "../../../node_modules/moment/locale/si.js",
	"./sk": "../../../node_modules/moment/locale/sk.js",
	"./sk.js": "../../../node_modules/moment/locale/sk.js",
	"./sl": "../../../node_modules/moment/locale/sl.js",
	"./sl.js": "../../../node_modules/moment/locale/sl.js",
	"./sq": "../../../node_modules/moment/locale/sq.js",
	"./sq.js": "../../../node_modules/moment/locale/sq.js",
	"./sr": "../../../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../node_modules/moment/locale/sr.js",
	"./ss": "../../../node_modules/moment/locale/ss.js",
	"./ss.js": "../../../node_modules/moment/locale/ss.js",
	"./sv": "../../../node_modules/moment/locale/sv.js",
	"./sv.js": "../../../node_modules/moment/locale/sv.js",
	"./sw": "../../../node_modules/moment/locale/sw.js",
	"./sw.js": "../../../node_modules/moment/locale/sw.js",
	"./ta": "../../../node_modules/moment/locale/ta.js",
	"./ta.js": "../../../node_modules/moment/locale/ta.js",
	"./te": "../../../node_modules/moment/locale/te.js",
	"./te.js": "../../../node_modules/moment/locale/te.js",
	"./tet": "../../../node_modules/moment/locale/tet.js",
	"./tet.js": "../../../node_modules/moment/locale/tet.js",
	"./tg": "../../../node_modules/moment/locale/tg.js",
	"./tg.js": "../../../node_modules/moment/locale/tg.js",
	"./th": "../../../node_modules/moment/locale/th.js",
	"./th.js": "../../../node_modules/moment/locale/th.js",
	"./tl-ph": "../../../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../node_modules/moment/locale/tlh.js",
	"./tr": "../../../node_modules/moment/locale/tr.js",
	"./tr.js": "../../../node_modules/moment/locale/tr.js",
	"./tzl": "../../../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../node_modules/moment/locale/tzl.js",
	"./tzm": "../../../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../node_modules/moment/locale/ug-cn.js",
	"./uk": "../../../node_modules/moment/locale/uk.js",
	"./uk.js": "../../../node_modules/moment/locale/uk.js",
	"./ur": "../../../node_modules/moment/locale/ur.js",
	"./ur.js": "../../../node_modules/moment/locale/ur.js",
	"./uz": "../../../node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../node_modules/moment/locale/uz.js",
	"./vi": "../../../node_modules/moment/locale/vi.js",
	"./vi.js": "../../../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../node_modules/moment/locale/yo.js",
	"./yo.js": "../../../node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./components/bootstrap/constants.js":
/*!*******************************************!*\
  !*** ./components/bootstrap/constants.js ***!
  \*******************************************/
/*! exports provided: SIZES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return SIZES; });
/**
 * Base sizes
 *
 * @type {{sm: string, lg: string}}
 */
var SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

/***/ }),

/***/ "./components/dropzone/DropzoneBuilder.js":
/*!************************************************!*\
  !*** ./components/dropzone/DropzoneBuilder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Loading text
 * It will be shown after the start of image uploading
 *
 * @type {string}
 */

var LOADING_TEXT = 'Loading...';
/**
 * Dropzone builder
 */

var _default =
/*#__PURE__*/
function () {
  /**
   * Constructor
   *
   * @param dropzoneContainer
   * @param config
   */
  function _default(dropzoneContainer) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _default);

    this._config = config;
    this._dropzoneContainer = dropzoneContainer;
    this._cancelButton = $(dropzoneContainer).find('.dropzone-cancel');
  }
  /**
   * Set url to uploading
   *
   * @param url
   */


  _createClass(_default, [{
    key: "setUploadUrl",
    value: function setUploadUrl(url) {
      this._uploadUrl = url;
      return this;
    }
    /**
     * Set default preview image
     *
     * @param name
     * @param url
     */

  }, {
    key: "setPreview",
    value: function setPreview(name, url) {
      this._preview = {
        name: name,
        url: url
      };
      return this;
    }
    /**
     * Set error handler
     *
     * @param callback
     */

  }, {
    key: "error",
    value: function error(callback) {
      this._errorCallback = callback;
      return this;
    }
    /**
     * Set cancel handler
     *
     * @param callback
     */

  }, {
    key: "cancel",
    value: function cancel(callback) {
      this._cancelCallback = callback;
      return this;
    }
    /**
     * Set success handler
     *
     * @param callback
     */

  }, {
    key: "success",
    value: function success(callback) {
      this._successCallback = callback;
      return this;
    }
    /**
     * Build dropzone
     * @returns {Dropzone}
     */

  }, {
    key: "build",
    value: function build() {
      /**
       * this
       */
      var _dropzoneBuilder = this;
      /**
       * Call after fail
       */


      var dropzoneFail = function dropzoneFail() {
        $(_dropzoneBuilder._dropzoneContainer).removeClass('dz-started');
        $(_dropzoneBuilder._dropzoneContainer).find('.dz-preview').remove();
      };
      /**
       * Default configuration
       *
       * @type object
       */


      var config = {
        url: this._uploadUrl,
        thumbnailWidth: null,
        thumbnailHeight: null,
        uploadMultiple: false,
        acceptedFiles: 'image/*',
        headers: {
          'x-csrf-token': CSRF_TOKEN
        },
        init: function init() {
          /**
           * Set current image in the dropzone if it exists
           */
          if (!!_dropzoneBuilder._preview && !!_dropzoneBuilder._preview.url) {
            this.emit("addedfile", _dropzoneBuilder._preview);
            this.emit("thumbnail", _dropzoneBuilder._preview, _dropzoneBuilder._preview.url);
          }
          /**
           * Added file handler
           */


          this.on("addedfile", function () {
            $(_dropzoneBuilder._dropzoneContainer).find('.dz-filename span').text(LOADING_TEXT);
          });
          /**
           * Error handler
           */

          this.on("error", function (file, response) {
            dropzoneFail();

            if (!!_dropzoneBuilder._errorCallback) {
              _dropzoneBuilder._errorCallback(file, response);
            }
          });
          /**
           * Success handler
           */

          this.on("success", function (file, response) {
            if (!!_dropzoneBuilder._successCallback) {
              _dropzoneBuilder._successCallback(file, response);
            }
          });
        }
      };
      /**
       * Clear button handler
       * Clear file info in dropzone
       */

      if (!!this._cancelButton) {
        this._cancelButton.click(function () {
          dropzoneFail();

          if (!!_dropzoneBuilder._cancelCallback) {
            _dropzoneBuilder._cancelCallback();
          }
        });
      }
      /**
       * Dropzone build
       */


      return new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(this._dropzoneContainer, _objectSpread({}, config, {}, this._config));
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/RequestBuilder.js":
/*!*******************************************!*\
  !*** ./components/http/RequestBuilder.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./successHandler */ "./components/http/successHandler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * HTTP Request Builder
 */

var _default =
/*#__PURE__*/
function () {
  function _default(url) {
    _classCallCheck(this, _default);

    this._url = url;
    this._method = 'get';
    this._data = {};
    this._error = _errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"];
    this._success = _successHandler__WEBPACK_IMPORTED_MODULE_1__["default"];

    this._complete = function () {};
  }

  _createClass(_default, [{
    key: "method",
    value: function method(_method) {
      this._method = _method;
      return this;
    }
  }, {
    key: "data",
    value: function data(_data) {
      this._data = _data;
      return this;
    }
  }, {
    key: "error",
    value: function error(fn) {
      this._error = fn;
      return this;
    }
  }, {
    key: "success",
    value: function success(fn) {
      this._success = fn;
      return this;
    }
  }, {
    key: "complete",
    value: function complete(fn) {
      this._complete = fn;
      return this;
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;

      $.ajax({
        url: this._url,
        type: this._method,
        data: this._data,
        error: function error(response) {
          if (!!response.responseJSON) {
            _this._error(response.responseJSON);
          }
        },
        success: this._success,
        complete: this._complete
      });
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/errorHandler.js":
/*!*****************************************!*\
  !*** ./components/http/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Redirect to the route
   */
  if (!!response.route) {
    location.href = response.route;
    return;
  }
  /**
   * Show main error message
   */


  if (!!response.message) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
  /**
   * Show all messages
   */


  if (!!response.errors) {
    Object.keys(response.errors).map(function (key) {
      response.errors[key].map(function (error) {
        Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(error);
      });
    });
  }
});

/***/ }),

/***/ "./components/http/index.js":
/*!**********************************!*\
  !*** ./components/http/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestBuilder */ "./components/http/RequestBuilder.js");


/***/ }),

/***/ "./components/http/successHandler.js":
/*!*******************************************!*\
  !*** ./components/http/successHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");

/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Show main error message
   */
  if (!!response.message) {
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
});

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./components/modal/index.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ "./components/observer/index.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./components/http/index.js");




/***/ }),

/***/ "./components/modal/ModalBuilder.js":
/*!******************************************!*\
  !*** ./components/modal/ModalBuilder.js ***!
  \******************************************/
/*! exports provided: default, getModalCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModalCounter", function() { return getModalCounter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var modalsContainer = $('body');
var MODAL_SIZES = {
  sm: 'modal-sm',
  md: 'modal-md',
  lg: 'modal-lg'
};
/**
 * Unique index of the modal
 *
 * @type {number}
 */

var modalIndex = 0;
/**
 * Counter of the modals at the page
 *
 * @type {number}
 */

var modalCounter = 0;
/**
 * Modal Builder
 */

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    modalIndex++;
    this._id = 'modals-container-item-' + modalIndex;
  }

  _createClass(_default, [{
    key: "size",
    value: function size(_size) {
      if (!!MODAL_SIZES[_size]) {
        this._size = MODAL_SIZES[_size];
      }

      return this;
    }
  }, {
    key: "header",
    value: function header(_header) {
      this._header = _header;
      return this;
    }
  }, {
    key: "body",
    value: function body(_body) {
      this._body = _body;
      return this;
    }
  }, {
    key: "footer",
    value: function footer(_footer) {
      this._footer = _footer;
      return this;
    }
  }, {
    key: "dataset",
    value: function dataset(_dataset) {
      this._dataset = _dataset;
      return this;
    }
  }, {
    key: "_getID",
    value: function _getID() {
      return this._id;
    }
  }, {
    key: "_getSize",
    value: function _getSize() {
      return !!this._size ? this._size : MODAL_SIZES.md;
    }
  }, {
    key: "_getHeader",
    value: function _getHeader() {
      if (!!this._header) {
        return "\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">\xD7</span>\n                    </button>\n                   <h4 class=\"modal-title\">".concat(this._header, "</h4>\n                </div>");
      }

      return '';
    }
  }, {
    key: "_getFooter",
    value: function _getFooter() {
      var result = null;

      if (!!this._footer) {
        result = $("<div class=\"modal-footer\"></div>").append($("\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">\n                        Cancel\n                    </button>\n                ")).append(this._footer);
      }

      return result;
    }
  }, {
    key: "_getBody",
    value: function _getBody() {
      var result = null;

      if (!!this._body) {
        result = $("<div class=\"modal-body\"></div>").append(this._body);
      }

      return result;
    }
    /**
     * Set callback that will be call before build modal
     *
     * @param callback
     */

  }, {
    key: "beforeBuild",
    value: function beforeBuild(callback) {
      this._beforeBuildCallback = callback;
      return this;
    }
  }, {
    key: "_beforeBuild",
    value: function _beforeBuild() {
      if (typeof this._beforeBuildCallback === "function") {
        this._beforeBuildCallback();
      }
    }
    /**
     * Set callback that will be call after build modal
     *
     * @param callback
     */

  }, {
    key: "afterBuild",
    value: function afterBuild(callback) {
      this._afterBuildCallback = callback;
      return this;
    }
  }, {
    key: "_afterBuild",
    value: function _afterBuild() {
      if (typeof this._afterBuildCallback === "function") {
        this._afterBuildCallback();
      }
    }
    /**
     * Set callback that will be call after close modal
     *
     * @param callback
     */

  }, {
    key: "onClose",
    value: function onClose(callback) {
      this._onCloseCallback = callback;
      return this;
    }
  }, {
    key: "_onClose",
    value: function _onClose() {
      if (typeof this._onCloseCallback === "function") {
        this._onCloseCallback();
      }
    }
  }, {
    key: "modal",
    value: function modal(content) {
      var _this = this;

      /**
       * Data attributes
       * @type {Array}
       */
      var dataset = [];

      if (!!this._dataset) {
        for (var name in this._dataset) {
          dataset.push("data-".concat(name, "=\"").concat(this._dataset[name], "\""));
        }
      }

      var html = $("\n            <div id=\"".concat(this._getID(), "\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" ").concat(dataset.join(' '), ">\n                <div class=\"modal-dialog modal-dialog-centered ").concat(this._getSize(), "\">\n                    <div class=\"modal-content\"></div>\n                </div>\n            </div>"));

      if (!!content) {
        this.body(content);
      }
      /**
       * Call the beforeBuild callback
       */


      this._beforeBuild();

      html.find('.modal-content').append(this._getHeader()).append(this._getBody()).append(this._getFooter());
      modalsContainer.append(html);
      /**
       * Call the afterBuild callback
       */

      this._afterBuild();
      /**
       * update counter of modals at the page
       */


      modalCounter++;
      $('#' + this._getID()).on('hidden.bs.modal', function () {
        modalCounter--;
        $('#' + _this._getID()).off('hidden.bs.modal').remove();
        /**
         * Call the onClose callback
         */

        _this._onClose();
      }).modal();
    }
  }]);

  return _default;
}();
/**
 * Get counter of modals at the page
 *
 * @returns {number}
 */



function getModalCounter() {
  return modalCounter;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var _modalConfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalConfirm */ "./components/modal/modalConfirm.js");



/***/ }),

/***/ "./components/modal/modalConfirm.js":
/*!******************************************!*\
  !*** ./components/modal/modalConfirm.js ***!
  \******************************************/
/*! exports provided: modalConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConfirm", function() { return modalConfirm; });
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Modal confirm
 *
 * @param message
 * @param callback
 */

function modalConfirm(message, callback) {
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header(message).footer($('<button/>', {
    'class': 'btn btn-sm btn-success',
    'text': 'Confirm',
    'data-dismiss': 'modal',
    'click': callback
  })).modal();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/base.js":
/*!***********************************!*\
  !*** ./components/notify/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notify; });
/**
 * Notify helper
 *
 * @param message
 * @param type
 */
function notify(message, type) {
  $.notify({
    message: message
  }, {
    type: type,
    z_index: 1051
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/notifyError.js":
/*!******************************************!*\
  !*** ./components/notify/notifyError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'danger');
});

/***/ }),

/***/ "./components/notify/notifySuccess.js":
/*!********************************************!*\
  !*** ./components/notify/notifySuccess.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'success');
});

/***/ }),

/***/ "./components/observer/EventObserver.js":
/*!**********************************************!*\
  !*** ./components/observer/EventObserver.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Event observer
 */
var EventObserver =
/*#__PURE__*/
function () {
  function EventObserver() {
    _classCallCheck(this, EventObserver);

    this.subscribers = {};
  }

  _createClass(EventObserver, [{
    key: "subscribe",
    value: function subscribe(event, handler) {
      this._log('subscribe', event);

      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }

      this.subscribers[event].push(handler);
      return this;
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, data) {
      this._log('dispatch', event);

      if (!!this.subscribers[event]) {
        this.subscribers[event].forEach(function (handler) {
          handler(data, handler);
        });
      }

      return this;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, state) {
      this._log('unsubscribe', event);

      if (!!this.subscribers[event]) {
        if (!!state) {
          this.subscribers[event] = this.subscribers[event].filter(function (handler) {
            return handler !== state;
          });
        } else {
          /**
           * Delete all subscribers
           */
          this.subscribers[event] = [];
        }
      }
    }
  }, {
    key: "_log",
    value: function _log(method, event) {
      console.log(method.toUpperCase(), ':', '[', event, ']');
    }
  }]);

  return EventObserver;
}();

var observer = new EventObserver();
/* harmony default export */ __webpack_exports__["default"] = (observer);

/***/ }),

/***/ "./components/observer/index.js":
/*!**************************************!*\
  !*** ./components/observer/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventObserver */ "./components/observer/EventObserver.js");


/***/ }),

/***/ "./exceptions/SavedItemNotFound.js":
/*!*****************************************!*\
  !*** ./exceptions/SavedItemNotFound.js ***!
  \*****************************************/
/*! exports provided: SavedItemNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedItemNotFound", function() { return SavedItemNotFound; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Saved item not found
 *
 * Using in fastSave handler
 */
var SavedItemNotFound =
/*#__PURE__*/
function (_Error) {
  _inherits(SavedItemNotFound, _Error);

  function SavedItemNotFound() {
    _classCallCheck(this, SavedItemNotFound);

    var message = 'SavedItemNotFound';
    return _possibleConstructorReturn(this, _getPrototypeOf(SavedItemNotFound).call(this, message));
  }

  return SavedItemNotFound;
}(_wrapNativeSuper(Error));

/***/ }),

/***/ "./handlers/addEmbed.js":
/*!******************************!*\
  !*** ./handlers/addEmbed.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");

/**
 * Add embed element
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentButton = $(this);
  var target = currentButton.data('target');
  var template = currentButton.data('template');
  var idPlaceholder = currentButton.data('idplacepolder');
  var rowId = currentButton.data('rowid');
  currentButton.data('rowid', ++rowId);
  var embedForm = $('#' + template).html();
  var embedBlockId = rowId + new Date().getTime().toString(16);
  embedForm = embedForm.replace(/%embedBlockId%/g, embedBlockId);

  if (!!idPlaceholder) {
    embedForm = embedForm.replace(new RegExp(idPlaceholder, "g"), rowId);
  }

  $('#' + target).append(embedForm);
  /**
   * Event dispatch
   */

  var event = currentButton.data('event');

  if (event && event.length) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(event, {
      embedBlockId: embedBlockId
    });
  }

  currentButton.trigger('ai_animation');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/ajaxPagination.js":
/*!************************************!*\
  !*** ./handlers/ajaxPagination.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 *Ajax pagination
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var container = $(this).parents('.ajax-pagination').data('container');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).method('get').success(function (response) {
    $('#' + container).replaceWith(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/confirmModal.js":
/*!**********************************!*\
  !*** ./handlers/confirmModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");





/**
 * Open confirm modal before action
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var dataSet = this.dataset;
  var url = this.href;
  var parentButton = $(this);
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].sm).header(dataSet.header).footer($('<button/>', {
    'class': (dataSet.btnClass || 'btn-sm btn-success') + ' btn',
    'text': dataSet.btnName || 'Confirm',
    'click': function click() {
      var currentButton = $(this);

      if (currentButton.hasClass('loading')) {
        return false;
      }

      currentButton.addClass('loading');
      var data = {};

      if (dataSet.hasOwnProperty('withForm')) {
        data = parentButton.closest('form').serializeArray();
      }

      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](url).data(data).method(dataSet.method || 'get').success(function (response) {
        if (!!dataSet.event) {
          components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(dataSet.event, response);
        }

        if (parseInt(dataSet.reload) === 1) {
          location.reload();
        }

        if (parseInt(dataSet.dismiss) === 1) {
          currentButton.closest('.modal').modal('hide');
        }

        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
      }).complete(function () {
        currentButton.removeClass('loading');
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSave.js":
/*!******************************!*\
  !*** ./handlers/fastSave.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");





/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = currentBtn.closest('.fast-save-container');
  var dataSet = this.dataset;

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').success(function (response) {
    if (!!dataSet.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(dataSet.event, response);
    }

    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
  }).data(Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(savedItem)).send();
  savedItem.removeClass('changed');
  savedItem.find('.changed').removeClass('changed');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSavePage.js":
/*!**********************************!*\
  !*** ./handlers/fastSavePage.js ***!
  \**********************************/
/*! exports provided: CONTAINER_SELECTOR, PAGE_SAVED, UPDATE_SAVE_ALL_BUTTON, default, markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_SELECTOR", function() { return CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SAVED", function() { return PAGE_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SAVE_ALL_BUTTON", function() { return UPDATE_SAVE_ALL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");





var CONTAINER_SELECTOR = '.fast-save-page-container';
var PAGE_SAVED = 'PAGE_SAVED';
var UPDATE_SAVE_ALL_BUTTON = 'UPDATE_SAVE_ALL_BUTTON';
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(CONTAINER_SELECTOR);
  var dataSet = this.dataset;

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);

    if (!!dataSet.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(dataSet.event, response);
    }
  }).send();
  return false;
});
/**
 * Mark form's elements as changed
 */

function markChanged() {
  $(this).addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/filterDateRange.js":
/*!*************************************!*\
  !*** ./handlers/filterDateRange.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var dateFormat = 'YYYY-MM-DD';
  var dateRangeInputs = $('#date-range-inputs');
  var selectedOption = $('#date-range-select').find(':selected');
  var dateFrom = dateRangeInputs.find('.filter-from');
  var dateTo = dateRangeInputs.find('.filter-to');
  var selectedValue = selectedOption.val();

  if (selectedValue === 'custom') {
    dateRangeInputs.css({
      visibility: 'initial',
      height: 'auto'
    });
  } else {
    dateRangeInputs.css({
      visibility: 'hidden',
      height: 0
    });
    var dateFromValue = '';
    var dateToValue = '';

    switch (selectedValue) {
      case 'today':
        dateFromValue = dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(dateFormat);
        break;

      case 'yesterday':
        dateFromValue = dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'day').format(dateFormat);
        break;

      case 'current-week':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(1).format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(7).format(dateFormat);
        break;

      case 'previous-week':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(-6).format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(0).format(dateFormat);
        break;

      case 'current-month':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf('month').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf('month').format(dateFormat);
        break;

      case 'previous-month':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'month').startOf('month').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'month').endOf('month').format(dateFormat);
        break;

      case 'last-seven':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(6, 'day').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(dateFormat);
        break;

      case 'last-thirty':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(29, 'day').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(dateFormat);
        break;
    }

    dateFrom.val(dateFromValue);
    dateTo.val(dateToValue);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/index.js":
/*!***************************!*\
  !*** ./handlers/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fastSave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fastSave */ "./handlers/fastSave.js");
/* harmony import */ var _addEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmbed */ "./handlers/addEmbed.js");
/* harmony import */ var _removeEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeEmbed */ "./handlers/removeEmbed.js");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitForm */ "./handlers/submitForm.js");
/* harmony import */ var _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajaxPagination */ "./handlers/ajaxPagination.js");
/* harmony import */ var _confirmModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmModal */ "./handlers/confirmModal.js");
/* harmony import */ var _pageLimit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageLimit */ "./handlers/pageLimit.js");
/* harmony import */ var _modalData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalData */ "./handlers/modalData.js");
/* harmony import */ var handlers_filterDateRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! handlers/filterDateRange */ "./handlers/filterDateRange.js");
/* harmony import */ var _fastSavePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var tablesorter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tablesorter */ "../../../node_modules/tablesorter/dist/js/jquery.tablesorter.combined.js");
/* harmony import */ var tablesorter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tablesorter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sticky_table_headers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sticky-table-headers */ "../../../node_modules/sticky-table-headers/js/jquery.stickytableheaders.js");
/* harmony import */ var sticky_table_headers__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sticky_table_headers__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tablesorter_dist_css_theme_default_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tablesorter/dist/css/theme.default.min.css */ "../../../node_modules/tablesorter/dist/css/theme.default.min.css");
/* harmony import */ var tablesorter_dist_css_theme_default_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tablesorter_dist_css_theme_default_min_css__WEBPACK_IMPORTED_MODULE_12__);













$(document).scroll(function (e) {
  if ($(this).scrollTop() > 300) {
    $('.visit-stats').each(function () {
      $(this).height(0).css('display', 'table-column-group');
    });
  } else {
    $('.visit-stats').each(function () {
      $(this).removeAttr('style');
    });
  }
}).ready(function () {
  var tablesorter = $('.tablesorter');

  if (tablesorter) {
    tablesorter.tablesorter().stickyTableHeaders();
    tablesorter.find('thead').css('background', '#fff');
  }
})
/**
 * Open modal with data from server by request
 */
.on('click', '.ajax-modal-action', _modalData__WEBPACK_IMPORTED_MODULE_7__["default"])
/**
 * Open confirm modal
 */
.on('click', '.ajax-confirm-action', _confirmModal__WEBPACK_IMPORTED_MODULE_5__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-submit-action', _submitForm__WEBPACK_IMPORTED_MODULE_3__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-pagination a', _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__["default"])
/**
 * Add embed element
 */
.on('click', '.add-embed', _addEmbed__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove embed element
 */
.on('click', '.rm-embed', _removeEmbed__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Fast save the data of an entity
 */
.on('click', '.fast-save', _fastSave__WEBPACK_IMPORTED_MODULE_0__["default"])
/**
 * Set page limit
 */
.on('change', '.page-limit', _pageLimit__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Mark inputs as changed
 */
.on('change', "".concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["CONTAINER_SELECTOR"], " input, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["CONTAINER_SELECTOR"], " select, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["CONTAINER_SELECTOR"], " textarea"), _fastSavePage__WEBPACK_IMPORTED_MODULE_9__["markChanged"]).ready(function () {
  var dateRange = $('#date-range-select');

  if (dateRange.length) {
    Object(handlers_filterDateRange__WEBPACK_IMPORTED_MODULE_8__["default"])();
    dateRange.change(handlers_filterDateRange__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }
});

function initSticky() {
  $('.tablesorter').stickyTableHeaders();
}

$(".table-responsive").scroll(function () {
  initSticky();
});
/**
 * Fast save data on the page
 */

$('.fast-save-page').click(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/modalData.js":
/*!*******************************!*\
  !*** ./handlers/modalData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");




/**
 * Open modal with form by request
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](this.href).method(this.dataset.method || 'get').success(function (response) {
    new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].lg).dataset({
      reload: _this.dataset.reload || 1
    }).header(_this.dataset.header).afterBuild(function () {
      if (!!_this.dataset.event) {
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_this.dataset.event, response);
      }
    }).onClose(function () {
      if (!!_this.dataset.closeEvent) {
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_this.dataset.closeEvent, response);
      }
    }).modal(response);
  }).complete(function () {
    currentButton.removeClass('loading');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/pageLimit.js":
/*!*******************************!*\
  !*** ./handlers/pageLimit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Set page limit
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var href = new URL(window.location.href);
  href.searchParams.set('page_limit', $(this).val());
  href.searchParams["delete"]('page');
  window.location.href = href.toString();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/removeEmbed.js":
/*!*********************************!*\
  !*** ./handlers/removeEmbed.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = !!this.dataset.parent ? $(this).closest(this.dataset.parent) : $(this).parent();

  if (!this.dataset.id) {
    parent.remove();
    return;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      parent.remove();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/submitForm.js":
/*!********************************!*\
  !*** ./handlers/submitForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/**
 * Submit form
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this.href).data(currentButton.closest('form').serializeArray()).method(this.dataset.method || 'get').success(function (response) {
    if (!!_this.dataset.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_this.dataset.event, response);
    }

    if (canReload(_this)) {
      location.reload();
    }

    if (parseInt(_this.dataset.dismiss) === 1) {
      currentButton.closest('.modal').modal('hide');
    }

    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).complete(function () {
    currentButton.removeClass('loading');
  }).send();
  return false;
});
/**
 * Can reload the page
 *
 * @param button
 * @returns {boolean}
 */

function canReload(button) {
  if (parseInt(button.dataset.reload) === 1) {
    if (Object(components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__["getModalCounter"])() < 2) {
      var dataReload = $(button).closest('.modal').data('reload');

      if (_typeof(dataReload) === ( true ? "undefined" : undefined) || dataReload === false || parseInt(dataReload) === 1) {
        return true;
      }
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getFilePath.js":
/*!********************************!*\
  !*** ./helpers/getFilePath.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getSubFolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSubFolder */ "./helpers/getSubFolder.js");

/**
 * Get file path from storage with sub folders
 *
 * @param {string} rootFolder Root folder in the storage
 * @param {string} fileName   File name
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (rootFolder, fileName) {
  return '/storage/' + rootFolder + '/' + Object(_getSubFolder__WEBPACK_IMPORTED_MODULE_0__["default"])(fileName) + '/' + fileName;
});

/***/ }),

/***/ "./helpers/getFormData.js":
/*!********************************!*\
  !*** ./helpers/getFormData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Get form data
 *
 * @param {jQuery} form Form element
 *
 * @returns {{}}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  var formData = {};
  var formItems = form.find('input, select');

  if (!formItems.length) {
    formItems = form;
  }

  formItems.each(function () {
    var currentItem = $(this);

    switch (currentItem.attr('type')) {
      case 'radio':
      case 'checkbox':
        formData[currentItem.attr('name')] = !!currentItem.prop("checked") * 1;
        break;

      default:
        formData[currentItem.attr('name')] = currentItem.val();
    }
  });
  return formData;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getSubFolder.js":
/*!*********************************!*\
  !*** ./helpers/getSubFolder.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blueimp-md5 */ "../../../node_modules/blueimp-md5/js/md5.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get sub folders of the file
 *
 * Result of the function looks like: a1/b2/c3
 * Where md5 of the file = a1b2c3.........
 *
 * @param {string} fileName Name of the file
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (fileName) {
  var fileNameHash = blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default()(fileName).substring(0, 6);
  var pathParts = fileNameHash.match(/.{1,2}/g);
  return pathParts.join('/');
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/bootstrap */ "./vendor/bootstrap/index.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-colorpicker */ "../../../node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css */ "../../../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css");
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! font-awesome/scss/font-awesome.scss */ "../../../node_modules/font-awesome/scss/font-awesome.scss");
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/animate */ "./vendor/animate/index.js");
/* harmony import */ var _vendor_bootstrap_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/bootstrap-confirmation */ "./vendor/bootstrap-confirmation/index.js");
/* harmony import */ var _vendor_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/bootstrap-datetimepicker */ "./vendor/bootstrap-datetimepicker/index.js");
/* harmony import */ var _vendor_bootstrap_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/bootstrap-notify */ "./vendor/bootstrap-notify/index.js");
/* harmony import */ var _vendor_select2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor/select2 */ "./vendor/select2/index.js");
/* harmony import */ var _vendor_ekko_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/ekko-lightbox */ "./vendor/ekko-lightbox/index.js");
/* harmony import */ var _vendor_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor/theme */ "./vendor/theme/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./components/index.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers */ "./handlers/index.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raven-js */ "../../../node_modules/raven-js/src/singleton.js");
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(raven_js__WEBPACK_IMPORTED_MODULE_15__);
/**
 * jQuery
 */

window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/**
 * Bootstrap
 */


/**
 * Bootstrap Ccolorpicker
 */



/**
 * Font Awesome
 */


/**
 * External modules
 * TODO: get by npm
 */








/**
 * Components
 */


/**
 * Handlers
 */


/**
 * Styles
 */




if (undefined && undefined.length) {
  raven_js__WEBPACK_IMPORTED_MODULE_15___default.a.config(undefined, {
    xhr: true,
    console: true,
    dom: true,
    location: false,
    sentry: true
  }).install();
}
/**
 * Modules loader
 */


var path = location.pathname.split('/');

if (path.length > 1) {
  /**
   * To creating different files for each module
   * (Don't forget npm i --save-dev bundle-loader)
   * const context = require.context('bundle-loader!modules', true, /index\.js$/);
   */
  var modules = __webpack_require__("./modules sync recursive \\.\\/[\\w-_]+\\/module\\.js$");

  modules.keys().map(function (module) {
    var moduleItems = module.split('/');

    if (moduleItems[1] === path[1]) {
      console.log('MODULE:', path[1]);
      modules(module);
    }
  });

  var subModules = __webpack_require__("./modules sync recursive modules(.*)module\\.js$");

  subModules.keys().map(function (module) {
    var moduleItems = module.split('/');

    if (moduleItems[1] === path[1] && moduleItems[3] === path[2]) {
      console.log('SUB MODULE:', path[2]);
      subModules(module);
    }
  });
}

/***/ }),

/***/ "./listeners/awardCreate.js":
/*!**********************************!*\
  !*** ./listeners/awardCreate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], self);
    var currentBtn = $(_this);
    var editBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp(_this.dataset.templatePlaceholder, "g"), data.award_id).replace(new RegExp('%field_name%', "g"), _this.dataset.fieldName || '');
    currentBtn.parent().append(editBtn);
    currentBtn.remove();
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATED"], data);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/awardDelete.js":
/*!**********************************!*\
  !*** ./listeners/awardDelete.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], self);
    var createBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp('%field_name%'), _this.dataset.fieldName || '');
    var parent = $(_this).parent();
    parent.children().remove();
    parent.append(createBtn);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/dropZoneInit.js":
/*!***********************************!*\
  !*** ./listeners/dropZoneInit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");




/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function (EVENT_NAME) {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(EVENT_NAME, function () {
    /**
     * Dropzone container
     *
     * @type {HTMLElement | null}
     */
    var dropzoneElement = document.getElementById('dropzone');
    /**
     * Preview URL hidden input
     *
     * @type {HTMLElement | null}
     */

    var previewURL = document.getElementById('preview-url');
    console.log('dropzoneBuilder');
    /**
     * Dropzone initialization
     */

    var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
      Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      $('#preview-url').val('');
    }).cancel(function () {
      $('#preview-url').val('');
    }).success(function (file, response) {
      $('.dz-filename span').text(response.file_name);
      previewURL.value = response.file_name;
    });
    /**
     * Set preview
     */

    if (previewURL.value.length) {
      dropzoneBuilder.setPreview(previewURL.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneElement.dataset.folder, previewURL.value));
    }
    /**
     * Dropzone build
     */


    dropzoneBuilder.build();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/updateSaveAllButton.js":
/*!******************************************!*\
  !*** ./listeners/updateSaveAllButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SAVE_ALL_BUTTON"], function (data, self) {
    var saveAllButton = $('#update-all');
    var counter = $('#update-all .count');
    var count = $('.fast-save-container.changed').length;

    if (count > 0) {
      saveAllButton.show();
    } else {
      saveAllButton.hide();
    }

    counter.html(count);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules sync recursive \\.\\/[\\w-_]+\\/module\\.js$":
/*!***********************************************!*\
  !*** ./modules sync \.\/[\w-_]+\/module\.js$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-type/module.js": "./modules/action-type/module.js",
	"./add-me/module.js": "./modules/add-me/module.js",
	"./announcements/module.js": "./modules/announcements/module.js",
	"./assets-log/module.js": "./modules/assets-log/module.js",
	"./assets/module.js": "./modules/assets/module.js",
	"./award/module.js": "./modules/award/module.js",
	"./banner/module.js": "./modules/banner/module.js",
	"./cms-adps/module.js": "./modules/cms-adps/module.js",
	"./cms-user-actions/module.js": "./modules/cms-user-actions/module.js",
	"./collection/module.js": "./modules/collection/module.js",
	"./crop/module.js": "./modules/crop/module.js",
	"./daily-loot/module.js": "./modules/daily-loot/module.js",
	"./default/module.js": "./modules/default/module.js",
	"./deploy/module.js": "./modules/deploy/module.js",
	"./dpa/module.js": "./modules/dpa/module.js",
	"./dye/module.js": "./modules/dye/module.js",
	"./gift-wrap/module.js": "./modules/gift-wrap/module.js",
	"./linked-assets/module.js": "./modules/linked-assets/module.js",
	"./localization/module.js": "./modules/localization/module.js",
	"./magic/module.js": "./modules/magic/module.js",
	"./makeup-kit-asset/module.js": "./modules/makeup-kit-asset/module.js",
	"./makeup-kit/module.js": "./modules/makeup-kit/module.js",
	"./meal-ingredient-groups/module.js": "./modules/meal-ingredient-groups/module.js",
	"./meal-ingredients/module.js": "./modules/meal-ingredients/module.js",
	"./meal/module.js": "./modules/meal/module.js",
	"./neighbor-activity/module.js": "./modules/neighbor-activity/module.js",
	"./news-gifts-log/module.js": "./modules/news-gifts-log/module.js",
	"./product/module.js": "./modules/product/module.js",
	"./purchase/module.js": "./modules/purchase/module.js",
	"./settings/module.js": "./modules/settings/module.js",
	"./shop-department/module.js": "./modules/shop-department/module.js",
	"./shop-releases/module.js": "./modules/shop-releases/module.js",
	"./shop-stats/module.js": "./modules/shop-stats/module.js",
	"./sound/module.js": "./modules/sound/module.js",
	"./subtype-attributes/module.js": "./modules/subtype-attributes/module.js",
	"./tamatool/module.js": "./modules/tamatool/module.js",
	"./users/module.js": "./modules/users/module.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./modules sync recursive \\.\\/[\\w-_]+\\/module\\.js$";

/***/ }),

/***/ "./modules sync recursive modules(.*)module\\.js$":
/*!*********************************************!*\
  !*** ./modules sync modules(.*)module\.js$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/modules/ai_animation/module.js": "./modules/settings/modules/ai_animation/module.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./modules sync recursive modules(.*)module\\.js$";

/***/ }),

/***/ "./modules/action-type/constants.js":
/*!******************************************!*\
  !*** ./modules/action-type/constants.js ***!
  \******************************************/
/*! exports provided: ACTION_TYPE_STATES_CHANGED, DELTA_TIME_ATTRIBUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_STATES_CHANGED", function() { return ACTION_TYPE_STATES_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELTA_TIME_ATTRIBUTE", function() { return DELTA_TIME_ATTRIBUTE; });
var ACTION_TYPE_STATES_CHANGED = 'ACTION_TYPE_STATES_CHANGED';
var DELTA_TIME_ATTRIBUTE = 19;

/***/ }),

/***/ "./modules/action-type/handlers/collapseState.js":
/*!*******************************************************!*\
  !*** ./modules/action-type/handlers/collapseState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse state
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = $(this).closest('.action-type-state');
  parent.toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/collapseStates.js":
/*!********************************************************!*\
  !*** ./modules/action-type/handlers/collapseStates.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse states
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.action-type-state').toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/removeActionTypeState.js":
/*!***************************************************************!*\
  !*** ./modules/action-type/handlers/removeActionTypeState.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");





/**
 * Remove the State of the Action Type
 * at the modal
 * with confirm
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentElement = $(this);
  var parent = currentElement.closest('.action-type-state');

  if (!currentElement.data('id')) {
    parent.remove();
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
    return false;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](currentElement.data('url')).method('DELETE').success(function () {
        parent.remove();
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/listeners/updateIndexes.js":
/*!********************************************************!*\
  !*** ./modules/action-type/listeners/updateIndexes.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");


/**
 * Update indexes of the states
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPE_STATES_CHANGED"], function () {
    var index = 1;
    $('.index').each(function (_, item) {
      $(item).val(index++);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/module.js":
/*!***************************************!*\
  !*** ./modules/action-type/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/updateIndexes */ "./modules/action-type/listeners/updateIndexes.js");
/* harmony import */ var _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/collapseState */ "./modules/action-type/handlers/collapseState.js");
/* harmony import */ var _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/collapseStates */ "./modules/action-type/handlers/collapseStates.js");
/* harmony import */ var _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/removeActionTypeState */ "./modules/action-type/handlers/removeActionTypeState.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./modules/action-type/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Update indexes
 */

Object(_listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__["default"])();
$(document).on('change', '[name$="[time_type]"]', function () {
  var currentLi = $(this).closest('li');
  var deltaTimeHidden = currentLi.find('[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value]"]');
  var deltaTimeDisplay = currentLi.find('[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value][display]"]');
  deltaTimeDisplay.val(deltaTimeHidden.data('value') / parseInt($(this).val()));
}).on('input', '[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value][display]"]', function () {
  var currentLi = $(this).closest('li');
  var timeType = currentLi.find('[name$="[time_type]"]').val();
  var deltaTimeHidden = currentLi.find('[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value]"]');
  deltaTimeHidden.val($(this).val() * timeType);
})
/**
 * Collapse one state
 */
.on('click', '.collapse-link', _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Collapse all states
 */
.on('click', '.hide-states', _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Remove state
 */
.on('click', '.rm-action-type-states', _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/style.scss":
/*!****************************************!*\
  !*** ./modules/action-type/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/add-me/handlers/saveState.js":
/*!**********************************************!*\
  !*** ./modules/add-me/handlers/saveState.js ***!
  \**********************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");




/**
 * Update row
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.save-container');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__["default"])(container.find(".changed input"));

  if (!Object.keys(data).length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (resp) {
    container.find('tr.changed').removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/add-me/module.js":
/*!**********************************!*\
  !*** ./modules/add-me/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/add-me/handlers/saveState.js");

$(document)
/**
 * Mark the row as changed
 */
.on('click', 'input[type="checkbox"]', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Save the row
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/constants.js":
/*!********************************************!*\
  !*** ./modules/announcements/constants.js ***!
  \********************************************/
/*! exports provided: ANNOUNCEMENTS_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANNOUNCEMENTS_SHOW_FORM", function() { return ANNOUNCEMENTS_SHOW_FORM; });
var ANNOUNCEMENTS_SHOW_FORM = 'ANNOUNCEMENTS_SHOW_FORM';

/***/ }),

/***/ "./modules/announcements/listeners/showForm.js":
/*!*****************************************************!*\
  !*** ./modules/announcements/listeners/showForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/announcements/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ANNOUNCEMENTS_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ANNOUNCEMENTS_SHOW_FORM"], self);
    $('.datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/module.js":
/*!*****************************************!*\
  !*** ./modules/announcements/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/announcements/listeners/showForm.js");





$(document)
/**
 * Create award and save announcement
 */
.on('click', '.award-create-button', function () {
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this)();
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__["default"].bind(_this)();
})
/**
 * Unsubscribe on modal close
 */
.ready(function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_0__["CLOSE_AWARD_MODAL"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_0__["AWARD_CREATE"]);
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_0__["AWARD_CREATED"]);
  });
});
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets-log/module.js":
/*!**************************************!*\
  !*** ./modules/assets-log/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/assets-log/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);

$(document).on('click', '.toggle_ids', function () {
  if ($(this).next().height() > 0) {
    $(this).text($(this).text().replace('Hide', 'Show'));
    $(this).next().height(0);
  } else {
    $(this).text($(this).text().replace('Show', 'Hide'));
    $(this).text().replace('Show', 'Hide');
    $(this).next().height('100%');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets-log/styles.scss":
/*!****************************************!*\
  !*** ./modules/assets-log/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/assets/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/assets/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * SUB_TYPES - it is a global object
 * Inited in asset/form.blade.php
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  setSubtypes(this.value, this.dataset.subtype);
});
var assetFormSubtype = $("#subtype");
var assetFormActionType = $('#asset-form-action-type');
var assetFormCollection = $('#asset-form-collection');
var prices = $('.prices');

function setSubtypes(type, subtype) {
  assetFormSubtype.empty().select2({
    data: SUB_TYPES[type]
  }).val(subtype).change();
  /**
   * Default state
   */

  hide(assetFormActionType);
  hide(assetFormCollection);
  show(prices);

  switch (parseInt(type)) {
    // Furniture
    case 1:
      show(assetFormActionType);
      break;
    // Clothes

    case 2:
      show(assetFormCollection);
      break;
    // Body Part

    case 5:
      hide(prices);
      break;
  }
}

function hide(element) {
  element.addClass('hide');
}

function show(element) {
  element.removeClass('hide');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/copyAssets.js":
/*!***********************************************!*\
  !*** ./modules/assets/handlers/copyAssets.js ***!
  \***********************************************/
/*! exports provided: copyAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAssets", function() { return copyAssets; });
/**
 * Handler for copy assets ids to clipboard
 */
function copyAssets(e) {
  e.preventDefault();
  var assetIdsField = $('textarea[name="asset_ids"]');
  var withName = $('input[name="with_name"]');
  var assetIds = [];
  $('.fast-save-container').find('input[name="for_copy"]:checked').each(function (n, item) {
    console.log($(item));
    var assetId = $(item).data('asset-id');
    var assetName = $(item).data('asset-name');

    if (assetId) {
      if (withName.prop("checked") === true) {
        assetIds.push('\n' + assetId + ' ' + assetName);
      } else {
        assetIds.push(assetId);
      }
    }
  });
  /**
   * Select all if no one is selected
   */

  if (assetIds.length == 0) {
    $('.fast-save-container').find('input[name="for_copy"]').each(function (n, item) {
      var assetId = $(item).data('asset-id');
      var assetName = $(item).data('asset-name');

      if (assetId) {
        if (withName.prop("checked") === true) {
          assetIds.push('\n' + assetId + ' ' + assetName);
        } else {
          assetIds.push(assetId);
        }
      }
    });
  }

  assetIdsField.val(assetIds);
  assetIdsField.select();
  document.execCommand("copy");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/downloadAssets.js":
/*!***************************************************!*\
  !*** ./modules/assets/handlers/downloadAssets.js ***!
  \***************************************************/
/*! exports provided: downloadAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadAssets", function() { return downloadAssets; });
/**
 * Handler for download assets
 */
function downloadAssets(e) {
  e.preventDefault();
  var assetIds = [];
  $('.fast-save-container').find('input[name="for_copy"]:checked').each(function (n, item) {
    console.log($(item));
    var assetId = $(item).data('asset-id');

    if (assetId) {
      assetIds.push(assetId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (assetIds.length === 0) {
    $('.fast-save-container').find('input[name="for_copy"]').each(function (n, item) {
      var assetId = $(item).data('asset-id');

      if (assetId) {
        assetIds.push(assetId);
      }
    });
  }

  window.location = $(this).data('route') + '&ids=' + assetIds.join(',');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/getLastCollectionNumber.js":
/*!************************************************************!*\
  !*** ./modules/assets/handlers/getLastCollectionNumber.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#collection-number').val(result.collection_id).removeClass('hide');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/markChanged.js":
/*!************************************************!*\
  !*** ./modules/assets/handlers/markChanged.js ***!
  \************************************************/
/*! exports provided: markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");


/**
 * Mark changed
 */

function markChanged() {
  if ($(this).attr('type') != 'checkbox') {
    var parentContainer = $(this).parents('tr');
    parentContainer.addClass('changed');
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SAVE_ALL_BUTTON"]);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/module.js":
/*!**********************************!*\
  !*** ./modules/assets/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_updateSaveAllButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/updateSaveAllButton */ "./listeners/updateSaveAllButton.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/assets/handlers/changeType.js");
/* harmony import */ var _handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/getLastCollectionNumber */ "./modules/assets/handlers/getLastCollectionNumber.js");
/* harmony import */ var _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/copyAssets */ "./modules/assets/handlers/copyAssets.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _handlers_markChanged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handlers/markChanged */ "./modules/assets/handlers/markChanged.js");
/* harmony import */ var _handlers_downloadAssets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handlers/downloadAssets */ "./modules/assets/handlers/downloadAssets.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");












$('#assets-table').on('click', '.award-create', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_1__["default"]).on('click', '.award-delete', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_0__["default"]);
$('#asset-form-type').change(_handlers_changeType__WEBPACK_IMPORTED_MODULE_3__["default"]).change();
$('#get-last-collection-number').click(_handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_4__["default"]);
$(document)
/**
 * Copy assets ids
 */
.on('click', '.copy-assets', _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__["copyAssets"])
/**
 * Handler for download assets
 */
.on('click', '.download-assets', _handlers_downloadAssets__WEBPACK_IMPORTED_MODULE_9__["downloadAssets"])
/**
 * Create award and save announcement
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_1__["default"].bind(_this)();
}).on('change', '[name$="[time_type]"]', function () {
  var currentTd = $(this).closest('td');
  var deltaTimeHidden = currentTd.find('[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + ']"]');
  var deltaTimeDisplay = currentTd.find('[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + '][display]"]');
  deltaTimeDisplay.val(deltaTimeHidden.data('value') / parseInt($(this).val()));
}).on('input', '[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + '][display]"]', function () {
  var currentTd = $(this).closest('td');
  var timeType = currentTd.find('[name$="[time_type]"]').val();
  var deltaTimeHidden = currentTd.find('[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + ']"]');
  deltaTimeHidden.val($(this).val() * timeType);
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_0__["default"].bind(_this)();
})
/**
 * Mark row as changed
 */
.on('change', '.fast-save-container input, .fast-save-container select, .fast-save-container textarea', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_8__["markChanged"])
/**
 * Unsubscribe on modal close
 */
.ready(function () {
  Object(listeners_updateSaveAllButton__WEBPACK_IMPORTED_MODULE_2__["default"])();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_6__["CLOSE_AWARD_MODAL"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_6__["AWARD_CREATE"]);
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_6__["AWARD_CREATED"]);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/award/constants.js":
/*!************************************!*\
  !*** ./modules/award/constants.js ***!
  \************************************/
/*! exports provided: AWARD_CREATE, AWARD_CREATED, AWARD_DELETE, CLOSE_AWARD_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATE", function() { return AWARD_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATED", function() { return AWARD_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_DELETE", function() { return AWARD_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_AWARD_MODAL", function() { return CLOSE_AWARD_MODAL; });
var AWARD_CREATE = 'AWARD_CREATE';
var AWARD_CREATED = 'AWARD_CREATED';
var AWARD_DELETE = 'AWARD_DELETE';
var CLOSE_AWARD_MODAL = 'CLOSE_AWARD_MODAL';

/***/ }),

/***/ "./modules/award/module.js":
/*!*********************************!*\
  !*** ./modules/award/module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/banner/constants.js":
/*!*************************************!*\
  !*** ./modules/banner/constants.js ***!
  \*************************************/
/*! exports provided: BANNER_SHOW_FORM, TYPE_SELECT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANNER_SHOW_FORM", function() { return BANNER_SHOW_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SELECT_ID", function() { return TYPE_SELECT_ID; });
/**
 * Show form event
 *
 * @type {string}
 */
var BANNER_SHOW_FORM = 'BANNER_SHOW_FORM';
/**
 * Id of type's select
 *
 * @type {string}
 */

var TYPE_SELECT_ID = 'banner-type';

/***/ }),

/***/ "./modules/banner/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/banner/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");

/**
 * Change type handler
 * Hide/show some fields
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__["TYPE_SELECT_ID"]);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    $('.banner-type').addClass('hide');
    $('.banner-type-' + selectedElement.value).removeClass('hide');
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/handlers/showForm.js":
/*!*********************************************!*\
  !*** ./modules/banner/handlers/showForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/showForm */ "./modules/banner/listeners/showForm.js");



/**
 * Show form handler
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Dropzone Init
   */
  Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"]);
  /**
   * Init showForm listener
   */

  Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./modules/banner/listeners/showForm.js":
/*!**********************************************!*\
  !*** ./modules/banner/listeners/showForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/banner/handlers/changeType.js");



/**
 * Show form listener
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"], function () {
    /**
     * Type select change trigger
     */
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    /**
     * Dates init
     */

    $('.banner-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/module.js":
/*!**********************************!*\
  !*** ./modules/banner/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showForm */ "./modules/banner/handlers/showForm.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/banner/handlers/changeType.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./modules/banner/constants.js");



/**
 * Show edit form of a banner
 */

$('.show-form').click(Object(_handlers_showForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
$(document)
/**
 * Change type handler
 */
.on('change', '#' + _constants__WEBPACK_IMPORTED_MODULE_2__["TYPE_SELECT_ID"], _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAdp.js":
/*!**********************************************!*\
  !*** ./modules/cms-adps/handlers/copyAdp.js ***!
  \**********************************************/
/*! exports provided: copyAdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAdp", function() { return copyAdp; });
/**
 * Handler for copy adp ids to clipboard
 */
function copyAdp(e) {
  e.preventDefault();
  var adpIdsField = $('input[name="adp_ids"]');
  var adpIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    var adpId = $(item).data('id');

    if (adpId) {
      adpIds.push(adpId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (adpIds.length == 0) {
    $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
      var adpId = $(item).data('id');

      if (adpId) {
        adpIds.push(adpId);
      }
    });
  }

  adpIdsField.val(adpIds);
  adpIdsField.select();
  document.execCommand("copy"); // adpIdsField.val([]);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAssets.js":
/*!*************************************************!*\
  !*** ./modules/cms-adps/handlers/copyAssets.js ***!
  \*************************************************/
/*! exports provided: copyAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAssets", function() { return copyAssets; });
/**
 * Handler for copy assets ids to clipboard
 */
function copyAssets(e) {
  e.preventDefault();
  var assetIdsField = $('input[name="asset_ids"]');
  var assetIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    var assetId = $(item).data('asset-id');

    if (assetId) {
      assetIds.push(assetId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (assetIds.length == 0) {
    $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
      var assetId = $(item).data('asset-id');

      if (assetId) {
        assetIds.push(assetId);
      }
    });
  }

  assetIdsField.val(assetIds);
  assetIdsField.select();
  document.execCommand("copy");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/downloadAdp.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/downloadAdp.js ***!
  \**************************************************/
/*! exports provided: downloadAdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadAdp", function() { return downloadAdp; });
/**
 * Handler for download adp
 */
function downloadAdp(e) {
  e.preventDefault();
  var adpIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    var adpId = $(item).data('id');

    if (adpId) {
      adpIds.push(adpId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (adpIds.length === 0) {
    $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
      var adpId = $(item).data('id');

      if (adpId) {
        adpIds.push(adpId);
      }
    });
  }

  window.location = $(this).data('route') + '&ids=' + adpIds.join(',');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/hideArchive.js ***!
  \**************************************************/
/*! exports provided: hideArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideArchive", function() { return hideArchive; });
/**
 * Handler of archive categories on adp page
 */
function hideArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-archive').removeClass('hidden');
  $('.archive-categories-list').html('');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/hideTasks.js ***!
  \************************************************/
/*! exports provided: hideTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTasks", function() { return hideTasks; });
/**
 * Handler of tasks on adp page
 */
function hideTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-tasks').removeClass('hidden');
  $('.tasks-list').hide('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/selectRow.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/selectRow.js ***!
  \************************************************/
/*! exports provided: selectRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRow", function() { return selectRow; });
/**
 * Handler for select row by full td area
 */
function selectRow(e) {
  if (!$(e.target).hasClass('for-copy')) {
    e.preventDefault();
    var checkbox = $(this).find('.for-copy');

    if (checkbox.is(':checked')) {
      checkbox.prop('checked', false);
    } else {
      checkbox.prop('checked', true);
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/showArchive.js ***!
  \**************************************************/
/*! exports provided: showArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArchive", function() { return showArchive; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler of archive categories on adp page
 */

function showArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-archive').removeClass('hidden');
  var action = currentElement.attr('href');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    $('.archive-categories-list').html(response);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/showTasks.js ***!
  \************************************************/
/*! exports provided: showTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTasks", function() { return showTasks; });
/**
 * Handler of tasks on adp page
 */
function showTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-tasks').removeClass('hidden');
  $('.tasks-list').show('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/module.js":
/*!************************************!*\
  !*** ./modules/cms-adps/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showArchive */ "./modules/cms-adps/handlers/showArchive.js");
/* harmony import */ var _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/hideArchive */ "./modules/cms-adps/handlers/hideArchive.js");
/* harmony import */ var _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/hideTasks */ "./modules/cms-adps/handlers/hideTasks.js");
/* harmony import */ var _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/showTasks */ "./modules/cms-adps/handlers/showTasks.js");
/* harmony import */ var _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/copyAdp */ "./modules/cms-adps/handlers/copyAdp.js");
/* harmony import */ var _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/copyAssets */ "./modules/cms-adps/handlers/copyAssets.js");
/* harmony import */ var _handlers_selectRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/selectRow */ "./modules/cms-adps/handlers/selectRow.js");
/* harmony import */ var _handlers_downloadAdp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/downloadAdp */ "./modules/cms-adps/handlers/downloadAdp.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./modules/cms-adps/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
//import {bundleVersionSelect} from "./handlers/bundleVersionSelect";









$(document)
/**
 * Show archive adp categories
 */
.on('click', '.show-archive', _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__["showArchive"])
/**
 * Hide archive adp categories
 */
.on('click', '.hide-archive', _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__["hideArchive"])
/**
 * Hide adp tasks by status and user
 */
.on('click', '.hide-tasks', _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__["hideTasks"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.show-tasks', _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__["showTasks"])
/**
 * Copy adp ids
 */
.on('click', '.copy-adp', _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__["copyAdp"])
/**
 * Copy assets ids
 */
.on('click', '.copy-assets', _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__["copyAssets"])
/**
 * Handler for download assets
 */
.on('click', '.download-adp', _handlers_downloadAdp__WEBPACK_IMPORTED_MODULE_7__["downloadAdp"])
/**
 * Show hide side box
 */
.on('click', '.show-hide', function () {
  if (parseInt($('.side-box').css('right')) < 0) {
    $('.side-box').css('right', 0);
  } else {
    $('.side-box').css('right', '-100%');
  }
})
/**
 * Select row by full td area
 */
.on('click', '.id-col', _handlers_selectRow__WEBPACK_IMPORTED_MODULE_6__["selectRow"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/styles.scss":
/*!**************************************!*\
  !*** ./modules/cms-adps/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/cms-user-actions/constants.js":
/*!***********************************************!*\
  !*** ./modules/cms-user-actions/constants.js ***!
  \***********************************************/
/*! exports provided: CASH, COIN, ASSET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASH", function() { return CASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COIN", function() { return COIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSET", function() { return ASSET; });
var CASH = 'cash_added';
var COIN = 'coins_added';
var ASSET = 'assets_added';

/***/ }),

/***/ "./modules/cms-user-actions/module.js":
/*!********************************************!*\
  !*** ./modules/cms-user-actions/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/cms-user-actions/constants */ "./modules/cms-user-actions/constants.js");



$(document)
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Filter select options by selected source
 */
.on('change', '#filter_source', function () {
  var sourceVal = $(this).val();
  $("#filter_action").select2({
    matcher: function matcher(params, data) {
      if (sourceVal !== 'user_debug' && $.inArray(data.id, [modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__["CASH"], modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__["COIN"], modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__["ASSET"]]) > -1) {
        return null;
      } else {
        return data;
      }
    }
  });
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/constants.js":
/*!*****************************************!*\
  !*** ./modules/collection/constants.js ***!
  \*****************************************/
/*! exports provided: COLLECTION_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_SHOW_FORM", function() { return COLLECTION_SHOW_FORM; });
var COLLECTION_SHOW_FORM = 'COLLECTION_SHOW_FORM';

/***/ }),

/***/ "./modules/collection/handlers/fastSave.js":
/*!*************************************************!*\
  !*** ./modules/collection/handlers/fastSave.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var assetPreviewTemplate = $('#asset-preview-template').html();
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $('.fast-save-container');

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.each(function () {
      var currentItem = $(this);

      if (currentItem.hasClass('asset-id') && !!response.assets[currentItem.val()]) {
        var currentAsset = response.assets[currentItem.val()];
        currentItem.closest('.slot').find('.asset-preview').html(assetPreviewTemplate.replace(new RegExp('%url%', "g"), currentAsset.preview_url).replace(new RegExp('%title%', "g"), currentAsset.name));
      }
    }).removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/hideAdditionalRows.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/hideAdditionalRows.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide additional rows
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.additional-data').toggleClass('hide');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/markInputAsChanged.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/markInputAsChanged.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Mark input as changed
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(this).addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/sortableInit.js":
/*!*****************************************************!*\
  !*** ./modules/collection/handlers/sortableInit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](_this, {
    group: _this.dataset.group,
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      $(e.target).find(_this.dataset.position).each(function (index) {
        var position = $(this);

        if (parseInt(position.val()) !== index) {
          position.val(index);
          position.change();
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/module.js":
/*!**************************************!*\
  !*** ./modules/collection/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./modules/collection/constants.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/collection/handlers/fastSave.js");
/* harmony import */ var _handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/markInputAsChanged */ "./modules/collection/handlers/markInputAsChanged.js");
/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/collection/handlers/sortableInit.js");
/* harmony import */ var _handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/hideAdditionalRows */ "./modules/collection/handlers/hideAdditionalRows.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./modules/collection/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_SHOW_FORM"]));
/**
 * Fast save collection
 */

$('.collection-fast-save').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Mark inputs as changed
 */

$('.fast-save-container').find('input').change(_handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__["default"]);
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Hide additional rows
 */

$('.hide-slots').click(_handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/style.scss":
/*!***************************************!*\
  !*** ./modules/collection/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/crop/handlers/addRow.js":
/*!*****************************************!*\
  !*** ./modules/crop/handlers/addRow.js ***!
  \*****************************************/
/*! exports provided: addRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRow", function() { return addRow; });
/**
 * Add rows to the grid
 *
 * @returns {boolean}
 */
function addRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#crops > tbody');
  var trLast = $('#crop_template').html();
  var lastID = tbody.find("tr").last().find('.crop_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%crop%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/crop/handlers/deleteRow.js":
/*!********************************************!*\
  !*** ./modules/crop/handlers/deleteRow.js ***!
  \********************************************/
/*! exports provided: deleteRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRow", function() { return deleteRow; });
/**
 * Delete row
 *
 * @returns {boolean}
 */
function deleteRow() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/crop/module.js":
/*!********************************!*\
  !*** ./modules/crop/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addRow */ "./modules/crop/handlers/addRow.js");
/* harmony import */ var _handlers_deleteRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/deleteRow */ "./modules/crop/handlers/deleteRow.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");






$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-row', _handlers_addRow__WEBPACK_IMPORTED_MODULE_0__["addRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_deleteRow__WEBPACK_IMPORTED_MODULE_1__["deleteRow"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Create award
 */
.on('click', '.award-create-button', function () {
  var row = $(this).closest('tr');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATED"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATED"], self);
    new Promise(function (resolve) {
      resolve(row.addClass('changed'));
    }).then(function () {
      $('.fast-save-page').click();
    });
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var row = $(this).closest('tr');
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], self);
    new Promise(function (resolve) {
      resolve(row.addClass('changed'));
    }).then(function () {
      $('.fast-save-page').click();
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/handlers/addNewRow.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/addNewRow.js ***!
  \**************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#daily_loot > tbody');
  var trLast = $('#daily_loot_template').html();
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if (parseInt($(item).find('input').first().val())) {
      lastIDS.push(parseInt($(item).find('input').first().val()));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%rowIndex%/g, i + incrementId));
    tbody.find("tr").last().find('input').first().val(i + incrementId);
    tbody.find('.datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/handlers/saveState.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/saveState.js ***!
  \**************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.daily-loot-save-container');
  var data = container.find(".changed input, .changed select").serializeArray();

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (resp) {
    container.find('tr.changed').removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/module.js":
/*!**************************************!*\
  !*** ./modules/daily-loot/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/daily-loot/handlers/saveState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/daily-loot/handlers/addNewRow.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./modules/daily-loot/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark the row as changed
 */
.on('click', '.remove-embed', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Switch page type
 */
.on('click', '.toggle-page-type', function () {
  location.href = location.pathname.slice(0, location.pathname.lastIndexOf('/')) + $(this).data('href');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/style.scss":
/*!***************************************!*\
  !*** ./modules/daily-loot/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/default/module.js":
/*!***********************************!*\
  !*** ./modules/default/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('#common-menu').find('.common-menu-section').each(function () {
    if ($(this).find('li').length === 0) {
      $(this).closest('.common-menu-section').hide();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/deployStatus.js":
/*!****************************************!*\
  !*** ./modules/deploy/deployStatus.js ***!
  \****************************************/
/*! exports provided: deployStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployStatus", function() { return deployStatus; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Show Deploy Status
 */

function deployStatus() {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](DEPLOY_STATUS_ROUTE).method('get').success(function (response) {
    $('.deploy-status').html(response);
    var isActive = $('.deploy-status').find('.active-deploy').length;

    if (isActive) {
      $('.deploy-btn').addClass('loading');
    } else if ($('.deploy-btn').hasClass('loading')) {
      window.location.reload(true);
    }

    setTimeout(function () {
      deployStatus();
    }, 3000);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/changeTab.js":
/*!**********************************************!*\
  !*** ./modules/deploy/handlers/changeTab.js ***!
  \**********************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?direction=" + direction;
  history.pushState({
    id: 'deploy'
  }, 'Deploy', url);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/showDependency.js":
/*!***************************************************!*\
  !*** ./modules/deploy/handlers/showDependency.js ***!
  \***************************************************/
/*! exports provided: showDependency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDependency", function() { return showDependency; });
/**
 * Handler for show вependency
 */
function showDependency(e) {
  var currentElement = $(this);
  var currentConfig = currentElement.parents('.config-item-block').data('model');
  var addMode = currentElement.is(':checked');
  oneLevelShow(currentConfig, addMode);
}

function oneLevelShow(configName, addMode) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (DEPLOY_DEPENDS.hasOwnProperty(configName) && level < 10) {
    var configBlock = $('.model-' + configName);

    if (addMode) {
      configBlock.addClass('deploy-chain');
    } else {
      configBlock.removeClass('deploy-chain');
    }

    for (var key in DEPLOY_DEPENDS[configName]) {
      var dependConfigName = DEPLOY_DEPENDS[configName][key];

      var _configBlock = $('.model-' + dependConfigName);

      if (addMode) {
        _configBlock.addClass('deploy-chain');
      } else {
        _configBlock.removeClass('deploy-chain');
      }

      oneLevelShow(dependConfigName, addMode, level + 1);
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/showDependencyPopup.js":
/*!********************************************************!*\
  !*** ./modules/deploy/handlers/showDependencyPopup.js ***!
  \********************************************************/
/*! exports provided: showDependencyPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDependencyPopup", function() { return showDependencyPopup; });
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");


/**
 * Handler for show dependency popup
 */

function showDependencyPopup(e) {
  e.stopPropagation();
  var currentElement = $(this);
  var currentConfig = currentElement.parents('.config-item-block').data('model');
  var currentConfigId = currentElement.parents('.config-item-block').data('id');
  var ids = [];

  if (currentConfigId) {
    ids.push(currentConfigId);
  }

  rootLevelShow(currentConfig, ids);
  return false;
}
/**
 * One level show
 *
 * @param configName
 * @param dependConfigName
 * @param level
 * @param idResponse
 */

function oneLevelShow(configName, dependConfigName) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var idResponse = arguments.length > 3 ? arguments[3] : undefined;

  if (DEPLOY_DEPENDS.hasOwnProperty(configName) && level < 10) {
    var ids = idResponse.ids;
    var textClass = '';

    if (idResponse.hasOwnProperty('notImplemented')) {
      textClass = 'text-muted';
    }

    var isRecursion = false;
    $('.chain-' + configName).each(function () {
      if ($(this).parents('.chain-' + dependConfigName).length > 0) {
        isRecursion = true;
        $(this).append('<div class="chain-' + dependConfigName + '">' + '<span class="' + textClass + '">' + dependConfigName + ' <span class="text-danger">(Recursion)</span>' + '</span>' + '</div><br>');
      } else if ($(this).find('.chain-' + dependConfigName).length == 0) {
        $(this).append('<div class="chain-' + dependConfigName + '">' + '<span class="' + textClass + '">' + dependConfigName + '</span>' + (ids.length > 0 ? '<span class="depend-ids"> ' + ids.join(',') + '</span>' : '') + '</div>');
      }
    });

    if (!isRecursion) {
      getDeployModelIds(dependConfigName, level, ids);
    }
  }
}
/**
 * Root level show
 *
 * @param configName
 * @param ids
 */


function rootLevelShow(configName) {
  var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](DEPLOY_MODEL_IDS_ROUTE).method('post').data({
    'direction': ACTIVE_DIRECTION,
    'dependentModel': configName,
    'dependentModelIds': ids
  }).success(function (response) {
    var ids = response.ids || [];
    $('body').append('<div class="deploy-chain-block"></div>');
    $('.deploy-chain-block').html('<div class="chain-' + configName + '">' + '<span>' + configName + '</span>' + '<span class="depend-ids"> ' + ids.join(',') + '</span>' + '</div>');
    new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().header('Deploy dependency').body($('.deploy-chain-block')).modal();
    getDeployModelIds(configName, 1, ids);
  }).send();
}
/**
 * Get deploy model ids
 *
 * @param configName
 * @param level
 * @param ids
 */


function getDeployModelIds(configName) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var ids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop(key) {
    var dependConfigName = DEPLOY_DEPENDS[configName][key];

    if (ids.length !== 0) {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](DEPLOY_MODEL_IDS_ROUTE).method('post').data({
        'direction': ACTIVE_DIRECTION,
        'model': dependConfigName,
        'dependentModel': configName,
        'dependentModelIds': ids
      }).success(function (response) {
        oneLevelShow(configName, dependConfigName, level + 1, response);
      }).send();
    } else {
      oneLevelShow(configName, dependConfigName, level + 1, {
        'ids': []
      });
    }
  };

  for (var key in DEPLOY_DEPENDS[configName]) {
    _loop(key);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/module.js":
/*!**********************************!*\
  !*** ./modules/deploy/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/deploy/handlers/changeTab.js");
/* harmony import */ var _handlers_showDependency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/showDependency */ "./modules/deploy/handlers/showDependency.js");
/* harmony import */ var _handlers_showDependencyPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/showDependencyPopup */ "./modules/deploy/handlers/showDependencyPopup.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var _deployStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deployStatus */ "./modules/deploy/deployStatus.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./modules/deploy/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);






$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Save all page
 */
.on('click', '.fast-save-page-custom', handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__["default"])
/**
 * Show dependency
 */
.on('click', '.config-checkbox', _handlers_showDependency__WEBPACK_IMPORTED_MODULE_1__["showDependency"])
/**
 * Show dependency popup
 */
.on('click', '.show-dependency', _handlers_showDependencyPopup__WEBPACK_IMPORTED_MODULE_2__["showDependencyPopup"])
/**
 * Check/uncheck award dependencies
 */
.on('change', '.award-dependency [type=checkbox]', function () {
  $('.award-dependency [type=checkbox]').prop('checked', this.checked);
}).ready(function () {
  Object(_deployStatus__WEBPACK_IMPORTED_MODULE_4__["deployStatus"])();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/styles.scss":
/*!************************************!*\
  !*** ./modules/deploy/styles.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/dpa/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dpa/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the levels config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dpa > tbody');
  var lastID = tbody.find("tr").last().find('.dpa_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#dpa_template').html().replace(/%dpa_id%/g, i + incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/handlers/saveDpaState.js":
/*!**********************************************!*\
  !*** ./modules/dpa/handlers/saveDpaState.js ***!
  \**********************************************/
/*! exports provided: saveDpaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDpaState", function() { return saveDpaState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function saveDpaState(e) {
  e.preventDefault();
  var route = $(this).data('route');
  var data = $('.dpa-save-page-container').find(".changed input, .changed select").serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/module.js":
/*!*******************************!*\
  !*** ./modules/dpa/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dpa/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/saveDpaState */ "./modules/dpa/handlers/saveDpaState.js");


$(document)
/**
 * Delete dpa
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Add next row to the dpa grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Add next row to the dpa grid
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Fast save data on the dyes page
 */
.on('click', '.dpa-save-page', _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__["saveDpaState"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dye/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dye > tbody');
  var trLast = $('#dye_template').html();

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast);
    var lastRow = tbody.find("tr").last().find('.cp2');
    lastRow.each(function (index, item) {
      $(item).colorpicker({});
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/changeRowIndex.js":
/*!************************************************!*\
  !*** ./modules/dye/handlers/changeRowIndex.js ***!
  \************************************************/
/*! exports provided: changeRowIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRowIndex", function() { return changeRowIndex; });
/**
 * Change row index
 *
 * @returns {boolean}
 */
function changeRowIndex() {
  var rowIndex = $(this).val();
  var row = $(this).closest('tr').find('input, select');
  row.each(function (index, item) {
    var oldName = $(item).attr('name');
    var newName = oldName.slice(0, 4) + rowIndex + oldName.slice(oldName.indexOf(']'));
    $(item).attr('name', newName);
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/dyeSavePage.js":
/*!*********************************************!*\
  !*** ./modules/dye/handlers/dyeSavePage.js ***!
  \*********************************************/
/*! exports provided: DYE_CONTAINER_SELECTOR, default, markChangedTr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYE_CONTAINER_SELECTOR", function() { return DYE_CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChangedTr", function() { return markChangedTr; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var DYE_CONTAINER_SELECTOR = '.dye-save-page-container';
/**
 * Fast save data from the dyes page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(DYE_CONTAINER_SELECTOR);

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/**
 * Mark form's tr as changed
 */

function markChangedTr() {
  $(this).closest('tr').addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/module.js":
/*!*******************************!*\
  !*** ./modules/dye/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dye/handlers/addNewRow.js");
/* harmony import */ var _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeRowIndex */ "./modules/dye/handlers/changeRowIndex.js");
/* harmony import */ var _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/dyeSavePage */ "./modules/dye/handlers/dyeSavePage.js");



$(document)
/**
 * Init color-picker inputs
 */
.ready(function () {
  $('.cp2').colorpicker().on('create', function (e) {
    $(document)
    /**
     * Mark tr as changed
     */
    .on('change', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]).on('input', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]);
  });
})
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Change row index
 */
.on('input', '.asset_id', _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__["changeRowIndex"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.dye-save-page').click(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/constants.js":
/*!****************************************!*\
  !*** ./modules/gift-wrap/constants.js ***!
  \****************************************/
/*! exports provided: GIFT_WRAP_ROW_ADDED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFT_WRAP_ROW_ADDED", function() { return GIFT_WRAP_ROW_ADDED; });
var GIFT_WRAP_ROW_ADDED = 'GIFT_WRAP_ROW_ADDED';

/***/ }),

/***/ "./modules/gift-wrap/handlers/assetChanged.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/assetChanged.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");

/**
 * Asset ID changed
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentInput = $(this);
  var assetID = currentInput.val();
  var parent = currentInput.closest('tr');
  /**
   * Check duplicated assets ids
   */

  var currentAssetDuplicate = $('#gift-wraps-container').find('.asset-id').filter(function (_, item) {
    return assetID === item.value;
  });

  if (currentAssetDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'message': 'Duplicate asset ' + assetID
    });
    return false;
  }
  /**
   * Update inputs names
   */


  parent.find('input').each(function () {
    this.name = this.name.replace(/\[[\d]+\]/g, "[".concat(assetID, "]"));
  });
  /**
   * Update href of the delete button
   */

  parent.find('.ajax-confirm-action-custom').each(function () {
    this.href = this.href.replace(/\/[\d]+$/g, "/".concat(assetID));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/fastSavePage.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/fastSavePage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");



/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  try {
    var assets = {};
    $('#gift-wraps-container').find('.asset-id').each(function () {
      if (assets[this.value] === true) {
        throw new Error(this.value);
      }

      if (this.value.length) {
        assets[this.value] = true;
      }
    });
  } catch (err) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])({
      'message': 'Duplicate asset ' + err.message
    });
    return false;
  }
  /**
   * Position update
   */


  Object(_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/removeRow.js":
/*!*************************************************!*\
  !*** ./modules/gift-wrap/handlers/removeRow.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/confirmModal */ "./handlers/confirmModal.js");

/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var buttonUrl = this.href.split('/');
  var parent = $(this).closest('tr');
  e.preventDefault();

  if (parseInt(buttonUrl[buttonUrl.length - 1]) === 0) {
    parent.remove();
    return false;
  }

  handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/sortableInit.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/sortableInit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/gift-wrap/helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");


/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](_this, {
    removeCloneOnHide: true,
    onEnd: function onEnd() {
      Object(modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });
});

/***/ }),

/***/ "./modules/gift-wrap/helpers/positionUpdate.js":
/*!*****************************************************!*\
  !*** ./modules/gift-wrap/helpers/positionUpdate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Position update
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.position').each(function (index) {
    var position = $(this);
    var page = $('#page').val();
    var page_limit = $('[name="page_limit"]').val();

    if (parseInt(position.val()) !== index) {
      position.val(index + (page - 1) * page_limit);
      position.change();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/listeners/addRow.js":
/*!***********************************************!*\
  !*** ./modules/gift-wrap/listeners/addRow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/gift-wrap/constants.js");


/**
 * Add new row to grid
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["GIFT_WRAP_ROW_ADDED"], function (data) {
    $('#gift-wrap-' + data.embedBlockId).find('.datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/module.js":
/*!*************************************!*\
  !*** ./modules/gift-wrap/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/gift-wrap/handlers/sortableInit.js");
/* harmony import */ var _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/assetChanged */ "./modules/gift-wrap/handlers/assetChanged.js");
/* harmony import */ var _listeners_addRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/addRow */ "./modules/gift-wrap/listeners/addRow.js");
/* harmony import */ var _handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/fastSavePage */ "./modules/gift-wrap/handlers/fastSavePage.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/gift-wrap/handlers/removeRow.js");





$(document)
/**
 * Change asset id in input
 */
.on('change', '.asset-id', _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove row
 */
.on('click', '.ajax-confirm-action-custom', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Add row listener
 */

Object(_listeners_addRow__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * Save all page
 */

$('.fast-save-page-custom').click(_handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/handlers/showAsset.js":
/*!*****************************************************!*\
  !*** ./modules/linked-assets/handlers/showAsset.js ***!
  \*****************************************************/
/*! exports provided: showAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAsset", function() { return showAsset; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler for show asset
 */

function showAsset(e) {
  e.preventDefault();
  var currentElement = $(this);
  var action = SWOW_ASSET_ROUTE + '?id=' + currentElement.val();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    console.log(response);

    if (response.hasOwnProperty('data')) {
      if (response.data.hasOwnProperty('name')) {
        currentElement.parents('tr').find('.asset-name').html(response.data.name);
      }

      if (response.data.hasOwnProperty('preview_url')) {
        currentElement.parents('tr').find('.asset-preview img').attr('src', response.data.preview_url);
        currentElement.parents('tr').find('.asset-preview .list-thumbnail').data('full', response.data.preview_url);
      }
    }
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/module.js":
/*!*****************************************!*\
  !*** ./modules/linked-assets/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showAsset */ "./modules/linked-assets/handlers/showAsset.js");

$(document)
/**
 * Show asset
 */
.on('change', '.asset', _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__["showAsset"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/addNewRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/addNewRow.js ***!
  \****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the localization config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var tbody = $('#localizations > tbody');
  var template = $('#localization_template').html();
  tbody.prepend(template);
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/removeRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/removeRow.js ***!
  \****************************************************/
/*! exports provided: removeRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRow", function() { return removeRow; });
/**
 * Remove not saved row
 *
 * @returns {boolean}
 */
function removeRow(e) {
  e.preventDefault();
  $(this).parents('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/saveLocalizationState.js":
/*!****************************************************************!*\
  !*** ./modules/localization/handlers/saveLocalizationState.js ***!
  \****************************************************************/
/*! exports provided: saveLocalizationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLocalizationState", function() { return saveLocalizationState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");



/**
 * Update row to the localization config grid
 *
 * @returns {boolean}
 */

function saveLocalizationState(e) {
  e.preventDefault();
  var currentBtn = $(this);
  var parent = currentBtn.closest('tr');
  var currentKey = parent.find('.localization-key').val();
  /**
   * Check duplicated keys
   *
   * @type {jQuery}
   */

  var currentKeyDuplicate = $('#localizations').find('.localization-key').filter(function (_, item) {
    return currentKey === item.value;
  });

  if (currentKeyDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])({
      'message': 'Duplicate key ' + currentKey
    });
    return false;
  }

  var data = parent.find('.editable input').serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).success(function (response) {
    parent.find('.localization-key').attr('readonly', true);
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/module.js":
/*!****************************************!*\
  !*** ./modules/localization/module.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveLocalizationState */ "./modules/localization/handlers/saveLocalizationState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/localization/handlers/addNewRow.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/localization/handlers/removeRow.js");



$(document)
/**
 * Add next rows to the localizations grid
 */
.on('click', '.create-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__["saveLocalizationState"])
/**
 * Remove the row
 */
.on('click', '.remove-row', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__["removeRow"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/magic/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the magic config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#magic > tbody');

  for (var i = 0; i < add_counter; i++) {
    var lastID = tbody.find("tr").last().find('input[name="id"]').val();
    var incrementId = parseInt(lastID) || 0;
    var trLast = $('#magic_template').html().replace(/%magic_id%/g, ++incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/saveMagicState.js":
/*!**************************************************!*\
  !*** ./modules/magic/handlers/saveMagicState.js ***!
  \**************************************************/
/*! exports provided: saveMagicState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMagicState", function() { return saveMagicState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveMagicState() {
  var data = $('.magic-save-container').find(".changed input");
  data.each(function (n, item) {
    $(item).attr('readonly', true);
  });

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/module.js":
/*!*********************************!*\
  !*** ./modules/magic/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveMagicState */ "./modules/magic/handlers/saveMagicState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/magic/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__["saveMagicState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js":
/*!*****************************************************************!*\
  !*** ./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Show last makeup kit ID
 *
 * @param e
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#last-makeup-kit-id').val(result.makeup_kit_id);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/module.js":
/*!********************************************!*\
  !*** ./modules/makeup-kit-asset/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/getLastMakeupKitID */ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js");

/**
 * Show last makeup kit ID at the body parts grid
 */

$('#get-last-makeup-kit-id').click(_handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit/constants.js":
/*!*****************************************!*\
  !*** ./modules/makeup-kit/constants.js ***!
  \*****************************************/
/*! exports provided: MAKEUP_KIT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKEUP_KIT_SHOW_FORM", function() { return MAKEUP_KIT_SHOW_FORM; });
var MAKEUP_KIT_SHOW_FORM = 'MAKEUP_KIT_SHOW_FORM';

/***/ }),

/***/ "./modules/makeup-kit/module.js":
/*!**************************************!*\
  !*** ./modules/makeup-kit/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/makeup-kit/constants */ "./modules/makeup-kit/constants.js");


/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__["MAKEUP_KIT_SHOW_FORM"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredient-groups/handlers/addNewRow.js":
/*!**************************************************************!*\
  !*** ./modules/meal-ingredient-groups/handlers/addNewRow.js ***!
  \**************************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the ingredient config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal_ingredient_groups > tbody');
  var trLast = $('#meal_ingredient_groups_template').html();
  var lastID = tbody.find("tr").last().find('.group_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal-ingredient-group%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredient-groups/handlers/ingredientDelete.js":
/*!*********************************************************************!*\
  !*** ./modules/meal-ingredient-groups/handlers/ingredientDelete.js ***!
  \*********************************************************************/
/*! exports provided: ingredientDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientDelete", function() { return ingredientDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function ingredientDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredient-groups/module.js":
/*!**************************************************!*\
  !*** ./modules/meal-ingredient-groups/module.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal-ingredient-groups/handlers/addNewRow.js");
/* harmony import */ var _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/ingredientDelete */ "./modules/meal-ingredient-groups/handlers/ingredientDelete.js");


$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__["ingredientDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
                 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/addNewRow.js":
/*!********************************************************!*\
  !*** ./modules/meal-ingredients/handlers/addNewRow.js ***!
  \********************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the ingredient config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal_ingredients > tbody');
  var trLast = $('#meal_ingredients_template').html();
  var lastID = tbody.find("tr").last().find('.ingredient_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal-ingredient%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/ingredientDelete.js":
/*!***************************************************************!*\
  !*** ./modules/meal-ingredients/handlers/ingredientDelete.js ***!
  \***************************************************************/
/*! exports provided: ingredientDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientDelete", function() { return ingredientDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function ingredientDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/module.js":
/*!********************************************!*\
  !*** ./modules/meal-ingredients/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal-ingredients/handlers/addNewRow.js");
/* harmony import */ var _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/ingredientDelete */ "./modules/meal-ingredients/handlers/ingredientDelete.js");


$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__["ingredientDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
                 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/addNewRow.js":
/*!********************************************!*\
  !*** ./modules/meal/handlers/addNewRow.js ***!
  \********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the meal config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal > tbody');
  var trLast = $('#meal_template').html();
  var lastID = tbody.find("tr").last().find('.meal_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/mealDelete.js":
/*!*********************************************!*\
  !*** ./modules/meal/handlers/mealDelete.js ***!
  \*********************************************/
/*! exports provided: mealDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mealDelete", function() { return mealDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function mealDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/savePage.js":
/*!*******************************************!*\
  !*** ./modules/meal/handlers/savePage.js ***!
  \*******************************************/
/*! exports provided: saveMealState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMealState", function() { return saveMealState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");


/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */

function saveMealState() {
  var route = $(this).data('route');
  var tbody = $('.meal-save-page-container').find(".changed");
  var data = $('.meal-save-page-container').find(".changed input, .changed select").serializeArray();

  if (data.length === 0) {
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  tbody.each(function (n, item) {
    $(item).removeClass('changed');
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/module.js":
/*!********************************!*\
  !*** ./modules/meal/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal/handlers/addNewRow.js");
/* harmony import */ var _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/mealDelete */ "./modules/meal/handlers/mealDelete.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/meal/handlers/savePage.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");







$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__["mealDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Create award and save meal
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this)();
  $(this).closest('tr').addClass('changed');
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_3__["AWARD_CREATED"], function (data, self) {
    Object(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"])();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this)();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/constants.js":
/*!************************************************!*\
  !*** ./modules/neighbor-activity/constants.js ***!
  \************************************************/
/*! exports provided: NEIGHBOR_ACTIVITY_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEIGHBOR_ACTIVITY_SHOW_FORM", function() { return NEIGHBOR_ACTIVITY_SHOW_FORM; });
var NEIGHBOR_ACTIVITY_SHOW_FORM = 'NEIGHBOR_ACTIVITY_SHOW_FORM';

/***/ }),

/***/ "./modules/neighbor-activity/handlers/changeType.js":
/*!**********************************************************!*\
  !*** ./modules/neighbor-activity/handlers/changeType.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var TRASH = 'TRASH';
var TRASH_FIELDS_ID = 'trash-fields';
var SELECT_ID = 'neighbor-activity-type-id';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(SELECT_ID);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    var trashFields = $('#' + TRASH_FIELDS_ID);

    switch (selectedElement.text.toUpperCase()) {
      case TRASH:
        trashFields.removeClass('hide');
        break;

      default:
        trashFields.addClass('hide');
    }
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/listeners/showForm.js":
/*!*********************************************************!*\
  !*** ./modules/neighbor-activity/listeners/showForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/neighbor-activity/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], self);
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    $('.neighbor-activity-form .datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/module.js":
/*!*********************************************!*\
  !*** ./modules/neighbor-activity/module.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/neighbor-activity/listeners/showForm.js");




$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]).on('change', '.neighbor-activity-type', _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/news-gifts-log/module.js":
/*!******************************************!*\
  !*** ./modules/news-gifts-log/module.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/news-gifts-log/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/news-gifts-log/styles.scss":
/*!********************************************!*\
  !*** ./modules/news-gifts-log/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/product/constants.js":
/*!**************************************!*\
  !*** ./modules/product/constants.js ***!
  \**************************************/
/*! exports provided: PRODUCT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SHOW_FORM", function() { return PRODUCT_SHOW_FORM; });
var PRODUCT_SHOW_FORM = 'PRODUCT_SHOW_FORM';

/***/ }),

/***/ "./modules/product/handlers/priceInit.js":
/*!***********************************************!*\
  !*** ./modules/product/handlers/priceInit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "../../../node_modules/cleave.js/dist/cleave-esm.js");

/**
 * Price init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new cleave_js__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
    numeral: true,
    prefix: '$ ',
    rawValueTrimPrefix: true,
    onValueChanged: function onValueChanged(e) {
      var value = Math.round(+e.target.rawValue * 100);
      var productPrice = $(this.element).closest('td').find('.product-price');

      if (value !== parseInt(productPrice.val())) {
        productPrice.val(value).change();
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/product/module.js":
/*!***********************************!*\
  !*** ./modules/product/module.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_product_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/product/constants */ "./modules/product/constants.js");
/* harmony import */ var modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/product/handlers/priceInit */ "./modules/product/handlers/priceInit.js");





$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(function () {
  console.log(123123);
});
/**
 * Price format
 */

$('.product-price-view').each(modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/purchase/module.js":
/*!************************************!*\
  !*** ./modules/purchase/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./modules/purchase/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/purchase/style.scss":
/*!*************************************!*\
  !*** ./modules/purchase/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/settings/handlers/addNewRow.js":
/*!************************************************!*\
  !*** ./modules/settings/handlers/addNewRow.js ***!
  \************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = parseInt($('.add-counter').val());
  var tbody = $('table.table tbody');
  var maxId = $(this).data('counter');
  var template = $('template#config-row');
  var newLength = parseInt(tbody.find('tr.new-row').length);

  var _loop = function _loop(i) {
    var trId = (maxId > 0 ? maxId : 0) + parseInt(tbody.find('tr.new-row').length);
    var newRow = template.html().replace(/%id%/g, trId).replace(/%tr_id%/g, trId).replace(/%draft%/g, trId); // Set default values to new rows

    var newRowHtml = $(newRow);
    $('.default-row-value').each(function () {
      var defaultValue = $(this).val();
      newRowHtml.find('.' + $(this).data('class')).attr('value', defaultValue);
    });
    newRow = newRowHtml.get(0).outerHTML;

    if (newLength > 0) {
      $(tbody.find('tr.new-row').last()).after(newRow);
    } else {
      tbody.prepend(newRow);
    }

    newLength++;
    tbody.find('[data-autoincrement="1"]').last().val(trId);
  };

  for (var i = 0; i < add_counter; i++) {
    _loop(i);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/dropzoneInit.js":
/*!***************************************************!*\
  !*** ./modules/settings/handlers/dropzoneInit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");



/**
 * Dropzone init
 *
 * @param _
 * @param item
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_, item) {
  var dropzoneContainer = $(item);
  var previewHiddenInput = dropzoneContainer.find('input');
  /**
   * Dropzone initialization
   */

  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](item).setUploadUrl(dropzoneContainer.data('url')).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    previewHiddenInput.val('');
  }).cancel(function () {
    previewHiddenInput.val('');
  }).success(function (file, response) {
    $('.dz-filename span').text(response.file_name);
    previewHiddenInput.val(response.file_name);
  });
  /**
   * Set preview
   */

  if (!!previewHiddenInput.val()) {
    dropzoneBuilder.setPreview(previewHiddenInput.val(), Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneContainer.data('folder'), previewHiddenInput.val()));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/markChanged.js":
/*!**************************************************!*\
  !*** ./modules/settings/handlers/markChanged.js ***!
  \**************************************************/
/*! exports provided: markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/**
 * Mark changed
 */
function markChanged() {
  $(this).closest('tr').addClass('changed');
  $('#update-all').show();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/savePage.js":
/*!***********************************************!*\
  !*** ./modules/settings/handlers/savePage.js ***!
  \***********************************************/
/*! exports provided: savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function savePage(e) {
  e.preventDefault();
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])($("tr.changed").find('input, input[type="hidden"], select, textarea'));
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(_objectSpread({}, data)).success(function (resp) {
    if (resp.type === 'error') {
      Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])(resp.message);
    } else {
      window.location.reload(true);
    }
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/saveRow.js":
/*!**********************************************!*\
  !*** ./modules/settings/handlers/saveRow.js ***!
  \**********************************************/
/*! exports provided: saveRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRow", function() { return saveRow; });
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function saveRow(e) {
  e.preventDefault();
  var rowToSave = $(this).parents('tr');
  var action = rowToSave.data('action');
  var row = rowToSave.find(".editable select, .editable input").serializeArray();

  if ($("tr.changed").length > 1) {
    var r = confirm('Changed more than one row. Saved only current row!');

    if (r !== true) {
      return false;
    }
  }

  if (!rowToSave.hasClass('changed')) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])('Nothing to save!');
    return false;
  }

  $.ajax({
    type: "PUT",
    dataType: 'json',
    url: action,
    data: row,
    success: function success(resp) {
      rowToSave.removeClass('changed');
      $.notify({
        message: resp.message
      }, {
        type: resp.type
      });
    },
    error: function error(jqXHR, exception) {
      if (jqXHR.responseJSON && jqXHR.responseJSON.hasOwnProperty('errors')) {
        $.each(jqXHR.responseJSON.errors, function (errorKey, error) {
          $.each(error, function (messageKey, message) {
            $.notify({
              message: message
            }, {
              type: 'danger'
            });
          });
        });
      } else {
        window.location.reload();
      }
    }
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/module.js":
/*!************************************!*\
  !*** ./modules/settings/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/dropzoneInit */ "./modules/settings/handlers/dropzoneInit.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/settings/handlers/savePage.js");
/* harmony import */ var _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/markChanged */ "./modules/settings/handlers/markChanged.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./modules/settings/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/settings/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handlers/saveRow */ "./modules/settings/handlers/saveRow.js");











/**
 * Turned off the Dropzone auto init
 *
 * @type {boolean}
 */

dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.autoDiscover = false;
/**
 * Dropzone init
 */

$('.dropzone').each(_handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__["default"]);
$(document).ready(function () {
  /**
   * Unsubscribe on modal close
   */
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["CLOSE_AWARD_MODAL"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATE"]);
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATED"]);
  });
  /**
   * Init color-picker inputs
   */

  $('.cp2').colorpicker();
  $('#update-all').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["savePage"]);
})
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_9__["addNewRow"])
/**
 * Create award and save row
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATE"], self);
    saveButton.click();
  });
}).on('click', '.update-row', _handlers_saveRow__WEBPACK_IMPORTED_MODULE_10__["saveRow"])
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this)();
})
/**
 * Delete award
 */
.on('click', '.remove-embed', function () {
  $(this).closest('tr').addClass('changed');
  $('#update-all').show();
})
/**
 * Mark row as changed
 */
.on('click', '.dropzone', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]).on('click', '.award-create-button', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]).on('input', 'tbody input, tbody textarea', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]).on('change', 'tbody input, tbody select', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/modules/ai_animation/module.js":
/*!*********************************************************!*\
  !*** ./modules/settings/modules/ai_animation/module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var WALK_CATEGORY = '6';
var RUN_CATEGORY = '7';
$(document).ready(function () {
  var select2 = $('.table').find('.embed-group select.select2');
  var selectVal = 0;
  select2.each(function (n, i) {
    selectVal = $(i).val();

    if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
    } else {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
    }
  });
})
/**
 * Show hide speed on trigger add-embed button
 */
.on('ai_animation', '.add-embed', function () {
  var embed = $(this).closest('.embed-group');
  var selectVal = embed.find('.select2').val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    embed.find('.embed-group').find(".row:eq(1)").show();
  } else {
    embed.find('.embed-group').find(".row:eq(1)").hide();
  }
})
/**
 * Show hide speed
 */
.on('.select2').change(function (item) {
  var selectVal = $(item.target).val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
  } else {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/styles.scss":
/*!**************************************!*\
  !*** ./modules/settings/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/shop-department/constants.js":
/*!**********************************************!*\
  !*** ./modules/shop-department/constants.js ***!
  \**********************************************/
/*! exports provided: SHOP_DEPARTMENT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_DEPARTMENT_SHOW_FORM", function() { return SHOP_DEPARTMENT_SHOW_FORM; });
var SHOP_DEPARTMENT_SHOW_FORM = 'SHOP_DEPARTMENT_SHOW_FORM';

/***/ }),

/***/ "./modules/shop-department/handlers/addShop.js":
/*!*****************************************************!*\
  !*** ./modules/shop-department/handlers/addShop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Add a new shop in a departments grid
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var table = currentBtn.closest('.shops-table').find('tbody');
  var departmentId = currentBtn.data('department');
  var counter = parseInt(currentBtn.data('count'));
  var template = $('#shop-template').html().replace(new RegExp('%departmentId%', "g"), departmentId).replace(new RegExp('%index%', "g"), counter++);
  currentBtn.data('count', counter);
  table.append(template);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/fastSave.js":
/*!******************************************************!*\
  !*** ./modules/shop-department/handlers/fastSave.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Fast save for shop department
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var shopNamePrefix = 'shop';
  var departmentNamePrefix = 'department';
  var currentBtn = $(this);
  var fastSaveContainer = $('.fast-save-container');
  var shops = {};
  var department = {};
  fastSaveContainer.find('tbody tr.changed tr.info').each(function () {
    var depindex = $(this).closest('.department').index();
    var departmentFormData = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_1__["default"])($(this));

    for (var i in departmentFormData) {
      var itemName = "".concat(departmentNamePrefix, "[").concat(depindex, "][").concat(i, "]");
      department[itemName] = departmentFormData[i];
    }

    $(this).next('tr.shops').find('tbody.sortable tr').each(function (index) {
      var formData = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_1__["default"])($(this));

      for (var _i in formData) {
        var _itemName = "".concat(shopNamePrefix, "[").concat(departmentFormData.id, "][").concat(index, "][").concat(_i, "]");

        shops[_itemName] = formData[_i];
        shops["".concat(shopNamePrefix, "[").concat(departmentFormData.id, "][").concat(index, "][department]")] = departmentFormData.id;
      }
    });
  });
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(_objectSpread({}, shops, {}, department)).success(function (response) {
    $('.changed').each(function (index) {
      $(this).removeClass('changed');
    });
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/radioInput.js":
/*!********************************************************!*\
  !*** ./modules/shop-department/handlers/radioInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Radio input from checkbox
 * Because input[type=radio] did not work correctly
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentItem = $(this);
  var allItems = currentItem.closest('.table').find('.radio');
  allItems.prop('checked', false);
  allItems.removeClass('checked');
  currentItem.prop('checked', true);
  currentItem.addClass('checked');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/sortableDepartmentInit.js":
/*!********************************************************************!*\
  !*** ./modules/shop-department/handlers/sortableDepartmentInit.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
    group: 'department',
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      new Promise(function (resolve) {
        $(e.item).closest('.table').find('tr.department').each(function () {
          $(this).addClass('changed');
        });
        resolve({
          radio: $(e.item).find('.radio'),
          parent: $(e.item).closest('.table')
        });
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/sortableInit.js":
/*!**********************************************************!*\
  !*** ./modules/shop-department/handlers/sortableInit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
    group: 'shops',
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      new Promise(function (resolve) {
        $(e.item).closest('tr.department').addClass('changed');
        resolve({
          radio: $(e.item).find('.radio'),
          parent: $(e.item).closest('.table')
        });
      }).then(function (data) {
        if (data.parent.find('.radio.checked:gt(0)').length) {
          data.radio.removeClass('checked');
          data.radio.prop('checked', false);
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/listeners/showForm.js":
/*!*******************************************************!*\
  !*** ./modules/shop-department/listeners/showForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/shop-department/constants.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");





/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SHOP_DEPARTMENT_SHOW_FORM"], function () {
    /**
     * Preview
     */
    dropzoneInit(document.getElementById('dropzone'), document.getElementById('preview-url'));
    /**
     * Preview Small
     */

    dropzoneInit(document.getElementById('dropzone-small'), document.getElementById('preview-url-small'));
  });
});
/**
 * Dropzone Init
 *
 * @param {HTMLElement} dropzoneElement
 * @param {HTMLElement} previewUrlElement
 *
 * @returns {boolean}
 */

function dropzoneInit(dropzoneElement, previewUrlElement) {
  if (!dropzoneElement) {
    return false;
  }
  /**
   * Dropzone initialization
   */


  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    $(previewUrlElement).val('');
  }).cancel(function () {
    $(previewUrlElement).val('');
  }).success(function (file, response) {
    $(dropzoneElement).find('.dz-filename span').text(response.file_name);
    previewUrlElement.value = response.file_name;
  });
  /**
   * Set preview
   */

  if (previewUrlElement.value.length) {
    dropzoneBuilder.setPreview(previewUrlElement.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__["default"])(dropzoneElement.dataset.folder, previewUrlElement.value));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/module.js":
/*!*******************************************!*\
  !*** ./modules/shop-department/module.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addShop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addShop */ "./modules/shop-department/handlers/addShop.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/shop-department/handlers/fastSave.js");
/* harmony import */ var _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/radioInput */ "./modules/shop-department/handlers/radioInput.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/shop-department/listeners/showForm.js");
/* harmony import */ var modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/shop-department/handlers/sortableInit */ "./modules/shop-department/handlers/sortableInit.js");
/* harmony import */ var modules_shop_department_handlers_sortableDepartmentInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/shop-department/handlers/sortableDepartmentInit */ "./modules/shop-department/handlers/sortableDepartmentInit.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./modules/shop-department/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Dropzone init
 */

Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Radio buttons behavior
 */
.on('change', '.radio', _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Add next row to the dpa grid
 */
.on('input', 'input', function () {
  $(this).closest('tr.department').addClass('changed');
})
/**
 * Document ready
 */
.ready(function () {
  /**
   * Add class to checked radios
   */
  $('.radio[checked]').addClass('checked');
  /**
   * Add a new shop in a departments grid
   */

  $('.add-shop').click(_handlers_addShop__WEBPACK_IMPORTED_MODULE_0__["default"]);
  /**
   * Fast save
   */

  $('.fast-save').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__["default"]);
  /**
   * Make tr to sortable
   */

  $('.sortable').each(modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
  /**
   * Make tr to sortable
   */

  $('.sortable-department').each(modules_shop_department_handlers_sortableDepartmentInit__WEBPACK_IMPORTED_MODULE_5__["default"]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/styles.scss":
/*!*********************************************!*\
  !*** ./modules/shop-department/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/shop-releases/handlers/addNewRow.js":
/*!*****************************************************!*\
  !*** ./modules/shop-releases/handlers/addNewRow.js ***!
  \*****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the meal config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#release > tbody');
  var trLast = $('#release_template').html();
  var lastID = tbody.find("tr").last().find('.release_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%release%/g, i + incrementId));
    tbody.find('.select2').select2();
    tbody.find('.datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-releases/handlers/savePage.js":
/*!****************************************************!*\
  !*** ./modules/shop-releases/handlers/savePage.js ***!
  \****************************************************/
/*! exports provided: savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");


/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */

function savePage() {
  var route = $(this).data('route');
  var tbody = $('.release-save-container').find(".changed");
  var data = $('.release-save-container').find(".changed input, .changed select, .changed textarea").serializeArray();

  if (data.length === 0) {
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('POST').data(data).send();
  tbody.each(function (n, item) {
    $(item).removeClass('changed');
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-releases/module.js":
/*!*****************************************!*\
  !*** ./modules/shop-releases/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/shop-releases/handlers/addNewRow.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/shop-releases/handlers/savePage.js");


$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_1__["savePage"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-stats/module.js":
/*!**************************************!*\
  !*** ./modules/shop-stats/module.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).on('click', 'tr', function () {
  $(this).find('td').each(function () {
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).css('background', '#e7e7e7');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/sound/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#sound > tbody');
  var trLast = $('#sound_template').html();
  var lastID = tbody.find("tr").last().find('.sound_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%sound_id%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/handlers/saveSoundState.js":
/*!**************************************************!*\
  !*** ./modules/sound/handlers/saveSoundState.js ***!
  \**************************************************/
/*! exports provided: saveSoundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSoundState", function() { return saveSoundState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveSoundState() {
  var data = $('.sound-save-container').find(".changed input, .changed select").serializeArray();

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/module.js":
/*!*********************************!*\
  !*** ./modules/sound/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveSoundState */ "./modules/sound/handlers/saveSoundState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/sound/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the sound grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__["saveSoundState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/subtype-attributes/module.js":
/*!**********************************************!*\
  !*** ./modules/subtype-attributes/module.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/subtype-attributes/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/subtype-attributes/styles.scss":
/*!************************************************!*\
  !*** ./modules/subtype-attributes/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/tamatool/constants.js":
/*!***************************************!*\
  !*** ./modules/tamatool/constants.js ***!
  \***************************************/
/*! exports provided: TAMATOOL_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAMATOOL_SHOW_FORM", function() { return TAMATOOL_SHOW_FORM; });
var TAMATOOL_SHOW_FORM = 'TAMATOOL_SHOW_FORM';

/***/ }),

/***/ "./modules/tamatool/listeners/showForm.js":
/*!************************************************!*\
  !*** ./modules/tamatool/listeners/showForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/tamatool/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], self);
    $('.neighbor-activity-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/tamatool/module.js":
/*!************************************!*\
  !*** ./modules/tamatool/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/tamatool/listeners/showForm.js");



$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/constants.js":
/*!************************************!*\
  !*** ./modules/users/constants.js ***!
  \************************************/
/*! exports provided: SEARCH_USER_ASSETS, SUBMIT_USER_PART_FORM, DELETE_NEIGHBOR, ADD_NEIGHBOR, GET_NEIGHBORS, UPDATE_NEIGHBORS, NEIGHBOR_GRID_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_ASSETS", function() { return SEARCH_USER_ASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_USER_PART_FORM", function() { return SUBMIT_USER_PART_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NEIGHBOR", function() { return DELETE_NEIGHBOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEIGHBOR", function() { return ADD_NEIGHBOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEIGHBORS", function() { return GET_NEIGHBORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEIGHBORS", function() { return UPDATE_NEIGHBORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEIGHBOR_GRID_ID", function() { return NEIGHBOR_GRID_ID; });
var SEARCH_USER_ASSETS = 'SEARCH_USER_ASSETS';
var SUBMIT_USER_PART_FORM = 'SUBMIT_USER_PART_FORM';
var DELETE_NEIGHBOR = 'DELETE_NEIGHBOR';
var ADD_NEIGHBOR = 'ADD_NEIGHBOR';
var GET_NEIGHBORS = 'GET_NEIGHBORS';
var UPDATE_NEIGHBORS = 'UPDATE_NEIGHBORS';
var NEIGHBOR_GRID_ID = 'neighbor-grid';

/***/ }),

/***/ "./modules/users/handlers/addCollectible.js":
/*!**************************************************!*\
  !*** ./modules/users/handlers/addCollectible.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");



/**
 * Add comment
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])($('#collectible-form').find('input'));
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($('#add-collectible').attr('href')).method('POST').data({
    data: data
  }).success(function (resp) {
    if (resp.type === "success") {
      var form = $(resp.data);
      $('#' + resp.container).replaceWith(form);
      Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__["default"])('User collectible updated');
    }
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/addComment.js":
/*!**********************************************!*\
  !*** ./modules/users/handlers/addComment.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Add comment
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).closest('a').attr('href')).method('POST').data({
    description: $('[name="description"]').val()
  }).success(function (r) {
    if (r.status === true) {
      $('[name="description"]').val('');
      $('#user-comments').prepend('<tr><td>' + r.model.description + '</td><td>' + r.created_by + '</td><td>' + r.created_at + ' PST</td><td><a href="http://cms-dev.local/remove-comment/' + r.model.id + '" class="ajax-confirm-action" data-method="DELETE" data-header="Delete comment?" data-btn-name="Delete" data-btn-class="btn-danger btn-sm" data-dismiss="1" data-reload="1"><button class="btn btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</button></a></td></tr>');
    }
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changeMovePlacement.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/changeMovePlacement.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Synchronize move-placement-select selects
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var selectedStorage = $(this).val();
  $(this).parents('form').find('.move-placement-select').each(function () {
    if (selectedStorage != $(this).val()) {
      $(this).val(selectedStorage).change();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changePageLimit.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/changePageLimit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var modules_users_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/users/constants */ "./modules/users/constants.js");


/**
 * Set page limit
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var route = $(this).data('route') + '&page_limit=' + $(this).val();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('GET').success(function (response) {
    $("#".concat(modules_users_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_GRID_ID"])).replaceWith(response);
  }).send();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changePlacement.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/changePlacement.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change placement select in Add Assets block
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var placementName = $('#add-assets-block-placement-name');

  if ($(this).val() > 0) {
    placementName.hide();
  } else {
    placementName.show();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changeRandomNeighbors.js":
/*!*********************************************************!*\
  !*** ./modules/users/handlers/changeRandomNeighbors.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change mode for add neighbors
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var neighborsCount = $('#neighbors-count');

  if ($(this).is(':checked')) {
    neighborsCount.removeAttr('disabled');
  } else {
    neighborsCount.attr('disabled', 'disabled');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/hidePlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/hidePlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide assets in placement
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.toggleClass('hide');
  currentElement.siblings('.load-assets').toggleClass('hide');
  $('#asset-container-' + currentElement.data('placement')).html('');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/loadPlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/loadPlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * PLACEMENT_ASSETS_ROUTE - it is a global object
 * Inited in user/edit.blade.php
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  var placement = currentElement.data('placement');
  currentElement.toggleClass('hide');
  currentElement.siblings('.hide-assets').toggleClass('hide');
  loadPart(PLACEMENT_ASSETS_ROUTE + '&placement=' + placement, $('#asset-container-' + placement));
  return false;
});
/**
 * Load part for edit user page
 */

function loadPart(action, element) {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    var items = $(response);
    items.find('.list-thumbnail').popover({
      container: 'body',
      html: true,
      trigger: 'hover',
      placement: 'right',
      content: function content() {
        return '<img src="' + $(this).data('full') + '">';
      }
    });
    element.replaceWith(items);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/selectRows.js":
/*!**********************************************!*\
  !*** ./modules/users/handlers/selectRows.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Select rows
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var countSelector = $(this).parents('td, th').find('.count-for-select');
  var rowsForSelect = $(this).parents('table').find('.for-select');
  var countForSelect = countSelector.val() || 0;

  if (countForSelect === 0) {
    countForSelect = rowsForSelect.length;
    countSelector.val(countForSelect);
  }

  if ($(this).is(':checked')) {
    rowsForSelect.each(function () {
      if (countForSelect > 0) {
        this.checked = true;
        countForSelect--;
      }
    });
  } else {
    rowsForSelect.each(function () {
      this.checked = false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/updateNeighbors.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/updateNeighbors.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var modules_users_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/users/constants */ "./modules/users/constants.js");



/**
 * Update neighbor grid
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_users_constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_NEIGHBORS"], function (response, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_users_constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_NEIGHBORS"], self);

    if (response.type == 'success') {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]($(_this).closest('form').attr('action')).method('GET').success(function (response) {
        $("#".concat(modules_users_constants__WEBPACK_IMPORTED_MODULE_2__["NEIGHBOR_GRID_ID"])).replaceWith(response);
      }).send();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/addNeighbor.js":
/*!************************************************!*\
  !*** ./modules/users/listeners/addNeighbor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as active
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/deleteNeighbor.js":
/*!***************************************************!*\
  !*** ./modules/users/listeners/deleteNeighbor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as deleted
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/searchNeighbor.js":
/*!***************************************************!*\
  !*** ./modules/users/listeners/searchNeighbor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Update neighbor grid in searching
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["GET_NEIGHBORS"], function (resp) {
    $("#".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_GRID_ID"])).replaceWith(resp);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/searchUserAssets.js":
/*!*****************************************************!*\
  !*** ./modules/users/listeners/searchUserAssets.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Search user assets
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SEARCH_USER_ASSETS"], function (data) {
    $('#search-assets-container').replaceWith(data);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/submitUserPartForm.js":
/*!*******************************************************!*\
  !*** ./modules/users/listeners/submitUserPartForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");



/**
 * Submit user part form
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_2__["SUBMIT_USER_PART_FORM"], function (resp) {
    var form = $(resp.data);
    $('#' + resp.container).replaceWith(form);
    form.find('.select2').select2();
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__["default"])('User data updated');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/module.js":
/*!*********************************!*\
  !*** ./modules/users/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/searchUserAssets */ "./modules/users/listeners/searchUserAssets.js");
/* harmony import */ var _listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/submitUserPartForm */ "./modules/users/listeners/submitUserPartForm.js");
/* harmony import */ var _listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/deleteNeighbor */ "./modules/users/listeners/deleteNeighbor.js");
/* harmony import */ var _listeners_searchNeighbor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/searchNeighbor */ "./modules/users/listeners/searchNeighbor.js");
/* harmony import */ var _listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners/addNeighbor */ "./modules/users/listeners/addNeighbor.js");
/* harmony import */ var _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/loadPlacementAssets */ "./modules/users/handlers/loadPlacementAssets.js");
/* harmony import */ var _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/hidePlacementAssets */ "./modules/users/handlers/hidePlacementAssets.js");
/* harmony import */ var _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/changePlacement */ "./modules/users/handlers/changePlacement.js");
/* harmony import */ var _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handlers/changeRandomNeighbors */ "./modules/users/handlers/changeRandomNeighbors.js");
/* harmony import */ var _handlers_changeMovePlacement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handlers/changeMovePlacement */ "./modules/users/handlers/changeMovePlacement.js");
/* harmony import */ var _handlers_selectRows__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handlers/selectRows */ "./modules/users/handlers/selectRows.js");
/* harmony import */ var _handlers_updateNeighbors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handlers/updateNeighbors */ "./modules/users/handlers/updateNeighbors.js");
/* harmony import */ var _handlers_changePageLimit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handlers/changePageLimit */ "./modules/users/handlers/changePageLimit.js");
/* harmony import */ var _handlers_addComment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers/addComment */ "./modules/users/handlers/addComment.js");
/* harmony import */ var _handlers_addCollectible__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./handlers/addCollectible */ "./modules/users/handlers/addCollectible.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles.scss */ "./modules/users/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_15__);
















/**
 * Search user assets listener
 */

Object(_listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__["default"])();
/**
 * Submit user part form listener
 */

Object(_listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
/**
 * Delete Neighbor
 */

Object(_listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Add Neighbor
 */

Object(_listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_4__["default"])();
/**
 * Search Neighbors
 */

Object(_listeners_searchNeighbor__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Load assets in placement
 */
.on('click', '.load-assets', _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_5__["default"])
/**
 * Change placement in Add Assets block
 */
.on('change', '#placement-for-asset', _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_7__["default"])
/**
 * Change mode for add neighbors
 */
.on('change', '#is-random-neighbors', _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_8__["default"])
/**
 * Hide assets in placement
 */
.on('click', '.hide-assets', _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Auto select rows
 */
.on('change', '.select-rows', _handlers_selectRows__WEBPACK_IMPORTED_MODULE_10__["default"])
/**
 * Synchronize move-placement-select selects
 */
.on('change', '.move-placement-select', _handlers_changeMovePlacement__WEBPACK_IMPORTED_MODULE_9__["default"])
/**
 * Delete neighbor request
 */
.on('click', '.delete-neighbor-request, #add-neighbors', _handlers_updateNeighbors__WEBPACK_IMPORTED_MODULE_11__["default"])
/**
 * Set page limit
 */
.on('change', '.neighbor-page-limit', _handlers_changePageLimit__WEBPACK_IMPORTED_MODULE_12__["default"])
/**
 * Add comment
 */
.on('click', '#add-comment', _handlers_addComment__WEBPACK_IMPORTED_MODULE_13__["default"])
/**
 * Add collectible
 */
.on('click', '#add-collectible', _handlers_addCollectible__WEBPACK_IMPORTED_MODULE_14__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/styles.scss":
/*!***********************************!*\
  !*** ./modules/users/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9hcHAvbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsQ29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hZGRFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hamF4UGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9jb25maXJtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9tb2RhbERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvcGFnZUxpbWl0LmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIG1vZHVsZXMoLiopbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzPzhmYmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hZGQtbWUvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzLWxvZy9zdHlsZXMuc2Nzcz83NTZlIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY29weUFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9kb3dubG9hZEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9tYXJrQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hd2FyZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvZG93bmxvYWRBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9oaWRlQXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVUYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3NlbGVjdFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3Nob3dBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd1Rhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvc3R5bGVzLnNjc3M/NWY0OCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2Nzcz82NzA3Iiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9hZGRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL2hhbmRsZXJzL2RlbGV0ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9zdHlsZS5zY3NzP2NlMmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9kZXBsb3lTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L3N0eWxlcy5zY3NzP2ZkMjMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzPzg0M2MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdXJjaGFzZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdXJjaGFzZS9zdHlsZS5zY3NzPzA1ZGUiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9kcm9wem9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9tYXJrQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9hZGRTaG9wLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3JhZGlvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVEZXBhcnRtZW50SW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9zdHlsZXMuc2Nzcz81ZTVhIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2Nzcz9iNzI5Iiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29sbGVjdGlibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9hZGRDb21tZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlTW92ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVBhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvc2VsZWN0Um93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3VwZGF0ZU5laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9hZGROZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zZWFyY2hOZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL3N0eWxlcy5zY3NzP2Q5Y2MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3M/MmI1NCJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsIl9hZnRlckJ1aWxkIiwib2ZmIiwiX29uQ2xvc2UiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJwYXJlbnRCdXR0b24iLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJjbG9zZXN0Iiwic2VyaWFsaXplQXJyYXkiLCJwYXJzZUludCIsInJlbG9hZCIsImRpc21pc3MiLCJjdXJyZW50QnRuIiwic2F2ZWRJdGVtIiwiYXR0ciIsImdldEZvcm1EYXRhIiwiQ09OVEFJTkVSX1NFTEVDVE9SIiwiUEFHRV9TQVZFRCIsIlVQREFURV9TQVZFX0FMTF9CVVRUT04iLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRhdGVGb3JtYXQiLCJkYXRlUmFuZ2VJbnB1dHMiLCJzZWxlY3RlZE9wdGlvbiIsImRhdGVGcm9tIiwiZGF0ZVRvIiwic2VsZWN0ZWRWYWx1ZSIsInZhbCIsImNzcyIsInZpc2liaWxpdHkiLCJoZWlnaHQiLCJkYXRlRnJvbVZhbHVlIiwiZGF0ZVRvVmFsdWUiLCJtb21lbnQiLCJmb3JtYXQiLCJzdWJ0cmFjdCIsImRheSIsInN0YXJ0T2YiLCJlbmRPZiIsImRvY3VtZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZWFjaCIsInJlbW92ZUF0dHIiLCJyZWFkeSIsInRhYmxlc29ydGVyIiwic3RpY2t5VGFibGVIZWFkZXJzIiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwicGFnZUxpbWl0IiwiZGF0ZVJhbmdlIiwiZmlsdGVyRGF0ZVJhbmdlIiwiY2hhbmdlIiwiaW5pdFN0aWNreSIsImZhc3RTYXZlUGFnZSIsImFmdGVyQnVpbGQiLCJvbkNsb3NlIiwiY2xvc2VFdmVudCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmVudCIsImlkIiwiY2FuUmVsb2FkIiwiYnV0dG9uIiwiZGF0YVJlbG9hZCIsInJvb3RGb2xkZXIiLCJmaWxlTmFtZSIsImdldFN1YkZvbGRlciIsImZvcm0iLCJmb3JtRGF0YSIsImN1cnJlbnRJdGVtIiwicHJvcCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwialF1ZXJ5IiwiU0VOVFJZX0RTTiIsIlJhdmVuIiwieGhyIiwiZG9tIiwic2VudHJ5IiwiaW5zdGFsbCIsInBhdGgiLCJwYXRobmFtZSIsInNwbGl0IiwibW9kdWxlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJtb2R1bGVJdGVtcyIsInN1Yk1vZHVsZXMiLCJzdWJzY3JpYmUiLCJBV0FSRF9DUkVBVEUiLCJzZWxmIiwidW5zdWJzY3JpYmUiLCJlZGl0QnRuIiwidGVtcGxhdGVJZCIsInRlbXBsYXRlUGxhY2Vob2xkZXIiLCJhd2FyZF9pZCIsImZpZWxkTmFtZSIsIkFXQVJEX0NSRUFURUQiLCJBV0FSRF9ERUxFVEUiLCJjcmVhdGVCdG4iLCJjaGlsZHJlbiIsIkVWRU5UX05BTUUiLCJkcm9wem9uZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpZXdVUkwiLCJkcm9wem9uZUJ1aWxkZXIiLCJEcm9wem9uZUJ1aWxkZXIiLCJzZXRVcGxvYWRVcmwiLCJjYW5jZWwiLCJmaWxlX25hbWUiLCJ2YWx1ZSIsInNldFByZXZpZXciLCJnZXRGaWxlUGF0aCIsImZvbGRlciIsImJ1aWxkIiwic2F2ZUFsbEJ1dHRvbiIsImNvdW50ZXIiLCJjb3VudCIsInNob3ciLCJoaWRlIiwiQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQiLCJERUxUQV9USU1FX0FUVFJJQlVURSIsInRvZ2dsZUNsYXNzIiwiY3VycmVudEVsZW1lbnQiLCJSZXF1ZXN0QnVpbGRlciIsImluZGV4IiwiXyIsIml0ZW0iLCJ1cGRhdGVJbmRleGVzIiwiY3VycmVudExpIiwiZGVsdGFUaW1lSGlkZGVuIiwiZGVsdGFUaW1lRGlzcGxheSIsInRpbWVUeXBlIiwiY29sbGFwc2VTdGF0ZSIsImNvbGxhcHNlU3RhdGVzIiwicmVtb3ZlQWN0aW9uVHlwZVN0YXRlIiwic2F2ZVN0YXRlIiwicmVzcCIsIkFOTk9VTkNFTUVOVFNfU0hPV19GT1JNIiwiZGF0ZXRpbWVwaWNrZXIiLCJhdXRvY2xvc2UiLCJhd2FyZENyZWF0ZSIsImJpbmQiLCJfdGhpcyIsImF3YXJkRGVsZXRlIiwiQ0xPU0VfQVdBUkRfTU9EQUwiLCJzaG93Rm9ybSIsIm5leHQiLCJzZXRTdWJ0eXBlcyIsInN1YnR5cGUiLCJhc3NldEZvcm1TdWJ0eXBlIiwiYXNzZXRGb3JtQWN0aW9uVHlwZSIsImFzc2V0Rm9ybUNvbGxlY3Rpb24iLCJwcmljZXMiLCJlbXB0eSIsInNlbGVjdDIiLCJTVUJfVFlQRVMiLCJlbGVtZW50IiwiY29weUFzc2V0cyIsImFzc2V0SWRzRmllbGQiLCJ3aXRoTmFtZSIsImFzc2V0SWRzIiwibiIsImFzc2V0SWQiLCJhc3NldE5hbWUiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImRvd25sb2FkQXNzZXRzIiwiY29sbGVjdGlvbl9pZCIsInBhcmVudENvbnRhaW5lciIsImNoYW5nZVR5cGUiLCJnZXRMYXN0Q29sbGVjdGlvbk51bWJlciIsImN1cnJlbnRUZCIsInVwZGF0ZVNhdmVBbGxCdXR0b24iLCJCQU5ORVJfU0hPV19GT1JNIiwiVFlQRV9TRUxFQ1RfSUQiLCJzZWxlY3RlZEluZGV4Iiwib3B0aW9ucyIsInNlbGVjdGVkRWxlbWVudCIsImRyb3Bab25lSW5pdCIsImNvcHlBZHAiLCJhZHBJZHNGaWVsZCIsImFkcElkcyIsImFkcElkIiwiZG93bmxvYWRBZHAiLCJoaWRlQXJjaGl2ZSIsImhpZGVUYXNrcyIsInNlbGVjdFJvdyIsImNoZWNrYm94IiwiaXMiLCJzaG93QXJjaGl2ZSIsImFjdGlvbiIsInNob3dUYXNrcyIsIkNBU0giLCJDT0lOIiwiQVNTRVQiLCJzb3VyY2VWYWwiLCJtYXRjaGVyIiwicGFyYW1zIiwiaW5BcnJheSIsIndyYXBwZXIiLCJnZXRTZWxlY3Rpb24iLCJDT0xMRUNUSU9OX1NIT1dfRk9STSIsImFzc2V0UHJldmlld1RlbXBsYXRlIiwiYXNzZXRzIiwiY3VycmVudEFzc2V0IiwicHJldmlld191cmwiLCJTb3J0YWJsZSIsImdyb3VwIiwicmVtb3ZlQ2xvbmVPbkhpZGUiLCJvbkVuZCIsInBvc2l0aW9uIiwibWFya0lucHV0QXNDaGFuZ2VkIiwic29ydGFibGVJbml0IiwiaGlkZUFkZGl0aW9uYWxSb3dzIiwiYWRkUm93IiwiYWRkX2NvdW50ZXIiLCJ0Ym9keSIsInRyTGFzdCIsImxhc3RJRCIsImxhc3QiLCJpbmNyZW1lbnRJZCIsImkiLCJkZWxldGVSb3ciLCJyb3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJhZGROZXdSb3ciLCJsYXN0SURTIiwiZmlyc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJtaW5WaWV3Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImRlcGxveVN0YXR1cyIsIkRFUExPWV9TVEFUVVNfUk9VVEUiLCJpc0FjdGl2ZSIsInNldFRpbWVvdXQiLCJjaGFuZ2VUYWIiLCJkaXJlY3Rpb24iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2hvd0RlcGVuZGVuY3kiLCJjdXJyZW50Q29uZmlnIiwiYWRkTW9kZSIsIm9uZUxldmVsU2hvdyIsImNvbmZpZ05hbWUiLCJsZXZlbCIsIkRFUExPWV9ERVBFTkRTIiwiY29uZmlnQmxvY2siLCJkZXBlbmRDb25maWdOYW1lIiwic2hvd0RlcGVuZGVuY3lQb3B1cCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRDb25maWdJZCIsImlkcyIsInJvb3RMZXZlbFNob3ciLCJpZFJlc3BvbnNlIiwidGV4dENsYXNzIiwiaXNSZWN1cnNpb24iLCJnZXREZXBsb3lNb2RlbElkcyIsIkRFUExPWV9NT0RFTF9JRFNfUk9VVEUiLCJBQ1RJVkVfRElSRUNUSU9OIiwiY2hlY2tlZCIsInNhdmVEcGFTdGF0ZSIsImxhc3RSb3ciLCJjb2xvcnBpY2tlciIsImNoYW5nZVJvd0luZGV4Iiwicm93SW5kZXgiLCJvbGROYW1lIiwibmV3TmFtZSIsImluZGV4T2YiLCJEWUVfQ09OVEFJTkVSX1NFTEVDVE9SIiwibWFya0NoYW5nZWRUciIsImR5ZVNhdmVQYWdlIiwiR0lGVF9XUkFQX1JPV19BRERFRCIsImN1cnJlbnRJbnB1dCIsImFzc2V0SUQiLCJjdXJyZW50QXNzZXREdXBsaWNhdGUiLCJlcnIiLCJwb3NpdGlvblVwZGF0ZSIsImJ1dHRvblVybCIsInBhZ2UiLCJwYWdlX2xpbWl0IiwiYXNzZXRDaGFuZ2VkIiwicmVtb3ZlUm93Iiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsInByZXBlbmQiLCJzYXZlTG9jYWxpemF0aW9uU3RhdGUiLCJjdXJyZW50S2V5IiwiY3VycmVudEtleUR1cGxpY2F0ZSIsInNhdmVNYWdpY1N0YXRlIiwibWFrZXVwX2tpdF9pZCIsImdldExhc3RNYWtldXBLaXRJRCIsIk1BS0VVUF9LSVRfU0hPV19GT1JNIiwiaW5ncmVkaWVudERlbGV0ZSIsIm1lYWxEZWxldGUiLCJzYXZlTWVhbFN0YXRlIiwiTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNIiwiVFJBU0giLCJUUkFTSF9GSUVMRFNfSUQiLCJTRUxFQ1RfSUQiLCJ0cmFzaEZpZWxkcyIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInByZWZpeCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicm91bmQiLCJyYXdWYWx1ZSIsInByb2R1Y3RQcmljZSIsInByaWNlSW5pdCIsIm1heElkIiwibmV3TGVuZ3RoIiwidHJJZCIsIm5ld1JvdyIsIm5ld1Jvd0h0bWwiLCJkZWZhdWx0VmFsdWUiLCJnZXQiLCJvdXRlckhUTUwiLCJhZnRlciIsInByZXZpZXdIaWRkZW5JbnB1dCIsInNhdmVQYWdlIiwic2F2ZVJvdyIsInJvd1RvU2F2ZSIsInIiLCJjb25maXJtIiwiZGF0YVR5cGUiLCJqcVhIUiIsImV4Y2VwdGlvbiIsImVycm9yS2V5IiwibWVzc2FnZUtleSIsImF1dG9EaXNjb3ZlciIsImRyb3B6b25lSW5pdCIsInNhdmVCdXR0b24iLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJzaG9wTmFtZVByZWZpeCIsImRlcGFydG1lbnROYW1lUHJlZml4IiwiZmFzdFNhdmVDb250YWluZXIiLCJzaG9wcyIsImRlcGFydG1lbnQiLCJkZXBpbmRleCIsImRlcGFydG1lbnRGb3JtRGF0YSIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJyYWRpbyIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzb3J0YWJsZURlcGFydG1lbnRJbml0Iiwic2F2ZVNvdW5kU3RhdGUiLCJUQU1BVE9PTF9TSE9XX0ZPUk0iLCJTRUFSQ0hfVVNFUl9BU1NFVFMiLCJTVUJNSVRfVVNFUl9QQVJUX0ZPUk0iLCJERUxFVEVfTkVJR0hCT1IiLCJBRERfTkVJR0hCT1IiLCJHRVRfTkVJR0hCT1JTIiwiVVBEQVRFX05FSUdIQk9SUyIsIk5FSUdIQk9SX0dSSURfSUQiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm1vZGVsIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfYXQiLCJzZWxlY3RlZFN0b3JhZ2UiLCJwbGFjZW1lbnROYW1lIiwibmVpZ2hib3JzQ291bnQiLCJzaWJsaW5ncyIsInBsYWNlbWVudCIsImxvYWRQYXJ0IiwiUExBQ0VNRU5UX0FTU0VUU19ST1VURSIsIml0ZW1zIiwicG9wb3ZlciIsImNvdW50U2VsZWN0b3IiLCJyb3dzRm9yU2VsZWN0IiwiY291bnRGb3JTZWxlY3QiLCJuZWlnaGJvcl9pZCIsInN0YXR1c190ZXh0Iiwic2VhcmNoVXNlckFzc2V0cyIsInN1Ym1pdFVzZXJQYXJ0Rm9ybSIsImRlbGV0ZU5laWdoYm9yIiwiYWRkTmVpZ2hib3IiLCJzZWFyY2hOZWlnaGJvciIsImxvYWRQbGFjZW1lbnRBc3NldHMiLCJjaGFuZ2VQbGFjZW1lbnQiLCJjaGFuZ2VSYW5kb21OZWlnaGJvcnMiLCJoaWRlUGxhY2VtZW50QXNzZXRzIiwic2VsZWN0Um93cyIsImNoYW5nZU1vdmVQbGFjZW1lbnQiLCJ1cGRhdGVOZWlnaGJvcnMiLCJjaGFuZ2VQYWdlTGltaXQiLCJhZGRDb21tZW50IiwiYWRkQ29sbGVjdGlibGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QkwsQ0E4QlEsUUE5QlIsRUE4QmtCLHdCQTlCbEIsRUE4QjRDc2dCLHFFQTlCNUM7QUFnQ0k7OztBQWhDSixDQW1DS3RnQixFQW5DTCxDQW1DUSxPQW5DUixFQW1DaUIsMENBbkNqQixFQW1DNkR1Z0Isa0VBbkM3RDtBQW9DSTs7O0FBcENKLENBdUNNdmdCLEVBdkNOLENBdUNTLFFBdkNULEVBdUNtQixzQkF2Q25CLEVBdUMyQ3dnQixrRUF2QzNDO0FBeUNJOzs7QUF6Q0osQ0E0Q0t4Z0IsRUE1Q0wsQ0E0Q1EsT0E1Q1IsRUE0Q2lCLGNBNUNqQixFQTRDaUN5Z0IsNkRBNUNqQztBQThDSTs7O0FBOUNKLENBaURLemdCLEVBakRMLENBaURRLE9BakRSLEVBaURpQixrQkFqRGpCLEVBaURxQzBnQixpRUFqRHJDLEU7Ozs7Ozs7Ozs7OztBQzNDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qKlxuICogQmFzZSBzaXplc1xuICpcbiAqIEB0eXBlIHt7c206IHN0cmluZywgbGc6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBjb25zdCBTSVpFUyA9IHtcbiAgICBzbTogJ3NtJyxcbiAgICBtZDogJ21kJyxcbiAgICBsZzogJ2xnJyxcbn07XG4iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuXG4vKipcbiAqIExvYWRpbmcgdGV4dFxuICogSXQgd2lsbCBiZSBzaG93biBhZnRlciB0aGUgc3RhcnQgb2YgaW1hZ2UgdXBsb2FkaW5nXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgTE9BRElOR19URVhUID0gJ0xvYWRpbmcuLi4nO1xuXG4vKipcbiAqIERyb3B6b25lIGJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkcm9wem9uZUNvbnRhaW5lclxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihkcm9wem9uZUNvbnRhaW5lciwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9kcm9wem9uZUNvbnRhaW5lciA9IGRyb3B6b25lQ29udGFpbmVyO1xuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24gPSAkKGRyb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHJvcHpvbmUtY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVybCB0byB1cGxvYWRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzZXRVcGxvYWRVcmwodXJsKSB7XG4gICAgICAgIHRoaXMuX3VwbG9hZFVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGRlZmF1bHQgcHJldmlldyBpbWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0UHJldmlldyhuYW1lLCB1cmwpIHtcbiAgICAgICAgdGhpcy5fcHJldmlldyA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGVycm9yIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGVycm9yKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbmNlbCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHN1Y2Nlc3MgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3VjY2VzcyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9zdWNjZXNzQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZHJvcHpvbmVcbiAgICAgKiBAcmV0dXJucyB7RHJvcHpvbmV9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBfZHJvcHpvbmVCdWlsZGVyID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCBhZnRlciBmYWlsXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUZhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnZHotc3RhcnRlZCcpO1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmR6LXByZXZpZXcnKS5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cGxvYWRVcmwsXG4gICAgICAgICAgICB0aHVtYm5haWxXaWR0aDogbnVsbCxcbiAgICAgICAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS8qJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1jc3JmLXRva2VuJzogQ1NSRl9UT0tFTlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2V0IGN1cnJlbnQgaW1hZ2UgaW4gdGhlIGRyb3B6b25lIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcgJiYgISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInRodW1ibmFpbFwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQWRkZWQgZmlsZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChMT0FESU5HX1RFWFQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJlcnJvclwiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFN1Y2Nlc3MgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhciBidXR0b24gaGFuZGxlclxuICAgICAgICAgKiBDbGVhciBmaWxlIGluZm8gaW4gZHJvcHpvbmVcbiAgICAgICAgICovXG4gICAgICAgIGlmICghIXRoaXMuX2NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gbmV3IERyb3B6b25lKHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyLCB7Li4uY29uZmlnLCAuLi50aGlzLl9jb25maWd9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3JIYW5kbGVyJztcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiLi9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEhUVFAgUmVxdWVzdCBCdWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuX21ldGhvZCA9ICdnZXQnO1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gc3VjY2Vzc0hhbmRsZXI7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgbWV0aG9kKG1ldGhvZCkge1xuICAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVycm9yKGZuKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3VjY2Vzcyhmbikge1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcGxldGUoZm4pIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZW5kKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLl9tZXRob2QsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhLFxuICAgICAgICAgICAgZXJyb3I6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFyZXNwb25zZS5yZXNwb25zZUpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IocmVzcG9uc2UucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5fc3VjY2VzcyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiB0aGlzLl9jb21wbGV0ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB0aGUgcm91dGVcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5yb3V0ZSkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gcmVzcG9uc2Uucm91dGU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbGwgbWVzc2FnZXNcbiAgICAgKi9cbiAgICBpZighIXJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZS5lcnJvcnMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZS5lcnJvcnNba2V5XS5tYXAoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9SZXF1ZXN0QnVpbGRlcic7XG4iLCJpbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuXG4vKipcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5U3VjY2VzcyhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vbW9kYWwnO1xuaW1wb3J0ICcuL29ic2VydmVyJztcbmltcG9ydCAnLi9odHRwJztcbiIsImNvbnN0IG1vZGFsc0NvbnRhaW5lciA9ICQoJ2JvZHknKTtcblxuY29uc3QgTU9EQUxfU0laRVMgPSB7XG4gICAgc206ICdtb2RhbC1zbScsXG4gICAgbWQ6ICdtb2RhbC1tZCcsXG4gICAgbGc6ICdtb2RhbC1sZycsXG59O1xuXG4vKipcbiAqIFVuaXF1ZSBpbmRleCBvZiB0aGUgbW9kYWxcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbW9kYWxJbmRleCA9IDA7XG5cbi8qKlxuICogQ291bnRlciBvZiB0aGUgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsQ291bnRlciA9IDA7XG5cbi8qKlxuICogTW9kYWwgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbW9kYWxJbmRleCsrO1xuICAgICAgICB0aGlzLl9pZCA9ICdtb2RhbHMtY29udGFpbmVyLWl0ZW0tJyArIG1vZGFsSW5kZXg7XG4gICAgfVxuXG4gICAgc2l6ZShzaXplKSB7XG4gICAgICAgIGlmICghIU1PREFMX1NJWkVTW3NpemVdKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gTU9EQUxfU0laRVNbc2l6ZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkZXIoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBib2R5KGJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZm9vdGVyKGZvb3Rlcikge1xuICAgICAgICB0aGlzLl9mb290ZXIgPSBmb290ZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YXNldChkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2RhdGFzZXQgPSBkYXRhc2V0O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9nZXRJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIF9nZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9zaXplID8gdGhpcy5fc2l6ZSA6IE1PREFMX1NJWkVTLm1kO1xuICAgIH1cblxuICAgIF9nZXRIZWFkZXIoKSB7XG4gICAgICAgIGlmICghIXRoaXMuX2hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JHt0aGlzLl9oZWFkZXJ9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBfZ2V0Rm9vdGVyKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fZm9vdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoYFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGApKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9nZXRCb2R5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fYm9keSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj48L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYmVmb3JlIGJ1aWxkIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBiZWZvcmVCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9iZWZvcmVCdWlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYWZ0ZXJCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2FmdGVyQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGFmdGVyIGNsb3NlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvbkNsb3NlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfb25DbG9zZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcbiAgICAgICAgaWYgKCEhdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBodG1sID0gJChgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHsgdGhpcy5fZ2V0SUQoKSB9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCAke3RoaXMuX2dldFNpemUoKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBiZWZvcmVCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGQoKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0SGVhZGVyKCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEJvZHkoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xuXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RhbENvdW50ZXIrKztcblxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYWxsIHRoZSBvbkNsb3NlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tb2RhbCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgY291bnRlciBvZiBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxDb3VudGVyKCkge1xuICAgIHJldHVybiBtb2RhbENvdW50ZXI7XG59XG4iLCJpbXBvcnQgJy4vTW9kYWxCdWlsZGVyJ1xuaW1wb3J0ICcuL21vZGFsQ29uZmlybSdcbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5cbi8qKlxuICogTW9kYWwgY29uZmlybVxuICpcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsQ29uZmlybShtZXNzYWdlLCBjYWxsYmFjaykge1xuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihtZXNzYWdlKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiBjYWxsYmFja1xuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG59XG4iLCIvKipcbiAqIE5vdGlmeSBoZWxwZXJcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UsIHR5cGUpIHtcbiAgICAkLm5vdGlmeSh7bWVzc2FnZTogbWVzc2FnZX0se1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB6X2luZGV4OiAxMDUxXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBub3RpZnkobWVzc2FnZSwgJ2RhbmdlcicpO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdzdWNjZXNzJyk7XG59XG4iLCIvKipcbiAqIEV2ZW50IG9ic2VydmVyXG4gKi9cbmNsYXNzIEV2ZW50T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdzdWJzY3JpYmUnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2ggKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2xvZygnZGlzcGF0Y2gnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihkYXRhLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUgKGV2ZW50LCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl9sb2coJ3Vuc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBpZighIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERlbGV0ZSBhbGwgc3Vic2NyaWJlcnNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcbiAgICB9XG59XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEV2ZW50T2JzZXJ2ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XG4iLCJpbXBvcnQgJy4vRXZlbnRPYnNlcnZlcic7XG4iLCIvKipcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXG4gKlxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxuICovXG5leHBvcnQgY2xhc3MgU2F2ZWRJdGVtTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4vKipcbiAqIEFkZCBlbWJlZCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGlkUGxhY2Vob2xkZXIgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2lkcGxhY2Vwb2xkZXInKTtcblxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJywgKytyb3dJZCk7XG5cbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XG4gICAgY29uc3QgZW1iZWRCbG9ja0lkID0gcm93SWQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KTtcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcblxuICAgIGlmICghIWlkUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcbiAgICB9XG5cbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50ID0gY3VycmVudEJ1dHRvbi5kYXRhKCdldmVudCcpO1xuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcbiAgICAgICAgICAgIGVtYmVkQmxvY2tJZDogZW1iZWRCbG9ja0lkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24udHJpZ2dlcignYWlfYW5pbWF0aW9uJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICpBamF4IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygnLmFqYXgtcGFnaW5hdGlvbicpLmRhdGEoJ2NvbnRhaW5lcicpO1xuICAgXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG4gICAgY29uc3QgcGFyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihkYXRhU2V0LmhlYWRlcilcbiAgICAgICAgLmZvb3RlcihcbiAgICAgICAgICAgICQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAoZGF0YVNldC5idG5DbGFzcyB8fCAnYnRuLXNtIGJ0bi1zdWNjZXNzJykgKyAnIGJ0bicsXG4gICAgICAgICAgICAgICAgJ3RleHQnOiBkYXRhU2V0LmJ0bk5hbWUgfHwgJ0NvbmZpcm0nLFxuICAgICAgICAgICAgICAgICdjbGljayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTZXQuaGFzT3duUHJvcGVydHkoJ3dpdGhGb3JtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXcgaHR0cCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZGF0YShnZXRGb3JtRGF0YShzYXZlZEl0ZW0pKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IFBBR0VfU0FWRUQgPSAnUEFHRV9TQVZFRCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1NBVkVfQUxMX0JVVFRPTiA9ICdVUERBVEVfU0FWRV9BTExfQlVUVE9OJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChDT05UQUlORVJfU0VMRUNUT1IpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE1hcmsgZm9ybSdzIGVsZW1lbnRzIGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7XG4gICAgY29uc3QgZGF0ZVJhbmdlSW5wdXRzID0gJCgnI2RhdGUtcmFuZ2UtaW5wdXRzJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKTtcbiAgICBjb25zdCBkYXRlRnJvbSA9IGRhdGVSYW5nZUlucHV0cy5maW5kKCcuZmlsdGVyLWZyb20nKTtcbiAgICBjb25zdCBkYXRlVG8gPSBkYXRlUmFuZ2VJbnB1dHMuZmluZCgnLmZpbHRlci10bycpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgIGRhdGVSYW5nZUlucHV0cy5jc3Moe1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2luaXRpYWwnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0ZUZyb21WYWx1ZSA9ICcnO1xuICAgICAgICBsZXQgZGF0ZVRvVmFsdWUgICA9ICcnO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gZGF0ZVRvVmFsdWUgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5ZXN0ZXJkYXknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LXdlZWsnOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoMSkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoNykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtd2Vlayc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLmRheSgtNikuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoMCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VycmVudC1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cy1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsYXN0LXNldmVuJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGFzdC10aGlydHknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZUZyb20udmFsKGRhdGVGcm9tVmFsdWUpO1xuICAgICAgICBkYXRlVG8udmFsKGRhdGVUb1ZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vZmFzdFNhdmVcIjtcbmltcG9ydCBhZGRFbWJlZCBmcm9tIFwiLi9hZGRFbWJlZFwiO1xuaW1wb3J0IHJlbW92ZUVtYmVkIGZyb20gXCIuL3JlbW92ZUVtYmVkXCI7XG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tIFwiLi9zdWJtaXRGb3JtXCI7XG5pbXBvcnQgYWpheFBhZ2luYXRpb24gZnJvbSBcIi4vYWpheFBhZ2luYXRpb25cIjtcbmltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcIi4vY29uZmlybU1vZGFsXCI7XG5pbXBvcnQgcGFnZUxpbWl0IGZyb20gXCIuL3BhZ2VMaW1pdFwiO1xuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcbmltcG9ydCBmaWx0ZXJEYXRlUmFuZ2UgZnJvbSBcImhhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZVwiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSwge0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWR9IGZyb20gXCIuL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHRhYmxlU29ydGVyIGZyb20gXCJ0YWJsZXNvcnRlclwiO1xuaW1wb3J0IHN0aWNreUhlYWRlcnMgZnJvbSBcInN0aWNreS10YWJsZS1oZWFkZXJzXCI7XG5pbXBvcnQgJ3RhYmxlc29ydGVyL2Rpc3QvY3NzL3RoZW1lLmRlZmF1bHQubWluLmNzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLnNjcm9sbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgICAgICAgICAkKCcudmlzaXQtc3RhdHMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhlaWdodCgwKS5jc3MoJ2Rpc3BsYXknLCAndGFibGUtY29sdW1uLWdyb3VwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0YWJsZXNvcnRlciA9ICQoJy50YWJsZXNvcnRlcicpO1xuICAgICAgICBpZih0YWJsZXNvcnRlcikge1xuICAgICAgICAgICAgdGFibGVzb3J0ZXIudGFibGVzb3J0ZXIoKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLmZpbmQoJ3RoZWFkJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LW1vZGFsLWFjdGlvbicsIG1vZGFsRGF0YSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gY29uZmlybSBtb2RhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXBhZ2luYXRpb24gYScsIGFqYXhQYWdpbmF0aW9uKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUnLCBmYXN0U2F2ZSlcblxuICAgIC8qKlxuICAgICAqIFNldCBwYWdlIGxpbWl0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnBhZ2UtbGltaXQnLCBwYWdlTGltaXQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCBgJHtDT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRlUmFuZ2UgPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKTtcbiAgICAgICAgaWYgKGRhdGVSYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpbHRlckRhdGVSYW5nZSgpO1xuICAgICAgICAgICAgZGF0ZVJhbmdlLmNoYW5nZShmaWx0ZXJEYXRlUmFuZ2UpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbmZ1bmN0aW9uIGluaXRTdGlja3koKSB7XG4gICAgJCgnLnRhYmxlc29ydGVyJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XG59XG5cbiQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGluaXRTdGlja3koKTtcbn0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBwYWdlXG4gKi9cbiQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7XG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBPcGVuIG1vZGFsIHdpdGggZm9ybSBieSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNpemUoU0laRVMubGcpXG4gICAgICAgICAgICAgICAgLmRhdGFzZXQoe1xuICAgICAgICAgICAgICAgICAgICByZWxvYWQ6IHRoaXMuZGF0YXNldC5yZWxvYWQgfHwgMSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5oZWFkZXIodGhpcy5kYXRhc2V0LmhlYWRlcilcbiAgICAgICAgICAgICAgICAuYWZ0ZXJCdWlsZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5jbG9zZUV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tb2RhbChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFNldCBwYWdlIGxpbWl0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBocmVmID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuc2V0KCdwYWdlX2xpbWl0JywgJCh0aGlzKS52YWwoKSk7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuZGVsZXRlKCdwYWdlJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAhIXRoaXMuZGF0YXNldC5wYXJlbnQgPyAkKHRoaXMpLmNsb3Nlc3QodGhpcy5kYXRhc2V0LnBhcmVudCkgOiAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGFzZXQuaWQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7Z2V0TW9kYWxDb3VudGVyfSBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogU3VibWl0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLmRhdGEoY3VycmVudEJ1dHRvbi5jbG9zZXN0KCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKSlcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhblJlbG9hZCh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5kYXRhc2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIHJlbG9hZCB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSBidXR0b25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjYW5SZWxvYWQoYnV0dG9uKSB7XG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xuICAgICAgICAgICAgY29uc3QgZGF0YVJlbG9hZCA9ICQoYnV0dG9uKS5jbG9zZXN0KCcubW9kYWwnKS5kYXRhKCdyZWxvYWQnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVJlbG9hZCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCBkYXRhUmVsb2FkID09PSBmYWxzZSB8fCBwYXJzZUludChkYXRhUmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldFN1YkZvbGRlciBmcm9tIFwiLi9nZXRTdWJGb2xkZXJcIjtcblxuLyoqXG4gKiBHZXQgZmlsZSBwYXRoIGZyb20gc3RvcmFnZSB3aXRoIHN1YiBmb2xkZXJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXIgUm9vdCBmb2xkZXIgaW4gdGhlIHN0b3JhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAgIEZpbGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb290Rm9sZGVyLCBmaWxlTmFtZSkge1xuICAgIHJldHVybiAnL3N0b3JhZ2UvJyArIHJvb3RGb2xkZXIgKyAnLycgKyBnZXRTdWJGb2xkZXIoZmlsZU5hbWUpICsgJy8nICsgZmlsZU5hbWU7XG59XG4iLCIvKipcbiAqIEdldCBmb3JtIGRhdGFcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gZm9ybSBGb3JtIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuXG4gICAgbGV0IGZvcm1JdGVtcyA9IGZvcm0uZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xuICAgIGlmICghZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBmb3JtSXRlbXMgPSBmb3JtO1xuICAgIH1cblxuICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKSkge1xuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSAhIWN1cnJlbnRJdGVtLnByb3AoIFwiY2hlY2tlZFwiICkgKiAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gY3VycmVudEl0ZW0udmFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbn1cbiIsImltcG9ydCBtZDUgZnJvbSAnYmx1ZWltcC1tZDUnO1xuXG4vKipcbiAqIEdldCBzdWIgZm9sZGVycyBvZiB0aGUgZmlsZVxuICpcbiAqIFJlc3VsdCBvZiB0aGUgZnVuY3Rpb24gbG9va3MgbGlrZTogYTEvYjIvYzNcbiAqIFdoZXJlIG1kNSBvZiB0aGUgZmlsZSA9IGExYjJjMy4uLi4uLi4uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIHRoZSBmaWxlXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgZmlsZU5hbWVIYXNoID0gbWQ1KGZpbGVOYW1lKS5zdWJzdHJpbmcoMCwgNik7XG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmlsZU5hbWVIYXNoLm1hdGNoKC8uezEsMn0vZyk7XG4gICAgcmV0dXJuIHBhdGhQYXJ0cy5qb2luKCcvJyk7XG59XG4iLCIvKipcbiAqIGpRdWVyeVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9ICQ7XG5cbi8qKlxuICogQm9vdHN0cmFwXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwJztcblxuLyoqXG4gKiBCb290c3RyYXAgQ2NvbG9ycGlja2VyXG4gKi9cbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyJztcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1jb2xvcnBpY2tlci5jc3MnO1xuXG4vKipcbiAqIEZvbnQgQXdlc29tZVxuICovXG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzJztcblxuLyoqXG4gKiBFeHRlcm5hbCBtb2R1bGVzXG4gKiBUT0RPOiBnZXQgYnkgbnBtXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYW5pbWF0ZSc7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1jb25maXJtYXRpb24nO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtbm90aWZ5JztcbmltcG9ydCAnLi92ZW5kb3Ivc2VsZWN0Mic7XG5pbXBvcnQgJy4vdmVuZG9yL2Vra28tbGlnaHRib3gnO1xuaW1wb3J0ICcuL3ZlbmRvci90aGVtZSc7XG5cbi8qKlxuICogQ29tcG9uZW50c1xuICovXG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5cbi8qKlxuICogSGFuZGxlcnNcbiAqL1xuaW1wb3J0ICcuL2hhbmRsZXJzJztcblxuLyoqXG4gKiBTdHlsZXNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IFJhdmVuIGZyb20gJ3JhdmVuLWpzJztcblxuaWYgKFNFTlRSWV9EU04gJiYgU0VOVFJZX0RTTi5sZW5ndGgpIHtcbiAgICBSYXZlbi5jb25maWcoU0VOVFJZX0RTTiwge1xuICAgICAgICB4aHI6IHRydWUsXG4gICAgICAgIGNvbnNvbGU6IHRydWUsXG4gICAgICAgIGRvbTogdHJ1ZSxcbiAgICAgICAgbG9jYXRpb246IGZhbHNlLFxuICAgICAgICBzZW50cnk6IHRydWVcbiAgICB9KS5pbnN0YWxsKCk7XG59XG5cbi8qKlxuICogTW9kdWxlcyBsb2FkZXJcbiAqL1xuY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5pZiAocGF0aC5sZW5ndGggPiAxKSB7XG4gICAgLyoqXG4gICAgICogVG8gY3JlYXRpbmcgZGlmZmVyZW50IGZpbGVzIGZvciBlYWNoIG1vZHVsZVxuICAgICAqIChEb24ndCBmb3JnZXQgbnBtIGkgLS1zYXZlLWRldiBidW5kbGUtbG9hZGVyKVxuICAgICAqIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJ2J1bmRsZS1sb2FkZXIhbW9kdWxlcycsIHRydWUsIC9pbmRleFxcLmpzJC8pO1xuICAgICAqL1xuICAgIGNvbnN0IG1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQvKTtcbiAgICBtb2R1bGVzLmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZiAobW9kdWxlSXRlbXNbMV0gPT09IHBhdGhbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsxXSk7XG4gICAgICAgICAgICBtb2R1bGVzKG1vZHVsZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1Yk1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvbW9kdWxlcyguKiltb2R1bGVcXC5qcyQvKTtcbiAgICBzdWJNb2R1bGVzLmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZiAobW9kdWxlSXRlbXNbMV0gPT09IHBhdGhbMV0gJiYgbW9kdWxlSXRlbXNbM10gPT09IHBhdGhbMl0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUIgTU9EVUxFOicsIHBhdGhbMl0pO1xuICAgICAgICAgICAgc3ViTW9kdWxlcyhtb2R1bGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEVEfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAodGhpcy5kYXRhc2V0LnRlbXBsYXRlUGxhY2Vob2xkZXIsIFwiZ1wiKSwgZGF0YS5hd2FyZF9pZClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnLCBcImdcIiksIHRoaXMuZGF0YXNldC5maWVsZE5hbWUgfHwgJycpO1xuXG4gICAgICAgIGN1cnJlbnRCdG4ucGFyZW50KCkuYXBwZW5kKGVkaXRCdG4pO1xuICAgICAgICBjdXJyZW50QnRuLnJlbW92ZSgpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBV0FSRF9DUkVBVEVELCBkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyVmaWVsZF9uYW1lJScpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcblxuICAgICAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kKGNyZWF0ZUJ0bik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoRVZFTlRfTkFNRSkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShFVkVOVF9OQU1FLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBjb250YWluZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3IFVSTCBoaWRkZW4gaW5wdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHByZXZpZXdVUkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZHJvcHpvbmVCdWlsZGVyJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHByZXZpZXdcbiAgICAgICAgICovXG4gICAgICAgIGlmIChwcmV2aWV3VVJMLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VSTC52YWx1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9KTtcbn1cblxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9TQVZFX0FMTF9CVVRUT04sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVBbGxCdXR0b24gPSAkKCcjdXBkYXRlLWFsbCcpO1xuICAgICAgICBjb25zdCBjb3VudGVyID0gJCgnI3VwZGF0ZS1hbGwgLmNvdW50Jyk7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXIuY2hhbmdlZCcpLmxlbmd0aDtcblxuICAgICAgICBpZihjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2F2ZUFsbEJ1dHRvbi5oaWRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ZXIuaHRtbChjb3VudCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiLFxuXHRcIi4vYWRkLW1lL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hZGQtbWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL2Fzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXdhcmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2F3YXJkL21vZHVsZS5qc1wiLFxuXHRcIi4vYmFubmVyL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtYWRwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiLFxuXHRcIi4vY29sbGVjdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY29sbGVjdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL2Nyb3AvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Nyb3AvbW9kdWxlLmpzXCIsXG5cdFwiLi9kYWlseS1sb290L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVmYXVsdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGVmYXVsdC9tb2R1bGUuanNcIixcblx0XCIuL2RlcGxveS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGVwbG95L21vZHVsZS5qc1wiLFxuXHRcIi4vZHBhL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kcGEvbW9kdWxlLmpzXCIsXG5cdFwiLi9keWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2R5ZS9tb2R1bGUuanNcIixcblx0XCIuL2dpZnQtd3JhcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZ2lmdC13cmFwL21vZHVsZS5qc1wiLFxuXHRcIi4vbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFnaWMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIixcblx0XCIuL21lYWwvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9wcm9kdWN0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wcm9kdWN0L21vZHVsZS5qc1wiLFxuXHRcIi4vcHVyY2hhc2UvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3B1cmNoYXNlL21vZHVsZS5qc1wiLFxuXHRcIi4vc2V0dGluZ3MvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1zdGF0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1zdGF0cy9tb2R1bGUuanNcIixcblx0XCIuL3NvdW5kL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanNcIixcblx0XCIuL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiLFxuXHRcIi4vdGFtYXRvb2wvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qc1wiLFxuXHRcIi4vdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgXFxcXC5cXFxcL1tcXFxcdy1fXStcXFxcL21vZHVsZVxcXFwuanMkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9tb2R1bGVzIHN5bmMgcmVjdXJzaXZlIG1vZHVsZXMoLiopbW9kdWxlXFxcXC5qcyRcIjsiLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQgPSAnQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQnO1xuZXhwb3J0IGNvbnN0IERFTFRBX1RJTUVfQVRUUklCVVRFID0gMTk7XG4iLCIvKipcbiAqIENvbGxhcHNlIHN0YXRlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xuICAgIHBhcmVudC50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZXNcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hY3Rpb24tdHlwZS1zdGF0ZScpLnRvZ2dsZUNsYXNzKCdkb3duJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIFN0YXRlIG9mIHRoZSBBY3Rpb24gVHlwZVxuICogYXQgdGhlIG1vZGFsXG4gKiB3aXRoIGNvbmZpcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50RWxlbWVudC5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcblxuICAgIGlmICghY3VycmVudEVsZW1lbnQuZGF0YSgnaWQnKSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoJ0FyZSB5b3Ugc3VyZT8nKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxuICAgICAgICAgICAgJ3RleHQnOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBSZXF1ZXN0QnVpbGRlcihjdXJyZW50RWxlbWVudC5kYXRhKCd1cmwnKSlcbiAgICAgICAgICAgICAgICAgICAgLm1ldGhvZCgnREVMRVRFJylcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzIG9mIHRoZSBzdGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuXG4gICAgICAgICQoJy5pbmRleCcpLmVhY2goKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICQoaXRlbSkudmFsKGluZGV4KyspO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHVwZGF0ZUluZGV4ZXMgZnJvbSBcIi4vbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXNcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlcyBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlc1wiO1xuaW1wb3J0IHJlbW92ZUFjdGlvblR5cGVTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGVcIjtcbmltcG9ydCB7REVMVEFfVElNRV9BVFRSSUJVVEV9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlc1xuICovXG51cGRhdGVJbmRleGVzKCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NoYW5nZScsICdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVwiXScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVEaXNwbGF5ID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1bZGlzcGxheV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVEaXNwbGF5LnZhbChkZWx0YVRpbWVIaWRkZW4uZGF0YSgndmFsdWUnKSAvIHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcbiAgICB9KVxuXG4gICAgLm9uKCdpbnB1dCcsICdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdW2Rpc3BsYXldXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHRpbWVUeXBlID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJykudmFsKCk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XG5cbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZSBvbmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb2xsYXBzZS1saW5rJywgY29sbGFwc2VTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIGFsbCBzdGF0ZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXN0YXRlcycsIGNvbGxhcHNlU3RhdGVzKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tYWN0aW9uLXR5cGUtc3RhdGVzJywgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcbiIsImV4cG9ydCBjb25zdCBBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSA9ICdBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBTk5PVU5DRU1FTlRTX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFOTk9VTkNFTUVOVFNfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgJCgnLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKHRoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsIlxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZV9pZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykubmV4dCgpLmhlaWdodCgpID4gMCkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ0hpZGUnLCAnU2hvdycpKTtcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdTaG93JywgJ0hpZGUnKSk7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdTaG93JywgJ0hpZGUnKTtcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIFNVQl9UWVBFUyAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIGFzc2V0L2Zvcm0uYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTdWJ0eXBlcyh0aGlzLnZhbHVlLCB0aGlzLmRhdGFzZXQuc3VidHlwZSk7XG59XG5cbmNvbnN0IGFzc2V0Rm9ybVN1YnR5cGUgPSAkKFwiI3N1YnR5cGVcIik7XG5jb25zdCBhc3NldEZvcm1BY3Rpb25UeXBlID0gJCgnI2Fzc2V0LWZvcm0tYWN0aW9uLXR5cGUnKTtcbmNvbnN0IGFzc2V0Rm9ybUNvbGxlY3Rpb24gPSAkKCcjYXNzZXQtZm9ybS1jb2xsZWN0aW9uJyk7XG5jb25zdCBwcmljZXMgPSAkKCcucHJpY2VzJyk7XG5cbmZ1bmN0aW9uIHNldFN1YnR5cGVzKHR5cGUsIHN1YnR5cGUpIHtcbiAgICBhc3NldEZvcm1TdWJ0eXBlXG4gICAgICAgIC5lbXB0eSgpXG4gICAgICAgIC5zZWxlY3QyKHtcbiAgICAgICAgICAgIGRhdGE6IFNVQl9UWVBFU1t0eXBlXVxuICAgICAgICB9KVxuICAgICAgICAudmFsKHN1YnR5cGUpXG4gICAgICAgIC5jaGFuZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc3RhdGVcbiAgICAgKi9cbiAgICBoaWRlKGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgIGhpZGUoYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgc2hvdyhwcmljZXMpO1xuXG4gICAgc3dpdGNoIChwYXJzZUludCh0eXBlKSkge1xuXG4gICAgICAgIC8vIEZ1cm5pdHVyZVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ2xvdGhlc1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQm9keSBQYXJ0XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGhpZGUocHJpY2VzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBzaG93KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XG59IiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgndGV4dGFyZWFbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xuICAgIGNvbnN0IHdpdGhOYW1lID0gJCgnaW5wdXRbbmFtZT1cIndpdGhfbmFtZVwiXScpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJChpdGVtKSk7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBsZXQgYXNzZXROYW1lID0gJChpdGVtKS5kYXRhKCdhc3NldC1uYW1lJyk7XG4gICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaCgnXFxuJyArIGFzc2V0SWQgKyAnICcgKyBhc3NldE5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtbmFtZScpO1xuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaCgnXFxuJyArIGFzc2V0SWQgKyAnICcgKyBhc3NldE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCQoaXRlbSkpO1xuICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpZiAoYXNzZXRJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJmlkcz0nICsgYXNzZXRJZHMuam9pbignLCcpO1xufVxuIiwiaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxuICAgICAgICAuc3VjY2VzcyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgJCgnI2NvbGxlY3Rpb24tbnVtYmVyJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5jb2xsZWN0aW9uX2lkKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbi8qKlxuICogTWFyayBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCAoKSB7XG4gICAgaWYoJCh0aGlzKS5hdHRyKCd0eXBlJykgIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG4gICAgICAgIHBhcmVudENvbnRhaW5lci5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChVUERBVEVfU0FWRV9BTExfQlVUVE9OKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCB1cGRhdGVTYXZlQWxsQnV0dG9uIGZyb20gXCJsaXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvblwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IGdldExhc3RDb2xsZWN0aW9uTnVtYmVyIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyXCI7XG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEUsIEFXQVJEX0NSRUFURUQsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge21hcmtDaGFuZ2VkfSBmcm9tIFwiLi9oYW5kbGVycy9tYXJrQ2hhbmdlZFwiO1xuaW1wb3J0IHtkb3dubG9hZEFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvZG93bmxvYWRBc3NldHNcIjtcbmltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHtERUxUQV9USU1FX0FUVFJJQlVURX0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbiQoJyNhc3NldHMtdGFibGUnKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZScsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZScsIGF3YXJkRGVsZXRlKTtcblxuJCgnI2Fzc2V0LWZvcm0tdHlwZScpXG4gICAgLmNoYW5nZShjaGFuZ2VUeXBlKVxuICAgIC5jaGFuZ2UoKTtcblxuJCgnI2dldC1sYXN0LWNvbGxlY3Rpb24tbnVtYmVyJykuY2xpY2soZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIpO1xuXG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogQ29weSBhc3NldHMgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hc3NldHMnLCBjb3B5QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZG93bmxvYWQtYXNzZXRzJywgZG93bmxvYWRBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VGQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RkJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11cIl0nKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVEaXNwbGF5LnZhbChkZWx0YVRpbWVIaWRkZW4uZGF0YSgndmFsdWUnKSAvIHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcbiAgICB9KVxuXG4gICAgLm9uKCdpbnB1dCcsICdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcbiAgICAgICAgY29uc3QgdGltZVR5cGUgPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nKS52YWwoKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZUhpZGRlbi52YWwoJCh0aGlzKS52YWwoKSAqIHRpbWVUeXBlKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuZmFzdC1zYXZlLWNvbnRhaW5lciBpbnB1dCwgLmZhc3Qtc2F2ZS1jb250YWluZXIgc2VsZWN0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciB0ZXh0YXJlYScsIG1hcmtDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgdXBkYXRlU2F2ZUFsbEJ1dHRvbigpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFID0gJ0FXQVJEX0NSRUFURSc7XG5leHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFRCA9ICdBV0FSRF9DUkVBVEVEJztcbmV4cG9ydCBjb25zdCBBV0FSRF9ERUxFVEUgPSAnQVdBUkRfREVMRVRFJztcbmV4cG9ydCBjb25zdCBDTE9TRV9BV0FSRF9NT0RBTCA9ICdDTE9TRV9BV0FSRF9NT0RBTCc7XG4iLCIvKipcbiAqIFNob3cgZm9ybSBldmVudFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBCQU5ORVJfU0hPV19GT1JNID0gJ0JBTk5FUl9TSE9XX0ZPUk0nO1xuXG4vKipcbiAqIElkIG9mIHR5cGUncyBzZWxlY3RcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVFlQRV9TRUxFQ1RfSUQgPSAnYmFubmVyLXR5cGUnO1xuIiwiaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAqIEhpZGUvc2hvdyBzb21lIGZpZWxkc1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVFlQRV9TRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgICQoJy5iYW5uZXItdHlwZScpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICQoJy5iYW5uZXItdHlwZS0nICsgc2VsZWN0ZWRFbGVtZW50LnZhbHVlKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gaGFuZGxlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgSW5pdFxuICAgICAqL1xuICAgIGRyb3Bab25lSW5pdChCQU5ORVJfU0hPV19GT1JNKTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgc2hvd0Zvcm0gbGlzdGVuZXJcbiAgICAgKi9cbiAgICBzaG93Rm9ybSgpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShCQU5ORVJfU0hPV19GT1JNLCAoKSA9PiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgc2VsZWN0IGNoYW5nZSB0cmlnZ2VyXG4gICAgICAgICAqL1xuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGVzIGluaXRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5iYW5uZXItZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9oYW5kbGVycy9zaG93Rm9ybVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2hvdyBlZGl0IGZvcm0gb2YgYSBiYW5uZXJcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKHNob3dGb3JtKCkpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyMnICsgVFlQRV9TRUxFQ1RfSUQsIGNoYW5nZVR5cGUpO1xuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFkcCBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QWRwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRwSWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYWRwX2lkc1wiXScpO1xuICAgIGxldCBhZHBJZHMgPSBbXTtcblxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICBpZihhZHBJZCkge1xuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhZHBJZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIGlmIChhZHBJZCkge1xuICAgICAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRwSWRzRmllbGQudmFsKGFkcElkcyk7XG4gICAgYWRwSWRzRmllbGQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIC8vIGFkcElkc0ZpZWxkLnZhbChbXSk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFzc2V0SWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYXNzZXRfaWRzXCJdJyk7XG4gICAgbGV0IGFzc2V0SWRzID0gW107XG5cbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXNzZXRJZHNGaWVsZC52YWwoYXNzZXRJZHMpO1xuICAgIGFzc2V0SWRzRmllbGQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhZHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQWRwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFkcElkcyA9IFtdO1xuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICBpZihhZHBJZCkge1xuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhZHBJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoYWRwSWQpIHtcbiAgICAgICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmaWRzPScgKyBhZHBJZHMuam9pbignLCcpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFyY2hpdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5zaG93LWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbCgnJyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnNob3ctdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnRhc2tzLWxpc3QnKS5oaWRlKCdzbG93Jyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIHNlbGVjdCByb3cgYnkgZnVsbCB0ZCBhcmVhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSb3coZSkge1xuICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Zvci1jb3B5JykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9ICQodGhpcykuZmluZCgnLmZvci1jb3B5Jyk7XG5cbiAgICAgICAgaWYoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBcmNoaXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaGlkZS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIFxuICAgIGxldCBhY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJyk7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIFxufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5oaWRlLXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy50YXNrcy1saXN0Jykuc2hvdygnc2xvdycpO1xufVxuIiwiLy9pbXBvcnQge2J1bmRsZVZlcnNpb25TZWxlY3R9IGZyb20gXCIuL2hhbmRsZXJzL2J1bmRsZVZlcnNpb25TZWxlY3RcIjtcbmltcG9ydCB7c2hvd0FyY2hpdmV9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dBcmNoaXZlXCI7XG5pbXBvcnQge2hpZGVBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlQXJjaGl2ZVwiO1xuaW1wb3J0IHtoaWRlVGFza3N9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVUYXNrc1wiO1xuaW1wb3J0IHtzaG93VGFza3N9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dUYXNrc1wiO1xuaW1wb3J0IHtjb3B5QWRwfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QWRwXCI7XG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcbmltcG9ydCB7c2VsZWN0Um93fSBmcm9tIFwiLi9oYW5kbGVycy9zZWxlY3RSb3dcIjtcbmltcG9ydCB7ZG93bmxvYWRBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2Rvd25sb2FkQWRwXCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1hcmNoaXZlJywgc2hvd0FyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS10YXNrcycsIGhpZGVUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LXRhc2tzJywgc2hvd1Rhc2tzKVxuICAgIC8qKlxuICAgICAqIENvcHkgYWRwIGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcbiAgICAvKipcbiAgICAgKiBDb3B5IGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZG93bmxvYWQtYWRwJywgZG93bmxvYWRBZHApXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNpZGUgYm94XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1oaWRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZihwYXJzZUludCgkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JykpIDwgMCkge1xuICAgICAgICAgICAgJCgnLnNpZGUtYm94JykuY3NzKCdyaWdodCcsIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JywgJy0xMDAlJylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHJvdyBieSBmdWxsIHRkIGFyZWFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5pZC1jb2wnLCBzZWxlY3RSb3cpO1xuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBDQVNIID0gJ2Nhc2hfYWRkZWQnO1xuZXhwb3J0IGNvbnN0IENPSU4gPSAnY29pbnNfYWRkZWQnO1xuZXhwb3J0IGNvbnN0IEFTU0VUID0gJ2Fzc2V0c19hZGRlZCc7XG4iLCJpbXBvcnQge0NBU0h9IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5pbXBvcnQge0NPSU59IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5pbXBvcnQge0FTU0VUfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICAgICAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEZpbHRlciBzZWxlY3Qgb3B0aW9ucyBieSBzZWxlY3RlZCBzb3VyY2VcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjZmlsdGVyX3NvdXJjZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgJChcIiNmaWx0ZXJfYWN0aW9uXCIpLnNlbGVjdDIoe1xuICAgICAgICAgICAgbWF0Y2hlcjogZnVuY3Rpb24gKHBhcmFtcywgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VWYWwgIT09ICd1c2VyX2RlYnVnJyAmJiAkLmluQXJyYXkoZGF0YS5pZCwgW0NBU0gsIENPSU4sIEFTU0VUXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxuICAgICAgICB9XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQ09MTEVDVElPTl9TSE9XX0ZPUk0gPSAnQ09MTEVDVElPTl9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuY29uc3QgYXNzZXRQcmV2aWV3VGVtcGxhdGUgPSAkKCcjYXNzZXQtcHJldmlldy10ZW1wbGF0ZScpLmh0bWwoKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5oYXNDbGFzcygnYXNzZXQtaWQnKSAmJiAhIXJlc3BvbnNlLmFzc2V0c1tjdXJyZW50SXRlbS52YWwoKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFzc2V0ID0gcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuc2xvdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFzc2V0LXByZXZpZXcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoYXNzZXRQcmV2aWV3VGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXVybCUnLCBcImdcIiksIGN1cnJlbnRBc3NldC5wcmV2aWV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXRpdGxlJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0Lm5hbWUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWRkaXRpb25hbC1kYXRhJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogTWFyayBpbnB1dCBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xuICAgICAgICBncm91cDogX3RoaXMuZGF0YXNldC5ncm91cCxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKF90aGlzLmRhdGFzZXQucG9zaXRpb24pLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge0NPTExFQ1RJT05fU0hPV19GT1JNfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IG1hcmtJbnB1dEFzQ2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9tYXJrSW5wdXRBc0NoYW5nZWRcIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgaGlkZUFkZGl0aW9uYWxSb3dzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93c1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChDT0xMRUNUSU9OX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBjb2xsZWN0aW9uXG4gKi9cbiQoJy5jb2xsZWN0aW9uLWZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcblxuLyoqXG4gKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gKi9cbiQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXQnKS5jaGFuZ2UobWFya0lucHV0QXNDaGFuZ2VkKTtcblxuLyoqXG4gKiBTb3J0YWJsZSBpbml0XG4gKi9cbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuLyoqXG4gKiBIaWRlIGFkZGl0aW9uYWwgcm93c1xuICovXG4kKCcuaGlkZS1zbG90cycpLmNsaWNrKGhpZGVBZGRpdGlvbmFsUm93cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCByb3dzIHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNjcm9wcyA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2Nyb3BfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3JvcF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lY3JvcCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBEZWxldGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSb3coKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGRSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZFJvd1wiO1xuaW1wb3J0IHtkZWxldGVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2RlbGV0ZVJvd1wiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtcm93JywgYWRkUm93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBkZWxldGVSb3cpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIHNlbGYpO1xuXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocm93LmFkZENsYXNzKCdjaGFuZ2VkJykpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZGFpbHlfbG9vdCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2RhaWx5X2xvb3RfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSl7XG4gICAgICAgICAgICBsYXN0SURTLnB1c2gocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYobGFzdElEUy5sZW5ndGgpe1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcm93SW5kZXglL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmRhaWx5LWxvb3Qtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2ggcGFnZSB0eXBlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlLXBhZ2UtdHlwZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDAsIGxvY2F0aW9uLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykpICsgJCh0aGlzKS5kYXRhKCdocmVmJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnI2NvbW1vbi1tZW51JykuZmluZCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZigkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5oaWRlKClcbiAgICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbi8qKlxuICogU2hvdyBEZXBsb3kgU3RhdHVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXBsb3lTdGF0dXMoKSB7XG4gICAgbmV3IGh0dHAoREVQTE9ZX1NUQVRVU19ST1VURSlcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJCgnLmRlcGxveS1zdGF0dXMnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9ICQoJy5kZXBsb3ktc3RhdHVzJykuZmluZCgnLmFjdGl2ZS1kZXBsb3knKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJCgnLmRlcGxveS1idG4nKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCQoJy5kZXBsb3ktYnRuJykuaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ZGVwbG95U3RhdHVzKCk7fSwgMzAwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJcbi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9kaXJlY3Rpb249XCIgKyBkaXJlY3Rpb247XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBpZDogJ2RlcGxveSdcbiAgICB9LCAnRGVwbG95JywgdXJsKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyDQsmVwZW5kZW5jeVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RlcGVuZGVuY3koZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcbiAgICBsZXQgYWRkTW9kZSA9IGN1cnJlbnRFbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgb25lTGV2ZWxTaG93KGN1cnJlbnRDb25maWcsIGFkZE1vZGUpO1xufVxuXG5mdW5jdGlvbiBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgYWRkTW9kZSwgbGV2ZWwgPSAxKSB7XG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xuICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGNvbmZpZ05hbWUpO1xuICAgICAgICBpZihhZGRNb2RlKSB7XG4gICAgICAgICAgICBjb25maWdCbG9jay5hZGRDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWdCbG9jay5yZW1vdmVDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgIGxldCBkZXBlbmRDb25maWdOYW1lID0gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV1ba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGRlcGVuZENvbmZpZ05hbWUpO1xuICAgICAgICAgICAgaWYoYWRkTW9kZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLmFkZENsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnQmxvY2sucmVtb3ZlQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25lTGV2ZWxTaG93KGRlcGVuZENvbmZpZ05hbWUsIGFkZE1vZGUsIGxldmVsICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyBkZXBlbmRlbmN5IHBvcHVwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGVwZW5kZW5jeVBvcHVwKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnSWQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdpZCcpO1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBpZihjdXJyZW50Q29uZmlnSWQpIHtcbiAgICAgICAgaWRzLnB1c2goY3VycmVudENvbmZpZ0lkKTtcbiAgICB9XG5cbiAgICByb290TGV2ZWxTaG93KGN1cnJlbnRDb25maWcsIGlkcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE9uZSBsZXZlbCBzaG93XG4gKlxuICogQHBhcmFtIGNvbmZpZ05hbWVcbiAqIEBwYXJhbSBkZXBlbmRDb25maWdOYW1lXG4gKiBAcGFyYW0gbGV2ZWxcbiAqIEBwYXJhbSBpZFJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCAgbGV2ZWwgPSAxLCBpZFJlc3BvbnNlKSB7XG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xuICAgICAgICBsZXQgaWRzID0gaWRSZXNwb25zZS5pZHM7XG4gICAgICAgIGxldCB0ZXh0Q2xhc3MgPSAnJztcbiAgICAgICAgaWYoaWRSZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnbm90SW1wbGVtZW50ZWQnKSkge1xuICAgICAgICAgICAgdGV4dENsYXNzID0gJ3RleHQtbXV0ZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzUmVjdXJzaW9uID0gZmFsc2U7XG4gICAgICAgICQoJy5jaGFpbi0nICsgY29uZmlnTmFtZSkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5wYXJlbnRzKCcuY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpc1JlY3Vyc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgdGV4dENsYXNzICsgJ1wiPicgKyBkZXBlbmRDb25maWdOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4oUmVjdXJzaW9uKTwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj48YnI+Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoJCh0aGlzKS5maW5kKCcuY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0ZXh0Q2xhc3MgKyAnXCI+JyArIGRlcGVuZENvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAoaWRzLmxlbmd0aCA+IDAgPyAnPHNwYW4gY2xhc3M9XCJkZXBlbmQtaWRzXCI+ICcgKyBpZHMuam9pbignLCcpICsgJzwvc3Bhbj4nIDogJycpICArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNSZWN1cnNpb24pIHtcbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGRlcGVuZENvbmZpZ05hbWUsIGxldmVsLCBpZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8qKlxuICogUm9vdCBsZXZlbCBzaG93XG4gKlxuICogQHBhcmFtIGNvbmZpZ05hbWVcbiAqIEBwYXJhbSBpZHNcbiAqL1xuZnVuY3Rpb24gcm9vdExldmVsU2hvdyhjb25maWdOYW1lLCBpZHMgPSBbXSkge1xuICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXG4gICAgICAgIC5tZXRob2QoJ3Bvc3QnKVxuICAgICAgICAuZGF0YSh7XG4gICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXG4gICAgICAgICAgICAnZGVwZW5kZW50TW9kZWxJZHMnOiBpZHNcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbGV0IGlkcyA9IHJlc3BvbnNlLmlkcyB8fCBbXTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXBsb3ktY2hhaW4tYmxvY2tcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKS5odG1sKCc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGNvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuPicgKyBjb25maWdOYW1lICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJkZXBlbmQtaWRzXCI+ICcgKyBpZHMuam9pbignLCcpICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5oZWFkZXIoJ0RlcGxveSBkZXBlbmRlbmN5JylcbiAgICAgICAgICAgICAgICAuYm9keSgkKCcuZGVwbG95LWNoYWluLWJsb2NrJykpXG4gICAgICAgICAgICAgICAgLm1vZGFsKCk7XG5cbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIDEsIGlkcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG5cbi8qKlxuICogR2V0IGRlcGxveSBtb2RlbCBpZHNcbiAqXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxuICogQHBhcmFtIGxldmVsXG4gKiBAcGFyYW0gaWRzXG4gKi9cbmZ1bmN0aW9uIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIGxldmVsID0gMSwgaWRzID0gW10pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgbGV0IGRlcGVuZENvbmZpZ05hbWUgPSBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXVtrZXldO1xuXG4gICAgICAgIGlmKGlkcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXG4gICAgICAgICAgICAgICAgLm1ldGhvZCgncG9zdCcpXG4gICAgICAgICAgICAgICAgLmRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogZGVwZW5kQ29uZmlnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsJzogY29uZmlnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsSWRzJzogaWRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwgKyAxLCB7J2lkcyc6IFtdfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVwiO1xuaW1wb3J0IHtzaG93RGVwZW5kZW5jeVBvcHVwfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVBvcHVwXCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCB7ZGVwbG95U3RhdHVzfSBmcm9tIFwiLi9kZXBsb3lTdGF0dXNcIjtcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuICAgIC8qKlxuICAgICAqIFNhdmUgYWxsIHBhZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUtcGFnZS1jdXN0b20nLCBmYXN0U2F2ZVBhZ2UpXG4gICAgLyoqXG4gICAgICogU2hvdyBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29uZmlnLWNoZWNrYm94Jywgc2hvd0RlcGVuZGVuY3kpXG4gICAgLyoqXG4gICAgICogU2hvdyBkZXBlbmRlbmN5IHBvcHVwXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1kZXBlbmRlbmN5Jywgc2hvd0RlcGVuZGVuY3lQb3B1cClcblxuICAgIC8qKlxuICAgICAqIENoZWNrL3VuY2hlY2sgYXdhcmQgZGVwZW5kZW5jaWVzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmF3YXJkLWRlcGVuZGVuY3kgW3R5cGU9Y2hlY2tib3hdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYXdhcmQtZGVwZW5kZW5jeSBbdHlwZT1jaGVja2JveF0nKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcbiAgICB9KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlcGxveVN0YXR1cygpO1xuICAgIH0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHBhID4gdGJvZHknKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5kcGFfaWQnKS52YWwoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNkcGFfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWRwYV9pZCUvZywgaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRHBhU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgbGV0IGRhdGEgPSAkKCcuZHBhLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVEcGFTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZURwYVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgZHBhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRwYS1zYXZlLXBhZ2UnLCBzYXZlRHBhU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2R5ZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2R5ZV90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcblxuICAgICAgICBsZXQgbGFzdFJvdyA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNwMicpO1xuICAgICAgICBsYXN0Um93LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAkKGl0ZW0pLmNvbG9ycGlja2VyKHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENoYW5nZSByb3cgaW5kZXhcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvd0luZGV4KCkge1xuICAgIGxldCByb3dJbmRleCA9ICQodGhpcykudmFsKCk7XG4gICAgbGV0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dCwgc2VsZWN0Jyk7XG5cbiAgICByb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG9sZE5hbWUgPSAkKGl0ZW0pLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgbGV0IG5ld05hbWUgPSBvbGROYW1lLnNsaWNlKDAsIDQpICsgcm93SW5kZXggKyAgb2xkTmFtZS5zbGljZShvbGROYW1lLmluZGV4T2YoJ10nKSk7XG4gICAgICAgICQoaXRlbSkuYXR0cignbmFtZScsIG5ld05hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IERZRV9DT05UQUlORVJfU0VMRUNUT1IgPSAnLmR5ZS1zYXZlLXBhZ2UtY29udGFpbmVyJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBkeWVzIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgdHIgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWRUcigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7Y2hhbmdlUm93SW5kZXh9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4XCI7XG5pbXBvcnQgZHllU2F2ZVBhZ2UsIHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZFRyfSBmcm9tIFwiLi9oYW5kbGVycy9keWVTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjb2xvci1waWNrZXIgaW5wdXRzXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKVxuICAgICAgICAgICAgLm9uKCdjcmVhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBNYXJrIHRyIGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcilcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdpbnB1dCcsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHJvdyBpbmRleFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFzc2V0X2lkJywgY2hhbmdlUm93SW5kZXgpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgICQoJy5keWUtc2F2ZS1wYWdlJykuY2xpY2soZHllU2F2ZVBhZ2UpO1xuIiwiZXhwb3J0IGNvbnN0IEdJRlRfV1JBUF9ST1dfQURERUQgPSAnR0lGVF9XUkFQX1JPV19BRERFRCc7XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogQXNzZXQgSUQgY2hhbmdlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudElucHV0ID0gJCh0aGlzKTtcbiAgICBjb25zdCBhc3NldElEID0gY3VycmVudElucHV0LnZhbCgpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJbnB1dC5jbG9zZXN0KCd0cicpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBhc3NldHMgaWRzXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEFzc2V0RHVwbGljYXRlID0gJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldElEID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnRBc3NldER1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGFzc2V0SUR9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpbnB1dHMgbmFtZXNcbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoIC9cXFtbXFxkXStcXF0vZywgYFske2Fzc2V0SUR9XWApO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGhyZWYgb2YgdGhlIGRlbGV0ZSBidXR0b25cbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaHJlZiA9IHRoaXMuaHJlZi5yZXBsYWNlKCAvXFwvW1xcZF0rJC9nLCBgLyR7YXNzZXRJRH1gKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCIuLi9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHt9O1xuICAgICAgICAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhc3NldHNbdGhpcy52YWx1ZV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIHVwZGF0ZVxuICAgICAqL1xuICAgIHBvc2l0aW9uVXBkYXRlKCk7XG5cbiAgICBmYXN0U2F2ZVBhZ2UuYmluZCh0aGlzKShlKTtcbn1cbiIsImltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcImhhbmRsZXJzL2NvbmZpcm1Nb2RhbFwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidXR0b25VcmwgPSB0aGlzLmhyZWYuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFyc2VJbnQoYnV0dG9uVXJsW2J1dHRvblVybC5sZW5ndGggLSAxXSkgPT09IDApIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uZmlybU1vZGFsLmJpbmQodGhpcykoZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIm1vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwb3NpdGlvblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIFBvc2l0aW9uIHVwZGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvc2l0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBwYWdlID0gJCgnI3BhZ2UnKS52YWwoKTtcbiAgICAgICAgY29uc3QgcGFnZV9saW1pdCA9ICQoJ1tuYW1lPVwicGFnZV9saW1pdFwiXScpLnZhbCgpO1xuXG4gICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXggKyAoKHBhZ2UgLSAxKSAqIHBhZ2VfbGltaXQpKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtHSUZUX1dSQVBfUk9XX0FEREVEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQWRkIG5ldyByb3cgdG8gZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdJRlRfV1JBUF9ST1dfQURERUQsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjZ2lmdC13cmFwLScgKyBkYXRhLmVtYmVkQmxvY2tJZClcbiAgICAgICAgICAgIC5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBhc3NldENoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvYXNzZXRDaGFuZ2VkXCI7XG5pbXBvcnQgYWRkUm93IGZyb20gXCIuL2xpc3RlbmVycy9hZGRSb3dcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGFzc2V0IGlkIGluIGlucHV0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0LWlkJywgYXNzZXRDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJywgcmVtb3ZlUm93KTtcblxuLyoqXG4gKiBBZGQgcm93IGxpc3RlbmVyXG4gKi9cbmFkZFJvdygpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIFNhdmUgYWxsIHBhZ2VcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHNob3cgYXNzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3NldChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgYWN0aW9uID0gU1dPV19BU1NFVF9ST1VURSArICc/aWQ9JyArIGN1cnJlbnRFbGVtZW50LnZhbCgpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1uYW1lJykuaHRtbChyZXNwb25zZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdwcmV2aWV3X3VybCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgLmxpc3QtdGh1bWJuYWlsJykuZGF0YSgnZnVsbCcsIHJlc3BvbnNlLmRhdGEucHJldmlld191cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiXG5pbXBvcnQge3Nob3dBc3NldH0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Fzc2V0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhc3NldFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hc3NldCcsIHNob3dBc3NldClcblxuICAgICIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgbGV0IHRib2R5ID0gJCgnI2xvY2FsaXphdGlvbnMgPiB0Ym9keScpO1xuICAgIGxldCB0ZW1wbGF0ZSA9ICQoJyNsb2NhbGl6YXRpb25fdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICB0Ym9keS5wcmVwZW5kKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmVtb3ZlIG5vdCBzYXZlZCByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRCdG4uY2xvc2VzdCgndHInKTtcbiAgICBjb25zdCBjdXJyZW50S2V5ID0gcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykudmFsKCk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtqUXVlcnl9XG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEtleUR1cGxpY2F0ZSA9ICQoJyNsb2NhbGl6YXRpb25zJykuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRLZXkgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnRLZXlEdXBsaWNhdGUubGVuZ3RoID4gMSl7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGtleSAnICsgY3VycmVudEtleX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHBhcmVudC5maW5kKCcuZWRpdGFibGUgaW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZUxvY2FsaXphdGlvblN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTG9jYWxpemF0aW9uU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7cmVtb3ZlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbnMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNyZWF0ZS1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZUxvY2FsaXphdGlvblN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtcm93JywgcmVtb3ZlUm93KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21hZ2ljID4gdGJvZHknKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dFtuYW1lPVwiaWRcIl0nKS52YWwoKTtcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI21hZ2ljX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVtYWdpY19pZCUvZywgKytpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWFnaWNTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5tYWdpYy1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcblxuICAgIGRhdGEuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICB9KTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVNYWdpY1N0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVNYWdpY1N0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEXG4gKlxuICogQHBhcmFtIGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjbGFzdC1tYWtldXAta2l0LWlkJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5tYWtldXBfa2l0X2lkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgZ2V0TGFzdE1ha2V1cEtpdElEIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RNYWtldXBLaXRJRFwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEIGF0IHRoZSBib2R5IHBhcnRzIGdyaWRcbiAqL1xuJCgnI2dldC1sYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgIC5jbGljayhnZXRMYXN0TWFrZXVwS2l0SUQpO1xuIiwiZXhwb3J0IGNvbnN0IE1BS0VVUF9LSVRfU0hPV19GT1JNID0gJ01BS0VVUF9LSVRfU0hPV19GT1JNJztcbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7TUFLRVVQX0tJVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChNQUtFVVBfS0lUX1NIT1dfRk9STSkpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50X2dyb3Vwc190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5ncm91cF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50LWdyb3VwJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmdyZWRpZW50RGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7aW5ncmVkaWVudERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgaW5ncmVkaWVudERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50c190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5pbmdyZWRpZW50X2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWwgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLm1lYWxfaWQnKS50ZXh0KCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lYWxEZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNZWFsU3RhdGUgKCkge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7bWVhbERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvbWVhbERlbGV0ZVwiO1xuaW1wb3J0IHtzYXZlTWVhbFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBtZWFsRGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgbWVhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlTWVhbFN0YXRlKClcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZU1lYWxTdGF0ZSk7XG4iLCJleHBvcnQgY29uc3QgTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNID0gJ05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSc7XG4iLCJjb25zdCBUUkFTSCA9ICdUUkFTSCc7XG5jb25zdCBUUkFTSF9GSUVMRFNfSUQgPSAndHJhc2gtZmllbGRzJztcbmNvbnN0IFNFTEVDVF9JRCA9ICduZWlnaGJvci1hY3Rpdml0eS10eXBlLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgY29uc3QgdHJhc2hGaWVsZHMgPSAkKCcjJyArIFRSQVNIX0ZJRUxEU19JRCk7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRFbGVtZW50LnRleHQudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBUUkFTSDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7TkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gJy4vaGFuZGxlcnMvY2hhbmdlVHlwZSc7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSlcbiAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItYWN0aXZpdHktdHlwZScsIGNoYW5nZVR5cGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBQUk9EVUNUX1NIT1dfRk9STSA9ICdQUk9EVUNUX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgQ2xlYXZlIGZyb20gXCJjbGVhdmUuanNcIjtcblxuLyoqXG4gKiBQcmljZSBpbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIG5ldyBDbGVhdmUodGhpcywge1xuICAgICAgICBudW1lcmFsOiB0cnVlLFxuICAgICAgICBwcmVmaXg6ICckICcsXG4gICAgICAgIHJhd1ZhbHVlVHJpbVByZWZpeDogdHJ1ZSxcbiAgICAgICAgb25WYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKCtlLnRhcmdldC5yYXdWYWx1ZSAqIDEwMCk7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJ3RkJykuZmluZCgnLnByb2R1Y3QtcHJpY2UnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBwYXJzZUludChwcm9kdWN0UHJpY2UudmFsKCkpKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlXG4gICAgICAgICAgICAgICAgICAgIC52YWwodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtQUk9EVUNUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9jb25zdGFudHNcIjtcbmltcG9ydCBwcmljZUluaXQgZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9oYW5kbGVycy9wcmljZUluaXRcIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKDEyMzEyMyk7XG59KTtcblxuLyoqXG4gKiBQcmljZSBmb3JtYXRcbiAqL1xuJCgnLnByb2R1Y3QtcHJpY2UtdmlldycpLmVhY2gocHJpY2VJbml0KTtcbiIsIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSBwYXJzZUludCgkKCcuYWRkLWNvdW50ZXInKS52YWwoKSk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCd0YWJsZS50YWJsZSB0Ym9keScpO1xuICAgIGNvbnN0IG1heElkID0gJCh0aGlzKS5kYXRhKCdjb3VudGVyJyk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCd0ZW1wbGF0ZSNjb25maWctcm93Jyk7XG5cbiAgICBsZXQgbmV3TGVuZ3RoID0gcGFyc2VJbnQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRySWQgPSAobWF4SWQgPiAwID8gbWF4SWQgOiAwKSArIHBhcnNlSW50KHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBuZXdSb3cgPSB0ZW1wbGF0ZS5odG1sKCkucmVwbGFjZSgvJWlkJS9nLCB0cklkKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyV0cl9pZCUvZywgdHJJZClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lZHJhZnQlL2csIHRySWQpO1xuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyB0byBuZXcgcm93c1xuICAgICAgICBsZXQgbmV3Um93SHRtbCA9ICQobmV3Um93KTtcbiAgICAgICAgJCgnLmRlZmF1bHQtcm93LXZhbHVlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBuZXdSb3dIdG1sLmZpbmQoJy4nICsgJCh0aGlzKS5kYXRhKCdjbGFzcycpKS5hdHRyKCd2YWx1ZScsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdSb3cgPSBuZXdSb3dIdG1sLmdldCgwKS5vdXRlckhUTUw7XG5cbiAgICAgICAgaWYgKG5ld0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxhc3QoKSkuYWZ0ZXIobmV3Um93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRib2R5LnByZXBlbmQobmV3Um93KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdMZW5ndGgrKztcblxuICAgICAgICB0Ym9keS5maW5kKCdbZGF0YS1hdXRvaW5jcmVtZW50PVwiMVwiXScpLmxhc3QoKS52YWwodHJJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqXG4gKiBAcGFyYW0gX1xuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKF8sIGl0ZW0pIHtcbiAgICBjb25zdCBkcm9wem9uZUNvbnRhaW5lciA9ICQoaXRlbSk7XG4gICAgY29uc3QgcHJldmlld0hpZGRlbklucHV0ID0gZHJvcHpvbmVDb250YWluZXIuZmluZCgnaW5wdXQnKTtcblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihpdGVtKVxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lQ29udGFpbmVyLmRhdGEoJ3VybCcpKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAoISFwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpIHtcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCksXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVDb250YWluZXIuZGF0YSgnZm9sZGVyJyksIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCIvKipcbiAqIE1hcmsgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQgKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICQoJyN1cGRhdGUtYWxsJykuc2hvdygpO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJChcInRyLmNoYW5nZWRcIikuZmluZCgnaW5wdXQsIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0sIHNlbGVjdCwgdGV4dGFyZWEnKSk7XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHsuLi5kYXRhfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGlmIChyZXNwLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihyZXNwLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVJvdyAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByb3dUb1NhdmUgPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG4gICAgbGV0IGFjdGlvbiA9IHJvd1RvU2F2ZS5kYXRhKCdhY3Rpb24nKTtcbiAgICBsZXQgcm93ID0gcm93VG9TYXZlLmZpbmQoXCIuZWRpdGFibGUgc2VsZWN0LCAuZWRpdGFibGUgaW5wdXRcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCQoXCJ0ci5jaGFuZ2VkXCIpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IHIgPSBjb25maXJtKCdDaGFuZ2VkIG1vcmUgdGhhbiBvbmUgcm93LiBTYXZlZCBvbmx5IGN1cnJlbnQgcm93IScpO1xuICAgICAgICBpZihyICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZighcm93VG9TYXZlLmhhc0NsYXNzKCdjaGFuZ2VkJykpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUFVUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHVybDogYWN0aW9uLFxuICAgICAgICBkYXRhOiByb3csXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwICkge1xuICAgICAgICAgICAgcm93VG9TYXZlLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcC5tZXNzYWdlXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICB0eXBlOiByZXNwLnR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCBleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChqcVhIUi5yZXNwb25zZUpTT04gJiYganFYSFIucmVzcG9uc2VKU09OLmhhc093blByb3BlcnR5KCdlcnJvcnMnKSkge1xuICAgICAgICAgICAgICAgICQuZWFjaCgganFYSFIucmVzcG9uc2VKU09OLmVycm9ycywgZnVuY3Rpb24oZXJyb3JLZXksIGVycm9yICkge1xuICAgICAgICAgICAgICAgICAgICAkLmVhY2goIGVycm9yLCBmdW5jdGlvbihtZXNzYWdlS2V5LCBtZXNzYWdlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0IGRyb3B6b25lSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9kcm9wem9uZUluaXRcIjtcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5pbXBvcnQge21hcmtDaGFuZ2VkfSBmcm9tIFwiLi9oYW5kbGVycy9tYXJrQ2hhbmdlZFwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURSwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVJvd1wiO1xuXG4vKipcbiAqIFR1cm5lZCBvZmYgdGhlIERyb3B6b25lIGF1dG8gaW5pdFxuICpcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbiQoJy5kcm9wem9uZScpLmVhY2goZHJvcHpvbmVJbml0KTtcblxuJChkb2N1bWVudClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKENMT1NFX0FXQVJEX01PREFMLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdCBjb2xvci1waWNrZXIgaW5wdXRzXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKTtcblxuICAgICAgICAkKCcjdXBkYXRlLWFsbCcpLmNsaWNrKHNhdmVQYWdlKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgJCgnI3VwZGF0ZS1hbGwnKS5zaG93KCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kcm9wem9uZScsIG1hcmtDaGFuZ2VkKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBtYXJrQ2hhbmdlZClcbiAgICAub24oJ2lucHV0JywgJ3Rib2R5IGlucHV0LCB0Ym9keSB0ZXh0YXJlYScsIG1hcmtDaGFuZ2VkKVxuICAgIC5vbignY2hhbmdlJywgJ3Rib2R5IGlucHV0LCB0Ym9keSBzZWxlY3QnLCBtYXJrQ2hhbmdlZCk7XG4iLCJjb25zdCBXQUxLX0NBVEVHT1JZID0gJzYnO1xuY29uc3QgUlVOX0NBVEVHT1JZID0nNyc7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdDIgPSAkKCcudGFibGUnKS5maW5kKCcuZW1iZWQtZ3JvdXAgc2VsZWN0LnNlbGVjdDInKTtcbiAgICAgICAgbGV0IHNlbGVjdFZhbCA9IDA7XG4gICAgICAgIHNlbGVjdDIuZWFjaChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsID0gJChpKS52YWwoKTtcbiAgICAgICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkIG9uIHRyaWdnZXIgYWRkLWVtYmVkIGJ1dHRvblxuICAgICAqL1xuICAgIC5vbignYWlfYW5pbWF0aW9uJywgJy5hZGQtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gJCh0aGlzKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gZW1iZWQuZmluZCgnLnNlbGVjdDInKS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSAkKGl0ZW0udGFyZ2V0KS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNID0gJ1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0nO1xuIiwiLyoqXG4gKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YWJsZSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLnNob3BzLXRhYmxlJykuZmluZCgndGJvZHknKTtcbiAgICBjb25zdCBkZXBhcnRtZW50SWQgPSBjdXJyZW50QnRuLmRhdGEoJ2RlcGFydG1lbnQnKTtcbiAgICBsZXQgY291bnRlciA9IHBhcnNlSW50KGN1cnJlbnRCdG4uZGF0YSgnY291bnQnKSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCcjc2hvcC10ZW1wbGF0ZScpXG4gICAgICAgIC5odG1sKClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWRlcGFydG1lbnRJZCUnLCBcImdcIiksIGRlcGFydG1lbnRJZClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWluZGV4JScsIFwiZ1wiKSwgY291bnRlcisrKTtcblxuICAgIGN1cnJlbnRCdG4uZGF0YSgnY291bnQnLCBjb3VudGVyKTtcblxuICAgIHRhYmxlLmFwcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBmb3Igc2hvcCBkZXBhcnRtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzaG9wTmFtZVByZWZpeCA9ICdzaG9wJztcbiAgICBjb25zdCBkZXBhcnRtZW50TmFtZVByZWZpeCA9ICdkZXBhcnRtZW50JztcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBmYXN0U2F2ZUNvbnRhaW5lciA9ICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XG5cbiAgICBsZXQgc2hvcHMgPSB7fTtcbiAgICBsZXQgZGVwYXJ0bWVudCA9IHt9O1xuXG4gICAgZmFzdFNhdmVDb250YWluZXIuZmluZCgndGJvZHkgdHIuY2hhbmdlZCB0ci5pbmZvJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkZXBpbmRleCA9ICQodGhpcykuY2xvc2VzdCgnLmRlcGFydG1lbnQnKS5pbmRleCgpO1xuICAgICAgICBsZXQgZGVwYXJ0bWVudEZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoJCh0aGlzKSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZGVwYXJ0bWVudEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke2RlcGFydG1lbnROYW1lUHJlZml4fVske2RlcGluZGV4fV1bJHtpfV1gO1xuICAgICAgICAgICAgZGVwYXJ0bWVudFtpdGVtTmFtZV0gPSBkZXBhcnRtZW50Rm9ybURhdGFbaV07XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMpLm5leHQoJ3RyLnNob3BzJykuZmluZCgndGJvZHkuc29ydGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoJCh0aGlzKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtzaG9wTmFtZVByZWZpeH1bJHtkZXBhcnRtZW50Rm9ybURhdGEuaWR9XVske2luZGV4fV1bJHtpfV1gO1xuICAgICAgICAgICAgICAgIHNob3BzW2l0ZW1OYW1lXSA9IGZvcm1EYXRhW2ldO1xuICAgICAgICAgICAgICAgIHNob3BzW2Ake3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVtkZXBhcnRtZW50XWBdID0gZGVwYXJ0bWVudEZvcm1EYXRhLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHsuLi5zaG9wcywgLi4uZGVwYXJ0bWVudH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICQoJy5jaGFuZ2VkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmFkaW8gaW5wdXQgZnJvbSBjaGVja2JveFxuICogQmVjYXVzZSBpbnB1dFt0eXBlPXJhZGlvXSBkaWQgbm90IHdvcmsgY29ycmVjdGx5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBjdXJyZW50SXRlbS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCcucmFkaW8nKTtcblxuICAgIGFsbEl0ZW1zLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgIGN1cnJlbnRJdGVtLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnY2hlY2tlZCcpO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG5ldyBTb3J0YWJsZSh0aGlzLCB7XG4gICAgICAgIGdyb3VwOiAnZGVwYXJ0bWVudCcsXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJykuZmluZCgndHIuZGVwYXJ0bWVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFNvcnRhYmxlKHRoaXMsIHtcbiAgICAgICAgZ3JvdXA6ICdzaG9wcycsXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAkKGUuaXRlbSkuY2xvc2VzdCgndHIuZGVwYXJ0bWVudCcpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBhcmVudC5maW5kKCcucmFkaW8uY2hlY2tlZDpndCgwKScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0sICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXdcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3IFNtYWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lLXNtYWxsJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybC1zbWFsbCcpKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBEcm9wem9uZSBJbml0XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZHJvcHpvbmVFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3VXJsRWxlbWVudFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkcm9wem9uZUluaXQoZHJvcHpvbmVFbGVtZW50LCBwcmV2aWV3VXJsRWxlbWVudCkge1xuICAgIGlmICghZHJvcHpvbmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcbiAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkKGRyb3B6b25lRWxlbWVudCkuZmluZCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld1xuICAgICAqL1xuICAgIGlmIChwcmV2aWV3VXJsRWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAqL1xuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xufSIsImltcG9ydCBhZGRTaG9wIGZyb20gXCIuL2hhbmRsZXJzL2FkZFNob3BcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IHJhZGlvSW5wdXQgZnJvbSBcIi4vaGFuZGxlcnMvcmFkaW9JbnB1dFwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgc29ydGFibGVEZXBhcnRtZW50SW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVEZXBhcnRtZW50SW5pdFwiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuc2hvd0Zvcm0oKTtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBSYWRpbyBidXR0b25zIGJlaGF2aW9yXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnJhZGlvJywgcmFkaW9JbnB1dClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyLmRlcGFydG1lbnQnKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEb2N1bWVudCByZWFkeVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgY2xhc3MgdG8gY2hlY2tlZCByYWRpb3NcbiAgICAgICAgICovXG4gICAgICAgICQoJy5yYWRpb1tjaGVja2VkXScpLmFkZENsYXNzKCdjaGVja2VkJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmFkZC1zaG9wJykuY2xpY2soYWRkU2hvcCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZhc3Qgc2F2ZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuc29ydGFibGUtZGVwYXJ0bWVudCcpLmVhY2goc29ydGFibGVEZXBhcnRtZW50SW5pdCk7XG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI3JlbGVhc2UgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNyZWxlYXNlX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnJlbGVhc2VfaWQnKS52YWwoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVyZWxlYXNlJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnLmRhdGV0aW1lcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBhZ2UgKCkge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5yZWxlYXNlLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3QsIC5jaGFuZ2VkIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZVBhZ2UpO1xuIiwiJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgndGQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKCQodGhpcykuYXR0cignc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICcjZTdlN2U3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjc291bmQgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNzb3VuZF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5zb3VuZF9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXNvdW5kX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU291bmRTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5zb3VuZC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU291bmRTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVNvdW5kU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU291bmRTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBUQU1BVE9PTF9TSE9XX0ZPUk0gPSAnVEFNQVRPT0xfU0hPV19GT1JNJztcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1RBTUFUT09MX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX0FTU0VUUyAgICAgID0gJ1NFQVJDSF9VU0VSX0FTU0VUUyc7XG5leHBvcnQgY29uc3QgU1VCTUlUX1VTRVJfUEFSVF9GT1JNICAgPSAnU1VCTUlUX1VTRVJfUEFSVF9GT1JNJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTkVJR0hCT1IgICAgICAgICA9ICdERUxFVEVfTkVJR0hCT1InO1xuZXhwb3J0IGNvbnN0IEFERF9ORUlHSEJPUiAgICAgICAgICAgID0gJ0FERF9ORUlHSEJPUic7XG5leHBvcnQgY29uc3QgR0VUX05FSUdIQk9SUyAgICAgICAgICAgPSAnR0VUX05FSUdIQk9SUyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX05FSUdIQk9SUyAgICAgICAgPSAnVVBEQVRFX05FSUdIQk9SUyc7XG5cbmV4cG9ydCBjb25zdCBORUlHSEJPUl9HUklEX0lEID0gJ25laWdoYm9yLWdyaWQnOyIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBBZGQgY29tbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJCgnI2NvbGxlY3RpYmxlLWZvcm0nKS5maW5kKCdpbnB1dCcpKTtcblxuICAgIG5ldyBodHRwKCQoJyNhZGQtY29sbGVjdGlibGUnKS5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAuZGF0YSh7ZGF0YX0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3AgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AudHlwZSA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHJlc3AuY29udGFpbmVyKS5yZXBsYWNlV2l0aChmb3JtKTtcbiAgICAgICAgICAgICAgICBub3RpZnlTdWNjZXNzKCdVc2VyIGNvbGxlY3RpYmxlIHVwZGF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBBZGQgY29tbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBodHRwKCQodGhpcykuY2xvc2VzdCgnYScpLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKHtkZXNjcmlwdGlvbjogJCgnW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbCgpfSlcbiAgICAgICAgLnN1Y2Nlc3MociA9PiB7XG4gICAgICAgICAgICBpZiAoci5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAkKCcjdXNlci1jb21tZW50cycpLnByZXBlbmQoJzx0cj48dGQ+JyArIHIubW9kZWwuZGVzY3JpcHRpb24gKyAnPC90ZD48dGQ+JyArIHIuY3JlYXRlZF9ieSArICc8L3RkPjx0ZD4nICsgci5jcmVhdGVkX2F0ICsgJyBQU1Q8L3RkPjx0ZD48YSBocmVmPVwiaHR0cDovL2Ntcy1kZXYubG9jYWwvcmVtb3ZlLWNvbW1lbnQvJyArIHIubW9kZWwuaWQgKyAnXCIgY2xhc3M9XCJhamF4LWNvbmZpcm0tYWN0aW9uXCIgZGF0YS1tZXRob2Q9XCJERUxFVEVcIiBkYXRhLWhlYWRlcj1cIkRlbGV0ZSBjb21tZW50P1wiIGRhdGEtYnRuLW5hbWU9XCJEZWxldGVcIiBkYXRhLWJ0bi1jbGFzcz1cImJ0bi1kYW5nZXIgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwiMVwiIGRhdGEtcmVsb2FkPVwiMVwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+RGVsZXRlPC9idXR0b24+PC9hPjwvdGQ+PC90cj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogU3luY2hyb25pemUgbW92ZS1wbGFjZW1lbnQtc2VsZWN0IHNlbGVjdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3RlZFN0b3JhZ2UgPSAkKHRoaXMpLnZhbCgpO1xuICAgICQodGhpcykucGFyZW50cygnZm9ybScpLmZpbmQoJy5tb3ZlLXBsYWNlbWVudC1zZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChzZWxlY3RlZFN0b3JhZ2UgIT0gJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoc2VsZWN0ZWRTdG9yYWdlKS5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtVUERBVEVfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwibW9kdWxlcy91c2Vycy9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgcGFnZSBsaW1pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpICsgJyZwYWdlX2xpbWl0PScgKyAkKHRoaXMpLnZhbCgpO1xuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdHRVQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKGAjJHtORUlHSEJPUl9HUklEX0lEfWApLnJlcGxhY2VXaXRoKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsIi8qKlxuICogQ2hhbmdlIHBsYWNlbWVudCBzZWxlY3QgaW4gQWRkIEFzc2V0cyBibG9ja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGxhY2VtZW50TmFtZSA9ICQoJyNhZGQtYXNzZXRzLWJsb2NrLXBsYWNlbWVudC1uYW1lJyk7XG4gICAgaWYgKCQodGhpcykudmFsKCkgPiAwKSB7XG4gICAgICAgIHBsYWNlbWVudE5hbWUuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50TmFtZS5zaG93KCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmVpZ2hib3JzQ291bnQgPSAkKCcjbmVpZ2hib3JzLWNvdW50Jyk7XG4gICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5laWdoYm9yc0NvdW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmxvYWQtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKSkuaHRtbCgnJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogUExBQ0VNRU5UX0FTU0VUU19ST1VURSAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIHVzZXIvZWRpdC5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHBsYWNlbWVudCA9IGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpO1xuXG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmhpZGUtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIGxvYWRQYXJ0KFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgKyAnJnBsYWNlbWVudD0nICsgcGxhY2VtZW50LCAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBwbGFjZW1lbnQpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBMb2FkIHBhcnQgZm9yIGVkaXQgdXNlciBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRQYXJ0KGFjdGlvbiwgZWxlbWVudCkge1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSAkKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGl0ZW1zLmZpbmQoJy5saXN0LXRodW1ibmFpbCcpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArICQodGhpcykuZGF0YSgnZnVsbCcpICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGl0ZW1zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn0iLCIvKipcbiAqIFNlbGVjdCByb3dzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb3VudFNlbGVjdG9yID0gJCh0aGlzKS5wYXJlbnRzKCd0ZCwgdGgnKS5maW5kKCcuY291bnQtZm9yLXNlbGVjdCcpO1xuICAgIGNvbnN0IHJvd3NGb3JTZWxlY3QgPSAkKHRoaXMpLnBhcmVudHMoJ3RhYmxlJykuZmluZCgnLmZvci1zZWxlY3QnKTtcblxuICAgIGxldCBjb3VudEZvclNlbGVjdCA9IGNvdW50U2VsZWN0b3IudmFsKCkgfHwgMDtcbiAgICBpZiAoY291bnRGb3JTZWxlY3QgPT09IDApIHtcbiAgICAgICAgY291bnRGb3JTZWxlY3QgPSByb3dzRm9yU2VsZWN0Lmxlbmd0aDtcbiAgICAgICAgY291bnRTZWxlY3Rvci52YWwoY291bnRGb3JTZWxlY3QpO1xuICAgIH1cblxuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgIHJvd3NGb3JTZWxlY3QuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGNvdW50Rm9yU2VsZWN0ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY291bnRGb3JTZWxlY3QtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtVUERBVEVfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwibW9kdWxlcy91c2Vycy9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgbmVpZ2hib3IgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIChyZXNwb25zZSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShVUERBVEVfTkVJR0hCT1JTLCBzZWxmKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIG5ldyBodHRwKCQodGhpcykuY2xvc2VzdCgnZm9ybScpLmF0dHIoJ2FjdGlvbicpKVxuICAgICAgICAgICAgICAgIC5tZXRob2QoJ0dFVCcpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGAjJHtORUlHSEJPUl9HUklEX0lEfWApLnJlcGxhY2VXaXRoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FERF9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBuZWlnaGJvciBhcyBhY3RpdmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBRERfTkVJR0hCT1IsIHJlc3AgPT4ge1xuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgJCgnI2RlbGV0ZS1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtERUxFVEVfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgbmVpZ2hib3IgYXMgZGVsZXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKERFTEVURV9ORUlHSEJPUiwgcmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0dFVF9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgbmVpZ2hib3IgZ3JpZCBpbiBzZWFyY2hpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShHRVRfTkVJR0hCT1JTLCByZXNwID0+IHtcbiAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1NFQVJDSF9VU0VSX0FTU0VUU30gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNlYXJjaCB1c2VyIGFzc2V0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNFQVJDSF9VU0VSX0FTU0VUUywgZGF0YSA9PiB7XG4gICAgICAgICQoJyNzZWFyY2gtYXNzZXRzLWNvbnRhaW5lcicpLnJlcGxhY2VXaXRoKGRhdGEpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5pbXBvcnQge1NVQk1JVF9VU0VSX1BBUlRfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNVQk1JVF9VU0VSX1BBUlRfRk9STSwgcmVzcCA9PiB7XG4gICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xuXG4gICAgICAgICQoJyMnICsgcmVzcC5jb250YWluZXIpLnJlcGxhY2VXaXRoKGZvcm0pO1xuICAgICAgICBmb3JtLmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgICAgICBub3RpZnlTdWNjZXNzKCdVc2VyIGRhdGEgdXBkYXRlZCcpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNlYXJjaFVzZXJBc3NldHMgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0c1wiO1xuaW1wb3J0IHN1Ym1pdFVzZXJQYXJ0Rm9ybSAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc3VibWl0VXNlclBhcnRGb3JtXCI7XG5pbXBvcnQgZGVsZXRlTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvclwiO1xuaW1wb3J0IHNlYXJjaE5laWdoYm9yICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3JcIjtcbmltcG9ydCBhZGROZWlnaGJvciAgICAgICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZE5laWdoYm9yXCI7XG5pbXBvcnQgbG9hZFBsYWNlbWVudEFzc2V0cyAgIGZyb20gXCIuL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBoaWRlUGxhY2VtZW50QXNzZXRzICAgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVBsYWNlbWVudEFzc2V0c1wiO1xuaW1wb3J0IGNoYW5nZVBsYWNlbWVudCAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzXCI7XG5pbXBvcnQgY2hhbmdlTW92ZVBsYWNlbWVudCAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnRcIjtcbmltcG9ydCBzZWxlY3RSb3dzICAgICAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvc2VsZWN0Um93c1wiO1xuaW1wb3J0IHVwZGF0ZU5laWdoYm9ycyAgICAgICBmcm9tIFwiLi9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnNcIjtcbmltcG9ydCBjaGFuZ2VQYWdlTGltaXQgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGFnZUxpbWl0XCI7XG5pbXBvcnQgYWRkQ29tbWVudCAgICAgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2FkZENvbW1lbnRcIjtcbmltcG9ydCBhZGRDb2xsZWN0aWJsZSAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvYWRkQ29sbGVjdGlibGVcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vKipcbiAqIFNlYXJjaCB1c2VyIGFzc2V0cyBsaXN0ZW5lclxuICovXG5zZWFyY2hVc2VyQXNzZXRzKCk7XG5cbi8qKlxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtIGxpc3RlbmVyXG4gKi9cbnN1Ym1pdFVzZXJQYXJ0Rm9ybSgpO1xuXG4vKipcbiAqIERlbGV0ZSBOZWlnaGJvclxuICovXG5kZWxldGVOZWlnaGJvcigpO1xuXG4vKipcbiAqIEFkZCBOZWlnaGJvclxuICovXG5hZGROZWlnaGJvcigpO1xuXG4vKipcbiAqIFNlYXJjaCBOZWlnaGJvcnNcbiAqL1xuc2VhcmNoTmVpZ2hib3IoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIExvYWQgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmxvYWQtYXNzZXRzJywgbG9hZFBsYWNlbWVudEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBwbGFjZW1lbnQgaW4gQWRkIEFzc2V0cyBibG9ja1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNwbGFjZW1lbnQtZm9yLWFzc2V0JywgY2hhbmdlUGxhY2VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjaXMtcmFuZG9tLW5laWdoYm9ycycsIGNoYW5nZVJhbmRvbU5laWdoYm9ycylcblxuICAgIC8qKlxuICAgICAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXNzZXRzJywgaGlkZVBsYWNlbWVudEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIEF1dG8gc2VsZWN0IHJvd3NcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuc2VsZWN0LXJvd3MnLCBzZWxlY3RSb3dzKVxuXG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemUgbW92ZS1wbGFjZW1lbnQtc2VsZWN0IHNlbGVjdHNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcubW92ZS1wbGFjZW1lbnQtc2VsZWN0JywgY2hhbmdlTW92ZVBsYWNlbWVudClcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBuZWlnaGJvciByZXF1ZXN0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLW5laWdoYm9yLXJlcXVlc3QsICNhZGQtbmVpZ2hib3JzJywgdXBkYXRlTmVpZ2hib3JzKVxuICAgIC8qKlxuICAgICAqIFNldCBwYWdlIGxpbWl0XG4gICAgICovXG4gICAgIC5vbignY2hhbmdlJywgJy5uZWlnaGJvci1wYWdlLWxpbWl0JywgY2hhbmdlUGFnZUxpbWl0KVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhZGQtY29tbWVudCcsIGFkZENvbW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29sbGVjdGlibGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhZGQtY29sbGVjdGlibGUnLCBhZGRDb2xsZWN0aWJsZSlcbjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=