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

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__["default"])(modules_product_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_SHOW_FORM"]));
$('#test').click(function () {
  console.log('test');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9hcHAvbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsQ29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hZGRFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hamF4UGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9jb25maXJtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9tb2RhbERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvcGFnZUxpbWl0LmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIG1vZHVsZXMoLiopbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzPzhmYmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hZGQtbWUvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzLWxvZy9zdHlsZXMuc2Nzcz83NTZlIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY29weUFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9kb3dubG9hZEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9tYXJrQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hd2FyZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvZG93bmxvYWRBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9oaWRlQXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVUYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3NlbGVjdFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3Nob3dBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd1Rhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvc3R5bGVzLnNjc3M/NWY0OCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2Nzcz82NzA3Iiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9hZGRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL2hhbmRsZXJzL2RlbGV0ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9zdHlsZS5zY3NzP2NlMmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9kZXBsb3lTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L3N0eWxlcy5zY3NzP2ZkMjMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzPzg0M2MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdXJjaGFzZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdXJjaGFzZS9zdHlsZS5zY3NzPzA1ZGUiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9kcm9wem9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9tYXJrQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9hZGRTaG9wLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3JhZGlvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVEZXBhcnRtZW50SW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9zdHlsZXMuc2Nzcz81ZTVhIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2Nzcz9iNzI5Iiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29sbGVjdGlibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9hZGRDb21tZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlTW92ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVBhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvc2VsZWN0Um93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3VwZGF0ZU5laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9hZGROZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zZWFyY2hOZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL3N0eWxlcy5zY3NzP2Q5Y2MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3M/MmI1NCJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsIl9hZnRlckJ1aWxkIiwib2ZmIiwiX29uQ2xvc2UiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJwYXJlbnRCdXR0b24iLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJjbG9zZXN0Iiwic2VyaWFsaXplQXJyYXkiLCJwYXJzZUludCIsInJlbG9hZCIsImRpc21pc3MiLCJjdXJyZW50QnRuIiwic2F2ZWRJdGVtIiwiYXR0ciIsImdldEZvcm1EYXRhIiwiQ09OVEFJTkVSX1NFTEVDVE9SIiwiUEFHRV9TQVZFRCIsIlVQREFURV9TQVZFX0FMTF9CVVRUT04iLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRhdGVGb3JtYXQiLCJkYXRlUmFuZ2VJbnB1dHMiLCJzZWxlY3RlZE9wdGlvbiIsImRhdGVGcm9tIiwiZGF0ZVRvIiwic2VsZWN0ZWRWYWx1ZSIsInZhbCIsImNzcyIsInZpc2liaWxpdHkiLCJoZWlnaHQiLCJkYXRlRnJvbVZhbHVlIiwiZGF0ZVRvVmFsdWUiLCJtb21lbnQiLCJmb3JtYXQiLCJzdWJ0cmFjdCIsImRheSIsInN0YXJ0T2YiLCJlbmRPZiIsImRvY3VtZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZWFjaCIsInJlbW92ZUF0dHIiLCJyZWFkeSIsInRhYmxlc29ydGVyIiwic3RpY2t5VGFibGVIZWFkZXJzIiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwicGFnZUxpbWl0IiwiZGF0ZVJhbmdlIiwiZmlsdGVyRGF0ZVJhbmdlIiwiY2hhbmdlIiwiaW5pdFN0aWNreSIsImZhc3RTYXZlUGFnZSIsImFmdGVyQnVpbGQiLCJvbkNsb3NlIiwiY2xvc2VFdmVudCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmVudCIsImlkIiwiY2FuUmVsb2FkIiwiYnV0dG9uIiwiZGF0YVJlbG9hZCIsInJvb3RGb2xkZXIiLCJmaWxlTmFtZSIsImdldFN1YkZvbGRlciIsImZvcm0iLCJmb3JtRGF0YSIsImN1cnJlbnRJdGVtIiwicHJvcCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwialF1ZXJ5IiwiU0VOVFJZX0RTTiIsIlJhdmVuIiwieGhyIiwiZG9tIiwic2VudHJ5IiwiaW5zdGFsbCIsInBhdGgiLCJwYXRobmFtZSIsInNwbGl0IiwibW9kdWxlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJtb2R1bGVJdGVtcyIsInN1Yk1vZHVsZXMiLCJzdWJzY3JpYmUiLCJBV0FSRF9DUkVBVEUiLCJzZWxmIiwidW5zdWJzY3JpYmUiLCJlZGl0QnRuIiwidGVtcGxhdGVJZCIsInRlbXBsYXRlUGxhY2Vob2xkZXIiLCJhd2FyZF9pZCIsImZpZWxkTmFtZSIsIkFXQVJEX0NSRUFURUQiLCJBV0FSRF9ERUxFVEUiLCJjcmVhdGVCdG4iLCJjaGlsZHJlbiIsIkVWRU5UX05BTUUiLCJkcm9wem9uZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpZXdVUkwiLCJkcm9wem9uZUJ1aWxkZXIiLCJEcm9wem9uZUJ1aWxkZXIiLCJzZXRVcGxvYWRVcmwiLCJjYW5jZWwiLCJmaWxlX25hbWUiLCJ2YWx1ZSIsInNldFByZXZpZXciLCJnZXRGaWxlUGF0aCIsImZvbGRlciIsImJ1aWxkIiwic2F2ZUFsbEJ1dHRvbiIsImNvdW50ZXIiLCJjb3VudCIsInNob3ciLCJoaWRlIiwiQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQiLCJERUxUQV9USU1FX0FUVFJJQlVURSIsInRvZ2dsZUNsYXNzIiwiY3VycmVudEVsZW1lbnQiLCJSZXF1ZXN0QnVpbGRlciIsImluZGV4IiwiXyIsIml0ZW0iLCJ1cGRhdGVJbmRleGVzIiwiY3VycmVudExpIiwiZGVsdGFUaW1lSGlkZGVuIiwiZGVsdGFUaW1lRGlzcGxheSIsInRpbWVUeXBlIiwiY29sbGFwc2VTdGF0ZSIsImNvbGxhcHNlU3RhdGVzIiwicmVtb3ZlQWN0aW9uVHlwZVN0YXRlIiwic2F2ZVN0YXRlIiwicmVzcCIsIkFOTk9VTkNFTUVOVFNfU0hPV19GT1JNIiwiZGF0ZXRpbWVwaWNrZXIiLCJhdXRvY2xvc2UiLCJhd2FyZENyZWF0ZSIsImJpbmQiLCJfdGhpcyIsImF3YXJkRGVsZXRlIiwiQ0xPU0VfQVdBUkRfTU9EQUwiLCJzaG93Rm9ybSIsIm5leHQiLCJzZXRTdWJ0eXBlcyIsInN1YnR5cGUiLCJhc3NldEZvcm1TdWJ0eXBlIiwiYXNzZXRGb3JtQWN0aW9uVHlwZSIsImFzc2V0Rm9ybUNvbGxlY3Rpb24iLCJwcmljZXMiLCJlbXB0eSIsInNlbGVjdDIiLCJTVUJfVFlQRVMiLCJlbGVtZW50IiwiY29weUFzc2V0cyIsImFzc2V0SWRzRmllbGQiLCJ3aXRoTmFtZSIsImFzc2V0SWRzIiwibiIsImFzc2V0SWQiLCJhc3NldE5hbWUiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImRvd25sb2FkQXNzZXRzIiwiY29sbGVjdGlvbl9pZCIsInBhcmVudENvbnRhaW5lciIsImNoYW5nZVR5cGUiLCJnZXRMYXN0Q29sbGVjdGlvbk51bWJlciIsImN1cnJlbnRUZCIsInVwZGF0ZVNhdmVBbGxCdXR0b24iLCJCQU5ORVJfU0hPV19GT1JNIiwiVFlQRV9TRUxFQ1RfSUQiLCJzZWxlY3RlZEluZGV4Iiwib3B0aW9ucyIsInNlbGVjdGVkRWxlbWVudCIsImRyb3Bab25lSW5pdCIsImNvcHlBZHAiLCJhZHBJZHNGaWVsZCIsImFkcElkcyIsImFkcElkIiwiZG93bmxvYWRBZHAiLCJoaWRlQXJjaGl2ZSIsImhpZGVUYXNrcyIsInNlbGVjdFJvdyIsImNoZWNrYm94IiwiaXMiLCJzaG93QXJjaGl2ZSIsImFjdGlvbiIsInNob3dUYXNrcyIsIkNBU0giLCJDT0lOIiwiQVNTRVQiLCJzb3VyY2VWYWwiLCJtYXRjaGVyIiwicGFyYW1zIiwiaW5BcnJheSIsIndyYXBwZXIiLCJnZXRTZWxlY3Rpb24iLCJDT0xMRUNUSU9OX1NIT1dfRk9STSIsImFzc2V0UHJldmlld1RlbXBsYXRlIiwiYXNzZXRzIiwiY3VycmVudEFzc2V0IiwicHJldmlld191cmwiLCJTb3J0YWJsZSIsImdyb3VwIiwicmVtb3ZlQ2xvbmVPbkhpZGUiLCJvbkVuZCIsInBvc2l0aW9uIiwibWFya0lucHV0QXNDaGFuZ2VkIiwic29ydGFibGVJbml0IiwiaGlkZUFkZGl0aW9uYWxSb3dzIiwiYWRkUm93IiwiYWRkX2NvdW50ZXIiLCJ0Ym9keSIsInRyTGFzdCIsImxhc3RJRCIsImxhc3QiLCJpbmNyZW1lbnRJZCIsImkiLCJkZWxldGVSb3ciLCJyb3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJhZGROZXdSb3ciLCJsYXN0SURTIiwiZmlyc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJtaW5WaWV3Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImRlcGxveVN0YXR1cyIsIkRFUExPWV9TVEFUVVNfUk9VVEUiLCJpc0FjdGl2ZSIsInNldFRpbWVvdXQiLCJjaGFuZ2VUYWIiLCJkaXJlY3Rpb24iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2hvd0RlcGVuZGVuY3kiLCJjdXJyZW50Q29uZmlnIiwiYWRkTW9kZSIsIm9uZUxldmVsU2hvdyIsImNvbmZpZ05hbWUiLCJsZXZlbCIsIkRFUExPWV9ERVBFTkRTIiwiY29uZmlnQmxvY2siLCJkZXBlbmRDb25maWdOYW1lIiwic2hvd0RlcGVuZGVuY3lQb3B1cCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRDb25maWdJZCIsImlkcyIsInJvb3RMZXZlbFNob3ciLCJpZFJlc3BvbnNlIiwidGV4dENsYXNzIiwiaXNSZWN1cnNpb24iLCJnZXREZXBsb3lNb2RlbElkcyIsIkRFUExPWV9NT0RFTF9JRFNfUk9VVEUiLCJBQ1RJVkVfRElSRUNUSU9OIiwiY2hlY2tlZCIsInNhdmVEcGFTdGF0ZSIsImxhc3RSb3ciLCJjb2xvcnBpY2tlciIsImNoYW5nZVJvd0luZGV4Iiwicm93SW5kZXgiLCJvbGROYW1lIiwibmV3TmFtZSIsImluZGV4T2YiLCJEWUVfQ09OVEFJTkVSX1NFTEVDVE9SIiwibWFya0NoYW5nZWRUciIsImR5ZVNhdmVQYWdlIiwiR0lGVF9XUkFQX1JPV19BRERFRCIsImN1cnJlbnRJbnB1dCIsImFzc2V0SUQiLCJjdXJyZW50QXNzZXREdXBsaWNhdGUiLCJlcnIiLCJwb3NpdGlvblVwZGF0ZSIsImJ1dHRvblVybCIsInBhZ2UiLCJwYWdlX2xpbWl0IiwiYXNzZXRDaGFuZ2VkIiwicmVtb3ZlUm93Iiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsInByZXBlbmQiLCJzYXZlTG9jYWxpemF0aW9uU3RhdGUiLCJjdXJyZW50S2V5IiwiY3VycmVudEtleUR1cGxpY2F0ZSIsInNhdmVNYWdpY1N0YXRlIiwibWFrZXVwX2tpdF9pZCIsImdldExhc3RNYWtldXBLaXRJRCIsIk1BS0VVUF9LSVRfU0hPV19GT1JNIiwiaW5ncmVkaWVudERlbGV0ZSIsIm1lYWxEZWxldGUiLCJzYXZlTWVhbFN0YXRlIiwiTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNIiwiVFJBU0giLCJUUkFTSF9GSUVMRFNfSUQiLCJTRUxFQ1RfSUQiLCJ0cmFzaEZpZWxkcyIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInByZWZpeCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicm91bmQiLCJyYXdWYWx1ZSIsInByb2R1Y3RQcmljZSIsInByaWNlSW5pdCIsIm1heElkIiwibmV3TGVuZ3RoIiwidHJJZCIsIm5ld1JvdyIsIm5ld1Jvd0h0bWwiLCJkZWZhdWx0VmFsdWUiLCJnZXQiLCJvdXRlckhUTUwiLCJhZnRlciIsInByZXZpZXdIaWRkZW5JbnB1dCIsInNhdmVQYWdlIiwic2F2ZVJvdyIsInJvd1RvU2F2ZSIsInIiLCJjb25maXJtIiwiZGF0YVR5cGUiLCJqcVhIUiIsImV4Y2VwdGlvbiIsImVycm9yS2V5IiwibWVzc2FnZUtleSIsImF1dG9EaXNjb3ZlciIsImRyb3B6b25lSW5pdCIsInNhdmVCdXR0b24iLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJzaG9wTmFtZVByZWZpeCIsImRlcGFydG1lbnROYW1lUHJlZml4IiwiZmFzdFNhdmVDb250YWluZXIiLCJzaG9wcyIsImRlcGFydG1lbnQiLCJkZXBpbmRleCIsImRlcGFydG1lbnRGb3JtRGF0YSIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJyYWRpbyIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzb3J0YWJsZURlcGFydG1lbnRJbml0Iiwic2F2ZVNvdW5kU3RhdGUiLCJUQU1BVE9PTF9TSE9XX0ZPUk0iLCJTRUFSQ0hfVVNFUl9BU1NFVFMiLCJTVUJNSVRfVVNFUl9QQVJUX0ZPUk0iLCJERUxFVEVfTkVJR0hCT1IiLCJBRERfTkVJR0hCT1IiLCJHRVRfTkVJR0hCT1JTIiwiVVBEQVRFX05FSUdIQk9SUyIsIk5FSUdIQk9SX0dSSURfSUQiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm1vZGVsIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfYXQiLCJzZWxlY3RlZFN0b3JhZ2UiLCJwbGFjZW1lbnROYW1lIiwibmVpZ2hib3JzQ291bnQiLCJzaWJsaW5ncyIsInBsYWNlbWVudCIsImxvYWRQYXJ0IiwiUExBQ0VNRU5UX0FTU0VUU19ST1VURSIsIml0ZW1zIiwicG9wb3ZlciIsImNvdW50U2VsZWN0b3IiLCJyb3dzRm9yU2VsZWN0IiwiY291bnRGb3JTZWxlY3QiLCJuZWlnaGJvcl9pZCIsInN0YXR1c190ZXh0Iiwic2VhcmNoVXNlckFzc2V0cyIsInN1Ym1pdFVzZXJQYXJ0Rm9ybSIsImRlbGV0ZU5laWdoYm9yIiwiYWRkTmVpZ2hib3IiLCJzZWFyY2hOZWlnaGJvciIsImxvYWRQbGFjZW1lbnRBc3NldHMiLCJjaGFuZ2VQbGFjZW1lbnQiLCJjaGFuZ2VSYW5kb21OZWlnaGJvcnMiLCJoaWRlUGxhY2VtZW50QXNzZXRzIiwic2VsZWN0Um93cyIsImNoYW5nZU1vdmVQbGFjZW1lbnQiLCJ1cGRhdGVOZWlnaGJvcnMiLCJjaGFuZ2VQYWdlTGltaXQiLCJhZGRDb21tZW50IiwiYWRkQ29sbGVjdGlibGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Z0IsNkRBekJsQztBQTJCSTs7O0FBM0JKLENBOEJLcmdCLEVBOUJMLENBOEJRLFFBOUJSLEVBOEJrQix3QkE5QmxCLEVBOEI0Q3NnQixxRUE5QjVDO0FBZ0NJOzs7QUFoQ0osQ0FtQ0t0Z0IsRUFuQ0wsQ0FtQ1EsT0FuQ1IsRUFtQ2lCLDBDQW5DakIsRUFtQzZEdWdCLGtFQW5DN0Q7QUFvQ0k7OztBQXBDSixDQXVDTXZnQixFQXZDTixDQXVDUyxRQXZDVCxFQXVDbUIsc0JBdkNuQixFQXVDMkN3Z0Isa0VBdkMzQztBQXlDSTs7O0FBekNKLENBNENLeGdCLEVBNUNMLENBNENRLE9BNUNSLEVBNENpQixjQTVDakIsRUE0Q2lDeWdCLDZEQTVDakM7QUE4Q0k7OztBQTlDSixDQWlES3pnQixFQWpETCxDQWlEUSxPQWpEUixFQWlEaUIsa0JBakRqQixFQWlEcUMwZ0IsaUVBakRyQyxFOzs7Ozs7Ozs7Ozs7QUMzQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKipcbiAqIEJhc2Ugc2l6ZXNcbiAqXG4gKiBAdHlwZSB7e3NtOiBzdHJpbmcsIGxnOiBzdHJpbmd9fVxuICovXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XG4gICAgc206ICdzbScsXG4gICAgbWQ6ICdtZCcsXG4gICAgbGc6ICdsZycsXG59O1xuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcblxuLyoqXG4gKiBMb2FkaW5nIHRleHRcbiAqIEl0IHdpbGwgYmUgc2hvd24gYWZ0ZXIgdGhlIHN0YXJ0IG9mIGltYWdlIHVwbG9hZGluZ1xuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IExPQURJTkdfVEVYVCA9ICdMb2FkaW5nLi4uJztcblxuLyoqXG4gKiBEcm9wem9uZSBidWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHJvcHpvbmVDb250YWluZXJcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJvcHpvbmVDb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZHJvcHpvbmVDb250YWluZXIgPSBkcm9wem9uZUNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uID0gJChkcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmRyb3B6b25lLWNhbmNlbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cmwgdG8gdXBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0VXBsb2FkVXJsKHVybCkge1xuICAgICAgICB0aGlzLl91cGxvYWRVcmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0IHByZXZpZXcgaW1hZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHNldFByZXZpZXcobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpZXcgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBlcnJvciBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBlcnJvcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lcnJvckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYW5jZWwgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgY2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdWNjZXNzIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN1Y2Nlc3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fc3VjY2Vzc0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGRyb3B6b25lXG4gICAgICogQHJldHVybnMge0Ryb3B6b25lfVxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgX2Ryb3B6b25lQnVpbGRlciA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgYWZ0ZXIgZmFpbFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVGYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2R6LXN0YXJ0ZWQnKTtcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1wcmV2aWV3JykucmVtb3ZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlndXJhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXBsb2FkVXJsLFxuICAgICAgICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXG4gICAgICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gtY3NyZi10b2tlbic6IENTUkZfVE9LRU5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNldCBjdXJyZW50IGltYWdlIGluIHRoZSBkcm9wem9uZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3ICYmICEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiYWRkZWRmaWxlXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldywgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEFkZGVkIGZpbGUgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQoTE9BRElOR19URVhUKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3B6b25lRmFpbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTdWNjZXNzIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXIgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgICogQ2xlYXIgZmlsZSBpbmZvIGluIGRyb3B6b25lXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoISF0aGlzLl9jYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIG5ldyBEcm9wem9uZSh0aGlzLl9kcm9wem9uZUNvbnRhaW5lciwgey4uLmNvbmZpZywgLi4udGhpcy5fY29uZmlnfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuL2Vycm9ySGFuZGxlcic7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcIi4vc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBIVFRQIFJlcXVlc3QgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9tZXRob2QgPSAnZ2V0JztcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3NIYW5kbGVyO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cblxuICAgIG1ldGhvZChtZXRob2QpIHtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlcnJvcihmbikge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN1Y2Nlc3MoZm4pIHtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGZuKSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2VuZCgpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5fbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICAgICAgICAgIGVycm9yOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuX3N1Y2Nlc3MsXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5fY29tcGxldGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQmFzZSBlcnJvciBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdGhlIHJvdXRlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2Uucm91dGUpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJvdXRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYWxsIG1lc3NhZ2VzXG4gICAgICovXG4gICAgaWYoISFyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2tleV0ubWFwKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vUmVxdWVzdEJ1aWxkZXInO1xuIiwiaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcblxuLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL21vZGFsJztcbmltcG9ydCAnLi9vYnNlcnZlcic7XG5pbXBvcnQgJy4vaHR0cCc7XG4iLCJjb25zdCBtb2RhbHNDb250YWluZXIgPSAkKCdib2R5Jyk7XG5cbmNvbnN0IE1PREFMX1NJWkVTID0ge1xuICAgIHNtOiAnbW9kYWwtc20nLFxuICAgIG1kOiAnbW9kYWwtbWQnLFxuICAgIGxnOiAnbW9kYWwtbGcnLFxufTtcblxuLyoqXG4gKiBVbmlxdWUgaW5kZXggb2YgdGhlIG1vZGFsXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsSW5kZXggPSAwO1xuXG4vKipcbiAqIENvdW50ZXIgb2YgdGhlIG1vZGFscyBhdCB0aGUgcGFnZVxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBtb2RhbENvdW50ZXIgPSAwO1xuXG4vKipcbiAqIE1vZGFsIEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIG1vZGFsSW5kZXgrKztcbiAgICAgICAgdGhpcy5faWQgPSAnbW9kYWxzLWNvbnRhaW5lci1pdGVtLScgKyBtb2RhbEluZGV4O1xuICAgIH1cblxuICAgIHNpemUoc2l6ZSkge1xuICAgICAgICBpZiAoISFNT0RBTF9TSVpFU1tzaXplXSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IE1PREFMX1NJWkVTW3NpemVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZGVyKGhlYWRlcikge1xuICAgICAgICB0aGlzLl9oZWFkZXIgPSBoZWFkZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYm9keShib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZvb3Rlcihmb290ZXIpIHtcbiAgICAgICAgdGhpcy5fZm9vdGVyID0gZm9vdGVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGFzZXQoZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9kYXRhc2V0ID0gZGF0YXNldDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZ2V0SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBfZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc2l6ZSA/IHRoaXMuX3NpemUgOiBNT0RBTF9TSVpFUy5tZDtcbiAgICB9XG5cbiAgICBfZ2V0SGVhZGVyKCkge1xuICAgICAgICBpZiAoISF0aGlzLl9oZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiR7dGhpcy5faGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgX2dldEZvb3RlcigpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2Zvb3Rlcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PmApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKGBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2Zvb3Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfZ2V0Qm9keSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2JvZHkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGJlZm9yZSBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYmVmb3JlQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfYmVmb3JlQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYWZ0ZXIgYnVpbGQgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFmdGVyQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9hZnRlckJ1aWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBjbG9zZSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgb25DbG9zZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX29uQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25DbG9zZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9kYWwoY29udGVudCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGxldCBkYXRhc2V0ID0gW107XG4gICAgICAgIGlmICghIXRoaXMuX2RhdGFzZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIGRhdGFzZXQucHVzaChgZGF0YS0ke25hbWV9PVwiJHt0aGlzLl9kYXRhc2V0W25hbWVdfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaHRtbCA9ICQoYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7IHRoaXMuX2dldElEKCkgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgJHtkYXRhc2V0LmpvaW4oJyAnKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgJHt0aGlzLl9nZXRTaXplKCl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcblxuICAgICAgICBpZiAoISFjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCB0aGUgYmVmb3JlQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkKCk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcubW9kYWwtY29udGVudCcpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEhlYWRlcigpKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRCb2R5KCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEZvb3RlcigpKTtcblxuICAgICAgICBtb2RhbHNDb250YWluZXIuYXBwZW5kKGh0bWwpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBhZnRlckJ1aWxkIGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHVwZGF0ZSBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxuICAgICAgICAgKi9cbiAgICAgICAgbW9kYWxDb3VudGVyKys7XG5cbiAgICAgICAgJCgnIycgKyB0aGlzLl9nZXRJRCgpKVxuICAgICAgICAgICAgLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWxDb3VudGVyLS07XG4gICAgICAgICAgICAgICAgJCgnIycgKyB0aGlzLl9nZXRJRCgpKVxuICAgICAgICAgICAgICAgICAgICAub2ZmKCdoaWRkZW4uYnMubW9kYWwnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQ2FsbCB0aGUgb25DbG9zZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2xvc2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubW9kYWwoKTtcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGFsQ291bnRlcigpIHtcbiAgICByZXR1cm4gbW9kYWxDb3VudGVyO1xufVxuIiwiaW1wb3J0ICcuL01vZGFsQnVpbGRlcidcbmltcG9ydCAnLi9tb2RhbENvbmZpcm0nXG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIE1vZGFsIGNvbmZpcm1cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbENvbmZpcm0obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIobWVzc2FnZSlcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tc3VjY2VzcycsXG4gICAgICAgICAgICAndGV4dCc6ICdDb25maXJtJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogY2FsbGJhY2tcbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xufVxuIiwiLyoqXG4gKiBOb3RpZnkgaGVscGVyXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VcbiAqIEBwYXJhbSB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlLCB0eXBlKSB7XG4gICAgJC5ub3RpZnkoe21lc3NhZ2U6IG1lc3NhZ2V9LHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgel9pbmRleDogMTA1MVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdkYW5nZXInKTtcbn1cbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIG5vdGlmeShtZXNzYWdlLCAnc3VjY2VzcycpO1xufVxuIiwiLyoqXG4gKiBFdmVudCBvYnNlcnZlclxuICovXG5jbGFzcyBFdmVudE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2xvZygnc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3BhdGNoIChldmVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9sb2coJ2Rpc3BhdGNoJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoZGF0YSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlIChldmVudCwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fbG9nKCd1bnN1YnNjcmliZScsIGV2ZW50KTtcblxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgaWYoISFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gdGhpcy5zdWJzY3JpYmVyc1tldmVudF0uZmlsdGVyKGhhbmRsZXIgPT4gaGFuZGxlciAhPT0gc3RhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBEZWxldGUgYWxsIHN1YnNjcmliZXJzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvZyhtZXRob2QsIGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1ldGhvZC50b1VwcGVyQ2FzZSgpLCAnOicsICdbJywgZXZlbnQsICddJyk7XG4gICAgfVxufVxuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBFdmVudE9ic2VydmVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyO1xuIiwiaW1wb3J0ICcuL0V2ZW50T2JzZXJ2ZXInO1xuIiwiLyoqXG4gKiBTYXZlZCBpdGVtIG5vdCBmb3VuZFxuICpcbiAqIFVzaW5nIGluIGZhc3RTYXZlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFNhdmVkSXRlbU5vdEZvdW5kIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1NhdmVkSXRlbU5vdEZvdW5kJztcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcblxuLyoqXG4gKiBBZGQgZW1iZWQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFyZ2V0ID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0YXJnZXQnKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGN1cnJlbnRCdXR0b24uZGF0YSgndGVtcGxhdGUnKTtcbiAgICBjb25zdCBpZFBsYWNlaG9sZGVyID0gY3VycmVudEJ1dHRvbi5kYXRhKCdpZHBsYWNlcG9sZGVyJyk7XG5cbiAgICBsZXQgcm93SWQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJyk7XG4gICAgY3VycmVudEJ1dHRvbi5kYXRhKCdyb3dpZCcsICsrcm93SWQpO1xuXG4gICAgbGV0IGVtYmVkRm9ybSA9ICQoJyMnKyB0ZW1wbGF0ZSkuaHRtbCgpO1xuICAgIGNvbnN0IGVtYmVkQmxvY2tJZCA9IHJvd0lkICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKS50b1N0cmluZygxNik7XG4gICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoLyVlbWJlZEJsb2NrSWQlL2csIGVtYmVkQmxvY2tJZCk7XG5cbiAgICBpZiAoISFpZFBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGVtYmVkRm9ybSA9IGVtYmVkRm9ybS5yZXBsYWNlKCBuZXcgUmVnRXhwKGlkUGxhY2Vob2xkZXIsIFwiZ1wiKSwgcm93SWQpXG4gICAgfVxuXG4gICAgJCgnIycgKyB0YXJnZXQpLmFwcGVuZChlbWJlZEZvcm0pO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgZGlzcGF0Y2hcbiAgICAgKi9cbiAgICBjb25zdCBldmVudCA9IGN1cnJlbnRCdXR0b24uZGF0YSgnZXZlbnQnKTtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQubGVuZ3RoKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGV2ZW50LCB7XG4gICAgICAgICAgICBlbWJlZEJsb2NrSWQ6IGVtYmVkQmxvY2tJZFxuICAgICAgICB9KVxuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLnRyaWdnZXIoJ2FpX2FuaW1hdGlvbicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqQWpheCBwYWdpbmF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMpLnBhcmVudHMoJy5hamF4LXBhZ2luYXRpb24nKS5kYXRhKCdjb250YWluZXInKTtcbiAgIFxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJCgnIycgKyBjb250YWluZXIpLnJlcGxhY2VXaXRoKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogT3BlbiBjb25maXJtIG1vZGFsIGJlZm9yZSBhY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG4gICAgY29uc3QgdXJsID0gdGhpcy5ocmVmO1xuICAgIGNvbnN0IHBhcmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoZGF0YVNldC5oZWFkZXIpXG4gICAgICAgIC5mb290ZXIoXG4gICAgICAgICAgICAkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogKGRhdGFTZXQuYnRuQ2xhc3MgfHwgJ2J0bi1zbSBidG4tc3VjY2VzcycpICsgJyBidG4nLFxuICAgICAgICAgICAgICAgICd0ZXh0JzogZGF0YVNldC5idG5OYW1lIHx8ICdDb25maXJtJyxcbiAgICAgICAgICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhU2V0Lmhhc093blByb3BlcnR5KCd3aXRoRm9ybScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gcGFyZW50QnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3IGh0dHAodXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZXRob2QoZGF0YVNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhZGF0YVNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChkYXRhU2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGFTZXQucmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5kYXRhc2V0O1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKCEhZGF0YVNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmRhdGEoZ2V0Rm9ybURhdGEoc2F2ZWRJdGVtKSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgIHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZmFzdC1zYXZlLXBhZ2UtY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBQQUdFX1NBVkVEID0gJ1BBR0VfU0FWRUQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9TQVZFX0FMTF9CVVRUT04gPSAnVVBEQVRFX1NBVkVfQUxMX0JVVFRPTic7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoQ09OVEFJTkVSX1NFTEVDVE9SKTtcbiAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5kYXRhc2V0O1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKCEhZGF0YVNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBNYXJrIGZvcm0ncyBlbGVtZW50cyBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCgpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkYXRlRm9ybWF0ID0gJ1lZWVktTU0tREQnO1xuICAgIGNvbnN0IGRhdGVSYW5nZUlucHV0cyA9ICQoJyNkYXRlLXJhbmdlLWlucHV0cycpO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gJCgnI2RhdGUtcmFuZ2Utc2VsZWN0JykuZmluZCgnOnNlbGVjdGVkJyk7XG4gICAgY29uc3QgZGF0ZUZyb20gPSBkYXRlUmFuZ2VJbnB1dHMuZmluZCgnLmZpbHRlci1mcm9tJyk7XG4gICAgY29uc3QgZGF0ZVRvID0gZGF0ZVJhbmdlSW5wdXRzLmZpbmQoJy5maWx0ZXItdG8nKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZE9wdGlvbi52YWwoKTtcblxuICAgIGlmIChzZWxlY3RlZFZhbHVlID09PSAnY3VzdG9tJykge1xuICAgICAgICBkYXRlUmFuZ2VJbnB1dHMuY3NzKHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdpbml0aWFsJyxcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVSYW5nZUlucHV0cy5jc3Moe1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGRhdGVGcm9tVmFsdWUgPSAnJztcbiAgICAgICAgbGV0IGRhdGVUb1ZhbHVlICAgPSAnJztcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IGRhdGVUb1ZhbHVlID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneWVzdGVyZGF5JzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gZGF0ZVRvVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5JykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VycmVudC13ZWVrJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuZGF5KDEpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZGF5KDcpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzLXdlZWsnOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoLTYpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZGF5KDApLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnJlbnQtbW9udGgnOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdGFydE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZW5kT2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtbW9udGgnOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGFzdC1zZXZlbic6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xhc3QtdGhpcnR5JzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGVGcm9tLnZhbChkYXRlRnJvbVZhbHVlKTtcbiAgICAgICAgZGF0ZVRvLnZhbChkYXRlVG9WYWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2Zhc3RTYXZlXCI7XG5pbXBvcnQgYWRkRW1iZWQgZnJvbSBcIi4vYWRkRW1iZWRcIjtcbmltcG9ydCByZW1vdmVFbWJlZCBmcm9tIFwiLi9yZW1vdmVFbWJlZFwiO1xuaW1wb3J0IHN1Ym1pdEZvcm0gZnJvbSBcIi4vc3VibWl0Rm9ybVwiO1xuaW1wb3J0IGFqYXhQYWdpbmF0aW9uIGZyb20gXCIuL2FqYXhQYWdpbmF0aW9uXCI7XG5pbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCIuL2NvbmZpcm1Nb2RhbFwiO1xuaW1wb3J0IHBhZ2VMaW1pdCBmcm9tIFwiLi9wYWdlTGltaXRcIjtcbmltcG9ydCBtb2RhbERhdGEgZnJvbSBcIi4vbW9kYWxEYXRhXCI7XG5pbXBvcnQgZmlsdGVyRGF0ZVJhbmdlIGZyb20gXCJoYW5kbGVycy9maWx0ZXJEYXRlUmFuZ2VcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UsIHtDT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkfSBmcm9tIFwiLi9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCB0YWJsZVNvcnRlciBmcm9tIFwidGFibGVzb3J0ZXJcIjtcbmltcG9ydCBzdGlja3lIZWFkZXJzIGZyb20gXCJzdGlja3ktdGFibGUtaGVhZGVyc1wiO1xuaW1wb3J0ICd0YWJsZXNvcnRlci9kaXN0L2Nzcy90aGVtZS5kZWZhdWx0Lm1pbi5jc3MnO1xuXG4kKGRvY3VtZW50KVxuICAgIC5zY3JvbGwoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgICAgICAgJCgnLnZpc2l0LXN0YXRzJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oZWlnaHQoMCkuY3NzKCdkaXNwbGF5JywgJ3RhYmxlLWNvbHVtbi1ncm91cCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcudmlzaXQtc3RhdHMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGFibGVzb3J0ZXIgPSAkKCcudGFibGVzb3J0ZXInKTtcbiAgICAgICAgaWYodGFibGVzb3J0ZXIpIHtcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLnRhYmxlc29ydGVyKCkuc3RpY2t5VGFibGVIZWFkZXJzKCk7XG4gICAgICAgICAgICB0YWJsZXNvcnRlci5maW5kKCd0aGVhZCcpLmNzcygnYmFja2dyb3VuZCcsICcjZmZmJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIG1vZGFsIHdpdGggZGF0YSBmcm9tIHNlcnZlciBieSByZXF1ZXN0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1tb2RhbC1hY3Rpb24nLCBtb2RhbERhdGEpXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGNvbmZpcm0gbW9kYWxcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LWNvbmZpcm0tYWN0aW9uJywgY29uZmlybU1vZGFsKVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGZvcm0gZGF0YVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtc3VibWl0LWFjdGlvbicsIHN1Ym1pdEZvcm0pXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1wYWdpbmF0aW9uIGEnLCBhamF4UGFnaW5hdGlvbilcblxuICAgIC8qKlxuICAgICAqIEFkZCBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLWVtYmVkJywgYWRkRW1iZWQpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1iZWQgZWxlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJtLWVtYmVkJywgcmVtb3ZlRW1iZWQpXG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgdGhlIGRhdGEgb2YgYW4gZW50aXR5XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlJywgZmFzdFNhdmUpXG5cbiAgICAvKipcbiAgICAgKiBTZXQgcGFnZSBsaW1pdFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5wYWdlLWxpbWl0JywgcGFnZUxpbWl0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBpbnB1dHMgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgYCR7Q09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0ZVJhbmdlID0gJCgnI2RhdGUtcmFuZ2Utc2VsZWN0Jyk7XG4gICAgICAgIGlmIChkYXRlUmFuZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWx0ZXJEYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgIGRhdGVSYW5nZS5jaGFuZ2UoZmlsdGVyRGF0ZVJhbmdlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5mdW5jdGlvbiBpbml0U3RpY2t5KCkge1xuICAgICQoJy50YWJsZXNvcnRlcicpLnN0aWNreVRhYmxlSGVhZGVycygpO1xufVxuXG4kKFwiLnRhYmxlLXJlc3BvbnNpdmVcIikuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICBpbml0U3RpY2t5KCk7XG59KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljayhmYXN0U2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogT3BlbiBtb2RhbCB3aXRoIGZvcm0gYnkgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zaXplKFNJWkVTLmxnKVxuICAgICAgICAgICAgICAgIC5kYXRhc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgcmVsb2FkOiB0aGlzLmRhdGFzZXQucmVsb2FkIHx8IDEsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuaGVhZGVyKHRoaXMuZGF0YXNldC5oZWFkZXIpXG4gICAgICAgICAgICAgICAgLmFmdGVyQnVpbGQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5jbG9zZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuY2xvc2VFdmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubW9kYWwocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBTZXQgcGFnZSBsaW1pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaHJlZiA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGhyZWYuc2VhcmNoUGFyYW1zLnNldCgncGFnZV9saW1pdCcsICQodGhpcykudmFsKCkpO1xuICAgIGhyZWYuc2VhcmNoUGFyYW1zLmRlbGV0ZSgncGFnZScpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZi50b1N0cmluZygpO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBSZW1vdmUgZW1iZWRlZCBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gISF0aGlzLmRhdGFzZXQucGFyZW50ID8gJCh0aGlzKS5jbG9zZXN0KHRoaXMuZGF0YXNldC5wYXJlbnQpIDogJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgIGlmICghdGhpcy5kYXRhc2V0LmlkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge2dldE1vZGFsQ291bnRlcn0gZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIFN1Ym1pdCBmb3JtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5kYXRhKGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCkpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYW5SZWxvYWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENhbiByZWxvYWQgdGhlIHBhZ2VcbiAqXG4gKiBAcGFyYW0gYnV0dG9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2FuUmVsb2FkKGJ1dHRvbikge1xuICAgIGlmIChwYXJzZUludChidXR0b24uZGF0YXNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgIGlmIChnZXRNb2RhbENvdW50ZXIoKSA8IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFSZWxvYWQgPSAkKGJ1dHRvbikuY2xvc2VzdCgnLm1vZGFsJykuZGF0YSgncmVsb2FkJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFSZWxvYWQgPT09IHR5cGVvZiB1bmRlZmluZWQgfHwgZGF0YVJlbG9hZCA9PT0gZmFsc2UgfHwgcGFyc2VJbnQoZGF0YVJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBnZXRTdWJGb2xkZXIgZnJvbSBcIi4vZ2V0U3ViRm9sZGVyXCI7XG5cbi8qKlxuICogR2V0IGZpbGUgcGF0aCBmcm9tIHN0b3JhZ2Ugd2l0aCBzdWIgZm9sZGVyc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyIFJvb3QgZm9sZGVyIGluIHRoZSBzdG9yYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgICBGaWxlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm9vdEZvbGRlciwgZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gJy9zdG9yYWdlLycgKyByb290Rm9sZGVyICsgJy8nICsgZ2V0U3ViRm9sZGVyKGZpbGVOYW1lKSArICcvJyArIGZpbGVOYW1lO1xufVxuIiwiLyoqXG4gKiBHZXQgZm9ybSBkYXRhXG4gKlxuICogQHBhcmFtIHtqUXVlcnl9IGZvcm0gRm9ybSBlbGVtZW50XG4gKlxuICogQHJldHVybnMge3t9fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSB7fTtcblxuICAgIGxldCBmb3JtSXRlbXMgPSBmb3JtLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcbiAgICBpZiAoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgZm9ybUl0ZW1zID0gZm9ybTtcbiAgICB9XG5cbiAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50SXRlbS5hdHRyKCd0eXBlJykpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gISFjdXJyZW50SXRlbS5wcm9wKCBcImNoZWNrZWRcIiApICogMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZm9ybURhdGFbY3VycmVudEl0ZW0uYXR0cignbmFtZScpXSA9IGN1cnJlbnRJdGVtLnZhbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG59XG4iLCJpbXBvcnQgbWQ1IGZyb20gJ2JsdWVpbXAtbWQ1JztcblxuLyoqXG4gKiBHZXQgc3ViIGZvbGRlcnMgb2YgdGhlIGZpbGVcbiAqXG4gKiBSZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGxvb2tzIGxpa2U6IGExL2IyL2MzXG4gKiBXaGVyZSBtZDUgb2YgdGhlIGZpbGUgPSBhMWIyYzMuLi4uLi4uLi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiB0aGUgZmlsZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmaWxlTmFtZSkge1xuICAgIGNvbnN0IGZpbGVOYW1lSGFzaCA9IG1kNShmaWxlTmFtZSkuc3Vic3RyaW5nKDAsIDYpO1xuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpbGVOYW1lSGFzaC5tYXRjaCgvLnsxLDJ9L2cpO1xuICAgIHJldHVybiBwYXRoUGFydHMuam9pbignLycpO1xufVxuIiwiLyoqXG4gKiBqUXVlcnlcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbndpbmRvdy4kID0gJDtcbndpbmRvdy5qUXVlcnkgPSAkO1xuXG4vKipcbiAqIEJvb3RzdHJhcFxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcCc7XG5cbi8qKlxuICogQm9vdHN0cmFwIENjb2xvcnBpY2tlclxuICovXG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlci9kaXN0L2Nzcy9ib290c3RyYXAtY29sb3JwaWNrZXIuY3NzJztcblxuLyoqXG4gKiBGb250IEF3ZXNvbWVcbiAqL1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzcyc7XG5cbi8qKlxuICogRXh0ZXJuYWwgbW9kdWxlc1xuICogVE9ETzogZ2V0IGJ5IG5wbVxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2FuaW1hdGUnO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtY29uZmlybWF0aW9uJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLW5vdGlmeSc7XG5pbXBvcnQgJy4vdmVuZG9yL3NlbGVjdDInO1xuaW1wb3J0ICcuL3ZlbmRvci9la2tvLWxpZ2h0Ym94JztcbmltcG9ydCAnLi92ZW5kb3IvdGhlbWUnO1xuXG4vKipcbiAqIENvbXBvbmVudHNcbiAqL1xuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIEhhbmRsZXJzXG4gKi9cbmltcG9ydCAnLi9oYW5kbGVycyc7XG5cbi8qKlxuICogU3R5bGVzXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBSYXZlbiBmcm9tICdyYXZlbi1qcyc7XG5cbmlmIChTRU5UUllfRFNOICYmIFNFTlRSWV9EU04ubGVuZ3RoKSB7XG4gICAgUmF2ZW4uY29uZmlnKFNFTlRSWV9EU04sIHtcbiAgICAgICAgeGhyOiB0cnVlLFxuICAgICAgICBjb25zb2xlOiB0cnVlLFxuICAgICAgICBkb206IHRydWUsXG4gICAgICAgIGxvY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgc2VudHJ5OiB0cnVlXG4gICAgfSkuaW5zdGFsbCgpO1xufVxuXG4vKipcbiAqIE1vZHVsZXMgbG9hZGVyXG4gKi9cbmNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgIC8qKlxuICAgICAqIFRvIGNyZWF0aW5nIGRpZmZlcmVudCBmaWxlcyBmb3IgZWFjaCBtb2R1bGVcbiAgICAgKiAoRG9uJ3QgZm9yZ2V0IG5wbSBpIC0tc2F2ZS1kZXYgYnVuZGxlLWxvYWRlcilcbiAgICAgKiBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdidW5kbGUtbG9hZGVyIW1vZHVsZXMnLCB0cnVlLCAvaW5kZXhcXC5qcyQvKTtcbiAgICAgKi9cbiAgICBjb25zdCBtb2R1bGVzID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL1xcLlxcL1tcXHctX10rXFwvbW9kdWxlXFwuanMkLyk7XG4gICAgbW9kdWxlcy5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZUl0ZW1zID0gbW9kdWxlLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgaWYgKG1vZHVsZUl0ZW1zWzFdID09PSBwYXRoWzFdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTU9EVUxFOicsIHBhdGhbMV0pO1xuICAgICAgICAgICAgbW9kdWxlcyhtb2R1bGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJNb2R1bGVzID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL21vZHVsZXMoLiopbW9kdWxlXFwuanMkLyk7XG4gICAgc3ViTW9kdWxlcy5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZUl0ZW1zID0gbW9kdWxlLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgaWYgKG1vZHVsZUl0ZW1zWzFdID09PSBwYXRoWzFdICYmIG1vZHVsZUl0ZW1zWzNdID09PSBwYXRoWzJdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU1VCIE1PRFVMRTonLCBwYXRoWzJdKTtcbiAgICAgICAgICAgIHN1Yk1vZHVsZXMobW9kdWxlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFRH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZClcbiAgICAgICAgICAgIC5odG1sKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKHRoaXMuZGF0YXNldC50ZW1wbGF0ZVBsYWNlaG9sZGVyLCBcImdcIiksIGRhdGEuYXdhcmRfaWQpXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJWZpZWxkX25hbWUlJywgXCJnXCIpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcblxuICAgICAgICBjdXJyZW50QnRuLnBhcmVudCgpLmFwcGVuZChlZGl0QnRuKTtcbiAgICAgICAgY3VycmVudEJ0bi5yZW1vdmUoKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQVdBUkRfQ1JFQVRFRCwgZGF0YSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKS5odG1sKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnKSwgdGhpcy5kYXRhc2V0LmZpZWxkTmFtZSB8fCAnJyk7XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZChjcmVhdGVCdG4pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKEVWRU5UX05BTUUpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoRVZFTlRfTkFNRSwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgY29udGFpbmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlldyBVUkwgaGlkZGVuIGlucHV0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBwcmV2aWV3VVJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHByZXZpZXdcbiAgICAgICAgICovXG4gICAgICAgIGlmIChwcmV2aWV3VVJMLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VSTC52YWx1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9KTtcbn1cblxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9TQVZFX0FMTF9CVVRUT04sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVBbGxCdXR0b24gPSAkKCcjdXBkYXRlLWFsbCcpO1xuICAgICAgICBjb25zdCBjb3VudGVyID0gJCgnI3VwZGF0ZS1hbGwgLmNvdW50Jyk7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXIuY2hhbmdlZCcpLmxlbmd0aDtcblxuICAgICAgICBpZihjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2F2ZUFsbEJ1dHRvbi5oaWRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ZXIuaHRtbChjb3VudCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiLFxuXHRcIi4vYWRkLW1lL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hZGQtbWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL2Fzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXdhcmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2F3YXJkL21vZHVsZS5qc1wiLFxuXHRcIi4vYmFubmVyL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtYWRwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiLFxuXHRcIi4vY29sbGVjdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY29sbGVjdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL2Nyb3AvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Nyb3AvbW9kdWxlLmpzXCIsXG5cdFwiLi9kYWlseS1sb290L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVmYXVsdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGVmYXVsdC9tb2R1bGUuanNcIixcblx0XCIuL2RlcGxveS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGVwbG95L21vZHVsZS5qc1wiLFxuXHRcIi4vZHBhL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kcGEvbW9kdWxlLmpzXCIsXG5cdFwiLi9keWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2R5ZS9tb2R1bGUuanNcIixcblx0XCIuL2dpZnQtd3JhcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZ2lmdC13cmFwL21vZHVsZS5qc1wiLFxuXHRcIi4vbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFnaWMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIixcblx0XCIuL21lYWwvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9wcm9kdWN0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wcm9kdWN0L21vZHVsZS5qc1wiLFxuXHRcIi4vcHVyY2hhc2UvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3B1cmNoYXNlL21vZHVsZS5qc1wiLFxuXHRcIi4vc2V0dGluZ3MvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1zdGF0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1zdGF0cy9tb2R1bGUuanNcIixcblx0XCIuL3NvdW5kL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanNcIixcblx0XCIuL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiLFxuXHRcIi4vdGFtYXRvb2wvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qc1wiLFxuXHRcIi4vdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgXFxcXC5cXFxcL1tcXFxcdy1fXStcXFxcL21vZHVsZVxcXFwuanMkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9tb2R1bGVzIHN5bmMgcmVjdXJzaXZlIG1vZHVsZXMoLiopbW9kdWxlXFxcXC5qcyRcIjsiLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQgPSAnQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQnO1xuZXhwb3J0IGNvbnN0IERFTFRBX1RJTUVfQVRUUklCVVRFID0gMTk7XG4iLCIvKipcbiAqIENvbGxhcHNlIHN0YXRlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xuICAgIHBhcmVudC50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZXNcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hY3Rpb24tdHlwZS1zdGF0ZScpLnRvZ2dsZUNsYXNzKCdkb3duJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIFN0YXRlIG9mIHRoZSBBY3Rpb24gVHlwZVxuICogYXQgdGhlIG1vZGFsXG4gKiB3aXRoIGNvbmZpcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50RWxlbWVudC5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcblxuICAgIGlmICghY3VycmVudEVsZW1lbnQuZGF0YSgnaWQnKSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoJ0FyZSB5b3Ugc3VyZT8nKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxuICAgICAgICAgICAgJ3RleHQnOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBSZXF1ZXN0QnVpbGRlcihjdXJyZW50RWxlbWVudC5kYXRhKCd1cmwnKSlcbiAgICAgICAgICAgICAgICAgICAgLm1ldGhvZCgnREVMRVRFJylcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzIG9mIHRoZSBzdGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuXG4gICAgICAgICQoJy5pbmRleCcpLmVhY2goKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICQoaXRlbSkudmFsKGluZGV4KyspO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHVwZGF0ZUluZGV4ZXMgZnJvbSBcIi4vbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXNcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlcyBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlc1wiO1xuaW1wb3J0IHJlbW92ZUFjdGlvblR5cGVTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGVcIjtcbmltcG9ydCB7REVMVEFfVElNRV9BVFRSSUJVVEV9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlc1xuICovXG51cGRhdGVJbmRleGVzKCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NoYW5nZScsICdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVwiXScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVEaXNwbGF5ID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1bZGlzcGxheV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVEaXNwbGF5LnZhbChkZWx0YVRpbWVIaWRkZW4uZGF0YSgndmFsdWUnKSAvIHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcbiAgICB9KVxuXG4gICAgLm9uKCdpbnB1dCcsICdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdW2Rpc3BsYXldXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHRpbWVUeXBlID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJykudmFsKCk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XG5cbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZSBvbmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb2xsYXBzZS1saW5rJywgY29sbGFwc2VTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIGFsbCBzdGF0ZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXN0YXRlcycsIGNvbGxhcHNlU3RhdGVzKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tYWN0aW9uLXR5cGUtc3RhdGVzJywgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcbiIsImV4cG9ydCBjb25zdCBBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSA9ICdBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBTk5PVU5DRU1FTlRTX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFOTk9VTkNFTUVOVFNfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgJCgnLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKHRoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsIlxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZV9pZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykubmV4dCgpLmhlaWdodCgpID4gMCkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ0hpZGUnLCAnU2hvdycpKTtcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdTaG93JywgJ0hpZGUnKSk7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdTaG93JywgJ0hpZGUnKTtcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIFNVQl9UWVBFUyAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIGFzc2V0L2Zvcm0uYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTdWJ0eXBlcyh0aGlzLnZhbHVlLCB0aGlzLmRhdGFzZXQuc3VidHlwZSk7XG59XG5cbmNvbnN0IGFzc2V0Rm9ybVN1YnR5cGUgPSAkKFwiI3N1YnR5cGVcIik7XG5jb25zdCBhc3NldEZvcm1BY3Rpb25UeXBlID0gJCgnI2Fzc2V0LWZvcm0tYWN0aW9uLXR5cGUnKTtcbmNvbnN0IGFzc2V0Rm9ybUNvbGxlY3Rpb24gPSAkKCcjYXNzZXQtZm9ybS1jb2xsZWN0aW9uJyk7XG5jb25zdCBwcmljZXMgPSAkKCcucHJpY2VzJyk7XG5cbmZ1bmN0aW9uIHNldFN1YnR5cGVzKHR5cGUsIHN1YnR5cGUpIHtcbiAgICBhc3NldEZvcm1TdWJ0eXBlXG4gICAgICAgIC5lbXB0eSgpXG4gICAgICAgIC5zZWxlY3QyKHtcbiAgICAgICAgICAgIGRhdGE6IFNVQl9UWVBFU1t0eXBlXVxuICAgICAgICB9KVxuICAgICAgICAudmFsKHN1YnR5cGUpXG4gICAgICAgIC5jaGFuZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc3RhdGVcbiAgICAgKi9cbiAgICBoaWRlKGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgIGhpZGUoYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgc2hvdyhwcmljZXMpO1xuXG4gICAgc3dpdGNoIChwYXJzZUludCh0eXBlKSkge1xuXG4gICAgICAgIC8vIEZ1cm5pdHVyZVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ2xvdGhlc1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQm9keSBQYXJ0XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGhpZGUocHJpY2VzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBzaG93KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XG59IiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgndGV4dGFyZWFbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xuICAgIGNvbnN0IHdpdGhOYW1lID0gJCgnaW5wdXRbbmFtZT1cIndpdGhfbmFtZVwiXScpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJChpdGVtKSk7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBsZXQgYXNzZXROYW1lID0gJChpdGVtKS5kYXRhKCdhc3NldC1uYW1lJyk7XG4gICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaCgnXFxuJyArIGFzc2V0SWQgKyAnICcgKyBhc3NldE5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtbmFtZScpO1xuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaCgnXFxuJyArIGFzc2V0SWQgKyAnICcgKyBhc3NldE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCQoaXRlbSkpO1xuICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpZiAoYXNzZXRJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJmlkcz0nICsgYXNzZXRJZHMuam9pbignLCcpO1xufVxuIiwiaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxuICAgICAgICAuc3VjY2VzcyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgJCgnI2NvbGxlY3Rpb24tbnVtYmVyJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5jb2xsZWN0aW9uX2lkKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbi8qKlxuICogTWFyayBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCAoKSB7XG4gICAgaWYoJCh0aGlzKS5hdHRyKCd0eXBlJykgIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG4gICAgICAgIHBhcmVudENvbnRhaW5lci5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChVUERBVEVfU0FWRV9BTExfQlVUVE9OKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCB1cGRhdGVTYXZlQWxsQnV0dG9uIGZyb20gXCJsaXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvblwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IGdldExhc3RDb2xsZWN0aW9uTnVtYmVyIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyXCI7XG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEUsIEFXQVJEX0NSRUFURUQsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge21hcmtDaGFuZ2VkfSBmcm9tIFwiLi9oYW5kbGVycy9tYXJrQ2hhbmdlZFwiO1xuaW1wb3J0IHtkb3dubG9hZEFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvZG93bmxvYWRBc3NldHNcIjtcbmltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHtERUxUQV9USU1FX0FUVFJJQlVURX0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbiQoJyNhc3NldHMtdGFibGUnKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZScsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZScsIGF3YXJkRGVsZXRlKTtcblxuJCgnI2Fzc2V0LWZvcm0tdHlwZScpXG4gICAgLmNoYW5nZShjaGFuZ2VUeXBlKVxuICAgIC5jaGFuZ2UoKTtcblxuJCgnI2dldC1sYXN0LWNvbGxlY3Rpb24tbnVtYmVyJykuY2xpY2soZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIpO1xuXG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogQ29weSBhc3NldHMgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hc3NldHMnLCBjb3B5QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZG93bmxvYWQtYXNzZXRzJywgZG93bmxvYWRBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VGQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RkJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11cIl0nKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVEaXNwbGF5LnZhbChkZWx0YVRpbWVIaWRkZW4uZGF0YSgndmFsdWUnKSAvIHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcbiAgICB9KVxuXG4gICAgLm9uKCdpbnB1dCcsICdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcbiAgICAgICAgY29uc3QgdGltZVR5cGUgPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nKS52YWwoKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZUhpZGRlbi52YWwoJCh0aGlzKS52YWwoKSAqIHRpbWVUeXBlKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuZmFzdC1zYXZlLWNvbnRhaW5lciBpbnB1dCwgLmZhc3Qtc2F2ZS1jb250YWluZXIgc2VsZWN0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciB0ZXh0YXJlYScsIG1hcmtDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgdXBkYXRlU2F2ZUFsbEJ1dHRvbigpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFID0gJ0FXQVJEX0NSRUFURSc7XG5leHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFRCA9ICdBV0FSRF9DUkVBVEVEJztcbmV4cG9ydCBjb25zdCBBV0FSRF9ERUxFVEUgPSAnQVdBUkRfREVMRVRFJztcbmV4cG9ydCBjb25zdCBDTE9TRV9BV0FSRF9NT0RBTCA9ICdDTE9TRV9BV0FSRF9NT0RBTCc7XG4iLCIvKipcbiAqIFNob3cgZm9ybSBldmVudFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBCQU5ORVJfU0hPV19GT1JNID0gJ0JBTk5FUl9TSE9XX0ZPUk0nO1xuXG4vKipcbiAqIElkIG9mIHR5cGUncyBzZWxlY3RcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVFlQRV9TRUxFQ1RfSUQgPSAnYmFubmVyLXR5cGUnO1xuIiwiaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAqIEhpZGUvc2hvdyBzb21lIGZpZWxkc1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVFlQRV9TRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgICQoJy5iYW5uZXItdHlwZScpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICQoJy5iYW5uZXItdHlwZS0nICsgc2VsZWN0ZWRFbGVtZW50LnZhbHVlKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gaGFuZGxlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgSW5pdFxuICAgICAqL1xuICAgIGRyb3Bab25lSW5pdChCQU5ORVJfU0hPV19GT1JNKTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgc2hvd0Zvcm0gbGlzdGVuZXJcbiAgICAgKi9cbiAgICBzaG93Rm9ybSgpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShCQU5ORVJfU0hPV19GT1JNLCAoKSA9PiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgc2VsZWN0IGNoYW5nZSB0cmlnZ2VyXG4gICAgICAgICAqL1xuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGVzIGluaXRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5iYW5uZXItZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9oYW5kbGVycy9zaG93Rm9ybVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2hvdyBlZGl0IGZvcm0gb2YgYSBiYW5uZXJcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKHNob3dGb3JtKCkpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyMnICsgVFlQRV9TRUxFQ1RfSUQsIGNoYW5nZVR5cGUpO1xuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFkcCBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QWRwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRwSWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYWRwX2lkc1wiXScpO1xuICAgIGxldCBhZHBJZHMgPSBbXTtcblxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICBpZihhZHBJZCkge1xuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhZHBJZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIGlmIChhZHBJZCkge1xuICAgICAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRwSWRzRmllbGQudmFsKGFkcElkcyk7XG4gICAgYWRwSWRzRmllbGQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIC8vIGFkcElkc0ZpZWxkLnZhbChbXSk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFzc2V0SWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYXNzZXRfaWRzXCJdJyk7XG4gICAgbGV0IGFzc2V0SWRzID0gW107XG5cbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXNzZXRJZHNGaWVsZC52YWwoYXNzZXRJZHMpO1xuICAgIGFzc2V0SWRzRmllbGQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhZHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQWRwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFkcElkcyA9IFtdO1xuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICBpZihhZHBJZCkge1xuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhZHBJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoYWRwSWQpIHtcbiAgICAgICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmaWRzPScgKyBhZHBJZHMuam9pbignLCcpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFyY2hpdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5zaG93LWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbCgnJyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnNob3ctdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnRhc2tzLWxpc3QnKS5oaWRlKCdzbG93Jyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIHNlbGVjdCByb3cgYnkgZnVsbCB0ZCBhcmVhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSb3coZSkge1xuICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Zvci1jb3B5JykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9ICQodGhpcykuZmluZCgnLmZvci1jb3B5Jyk7XG5cbiAgICAgICAgaWYoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBcmNoaXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaGlkZS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIFxuICAgIGxldCBhY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJyk7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIFxufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5oaWRlLXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy50YXNrcy1saXN0Jykuc2hvdygnc2xvdycpO1xufVxuIiwiLy9pbXBvcnQge2J1bmRsZVZlcnNpb25TZWxlY3R9IGZyb20gXCIuL2hhbmRsZXJzL2J1bmRsZVZlcnNpb25TZWxlY3RcIjtcbmltcG9ydCB7c2hvd0FyY2hpdmV9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dBcmNoaXZlXCI7XG5pbXBvcnQge2hpZGVBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlQXJjaGl2ZVwiO1xuaW1wb3J0IHtoaWRlVGFza3N9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVUYXNrc1wiO1xuaW1wb3J0IHtzaG93VGFza3N9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dUYXNrc1wiO1xuaW1wb3J0IHtjb3B5QWRwfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QWRwXCI7XG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcbmltcG9ydCB7c2VsZWN0Um93fSBmcm9tIFwiLi9oYW5kbGVycy9zZWxlY3RSb3dcIjtcbmltcG9ydCB7ZG93bmxvYWRBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2Rvd25sb2FkQWRwXCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1hcmNoaXZlJywgc2hvd0FyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS10YXNrcycsIGhpZGVUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LXRhc2tzJywgc2hvd1Rhc2tzKVxuICAgIC8qKlxuICAgICAqIENvcHkgYWRwIGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcbiAgICAvKipcbiAgICAgKiBDb3B5IGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZG93bmxvYWQtYWRwJywgZG93bmxvYWRBZHApXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNpZGUgYm94XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1oaWRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZihwYXJzZUludCgkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JykpIDwgMCkge1xuICAgICAgICAgICAgJCgnLnNpZGUtYm94JykuY3NzKCdyaWdodCcsIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JywgJy0xMDAlJylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHJvdyBieSBmdWxsIHRkIGFyZWFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5pZC1jb2wnLCBzZWxlY3RSb3cpO1xuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBDQVNIID0gJ2Nhc2hfYWRkZWQnO1xuZXhwb3J0IGNvbnN0IENPSU4gPSAnY29pbnNfYWRkZWQnO1xuZXhwb3J0IGNvbnN0IEFTU0VUID0gJ2Fzc2V0c19hZGRlZCc7XG4iLCJpbXBvcnQge0NBU0h9IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5pbXBvcnQge0NPSU59IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5pbXBvcnQge0FTU0VUfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICAgICAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEZpbHRlciBzZWxlY3Qgb3B0aW9ucyBieSBzZWxlY3RlZCBzb3VyY2VcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjZmlsdGVyX3NvdXJjZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgJChcIiNmaWx0ZXJfYWN0aW9uXCIpLnNlbGVjdDIoe1xuICAgICAgICAgICAgbWF0Y2hlcjogZnVuY3Rpb24gKHBhcmFtcywgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VWYWwgIT09ICd1c2VyX2RlYnVnJyAmJiAkLmluQXJyYXkoZGF0YS5pZCwgW0NBU0gsIENPSU4sIEFTU0VUXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxuICAgICAgICB9XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQ09MTEVDVElPTl9TSE9XX0ZPUk0gPSAnQ09MTEVDVElPTl9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuY29uc3QgYXNzZXRQcmV2aWV3VGVtcGxhdGUgPSAkKCcjYXNzZXQtcHJldmlldy10ZW1wbGF0ZScpLmh0bWwoKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5oYXNDbGFzcygnYXNzZXQtaWQnKSAmJiAhIXJlc3BvbnNlLmFzc2V0c1tjdXJyZW50SXRlbS52YWwoKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFzc2V0ID0gcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuc2xvdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFzc2V0LXByZXZpZXcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoYXNzZXRQcmV2aWV3VGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXVybCUnLCBcImdcIiksIGN1cnJlbnRBc3NldC5wcmV2aWV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXRpdGxlJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0Lm5hbWUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWRkaXRpb25hbC1kYXRhJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogTWFyayBpbnB1dCBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xuICAgICAgICBncm91cDogX3RoaXMuZGF0YXNldC5ncm91cCxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKF90aGlzLmRhdGFzZXQucG9zaXRpb24pLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge0NPTExFQ1RJT05fU0hPV19GT1JNfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IG1hcmtJbnB1dEFzQ2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9tYXJrSW5wdXRBc0NoYW5nZWRcIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgaGlkZUFkZGl0aW9uYWxSb3dzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93c1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChDT0xMRUNUSU9OX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBjb2xsZWN0aW9uXG4gKi9cbiQoJy5jb2xsZWN0aW9uLWZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcblxuLyoqXG4gKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gKi9cbiQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXQnKS5jaGFuZ2UobWFya0lucHV0QXNDaGFuZ2VkKTtcblxuLyoqXG4gKiBTb3J0YWJsZSBpbml0XG4gKi9cbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuLyoqXG4gKiBIaWRlIGFkZGl0aW9uYWwgcm93c1xuICovXG4kKCcuaGlkZS1zbG90cycpLmNsaWNrKGhpZGVBZGRpdGlvbmFsUm93cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCByb3dzIHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNjcm9wcyA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2Nyb3BfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3JvcF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lY3JvcCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBEZWxldGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSb3coKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGRSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZFJvd1wiO1xuaW1wb3J0IHtkZWxldGVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2RlbGV0ZVJvd1wiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtcm93JywgYWRkUm93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBkZWxldGVSb3cpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIHNlbGYpO1xuXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocm93LmFkZENsYXNzKCdjaGFuZ2VkJykpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZGFpbHlfbG9vdCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2RhaWx5X2xvb3RfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSl7XG4gICAgICAgICAgICBsYXN0SURTLnB1c2gocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYobGFzdElEUy5sZW5ndGgpe1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcm93SW5kZXglL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmRhaWx5LWxvb3Qtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2ggcGFnZSB0eXBlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlLXBhZ2UtdHlwZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDAsIGxvY2F0aW9uLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykpICsgJCh0aGlzKS5kYXRhKCdocmVmJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnI2NvbW1vbi1tZW51JykuZmluZCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZigkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5oaWRlKClcbiAgICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbi8qKlxuICogU2hvdyBEZXBsb3kgU3RhdHVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXBsb3lTdGF0dXMoKSB7XG4gICAgbmV3IGh0dHAoREVQTE9ZX1NUQVRVU19ST1VURSlcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJCgnLmRlcGxveS1zdGF0dXMnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9ICQoJy5kZXBsb3ktc3RhdHVzJykuZmluZCgnLmFjdGl2ZS1kZXBsb3knKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJCgnLmRlcGxveS1idG4nKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCQoJy5kZXBsb3ktYnRuJykuaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ZGVwbG95U3RhdHVzKCk7fSwgMzAwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJcbi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9kaXJlY3Rpb249XCIgKyBkaXJlY3Rpb247XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBpZDogJ2RlcGxveSdcbiAgICB9LCAnRGVwbG95JywgdXJsKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyDQsmVwZW5kZW5jeVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RlcGVuZGVuY3koZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcbiAgICBsZXQgYWRkTW9kZSA9IGN1cnJlbnRFbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgb25lTGV2ZWxTaG93KGN1cnJlbnRDb25maWcsIGFkZE1vZGUpO1xufVxuXG5mdW5jdGlvbiBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgYWRkTW9kZSwgbGV2ZWwgPSAxKSB7XG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xuICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGNvbmZpZ05hbWUpO1xuICAgICAgICBpZihhZGRNb2RlKSB7XG4gICAgICAgICAgICBjb25maWdCbG9jay5hZGRDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWdCbG9jay5yZW1vdmVDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgIGxldCBkZXBlbmRDb25maWdOYW1lID0gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV1ba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGRlcGVuZENvbmZpZ05hbWUpO1xuICAgICAgICAgICAgaWYoYWRkTW9kZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLmFkZENsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnQmxvY2sucmVtb3ZlQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25lTGV2ZWxTaG93KGRlcGVuZENvbmZpZ05hbWUsIGFkZE1vZGUsIGxldmVsICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyBkZXBlbmRlbmN5IHBvcHVwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGVwZW5kZW5jeVBvcHVwKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnSWQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdpZCcpO1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBpZihjdXJyZW50Q29uZmlnSWQpIHtcbiAgICAgICAgaWRzLnB1c2goY3VycmVudENvbmZpZ0lkKTtcbiAgICB9XG5cbiAgICByb290TGV2ZWxTaG93KGN1cnJlbnRDb25maWcsIGlkcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE9uZSBsZXZlbCBzaG93XG4gKlxuICogQHBhcmFtIGNvbmZpZ05hbWVcbiAqIEBwYXJhbSBkZXBlbmRDb25maWdOYW1lXG4gKiBAcGFyYW0gbGV2ZWxcbiAqIEBwYXJhbSBpZFJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCAgbGV2ZWwgPSAxLCBpZFJlc3BvbnNlKSB7XG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xuICAgICAgICBsZXQgaWRzID0gaWRSZXNwb25zZS5pZHM7XG4gICAgICAgIGxldCB0ZXh0Q2xhc3MgPSAnJztcbiAgICAgICAgaWYoaWRSZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnbm90SW1wbGVtZW50ZWQnKSkge1xuICAgICAgICAgICAgdGV4dENsYXNzID0gJ3RleHQtbXV0ZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzUmVjdXJzaW9uID0gZmFsc2U7XG4gICAgICAgICQoJy5jaGFpbi0nICsgY29uZmlnTmFtZSkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5wYXJlbnRzKCcuY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpc1JlY3Vyc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgdGV4dENsYXNzICsgJ1wiPicgKyBkZXBlbmRDb25maWdOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4oUmVjdXJzaW9uKTwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj48YnI+Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoJCh0aGlzKS5maW5kKCcuY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0ZXh0Q2xhc3MgKyAnXCI+JyArIGRlcGVuZENvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAoaWRzLmxlbmd0aCA+IDAgPyAnPHNwYW4gY2xhc3M9XCJkZXBlbmQtaWRzXCI+ICcgKyBpZHMuam9pbignLCcpICsgJzwvc3Bhbj4nIDogJycpICArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNSZWN1cnNpb24pIHtcbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGRlcGVuZENvbmZpZ05hbWUsIGxldmVsLCBpZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8qKlxuICogUm9vdCBsZXZlbCBzaG93XG4gKlxuICogQHBhcmFtIGNvbmZpZ05hbWVcbiAqIEBwYXJhbSBpZHNcbiAqL1xuZnVuY3Rpb24gcm9vdExldmVsU2hvdyhjb25maWdOYW1lLCBpZHMgPSBbXSkge1xuICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXG4gICAgICAgIC5tZXRob2QoJ3Bvc3QnKVxuICAgICAgICAuZGF0YSh7XG4gICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXG4gICAgICAgICAgICAnZGVwZW5kZW50TW9kZWxJZHMnOiBpZHNcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbGV0IGlkcyA9IHJlc3BvbnNlLmlkcyB8fCBbXTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXBsb3ktY2hhaW4tYmxvY2tcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKS5odG1sKCc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGNvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuPicgKyBjb25maWdOYW1lICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJkZXBlbmQtaWRzXCI+ICcgKyBpZHMuam9pbignLCcpICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5oZWFkZXIoJ0RlcGxveSBkZXBlbmRlbmN5JylcbiAgICAgICAgICAgICAgICAuYm9keSgkKCcuZGVwbG95LWNoYWluLWJsb2NrJykpXG4gICAgICAgICAgICAgICAgLm1vZGFsKCk7XG5cbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIDEsIGlkcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG5cbi8qKlxuICogR2V0IGRlcGxveSBtb2RlbCBpZHNcbiAqXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxuICogQHBhcmFtIGxldmVsXG4gKiBAcGFyYW0gaWRzXG4gKi9cbmZ1bmN0aW9uIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIGxldmVsID0gMSwgaWRzID0gW10pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgbGV0IGRlcGVuZENvbmZpZ05hbWUgPSBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXVtrZXldO1xuXG4gICAgICAgIGlmKGlkcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXG4gICAgICAgICAgICAgICAgLm1ldGhvZCgncG9zdCcpXG4gICAgICAgICAgICAgICAgLmRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogZGVwZW5kQ29uZmlnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsJzogY29uZmlnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsSWRzJzogaWRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwgKyAxLCB7J2lkcyc6IFtdfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVwiO1xuaW1wb3J0IHtzaG93RGVwZW5kZW5jeVBvcHVwfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVBvcHVwXCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCB7ZGVwbG95U3RhdHVzfSBmcm9tIFwiLi9kZXBsb3lTdGF0dXNcIjtcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuICAgIC8qKlxuICAgICAqIFNhdmUgYWxsIHBhZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUtcGFnZS1jdXN0b20nLCBmYXN0U2F2ZVBhZ2UpXG4gICAgLyoqXG4gICAgICogU2hvdyBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29uZmlnLWNoZWNrYm94Jywgc2hvd0RlcGVuZGVuY3kpXG4gICAgLyoqXG4gICAgICogU2hvdyBkZXBlbmRlbmN5IHBvcHVwXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1kZXBlbmRlbmN5Jywgc2hvd0RlcGVuZGVuY3lQb3B1cClcblxuICAgIC8qKlxuICAgICAqIENoZWNrL3VuY2hlY2sgYXdhcmQgZGVwZW5kZW5jaWVzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmF3YXJkLWRlcGVuZGVuY3kgW3R5cGU9Y2hlY2tib3hdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYXdhcmQtZGVwZW5kZW5jeSBbdHlwZT1jaGVja2JveF0nKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcbiAgICB9KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlcGxveVN0YXR1cygpO1xuICAgIH0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHBhID4gdGJvZHknKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5kcGFfaWQnKS52YWwoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNkcGFfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWRwYV9pZCUvZywgaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRHBhU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgbGV0IGRhdGEgPSAkKCcuZHBhLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVEcGFTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZURwYVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgZHBhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRwYS1zYXZlLXBhZ2UnLCBzYXZlRHBhU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2R5ZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2R5ZV90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcblxuICAgICAgICBsZXQgbGFzdFJvdyA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNwMicpO1xuICAgICAgICBsYXN0Um93LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAkKGl0ZW0pLmNvbG9ycGlja2VyKHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENoYW5nZSByb3cgaW5kZXhcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvd0luZGV4KCkge1xuICAgIGxldCByb3dJbmRleCA9ICQodGhpcykudmFsKCk7XG4gICAgbGV0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dCwgc2VsZWN0Jyk7XG5cbiAgICByb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG9sZE5hbWUgPSAkKGl0ZW0pLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgbGV0IG5ld05hbWUgPSBvbGROYW1lLnNsaWNlKDAsIDQpICsgcm93SW5kZXggKyAgb2xkTmFtZS5zbGljZShvbGROYW1lLmluZGV4T2YoJ10nKSk7XG4gICAgICAgICQoaXRlbSkuYXR0cignbmFtZScsIG5ld05hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IERZRV9DT05UQUlORVJfU0VMRUNUT1IgPSAnLmR5ZS1zYXZlLXBhZ2UtY29udGFpbmVyJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBkeWVzIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgdHIgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWRUcigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7Y2hhbmdlUm93SW5kZXh9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4XCI7XG5pbXBvcnQgZHllU2F2ZVBhZ2UsIHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZFRyfSBmcm9tIFwiLi9oYW5kbGVycy9keWVTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjb2xvci1waWNrZXIgaW5wdXRzXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKVxuICAgICAgICAgICAgLm9uKCdjcmVhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBNYXJrIHRyIGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcilcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdpbnB1dCcsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHJvdyBpbmRleFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFzc2V0X2lkJywgY2hhbmdlUm93SW5kZXgpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgICQoJy5keWUtc2F2ZS1wYWdlJykuY2xpY2soZHllU2F2ZVBhZ2UpO1xuIiwiZXhwb3J0IGNvbnN0IEdJRlRfV1JBUF9ST1dfQURERUQgPSAnR0lGVF9XUkFQX1JPV19BRERFRCc7XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogQXNzZXQgSUQgY2hhbmdlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudElucHV0ID0gJCh0aGlzKTtcbiAgICBjb25zdCBhc3NldElEID0gY3VycmVudElucHV0LnZhbCgpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJbnB1dC5jbG9zZXN0KCd0cicpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBhc3NldHMgaWRzXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEFzc2V0RHVwbGljYXRlID0gJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldElEID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnRBc3NldER1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGFzc2V0SUR9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpbnB1dHMgbmFtZXNcbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoIC9cXFtbXFxkXStcXF0vZywgYFske2Fzc2V0SUR9XWApO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGhyZWYgb2YgdGhlIGRlbGV0ZSBidXR0b25cbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaHJlZiA9IHRoaXMuaHJlZi5yZXBsYWNlKCAvXFwvW1xcZF0rJC9nLCBgLyR7YXNzZXRJRH1gKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCIuLi9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHt9O1xuICAgICAgICAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhc3NldHNbdGhpcy52YWx1ZV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIHVwZGF0ZVxuICAgICAqL1xuICAgIHBvc2l0aW9uVXBkYXRlKCk7XG5cbiAgICBmYXN0U2F2ZVBhZ2UuYmluZCh0aGlzKShlKTtcbn1cbiIsImltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcImhhbmRsZXJzL2NvbmZpcm1Nb2RhbFwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidXR0b25VcmwgPSB0aGlzLmhyZWYuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFyc2VJbnQoYnV0dG9uVXJsW2J1dHRvblVybC5sZW5ndGggLSAxXSkgPT09IDApIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uZmlybU1vZGFsLmJpbmQodGhpcykoZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIm1vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwb3NpdGlvblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIFBvc2l0aW9uIHVwZGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvc2l0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBwYWdlID0gJCgnI3BhZ2UnKS52YWwoKTtcbiAgICAgICAgY29uc3QgcGFnZV9saW1pdCA9ICQoJ1tuYW1lPVwicGFnZV9saW1pdFwiXScpLnZhbCgpO1xuXG4gICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXggKyAoKHBhZ2UgLSAxKSAqIHBhZ2VfbGltaXQpKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtHSUZUX1dSQVBfUk9XX0FEREVEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQWRkIG5ldyByb3cgdG8gZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdJRlRfV1JBUF9ST1dfQURERUQsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjZ2lmdC13cmFwLScgKyBkYXRhLmVtYmVkQmxvY2tJZClcbiAgICAgICAgICAgIC5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBhc3NldENoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvYXNzZXRDaGFuZ2VkXCI7XG5pbXBvcnQgYWRkUm93IGZyb20gXCIuL2xpc3RlbmVycy9hZGRSb3dcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGFzc2V0IGlkIGluIGlucHV0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0LWlkJywgYXNzZXRDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJywgcmVtb3ZlUm93KTtcblxuLyoqXG4gKiBBZGQgcm93IGxpc3RlbmVyXG4gKi9cbmFkZFJvdygpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIFNhdmUgYWxsIHBhZ2VcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHNob3cgYXNzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3NldChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgYWN0aW9uID0gU1dPV19BU1NFVF9ST1VURSArICc/aWQ9JyArIGN1cnJlbnRFbGVtZW50LnZhbCgpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1uYW1lJykuaHRtbChyZXNwb25zZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdwcmV2aWV3X3VybCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgLmxpc3QtdGh1bWJuYWlsJykuZGF0YSgnZnVsbCcsIHJlc3BvbnNlLmRhdGEucHJldmlld191cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiXG5pbXBvcnQge3Nob3dBc3NldH0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Fzc2V0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhc3NldFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hc3NldCcsIHNob3dBc3NldClcblxuICAgICIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgbGV0IHRib2R5ID0gJCgnI2xvY2FsaXphdGlvbnMgPiB0Ym9keScpO1xuICAgIGxldCB0ZW1wbGF0ZSA9ICQoJyNsb2NhbGl6YXRpb25fdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICB0Ym9keS5wcmVwZW5kKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmVtb3ZlIG5vdCBzYXZlZCByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRCdG4uY2xvc2VzdCgndHInKTtcbiAgICBjb25zdCBjdXJyZW50S2V5ID0gcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykudmFsKCk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtqUXVlcnl9XG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEtleUR1cGxpY2F0ZSA9ICQoJyNsb2NhbGl6YXRpb25zJykuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRLZXkgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnRLZXlEdXBsaWNhdGUubGVuZ3RoID4gMSl7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGtleSAnICsgY3VycmVudEtleX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHBhcmVudC5maW5kKCcuZWRpdGFibGUgaW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZUxvY2FsaXphdGlvblN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTG9jYWxpemF0aW9uU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7cmVtb3ZlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbnMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNyZWF0ZS1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZUxvY2FsaXphdGlvblN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtcm93JywgcmVtb3ZlUm93KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21hZ2ljID4gdGJvZHknKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dFtuYW1lPVwiaWRcIl0nKS52YWwoKTtcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI21hZ2ljX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVtYWdpY19pZCUvZywgKytpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWFnaWNTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5tYWdpYy1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcblxuICAgIGRhdGEuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICB9KTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVNYWdpY1N0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVNYWdpY1N0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEXG4gKlxuICogQHBhcmFtIGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjbGFzdC1tYWtldXAta2l0LWlkJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5tYWtldXBfa2l0X2lkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgZ2V0TGFzdE1ha2V1cEtpdElEIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RNYWtldXBLaXRJRFwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEIGF0IHRoZSBib2R5IHBhcnRzIGdyaWRcbiAqL1xuJCgnI2dldC1sYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgIC5jbGljayhnZXRMYXN0TWFrZXVwS2l0SUQpO1xuIiwiZXhwb3J0IGNvbnN0IE1BS0VVUF9LSVRfU0hPV19GT1JNID0gJ01BS0VVUF9LSVRfU0hPV19GT1JNJztcbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7TUFLRVVQX0tJVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChNQUtFVVBfS0lUX1NIT1dfRk9STSkpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50X2dyb3Vwc190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5ncm91cF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50LWdyb3VwJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmdyZWRpZW50RGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7aW5ncmVkaWVudERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgaW5ncmVkaWVudERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50c190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5pbmdyZWRpZW50X2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWwgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLm1lYWxfaWQnKS50ZXh0KCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lYWxEZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNZWFsU3RhdGUgKCkge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7bWVhbERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvbWVhbERlbGV0ZVwiO1xuaW1wb3J0IHtzYXZlTWVhbFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBtZWFsRGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgbWVhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlTWVhbFN0YXRlKClcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZU1lYWxTdGF0ZSk7XG4iLCJleHBvcnQgY29uc3QgTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNID0gJ05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSc7XG4iLCJjb25zdCBUUkFTSCA9ICdUUkFTSCc7XG5jb25zdCBUUkFTSF9GSUVMRFNfSUQgPSAndHJhc2gtZmllbGRzJztcbmNvbnN0IFNFTEVDVF9JRCA9ICduZWlnaGJvci1hY3Rpdml0eS10eXBlLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgY29uc3QgdHJhc2hGaWVsZHMgPSAkKCcjJyArIFRSQVNIX0ZJRUxEU19JRCk7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRFbGVtZW50LnRleHQudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBUUkFTSDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7TkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gJy4vaGFuZGxlcnMvY2hhbmdlVHlwZSc7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSlcbiAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItYWN0aXZpdHktdHlwZScsIGNoYW5nZVR5cGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBQUk9EVUNUX1NIT1dfRk9STSA9ICdQUk9EVUNUX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgQ2xlYXZlIGZyb20gXCJjbGVhdmUuanNcIjtcblxuLyoqXG4gKiBQcmljZSBpbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIG5ldyBDbGVhdmUodGhpcywge1xuICAgICAgICBudW1lcmFsOiB0cnVlLFxuICAgICAgICBwcmVmaXg6ICckICcsXG4gICAgICAgIHJhd1ZhbHVlVHJpbVByZWZpeDogdHJ1ZSxcbiAgICAgICAgb25WYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKCtlLnRhcmdldC5yYXdWYWx1ZSAqIDEwMCk7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJ3RkJykuZmluZCgnLnByb2R1Y3QtcHJpY2UnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBwYXJzZUludChwcm9kdWN0UHJpY2UudmFsKCkpKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlXG4gICAgICAgICAgICAgICAgICAgIC52YWwodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtQUk9EVUNUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9jb25zdGFudHNcIjtcbmltcG9ydCBwcmljZUluaXQgZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9oYW5kbGVycy9wcmljZUluaXRcIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KFBST0RVQ1RfU0hPV19GT1JNKSk7XG5cbiQoJyN0ZXN0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG59KTtcbi8qKlxuICogUHJpY2UgZm9ybWF0XG4gKi9cbiQoJy5wcm9kdWN0LXByaWNlLXZpZXcnKS5lYWNoKHByaWNlSW5pdCk7XG4iLCJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gcGFyc2VJbnQoJCgnLmFkZC1jb3VudGVyJykudmFsKCkpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgndGFibGUudGFibGUgdGJvZHknKTtcbiAgICBjb25zdCBtYXhJZCA9ICQodGhpcykuZGF0YSgnY291bnRlcicpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJCgndGVtcGxhdGUjY29uZmlnLXJvdycpO1xuXG4gICAgbGV0IG5ld0xlbmd0aCA9IHBhcnNlSW50KHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0cklkID0gKG1heElkID4gMCA/IG1heElkIDogMCkgKyBwYXJzZUludCh0Ym9keS5maW5kKCd0ci5uZXctcm93JykubGVuZ3RoKTtcblxuICAgICAgICBsZXQgbmV3Um93ID0gdGVtcGxhdGUuaHRtbCgpLnJlcGxhY2UoLyVpZCUvZywgdHJJZClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8ldHJfaWQlL2csIHRySWQpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWRyYWZ0JS9nLCB0cklkKTtcblxuICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgdG8gbmV3IHJvd3NcbiAgICAgICAgbGV0IG5ld1Jvd0h0bWwgPSAkKG5ld1Jvdyk7XG4gICAgICAgICQoJy5kZWZhdWx0LXJvdy12YWx1ZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0VmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgbmV3Um93SHRtbC5maW5kKCcuJyArICQodGhpcykuZGF0YSgnY2xhc3MnKSkuYXR0cigndmFsdWUnLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3Um93ID0gbmV3Um93SHRtbC5nZXQoMCkub3V0ZXJIVE1MO1xuXG4gICAgICAgIGlmIChuZXdMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sYXN0KCkpLmFmdGVyKG5ld1Jvdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0Ym9keS5wcmVwZW5kKG5ld1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3TGVuZ3RoKys7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnW2RhdGEtYXV0b2luY3JlbWVudD1cIjFcIl0nKS5sYXN0KCkudmFsKHRySWQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKlxuICogQHBhcmFtIF9cbiAqIEBwYXJhbSBpdGVtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChfLCBpdGVtKSB7XG4gICAgY29uc3QgZHJvcHpvbmVDb250YWluZXIgPSAkKGl0ZW0pO1xuICAgIGNvbnN0IHByZXZpZXdIaWRkZW5JbnB1dCA9IGRyb3B6b25lQ29udGFpbmVyLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoaXRlbSlcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCd1cmwnKSlcbiAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNldCBwcmV2aWV3XG4gICAgICovXG4gICAgaWYgKCEhcHJldmlld0hpZGRlbklucHV0LnZhbCgpKSB7XG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgpLFxuICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lQ29udGFpbmVyLmRhdGEoJ2ZvbGRlcicpLCBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICovXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG59IiwiLyoqXG4gKiBNYXJrIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAkKCcjdXBkYXRlLWFsbCcpLnNob3coKTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBhZ2UgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCQoXCJ0ci5jaGFuZ2VkXCIpLmZpbmQoJ2lucHV0LCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdLCBzZWxlY3QsIHRleHRhcmVhJykpO1xuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YSh7Li4uZGF0YX0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBpZiAocmVzcC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IocmVzcC5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSb3cgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcm93VG9TYXZlID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xuICAgIGxldCBhY3Rpb24gPSByb3dUb1NhdmUuZGF0YSgnYWN0aW9uJyk7XG4gICAgbGV0IHJvdyA9IHJvd1RvU2F2ZS5maW5kKFwiLmVkaXRhYmxlIHNlbGVjdCwgLmVkaXRhYmxlIGlucHV0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZigkKFwidHIuY2hhbmdlZFwiKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxldCByID0gY29uZmlybSgnQ2hhbmdlZCBtb3JlIHRoYW4gb25lIHJvdy4gU2F2ZWQgb25seSBjdXJyZW50IHJvdyEnKTtcbiAgICAgICAgaWYociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXJvd1RvU2F2ZS5oYXNDbGFzcygnY2hhbmdlZCcpKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBVVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICB1cmw6IGFjdGlvbixcbiAgICAgICAgZGF0YTogcm93LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiggcmVzcCApIHtcbiAgICAgICAgICAgIHJvd1RvU2F2ZS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3AubWVzc2FnZVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgdHlwZTogcmVzcC50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoanFYSFIucmVzcG9uc2VKU09OICYmIGpxWEhSLnJlc3BvbnNlSlNPTi5oYXNPd25Qcm9wZXJ0eSgnZXJyb3JzJykpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goIGpxWEhSLnJlc3BvbnNlSlNPTi5lcnJvcnMsIGZ1bmN0aW9uKGVycm9yS2V5LCBlcnJvciApIHtcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKCBlcnJvciwgZnVuY3Rpb24obWVzc2FnZUtleSwgbWVzc2FnZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcbmltcG9ydCBkcm9wem9uZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvZHJvcHpvbmVJbml0XCI7XG5pbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHttYXJrQ2hhbmdlZH0gZnJvbSBcIi4vaGFuZGxlcnMvbWFya0NoYW5nZWRcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEUsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVSb3dcIjtcblxuLyoqXG4gKiBUdXJuZWQgb2ZmIHRoZSBEcm9wem9uZSBhdXRvIGluaXRcbiAqXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICovXG4kKCcuZHJvcHpvbmUnKS5lYWNoKGRyb3B6b25lSW5pdCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmNwMicpLmNvbG9ycGlja2VyKCk7XG5cbiAgICAgICAgJCgnI3VwZGF0ZS1hbGwnKS5jbGljayhzYXZlUGFnZSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJy51cGRhdGUtcm93Jyk7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCBzZWxmKTtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlUm93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICQoJyN1cGRhdGUtYWxsJykuc2hvdygpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZHJvcHpvbmUnLCBtYXJrQ2hhbmdlZClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgbWFya0NoYW5nZWQpXG4gICAgLm9uKCdpbnB1dCcsICd0Ym9keSBpbnB1dCwgdGJvZHkgdGV4dGFyZWEnLCBtYXJrQ2hhbmdlZClcbiAgICAub24oJ2NoYW5nZScsICd0Ym9keSBpbnB1dCwgdGJvZHkgc2VsZWN0JywgbWFya0NoYW5nZWQpO1xuIiwiY29uc3QgV0FMS19DQVRFR09SWSA9ICc2JztcbmNvbnN0IFJVTl9DQVRFR09SWSA9JzcnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxlY3QyID0gJCgnLnRhYmxlJykuZmluZCgnLmVtYmVkLWdyb3VwIHNlbGVjdC5zZWxlY3QyJyk7XG4gICAgICAgIGxldCBzZWxlY3RWYWwgPSAwO1xuICAgICAgICBzZWxlY3QyLmVhY2goZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbCA9ICQoaSkudmFsKCk7XG4gICAgICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZCBvbiB0cmlnZ2VyIGFkZC1lbWJlZCBidXR0b25cbiAgICAgKi9cbiAgICAub24oJ2FpX2FuaW1hdGlvbicsICcuYWRkLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBlbWJlZCA9ICQodGhpcykuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9IGVtYmVkLmZpbmQoJy5zZWxlY3QyJykudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gJChpdGVtLnRhcmdldCkudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSA9ICdTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNJztcbiIsIi8qKlxuICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFibGUgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5zaG9wcy10YWJsZScpLmZpbmQoJ3Rib2R5Jyk7XG4gICAgY29uc3QgZGVwYXJ0bWVudElkID0gY3VycmVudEJ0bi5kYXRhKCdkZXBhcnRtZW50Jyk7XG4gICAgbGV0IGNvdW50ZXIgPSBwYXJzZUludChjdXJyZW50QnRuLmRhdGEoJ2NvdW50JykpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnI3Nob3AtdGVtcGxhdGUnKVxuICAgICAgICAuaHRtbCgpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVkZXBhcnRtZW50SWQlJywgXCJnXCIpLCBkZXBhcnRtZW50SWQpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVpbmRleCUnLCBcImdcIiksIGNvdW50ZXIrKyk7XG5cbiAgICBjdXJyZW50QnRuLmRhdGEoJ2NvdW50JywgY291bnRlcik7XG5cbiAgICB0YWJsZS5hcHBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZm9yIHNob3AgZGVwYXJ0bWVudFxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgc2hvcE5hbWVQcmVmaXggPSAnc2hvcCc7XG4gICAgY29uc3QgZGVwYXJ0bWVudE5hbWVQcmVmaXggPSAnZGVwYXJ0bWVudCc7XG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgZmFzdFNhdmVDb250YWluZXIgPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IHNob3BzID0ge307XG4gICAgbGV0IGRlcGFydG1lbnQgPSB7fTtcblxuICAgIGZhc3RTYXZlQ29udGFpbmVyLmZpbmQoJ3Rib2R5IHRyLmNoYW5nZWQgdHIuaW5mbycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGVwaW5kZXggPSAkKHRoaXMpLmNsb3Nlc3QoJy5kZXBhcnRtZW50JykuaW5kZXgoKTtcbiAgICAgICAgbGV0IGRlcGFydG1lbnRGb3JtRGF0YSA9IGdldEZvcm1EYXRhKCQodGhpcykpO1xuICAgICAgICBmb3IgKGxldCBpIGluIGRlcGFydG1lbnRGb3JtRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtkZXBhcnRtZW50TmFtZVByZWZpeH1bJHtkZXBpbmRleH1dWyR7aX1dYDtcbiAgICAgICAgICAgIGRlcGFydG1lbnRbaXRlbU5hbWVdID0gZGVwYXJ0bWVudEZvcm1EYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS5uZXh0KCd0ci5zaG9wcycpLmZpbmQoJ3Rib2R5LnNvcnRhYmxlIHRyJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKCQodGhpcykpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYCR7c2hvcE5hbWVQcmVmaXh9WyR7ZGVwYXJ0bWVudEZvcm1EYXRhLmlkfV1bJHtpbmRleH1dWyR7aX1dYDtcbiAgICAgICAgICAgICAgICBzaG9wc1tpdGVtTmFtZV0gPSBmb3JtRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBzaG9wc1tgJHtzaG9wTmFtZVByZWZpeH1bJHtkZXBhcnRtZW50Rm9ybURhdGEuaWR9XVske2luZGV4fV1bZGVwYXJ0bWVudF1gXSA9IGRlcGFydG1lbnRGb3JtRGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YSh7Li4uc2hvcHMsIC4uLmRlcGFydG1lbnR9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcuY2hhbmdlZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFJhZGlvIGlucHV0IGZyb20gY2hlY2tib3hcbiAqIEJlY2F1c2UgaW5wdXRbdHlwZT1yYWRpb10gZGlkIG5vdCB3b3JrIGNvcnJlY3RseVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gY3VycmVudEl0ZW0uY2xvc2VzdCgnLnRhYmxlJykuZmluZCgnLnJhZGlvJyk7XG5cbiAgICBhbGxJdGVtcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIGFsbEl0ZW1zLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG5cbiAgICBjdXJyZW50SXRlbS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgY3VycmVudEl0ZW0uYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xuICAgICAgICBncm91cDogJ2RlcGFydG1lbnQnLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLmZpbmQoJ3RyLmRlcGFydG1lbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG5ldyBTb3J0YWJsZSh0aGlzLCB7XG4gICAgICAgIGdyb3VwOiAnc2hvcHMnLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgJChlLml0ZW0pLmNsb3Nlc3QoJ3RyLmRlcGFydG1lbnQnKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvOiAkKGUuaXRlbSkuZmluZCgnLnJhZGlvJyksXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXJlbnQuZmluZCgnLnJhZGlvLmNoZWNrZWQ6Z3QoMCknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlldyBTbWFsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZS1zbWFsbCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwtc21hbGwnKSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRHJvcHpvbmUgSW5pdFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRyb3B6b25lRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld1VybEVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZHJvcHpvbmVJbml0KGRyb3B6b25lRWxlbWVudCwgcHJldmlld1VybEVsZW1lbnQpIHtcbiAgICBpZiAoIWRyb3B6b25lRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJChkcm9wem9uZUVsZW1lbnQpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAocHJldmlld1VybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCJpbXBvcnQgYWRkU2hvcCBmcm9tIFwiLi9oYW5kbGVycy9hZGRTaG9wXCI7XG5pbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVcIjtcbmltcG9ydCByYWRpb0lucHV0IGZyb20gXCIuL2hhbmRsZXJzL3JhZGlvSW5wdXRcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIm1vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuaW1wb3J0IHNvcnRhYmxlRGVwYXJ0bWVudEluaXQgZnJvbSBcIm1vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlRGVwYXJ0bWVudEluaXRcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbnNob3dGb3JtKCk7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogUmFkaW8gYnV0dG9ucyBiZWhhdmlvclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5yYWRpbycsIHJhZGlvSW5wdXQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0ci5kZXBhcnRtZW50JykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRG9jdW1lbnQgcmVhZHlcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGNsYXNzIHRvIGNoZWNrZWQgcmFkaW9zXG4gICAgICAgICAqL1xuICAgICAgICAkKCcucmFkaW9bY2hlY2tlZF0nKS5hZGRDbGFzcygnY2hlY2tlZCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5hZGQtc2hvcCcpLmNsaWNrKGFkZFNob3ApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGYXN0IHNhdmVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5mYXN0LXNhdmUnKS5jbGljayhmYXN0U2F2ZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1ha2UgdHIgdG8gc29ydGFibGVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnNvcnRhYmxlLWRlcGFydG1lbnQnKS5lYWNoKHNvcnRhYmxlRGVwYXJ0bWVudEluaXQpO1xuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNyZWxlYXNlID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjcmVsZWFzZV90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5yZWxlYXNlX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcmVsZWFzZSUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRldGltZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlICgpIHtcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJy5yZWxlYXNlLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSAkKCcucmVsZWFzZS1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0LCAuY2hhbmdlZCB0ZXh0YXJlYVwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlUGFnZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAqL1xuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVQYWdlKTtcbiIsIiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ3RkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZigkKHRoaXMpLmF0dHIoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQnLCAnI2U3ZTdlNycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI3NvdW5kID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjc291bmRfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuc291bmRfaWQnKS52YWwoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVzb3VuZF9pZCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNvdW5kU3RhdGUgKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCcuc291bmQtc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVNvdW5kU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVNvdW5kU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgVEFNQVRPT0xfU0hPV19GT1JNID0gJ1RBTUFUT09MX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtUQU1BVE9PTF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsImV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9BU1NFVFMgICAgICA9ICdTRUFSQ0hfVVNFUl9BU1NFVFMnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9VU0VSX1BBUlRfRk9STSAgID0gJ1NVQk1JVF9VU0VSX1BBUlRfRk9STSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FSUdIQk9SICAgICAgICAgPSAnREVMRVRFX05FSUdIQk9SJztcbmV4cG9ydCBjb25zdCBBRERfTkVJR0hCT1IgICAgICAgICAgICA9ICdBRERfTkVJR0hCT1InO1xuZXhwb3J0IGNvbnN0IEdFVF9ORUlHSEJPUlMgICAgICAgICAgID0gJ0dFVF9ORUlHSEJPUlMnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ORUlHSEJPUlMgICAgICAgID0gJ1VQREFURV9ORUlHSEJPUlMnO1xuXG5leHBvcnQgY29uc3QgTkVJR0hCT1JfR1JJRF9JRCA9ICduZWlnaGJvci1ncmlkJzsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbi8qKlxuICogQWRkIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCQoJyNjb2xsZWN0aWJsZS1mb3JtJykuZmluZCgnaW5wdXQnKSk7XG5cbiAgICBuZXcgaHR0cCgkKCcjYWRkLWNvbGxlY3RpYmxlJykuYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgLmRhdGEoe2RhdGF9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwLnR5cGUgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm0gPSAkKHJlc3AuZGF0YSk7XG4gICAgICAgICAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgICAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBjb2xsZWN0aWJsZSB1cGRhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogQWRkIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmNsb3Nlc3QoJ2EnKS5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAuZGF0YSh7ZGVzY3JpcHRpb246ICQoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWwoKX0pXG4gICAgICAgIC5zdWNjZXNzKHIgPT4ge1xuICAgICAgICAgICAgaWYgKHIuc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgJCgnI3VzZXItY29tbWVudHMnKS5wcmVwZW5kKCc8dHI+PHRkPicgKyByLm1vZGVsLmRlc2NyaXB0aW9uICsgJzwvdGQ+PHRkPicgKyByLmNyZWF0ZWRfYnkgKyAnPC90ZD48dGQ+JyArIHIuY3JlYXRlZF9hdCArICcgUFNUPC90ZD48dGQ+PGEgaHJlZj1cImh0dHA6Ly9jbXMtZGV2LmxvY2FsL3JlbW92ZS1jb21tZW50LycgKyByLm1vZGVsLmlkICsgJ1wiIGNsYXNzPVwiYWpheC1jb25maXJtLWFjdGlvblwiIGRhdGEtbWV0aG9kPVwiREVMRVRFXCIgZGF0YS1oZWFkZXI9XCJEZWxldGUgY29tbWVudD9cIiBkYXRhLWJ0bi1uYW1lPVwiRGVsZXRlXCIgZGF0YS1idG4tY2xhc3M9XCJidG4tZGFuZ2VyIGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIjFcIiBkYXRhLXJlbG9hZD1cIjFcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPkRlbGV0ZTwvYnV0dG9uPjwvYT48L3RkPjwvdHI+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFN5bmNocm9uaXplIG1vdmUtcGxhY2VtZW50LXNlbGVjdCBzZWxlY3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZWN0ZWRTdG9yYWdlID0gJCh0aGlzKS52YWwoKTtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKS5maW5kKCcubW92ZS1wbGFjZW1lbnQtc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBpZiAoc2VsZWN0ZWRTdG9yYWdlICE9ICQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICAgICQodGhpcykudmFsKHNlbGVjdGVkU3RvcmFnZSkuY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7VVBEQVRFX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIm1vZHVsZXMvdXNlcnMvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IHBhZ2UgbGltaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmcGFnZV9saW1pdD0nICsgJCh0aGlzKS52YWwoKTtcbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnR0VUJylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCIvKipcbiAqIENoYW5nZSBwbGFjZW1lbnQgc2VsZWN0IGluIEFkZCBBc3NldHMgYmxvY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBsYWNlbWVudE5hbWUgPSAkKCcjYWRkLWFzc2V0cy1ibG9jay1wbGFjZW1lbnQtbmFtZScpO1xuICAgIGlmICgkKHRoaXMpLnZhbCgpID4gMCkge1xuICAgICAgICBwbGFjZW1lbnROYW1lLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlbWVudE5hbWUuc2hvdygpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5laWdoYm9yc0NvdW50ID0gJCgnI25laWdoYm9ycy1jb3VudCcpO1xuICAgIGlmKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgbmVpZ2hib3JzQ291bnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5sb2FkLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgY3VycmVudEVsZW1lbnQuZGF0YSgncGxhY2VtZW50JykpLmh0bWwoJycpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAqIEluaXRlZCBpbiB1c2VyL2VkaXQuYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBwbGFjZW1lbnQgPSBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKTtcblxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5oaWRlLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG5cbiAgICBsb2FkUGFydChQTEFDRU1FTlRfQVNTRVRTX1JPVVRFICsgJyZwbGFjZW1lbnQ9JyArIHBsYWNlbWVudCwgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgcGxhY2VtZW50KSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTG9hZCBwYXJ0IGZvciBlZGl0IHVzZXIgcGFnZVxuICovXG5mdW5jdGlvbiBsb2FkUGFydChhY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gJChyZXNwb25zZSk7XG4gICAgICAgICAgICBpdGVtcy5maW5kKCcubGlzdC10aHVtYm5haWwnKS5wb3BvdmVyKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyAkKHRoaXMpLmRhdGEoJ2Z1bGwnKSArICdcIj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpdGVtcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59IiwiLyoqXG4gKiBTZWxlY3Qgcm93c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY291bnRTZWxlY3RvciA9ICQodGhpcykucGFyZW50cygndGQsIHRoJykuZmluZCgnLmNvdW50LWZvci1zZWxlY3QnKTtcbiAgICBjb25zdCByb3dzRm9yU2VsZWN0ID0gJCh0aGlzKS5wYXJlbnRzKCd0YWJsZScpLmZpbmQoJy5mb3Itc2VsZWN0Jyk7XG5cbiAgICBsZXQgY291bnRGb3JTZWxlY3QgPSBjb3VudFNlbGVjdG9yLnZhbCgpIHx8IDA7XG4gICAgaWYgKGNvdW50Rm9yU2VsZWN0ID09PSAwKSB7XG4gICAgICAgIGNvdW50Rm9yU2VsZWN0ID0gcm93c0ZvclNlbGVjdC5sZW5ndGg7XG4gICAgICAgIGNvdW50U2VsZWN0b3IudmFsKGNvdW50Rm9yU2VsZWN0KTtcbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjb3VudEZvclNlbGVjdCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvdW50Rm9yU2VsZWN0LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm93c0ZvclNlbGVjdC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7VVBEQVRFX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIm1vZHVsZXMvdXNlcnMvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVXBkYXRlIG5laWdoYm9yIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShVUERBVEVfTkVJR0hCT1JTLCAocmVzcG9uc2UsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVVBEQVRFX05FSUdIQk9SUywgc2VsZik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5hdHRyKCdhY3Rpb24nKSlcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdHRVQnKVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBRERfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgbmVpZ2hib3IgYXMgYWN0aXZlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUREX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7REVMRVRFX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGRlbGV0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShERUxFVEVfTkVJR0hCT1IsIHJlc3AgPT4ge1xuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgJCgnI2RlbGV0ZS1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtHRVRfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVXBkYXRlIG5laWdoYm9yIGdyaWQgaW4gc2VhcmNoaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0VUX05FSUdIQk9SUywgcmVzcCA9PiB7XG4gICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTRUFSQ0hfVVNFUl9BU1NFVFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTRUFSQ0hfVVNFUl9BU1NFVFMsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjc2VhcmNoLWFzc2V0cy1jb250YWluZXInKS5yZXBsYWNlV2l0aChkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuaW1wb3J0IHtTVUJNSVRfVVNFUl9QQVJUX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTVUJNSVRfVVNFUl9QQVJUX0ZPUk0sIHJlc3AgPT4ge1xuICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcblxuICAgICAgICAkKCcjJyArIHJlc3AuY29udGFpbmVyKS5yZXBsYWNlV2l0aChmb3JtKTtcbiAgICAgICAgZm9ybS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBkYXRhIHVwZGF0ZWQnKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzZWFyY2hVc2VyQXNzZXRzICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL3NlYXJjaFVzZXJBc3NldHNcIjtcbmltcG9ydCBzdWJtaXRVc2VyUGFydEZvcm0gICAgZnJvbSBcIi4vbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybVwiO1xuaW1wb3J0IGRlbGV0ZU5laWdoYm9yICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3JcIjtcbmltcG9ydCBzZWFyY2hOZWlnaGJvciAgICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL3NlYXJjaE5laWdoYm9yXCI7XG5pbXBvcnQgYWRkTmVpZ2hib3IgICAgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9hZGROZWlnaGJvclwiO1xuaW1wb3J0IGxvYWRQbGFjZW1lbnRBc3NldHMgICBmcm9tIFwiLi9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgaGlkZVBsYWNlbWVudEFzc2V0cyAgIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBjaGFuZ2VQbGFjZW1lbnQgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50XCI7XG5pbXBvcnQgY2hhbmdlUmFuZG9tTmVpZ2hib3JzIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9yc1wiO1xuaW1wb3J0IGNoYW5nZU1vdmVQbGFjZW1lbnQgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VNb3ZlUGxhY2VtZW50XCI7XG5pbXBvcnQgc2VsZWN0Um93cyAgICAgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL3NlbGVjdFJvd3NcIjtcbmltcG9ydCB1cGRhdGVOZWlnaGJvcnMgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvdXBkYXRlTmVpZ2hib3JzXCI7XG5pbXBvcnQgY2hhbmdlUGFnZUxpbWl0ICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBhZ2VMaW1pdFwiO1xuaW1wb3J0IGFkZENvbW1lbnQgICAgICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9hZGRDb21tZW50XCI7XG5pbXBvcnQgYWRkQ29sbGVjdGlibGUgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHMgbGlzdGVuZXJcbiAqL1xuc2VhcmNoVXNlckFzc2V0cygpO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybSBsaXN0ZW5lclxuICovXG5zdWJtaXRVc2VyUGFydEZvcm0oKTtcblxuLyoqXG4gKiBEZWxldGUgTmVpZ2hib3JcbiAqL1xuZGVsZXRlTmVpZ2hib3IoKTtcblxuLyoqXG4gKiBBZGQgTmVpZ2hib3JcbiAqL1xuYWRkTmVpZ2hib3IoKTtcblxuLyoqXG4gKiBTZWFyY2ggTmVpZ2hib3JzXG4gKi9cbnNlYXJjaE5laWdoYm9yKCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5sb2FkLWFzc2V0cycsIGxvYWRQbGFjZW1lbnRBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgcGxhY2VtZW50IGluIEFkZCBBc3NldHMgYmxvY2tcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjcGxhY2VtZW50LWZvci1hc3NldCcsIGNoYW5nZVBsYWNlbWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtb2RlIGZvciBhZGQgbmVpZ2hib3JzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI2lzLXJhbmRvbS1uZWlnaGJvcnMnLCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMpXG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLWFzc2V0cycsIGhpZGVQbGFjZW1lbnRBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBBdXRvIHNlbGVjdCByb3dzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnNlbGVjdC1yb3dzJywgc2VsZWN0Um93cylcblxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplIG1vdmUtcGxhY2VtZW50LXNlbGVjdCBzZWxlY3RzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm1vdmUtcGxhY2VtZW50LXNlbGVjdCcsIGNoYW5nZU1vdmVQbGFjZW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgbmVpZ2hib3IgcmVxdWVzdFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1uZWlnaGJvci1yZXF1ZXN0LCAjYWRkLW5laWdoYm9ycycsIHVwZGF0ZU5laWdoYm9ycylcbiAgICAvKipcbiAgICAgKiBTZXQgcGFnZSBsaW1pdFxuICAgICAqL1xuICAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItcGFnZS1saW1pdCcsIGNoYW5nZVBhZ2VMaW1pdClcblxuICAgIC8qKlxuICAgICAqIEFkZCBjb21tZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjYWRkLWNvbW1lbnQnLCBhZGRDb21tZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbGxlY3RpYmxlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjYWRkLWNvbGxlY3RpYmxlJywgYWRkQ29sbGVjdGlibGUpXG47XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9