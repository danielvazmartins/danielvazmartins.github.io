(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/styles/font-roboto.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/assets/styles/font-roboto.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url('Roboto-Regular.ttf') format(\"truetype\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}", "",{"version":3,"sources":["/Volumes/hdDados/projetos/mysite/resume/spa/src/assets/styles/font-roboto.scss","font-roboto.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,2FAAA;EACA,yKAAA;ACCJ","file":"font-roboto.scss","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: local('Roboto'), local('Roboto-Regular'), url(../fonts/Roboto-Regular.ttf) format('truetype');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }","@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(../fonts/Roboto-Regular.ttf) format(\"truetype\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/styles/panel.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/assets/styles/panel.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".panel {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f0f0f0;\n  min-height: 100%;\n}\n.panel > ng-component {\n  flex: 1;\n}\n.panel .page-title {\n  color: #0D81FA;\n  font-size: 40px;\n}\n.panel .page-box {\n  padding: 20px 20px 50px 20px;\n  border: 2px solid #0D81FA;\n  border-radius: 25px;\n  background: #fff;\n  display: flex;\n  position: relative;\n}\n.panel .page-box:before {\n  content: \"\";\n  background: url(/assets/images/background-box-border.png) no-repeat;\n  width: 230px;\n  height: 55px;\n  position: absolute;\n  right: -2px;\n  bottom: -3px;\n}\n.panel form {\n  display: flex;\n  flex-direction: column;\n}\n.panel form .form-line {\n  display: flex;\n}\n.panel form .form-line .form-col {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.panel form .form-line .form-col:first-child {\n  margin-right: 20px;\n}\n.panel form app-input-field {\n  flex: 1;\n}\n.panel form .form-field {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.panel form .form-field label {\n  color: #707070;\n  font-size: 20px;\n}\n.panel form input, .panel form textarea, .panel form select, .panel form .box-group {\n  width: 100%;\n  border: 1px solid #707070;\n  box-shadow: 3px 5px 3px #70707098;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.panel form textarea {\n  height: 100%;\n}\n.panel form .select-wrapper {\n  position: relative;\n}\n.panel form .select-wrapper:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: 16px;\n  top: 16px;\n  border: 10px solid;\n  border-color: #707070 transparent transparent transparent;\n  pointer-events: none;\n}\n.panel .bt {\n  display: inline-block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #fff;\n  text-transform: uppercase;\n  padding: 10px 30px;\n  border-radius: 25px;\n  box-shadow: 3px 5px 3px #70707098;\n  cursor: pointer;\n  transition: all ease-in-out 200ms;\n}\n.panel .bt.primary {\n  border: 3px solid #0D81FA;\n  color: #0D81FA;\n}\n.panel .bt.secondary {\n  border: 3px solid #707070;\n  color: #707070;\n}\n.panel .bt:hover {\n  transform: scale(1.05, 1.05);\n  background: #efefef;\n}", "",{"version":3,"sources":["/Volumes/hdDados/projetos/mysite/resume/spa/src/assets/styles/panel.scss","panel.scss","/Volumes/hdDados/projetos/mysite/resume/spa/src/assets/styles/panel-colors.scss"],"names":[],"mappings":"AAEA;EACI,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;ACDJ;ADGI;EACI,OAAA;ACDR;ADII;EACI,cEfO;EFgBP,eAAA;ACFR;ADKI;EACI,4BAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;ACHR;ADKQ;EACI,WAAA;EACA,mEAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;ACHZ;ADOI;EACI,aAAA;EACA,sBAAA;ACLR;ADOQ;EACI,aAAA;ACLZ;ADOY;EACI,aAAA;EACA,sBAAA;EACA,OAAA;ACLhB;ADOgB;EACI,kBAAA;ACLpB;ADUQ;EACI,OAAA;ACRZ;ADWQ;EACI,aAAA;EACA,sBAAA;EACA,YAAA;ACTZ;ADWY;EACI,cEjEJ;EFkEI,eAAA;ACThB;ADaQ;EACI,WAAA;EACA,yBAAA;EACA,iCAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;ACXZ;ADcQ;EACI,YAAA;ACZZ;ADeQ;EACI,kBAAA;ACbZ;ADeY;EACI,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yDAAA;EACA,oBAAA;ACbhB;ADkBI;EACI,qBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iCAAA;EACA,eAAA;EACA,iCAAA;AChBR;ADkBQ;EACI,yBAAA;EACA,cEnHG;ADmGf;ADmBQ;EACI,yBAAA;EACA,cEvHA;ADsGZ;ADoBQ;EACI,4BAAA;EACA,mBAAA;AClBZ","file":"panel.scss","sourcesContent":["@import \"./panel-colors.scss\";\n\n.panel {\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #f0f0f0;\n    min-height: 100%;\n\n    > ng-component {\n        flex: 1;\n    }\n\n    .page-title {\n        color: $blue-primary;\n        font-size: 40px;\n    }\n\n    .page-box {\n        padding: 20px 20px 50px 20px;\n        border: 2px solid $blue-primary;\n        border-radius: 25px;\n        background: #fff;\n        display: flex;\n        position: relative;\n\n        &:before {\n            content: '';\n            background: url(/assets/images/background-box-border.png) no-repeat;\n            width: 230px;\n            height: 55px;\n            position: absolute;\n            right: -2px;\n            bottom: -3px;\n        }\n    }\n\n    form {\n        display: flex;\n        flex-direction: column;\n    \n        .form-line {\n            display: flex;\n    \n            .form-col {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n    \n                &:first-child {\n                    margin-right: 20px;\n                }\n            }\n        }\n    \n        app-input-field {\n            flex: 1;\n        }\n\n        .form-field {\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n\n            label {\n                color: $gray-dark;\n                font-size: 20px;\n            }\n        }\n    \n        input, textarea, select, .box-group {\n            width: 100%;\n            border: 1px solid $gray-dark;\n            box-shadow: 3px 5px 3px $gray-shadow;\n            border-radius: 8px;\n            padding: 10px;\n            margin-bottom: 10px;\n            appearance: none;\n        }\n\n        textarea {\n            height: 100%;\n        }\n\n        .select-wrapper {\n            position: relative;\n\n            &:before {\n                content: '';\n                position: absolute;\n                width: 0;\n                height: 0;\n                right: 16px;\n                top: 16px;\n                border: 10px solid;\n                border-color: $gray-dark transparent transparent transparent;\n                pointer-events: none;\n            }\n        }\n    }\n\n    .bt {\n        display: inline-block;\n        width: fit-content;\n        background: #fff;\n        text-transform: uppercase;\n        padding: 10px 30px;\n        border-radius: 25px;\n        box-shadow: 3px 5px 3px $gray-shadow;\n        cursor: pointer;\n        transition: all ease-in-out 200ms;\n    \n        &.primary {\n            border: 3px solid $blue-primary;\n            color: $blue-primary;\n        }\n\n        &.secondary {\n            border: 3px solid $gray-dark;\n            color: $gray-dark;\n        }\n    \n        &:hover {\n            transform: scale(1.05,1.05);\n            background: #efefef;\n        }\n    }\n}",".panel {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f0f0f0;\n  min-height: 100%;\n}\n.panel > ng-component {\n  flex: 1;\n}\n.panel .page-title {\n  color: #0D81FA;\n  font-size: 40px;\n}\n.panel .page-box {\n  padding: 20px 20px 50px 20px;\n  border: 2px solid #0D81FA;\n  border-radius: 25px;\n  background: #fff;\n  display: flex;\n  position: relative;\n}\n.panel .page-box:before {\n  content: \"\";\n  background: url(/assets/images/background-box-border.png) no-repeat;\n  width: 230px;\n  height: 55px;\n  position: absolute;\n  right: -2px;\n  bottom: -3px;\n}\n.panel form {\n  display: flex;\n  flex-direction: column;\n}\n.panel form .form-line {\n  display: flex;\n}\n.panel form .form-line .form-col {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.panel form .form-line .form-col:first-child {\n  margin-right: 20px;\n}\n.panel form app-input-field {\n  flex: 1;\n}\n.panel form .form-field {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.panel form .form-field label {\n  color: #707070;\n  font-size: 20px;\n}\n.panel form input, .panel form textarea, .panel form select, .panel form .box-group {\n  width: 100%;\n  border: 1px solid #707070;\n  box-shadow: 3px 5px 3px #70707098;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  appearance: none;\n}\n.panel form textarea {\n  height: 100%;\n}\n.panel form .select-wrapper {\n  position: relative;\n}\n.panel form .select-wrapper:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: 16px;\n  top: 16px;\n  border: 10px solid;\n  border-color: #707070 transparent transparent transparent;\n  pointer-events: none;\n}\n.panel .bt {\n  display: inline-block;\n  width: fit-content;\n  background: #fff;\n  text-transform: uppercase;\n  padding: 10px 30px;\n  border-radius: 25px;\n  box-shadow: 3px 5px 3px #70707098;\n  cursor: pointer;\n  transition: all ease-in-out 200ms;\n}\n.panel .bt.primary {\n  border: 3px solid #0D81FA;\n  color: #0D81FA;\n}\n.panel .bt.secondary {\n  border: 3px solid #707070;\n  color: #707070;\n}\n.panel .bt:hover {\n  transform: scale(1.05, 1.05);\n  background: #efefef;\n}","$blue-primary: #0D81FA;\n$gray-dark: #707070;\n$gray-shadow: #70707098;"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  box-sizing: border-box;\n  outline: none;\n}\n\nhtml, body {\n  height: 100%;\n}", "",{"version":3,"sources":["/Volumes/hdDados/projetos/mysite/resume/spa/src/styles.scss","styles.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;EACA,aAAA;ACCJ;;ADEA;EACI,YAAA;ACCJ","file":"styles.scss","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n    outline: none;\n}\n\nhtml, body {\n    height: 100%;\n}","* {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  box-sizing: border-box;\n  outline: none;\n}\n\nhtml, body {\n  height: 100%;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/styles/font-roboto.scss":
/*!********************************************!*\
  !*** ./src/assets/styles/font-roboto.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./font-roboto.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/styles/font-roboto.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/assets/styles/panel.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/panel.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./panel.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/styles/panel.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!***************************************************************************************************!*\
  !*** multi ./src/assets/styles/font-roboto.scss ./src/assets/styles/panel.scss ./src/styles.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Volumes/hdDados/projetos/mysite/resume/spa/src/assets/styles/font-roboto.scss */"./src/assets/styles/font-roboto.scss");
__webpack_require__(/*! /Volumes/hdDados/projetos/mysite/resume/spa/src/assets/styles/panel.scss */"./src/assets/styles/panel.scss");
module.exports = __webpack_require__(/*! /Volumes/hdDados/projetos/mysite/resume/spa/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map