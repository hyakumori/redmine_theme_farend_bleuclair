/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_bleuclair_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/bleuclair.js */ "./src/scripts/bleuclair.js");
/* harmony import */ var _scripts_bleuclair_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_bleuclair_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_bleuclair_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/bleuclair.scss */ "./src/styles/bleuclair.scss");
// When built, it will be output as bleuclair/javascripts/theme.js
; // When built, it will be output as bleuclair/stylesheets/theme.css



/***/ }),

/***/ "./src/scripts/bleuclair.js":
/*!**********************************!*\
  !*** ./src/scripts/bleuclair.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

function setDiscontinuityClassToTabContent(id) {
  if ($('#' + id).hasClass('selected')) {
    if (id === 'tab-notes' || id === 'tab-properties') {
      $('div#tab-content-history').addClass('discontinuity');
    } else {
      $('div#tab-content-history').removeClass('discontinuity');
    }
  }
}

$(document).ajaxSuccess(function () {
  // Put the title in the before content without breaking the tooltip (For issues/show time_entries and changesets tabs)
  $('body.controller-issues.action-show a[href*="activity"][title*=":"]:not([data-absolute-date*=":"])').each(function (_index, element) {
    $(element).attr('data-absolute-date', element.title);
  });
});
$(function () {
  /* Change to open external link in another tab */
  $("a.external").attr("target", "_blank");
  $("a.help").attr("target", "_blank");
  $("div#footer a[href^='https://www.redmine.org/']").attr("target", "_blank");

  if (($("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang")) == "ja") {
    /* When the language is Japanese, the link destination of help is Redmine.jp */
    $("a.help").attr("href", "http://guide.redmine.jp/");
  } // Put the title in the before content without breaking the tooltip


  $('a[href*="activity"][title*=":"]').each(function (_index, element) {
    $(element).attr("data-absolute-date", element.title);
  });
  $('#history > .tabs a').each(function () {
    setDiscontinuityClassToTabContent($(this).attr('id'));
    $(this)[0].addEventListener('click', function () {
      setDiscontinuityClassToTabContent($(this).attr('id'));
    });
  });
}); // Function based on https://www.redmine.org/issues/21808#note-27 patch.
// collapsible sidebar jQuery plugin

(function ($) {
  // main container this is applied to
  var main; // triggers show/hide

  var button; // the key to use in local storage
  // this will later be expanded using the current controller and action to
  // allow for different sidebar states for different pages

  var localStorageKey = 'redmine-sidebar-state'; // true if local storage is available

  var canUseLocalStorage = function () {
    try {
      if ('localStorage' in window) {
        localStorage.setItem('redmine.test.storage', 'ok');
        var item = localStorage.getItem('redmine.test.storage');
        localStorage.removeItem('redmine.test.storage');
        if (item === 'ok') return true;
      }
    } catch (err) {}

    return false;
  }(); // function to set current sidebar state


  var setState = function setState(state) {
    if (canUseLocalStorage) {
      localStorage.setItem(localStorageKey, state);
    }
  };

  var applyState = function applyState() {
    if (main.hasClass('visible-sidebar')) {
      setState('visible');
    } else {
      setState('hidden');
    }
  };

  var setupToggleButton = function setupToggleButton() {
    button = $('#sidebar-switch-button');
    button.click(function (e) {
      main.addClass("animate");
      main.toggleClass('visible-sidebar');
      applyState();
      e.preventDefault();
      return false;
    });
    applyState();
  };

  $.fn.collapsibleSidebar = function () {
    main = this; // determine previously stored sidebar state for this page

    if (canUseLocalStorage) {
      // determine current controller/action pair and use them as storage key
      var bodyClass = $('body').attr('class');

      if (bodyClass) {
        try {
          localStorageKey += '-' + bodyClass.split(/\s+/).filter(function (s) {
            return s.match(/(action|controller)-.*/);
          }).sort().join('-');
        } catch (e) {// in case of error (probably IE8), continue with the unmodified key
        }
      }

      var storedState = localStorage.getItem(localStorageKey);
      main.toggleClass('visible-sidebar', storedState === 'visible' || !storedState);
    } else {
      main.toggleClass('visible-sidebar', true);
    } // draw the toggle button once the DOM is complete


    $(document).ready(setupToggleButton);
  };
})(jQuery);

window.addEventListener('DOMContentLoaded', function () {
  if (!$('#main').hasClass('nosidebar')) {
    if ($('#sidebar-switch-panel').length == 0) {
      $('#content').prepend('<div id="sidebar-switch-panel"><a id="sidebar-switch-button" href="#"></a></div>');
    }

    $('#main').collapsibleSidebar();
  }
});

/***/ }),

/***/ "./src/styles/bleuclair.scss":
/*!***********************************!*\
  !*** ./src/styles/bleuclair.scss ***!
  \***********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=theme.js.map