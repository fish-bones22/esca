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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./resources/js/common/dynamicPanel.js":
/*!*********************************************!*\
  !*** ./resources/js/common/dynamicPanel.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    key: "panel",
    panelAction: ".panel-actions",
    startCount: 1,
    navigateByArrowKeys: true,
    newPanelKeys: [13],
    isDraggable: true,
    draggable: {},
    autoformatPaste: false,
    getChildOfTemplate: true
  };
  var panelSelector = ".panel-item";
  var panelClass = panelSelector.replace(/[.,#]*/g, '');
  /**
   * Initialize the options
   * @param {Object} options
   */

  function initOptions(options) {
    if (!options.hasOwnProperty('panelAction') || options['panelAction'] == '') {
      options['panelAction'] = options.hasOwnProperty('key') ? "." + options.key + "-actions" : defaults.panelAction;
    }

    return options;
  }
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */


  function getOption(object, key) {
    var options = $(object).data('dynamicPanel-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('dynamicPanel-options');
    options[key] = value;
    $(object).data('dynamicPanel-options', options);
  }
  /**
   * Insert a panel from a position
   * @param {object} obj Target DOM
   * @param {int} index Position where to insert the panel
   */


  function insertPanel(obj, index) {
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    // Get current count of panels
    var panelCount = getOption(obj, 'panelCount');

    if (index == undefined) {
      index = panelCount > 0 ? panelCount : 0;
    }

    if (index > panelCount) {
      index = panelCount;
    } // Get next sibling panel


    var nextPanel = $(obj).children(panelSelector + '[data-order="' + (index + 1) + '"]').first();
    var firstSibling = nextPanel; // Adjust order of succeeding panels first

    while (nextPanel.length > 0) {
      var currOrder = nextPanel.attr('data-order') * 1;
      nextPanel.attr('data-order', currOrder + 1);
      nextPanel = nextPanel.next(panelSelector);
    } // Get panel template selector


    var panelTemplateSelector = getOption(obj, 'panelTemplate');
    var panel;

    if (getOption(obj, 'getChildOfTemplate')) {
      panel = $($(panelTemplateSelector).html());
    } else {
      panel = $(panelTemplateSelector).clone();
    } // Set up attributes


    panel.attr('data-order', index + 1).addClass(panelClass); // Get delete selector from options
    // then set event listener for delete

    var removerSelector = getOption(obj, 'removerSelector');
    panel.find(removerSelector).bind('click', function () {
      var index = $(this).closest(panelSelector).attr('data-order') * 1 - 1;
      removePanel(obj, index);
    }); // Event listener for keys

    panel.find('input[type="text"]').keyup(function (event) {
      focusPanelByKey(obj, panel, event.which);

      if (getOption(obj, 'navigateByArrowKeys') && event.which == 38 || event.which == 40) {
        navigatePanelByKey(panel, event.which == 38 ? 'up' : 'down');
      }
    }); // Draggable

    var draggable = getOption(obj, 'isDraggable');

    if (draggable) {
      panel.draggable({
        addClasses: false,
        connectToSortable: '#' + $(obj).attr('id'),
        handle: panel.find('.move-handle'),
        revert: true,
        revertDuration: 0
      });
    } // Add to panel container


    if (firstSibling.length <= 0) {
      // Get container selector from options
      var container = getOption(obj, 'container');

      if (container == undefined) {
        $(obj).append(panel);
      } else {
        $(obj).find(container).append(panel);
      }
    } else {
      firstSibling.before(panel);
    } // Set panel count


    setOption(obj, 'panelCount', ++panelCount); // Set id if given

    if (id != null && typeof id == 'string') {
      panel.attr('data-id', id);
    }

    $(obj).trigger('dynamicPanel:insert' + getOption(obj, 'key'), [panel]);
    return panel;
  }

  function focusPanelByKey(obj, panel, key) {
    // Get inlcuded keys to activate
    var newPanelKeys = getOption(obj, 'newPanelKeys');
    if (newPanelKeys == undefined || _typeof(newPanelKeys) != 'object' || newPanelKeys.length <= 0) return false; // Key not on defined keys

    if (!newPanelKeys.includes(key)) return false; // Get closest input from the next panel

    panel = panel.next(panelSelector); // If no next panel, create new

    if (panel.length <= 0) {
      panel = insertPanel(obj);
    } // Focus to this panel


    panel.find('input[type="text"]').focus();
  }

  function navigatePanelByKey(panel, direction) {
    switch (direction.toLowerCase()) {
      case 'up':
        panel = panel.prev(panelSelector);
        break;

      case 'down':
        panel = panel.next(panelSelector);
        break;

      default:
        return false;
    }

    if (panel.length <= 0) return false; // Focus to this panel

    panel.find('input[type="text"]').focus();
  }
  /**
   * Remove target panel and reorder succeeding sibling panels
   * @param {object} obj Target object
   * @param {int} index panel position to remove
   */


  function removePanel(obj, index) {
    // Set panel count
    var panelCount = getOption(obj, 'panelCount');

    if (panelCount <= 0) {
      console.error("dynamicPanel.deletePanel() => No panels to delete");
    }

    if (index == undefined || index > panelCount) {
      index = panelCount - 1;
    }

    var panel = $(obj).children(panelSelector + '[data-order="' + (index + 1) + '"]').first(); // Get next sibling item

    var next = panel.next(panelSelector);
    panel.remove();
    panel = next;

    while (panel.length > 0) {
      // Get current order of the next sibling panel
      currentOrder = panel.attr('data-order') * 1 - 1; // Set order of the item

      panel.attr('data-order', currentOrder); // Get next sibling item

      panel = panel.next(panelSelector);
    }

    setOption(obj, 'panelCount', --panelCount);
  }

  function removeAll(obj) {
    $(obj).children('.panel-item').each(function () {
      removePanel(obj, $(this).attr('data-order') * 1 - 1);
    });
  }

  $.fn.dynamicPanel = function (command, option, val) {
    /** INIT */
    if (_typeof(command) === 'object') {
      return this.each(function () {
        var self = this; // Get data attributes and add them to settings
        // data-remover

        if ($(self).attr('data-remover') != undefined) {
          command['removerSelector'] = $(self).attr('data-remover');
        } // data-adder


        if ($(self).attr('data-adder') != undefined) {
          command['adderSelector'] = $(self).attr('data-adder');
        } // data-template


        if ($(self).attr('data-template') != undefined) {
          command['panelTemplate'] = $(self).attr('data-template');
        } // Set settings


        var settings = $.extend({}, defaults, initOptions(command));
        $(self).data('dynamicPanel-options', settings);
        $(self).addClass('dynamicPanel'); // Set draggable

        var dragOpt = settings.draggable;
        var cancelOpt = dragOpt != undefined && dragOpt.hasOwnProperty('cancel') ? dragOpt.cancel : [];

        if (settings.isDraggable) {
          $(self).sortable({
            addClasses: false,
            cancel: ['input', 'a', 'select', 'button:not(.move-handle)'].concat(cancelOpt).join(','),
            cursor: 'grabbing',
            stop: function stop(event, ui) {
              // Resort panel after sorting
              var index = 1;
              $(self).children(panelSelector).each(function () {
                if (index !== $(this).attr('data-order') * 1) {
                  $(this).attr('data-order', index);
                }

                index++;
              }); //$(ui.item).removeAttr('style');
            }
          });
        }
        /** Event listeners **/
        // Add panels button


        $(document).on('click', '[data-target="#' + $(self).attr('id') + '"]', function () {
          // Create panel then focus on the closest text input
          insertPanel(self).find('input[type="text"]').focus();
        }); // paste event

        if (settings.autoformatPaste) {
          $(document).on('paste', '#' + $(self).attr('id') + '>' + panelSelector + ' input[type="text"]', function (event) {
            // Get clipboard data
            var clipboardData = event.originalEvent.clipboardData.getData('text');
            if (clipboardData == undefined) return true; // Split clipboard data by newline

            var lines = clipboardData.split('\n');
            if (lines == undefined || lines.length <= 0) return true;
            event.preventDefault(); // Process clipboard data, creating new panel per line of text

            var panelInput = $(this);
            panelInput.val(lines[0].trim()).trigger('change');

            for (var i = 1; i < lines.length; i++) {
              panelInput = panelInput.closest(panelSelector).next(panelSelector).find('input[type="text"]');

              if (panelInput.length <= 0) {
                panelInput = insertPanel(self).find('input[type="text"]');
              }

              panelInput.val(lines[i].trim());
              panelInput.trigger('change');
            }
          });
        }
        /** Custom events */
        // onInsert


        if (settings.hasOwnProperty('onInsert') && settings.onInsert != undefined) {
          $(self).on('dynamicPanel:insert' + settings.key, settings.onInsert);
        } // Create panels


        for (var i = 0; i < settings.startCount; i++) {
          insertPanel(self);
        }
      });
    }
    /** ACTIONS */


    if (typeof command === 'string') {
      switch (command.toLowerCase()) {
        case 'option':
          return getOption(this, option);

        case 'insert':
          var panel;
          this.each(function () {
            panel = insertPanel(this, option, val);
          });
          return panel;

        case 'remove':
          return this.each(function () {
            removePanel(this, option);
          });

        case 'removeall':
          return this.each(function () {
            removeAll(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songItem.js":
/*!*********************************************!*\
  !*** ./resources/js/songViewer/songItem.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'keySelector': '',
    'key': 'C',
    'scale': 'major',
    'modulation': 0,
    'songTitlePanel': '',
    'songArtistPanel': '',
    'songPartsContainer': '',
    'songLinesContainer': '',
    'songPartTemplate': '',
    'songLineTemplate': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': '',
    'fontSize': '',
    'fontFamily': ''
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songItem-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('songItem-options');
    options[key] = value;
    $(object).data('songItem-options', options);
  }
  /**
   * Set the value of the song
   * @param {object} obj
   * @param {object} song song object
   */


  function setValue(obj, song) {
    // Set details
    if (song.hasOwnProperty('title')) {
      $(obj).find(getOption(obj, 'songTitlePanel')).text(song.title);
    }

    if (song.details.hasOwnProperty('artist')) {
      $(obj).find(getOption(obj, 'songArtistPanel')).text(song.details.artist);
    }

    if (song.hasOwnProperty('key')) {
      setOption(obj, 'key', song.key);
      $(obj).find(getOption(obj, 'keySelector')).children('[value="' + song.key + '"]').prop('selected', true);
    }

    if (song.hasOwnProperty('scale')) {
      setOption(obj, 'scale', song.scale);
    } // Set song parts


    setSongParts(obj, song.songParts, song.sequence);
  }

  function setSongParts(obj, songParts, sequences) {
    var songPartsContainer = $(obj).find(getOption(obj, 'songPartsContainer')); // Remove panels first

    songPartsContainer.dynamicPanel('removeAll'); // Set up song parts with regards to eats sequence

    sequences.forEach(function (sequence) {
      // Set up only the first sequence with song part attribute in it
      if (!sequence.hasOwnProperty('songParts')) {
        return;
      } // Iterate song part reference from the sequence


      sequence.songParts.forEach(function (songPartRef) {
        // Get song part from the song's songpart object based on the reference's ID
        var songPart = songParts.find(function (o) {
          return o.id == songPartRef.songPart;
        });
        if (songPart == undefined) return; // Set up song part with repetitions

        for (var i = 0; i < songPartRef.repeat * 1; i++) {
          var songPartPanel = songPartsContainer.dynamicPanel('insert');
          songPartPanel.songPart('option', 'sequenceModulation', songPartRef.referenceKey);
          songPartPanel.songPart('setValue', songPart);
        }
      });
      return;
    });
  }

  $.fn.songItem = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).find(settings.songPartsContainer).dynamicPanel({
          'key': 'songpart',
          'panelTemplate': settings.songPartTemplate,
          'onInsert': function onInsert(event, songPartPanel) {
            $(songPartPanel).songPart({
              'key': function key() {
                return getOption(self, 'key');
              },
              'songScale': function songScale() {
                return getOption(self, 'scale');
              },
              'songPartName': settings.songPartName,
              'songPartModulationInfo': settings.songPartModulationInfo,
              'songLinesContainer': settings.songLinesContainer,
              'songLineTemplate': settings.songLineTemplate,
              'songLineModulationInfo': settings.songLineModulationInfo,
              'chordsLine': settings.chordsLine,
              'lyricsContentLine': settings.lyricsContentLine,
              'lyricsDisplayLine': settings.lyricsDisplayLine,
              'fontSize': settings.fontSize,
              'fontFamily': settings.fontFamily,
              'lineHeight': settings.lineHeight,
              'cursorWidth': settings.cursorWidth,
              'songModulation': function songModulation() {
                return getOption(self, 'modulation');
              },
              'sequenceModulation': 0
            });
          }
        });
        $(self).find(settings.keySelector).on('change', function () {
          var key = $(this).val();
          setOption(self, 'key', key);
          $(self).find('.songpart-item').each(function () {
            $(this).songPart('update');
          });
        });
        $(self).data('songItem-options', settings);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setvalue':
          return $(this).each(function () {
            setValue(this, option);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songLine.js":
/*!*********************************************!*\
  !*** ./resources/js/songViewer/songLine.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function ($) {
  var defaults = {
    'key': 'C',
    'scale': 'major',
    'songScale': 'major',
    'songModulation': 0,
    'songPartModulation': 0,
    'sequenceModulation': 0,
    'modulation': 0,
    'songLineTemplate': '',
    'songLinesContainer': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': ''
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songLine-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('songLine-options');
    options[key] = value;
    $(object).data('songLine-options', options);
  }

  function setValue(obj, songLine) {
    $(obj).find(getOption(obj, 'lyricsContentLine')).lyricsLine({
      'editable': false,
      'value': songLine[1],
      'fontSize': getOption(obj, 'fontSize'),
      'fontFamily': getOption(obj, 'fontFamily')
    });
    $(obj).find(getOption(obj, 'chordsLine')).chordsLine(_defineProperty({
      'editable': false,
      'key': getOption(obj, 'key'),
      'scale': getOption(obj, 'songPartScale'),
      'songPartScale': getOption(obj, 'songPartScale'),
      'modulationInfo': getOption(obj, 'songLineModulationInfo'),
      'value': songLine[0],
      'fontSize': getOption(obj, 'fontSize'),
      'fontFamily': getOption(obj, 'fontFamily'),
      'height': getOption(obj, 'lineHeight'),
      'cursorWidth': getOption(obj, 'cursorWidth'),
      'songModulation': getOption(obj, 'songModulation'),
      'songPartModulation': getOption(obj, 'songPartModulation'),
      'sequenceModulation': getOption(obj, 'sequenceModulation'),
      'modulation': function modulation() {
        return getOption(obj, 'modulation');
      }
    }, "editable", false));
  }

  $.fn.songLine = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('songLine-options', settings);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setvalue':
          if (!Array.isArray(option)) return this;
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'option':
          if (typeof value == 'string') {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'update':
          return $(this).each(function () {
            $(this).find('.chords').chordsLine('updatechords').chordsLine('update');
          });

        case 'updatemodulation':
          return $(this).each(function () {
            $(this).find('.chords').chordsLine('update');
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songPart.js":
/*!*********************************************!*\
  !*** ./resources/js/songViewer/songPart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'key': 'C',
    'scale': 'major',
    'songScale': 'major',
    'songModulation': 0,
    'sequenceModulation': 0,
    'modulation': 0,
    'songPartName': '',
    'songPartModulationInfo': '',
    'songLineTemplate': '',
    'songLinesContainer': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': '',
    'fontSize': '',
    'fontFamily': '',
    'lineHeight': '',
    'cursorWidth': ''
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songPart-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('songPart-options');
    options[key] = value;
    $(object).data('songPart-options', options);
  }
  /**
   * Fill song part
   * @param {object} obj
   * @param {array} songPart collection of song parts
   */


  function setValue(obj, songPart) {
    if (_typeof(songPart) != 'object') {
      console.error('Invalid song part object supplied');
    }

    if (songPart.hasOwnProperty('name')) {
      $(obj).find(getOption(obj, 'songPartName')).html(songPart.name);
    }

    var songLinesContainer = $(obj).find(getOption(obj, 'songLinesContainer'));
    songLinesContainer.dynamicPanel('removeAll'); // Get chords and lyrics

    var strChords = songPart.chords.content;
    var strLyricsContent = songPart.lyrics.content || '';
    var strLyricsDisplay = songPart.lyrics.display || '';
    var arrChords = strChords.split('{newline}');
    var arrLyricsContent = strLyricsContent.split('{newline}');
    var arrLyricsDisplay = strLyricsDisplay.split('{newline}');
    setOption(obj, 'modulation', songPart.referenceKey);
    setOption(obj, 'scale', songPart.scale);

    if (arrChords.length == arrLyricsContent.length && arrChords.length == arrLyricsDisplay.length) {
      for (var i = 0; i < arrChords.length; i++) {
        var songLinePanel = songLinesContainer.dynamicPanel('insert');
        songLinePanel.songLine('setValue', [arrChords[i], arrLyricsContent[i], arrLyricsDisplay[i]]);
      }
    }

    updateModulationInfo(obj);
  }
  /**
   * Get the modulation value from the song, sequence and the song part
   * @param {object} obj
   */


  function getModulations(obj) {
    // Get modulation value
    var songModulation = getOption(obj, 'songModulation');
    songModulation = typeof songModulation == 'function' ? songModulation() : songModulation || 0;
    var sequenceModulation = getOption(obj, 'sequenceModulation');
    sequenceModulation = typeof sequenceModulation == 'function' ? sequenceModulation() : sequenceModulation || 0;
    var modulation = getOption(obj, 'modulation');
    modulation = typeof modulation == 'function' ? modulation() : modulation || 0;
    return [modulation * 1, songModulation * 1, sequenceModulation * 1];
  }
  /**
   * Update the modulation information of this song part
   * @param {object} obj
   */


  function updateModulationInfo(obj) {
    // Get the main scale of the song
    var songScale = getOption(obj, 'songScale');
    songScale = typeof songScale == 'function' ? songScale() : songScale; // Get the current scale of this song part

    var scale = getOption(obj, 'scale');
    scale = typeof scale == 'function' ? scale() : scale; // Get total modulation for this song part

    var modulation = getModulations(obj); // Set modulation info display

    if (modulation[0] + modulation[2] == 0 && songScale == scale) {
      $(obj).find(getOption(obj, 'songPartModulationInfo')).hide();
    } else {
      // Get main key
      var mainKey = getOption(obj, 'key');
      mainKey = typeof mainKey == 'function' ? mainKey() : mainKey;
      var display = window.ChordProcessor.processChord('no/1/M//', mainKey, scale, modulation[0] + modulation[1] + modulation[2]);
      $(obj).find(getOption(obj, 'songPartModulationInfo')).show().children('span').html('Key of ' + display + (scale != 'major' ? ' ' + scale : ''));
    }
  }

  function update(obj) {
    $(obj).find('.songline-item').each(function () {
      $(this).songLine('update');
    });
    updateModulationInfo(obj);
  }

  $.fn.songPart = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).find(settings.songLinesContainer).dynamicPanel({
          'key': 'songLine',
          'panelTemplate': settings.songLineTemplate,
          'isDraggable': false,
          'onInsert': function onInsert(event, panel) {
            panel.songLine({
              'key': settings.key,
              'scale': settings.scale,
              'songScale': settings.songScale,
              'songPartScale': function songPartScale() {
                return getOption(self, 'scale');
              },
              'songLineModulationInfo': settings.songLineModulationInfo,
              'chordsLine': settings.chordsLine,
              'lyricsContentLine': settings.lyricsContentLine,
              'lyricsDisplayLine': settings.lyricsDisplayLine,
              'fontSize': settings.fontSize,
              'fontFamily': settings.fontFamily,
              'lineHeight': settings.lineHeight,
              'cursorWidth': settings.cursorWidth,
              'songModulation': settings.songModulation,
              'songPartModulation': function songPartModulation() {
                return getOption(self, 'modulation');
              },
              'sequenceModulation': function sequenceModulation() {
                return getOption(self, 'sequenceModulation');
              }
            });
          }
        });
        $(self).data('songPart-options', settings);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setvalue':
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'option':
          if (typeof value == 'string') {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'update':
          return $(this).each(function () {
            update(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songsContainer.js":
/*!***************************************************!*\
  !*** ./resources/js/songViewer/songsContainer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'keySelector': '',
    'songItemTemplate': '',
    'songPartTemplate': '',
    'songLineTemplate': '',
    'songTitlePanel': '',
    'songArtistPanel': '',
    'songPartsContainer': '',
    'songPartName': '',
    'songPartModulationInfo': '',
    'songLinesContainer': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': '',
    'fontSize': '',
    'fontFamily': '',
    'isDraggable': false,
    'mode': 'performance',
    'nextSongControl': '',
    'previousSongControl': ''
  };
  var songValues = [];
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songsContainer-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }

  function setCurrent(obj, songId) {
    // Find selected song
    var selectedSong = $('.song-item[data-id="' + songId + '"]'); // Get control buttons

    var nextSongControl = $(getOption(obj, 'nextSongControl'));
    var previousSongControl = $(getOption(obj, 'previousSongControl'));
    if (nextSongControl.length > 0) nextSongControl.hide();
    if (previousSongControl.length > 0) previousSongControl.hide();
    if (selectedSong.length <= 0) return; // Remove current

    $('.song-item.current').removeClass('current');
    selectedSong.addClass('current'); // Get next song

    var nextSong = selectedSong.next('.song-item');

    if (nextSong.length <= 0 && selectedSong.siblings('.song-item').length > 1) {
      nextSong = selectedSong.prevAll('.song-item').first();
    }

    if (nextSong.length > 0) {
      setSongControl(nextSongControl, nextSong.attr('data-id'));
    } // Get previous song


    var prevSong = selectedSong.prev('.song-item');

    if (prevSong.length <= 0 && selectedSong.siblings('.song-item').length > 1) {
      prevSong = selectedSong.nextAll('.song-item').last();
    }

    if (prevSong.length > 0) {
      setSongControl(previousSongControl, prevSong.attr('data-id'));
    }

    $(document).scrollTop(0);
  }

  function setSongControl(control, songId) {
    var songDetails = songValues.find(function (o) {
      return o.id == songId;
    });

    if (songDetails != undefined) {
      control.show();
      control.find('.trigger').attr('data-song-id', songDetails.id);
      control.find('.song-title').html(songDetails.title);
      control.find('.song-artist').html(songDetails.artist);
    } else {
      control.hide();
    }
  }

  function setValues(obj, songs) {
    var first = '';
    $(obj).dynamicPanel('removeAll');
    songs.forEach(function (song) {
      var panel = $(obj).dynamicPanel('insert', null, song.id);
      panel.songItem('setValue', song);
      songValues.push({
        'id': song.id,
        'title': song.title,
        'artist': song.hasOwnProperty('details') && song.details.hasOwnProperty('artist') ? song.details.artist : ''
      });
      if (first == '') first = song.id;
    });
    setCurrent(obj, first);
  }

  $.fn.songsContainer = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command); // Initialize dynamicpanel

        $(self).dynamicPanel({
          'key': 'song',
          'panelTemplate': settings.songItemTemplate,
          'isDraggable': settings.isDraggable,
          'onInsert': function onInsert(event, panel) {
            // Initialize song panels
            panel.songItem({
              'keySelector': settings.keySelector,
              'songTitlePanel': settings.songTitlePanel,
              'songArtistPanel': settings.songArtistPanel,
              'songPartsContainer': settings.songPartsContainer,
              'songPartTemplate': settings.songPartTemplate,
              'songPartName': settings.songPartName,
              'songPartModulationInfo': settings.songPartModulationInfo,
              'songLinesContainer': settings.songLinesContainer,
              'songLineTemplate': settings.songLineTemplate,
              'songLineModulationInfo': settings.songLineModulationInfo,
              'chordsLine': settings.chordsLine,
              'lyricsContentLine': settings.lyricsContentLine,
              'lyricsDisplayLine': settings.lyricsDisplayLine,
              'fontSize': settings.fontSize,
              'fontFamily': settings.fontFamily,
              'lineHeight': settings.lineHeight,
              'cursorWidth': settings.cursorWidth
            });
          }
        }); // Set keyboard

        $(document).on('keyup', function (event) {
          if (event.which == 37 && $(settings.previousSongControl).is(':visible')) {
            $(settings.previousSongControl).find('.trigger').trigger('click');
          } else if (event.which == 39 && $(settings.nextSongControl).is(':visible')) {
            $(settings.nextSongControl).find('.trigger').trigger('click');
          }
        }); // Set next/prev song actions

        $(document).on('click', [settings.nextSongControl + ' .trigger', settings.previousSongControl + ' .trigger'].join(','), function () {
          var songId = $(this).attr('data-song-id');
          if (songId == '' || songId == undefined) return;
          setCurrent(self, songId);
        }); // Scrolling event

        var timeout;
        $(document).on('scroll', function () {
          var songDetails = $(self).find('.song-item.current .song-details');

          if (songDetails.length > 0 && !songDetails.hasClass('scrolling')) {
            songDetails.addClass('scrolling');
          }

          clearTimeout(timeout);
          timeout = setTimeout(function () {
            if (songDetails.hasClass('scrolling')) songDetails.removeClass('scrolling');
          }, 250);
        });
        $(self).data('songsContainer-options', settings);
        $(self).addClass(settings.mode);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setvalues':
          return $(this).each(function () {
            setValues(this, option);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songviewer.js":
/*!***********************************************!*\
  !*** ./resources/js/songViewer/songviewer.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
window.musicReference = __webpack_require__(/*! ../utilities/_musicReference.json */ "./resources/js/utilities/_musicReference.json");

__webpack_require__(/*! ../common/dynamicPanel */ "./resources/js/common/dynamicPanel.js");

__webpack_require__(/*! ./songsContainer */ "./resources/js/songViewer/songsContainer.js");

__webpack_require__(/*! ./songItem */ "./resources/js/songViewer/songItem.js");

__webpack_require__(/*! ./songPart */ "./resources/js/songViewer/songPart.js");

__webpack_require__(/*! ./songLine */ "./resources/js/songViewer/songLine.js");

__webpack_require__(/*! ../utilities/chordProcessor */ "./resources/js/utilities/chordProcessor.js");

__webpack_require__(/*! ../utilities/lyricsLine */ "./resources/js/utilities/lyricsLine.js");

__webpack_require__(/*! ../utilities/chordsLine */ "./resources/js/utilities/chordsLine.js");

__webpack_require__(/*! ../utilities/chordMarker */ "./resources/js/utilities/chordMarker.js");


var songMainKey = '.songkey';
var songsContainer = '.songs-container';
var songItemTemplate = '.song-item-template';
var songTitlePanel = '.song-name';
var songArtistPanel = '.song-artist';
var songPartsContainer = '.songparts-container';
var songLinesContainer = '.songlines-container';
var songPartTemplate = '.songpart-template';
var songLineTemplate = '.songline-template';
var songPartName = '.songpart-name';
var songPartModulationInfo = '.songpart-modulation-info';
var songLineModulationInfo = '.songline-modulation-info';
var chordsLine = '.chords';
var lyricsContentLine = '.lyrics-content';
var lyricsDisplayLine = '.lyrics-display';
var nextSongControl = '.next-song-container';
var previousSongControl = '.prev-song-container';
var monospaceFontSize = '26px';
var monospaceFontFamily = '"Consolas", "Courier New", Courier, monospace';
var monospaceWidth = 0;
var monospaceHeight = 0;
$(function () {
  getPageDimensions();
  $(songsContainer).songsContainer({
    'keySelector': songMainKey,
    'key': 'C',
    'scale': 'major',
    'songItemTemplate': songItemTemplate,
    'songPartTemplate': songPartTemplate,
    'songLineTemplate': songLineTemplate,
    'songTitlePanel': songTitlePanel,
    'songArtistPanel': songArtistPanel,
    'songPartsContainer': songPartsContainer,
    'songPartName': songPartName,
    'songPartModulationInfo': songPartModulationInfo,
    'songLinesContainer': songLinesContainer,
    'songLineModulationInfo': songLineModulationInfo,
    'chordsLine': chordsLine,
    'lyricsContentLine': lyricsContentLine,
    'lyricsDisplayLine': lyricsDisplayLine,
    'lineHeight': monospaceHeight,
    'cursorWidth': monospaceWidth,
    'fontSize': monospaceFontSize,
    'fontFamily': monospaceFontFamily,
    'mode': 'performance',
    'nextSongControl': nextSongControl,
    'previousSongControl': previousSongControl
  });
  getSongs(['0e987bb3-5e32-41c7-b0a8-4e5b4866420b', '611c3248-7326-448b-b66c-5199f9009dc8']);
});

function getSongs(songIds) {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  $.ajax({
    'url': '/songs',
    'method': 'post',
    'contentType': 'application/json',
    'dataType': 'json',
    'data': JSON.stringify({
      'songIds': songIds
    })
  }).done(function (response) {
    console.log(response);

    if ('error' in response) {
      return;
    }

    $(songsContainer).songsContainer('setValues', response);
  }).fail(function (response) {
    console.error(response);
  }).always(function () {});
}

function getPageDimensions() {
  // Get width of a single monospace
  var unique = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
  var spanTest = $('<span>').addClass(unique).css('font-family', monospaceFontFamily).css('font-size', monospaceFontSize).css('position', 'absolute').html('&nbsp;');
  $('body').append(spanTest);
  monospaceWidth = spanTest.width();
  monospaceHeight = spanTest.height();
  $('.' + unique).remove();
}

/***/ }),

/***/ "./resources/js/utilities/_musicReference.json":
/*!*****************************************************!*\
  !*** ./resources/js/utilities/_musicReference.json ***!
  \*****************************************************/
/*! exports provided: measures, notes, scale, variations, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"measures\":[{\"name\":\"whole\",\"displayName\":\"|\",\"default\":true},{\"name\":\"half\",\"displayName\":\"'\"},{\"name\":\"quarter\",\"displayName\":\"-\"},{\"name\":\"eightth\",\"displayName\":\"·\"},{\"name\":\"no\",\"displayName\":\"\"}],\"notes\":[{\"name\":\"C\",\"displayName\":\"C\"},{\"name\":\"C#\",\"displayName\":\"C♯\",\"altName\":\"D♭\"},{\"name\":\"D\",\"displayName\":\"D\"},{\"name\":\"D#\",\"displayName\":\"D♯\",\"altName\":\"E♭\"},{\"name\":\"E\",\"displayName\":\"E\"},{\"name\":\"F\",\"displayName\":\"F\"},{\"name\":\"F#\",\"displayName\":\"F♯\",\"altName\":\"G♭\"},{\"name\":\"G\",\"displayName\":\"G\"},{\"name\":\"G#\",\"displayName\":\"G♯\",\"altName\":\"A♭\"},{\"name\":\"A\",\"displayName\":\"A\"},{\"name\":\"A#\",\"displayName\":\"A♯\",\"altName\":\"B♭\"},{\"name\":\"B\",\"displayName\":\"B\"}],\"scale\":[{\"name\":\"major\",\"pattern\":[{\"name\":\"1\",\"noteIndex\":0},{\"name\":\"2\",\"noteIndex\":2},{\"name\":\"3\",\"noteIndex\":4},{\"name\":\"4\",\"noteIndex\":5},{\"name\":\"5\",\"noteIndex\":7},{\"name\":\"6\",\"noteIndex\":9},{\"name\":\"7\",\"noteIndex\":11},{\"name\":\"1s\",\"noteIndex\":1},{\"name\":\"2s\",\"noteIndex\":3},{\"name\":\"4s\",\"noteIndex\":6},{\"name\":\"5s\",\"noteIndex\":8},{\"name\":\"6s\",\"noteIndex\":10}],\"family\":[{\"name\":\"1\",\"variationIndex\":0},{\"name\":\"2\",\"variationIndex\":1},{\"name\":\"3\",\"variationIndex\":1},{\"name\":\"4\",\"variationIndex\":0},{\"name\":\"5\",\"variationIndex\":0},{\"name\":\"6\",\"variationIndex\":1},{\"name\":\"7\",\"variationIndex\":2}]}],\"variations\":[{\"name\":\"M\",\"display\":\"M\",\"html\":\"\",\"fullName\":\"Major\",\"precedence\":0,\"order\":0,\"default\":true},{\"name\":\"m\",\"display\":\"m\",\"html\":\"m\",\"fullName\":\"Minor\",\"precedence\":0,\"order\":0},{\"name\":\"dim\",\"display\":\"dim\",\"html\":\"<sup>dim</sup>\",\"fullName\":\"Diminished\",\"precedence\":0,\"order\":1},{\"name\":\"aug\",\"display\":\"aug\",\"html\":\"<sup>aug</sup>\",\"fullName\":\"Augmented\",\"precedence\":0,\"order\":1},{\"name\":\"dom7\",\"display\":\"7\",\"html\":\"<sup>7</sup>\",\"fullName\":\"Dominant seventh\",\"precedence\":1,\"order\":2},{\"name\":\"maj7\",\"display\":\"M7\",\"html\":\"<sup>M7</sup>\",\"fullName\":\"Major seventh\",\"precedence\":1,\"order\":2},{\"name\":\"5\",\"display\":\"5\",\"html\":\"<sup>5</sup>\",\"fullName\":\"Fifth/Power chord\",\"precedence\":1},{\"name\":\"flat5\",\"display\":\"♭5\",\"html\":\"<sup>♭5</sup>\",\"fullName\":\"Flat fifth\",\"precedence\":1},{\"name\":\"6\",\"display\":\"6\",\"html\":\"<sup>6</sup>\",\"fullName\":\"Sixth\",\"precedence\":1},{\"name\":\"9\",\"display\":\"9\",\"html\":\"<sup>9</sup>\",\"fullName\":\"Ninth\",\"precedence\":1},{\"name\":\"maj9\",\"display\":\"M9\",\"html\":\"<sup>M9</sup>\",\"fullName\":\"Major ninth\",\"precedence\":1},{\"name\":\"11\",\"display\":\"11\",\"html\":\"<sup>11</sup>\",\"fullName\":\"Eleventh\",\"precedence\":1},{\"name\":\"13\",\"display\":\"13\",\"html\":\"<sup>13</sup>\",\"fullName\":\"Thirteenth\",\"precedence\":1},{\"name\":\"sus2\",\"display\":\"sus2\",\"html\":\"<sup>sus2</sup>\",\"fullName\":\"Suspended second\",\"precedence\":2},{\"name\":\"sus4\",\"display\":\"sus4\",\"html\":\"<sup>sus4</sup>\",\"fullName\":\"Suspended fourth\",\"precedence\":2},{\"name\":\"add6\",\"display\":\"add6\",\"html\":\"<sup>add6</sup>\",\"fullName\":\"Add sixth\",\"precedence\":2},{\"name\":\"add9\",\"display\":\"add9\",\"html\":\"<sup>add9</sup>\",\"fullName\":\"Add ninth\",\"precedence\":2}]}");

/***/ }),

/***/ "./resources/js/utilities/chordMarker.js":
/*!***********************************************!*\
  !*** ./resources/js/utilities/chordMarker.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'dragSnap': 0,
    'leftOffset': 0,
    'scale': '',
    'mainKey': 'C',
    'mainScale': 'Major',
    'parent': undefined,
    'selectOnCreate': true,
    'remainSelected': false,
    'songModulation': 0,
    'songPartModulation': 0,
    'sequenceModulation': 0,
    'songLineModulation': 0,
    'modulation': 0,
    'value': null,
    'spacing': 'css',
    'editable': true,
    onDragStop: function onDragStop() {}
  };
  var ChordProcessor = window.ChordProcessor;

  function getOption(obj, name) {
    var option = $(obj).data('chordMarker-options');

    if (option == undefined || !option.hasOwnProperty(name)) {
      return undefined;
    }

    return option[name];
  }

  function setOption(obj, name, value) {
    var option = $(obj).data('chordMarker-options');

    if (option == undefined || !option.hasOwnProperty(name)) {
      return;
    }

    option[name] = value;
    $(obj).data('chordMarker-options', option);
  }
  /**
   * Update each chord
   * @param {object} obj
   */


  function updateChord(obj) {
    if ($(obj).attr('data-value') == '') {
      $(obj).html('&nbsp;');
      return;
    }

    var mainRoot = getOption(obj, 'key');
    var scale = getOption(obj, 'scale');
    mainRoot = typeof mainRoot == 'function' ? mainRoot() : mainRoot;
    scale = typeof scale == 'function' ? scale() : scale;
    var modulationAmount = getModulationAmount(obj);
    var disp = ChordProcessor.processChord($(obj).attr('data-value'), mainRoot, scale, modulationAmount);
    $(obj).html(disp);
  }
  /**
   * Set value of chord
   * @param {object} obj
   * @param {string} value Value of chord
   */


  function setValue(obj, value) {
    $(obj).attr('data-value', value);
    updateChord(obj);

    if (!getOption(obj, 'remainSelected') && value != '') {
      unselectMarker(obj);
    }
  }
  /**
   * Modulate the chord
   * @param {object} obj
   * @param {number} amount Amount of modulation
   */


  function modulate(obj, amount) {
    setOption(obj, 'modulation', amount);
  }
  /**
   * Get total modulation (song + song part + song line) of the chord
   * @param {object} obj
   */


  function getModulationAmount(obj) {
    var _songModulation = getOption(obj, 'songModulation');

    var _songPartModulation = getOption(obj, 'songPartModulation');

    var _sequenceModulation = getOption(obj, 'sequenceModulation');

    var _songLineModulation = getOption(obj, 'songLineModulation');

    var songModulation = typeof _songModulation == 'function' ? _songModulation() : _songModulation;
    var songPartModulation = typeof _songPartModulation == 'function' ? _songPartModulation() : _songPartModulation;
    var sequenceModulation = typeof _sequenceModulation == 'function' ? _sequenceModulation() : _sequenceModulation;
    var songLineModulation = typeof _songLineModulation == 'function' ? _songLineModulation() : _songLineModulation;
    var modulation = getOption(obj, 'modulation');
    return modulation * 1 + songModulation * 1 + songPartModulation * 1 + sequenceModulation * 1 + songLineModulation * 1;
  }
  /**
   * Toggle this chord marker as selected
   * @param {object} obj
   * @param {object} marker Target chord marker
   */


  function selectMarker(obj) {
    var chordBuilder = getOption(obj, 'chordBuilder');

    if ($(obj).hasClass('selected')) {
      unselectMarker(obj, chordBuilder);
      if (chordBuilder == '') return;
      $(chordBuilder).chordBuilder('setTarget', null);
    } else {
      unselectAllMarkers();
      $(obj).addClass('selected');
      if (chordBuilder == '') return;
      $(chordBuilder).chordBuilder('setTarget', obj);
    }
  }
  /**
   * Unselect this chord marker
   * @param {object} obj
   */


  function unselectMarker(obj) {
    var chordBuilder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    if ($(obj).length <= 0) return;
    $(obj).removeClass('selected'); // Remove if empty on unselect

    if ($(obj).attr('data-value') == '') {
      $(obj).remove();
    }

    if (chordBuilder == undefined) {
      chordBuilder = getOption(obj, 'chordBuilder');
    }

    if (chordBuilder == '') return;
    $(chordBuilder).chordBuilder('setTarget', null);
    setOption(obj, 'remainSelected', false);
  }
  /**
   * Unselect all selected chords markers
   */


  function unselectAllMarkers() {
    $('.chord.selected').each(function () {
      unselectMarker(this);
      remainSelected = true;
    });
  }

  $.fn.chordMarker = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var settings = $.extend({}, defaults, command);
        var self = this; // Save settings

        $(self).data('chordMarker-options', settings); // Set up attributes

        $(self).addClass('chord').html('&nbsp;'); // Set up draggable

        $(self).draggable({
          axis: 'x',
          addClasses: false,
          containment: 'parent',
          grid: [settings.dragSnap, 0],
          disabled: !settings.editable,
          create: function create(ev, ui) {
            $(self).removeAttr('style').css('left', settings.leftOffset).css('position', 'absolute').attr('data-position', Math.round(settings.leftOffset / settings.dragSnap));
          },
          stop: function stop(ev, ui) {
            var diff = $(self).position().left;
            var snapPos = Math.round(diff / settings.dragSnap);
            $(self).removeAttr('style').css('left', snapPos * settings.dragSnap).attr('data-position', snapPos);
            $(self).trigger('chordMarker:dragstop', [$(self)]);
          }
        });

        if (settings.editable) {
          // Events
          $(self).on('click', function (ev) {
            selectMarker(self);
            settings.remainSelected = true;
          }); // Set-up context menu

          $(self).on('contextmenu', function (ev) {
            ev.preventDefault();
            $(settings.contextMenu).contextMenu('toggle', this);
          });

          if (settings.chordBuilder != '') {
            // Set-up double click
            $(self).on('dblclick', function () {
              $(settings.chordBuilder).chordBuilder('show', this);
            }); // Remove selection when clicked outside chord markers

            $(document).on('click', function (ev) {
              if ($(ev.target).closest('.chords').length <= 0 && $(ev.target).closest(settings.contextMenu).length <= 0 && $(ev.target).closest(settings.chordBuilder).length <= 0) {
                unselectMarker(self);
              }
            });
          } // Custom events


          $(self).on('chordMarker:dragstop', settings.onDragStop);
        } // Append marker to parent


        $(settings.parent).append($(self)); // Run on init

        if (settings.value == null) {
          var chordValue = $(settings.chordBuilder).chordBuilder('getChord', self);

          if (settings.selectOnCreate) {
            unselectAllMarkers();
            selectMarker(self);
          }

          setValue(self, chordValue.value);
        } else {
          setValue(self, settings.value);
          settings.value = null;
        }
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'update':
          return $(this).each(function () {
            updateChord(this);
          });

        case 'chordvalue':
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'select':
          return $(this).each(function () {
            selectMarker(this);
          });

        case 'unselect':
          return $(this).each(function () {
            unselectMarker(this);
          });

        case 'unselectall':
          unselectAllMarkers();
          return this;

        case 'modulate':
          if (typeof option != 'number') return this;
          return $(this).each(function () {
            modulate(this, option);
          });

        case 'option':
          if (typeof option != 'string') return null;

          if (typeof value == 'string') {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'getmodulationamount':
          return getModulationAmount(this);
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/utilities/chordProcessor.js":
/*!**************************************************!*\
  !*** ./resources/js/utilities/chordProcessor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.ChordProcessor = {
  musicReference: window.musicReference || {},
  processChord: function processChord(value, key, scale) {
    var modulation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (typeof value == 'string' && typeof scale == 'string' && typeof key == 'string') {
      var musicReference = ChordProcessor.musicReference;
      var rootKey = key;
      var rootScale = scale;
      var parts = value.split('/');
      var measure = parts[0];
      var root = parts[1];
      var variation = parts[2];
      var variation2 = parts[3];
      var bass = parts[4];
      if (measure == '' || root == '' || variation == '') return ''; // Get measure

      var measureDisplay = musicReference.measures.find(function (o) {
        return o.name == measure;
      }).displayName; // IF custom

      if (root == 'custom') {
        return [measureDisplay, variation].join('');
      } //** Get root and bass note **//
      // Get scale


      var scaleReference = musicReference.scale.find(function (o) {
        return o.name == rootScale;
      }) || musicReference.scale[0]; // Get position of root note

      modulation = modulation >= 0 ? modulation : 12 + modulation % 12;
      var keyNoteIndex = musicReference.notes.indexOf(musicReference.notes.find(function (note) {
        return note.name == rootKey;
      })) + modulation;
      var rootNoteIndex = (scaleReference.pattern.find(function (o) {
        return o.name == root;
      }).noteIndex + keyNoteIndex) % musicReference.notes.length;
      var noteRef = musicReference.notes[rootNoteIndex];
      var rootDisplay = noteRef.displayName;
      var bassDisplay = '';

      if (bass != '') {
        var bassNoteIndex = (scaleReference.pattern.find(function (o) {
          return o.name == bass;
        }).noteIndex + keyNoteIndex) % musicReference.notes.length;
        var bassNoteRef = musicReference.notes[bassNoteIndex];
        bassDisplay = "<sub>/" + bassNoteRef.displayName + '</sub>';
      } //** Get Variations */


      var variationDisplay = variation != '' ? musicReference.variations.find(function (o) {
        return o.name == variation;
      }).html : '';
      var variation2Display = variation2 != '' ? musicReference.variations.find(function (o) {
        return o.name == variation2;
      }).html : '';
      return [measureDisplay, rootDisplay, variationDisplay, variation2Display, bassDisplay].join('');
    }
  }
};

/***/ }),

/***/ "./resources/js/utilities/chordsLine.js":
/*!**********************************************!*\
  !*** ./resources/js/utilities/chordsLine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'spacing': 'css',
    'height': 10,
    'cursorWidth': 10,
    'contextMenu': '.chord-context-menu',
    'chordBuilder': '',
    'mainScale': '',
    'songModulation': 0,
    'songPartScale': '',
    'scale': '',
    'key': '',
    'songPartModulation': 0,
    'modulation': 0,
    'modulationInfo': '.song-line-modulation-info',
    'value': '',
    'fontSize': '',
    'fontFamily': '',
    'editable': true
  };
  /**
   * Get option from DOM data
   * @param {object} obj
   * @param {string} name option name/key
   */

  function getOption(obj, name) {
    var option = $(obj).data('chordsLine-options');

    if (option == undefined || !option.hasOwnProperty(name)) {
      return undefined;
    }

    return option[name];
  }
  /**
   * Set option value
   * @param {Object} obj
   * @param {String} option
   * @param {any} value
   */


  function setOption(obj, option, value) {
    var options = $(obj).data('chordsLine-options');
    options[option] = value;
    $(obj).data('chordsLine-options', options);
  }
  /**
   * Sort chord markers within the parent chord line
   * @param {Jquery Object} chordMarker
   */


  function sortChordMarkers(chordMarker) {
    var parent;
    var markers;

    if ($(chordMarker).hasClass('chord')) {
      parent = $(chordMarker).parent();
      markers = parent.children('.chord');
    } else if ($(chordMarker).hasClass('chords')) {
      markers = $(chordMarker).children('.chord');
      parent = chordMarker;
    } // Sort chords line


    markers.sort(function (elem1, elem2) {
      return $(elem1).offset().left > $(elem2).offset().left ? 1 : -1;
    }).appendTo(parent);
  }
  /**
   * Instantiate a new chord marker inside obj
   * @param {object} obj
   * @param {number} width the snap width of the marker
   * @param {number} position the left offset of the marker from the left edge of the document
   * @param {string} scale scale reference of the chord
   * @param {number} modulation modulation of the chord
   * @param {string} value chord value with parts delimited by /
   */


  function insertChordMarker(obj, width, position, scale) {
    var modulation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var value = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    $('<span>').chordMarker({
      'spacing': getOption(obj, 'spacing'),
      'chordBuilder': getOption(obj, 'chordBuilder'),
      'contextMenu': getOption(obj, 'contextMenu'),
      'dragSnap': width,
      'leftOffset': position,
      'key': getOption(obj, 'key'),
      'mainScale': getOption(obj, 'mainScale'),
      'songPartScale': getOption(obj, 'songPartScale'),
      'songLineScale': function songLineScale() {
        getOption(obj, 'scale');
      },
      'scale': scale,
      'parent': obj,
      'songModulation': getOption(obj, 'songModulation'),
      'songLineModulation': function songLineModulation() {
        return getOption(obj, 'modulation');
      },
      'songPartModulation': getOption(obj, 'songPartModulation'),
      'sequenceModulation': getOption(obj, 'sequenceModulation'),
      'modulation': modulation,
      'value': value,
      'onDragStop': function onDragStop() {
        sortChordMarkers(obj);
      },
      'editable': getOption(obj, 'editable')
    });
  }
  /**
   *
   * @param {object} obj
   * @param {string} values Chords values. String delimited by |
   */


  function setValue(obj, values) {
    $(obj).children('.chord').remove();
    var chords = values.split('|');

    if (chords.length < 1) {
      console.error('Error at chordsLine.setValue() => Invalid chords data');
      return;
    } // Set chord line details


    var details = chords.splice(0, 1)[0].split('/');

    if (details.length < 2) {
      console.error('Error at chordsLine.setValue() => Invalid chords metadata');
      return;
    }

    var modulation = details[0] * 1;
    var scale = details[1];
    modulate(obj, modulation);
    changeScale(obj, scale);
    chords.forEach(function (chord) {
      // Get chord parts
      var chordPart = chord.split('/');
      if (chordPart.length != 8) return;
      var keyReference = chordPart[0] * 1;
      var scale = chordPart[1];
      var position = chordPart[2] * 1;
      var measure = chordPart[3];
      var root = chordPart[4];
      var variation = chordPart[5];
      var variation2 = chordPart[6];
      var bass = chordPart[7];
      insertChordMarker(obj, getOption(obj, 'cursorWidth'), position * getOption(obj, 'cursorWidth'), scale, keyReference, [measure, root, variation, variation2, bass].join('/'));
    });
  }
  /**
   * Get the value of chords in this chord line in array form
   * @param {object} obj
   */


  function getValue(obj) {
    var chords = []; // Get details

    var modulation = getOption(obj, 'modulation');
    var scale = getOption(obj, 'scale');
    modulation = typeof modulation == 'function' ? modulation() : modulation;
    scale = typeof scale == 'function' ? scale() : scale;
    chords.push([modulation, scale].join('/')); // Get chords in the line

    $(obj).find('.chord').each(function () {
      var modulation = $(this).chordMarker('option', 'modulation');
      var scale = $(this).chordMarker('option', 'scale');
      modulation = typeof modulation == 'function' ? modulation() : modulation;
      scale = typeof scale == 'function' ? scale() : scale;
      var position = $(this).attr('data-position');
      var value = $(this).attr('data-value');
      chords.push([modulation, scale, position, value].join('/'));
    });
    return chords;
  }
  /**
   * Modulate the song line
   * @param {object} obj
   * @param {number} amount Amount of modulation
   */


  function modulate(obj, amount) {
    $(obj).closest('.song-line').attr('data-modulation', amount);
    setOption(obj, 'modulation', amount);
    setModulationInfo(obj);
  }
  /**
   * Change the scale of the song line
   * @param {object} obj
   * @param {string} scale Name of the new scale
   */


  function changeScale(obj, scale) {
    $(obj).closest('.song-line').attr('data-scale', scale);
    setOption(obj, 'scale', scale);
    setModulationInfo(obj);
  }

  function updateChords(obj) {
    $(obj).find('.chord').each(function () {
      $(this).chordMarker('update');
    });
  }

  function setModulationInfo(obj) {
    // Get the song's modulation
    var songModulation = getOption(obj, 'songModulation');
    songModulation = typeof songModulation == 'function' ? songModulation() : songModulation; // Get the song part modulation

    var songPartModulation = getOption(obj, 'songPartModulation');
    songPartModulation = typeof songPartModulation == 'function' ? songPartModulation() : songPartModulation; // Get the sequence modulation

    var sequenceModulation = getOption(obj, 'sequenceModulation');
    sequenceModulation = typeof sequenceModulation == 'function' ? sequenceModulation() : sequenceModulation || 0; // Get this line's modulation

    var modulation = getOption(obj, 'modulation');
    modulation = typeof modulation == 'function' ? modulation() : modulation || 0; // Get the scale of the song part

    var songPartScale = getOption(obj, 'songPartScale');
    songPartScale = typeof songPartScale == 'function' ? songPartScale() : songPartScale; // Get this line's current scale

    var scale = getOption(obj, 'scale');
    scale = typeof scale == 'function' ? scale() : scale; // Get the song's main key

    var mainKey = getOption(obj, 'key');
    mainKey = typeof mainKey == 'function' ? mainKey() : mainKey; // Hide the modulation info if no changes to key and scale in relation with it's parent song part

    if (modulation == 0 && scale == songPartScale) {
      $(obj).siblings(getOption(obj, 'modulationInfo')).hide();
    } else {
      // Get the reference key given modulation and display
      var display = window.ChordProcessor.processChord('no/1/M//', mainKey, scale, modulation + songModulation * 1 + songPartModulation * 1 + sequenceModulation * 1);
      $(obj).siblings(getOption(obj, 'modulationInfo')).show().children('span').html('Key of ' + display + (scale != 'major' ? ' ' + scale : ''));
    }
  }

  $.fn.chordsLine = function (command, option, value) {
    if (_typeof(command) === 'object' || command == undefined) {
      return $(this).each(function () {
        var self = this; // Skip if this element is already processed

        if ($(self).hasClass('chordsLine-processed')) return true; // Set up settings

        var settings = $.extend({}, defaults, command); // Save settings to DOM

        $(self).data('chordsLine-options', settings); // Initialize chord cursor

        if ($(self).children('.chord-cursor').length > 0) {
          return false;
        }

        var cursor = $('<span>').addClass('chord-cursor').html('&nbsp;'); // Click event for cursor

        cursor.on('click', function () {
          // Get position of cursor
          var position = cursor.position().left;
          var parent = cursor.parent();
          insertChordMarker(self, settings.cursorWidth, position, typeof settings.scale == 'function' ? settings.scale() : settings.scale); // Sort chords line

          sortChordMarkers(parent[0]);
        }); // Add chord cursor to chords line

        $(self).append(cursor); // Mouseover event for chords line to make chord cursor follow the mouse cursor

        $(self).on('mouseover', function () {
          // When mouse is hovered to chord view, track mouse position
          $(self).on('mousemove', function (event) {
            if (!$(self).is(event.target)) return true; // Get new position based on mouse cursor position and offsets.

            var diff = event.offsetX; // Get remainder and remove from difference for snapping

            var remainder = diff % settings.cursorWidth;
            cursor.css('left', diff - remainder + 'px');
          }); // Unbind mousemove event
        }).on('mouseout', function () {
          $(self).off('mousemove');
        }); // Set chords line attributes

        $(self).css('height', settings.height).addClass('chordsLine-processed');
        changeScale(self, typeof settings.songPartScale == 'function' ? settings.songPartScale() : settings.songPartScale);

        if (settings.value != '') {
          setValue(self, settings.value);
        }

        if (settings.fontFamily != '') {
          $(self).css('font-family', settings.fontFamily);
        }

        if (settings.fontSize != '') {
          $(self).css('font-size', settings.fontSize);
        }
      });
    }

    if (typeof command == 'string') {
      switch (command.toLocaleLowerCase()) {
        case 'setvalue':
          if (typeof option != 'string') return this;
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'getvalue':
          return getValue(this);

        case 'setscale':
          return getValue(this);

        case 'modulate':
          if (typeof option != 'number') return; // NaN

          return $(this).each(function () {
            modulate(this, option);
          });

        case 'changescale':
          return $(this).each(function () {
            changeScale(this, option);
          });

        case 'updatechords':
          return $(this).each(function () {
            updateChords(this);
          });

        case 'update':
          return $(this).each(function () {
            setModulationInfo(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/utilities/lyricsLine.js":
/*!**********************************************!*\
  !*** ./resources/js/utilities/lyricsLine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'dataSource': undefined,
    'editable': true,
    'contextMenu': '',
    'spacerContextMenu': '',
    'value': '',
    'fontSize': '',
    'fontFamily': '',
    'cursorWidth': 10,
    'offset': 4
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('lyricsLine-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Add spacer next to this character
   * @param {object} obj
   * @param {number} width Width of the spacer
   */


  function addSpacer(obj, target, width) {
    if (width == undefined || width == '') width = 1;
    var i = width;
    var arr = [];

    while (--i) {
      arr[i] = '&nbsp;';
    }

    var sibPrevCount = $(target).prevAll('.character').length + 1;
    var spacer = $('<span>').addClass('spacer').attr('data-width', width).attr('data-position', sibPrevCount).html(arr.join('') + '-' + arr.join(''));
    spacer.on('contextmenu', function (ev) {
      ev.preventDefault();
      $(getOption(obj, 'spacerContextMenu')).contextMenu('show', this);
    });
    $(target).after(spacer);
  }
  /**
   * Remove temporary spacers
   */


  function cleanLine() {
    $('.lyrics .temp-spacer').remove();
  }
  /**
   * Get lyrics line value
   */


  function getValue(obj) {
    var lyrics = [];
    $(obj).children('span').each(function () {
      if ($(this).hasClass('character')) lyrics.push($(this).text());else if ($(this).hasClass('spacer')) {
        lyrics.push('{spacer-' + $(this).attr('data-width') + '}');
      }
    });
    return lyrics.join('');
  }
  /**
   *
   * @param {object} obj
   */


  function processLine(obj) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var settings = $(obj).data('lyricsLine-options');

    if (value != '') {
      settings.value = value;
    } // Get data


    var preDefSpacers = []; // Get predefined spacers

    if (settings.value.indexOf('{spacer-') >= 0) {
      var content = settings.value;
      var spacers = content.match(/\{spacer-[0-9]+\}/g);
      spacers.forEach(function (spacer) {
        // Get position and width of the spacer
        var position = content.indexOf(spacer);
        var width = spacer.match(/\d+/g)[0];
        preDefSpacers.push({
          'position': position,
          'width': width
        }); // Remove the spacer from the content

        content = content.replace(/\{spacer-[0-9]+\}/, '');
      });
      settings.value = content;
    }

    var data = '';

    if (settings.dataSource != undefined && $(settings.dataSource).hasClass('changed')) {
      data = $(settings.dataSource).val();
      $(settings.dataSource).removeClass('changed');
    } else {
      data = settings.value;
    }

    settings.value = '';
    $(obj).data('lyricsLine-options', settings);

    if (data == '') {
      return;
    }

    if (settings.editable || preDefSpacers.length > 0) {
      var charArr = data.split('');
      var formattedData = '';
      charArr.forEach(function (_char) {
        formattedData += '<span class="character">' + _char + '</span>';
      });
      $(obj).html(formattedData); // Set predefined spacers

      preDefSpacers.reverse().forEach(function (spacer) {
        addSpacer(obj, $(obj).children('.character')[spacer.position - 1], spacer.width);
      });
    } else {
      $(obj).html(data);
    } // Set event listener


    if (settings.editable) {
      $(obj).find('.character').on('mouseover', function () {
        $(this).css('border-right', '2.5px solid lightgray');
      }).on('mouseleave', function () {
        $(this).css('border-right', 'none');
      }).on('contextmenu', function (ev) {
        ev.preventDefault();
        $(this).css('border-right', 'none');
        $(settings.contextMenu).contextMenu('show', this);
      });
    }
  }

  $.fn.lyricsLine = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('lyricsLine-options', settings);
        processLine(self);

        if (settings.fontFamily != '') {
          $(self).css('font-family', settings.fontFamily);
        }

        if (settings.fontSize != '') {
          $(self).css('font-size', settings.fontSize);
        }

        if (settings.cursorWidth != NaN && settings.offset != NaN) {
          $(self).css('margin-left', settings.cursorWidth * settings.offset);
        }
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'addspacer':
          return $(this).each(function () {
            addSpacer(this, option, value);
          });

        case 'clean':
          return $(this).each(function () {
            cleanLine();
          });

        case 'setvalue':
          return $(this).each(function () {
            processLine(this, option);
          });

        case 'getvalue':
          return getValue(this);

        case 'processline':
          return $(this).each(function () {
            processLine(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ 2:
/*!*****************************************************!*\
  !*** multi ./resources/js/songViewer/songviewer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PrjFiles\Prj\eska\Source\eska\resources\js\songViewer\songviewer.js */"./resources/js/songViewer/songviewer.js");


/***/ })

/******/ });