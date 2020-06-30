/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/setBuilder/setbuilder.js":
/*!***********************************************!*\
  !*** ./resources/js/setBuilder/setbuilder.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _songSearcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songSearcher */ "./resources/js/setBuilder/songSearcher.js");
/* harmony import */ var _songSearcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_songSearcher__WEBPACK_IMPORTED_MODULE_0__);

var songSearcher = '.song-search';
$(document).ready(function () {
  $(songSearcher).songSearcher();
});

/***/ }),

/***/ "./resources/js/setBuilder/songSearcher.js":
/*!*************************************************!*\
  !*** ./resources/js/setBuilder/songSearcher.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'searchBar': '#songSearchBar',
    'resultsTable': '#songSearchResult',
    'isSearching': false,
    'characterTreshold': 3
  };
  /**
   * Get option value
   * @param {object} obj
   * @param {string} option
   */

  function getOption(obj, option) {
    var options = $(obj).data('songSearcher-options');
    if (!options.hasOwnProperty(option)) return null;
    return options[option];
  }
  /**
   * Set option value
   * @param {Object} obj
   * @param {String} option
   * @param {any} value
   */


  function setOption(obj, option, value) {
    var options = $(obj).data('songSearcher-options');
    options[option] = value;
    $(obj).data('songSearcher-options', options);
  }

  function search(obj, searchTerm) {
    console.log(searchTerm);
    setOption(obj, 'isSearching', true);
    $.ajax({
      'url': '/songs?term=' + searchTerm,
      'method': 'get',
      'contentType': 'application/json',
      'dataType': 'json'
    }).done(function (response) {
      console.log(response);

      if ('error' in response) {
        return;
      }

      buildSearchResult(obj, response);
    }).fail(function (response) {
      console.error(response);
    }).always(function () {
      setOption(obj, 'isSearching', false);
    });
  }

  function buildSearchResult(obj, songs) {
    if (songs == null) return;
    if (!Array.isArray(songs)) return;
    var table = $(obj).find(getOption(obj, 'resultsTable'));
    if (table.length <= 0) return;
    table.find('tbody').find('tr:not(.no-results-row)').remove();

    if (songs.length <= 0) {
      table.addClass('noresults');
      return;
    }

    table.removeClass('noresults');
    songs.forEach(function (song) {
      var tdTitle = $('<td>').text(song.title);
      var tdArtist = $('<td>').text(song.details.artist);
      var tdKey = $('<td>').text(song.key + ' ' + song.scale);
      table.find('tbody').append($('<tr>').append(tdTitle).append(tdArtist).append(tdKey));
    });
  }

  $.fn.songSearcher = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('songSearcher-options', settings);
        $(settings.searchBar).on('keyup', function () {
          if (getOption(self, 'isSearching')) return false;
          if ($(this).val().length <= getOption(self, 'characterTreshold') * 1) return false;
          search(self, $(this).val());
        });
      });
    }
  };
})(jQuery);

/***/ }),

/***/ 3:
/*!*****************************************************!*\
  !*** multi ./resources/js/setBuilder/setbuilder.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PrjFiles\Prj\eska\Source\eska\resources\js\setBuilder\setbuilder.js */"./resources/js/setBuilder/setbuilder.js");


/***/ })

/******/ });