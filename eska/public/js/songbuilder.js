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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./resources/js/songBuilder/_musicReference.json":
/*!*******************************************************!*\
  !*** ./resources/js/songBuilder/_musicReference.json ***!
  \*******************************************************/
/*! exports provided: measures, notes, scale, variations, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"measures\":[{\"name\":\"whole\",\"displayName\":\"|\",\"default\":true},{\"name\":\"half\",\"displayName\":\"'\"},{\"name\":\"quarter\",\"displayName\":\"-\"},{\"name\":\"eightth\",\"displayName\":\"·\"},{\"name\":\"no\",\"displayName\":\"\"}],\"notes\":[{\"name\":\"C\",\"displayName\":\"C\"},{\"name\":\"C#\",\"displayName\":\"C♯\",\"altName\":\"D♭\"},{\"name\":\"D\",\"displayName\":\"D\"},{\"name\":\"D#\",\"displayName\":\"D♯\",\"altName\":\"E♭\"},{\"name\":\"E\",\"displayName\":\"E\"},{\"name\":\"F\",\"displayName\":\"F\"},{\"name\":\"F#\",\"displayName\":\"F♯\",\"altName\":\"G♭\"},{\"name\":\"G\",\"displayName\":\"G\"},{\"name\":\"G#\",\"displayName\":\"G♯\",\"altName\":\"A♭\"},{\"name\":\"A\",\"displayName\":\"A\"},{\"name\":\"A#\",\"displayName\":\"A♯\",\"altName\":\"B♭\"},{\"name\":\"B\",\"displayName\":\"B\"}],\"scale\":[{\"name\":\"Major\",\"pattern\":[{\"name\":\"1\",\"noteIndex\":0},{\"name\":\"2\",\"noteIndex\":2},{\"name\":\"3\",\"noteIndex\":4},{\"name\":\"4\",\"noteIndex\":5},{\"name\":\"5\",\"noteIndex\":7},{\"name\":\"6\",\"noteIndex\":9},{\"name\":\"7\",\"noteIndex\":11},{\"name\":\"1s\",\"noteIndex\":1},{\"name\":\"2s\",\"noteIndex\":3},{\"name\":\"4s\",\"noteIndex\":6},{\"name\":\"5s\",\"noteIndex\":8},{\"name\":\"6s\",\"noteIndex\":10}],\"family\":[{\"name\":\"1\",\"variationIndex\":0},{\"name\":\"2\",\"variationIndex\":1},{\"name\":\"3\",\"variationIndex\":1},{\"name\":\"4\",\"variationIndex\":0},{\"name\":\"5\",\"variationIndex\":0},{\"name\":\"6\",\"variationIndex\":1},{\"name\":\"7\",\"variationIndex\":2}]}],\"variations\":[{\"name\":\"M\",\"display\":\"M\",\"html\":\"\",\"fullName\":\"Major\",\"precedence\":0,\"order\":0,\"default\":true},{\"name\":\"m\",\"display\":\"m\",\"html\":\"m\",\"fullName\":\"Minor\",\"precedence\":0,\"order\":0},{\"name\":\"dim\",\"display\":\"dim\",\"html\":\"<sup>dim</sup>\",\"fullName\":\"Diminished\",\"precedence\":0,\"order\":1},{\"name\":\"aug\",\"display\":\"aug\",\"html\":\"<sup>aug</sup>\",\"fullName\":\"Augmented\",\"precedence\":0,\"order\":1},{\"name\":\"dom7\",\"display\":\"7\",\"html\":\"<sup>7</sup>\",\"fullName\":\"Dominant seventh\",\"precedence\":1,\"order\":2},{\"name\":\"maj7\",\"display\":\"M7\",\"html\":\"<sup>M7</sup>\",\"fullName\":\"Major seventh\",\"precedence\":1,\"order\":2},{\"name\":\"5\",\"display\":\"5\",\"html\":\"<sup>5</sup>\",\"fullName\":\"Fifth/Power chord\",\"precedence\":1},{\"name\":\"flat5\",\"display\":\"♭5\",\"html\":\"<sup>♭5</sup>\",\"fullName\":\"Flat fifth\",\"precedence\":1},{\"name\":\"6\",\"display\":\"6\",\"html\":\"<sup>6</sup>\",\"fullName\":\"Sixth\",\"precedence\":1},{\"name\":\"9\",\"display\":\"9\",\"html\":\"<sup>9</sup>\",\"fullName\":\"Ninth\",\"precedence\":1},{\"name\":\"maj9\",\"display\":\"M9\",\"html\":\"<sup>M9</sup>\",\"fullName\":\"Major ninth\",\"precedence\":1},{\"name\":\"11\",\"display\":\"11\",\"html\":\"<sup>11</sup>\",\"fullName\":\"Eleventh\",\"precedence\":1},{\"name\":\"13\",\"display\":\"13\",\"html\":\"<sup>13</sup>\",\"fullName\":\"Thirteenth\",\"precedence\":1},{\"name\":\"sus2\",\"display\":\"sus2\",\"html\":\"<sup>sus2</sup>\",\"fullName\":\"Suspended second\",\"precedence\":2},{\"name\":\"sus4\",\"display\":\"sus4\",\"html\":\"<sup>sus4</sup>\",\"fullName\":\"Suspended fourth\",\"precedence\":2},{\"name\":\"add6\",\"display\":\"add6\",\"html\":\"<sup>add6</sup>\",\"fullName\":\"Add sixth\",\"precedence\":2},{\"name\":\"add9\",\"display\":\"add9\",\"html\":\"<sup>add9</sup>\",\"fullName\":\"Add ninth\",\"precedence\":2}]}");

/***/ }),

/***/ "./resources/js/songBuilder/chordBuilder.js":
/*!**************************************************!*\
  !*** ./resources/js/songBuilder/chordBuilder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'setTargetValue': function setTargetValue(ev, target, value) {
      if (target != undefined) {
        $(target).attr('data-value', value);
      }
    },
    'mainRoot': 'G',
    'mainScale': 'Major',
    'changeTargetOnChordChange': false,
    'songPartSelector': '',
    'customSectionEmptyMessage': 'Empty'
  };
  var chordDisplay = '';
  var chordValue = '';
  var changeValueOfTarget = false;
  var selectKey = '';
  var chordsReference = window.musicReference || {};

  function getOption(obj, option) {
    var options = $(obj).data('chordBuilder-options');
    if (!options.hasOwnProperty(option)) return null;
    return options[option];
  }

  function initializePanel(obj) {
    // Get root key and scale
    var root = getOption(obj, 'mainRoot');
    var scale = getOption(obj, 'mainScale');
    root = typeof root == 'function' ? root() : root;
    scale = typeof scale == 'function' ? scale() : scale;
    if (root == undefined || scale == undefined) return;
    if ([root, scale].join('') == selectKey) return; // Add measures

    var section = $(obj).find('.section.measures');
    section.empty();

    for (var i = 0; i < chordsReference.measures.length; i++) {
      var item = $('<span>').addClass('item measure').attr('data-value', chordsReference.measures[i].name).attr('data-display', chordsReference.measures[i].displayName).html(chordsReference.measures[i].displayName);

      if (chordsReference.measures[i].hasOwnProperty('default') && chordsReference.measures[i]["default"]) {
        item.addClass('selected');
      }

      section.append(item);
    } // Add root and bass


    section = $(obj).find('.section.chord-roots');
    var section2 = $(obj).find('.section.chord-bass');
    section.empty();
    section2.empty();
    var scaleReference = chordsReference.scale.find(function (o) {
      return o.name == scale;
    }); // Get position of root note

    var rootNoteIndex = chordsReference.notes.indexOf(chordsReference.notes.find(function (note) {
      return note.name == root;
    }));

    for (var i = 0; i < scaleReference.pattern.length; i++) {
      // Get notes based root
      var noteIndex = (scaleReference.pattern[i].noteIndex + rootNoteIndex) % chordsReference.notes.length;
      var noteRef = chordsReference.notes[noteIndex]; // Create item for root selection

      var item = $('<span>').addClass('item root').attr('data-value', scaleReference.pattern[i].name).attr('data-display', noteRef.displayName).html(noteRef.displayName); // Create item for bass selection

      var item2 = $('<span>').addClass('item bass').attr('data-value', scaleReference.pattern[i].name).attr('data-display', '<sub>/' + noteRef.displayName + '</sub>').html(noteRef.displayName); // Get default variation for root selection

      var family = scaleReference.family.find(function (o) {
        return o.name == scaleReference.pattern[i].name;
      });

      if (family != undefined) {
        item.attr('data-default-variation', chordsReference.variations[family.variationIndex].name);
      }

      section.append(item);
      section2.append(item2);
    }

    $('.key-view-root').html(root);
    $('.key-view-scale').html(scale); // Setup variations

    section = $(obj).find('.section.chord-variations');
    section2 = $(obj).find('.section.chord-others');
    section.empty();
    section2.empty();

    for (var i = 0; i < chordsReference.variations.length; i++) {
      var item;

      if (chordsReference.variations[i].precedence == 0) {
        item = $('<span>').addClass('item chord-variation');
      } else {
        item = $('<span>').addClass('item chord-other');
      }

      item.attr('data-value', chordsReference.variations[i].name).attr('data-display', chordsReference.variations[i].html).html(chordsReference.variations[i].display);

      if (chordsReference.variations[i].hasOwnProperty('default') && chordsReference.variations[i]["default"]) {
        item.addClass('selected');
      }

      if (chordsReference.variations[i].precedence == 0) {
        section.append(item);
      } else {
        section2.append(item);
      }
    }

    generateCustom(obj); // Empty values

    chordValue = '';
    chordDisplay = '';
    var view = $(obj).find('.selected-chord');
    view.attr('data-value', chordValue);
    view.html(chordDisplay);
  }
  /**
   * Generate custom chord selection
   * @param {object} obj 
   */


  function generateCustom(obj) {
    // Add songparts
    var section = $(obj).find('.section.custom');
    var count = 0;
    section.empty();
    $(getOption(obj, 'songPartSelector')).each(function () {
      if ($(this).attr('data-name') == '') return;
      var name = $(this).attr('data-name');
      var item = $('<span>').addClass('item custom-item').attr('data-value', name).attr('data-display', name).html(name);
      section.append(item);
      count++;
    });

    if (count <= 0) {
      var item = $('<i>').addClass('text-muted').html(getOption(obj, 'customSectionEmptyMessage'));
      section.append(item);
    }
  }
  /**
   * Construct chords from selection
   * @param {object} obj 
   */


  function buildChord(obj) {
    // Get first three essential selections
    var measureVal = $(obj).find('.measure.selected').attr('data-value');
    var rootVal = $(obj).find('.root.selected').attr('data-value');
    var variationVal = $(obj).find('.chord-variation.selected').attr('data-value');
    var customVal = $(obj).find('.custom-item.selected').attr('data-value'); // Check if selections valid, else display previous chord selected

    var view = $(obj).find('.selected-chord'); // When custom panel is selected

    if (measureVal != undefined && customVal != undefined) {
      var measureDis = $(obj).find('.measure.selected').attr('data-display');
      chordValue = [measureVal, 'custom', customVal].join('/');
      chordDisplay = [measureDis, customVal].join(''); // Set value to displayer

      view.attr('data-value', chordValue);
      view.html(chordDisplay);
      return;
    } // When required panels are not selected


    if (measureVal == undefined || rootVal == undefined || variationVal == undefined) {
      chordValue = '';
      chordDisplay = '';
      view.attr('data-value', chordValue);
      view.html(chordDisplay);
      return;
    } // Get other selections


    var otherVarVal = $(obj).find('.selected.chord-other').attr('data-value');
    var bassVal = $(obj).find('.selected.bass').attr('data-value'); // Get display values

    var measure = $(obj).find('.measure.selected').attr('data-display');
    var root = $(obj).find('.root.selected').attr('data-display');
    var variation = $(obj).find('.selected.chord-variation').attr('data-display');
    var otherVar = $(obj).find('.selected.chord-other').attr('data-display');
    var bass = $(obj).find('.selected.bass').attr('data-display'); // Build string 

    chordValue = [measureVal, rootVal, variationVal, otherVarVal, bassVal].join('/');
    chordDisplay = [measure, root, variation, otherVar, bass].join(''); // Set value to displayer

    view.attr('data-value', chordValue);
    view.html(chordDisplay);
  }
  /**
   * Show chord builder panel and target
   * @param {object} obj 
   * @param {object} target Chord marker target to set
   */


  function showPanel(obj, target) {
    setTarget(obj, target);
    $(obj).show();
  }
  /**
   * Hide chord builder panel
   * @param {object} obj 
   */


  function hidePanel(obj) {
    setTarget(obj, null);
    $(obj).hide();
  }
  /**
   * Set target
   * @param {object} obj 
   */


  function setTarget(obj, target) {
    var setImmediately = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    $(obj).data('target', target);
    changeValueOfTarget = setImmediately != undefined && setImmediately;
  }

  function onItemClick(event) {
    // Toggle select
    if ($(event.target).hasClass('selected') && $(event.target).closest('.section').attr('data-required') == undefined || $(event.target).hasClass('selected') && $(event.target).closest('.section').attr('data-required') != undefined && $(event.data.obj).find('.item.custom-item.selected').length > 0) {
      $(event.target).removeClass('selected');
    } else {
      // For custom items, unselect custom items if another custom item is selected 
      // Or root item is selected
      if ($(event.target).hasClass('custom-item') || $(event.target).hasClass('root')) {
        $(event.data.obj).find('.root.selected').removeClass('selected');
        $(event.data.obj).find('.custom-item.selected').removeClass('selected');
      }

      $(event.target).parent().find('.selected').removeClass('selected');
      $(event.target).addClass('selected'); // select default variation attached to it

      var defaultVariation = $(event.target).attr('data-default-variation');

      if (defaultVariation != undefined) {
        var varItem = $('.item.chord-variation[data-value="' + defaultVariation + '"]');
        varItem.parent().find('.selected').removeClass('selected');
        varItem.addClass('selected');
      }
    }

    buildChord(event.data.obj);

    if (changeValueOfTarget || getOption(event.data.obj, 'changeTargetOnChordChange')) {
      $(event.data.obj).trigger('chordBuilder:setTargetValue', [$(event.data.obj).data('target'), chordValue]);
      changeValueOfTarget = false;
    }
  }

  $.fn.chordBuilder = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('chordBuilder-options', settings);
        initializePanel(self); // Execute preliminary chord

        buildChord(self); // Close button

        $(self).find('.close').on('click', function () {
          hidePanel(self);
        }); // done button

        $(self).find('.select-chord').on('click', function () {
          $(self).trigger('chordBuilder:setTargetValue', [$(self).data('target'), chordValue]);
        }); // Double click

        $(document).on('dblclick', '.chord-builder .section .item', function (ev) {
          $(ev.target).parent().find('.selected').removeClass('selected');
          $(ev.target).addClass('selected');
          $(self).trigger('chordBuilder:setTargetValue', [$(self).data('target'), chordValue]);
        }); // Toggle item selected state

        $(document).on('click', '.chord-builder .section .item', {
          'obj': self
        }, onItemClick); // Activate draggable 

        $(self).draggable({
          'cursor': 'grabbing',
          'cancel': 'button,.item'
        }); // Custom text button

        $(self).find('.edit-custom-text').on('click', function () {
          var input = $(self).find('.custom-text-input');
          input.toggle();
          var display = $(self).find('.custom-text-display');
          display.toggle();
          display.html(input.val() != '' ? input.val() : '&nbsp;');
          $(self).find('.custom-text .custom-item').attr('data-value', input.val()).attr('data-display', input.val());
        });
        $(self).find('.custom-text-display').on('click', function () {
          $(this).parent().trigger('click');
        }); // Custom events

        $(self).on('chordBuilder:setTargetValue', settings.setTargetValue);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'show':
          return $(this).each(function () {
            showPanel(this, option);
          });

        case 'hide':
          return $(this).each(function () {
            hidePanel(this);
          });

        case 'getchord':
          $(this).each(function () {
            if ($(this).is(':hidden')) {
              showPanel(this, option);
            } else {
              setTarget(this, option);
            }
          });
          return {
            'value': chordValue,
            'display': chordDisplay
          };

        case 'settarget':
          return $(this).each(function () {
            setTarget(this, option, value);
          });

        case 'generatecustom':
          return $(this).each(function () {
            generateCustom(this);
          });

        case 'update':
          return $(this).each(function () {
            initializePanel(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/chordMarker.js":
/*!*************************************************!*\
  !*** ./resources/js/songBuilder/chordMarker.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'dragSnap': 0,
    'leftOffset': 0,
    'keySelector': '#key',
    'mainKey': 'C',
    'mainScale': 'Major',
    'parent': undefined,
    'selectOnCreate': true,
    'remainSelected': false,
    'keyReference': 0,
    'value': null,
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

    var disp = ChordProcessor.processChord($(obj).attr('data-value'), getOption(obj, 'mainRoot'), getOption(obj, 'mainScale'), getOption(obj, 'referenceKey'));
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
   * Toggle this chord marker as selected
   * @param {object} obj
   * @param {object} marker Target chord marker
   */


  function selectMarker(obj) {
    var chordBuilder = getOption(obj, 'chordBuilder');

    if ($(obj).hasClass('selected')) {
      unselectMarker(obj, chordBuilder);
      $(chordBuilder).chordBuilder('setTarget', null);
    } else {
      unselectAllMarkers();
      $(obj).addClass('selected');
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
          create: function create(ev, ui) {
            $(self).removeAttr('style').css('left', settings.leftOffset).attr('data-position', Math.round(settings.leftOffset / settings.dragSnap));
          },
          stop: function stop(ev, ui) {
            var diff = Math.round($(self).position().left);
            var remainder = diff % settings.dragSnap;
            var newPos = diff - remainder;
            $(self).removeAttr('style').css('left', newPos).attr('data-position', newPos / settings.dragSnap);
            $(self).trigger('chordMarker:dragstop', [$(self)]);
          }
        }); // Events

        $(self).on('click', function (ev) {
          selectMarker(self);
          settings.remainSelected = true;
        }); // Set-up context menu

        $(self).on('contextmenu', function (ev) {
          ev.preventDefault();
          $(settings.contextMenu).contextMenu('toggle', this);
        }); // Set-up double click

        $(self).on('dblclick', function () {
          $(settings.chordBuilder).chordBuilder('show', this);
        }); // Remove selection when clicked outside chord markers

        $(document).on('click', function (ev) {
          if ($(ev.target).closest('.chords').length <= 0 && $(ev.target).closest(settings.contextMenu).length <= 0 && $(ev.target).closest(settings.chordBuilder).length <= 0) {
            unselectMarker(self);
          }
        }); // Key selector changed

        $(settings.keySelector).on('change', function () {
          settings.mainRoot = $(this).val();
          settings.mainScale = $(this).find('option:selected').attr('data-scale');
          updateChord(self);
        }); // Custom events

        $(self).on('chordMarker:dragstop', settings.onDragStop); // Append marker to parent

        $(settings.parent).append($(self)); // Run on init
        // Set main key

        settings.mainRoot = $(settings.keySelector).val();
        settings.mainScale = $(settings.keySelector).find('option:selected').attr('data-scale');

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
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/chordProcessor.js":
/*!****************************************************!*\
  !*** ./resources/js/songBuilder/chordProcessor.js ***!
  \****************************************************/
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
      }); // Get position of root note

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

/***/ "./resources/js/songBuilder/chordsLine.js":
/*!************************************************!*\
  !*** ./resources/js/songBuilder/chordsLine.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'height': 10,
    'contextMenu': '.chord-context-menu',
    'chordBuilder': '.chord-selection-menu',
    'keySelector': '#mainkey'
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
   * @param {number} keyReference modulation of the chord
   * @param {string} value chord value with parts delimited by /
   */


  function insertChordMarker(obj, width, position) {
    var keyReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    $('<span>').chordMarker({
      chordBuilder: getOption(obj, 'chordBuilder'),
      contextMenu: getOption(obj, 'contextMenu'),
      dragSnap: width,
      leftOffset: position,
      keySelector: getOption(obj, 'keySelector'),
      parent: obj,
      keyReference: keyReference,
      value: value,
      onDragStop: function onDragStop() {
        sortChordMarkers(obj);
      }
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
    chords.forEach(function (chord) {
      // Get chord parts
      var chordPart = chord.split('/');
      if (chordPart.length != 7) return;
      var keyReference = chordPart[0] * 1;
      var position = chordPart[1] * 1;
      var measure = chordPart[2];
      var root = chordPart[3];
      var variation = chordPart[4];
      var variation2 = chordPart[5];
      var bass = chordPart[6];
      insertChordMarker(obj, getOption(obj, 'cursorWidth'), position * getOption(obj, 'cursorWidth'), keyReference, [measure, root, variation, variation2, bass].join('/'));
    });
  }

  $.fn.chordsLine = function (command, option, value) {
    if (_typeof(command) === 'object' || command == undefined) {
      return $(this).each(function () {
        console.log('set');
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
          insertChordMarker(self, settings.cursorWidth, position); // Sort chords line

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
      });
    }

    if (typeof command == 'string') {
      switch (command.toLocaleLowerCase()) {
        case 'setvalue':
          if (typeof option != 'string') return this;
          return $(this).each(function () {
            setValue(this, option);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/contextMenu.js":
/*!*************************************************!*\
  !*** ./resources/js/songBuilder/contextMenu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'menuItems': [{
      'name': 'close',
      'selector': '.close',
      'action': function action(ev, obj, target) {
        hide(obj, target);
      }
    }],
    'onShow': function onShow(ev, obj, target) {},
    'onHide': function onHide(ev, obj) {},
    'nesting': false
  };
  /**
   * Get option value
   * @param {Object} object 
   * @param {String} key 
   */

  function getOption(object, key) {
    var options = $(object).data('contextMenu-options');
    if (!options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Hide context menu
   * @param {Object} obj 
   */


  function hide(obj) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    $(obj).trigger('contextMenu:hide', [obj, target]);
    $(obj).hide();
    $(obj).data('target', null);
  }
  /**
   * Hide context menu
   * @param {Object} obj 
   */


  function hideAll() {
    $('.contextMenu:visible').each(function () {
      hide(this, $(this).data('target'));
    });
  }
  /**
   * Show context menu and set target
   * @param {object} obj 
   * @param {object} target Calling DOM of the context menu
   */


  function show(obj, target) {
    if (target != undefined) {
      // Compute where to place menu
      var left = $(target).offset().left;
      var width = $(obj).width();
      var viewPortWidth = $(document).width();
      left = left + width > viewPortWidth ? viewPortWidth - width - 20 : left;
      $(obj).trigger('contextMenu:hide', [obj, target]);
      $(obj).data('target', target);
      $(obj).css('left', left).css('top', $(target).offset().top + $(target).height());
    }

    if (!getOption(obj, 'nesting')) hideAll();
    $(obj).show();
    $(obj).trigger('contextMenu:show', [obj, target]);
  }
  /**
   * Hide menu if shown, show if hidden
   * @param {object} target Calling DOM of the context menu
   */


  function toggle(obj, target) {
    if ($(obj).is(':hidden')) {
      show(obj, target);
    } else {
      hide(obj, target);
    }
  }

  $.fn.contextMenu = function (command, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this; // Combine menu items array from default and command

        command.menuItems = defaults.menuItems.concat(command.hasOwnProperty('menuItems') ? command.menuItems : []); // Extend settings from default 

        var settings = $.extend({}, defaults, command);
        $(self).data('contextMenu-options', settings); // Collapse context menu when clicked outside

        $(document).on('click', function (event) {
          if (!$(self).is(event.target) && $(event.target).closest($(self).data('target')).length <= 0 && $(event.target).closest(self).length <= 0 && !$(self).is(':hidden')) {
            hide(self, $(self).data('target'));
          }
        }); // Set up context menu items click event listener

        settings.menuItems.forEach(function (element) {
          $(self).on('contextMenu:' + element.name, element.action);
          $(self).find(element.selector).on('click', {
            'obj': self
          }, function (ev) {
            $(self).trigger('contextMenu:' + element.name, [self, $(self).data('target')]);
          });
        }); // Disable right-click for context menu

        $(self).on('contextmenu', function (ev) {
          ev.preventDefault();
        }); // Custom events

        $(self).on('contextMenu:show', settings.onShow);
        $(self).on('contextMenu:hide', settings.onHide);
        $(self).addClass('contextMenu');
      });
    }

    switch (command.toLowerCase()) {
      case 'hide':
        return $(this).each(function () {
          hide(this, value);
        });

      case 'hideall':
        hideAll();
        return $(this);

      case 'show':
        return $(this).each(function () {
          show(this, value);
        });

      case 'toggle':
        return $(this).each(function () {
          toggle(this, value);
        });

      case 'isshown':
        return !$(this).is(':hidden');

      case 'ishidden':
        return $(this).is(':hidden');
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/dynamicPanel.js":
/*!**************************************************!*\
  !*** ./resources/js/songBuilder/dynamicPanel.js ***!
  \**************************************************/
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
    if (!options.hasOwnProperty(key)) return null;
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

    $(obj).trigger('dynamicPanel:insert', [panel]);
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
        $(this).data('dynamicPanel-options', settings);
        $(self).addClass('dynamicPanel'); // Set draggable

        var dragOpt = settings.draggable;
        var cancelOpt = dragOpt != undefined && dragOpt.hasOwnProperty('cancel') ? dragOpt.cancel : [];

        if (settings.draggable) {
          $(self).sortable({
            addClasses: false,
            cancel: ['input', 'a', 'select'].concat(cancelOpt).join(','),
            cursor: 'grabbing',
            stop: function stop(event, ui) {
              // Resort panel after sorting
              var index = 1;
              $(self).children(panelSelector).each(function () {
                if (index !== $(this).attr('data-order') * 1) {
                  $(this).attr('data-order', index);
                }

                index++;
              });
              $(ui.item).removeAttr('style');
            }
          });
        }
        /** Event listeners **/
        // Add panels button


        $(document).on('click', settings.adderSelector + ',  ' + '[data-target="#' + $(self).attr('id') + '"]', function () {
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
          $(self).on('dynamicPanel:insert', settings.onInsert);
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

/***/ "./resources/js/songBuilder/outline.js":
/*!*********************************************!*\
  !*** ./resources/js/songBuilder/outline.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('#addDetails').click(addDetails);
  $('#addChords').click(addChords);
  $('#addLyrics').click(addLyrics);
  $('#createSequence').click(setSequence);
  addDetails();
});

function addDetails() {
  $('.song-details-container').show();
  $('.song-part-container').hide();
  $('.sequence-container').hide();
  $('.step.current').removeClass('current');
  $('#addDetails').addClass('current'); // Hide chord builder

  $('.chord-selection-menu').chordBuilder('hide');
  setPrevNext(null, addLyrics);
}

function addLyrics() {
  $('.song-details-container').hide();
  $('.song-part-container').show();
  $('.sequence-container').hide();
  $('.step.current').removeClass('current');
  $('#addLyrics').addClass('current');
  $('.song-line .lyrics-view').each(function () {
    // Set process
    $('#processing').val('lyrics'); // Hide chords if shown

    $(this).parent().siblings('.chords').hide(); // Hide input

    $(this).hide(); // Get sibling view element

    var lyricsInput = $(this).siblings('input[type="text"]');
    if (lyricsInput.length <= 0) return; // Set view element text

    lyricsInput.show();
  });
  $('.chord-selection-menu').chordBuilder('hide');
  setPrevNext(addDetails, addChords);
}

function addChords() {
  $('.song-details-container').hide();
  $('.song-part-container').show();
  $('.sequence-container').hide();
  $('.step.current').removeClass('current');
  $('#addChords').addClass('current'); // Get each lyrics line and display

  $('.song-line .lyrics input[type="text"]').each(function () {
    // Set process
    $('#processing').val('chords'); // Show chords

    $(this).parent().siblings('.chords').show(); // Get sibling view element

    var lyricsView = $(this).siblings('.lyrics-view'); // Hide input

    $(this).hide();
    if (lyricsView.length <= 0) return; // Get text from lyrics text input and format

    lyricsView.songLine({
      'dataSource': this,
      'contextMenu': '.character-context-menu',
      'spacerContextMenu': '.spacer-context-menu'
    }); // Set view element text

    lyricsView.show();
  });
  setPrevNext(addLyrics, setSequence);
}

function setSequence() {
  // Hide other panels
  $('.song-details-container').hide();
  $('.song-part-container').hide(); // Show this panel

  $('.sequence-container').show(); // Set visual indicator

  $('.step.current').removeClass('current');
  $('#createSequence').addClass('current'); // Set processing value

  $('#processing').val('sequence'); // Hide chord builder

  $('.chord-selection-menu').chordBuilder('hide'); // Init sequence builder

  $('#sequenceBox').sequenceBuilder('setSequenceSelect'); // Set action buttons

  setPrevNext(addChords, function () {
    alert('Done');
  });
}

function setPrevNext(prev, next) {
  $('.previous').off('click').on('click', function () {
    if (typeof prev == 'function') prev();
  }).show();
  $('.next').off('click').on('click', function () {
    if (typeof next == 'function') next();
  });
}

/***/ }),

/***/ "./resources/js/songBuilder/sequenceBuilder.js":
/*!*****************************************************!*\
  !*** ./resources/js/songBuilder/sequenceBuilder.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



(function ($) {
  var defaults = {
    'noNameSubstitute': false,
    'defaultSelect': []
  };
  /**
   * Get option value
   * @param {Object} object 
   * @param {String} key 
   */

  function getOption(object, key) {
    var options = $(object).data('sequenceBuilder-options');
    if (!options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * 
   * @param {object} obj 
   * @param {Array} select array to get select data from
   */


  function setSequenceSelect(obj, select) {
    var select;

    var _select = select == undefined ? getOption(obj, 'defaultSelect') : option; // If select is a function, call it


    if (typeof _select == 'function') {
      select = _select();
    } else {
      select = _select;
    } // Remove panels first


    var panelCount = $(obj).dynamicPanel('option', 'panelCount');

    for (var i = 0; i < panelCount; i++) {
      $(obj).dynamicPanel('remove');
    } // Construct select


    var noName = getOption(obj, 'noNameSubstitute');
    $('.sequence-item-template select').empty();
    select.forEach(function (elem) {
      var name = elem.name;

      if (_typeof(noName) == 'object' && name == noName.find) {
        name = noName.replace;
      }

      $('.sequence-item-template select').append($('<option>').html(name).val(elem.id));
    }); // Insert template back to sequence

    for (var i = 0; i < select.length; i++) {
      $(obj).dynamicPanel('insert').find('select').find('option[value="' + select[i].id + '"]').attr('selected', '');
    }
  }

  $.fn.sequenceBuilder = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('sequenceBuilder-options', settings); // Set up dynamic panel

        $(self).dynamicPanel({
          'startCount': 0,
          'key': 'sequence',
          'panelTemplate': '.sequence-item-template',
          'removerSelector': '.delete-sequence',
          'draggable': {
            'cancel': ['.option-sequence']
          },
          'onInsert': function onInsert(ev, panel) {
            // Set panel ID
            var id = 'panel' + Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])().replace(/[{,},-]*/g, '');
            panel.attr('id', id); // Set expanded menu listener

            panel.find('.option-sequence').on('click', function () {
              $('.sequence-expanded-menu').contextMenu('toggle', this);
            });
          }
        });
        setSequenceSelect(self);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setsequenceselect':
          return $(this).each(function () {
            setSequenceSelect(this, option);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/songDetails.js":
/*!*************************************************!*\
  !*** ./resources/js/songBuilder/songDetails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'navbarSongTitle': '',
    'songTitleInput': '',
    'artistInput': '',
    'songTagInput': '',
    'descriptionInput': '',
    'navbarKey': '',
    'songKeyInput': '',
    'songTimeSignInput': '',
    'songSpeedInput': ''
  };
  var songData = window.songData || {};
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songDetails-options');
    if (!options.hasOwnProperty(key)) return null;
    return options[key];
  }

  function setValue(obj, key, value) {
    if (key == '' || key == undefined) return;

    switch (key) {
      case 'title':
        var selectors = [getOption(obj, 'navbarSongTitle'), getOption(obj, 'songTitleInput')];
        setValAttr(selectors, value);
        break;

      case 'artist':
        var selectors = [getOption(obj, 'artistInput')];
        setValAttr(selectors, value);
        break;

      case 'tags':
        var selectors = [getOption(obj, 'songTagInput')];
        setValAttr(selectors, value);
        break;

      case 'description':
        var selector = getOption(obj, 'descriptionInput');
        $(selector).text(value);
        break;

      case 'key':
        var selector = getOption(obj, 'songKeyInput');
        $(selector).find('option[value="' + value[0] + '"][data-scale="' + value[1] + '"]').prop('selected', true);
        $(selector).trigger('change');
        break;

      case 'timeSignature':
        var selector = getOption(obj, 'songTimeSignInput');
        $(selector).find('option[value="' + value + '"]').prop('selected', true);
        $(selector).trigger('change');
        break;

      case 'tempo':
        var selector = [getOption(obj, 'songSpeedInput')];
        setValAttr(selector, value);
        break;
    }

    return obj;
  }

  function setValAttr(selectors, value) {
    selectors.forEach(function (o) {
      if (_typeof(value) == 'object') {
        value = value.join('|');
      }

      $(o).val(value).trigger('change');
    });
  }

  $.fn.songDetails = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('songDetails-options', settings); // Sync changes with Song Title

        $(settings.songTitleInput).on('keyup', function () {
          $(settings.navbarSongTitle).val($(this).val());
        });
        $(settings.navbarSongTitle).on('keyup', function () {
          $(settings.songTitleInput).val($(this).val());
        }); // Sync changes with Song Key

        $(document).on('change', [settings.navbarKey, settings.songKeyInput].join(','), function (ev) {
          var target = settings.navbarKey;

          if ($(this).is(settings.navbarKey)) {
            target = settings.songKeyInput;
          }

          var key = $(this).find('option:selected').val();
          var scale = $(this).find('option:selected').attr('data-scale');
          $(target).find('option[value="' + key + '"][data-scale="' + scale + '"]').prop('selected', true);
          $(this).blur();
          $('.chord-selection-menu').chordBuilder('update');
        }); // Show error message if needed

        $('.input-container').on('inputContainer:submit', function () {
          // If no error text element, do not engage
          var errText = $(this).find('.error-text');

          if (errText.length <= 0) {
            return;
          }

          var value = $(this).find('input, select').val(); // If value of input or select is not empty, hide error message if shown

          if (value != '') {
            if (errText.is(':visible')) errText.hide();
            return;
          } // Show error message


          errText.show();
        });
        $(settings.songTagInput).on('change', function () {
          var tags = $(this).val().split('|');
          tags.forEach(function (o) {
            $('.tag-item[data-value="' + o + '"]').addClass('selected');
          });
        });
        $('.tag-item').on('click', function () {
          // Toggles selected class
          if ($(this).hasClass('selected')) $(this).removeClass('selected');else $(this).addClass('selected'); // Reconstruct input value

          var selectedVal = [];
          $(this).parent().find('.selected').each(function () {
            selectedVal.push($(this).attr('data-value'));
          });
          $(settings.songTagInput).val(selectedVal.join('|'));
        });
      });
    }

    if (typeof command == 'string') {
      switch (command.toLocaleLowerCase()) {
        case 'set':
          return $(this).each(function () {
            setValue(this, option, value);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/songLine.js":
/*!**********************************************!*\
  !*** ./resources/js/songBuilder/songLine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'dataSource': undefined,
    'contextMenu': '',
    'spacerContextMenu': ''
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
   * Add spacer next to this character
   * @param {object} obj
   * @param {number} width Width of the spacer
   */


  function addSpacer(obj, target, width) {
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

  $.fn.songLine = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('songLine-options', settings); // Get data

        if ($(settings.dataSource).hasClass('changed')) {
          var preDefSpacers = []; // Get predefined spacers

          if ($(self).html().indexOf('{spacer-') >= 0) {
            var content = $(self).html();
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
          }

          var data = $(settings.dataSource).val();
          var charArr = data.split('');
          var formattedData = '';
          charArr.forEach(function (_char) {
            formattedData += '<span class="character">' + _char + '</span>';
          });
          $(self).html(formattedData); // Set predefined spacers

          preDefSpacers.reverse().forEach(function (spacer) {
            addSpacer(self, $(self).children('.character')[spacer.position - 1], spacer.width);
          }); // Set event listener

          $(self).find('.character').on('mouseover', function () {
            $(this).css('border-right', '2.5px solid lightgray');
          }).on('mouseleave', function () {
            $(this).css('border-right', 'none');
          }).on('contextmenu', function (ev) {
            ev.preventDefault();
            $(this).css('border-right', 'none');
            $(settings.contextMenu).contextMenu('show', this);
          });
          $(settings.dataSource).removeClass('changed');
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
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/songPart.js":
/*!**********************************************!*\
  !*** ./resources/js/songBuilder/songPart.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



(function ($) {
  var defaults = {
    'contextMenu': '',
    'songPartTitleInput': '.song-part-title .song-part-name',
    'fontHeight': 5,
    'fontWidth': 5
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songPart-options');
    if (!options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Fill song part container with values
   * @param {object} obj
   * @param {object} values collection of song parts
   */


  function fillSongparts(obj, values) {
    // Remove autogenerated song parts
    $(obj).dynamicPanel('removeAll'); // Iterate values song parts

    values.forEach(function (songLine) {
      var panel = $(obj).dynamicPanel('insert', null, songLine['id']); // Set ID

      panel.attr('data-id', songLine['id']);
      panel.attr('data-order', songLine['order']);
      panel.attr('data-reference-key', songLine['referenceKey']); // Set song title

      panel.find(getOption(obj, 'songPartTitleInput')).html(songLine['name']);
      panel.find(getOption(obj, 'songPartTitleInput')).attr('data-name', songLine['name']); // Get lyrics and chords string

      var lyrDisplay = songLine['lyrics']['display'];
      var lyrContent = songLine['lyrics']['content'];
      var chords = songLine['chords']['content']; // Parse lyrics and chords line

      var lyrDispArr = lyrDisplay.split('{newline}');
      var lyrContArr = lyrContent.split('{newline}');
      var chordsArr = chords.split('{newline}'); // Fill only if lyrics and chords have the same lines

      if (lyrDispArr.length == lyrContArr.length && lyrDispArr.length == chordsArr.length) {
        // Remove existing song lines first
        panel.find('.stanza').dynamicPanel('removeAll');

        for (var i = 0; i < lyrDispArr.length; i++) {
          // Insert new song line
          fillSongLine(panel, lyrDispArr[i], lyrContArr[i], chordsArr[i]);
        }
      }
    });
  }
  /**
   * Set lyrics and chords value to the song line
   * @param {object} panel Target panel to add lyrics to
   * @param {string} lyricsDisplay Lyrics display text
   * @param {string} lyricsContent Lyrics content text
   * @param {string} chordsContent Chords line value
   */


  function fillSongLine(panel, lyricsDisplay, lyricsContent, chordsContent) {
    // Create new song line panel
    var linePanel = panel.find('.stanza').dynamicPanel('insert'); // Set value to lyrics input and set changed flag

    linePanel.find('.lyrics input[type="text"]').val(lyricsDisplay);
    linePanel.find('.lyrics input[type="text"]').addClass('changed'); // Set content to lyrics view

    linePanel.find('.lyrics .lyrics-view').html(lyricsContent); // Set content to chords view

    linePanel.find('.chords').chordsLine('setValue', chordsContent);
  }

  $.fn.songPart = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('songPart-options', settings); // Activate dynamic panel for song parts

        $(self).dynamicPanel({
          'key': 'songPart',
          'panelTemplate': '.song-part-template',
          // Draggable options
          'draggable': {
            'cancel': ['.chord-cursor', '.chord', '.close', '.more', '.song-line', '.song-part-title']
          },
          'onInsert': function onInsert(event, panel) {
            // More menu action of song panel
            panel.find('.more').on('click', function (event) {
              $(settings.contextMenu).contextMenu('toggle', this);
            }); // Set font family and size based on settings

            panel.css('font-size', settings.fontSize);
            panel.css('font-family', settings.fontFamily); // Insert below action of song panels

            panel.find('.insert-below').on('click', function () {
              var index = $(this).closest('.song-part').attr('data-order') * 1;
              $(self).dynamicPanel('insert', index);
            }); // Fold/Expand action of song part panel

            $(panel).find('.fold, .expand').on('click', function () {
              if ($(this).hasClass('fold')) {
                $(this).siblings('.stanza-container').hide();
                $(this).siblings('.expand').show();
              } else {
                $(this).siblings('.stanza-container').show();
                $(this).siblings('.fold').show();
              }

              $(this).hide();
            }); // Generate GUID and create id for stanza

            var uuid = panel.attr('data-id');

            if (uuid == undefined || uuid == '') {
              uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
              panel.attr('data-id', uuid);
            }

            var id = 'stanza' + uuid.replace(/[{,},-]*/g, ''); // Activate dynamic panel for song lines

            panel.find('.stanza').attr('id', id).dynamicPanel({
              'key': 'stanza',
              'panelTemplate': '.content-prototype',
              'removerSelector': '.delete-line',
              'autoformatPaste': true,
              // Draggable options
              'draggable': {
                'cancel': ['.chord-cursor', '.chord', '.close', '.more', '.lyrics']
              },
              'onInsert': function onInsert(innerEv, songlinePanel) {
                // Generate GUID and create id for song line
                var uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
                var lineId = 'line' + uuid.replace(/[{,},-]*/g, '');
                songlinePanel.attr('data-id', uuid);
                songlinePanel.attr('id', lineId); // Set up context menu

                songlinePanel.find('.line-options').on('click', function () {
                  $('.songline-context-menu').contextMenu('toggle', this);
                }); // Set up change listener for input texts

                songlinePanel.find('.lyrics input[type="text"]').on('change', function () {
                  $(this).addClass('changed');
                }); // Set up chords line

                var chordsView = songlinePanel.find('.chords');

                if (chordsView.length > 0) {
                  // Initialize chords line
                  chordsView.chordsLine({
                    'height': settings.fontHeight + 4,
                    'cursorWidth': settings.fontWidth
                  });
                } // hide chords view initially when not on chords mode


                if ($('#processing').val() != 'chords') {
                  chordsView.hide();
                }
              }
            }); // Set add stanza button target

            panel.find('.add-stanza').attr('data-target', '#' + id); // Set up song part title

            panel.find('.song-part-title .song-part-name').on('click', function () {
              $('.song-part-title-expanded-panel').contextMenu('show', this);
            });
          }
        });
      });
    }

    if (typeof command == 'string') {
      switch (command.toLocaleLowerCase()) {
        case 'setvalue':
          return $(this).each(function () {
            if (_typeof(option) != 'object') return; // Not array

            fillSongparts(this, option);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songBuilder/songbuilder.js":
/*!*************************************************!*\
  !*** ./resources/js/songBuilder/songbuilder.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
window.musicReference = __webpack_require__(/*! ./_musicReference.json */ "./resources/js/songBuilder/_musicReference.json");
window.songData = {};

__webpack_require__(/*! ./songPart */ "./resources/js/songBuilder/songPart.js");

__webpack_require__(/*! ./outline */ "./resources/js/songBuilder/outline.js");

__webpack_require__(/*! ./songDetails */ "./resources/js/songBuilder/songDetails.js");

__webpack_require__(/*! ./chordProcessor */ "./resources/js/songBuilder/chordProcessor.js");

__webpack_require__(/*! ./chordBuilder */ "./resources/js/songBuilder/chordBuilder.js");

__webpack_require__(/*! ./chordMarker */ "./resources/js/songBuilder/chordMarker.js");

__webpack_require__(/*! ./dynamicPanel */ "./resources/js/songBuilder/dynamicPanel.js");

__webpack_require__(/*! ./contextMenu */ "./resources/js/songBuilder/contextMenu.js");

__webpack_require__(/*! ./chordsLine */ "./resources/js/songBuilder/chordsLine.js");

__webpack_require__(/*! ./songLine */ "./resources/js/songBuilder/songLine.js");

__webpack_require__(/*! ./sequenceBuilder */ "./resources/js/songBuilder/sequenceBuilder.js");


var chordMarkerContextMenu = '.chord-context-menu';
var chordSelection = '.chord-selection-menu';
var sequenceBox = '#sequenceBox';
var songPartTitleContextMenu = '.song-part-title-expanded-panel';
var songLineContextMenu = '.songline-context-menu';
var songPartContextMenu = '.songpart-context-menu';
var sequenceOptions = '.sequence-expanded-menu';
var characterContextMenu = '.character-context-menu';
var spacerContextMenu = '.spacer-context-menu';
var songDetailsContainer = '.song-details-container';
var songPartsContainer = '#songParts';
var monospaceFontSize = '20px';
var monospaceFontFamily = '"Consolas", "Courier New", Courier, monospace';
var monospaceWidth = 0;
var monospaceHeight = 0;
$(function () {
  getPageDimensions(); // Chord builder

  $(chordSelection).chordBuilder({
    'changeTargetOnChordChange': true,
    'songPartSelector': '.song-part-name',
    'mainRoot': function mainRoot() {
      return $('#mainkey option:selected').val();
    },
    'mainScale': function mainScale() {
      return $('#mainkey option:selected').attr('data-scale');
    },
    'setTargetValue': function setTargetValue(ev, target, value) {
      if (target != undefined) {
        $(target).chordMarker('chordValue', value);
      }
    }
  }); // SEQUENCE BUILDER

  $(sequenceBox).sequenceBuilder({
    'noNameSubstitute': {
      'find': '[no-name]',
      'replace': '<span class="text-muted">No name</span>'
    },
    'defaultSelect': function defaultSelect() {
      var select = [];
      $('.song-part.panel-item .song-part-title').each(function () {
        var name = $(this).find('.song-part-name').attr('data-name');

        if (name == '' || name == undefined) {
          name = '[no-name]';
        }

        select.push({
          'name': name,
          'id': $(this).parent().find('.stanza').attr('id')
        });
      });
      return select;
    }
  }); // CONTEXT MENUS
  // Chord marker

  $(chordMarkerContextMenu).contextMenu({
    'menuItems': [{
      'name': 'delete',
      'selector': '.delete-chord',
      'action': function action(ev, obj, target) {
        $(target).remove();
        $(obj).contextMenu('hide');
      }
    }, {
      'name': 'update',
      'selector': '.change-chord',
      'action': function action(ev, obj, target) {
        $(target).chordMarker('select');
        $(chordSelection).chordBuilder('show', target);
        $(chordSelection).chordBuilder('setTarget', target, true);
        $(obj).contextMenu('hide');
      }
    }]
  }); // Song part

  $(songPartTitleContextMenu).contextMenu({
    'menuItems': [{
      'name': 'done',
      'selector': '.done',
      'action': function action(ev, obj, target) {
        var name = $(obj).find('.song-part-name-select').val();
        var number = $(obj).find('.song-part-name-number-input input').val();
        name = number != '' ? name + ' ' + number : name;
        $(target).attr('data-name', name);
        $(target).html(name);
        $(obj).contextMenu('hide');
        $(chordSelection).chordBuilder('generateCustom');
      }
    }, {
      'name': 'clear',
      'selector': '.clear',
      'action': function action(ev, obj, target) {
        $(obj).find('.song-part-name-number-input input').val('');
      }
    }]
  }); // Song line

  $(songLineContextMenu).contextMenu({
    'menuItems': [{
      'name': 'delete',
      'selector': '.delete-line',
      'action': function action(ev, obj, target) {
        var index = $(target).closest('.panel-item').attr('data-order') * 1 - 1;
        $(target).closest('.dynamicPanel').dynamicPanel('remove', index);
        $(obj).contextMenu('hide');
      }
    }, {
      'name': 'insertBelow',
      'selector': '.insert-line-below',
      'action': function action(ev, obj, target) {
        var index = $(target).closest('.panel-item').attr('data-order') * 1;
        $(target).closest('.dynamicPanel').dynamicPanel('insert', index);
        $(obj).contextMenu('hide');
      }
    }]
  }); // Song part

  $(songPartContextMenu).contextMenu({
    'menuItems': [{
      'name': 'delete',
      'selector': '.delete-songpart',
      'action': function action(ev, obj, target) {
        var index = $(target).closest('.panel-item').attr('data-order') * 1 - 1;
        $(target).closest('.dynamicPanel').dynamicPanel('remove', index);
        $(obj).contextMenu('hide');
      }
    }, {
      'name': 'insertBelow',
      'selector': '.insert-songpart-below',
      'action': function action(ev, obj, target) {
        var index = $(target).closest('.panel-item').attr('data-order') * 1;
        $(target).closest('.dynamicPanel').dynamicPanel('insert', index);
        $(obj).contextMenu('hide');
      }
    }]
  }); // Sequence builder

  $(sequenceOptions).contextMenu({
    'menuItems': [{
      'name': 'delete',
      'selector': '.delete-sequence',
      'action': function action(ev, obj, target) {
        var index = $(target).closest('.panel-item').attr('data-order') * 1 - 1;
        $(target).closest('.dynamicPanel').dynamicPanel('remove', index);
        $(obj).contextMenu('hide');
      }
    }, {
      'name': 'insertBelow',
      'selector': '.insert-sequence',
      'action': function action(ev, obj, target) {
        var index = $(target).closest('.panel-item').attr('data-order') * 1;
        $(target).closest('.dynamicPanel').dynamicPanel('insert', index);
        $(obj).contextMenu('hide');
      }
    }]
  }); // Insert-spacer menu for characters

  $(characterContextMenu).contextMenu({
    'menuItems': [{
      'name': 'insert',
      'selector': '.insert',
      'action': function action(ev, menu, target) {
        var input = $(menu).find('.spacer-width input[type="number"]');
        var width = input.val();
        input.val(input.attr('data-default'));
        $(target).parent().songLine('addSpacer', target, width);
        $(target).parent().songLine('clean');
        $(menu).contextMenu('hide');
      }
    }],
    'onShow': function onShow(ev, menu, target) {
      $('.temp-spacer').remove();
      $(target).after($('<span class="temp-spacer">&nbsp;</span>').css('background-color', 'lightgray'));
    },
    'onHide': function onHide(ev, menu, target) {
      $('.temp-spacer').remove();
    }
  }); // Character spacer builder

  $(spacerContextMenu).contextMenu({
    'menuItems': [{
      'name': 'delete',
      'selector': '.delete-spacer',
      'action': function action(ev, obj, target) {
        $(target).remove();
        $(obj).contextMenu('hide');
      }
    }, {
      'name': 'adjust',
      'selector': '.adjust-spacer',
      'action': function action(ev, obj, target) {
        $(obj).contextMenu('hide');
        var newTarget = $(target).prev('.character');
        $(target).remove();
        window.setTimeout(function () {
          $('.character-context-menu').contextMenu('show', newTarget);
        }, 100);
      }
    }]
  });
  $(songDetailsContainer).songDetails({
    'navbarSongTitle': '.song-title input',
    'songTitleInput': '#songTitle',
    'artistInput': '#songArtist',
    'songTagInput': '#songtags',
    'descriptionInput': '#songDescription',
    'navbarKey': '#mainkey',
    'songKeyInput': '#songkey',
    'songTimeSignInput': '#songTimeSign',
    'songSpeedInput': '#songSpeed'
  });
  $(songPartsContainer).songPart({
    'contextMenu': songPartContextMenu,
    'fontSize': monospaceFontSize,
    'fontFamily': monospaceFontFamily,
    'fontWidth': monospaceWidth,
    'fontHeight': monospaceHeight
  }); // Get song data

  getSong();
});

function getPageDimensions() {
  // Get width of a single monospace
  var unique = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
  var spanTest = $('<span>').addClass(unique).css('font-family', monospaceFontFamily).css('font-size', monospaceFontSize).css('position', 'absolute').html('&nbsp;');
  $('body').append(spanTest);
  monospaceWidth = spanTest.width();
  monospaceHeight = spanTest.height();
  $('body').remove('.' + unique);
}

function getSong() {
  var songId = $('#songId').val();

  if (songId == '') {
    $('#songId').val(Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])());
    return;
  }

  get(songId);
}
/**
 * Get song data from server
 */


function get($id) {
  $.ajax({
    'url': '/songbuilder/' + $id,
    'method': 'get',
    'contentType': 'application/json',
    'dataType': 'json'
  }).done(function (response) {
    setValues(response);
  }).fail(function (response) {
    console.error('Cannot find song');
  });
}

function setValues(songData) {
  console.log(songData);

  if (songData.hasOwnProperty('title')) {
    $(songDetailsContainer).songDetails('set', 'title', songData.title);
  }

  if (songData.details.hasOwnProperty('artist')) {
    $(songDetailsContainer).songDetails('set', 'artist', songData.details.artist);
  }

  if (songData.hasOwnProperty('tags')) {
    $(songDetailsContainer).songDetails('set', 'tags', songData.tags);
  }

  if (songData.details.hasOwnProperty('description')) {
    $(songDetailsContainer).songDetails('set', 'description', songData.details.description);
  }

  if (songData.hasOwnProperty('key') && songData.hasOwnProperty('scale')) {
    $(songDetailsContainer).songDetails('set', 'key', [songData.key, songData.scale]);
  }

  if (songData.details.hasOwnProperty('timeSignature')) {
    $(songDetailsContainer).songDetails('set', 'timeSignature', songData.details.timeSignature);
  }

  if (songData.details.hasOwnProperty('tempo')) {
    $(songDetailsContainer).songDetails('set', 'tempo', songData.details.tempo);
  }

  $(songPartsContainer).songPart('setValue', songData.songParts);
}

/***/ }),

/***/ 1:
/*!*******************************************************!*\
  !*** multi ./resources/js/songBuilder/songbuilder.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PrjFiles\Prj\eska\Source\eska\resources\js\songBuilder\songbuilder.js */"./resources/js/songBuilder/songbuilder.js");


/***/ })

/******/ });