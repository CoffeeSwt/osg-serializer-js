(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.osg = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
var arrayLikeToArray = require("M_0");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"M_0":1}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],7:[function(require,module,exports){
var setPrototypeOf = require("e_1");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"e_1":12}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],10:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],11:[function(require,module,exports){
var _typeof = require("s_2")["default"];

var assertThisInitialized = require("h_3");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"h_3":3,"s_2":14}],12:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],13:[function(require,module,exports){
var arrayWithoutHoles = require("-_4");

var iterableToArray = require("3_5");

var unsupportedIterableToArray = require("D_6");

var nonIterableSpread = require("._7");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"-_4":2,"3_5":9,"._7":10,"D_6":15}],14:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],15:[function(require,module,exports){
var arrayLikeToArray = require("M_0");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"M_0":1}],16:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],17:[function(require,module,exports){

},{}],18:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)

},{"base64-js":16,"buffer":18,"ieee754":19}],19:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],20:[function(require,module,exports){
(function (process){(function (){
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;

}).call(this)}).call(this,require('_process'))

},{"_process":21}],21:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],22:[function(require,module,exports){
(function (setImmediate,clearImmediate){(function (){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)

},{"process/browser.js":21,"timers":22}],23:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var Base64Encoder = /*#__PURE__*/function () {
  function Base64Encoder() {
    (0, _classCallCheck2["default"])(this, Base64Encoder);
  }

  (0, _createClass2["default"])(Base64Encoder, null, [{
    key: "decodeArray",
    value: function decodeArray(encodedData) {
      var positions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (encodedData.length === 0) return new Buffer(0);
      var buf,
          buffers = [],
          size = 0;

      for (var i = 0; i < encodedData.length; i++) {
        if (typeof Buffer.from === "function") {
          // Node 5.10+
          buf = Buffer.from(encodedData[i], 'base64');
        } else {
          // older Node versions
          buf = new Buffer(encodedData[i], 'base64');
        }

        size += buf.length;
        positions.push(size);
        buffers.push(buf);
      }

      if (encodedData.length === 1) {
        return buffers[0];
      }

      var fullBuffer = new Buffer(size),
          pos = 0;

      for (var _i = 0; _i < encodedData.length; _i++) {
        buffers[_i].copy(fullBuffer, pos);

        pos += buffers[_i].length;
      }

      return fullBuffer;
    }
  }]);
  return Base64Encoder;
}();

module.exports = Base64Encoder;

}).call(this)}).call(this,require("buffer").Buffer)

},{"m_10":4,"M_11":5,"o_9":8,"buffer":18}],24:[function(require,module,exports){
"use strict";

module.exports = {
  INDENT_VALUE: 2,
  Sizes: {
    BOOL_SIZE: 1,
    CHAR_SIZE: 1,
    SHORT_SIZE: 2,
    INT_SIZE: 4,
    LONG_SIZE: 4,
    INT64_SIZE: 8,
    FLOAT_SIZE: 4,
    DOUBLE_SIZE: 8,
    GLENUM_SIZE: 4
  },
  TypeIds: {
    ID_BYTE_ARRAY: 0,
    ID_UBYTE_ARRAY: 1,
    ID_SHORT_ARRAY: 2,
    ID_USHORT_ARRAY: 3,
    ID_INT_ARRAY: 4,
    ID_UINT_ARRAY: 5,
    ID_FLOAT_ARRAY: 6,
    ID_DOUBLE_ARRAY: 7,
    ID_VEC2B_ARRAY: 8,
    ID_VEC3B_ARRAY: 9,
    ID_VEC4B_ARRAY: 10,
    ID_VEC4UB_ARRAY: 11,
    ID_VEC2S_ARRAY: 12,
    ID_VEC3S_ARRAY: 13,
    ID_VEC4S_ARRAY: 14,
    ID_VEC2_ARRAY: 15,
    ID_VEC3_ARRAY: 16,
    ID_VEC4_ARRAY: 17,
    ID_VEC2D_ARRAY: 18,
    ID_VEC3D_ARRAY: 19,
    ID_VEC4D_ARRAY: 20,
    ID_VEC2UB_ARRAY: 21,
    ID_VEC3UB_ARRAY: 22,
    ID_VEC2US_ARRAY: 23,
    ID_VEC3US_ARRAY: 24,
    ID_VEC4US_ARRAY: 25,
    ID_VEC2I_ARRAY: 26,
    ID_VEC3I_ARRAY: 27,
    ID_VEC4I_ARRAY: 28,
    ID_VEC2UI_ARRAY: 29,
    ID_VEC3UI_ARRAY: 30,
    ID_VEC4UI_ARRAY: 31,
    ID_UINT64_ARRAY: 32,
    ID_INT64_ARRAY: 33,
    ID_DRAWARRAYS: 50,
    ID_DRAWARRAY_LENGTH: 51,
    ID_DRAWELEMENTS_UBYTE: 52,
    ID_DRAWELEMENTS_USHORT: 53,
    ID_DRAWELEMENTS_UINT: 54
  }
};

},{}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _createClass2 = _interopRequireDefault(require("M_11"));

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var ObjectGLEnum = function ObjectGLEnum() {
  var _value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  (0, _classCallCheck2["default"])(this, ObjectGLEnum);
  this.value = _value;
};

var ObjectMark = function ObjectMark(_name) {
  var _indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  (0, _classCallCheck2["default"])(this, ObjectMark);
  this.name = _name;
  this.indent = _indent;
};

var ObjectProperty = /*#__PURE__*/function () {
  function ObjectProperty(_name) {
    var _value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var _mapProperty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    (0, _classCallCheck2["default"])(this, ObjectProperty);
    this.name = _name;
    this.value = _value;
    this.mapProperty = _mapProperty;
  }

  (0, _createClass2["default"])(ObjectProperty, [{
    key: "set",
    value: function set(_value) {
      if (typeof _value === "string") this.name = _value;else if (typeof _value === "number") this.value = _value;
      return this;
    }
  }]);
  return ObjectProperty;
}();

module.exports = {
  ObjectProperty: ObjectProperty,
  ObjectMark: ObjectMark,
  ObjectGLEnum: ObjectGLEnum
};

},{"m_10":4,"M_11":5,"o_9":8}],26:[function(require,module,exports){
"use strict";

var LEVELS = {
  LOG: 1,
  WARN: 2,
  ERROR: 3,
  FATAL: 4
};
var logHandler = null;

function applyLog(message, level) {
  var messagePrefix = "";

  if (level > LEVELS.LOG) {
    messagePrefix = Object.keys(LEVELS).filter(function (key) {
      return LEVELS[key] === level;
    }) + " : ";
  }

  if (level >= Log.level) {
    console.log(messagePrefix + message);
  }

  if (logHandler) {
    try {
      logHandler(message, level);
    } catch (e) {}
  }
}

var Log = function Log(message) {
  return applyLog(message, LEVELS.LOG);
};

Log.log = function (message) {
  return applyLog(message, LEVELS.LOG);
};

Log.warn = function (message) {
  return applyLog(message, LEVELS.WARN);
};

Log.error = function (message) {
  return applyLog(message, LEVELS.ERROR);
};

Log.fatal = function (message) {
  return applyLog(message, LEVELS.FATAL);
};

Log.setLogLog = function () {
  Log.level = LEVELS.LOG;
};

Log.setLogWarn = function () {
  Log.level = LEVELS.WARN;
};

Log.setLogError = function () {
  Log.level = LEVELS.ERROR;
};

Log.setLogFatal = function () {
  Log.level = LEVELS.FATAL;
};

Log.setLogOff = function () {
  Log.level = Number.MAX_VALUE;
}; // Default logger - Warning


Log.level = LEVELS.WARN;
module.exports = Log;

},{}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _toConsumableArray2 = _interopRequireDefault(require("3_16"));

var Group = require("D_17");
/**
 * Sync function for traversing threw all the OSG tree
 * @param {Node} node 
 * @param {Function} callback 
 */


function traverse(rootNode, callback) {
  var nodes = [rootNode];
  var index = 0;

  while (index < nodes.length) {
    var node = nodes[index++];
    callback(node);

    if (node instanceof Group) {
      nodes.push.apply(nodes, (0, _toConsumableArray2["default"])(node.Children)); // Pushes all children 
    }
  }
}

module.exports = traverse;

},{"D_17":55,"o_9":8,"3_16":13}],28:[function(require,module,exports){
"use strict";

module.exports = {
  ByteArray: 0,
  UByteArray: 1,
  ShortArray: 2,
  UShortArray: 3,
  IntArray: 4,
  UIntArray: 5,
  FloatArray: 6,
  DoubleArray: 7,
  Vec2bArray: 8,
  Vec3bArray: 9,
  Vec4bArray: 10,
  Vec2ubArray: 21,
  Vec3ubArray: 22,
  Vec4ubArray: 11,
  Vec2sArray: 12,
  Vec3sArray: 13,
  Vec4sArray: 14,
  Vec2usArray: 23,
  Vec3usArray: 24,
  Vec4usArray: 25,
  Vec2fArray: 15,
  Vec3fArray: 16,
  Vec4fArray: 17,
  Vec2dArray: 18,
  Vec3dArray: 19,
  Vec4dArray: 20,
  Vec2iArray: 26,
  Vec3iArray: 27,
  Vec4iArray: 28,
  Vec2uiArray: 29,
  Vec3uiArray: 30,
  Vec4uiArray: 31
};

},{}],29:[function(require,module,exports){
"use strict";

var GLEnum = require("._18");

module.exports = {
  FRONT: GLEnum.FRONT,
  BACK: GLEnum.BACK,
  FRONT_AND_BACK: GLEnum.FRONT_AND_BACK
};

},{"._18":30}],30:[function(require,module,exports){
"use strict";

module.exports = {
  // Modes
  GL_ALPHA_TEST: 0x0BC0,
  GL_BLEND: 0x0BE2,
  GL_COLOR_LOGIC_OP: 0x0BF2,
  GL_COLOR_MATERIAL: 0x0B57,
  GL_CULL_FACE: 0x0B44,
  GL_DEPTH_TEST: 0x0B71,
  GL_FOG: 0x0B60,
  GL_FRAGMENT_PROGRAM_ARB: 0x8804,
  GL_LINE_STIPPLE: 0x0B24,
  GL_POINT_SMOOTH: 0x0B10,
  GL_POINT_SPRITE_ARB: 0x8861,
  GL_POLYGON_OFFSET_FILL: 0x8037,
  GL_POLYGON_OFFSET_LINE: 0x2A02,
  GL_POLYGON_OFFSET_POINT: 0x2A01,
  GL_POLYGON_STIPPLE: 0x0B42,
  GL_SCISSOR_TEST: 0x0C11,
  GL_STENCIL_TEST: 0x0B90,
  GL_STENCIL_TEST_TWO_SIDE: 0x8910,
  GL_VERTEX_PROGRAM_ARB: 0x8620,
  GL_COLOR_SUM: 0x8458,
  GL_LIGHTING: 0x0B50,
  GL_NORMALIZE: 0x0BA1,
  GL_RESCALE_NORMAL: 0x803A,
  GL_TEXTURE_1D: 0x0DE0,
  GL_TEXTURE_2D: 0x0DE1,
  GL_TEXTURE_3D: 0x806F,
  GL_TEXTURE_CUBE_MAP: 0x8513,
  GL_TEXTURE_RECTANGLE: 0x84F5,
  GL_TEXTURE_GEN_Q: 0x0C63,
  GL_TEXTURE_GEN_R: 0x0C62,
  GL_TEXTURE_GEN_S: 0x0C60,
  GL_TEXTURE_GEN_T: 0x0C61,
  GL_CLIP_PLANE0: 0x3000,
  GL_CLIP_PLANE1: 0x3001,
  GL_CLIP_PLANE2: 0x3002,
  GL_CLIP_PLANE3: 0x3003,
  GL_CLIP_PLANE4: 0x3004,
  GL_CLIP_PLANE5: 0x3005,
  GL_LIGHT0: 0x4000,
  GL_LIGHT1: 0x4001,
  GL_LIGHT2: 0x4002,
  GL_LIGHT3: 0x4003,
  GL_LIGHT4: 0x4004,
  GL_LIGHT5: 0x4005,
  GL_LIGHT6: 0x4006,
  GL_LIGHT7: 0x4007,
  GL_VERTEX_PROGRAM_POINT_SIZE: 0x8642,
  GL_VERTEX_PROGRAM_TWO_SIDE: 0x8643,
  // Functions
  NEVER: 0x0200,
  LESS: 0x0201,
  EQUAL: 0x0202,
  LEQUAL: 0x0203,
  GREATER: 0x0204,
  NOTEQUAL: 0x0205,
  GEQUAL: 0x0206,
  ALWAYS: 0x0207,
  // Texture environment states
  REPLACE: 0x1E01,
  MODULATE: 0x2100,
  ADD: 0x0104,
  ADD_SIGNED: 0x8574,
  INTERPOLATE: 0x8575,
  SUBTRACT: 0x84E7,
  DOT3_RGB: 0x86AE,
  DOT3_RGBA: 0x86AF,
  CONSTANT: 0x8576,
  PRIMARY_COLOR: 0x8577,
  PREVIOUS: 0x8578,
  TEXTURE: 0x1702,
  TEXTURE0: 0x84C0,
  TEXTURE1: 0x84C1,
  TEXTURE2: 0x84C2,
  TEXTURE3: 0x84C3,
  TEXTURE4: 0x84C4,
  TEXTURE5: 0x84C5,
  TEXTURE6: 0x84C6,
  TEXTURE7: 0x84C7,
  // Texture clamp modes
  CLAMP: 0x2900,
  CLAMP_TO_EDGE: 0x812F,
  CLAMP_TO_BORDER: 0x812D,
  REPEAT: 0x2901,
  MIRROR: 0x8370,
  // Texture filter modes
  LINEAR: 0x2601,
  LINEAR_MIPMAP_LINEAR: 0x2703,
  LINEAR_MIPMAP_NEAREST: 0x2701,
  NEAREST: 0x2600,
  NEAREST_MIPMAP_LINEAR: 0x2702,
  NEAREST_MIPMAP_NEAREST: 0x2700,
  // Texture formats
  GL_INTENSITY: 0x8049,
  GL_LUMINANCE: 0x1909,
  GL_ALPHA: 0x1906,
  GL_LUMINANCE_ALPHA: 0x190A,
  GL_RGB: 0x1907,
  GL_RGBA: 0x1908,
  GL_COMPRESSED_ALPHA_ARB: 0x84E9,
  GL_COMPRESSED_LUMINANCE_ARB: 0x84EA,
  GL_COMPRESSED_INTENSITY_ARB: 0x84EC,
  GL_COMPRESSED_LUMINANCE_ALPHA_ARB: 0x84EB,
  GL_COMPRESSED_RGB_ARB: 0x84ED,
  GL_COMPRESSED_RGBA_ARB: 0x84EE,
  GL_COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0,
  GL_COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1,
  GL_COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2,
  GL_COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3,
  GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00,
  GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01,
  GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02,
  GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03,
  GL_ETC1_RGB8_OES: 0x8D64,
  GL_COMPRESSED_RGB8_ETC2: 0x9274,
  GL_COMPRESSED_SRGB8_ETC2: 0x9275,
  GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276,
  GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277,
  GL_COMPRESSED_RGBA8_ETC2_EAC: 0x9278,
  GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279,
  GL_COMPRESSED_R11_EAC: 0x9270,
  GL_COMPRESSED_SIGNED_R11_EAC: 0x9271,
  GL_COMPRESSED_RG11_EAC: 0x9272,
  GL_COMPRESSED_SIGNED_RG11_EAC: 0x9273,
  // Texture source types
  GL_BYTE: 0x1400,
  GL_SHORT: 0x1402,
  GL_INT: 0x1404,
  GL_FLOAT: 0x1406,
  GL_DOUBLE: 0x140A,
  GL_UNSIGNED_BYTE: 0x1401,
  GL_UNSIGNED_SHORT: 0x1403,
  GL_UNSIGNED_INT: 0x1405,
  // Blend values
  DST_ALPHA: 0x0304,
  DST_COLOR: 0x0306,
  ONE: 1,
  ONE_MINUS_DST_ALPHA: 0x0305,
  ONE_MINUS_DST_COLOR: 0x0307,
  ONE_MINUS_SRC_ALPHA: 0x0303,
  ONE_MINUS_SRC_COLOR: 0x0301,
  SRC_ALPHA: 0x0302,
  SRC_ALPHA_SATURATE: 0x0308,
  SRC_COLOR: 0x0300,
  CONSTANT_COLOR: 0x8001,
  ONE_MINUS_CONSTANT_COLOR: 0x8002,
  CONSTANT_ALPHA: 0x8003,
  ONE_MINUS_CONSTANT_ALPHA: 0x8004,
  ZERO: 0,
  // Fog coordinate sources
  COORDINATE: 0x8451,
  DEPTH: 0x8452,
  // Hint targets
  FOG_HINT: 0x0C54,
  GENERATE_MIPMAP_HINT: 0x8192,
  LINE_SMOOTH_HINT: 0x0C52,
  PERSPECTIVE_CORRECTION_HINT: 0x0C50,
  POINT_SMOOTH_HINT: 0x0C51,
  POLYGON_SMOOTH_HINT: 0x0C53,
  TEXTURE_COMPRESSION_HINT: 0x84EF,
  FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B,
  // Polygon modes
  POINT: 0x1B00,
  LINE: 0x1B01,
  FILL: 0x1B00,
  // Misc
  BACK: 0x0405,
  FRONT: 0x0404,
  FRONT_AND_BACK: 0x0408,
  FIXED_ONLY: 0x891D,
  FASTEST: 0x1101,
  NICEST: 0x1101,
  DONT_CARE: 0x1100
};

},{}],31:[function(require,module,exports){
"use strict";

module.exports = {
  USE_BOUNDING_SPHERE_CENTER: 0,
  USER_DEFINED_CENTER: 1,
  UNION_OF_BOUNDING_SPHERE_AND_USER_DEFINED: 2
};

},{}],32:[function(require,module,exports){
"use strict";

module.exports = {
  DISTANCE_FROM_EYE_POINT: 0,
  PIXEL_SIZE_ON_SCREEN: 1
};

},{}],33:[function(require,module,exports){
"use strict";

module.exports = {
  AMBIENT: 0x1200,
  DIFFUSE: 0x1201,
  SPECULAR: 0x1202,
  EMISSION: 0x1600,
  AMBIENT_AND_DIFFUSE: 0x1602,
  OFF: 0x1602 + 1
};

},{}],34:[function(require,module,exports){
"use strict";

module.exports = {
  DYNAMIC: 0,
  STATIC: 1,
  UNSPECIFIED: 2
};

},{}],35:[function(require,module,exports){
"use strict";

module.exports = {
  DrawArrays: 50,
  DrawArraysLength: 51,
  DrawElementsUByte: 52,
  DrawElementsUShort: 53,
  DrawElementsUInt: 54,
  GL_POINTS: 0x0000,
  GL_LINES: 0x0001,
  GL_LINE_STRIP: 0x0003,
  GL_LINE_LOOP: 0x0002,
  GL_TRIANGLES: 0x0004,
  GL_TRIANGLE_STRIP: 0x0005,
  GL_TRIANGLE_FAN: 0x0006,
  GL_QUADS: 0x0007,
  GL_QUAD_STRIP: 0x0008,
  GL_POLYGON: 0x0009,
  GL_LINES_ADJACENCY: 0x000A,
  GL_LINES_ADJACENCY_EXT: 0x000A,
  GL_LINE_STRIP_ADJACENCY_EXT: 0x000B,
  GL_LINE_STRIP_ADJACENCY: 0x000B,
  GL_TRIANGLES_ADJACENCY: 0x000C,
  GL_TRIANGLES_ADJACENCY_EXT: 0x000C,
  GL_TRIANGLE_STRIP_ADJACENCY: 0x000D,
  GL_TRIANGLE_STRIP_ADJACENCY_EXT: 0x000D,
  GL_PATCHES: 0x000E
};

},{}],36:[function(require,module,exports){
"use strict";

var Constants = require("C_19");

module.exports = {
  ConstantsFLAT: 0x1D00,
  SMOOTH: 0x1D01
};

},{"C_19":24}],37:[function(require,module,exports){
"use strict";

module.exports = {
  /** means that associated GLMode and Override is disabled.*/
  OFF: 0,

  /** means that associated GLMode is enabled and Override is disabled.*/
  ON: 1,

  /** Overriding of GLMode's or StateAttributes is enabled, so that state below it is overridden.*/
  OVERRIDE: 2,

  /** Protecting of GLMode's or StateAttributes is enabled, so that state from above cannot override this and below state.*/
  PROTECTED: 4,

  /** means that GLMode or StateAttribute should be inherited from above.*/
  INHERIT: 8
};

},{}],38:[function(require,module,exports){
"use strict";

module.exports = {
  INHERIT_RENDERBIN_DETAILS: 0,
  USE_RENDERBIN_DETAILS: 1,
  OVERRIDE_RENDERBIN_DETAILS: 2,
  PROTECTED_RENDERBIN_DETAILS: 4,
  OVERRIDE_PROTECTED_RENDERBIN_DETAILS: 6
};

},{}],39:[function(require,module,exports){
"use strict";

module.exports = {
  DEFAULT_BIN: 0,
  OPAQUE_BIN: 1,
  TRANSPARENT_BIN: 2
};

},{}],40:[function(require,module,exports){
"use strict";

module.exports = {
  USE_IMAGE_DATA_FORMAT: 0,
  USE_USER_DEFINED_FORMAT: 1,
  USE_ARB_COMPRESSION: 2,
  USE_S3TC_DXT1_COMPRESSION: 3,
  USE_S3TC_DXT3_COMPRESSION: 4,
  USE_S3TC_DXT5_COMPRESSION: 5,
  USE_PVRTC_2BPP_COMPRESSION: 6,
  USE_PVRTC_4BPP_COMPRESSION: 7,
  USE_ETC_COMPRESSION: 8,
  USE_ETC2_COMPRESSION: 9,
  USE_RGTC1_COMPRESSION: 10,
  USE_RGTC2_COMPRESSION: 11,
  USE_S3TC_DXT1c_COMPRESSION: 12,
  USE_S3TC_DXT1a_COMPRESSION: 13
};

},{}],41:[function(require,module,exports){
"use strict";

module.exports = {
  NEVER: 0x0200,
  LESS: 0x0201,
  EQUAL: 0x0202,
  LEQUAL: 0x0203,
  GREATER: 0x0204,
  NOTEQUAL: 0x0205,
  GEQUAL: 0x0206,
  ALWAYS: 0x0207
};

},{}],42:[function(require,module,exports){
"use strict";

module.exports = {
  LUMINANCE: 0x1909,
  INTENSITY: 0x8049,
  ALPHA: 0x1906,
  NONE: 0x0000
};

},{}],43:[function(require,module,exports){
"use strict";

module.exports = {
  RELATIVE_RF: 0,
  ABSOLUTE_RF: 1,
  ABSOLUTE_RF_INHERIT_VIEWPOINT: 2
};

},{}],44:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StreamOperator = require("-_26");

var ObjectWrapperManager = require("3_27");

var GLEnum = require("D_28");

var Log = require("._29");

var separatorChars = "\0\t\r\n\f ";
var separatorCharsObject = {};

for (var i = 0; i < separatorChars.length; i++) {
  separatorCharsObject[separatorChars.charCodeAt(i)] = true;
}

function lookAtChar(that, position) {
  return that._buffer.toString("ASCII", position, position + 1);
}

function isSeparatorChar(buffer, index) {
  index = index || 0;

  if (typeof buffer === 'string') {
    return !!separatorCharsObject[buffer.charCodeAt(index)];
  }

  return !!separatorCharsObject[buffer[index]];
}

function skipGaps(that) {
  while (that._position <= that._buffer.length && isSeparatorChar(that._buffer, that._position)) {
    that._position++;
  }
}

function readIntNumber(that) {
  var word = that.readString();
  return parseInt(word);
}

function readFloatNumber(that) {
  var word = that.readString();
  return parseFloat(word);
}

function isEndlChar(buffer, index) {
  index = index || 0;
  var charCode;

  if (typeof buffer === 'string') {
    charCode = buffer.charCodeAt(index);
  } else {
    charCode = buffer[index];
  }

  return charCode === 10 || charCode === 13;
}

var AsciiStreamOperator = /*#__PURE__*/function (_StreamOperator) {
  (0, _inherits2["default"])(AsciiStreamOperator, _StreamOperator);

  var _super = _createSuper(AsciiStreamOperator);

  function AsciiStreamOperator(buffer, initPosition) {
    var _this;

    (0, _classCallCheck2["default"])(this, AsciiStreamOperator);
    _this = _super.call(this, "AsciiStreamOperator");
    _this._buffer = buffer;
    _this._position = initPosition;
    _this.version = -1;
    return _this;
  }

  (0, _createClass2["default"])(AsciiStreamOperator, [{
    key: "isBinary",
    value: function isBinary() {
      return false;
    }
  }, {
    key: "advanceToCurrentEndBracket",
    value: function advanceToCurrentEndBracket() {
      var passString,
          blocks = 0;

      while (this._position < this._buffer.length) {
        passString = this.readString();

        if (passString === "}") {
          if (blocks <= 0) return;else blocks--;
        } else if (passString === "{") blocks++;
      }
    }
  }, {
    key: "readBool",
    value: function readBool() {
      var boolString = this.readString();
      return boolString === "TRUE";
    }
  }, {
    key: "readUInt",
    value: function readUInt() {
      return readIntNumber(this);
    }
  }, {
    key: "readInt",
    value: function readInt() {
      return readIntNumber(this);
    }
  }, {
    key: "readUShort",
    value: function readUShort() {
      return readIntNumber(this);
    }
  }, {
    key: "readShort",
    value: function readShort() {
      return readIntNumber(this);
    }
  }, {
    key: "readUByte",
    value: function readUByte() {
      return readIntNumber(this);
    }
  }, {
    key: "readByte",
    value: function readByte() {
      return readIntNumber(this);
    }
  }, {
    key: "readFloat",
    value: function readFloat() {
      return readFloatNumber(this);
    }
  }, {
    key: "readDouble",
    value: function readDouble() {
      return readFloatNumber(this);
    }
  }, {
    key: "readHex",
    value: function readHex() {
      var word = this.readString();
      word = word.reaplace("0x", "");
      return parseInt(word, 16);
    }
  }, {
    key: "matchString",
    value: function matchString(str) {
      var currentPosition = this._position;
      var word = this.readString();

      if (str === word) {
        return true;
      } else {
        this._position = currentPosition;
        return false;
      }
    }
  }, {
    key: "lookForward",
    value: function lookForward() {
      var currentPosition = this._position;
      var word = this.readString();
      this._position = currentPosition;
      return word;
    }
  }, {
    key: "goToNextRow",
    value: function goToNextRow() {
      while (this._position <= this._buffer.length && !isEndlChar(this._buffer, this._position)) {
        this._position++;
      }
    }
  }, {
    key: "readChar",
    value: function readChar() {
      skipGaps(this);
      this._position += 1;
      return this._buffer.toString("ASCII", this._position - 1, this._position);
    }
  }, {
    key: "readString",
    value: function readString() {
      skipGaps(this);
      var endPosition = this._position;

      while (endPosition <= this._buffer.length && !isSeparatorChar(this._buffer, endPosition)) {
        endPosition++;
      }

      var word = this._buffer.toString('ASCII', this._position, endPosition);

      this._position = endPosition;
      return word;
    }
  }, {
    key: "readWrappedString",
    value: function readWrappedString() {
      skipGaps(this);
      var ch = lookAtChar(this, this._position);

      if (ch === '"') {
        var endPosition = this._position;

        while (endPosition <= this._buffer.length && lookAtChar(this, endPosition) !== '"') {
          endPosition++;
        }

        var word = this._buffer.toString('ASCII', this._position, endPosition);

        this._position = endPosition + 1;
        return word;
      } else {
        this.readString();
      }
    }
  }, {
    key: "readGLEnum",
    value: function readGLEnum(objectGLEnum) {
      var enumString = this.readString();
      if (!objectGLEnum.hasOwnProperty(enumString)) Log.warn("readGLEnum: " + enumString + " enum not found");
      objectGLEnum.value = GLEnum[enumString];
    }
  }, {
    key: "readObjectMark",
    value: function readObjectMark(mark) {
      var word = this.readString();

      if (mark.name !== word) {
        Log.warn("AsciiStreamOperator.readObjectMark mismatch: expecting " + mark.name + ", actual: " + word);
      }
    }
  }, {
    key: "readObjectProperty",
    value: function readObjectProperty(prop) {
      var value = 0,
          enumString = this.readString();

      if (prop.mapProperty) {
        value = ObjectWrapperManager.getValue(prop.name, enumString);
      } else {
        if (prop.name !== enumString) throw "Unmatched property: Expected '".concat(prop.name, "' Found ").concat(enumString);
      }

      prop.set(value);
    }
  }]);
  return AsciiStreamOperator;
}(StreamOperator);

module.exports = AsciiStreamOperator;

},{"._29":26,"D_28":30,"3_27":79,"-_26":48,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],45:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// StreamOperator = require("-_26");
// Log = require("._29");
var StreamOperator = require("-_26");

var Log = require("._29");

var buffer = require('buffer');

var BinaryStreamOperator = /*#__PURE__*/function (_StreamOperator) {
  (0, _inherits2["default"])(BinaryStreamOperator, _StreamOperator);

  var _super = _createSuper(BinaryStreamOperator);

  function BinaryStreamOperator(buffer, initPosition) {
    var _this;

    (0, _classCallCheck2["default"])(this, BinaryStreamOperator);
    _this = _super.call(this, "BinaryStreamOperator");
    _this.supportBinaryBrackets = false;
    _this.version = -1;
    _this._buffer = buffer;
    _this._position = initPosition;
    _this._beginPositions = [];
    _this._blockSizes = [];
    return _this;
  }

  (0, _createClass2["default"])(BinaryStreamOperator, [{
    key: "isBinary",
    value: function isBinary() {
      return true;
    }
  }, {
    key: "advanceToCurrentEndBracket",
    value: function advanceToCurrentEndBracket() {
      if (this.supportBinaryBrackets && this._beginPositions.length > 0) {
        var position = this._beginPositions.pop();

        position += this._blockSizes.pop();
        this._position = position;
      }
    }
  }, {
    key: "readObjectProperty",
    value: function readObjectProperty(prop) {
      var value = 0;
      if (prop.mapProperty) value = this.readInt();
      prop.set(value);
    }
  }, {
    key: "readObjectMark",
    value: function readObjectMark(mark) {
      if (this.supportBinaryBrackets) {
        if (mark.name === "{") {
          this._beginPositions.push(this._position);

          if (this.version !== -1 && this.version > 148) {
            // 64bit size
            var sizeLow = this.readInt();
            var sizeHigh = this.readInt();
            if (sizeHigh > Math.pow(2, 21)) throw "Too high value - size of file. nodeJS can manage 2^53 numbers only";
            var size = Math.pow(2, 32) * sizeHigh + sizeLow;

            this._blockSizes.push(size);
          } else {
            var _size = this.readInt();

            this._blockSizes.push(_size);
          }
        } else if (mark.name === "}" && this._beginPositions.length > 0) {
          this._beginPositions.pop();

          this._blockSizes.pop();
        }
      }
    }
  }, {
    key: "readBool",
    value: function readBool() {
      var ch = this.readChar().charCodeAt(0);
      if (ch > 1) Log.warn("found boolean who is not 0 or 1 - " + ch + ". may indicate failure in reading binary");
      return ch !== 0;
    }
  }, {
    key: "readByte",
    value: function readByte() {
      this._position += 1;
      return this._buffer.readInt8(this._position - 1);
    }
  }, {
    key: "readUByte",
    value: function readUByte() {
      this._position += 1;
      return this._buffer.readUInt8(this._position - 1);
    }
  }, {
    key: "readShort",
    value: function readShort() {
      this._position += 2;
      return this._buffer.readInt16LE(this._position - 2);
    }
  }, {
    key: "readUShort",
    value: function readUShort() {
      this._position += 2;
      return this._buffer.readUInt16LE(this._position - 2);
    }
  }, {
    key: "readInt",
    value: function readInt() {
      this._position += 4;
      return this._buffer.readInt32LE(this._position - 4);
    }
  }, {
    key: "readUInt",
    value: function readUInt() {
      this._position += 4;
      return this._buffer.readUInt32LE(this._position - 4);
    }
  }, {
    key: "readFloat",
    value: function readFloat() {
      this._position += 4;
      return this._buffer.readFloatLE(this._position - 4);
    }
  }, {
    key: "readDouble",
    value: function readDouble() {
      this._position += 8;
      return this._buffer.readDoubleLE(this._position - 8);
    }
  }, {
    key: "readChar",
    value: function readChar() {
      this._position += 1;
      return this._buffer.toString("ASCII", this._position - 1, this._position);
    }
  }, {
    key: "readString",
    value: function readString() {
      var size = this.readUInt();
      this._position += size;
      return this._buffer.toString("ASCII", this._position - size, this._position);
    }
  }, {
    key: "readWrappedString",
    value: function readWrappedString() {
      return this.readString();
    }
  }, {
    key: "readGLEnum",
    value: function readGLEnum(objectGLEnum) {
      objectGLEnum.value = this.readUInt();
    }
  }, {
    key: "readBuffer",
    value: function readBuffer(size) {
      var subBuffer; // = new Buffer(size);

      if (typeof Buffer != 'undefined') {
        subBuffer = Buffer.alloc ? Buffer.alloc(size) : new Buffer(size);
      } else {
        subBuffer = buffer.Buffer.alloc(size);
      }

      this._buffer.copy(subBuffer, 0, this._position, this._position + size);

      this._position += size;
      return subBuffer;
    }
  }]);
  return BinaryStreamOperator;
}(StreamOperator);

module.exports = BinaryStreamOperator;

}).call(this)}).call(this,require("buffer").Buffer)

},{"._29":26,"-_26":48,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11,"buffer":18}],46:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

require("m_43");

var ObjectWrapperManager = require("3_27");

var DataTypes = require("e_45");

var Constants = require("C_19");

var Image = require("h_47");

var _require = require("e_45"),
    ObjectProperty = _require.ObjectProperty;

var Log = require("._29");

var Base64Encoder = require("D_50"); // const path = require('path');


var IMAGE_INLINE_DATA = 0;
var IMAGE_INLINE_FILE = 1;
var IMAGE_EXTERNAL = 2;
var IMAGE_WRITE_OUT = 3;

var InputStream = /*#__PURE__*/function () {
  function InputStream(path, inputOperator) {
    (0, _classCallCheck2["default"])(this, InputStream);

    /**
     * @type StreamOperator
     */
    this.filePath = path;
    this.inputOperator = inputOperator;
    this._identifierMap = {};
    this._arrayMap = {};
    this._fields = [];
    this.typeReaderMap = {};
    this.PROPERTY = new DataTypes.ObjectProperty();
    this.BEGIN_BRACKET = new DataTypes.ObjectMark("{", +Constants.INDENT_VALUE);
    this.END_BRACKET = new DataTypes.ObjectMark("}", -Constants.INDENT_VALUE);
  }

  (0, _createClass2["default"])(InputStream, [{
    key: "readObject",
    value: function readObject(existingObj) {
      var className = this.inputOperator.readString();
      if (className === "NULL") return null;
      this.readBeginBracket();
      this.readProperty("UniqueID");
      var obj,
          id = this.inputOperator.readUInt();

      if (this._identifierMap[id]) {
        this.advanceToCurrentEndBracket();
        obj = this._identifierMap[id];
      } else {
        obj = this.readObjectFields(className, id, existingObj);
        this.advanceToCurrentEndBracket();
      }

      return obj;
    }
  }, {
    key: "readObjectOfType",
    value: function readObjectOfType() {
      return this.readObject();
    }
  }, {
    key: "readBeginBracket",
    value: function readBeginBracket() {
      this.inputOperator.readObjectMark(this.BEGIN_BRACKET);
    }
  }, {
    key: "readEndBracket",
    value: function readEndBracket() {
      this.inputOperator.readObjectMark(this.END_BRACKET);
    }
  }, {
    key: "readMatrix",
    value: function readMatrix(type) {
      var reader = this.getTypeReader(type);
      var arr = [];

      for (var i = 0; i < 16; i++) {
        arr.push(reader());
      }

      return arr;
    }
  }, {
    key: "readPrimitiveSet",
    value: function readPrimitiveSet() {
      if (this.getVersion() >= 112) return this.readObjectOfType("osg::PrimitiveSet");else {
        var numInstances = 0,
            primitive = null;
        var type = new ObjectProperty("PrimitiveType", 0, true);

        var _mode = new ObjectProperty("PrimitiveType", 0, true);

        this.inputOperator.readObjectProperty(type);
        this.inputOperator.readObjectProperty(_mode);
        if (this.getVersion() > 96) numInstances = this.inputOperator.readUInt();

        if (type.value === Constants.TypeIds.ID_DRAWARRAYS) {
          var first = this.inputOperator.readInt();
          var count = this.inputOperator.readInt();
          primitive = {
            // osg::DrawArrays
            first: first,
            count: count,
            value: _mode.value,
            numInstances: numInstances
          };
        } else if (type.value === Constants.TypeIds.ID_DRAWARRAY_LENGTH) {
          var _first = this.inputOperator.readInt();

          var size = this.inputOperator.readUInt();
          this.readBeginBracket();
          primitive = {
            // osg::DrawArrayLengths
            first: _first,
            value: _mode.value,
            data: [],
            numInstances: numInstances
          };

          for (var i = 0; i < size; i++) {
            primitive.data.push(this.inputOperator.readInt());
          }

          this.readEndBracket();
        } else if (type.value === Constants.TypeIds.ID_DRAWELEMENTS_UBYTE) {
          primitive = {
            // osg::DrawElementsUByte
            value: _mode.value,
            data: [],
            numInstances: numInstances
          };

          var _size = this.inputOperator.readUInt();

          this.readBeginBracket();

          for (var _i = 0; _i < _size; _i++) {
            primitive.data.push(this.inputOperator.readUByte());
          }

          this.readEndBracket();
        } else if (type.value === Constants.TypeIds.ID_DRAWELEMENTS_USHORT) {
          primitive = {
            // osg::DrawElementsUShort
            value: _mode.value,
            data: [],
            numInstances: numInstances
          };

          var _size2 = this.inputOperator.readUInt();

          this.readBeginBracket();

          for (var _i2 = 0; _i2 < _size2; _i2++) {
            primitive.data.push(this.inputOperator.readUShort());
          }

          this.readEndBracket();
        } else if (type.value === Constants.TypeIds.ID_DRAWELEMENTS_UINT) {
          primitive = {
            // osg::DrawElementsUInt
            value: _mode.value,
            data: [],
            numInstances: numInstances
          };

          var _size3 = this.inputOperator.readUInt();

          this.readBeginBracket();

          for (var _i3 = 0; _i3 < _size3; _i3++) {
            primitive.data.push(this.inputOperator.readUInt());
          }

          this.readEndBracket();
        } else {
          throw "InputStream.readPrimitiveSet: " + type.value + " ID not found";
        }

        return primitive;
      }
    }
  }, {
    key: "readProperty",
    value: function readProperty(value) {
      this.inputOperator.readObjectProperty(this.PROPERTY.set(value));
    }
  }, {
    key: "getTypeReader",
    value: function getTypeReader(type) {
      if (this.typeReaderMap[type]) {
        return this.typeReaderMap[type];
      }

      var funcName = "read" + type;
      var reader; // if the function exists in the InputOperator

      var typeReaderFunction = this.inputOperator[funcName];
      if (typeReaderFunction) reader = typeReaderFunction.bind(this.inputOperator); // if the function exists in the InputStream

      typeReaderFunction = this[funcName];
      if (typeReaderFunction) reader = typeReaderFunction.bind(this);

      if (reader) {
        this.typeReaderMap[type] = reader;
        return reader;
      }

      throw "reader type: " + type + " not found";
    }
  }, {
    key: "readVectorFromReader",
    value: function readVectorFromReader(size, reader) {
      var arr = []; // todo when reading array of vectors - maybe use single array fot all

      for (var i = 0; i < size; i++) {
        arr.push(reader());
      }

      return arr;
    }
  }, {
    key: "readVectorOfType",
    value: function readVectorOfType(size, type) {
      return this.readVectorFromReader(size, this.getTypeReader(type));
    }
  }, {
    key: "readArray",
    value: function readArray() {
      var _this = this;

      var array = null;
      this.readProperty("ArrayID");
      var id = this.inputOperator.readUInt("ArrayID");
      if (this._arrayMap[id]) return this._arrayMap[id];
      var type = new ObjectProperty("ArrayType", 0, true);
      this.inputOperator.readObjectProperty(type);
      var io = this.inputOperator;

      if (type.value === Constants.TypeIds.ID_BYTE_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readByte();
        });
      } else if (type.value === Constants.TypeIds.ID_UBYTE_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readUByte();
        });
      } else if (type.value === Constants.TypeIds.ID_SHORT_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readShort();
        });
      } else if (type.value === Constants.TypeIds.ID_USHORT_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readUShort();
        });
      } else if (type.value === Constants.TypeIds.ID_INT_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readInt();
        });
      } else if (type.value === Constants.TypeIds.ID_UINT_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readUInt();
        });
      } else if (type.value === Constants.TypeIds.ID_FLOAT_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readFloat();
        });
      } else if (type.value === Constants.TypeIds.ID_DOUBLE_ARRAY) {
        array = this.readArrayImplementation(function () {
          return io.readDouble();
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2B_ARRAY) {
        var reader = this.getTypeReader("Byte");
        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, reader);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3B_ARRAY) {
        var _reader = this.getTypeReader("Byte");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4B_ARRAY) {
        var _reader2 = this.getTypeReader("Byte");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader2);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2UB_ARRAY) {
        var _reader3 = this.getTypeReader("UByte");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, _reader3);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3UB_ARRAY) {
        var _reader4 = this.getTypeReader("UByte");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader4);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4UB_ARRAY) {
        var _reader5 = this.getTypeReader("UByte");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader5);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2S_ARRAY) {
        var _reader6 = this.getTypeReader("Short");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, _reader6);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3S_ARRAY) {
        var _reader7 = this.getTypeReader("Short");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader7);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4S_ARRAY) {
        var _reader8 = this.getTypeReader("Short");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader8);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2US_ARRAY) {
        var _reader9 = this.getTypeReader("UShort");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, _reader9);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3US_ARRAY) {
        var _reader10 = this.getTypeReader("UShort");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader10);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4US_ARRAY) {
        var _reader11 = this.getTypeReader("UShort");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader11);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2_ARRAY) {
        var _reader12 = this.getTypeReader("Float");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, _reader12);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3_ARRAY) {
        var _reader13 = this.getTypeReader("Float");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader13);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4_ARRAY) {
        var _reader14 = this.getTypeReader("Float");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader14);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2D_ARRAY) {
        var _reader15 = this.getTypeReader("Double");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, _reader15);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3D_ARRAY) {
        var _reader16 = this.getTypeReader("Double");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader16);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4D_ARRAY) {
        var _reader17 = this.getTypeReader("Double");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader17);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2I_ARRAY) {
        var _reader18 = this.getTypeReader("Int");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, _reader18);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3I_ARRAY) {
        var _reader19 = this.getTypeReader("Int");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader19);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4I_ARRAY) {
        var _reader20 = this.getTypeReader("Int");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader20);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC2UI_ARRAY) {
        var _reader21 = this.getTypeReader("UInt");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(2, _reader21);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC3UI_ARRAY) {
        var _reader22 = this.getTypeReader("UInt");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(3, _reader22);
        });
      } else if (type.value === Constants.TypeIds.ID_VEC4UI_ARRAY) {
        var _reader23 = this.getTypeReader("UInt");

        array = this.readArrayImplementation(function () {
          return _this.readVectorFromReader(4, _reader23);
        });
      } else {
        throw "InputStream.readArray(): Unsupported array type.";
      }

      this._arrayMap[id] = array;
      return array;
    }
  }, {
    key: "readArrayImplementation",
    value: function readArrayImplementation(readFunction) {
      var size = this.inputOperator.readInt();
      this.readBeginBracket();
      var arr = [];

      if (size > 0) {
        // presets the size of arr so the array will not be extended with every push
        arr[size - 1] = null;

        for (var i = 0; i < size; i++) {
          arr[i] = readFunction();
        }
      }

      this.readEndBracket();
      return arr;
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      // domain currently not implemented
      return this.inputOperator.version;
    }
  }, {
    key: "advanceToCurrentEndBracket",
    value: function advanceToCurrentEndBracket() {
      this.inputOperator.advanceToCurrentEndBracket();
    }
  }, {
    key: "isBinary",
    value: function isBinary() {
      return this.inputOperator.isBinary();
    }
  }, {
    key: "readObjectFields",
    value: function readObjectFields(classname, id, existingObj) {
      var _this2 = this;

      var wrapper = ObjectWrapperManager.findWrapper(classname);

      if (!wrapper) {
        throw classname + ": wrapper for class not found";
      }

      var inputVersion = this.inputOperator.version;
      var obj = existingObj || wrapper.createInstance();
      this._identifierMap[id] = obj;
      wrapper.associates.forEach(function (associate) {
        if (associate.minVersion <= inputVersion && associate.maxVersion >= inputVersion) {
          var associateWrapper = ObjectWrapperManager.findWrapper(associate.name);

          if (!associateWrapper) {
            Log.warn(associate.name + ": wrapper for associate not found. continuing to next associate");
          } else {
            _this2._fields.push(associateWrapper.getName());

            associateWrapper.read(_this2, obj);

            _this2._fields.pop();
          }
        } else {// associate is not supported in version
        }
      });
      return obj;
    }
  }, {
    key: "readImage",
    value: function readImage() {
      var readFromExternal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.getVersion() > 94) {
        this.readProperty("ClassName");
        this.inputOperator.readString();
      }

      this.readProperty("UniqueID");
      var id = this.inputOperator.readUInt();

      if (this._identifierMap[id]) {
        return this._identifierMap[id];
      }

      this.readProperty("FileName");
      var name = this.inputOperator.readWrappedString();
      this.readProperty("WriteHint");
      var writeHint = this.inputOperator.readInt();
      var decision = this.inputOperator.readInt();
      var image = null;

      if (decision === IMAGE_INLINE_DATA) {
        if (this.isBinary()) {
          var origin = this.inputOperator.readInt();
          var s = this.inputOperator.readInt();
          var t = this.inputOperator.readInt();
          var r = this.inputOperator.readInt();
          var internalFormat = this.inputOperator.readInt();
          var pixelFormat = this.inputOperator.readInt();
          var dataType = this.inputOperator.readInt();
          var packing = this.inputOperator.readInt();

          var _mode2 = this.inputOperator.readInt();

          var size = this.inputOperator.readUInt();

          if (size > 0) {
            var _data = this.inputOperator.readBuffer(size);

            image = new Image();
            image.setProperty("Origin", origin);
            image.setImage(s, t, r, internalFormat, pixelFormat, dataType, _data, 1);
          }

          var levelSize = this.inputOperator.readUInt();
          var levels = [];

          for (var i = 0; i < levelSize; i++) {
            levels.push(this.inputOperator.readUInt());
          }

          if (image && levelSize > 0) image.setProperty("Levels", levels);
          readFromExternal = false;
        } else {
          //Ascii
          this.readProperty("Origin");

          var _origin = this.inputOperator.readInt();

          this.readProperty("Size");

          var _s = this.inputOperator.readInt();

          var _t = this.inputOperator.readInt();

          var _r = this.inputOperator.readInt();

          this.readProperty("InternalTextureFormat");

          var _internalFormat = this.inputOperator.readInt();

          this.readProperty("PixelFormat");

          var _pixelFormat = this.inputOperator.readInt();

          this.readProperty("DataType");

          var _dataType = this.inputOperator.readInt();

          this.readProperty("Packing");

          var _packing = this.inputOperator.readInt();

          this.readProperty("AllocationMode");
          this.readProperty("Data");

          var _levelSize = this.inputOperator.readUInt() - 1;

          this.readBeginBracket();
          var encodedData = []; // total size: levelSize+1

          for (var _i4 = 0; _i4 <= _levelSize; _i4++) {
            encodedData.push(this.inputOperator.readWrappedString());
          }

          var _levels = [];
          Base64Encoder.decodeArray(encodedData, _levels);

          _levels.pop();

          this.readEndBracket();
          image = new Image();
          image.setProperty("Origin", _origin);
          image.setImage(_s, _t, _r, _internalFormat, _pixelFormat, _dataType, data, mode, _packing);
          if (_levelSize > 0) image.setProperty("Levels", _levels);
          readFromExternal = false;
        }
      } else if (decision === IMAGE_INLINE_FILE) {
        if (this.isBinary()) {
          var _size4 = this.inputOperator.readUInt();

          var _data2 = this.inputOperator.readBuffer(_size4);

          image = new Image();
          image.setProperty("Data", _data2);
          readFromExternal = false;
        }
      } // let loadedFromCache = false; // not implemented


      if (readFromExternal && name !== "") {
        var path = require('path');

        image = new Image();
        image.imagePath = path.join(path.dirname(this.filePath), name);
      } //if(loadedFromCache){}else{}


      image = this.readObjectFields("osg::Object", id, image);
      image.setProperty("Name", name);
      image.setProperty("WriteHint", name);
      this._identifierMap[id] = image;
      return image;
    }
  }]);
  return InputStream;
}();

module.exports = InputStream;

},{"D_50":23,"C_19":24,"e_45":25,"._29":26,"h_47":56,"3_27":79,"m_43":101,"m_10":4,"M_11":5,"o_9":8,"path":20}],47:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

// const fs = require('fs');
var InputStream = require("._51");

var DataTypes = require("e_45");

var BinaryStreamOperator = require("o_53");

var AsciiStreamOperator = require("m_54");

var Log = require("._29");

var bufferLib = require('buffer');

var PROPERTY = new DataTypes.ObjectProperty();
var OSG_HEADER_LOW = 0x6C910EA1;
var OSG_HEADER_HIGH = 0x1AFB4545;
var OSGT_HEADER = "#Ascii";
var WriteType = {
  WRITE_UNKNOWN: 0,
  WRITE_SCENE: 1,
  WRITE_IMAGE: 2,
  WRITE_OBJECT: 3
};
/**
 *
 * @param {buffer} buffer
 * @return {object} the serialized node
 */

function readBuffer(buffer, path) {
  if (buffer instanceof ArrayBuffer) {
    buffer = (typeof Buffer !== 'undefined' ? Buffer : bufferLib.Buffer).from(buffer);
  }

  var low = buffer.readUInt32LE(0);
  var high = buffer.readUInt32LE(4);
  var reader, type, version, openscenegraph_soversion, hasDomainVersion;

  if (low === OSG_HEADER_LOW && high === OSG_HEADER_HIGH) {
    reader = new BinaryStreamOperator(buffer, 8);
    var useCompressSource, useRobustBinaryFormat;
    type = reader.readUInt(); // buf.readUInt32LE(ReadPosition);

    openscenegraph_soversion = reader.readUInt();
    var attributes = reader.readUInt();
    hasDomainVersion = (attributes & 0x1) !== 0;
    useCompressSource = (attributes & 0x2) !== 0;
    useRobustBinaryFormat = (attributes & 0x4) !== 0;
    reader.supportBinaryBrackets = useRobustBinaryFormat;
    var next = reader.readString();

    if (next !== "0") {
      throw "compresses data not supported";
    }
  } else if (buffer.length >= OSGT_HEADER.length && buffer.toString('ASCII', 0, OSGT_HEADER.length) === OSGT_HEADER) {
    Log("OSGT File");
    reader = new AsciiStreamOperator(buffer, OSGT_HEADER.length);
    type = reader.readString();
    reader.goToNextRow();
    type = WriteType["WRITE_" + type.toUpperCase()] || 0;
    reader.readObjectProperty(PROPERTY.set("#Version"));
    openscenegraph_soversion = reader.readUInt();
    reader.goToNextRow();
    reader.readObjectProperty(PROPERTY.set("#Generator"));
    reader.readString(); // Generator Name

    reader.goToNextRow();
    hasDomainVersion = reader.lookForward() === "#CustomDomain";
  } else {
    Log.ERROR("osg format not supported");
    return;
  }

  if (hasDomainVersion) {
    // TODO
    Log.ERROR("osg DomainVersion not supported");
    return;
  }

  reader.version = openscenegraph_soversion;
  var inputStream = new InputStream(path, reader);
  var startTime = new Date().getTime();
  var obj = inputStream.readObject();
  Log("timeElapsed:", new Date().getTime() - startTime);
  return obj;
}
/**
 *
 * @param {string} path
 * @param {function} cb callback function
 */


function readFile(path, cb) {
  var fs = require('fs');

  if (!cb) {
    throw "Call back required";
  }

  fs.readFile(path, function (err, data) {
    if (err) cb(err);
    var node;

    try {
      node = readBuffer(data, path);
    } catch (e) {
      return cb(e);
    }

    if (!node) {
      return cb("Failed to convert file");
    }

    cb(null, node);
  });
}

module.exports = {
  readBuffer: readBuffer,
  readFile: readFile
};

}).call(this)}).call(this,require("buffer").Buffer)

},{"e_45":25,"._29":26,"m_54":44,"o_53":45,"._51":46,"buffer":18,"fs":17}],48:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

function notImplemented(name, funcName) {
  throw "function " + funcName + " Not Implemented in " + name;
}

var StreamOperator = /*#__PURE__*/function () {
  function StreamOperator(name) {
    (0, _classCallCheck2["default"])(this, StreamOperator);
    this.name = name;
  }

  (0, _createClass2["default"])(StreamOperator, [{
    key: "readChar",
    value: function readChar() {
      notImplemented(this.name, "readChar");
    }
  }, {
    key: "readUByte",
    value: function readUByte() {
      notImplemented(this.name, "readUByte");
    } // TODO implement in binary

  }, {
    key: "readByte",
    value: function readByte() {
      notImplemented(this.name, "readByte");
    } // TODO implement in binary

  }, {
    key: "readShort",
    value: function readShort() {
      notImplemented(this.name, "readShort");
    } // TODO implement in binary

  }, {
    key: "readUShort",
    value: function readUShort() {
      notImplemented(this.name, "readUShort");
    } // TODO implement in binary

  }, {
    key: "readInt",
    value: function readInt() {
      notImplemented(this.name, "readInt");
    }
  }, {
    key: "readUInt",
    value: function readUInt() {
      notImplemented(this.name, "readUInt");
    }
  }, {
    key: "readBool",
    value: function readBool() {
      notImplemented(this.name, "readBool");
    }
  }, {
    key: "readString",
    value: function readString() {
      notImplemented(this.name, "readString");
    }
    /** @param {ObjectProperty} prop */

  }, {
    key: "readObjectProperty",
    value: function readObjectProperty(prop) {
      notImplemented(this.name, "readObjectProperty");
    }
    /** @param {ObjectMark} mark */

  }, {
    key: "readObjectMark",
    value: function readObjectMark(mark) {
      notImplemented(this.name, "readObjectMark");
    }
  }, {
    key: "advanceToCurrentEndBracket",
    value: function advanceToCurrentEndBracket() {
      notImplemented(this.name, "advanceToCurrentEndBracket");
    }
  }, {
    key: "isBinary",
    value: function isBinary() {
      notImplemented(this.name, "isBinary");
    }
  }, {
    key: "readWrappedString",
    value: function readWrappedString() {
      notImplemented(this.name, "readWrappedString");
    }
  }, {
    key: "readGLEnum",
    value: function readGLEnum(objectGLEnum) {
      notImplemented(this.name, "readGLenum");
    }
  }, {
    key: "readFloat",
    value: function readFloat() {
      notImplemented(this.name, "readFloat");
    }
  }, {
    key: "readDouble",
    value: function readDouble() {
      notImplemented(this.name, "readDouble");
    }
  }, {
    key: "readBuffer",
    value: function readBuffer(size) {
      notImplemented(this.name, "readBuffer");
    }
  }]);
  return StreamOperator;
}();

module.exports = StreamOperator;

},{"m_10":4,"M_11":5,"o_9":8}],49:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ObjectClass = require("o_64");

var BufferData = /*#__PURE__*/function (_ObjectClass) {
  (0, _inherits2["default"])(BufferData, _ObjectClass);

  var _super = _createSuper(BufferData);

  function BufferData() {
    (0, _classCallCheck2["default"])(this, BufferData);
    return _super.call(this);
  }

  return BufferData;
}(ObjectClass);

module.exports = BufferData;

},{"o_64":61,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],50:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StateAttribute = require("-_70");

var FaceMode = require("3_71");

var CullFace = /*#__PURE__*/function (_StateAttribute) {
  (0, _inherits2["default"])(CullFace, _StateAttribute);

  var _super = _createSuper(CullFace);

  function CullFace() {
    var _this;

    (0, _classCallCheck2["default"])(this, CullFace);
    _this = _super.call(this);
    _this.Type = "osg::CullFace";
    _this.Mode = FaceMode.BACK;
    return _this;
  }

  return CullFace;
}(StateAttribute);

module.exports = CullFace;

},{"3_71":29,"-_70":65,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],51:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// UserDataContainer = require("M_77");
var UserDataContainer = require("M_77");

var DefaultUserDataContainer = /*#__PURE__*/function (_UserDataContainer) {
  (0, _inherits2["default"])(DefaultUserDataContainer, _UserDataContainer);

  var _super = _createSuper(DefaultUserDataContainer);

  function DefaultUserDataContainer() {
    var _this;

    (0, _classCallCheck2["default"])(this, DefaultUserDataContainer);
    _this = _super.call(this);
    _this.Type = "Osg::DefaultUserDataContainer";
    return _this;
  }

  return DefaultUserDataContainer;
}(UserDataContainer);

module.exports = DefaultUserDataContainer;

},{"M_77":70,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],52:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Node = require("._84");

var Drawable = /*#__PURE__*/function (_Node) {
  (0, _inherits2["default"])(Drawable, _Node);

  var _super = _createSuper(Drawable);

  function Drawable() {
    var _this;

    (0, _classCallCheck2["default"])(this, Drawable);
    _this = _super.call(this);
    _this.InitialBound = null;
    _this.BoundingBox = null;
    _this.Shape = null;
    _this.SupportsDisplayList = true;
    _this.UseDisplayList = true;
    _this.UseVertexBufferObjects = false;
    _this.Type = "osg::Drawable";
    return _this;
  }

  return Drawable;
}(Node);

module.exports = Drawable;

},{"._84":60,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],53:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Group = require("s_90");

var Geode = /*#__PURE__*/function (_Group) {
  (0, _inherits2["default"])(Geode, _Group);

  var _super = _createSuper(Geode);

  function Geode() {
    var _this;

    (0, _classCallCheck2["default"])(this, Geode);
    _this = _super.call(this);
    _this.Type = "Osg::Geode";
    return _this;
  }

  return Geode;
}(Group);

module.exports = Geode;

},{"s_90":55,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],54:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Drawable = require("C_96");

var Geometry = /*#__PURE__*/function (_Drawable) {
  (0, _inherits2["default"])(Geometry, _Drawable);

  var _super = _createSuper(Geometry);

  function Geometry() {
    var _this;

    (0, _classCallCheck2["default"])(this, Geometry);
    _this = _super.call(this);
    _this.Type = "osg::Geometry";
    _this.InitialBound = null;
    _this.BoundingBox = null;
    _this.PrimitiveSetList = [];
    _this.TexCoordArray = [];
    _this.VertexAttribArray = [];
    _this.VertexArray = null;
    return _this;
  }

  return Geometry;
}(Drawable);

module.exports = Geometry;

},{"C_96":52,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],55:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Node = require("._84");

var Group = /*#__PURE__*/function (_Node) {
  (0, _inherits2["default"])(Group, _Node);

  var _super = _createSuper(Group);

  function Group() {
    var _this;

    (0, _classCallCheck2["default"])(this, Group);
    _this = _super.call(this);
    /** 
     * @type {Array<Node>}
     */

    _this.Children = [];
    _this.Type = "Osg::Group";
    return _this;
  }

  return Group;
}(Node);

module.exports = Group;

},{"._84":60,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],56:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// const Promise = require('bluebird')
var BufferData = require("m_109"); // const fs = require('fs');


var Log = require("._29"); // let ReadFile = Promise.promisify(fs.readFile);


var Image = /*#__PURE__*/function (_BufferData) {
  (0, _inherits2["default"])(Image, _BufferData);

  var _super = _createSuper(Image);

  function Image() {
    var _this;

    (0, _classCallCheck2["default"])(this, Image);
    _this = _super.call(this);
    _this.S = 0;
    _this.T = 0;
    _this.R = 0;
    _this.InternalTextureFormat = 0;
    _this.PixelFormat = 0;
    _this.DataType = 0;
    _this.Data = null;
    _this.Mode = 0;
    _this.Packing = 1;
    _this.RowLength = 0;
    _this.Origin = 0;
    _this.FileName = "";
    _this.Levels = null;
    _this.WriteHint = null;
    _this.Type = "Osg::Image";
    _this.imagePath = null;
    _this.imagePromise = null;
    return _this;
  }

  (0, _createClass2["default"])(Image, [{
    key: "setImage",
    value: function setImage(s, t, r, internalTextureFormat, pixelFormat, dataType, data, aloccationMode) {
      var packing = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      var rowLength = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      this.S = s;
      this.T = t;
      this.R = r;
      this.InternalTextureFormat = internalTextureFormat;
      this.PixelFormat = pixelFormat;
      this.DataType = dataType;
      this.Data = data;
      this.Packing = packing;
      this.Mode = aloccationMode;
      this.RowLength = rowLength;
    }
  }, {
    key: "getImageData",
    value: function getImageData() {
      var _this2 = this;

      if (this.Data) return Promise.resolve(this.Data);
      if (this.imagePromise) return this.imagePromise;

      if (!this.imagePath) {
        Log.fatal("No File name found for image");
        return Promise.reject("No File name found for image");
      } //


      var Promise = require('bluebird');

      var fs = require('fs');

      var ReadFile = Promise.promisify(fs.readFile);
      this.imagePromise = ReadFile(this.imagePath).then(function (data) {
        _this2.Data = data;
        return data;
      });
      return this.imagePromise;
    }
  }]);
  return Image;
}(BufferData);

module.exports = Image;

},{"._29":26,"m_109":49,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11,"bluebird":103,"fs":17}],57:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Group = require("s_90");

var CenterMode = require("._117");

var RangeMode = require("C_118");

var LOD = /*#__PURE__*/function (_Group) {
  (0, _inherits2["default"])(LOD, _Group);

  var _super = _createSuper(LOD);

  function LOD() {
    var _this;

    (0, _classCallCheck2["default"])(this, LOD);
    _this = _super.call(this);
    _this.CenterMode = CenterMode.USE_BOUNDING_SPHERE_CENTER;
    _this.Center = null;
    _this.Radius = null;
    _this.RangeMode = RangeMode.DISTANCE_FROM_EYE_POINT;
    _this.RangeList = null;
    _this.Type = "Osg::Group";
    return _this;
  }

  return LOD;
}(Group);

module.exports = LOD;

},{"._117":31,"C_118":32,"s_90":55,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],58:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StateAttribute = require("-_70");

var Material = /*#__PURE__*/function (_StateAttribute) {
  (0, _inherits2["default"])(Material, _StateAttribute);

  var _super = _createSuper(Material);

  function Material() {
    var _this;

    (0, _classCallCheck2["default"])(this, Material);
    _this = _super.call(this);
    _this.AmbientFrontAndBack = true;
    _this.AmbientFront = null;
    _this.AmbientBack = null;
    _this.DiffuseFrontAndBack = true;
    _this.DiffuseFront = null;
    _this.DiffuseBack = null;
    _this.SpecularFrontAndBack = true;
    _this.SpecularFront = null;
    _this.SpecularBack = null;
    _this.EmissionFrontAndBack = true;
    _this.EmissionFront = null;
    _this.EmissionBack = null;
    _this.ShininessFrontAndBack = true;
    _this.ShininessFront = 0;
    _this.ShininessBack = 0;
    _this.ColorMode = null;
    _this.Type = "Osg::Material";
    return _this;
  }

  return Material;
}(StateAttribute);

module.exports = Material;

},{"-_70":65,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],59:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Transform = require("o_130");

var MatrixTransform = /*#__PURE__*/function (_Transform) {
  (0, _inherits2["default"])(MatrixTransform, _Transform);

  var _super = _createSuper(MatrixTransform);

  function MatrixTransform() {
    var _this;

    (0, _classCallCheck2["default"])(this, MatrixTransform);
    _this = _super.call(this);
    _this.Type = "osg::MatrixTransform";
    _this.Matrix = null;
    return _this;
  }

  return MatrixTransform;
}(Transform);

module.exports = MatrixTransform;

},{"o_130":69,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],60:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// ObjectClass = require("o_64");
var ObjectClass = require("o_64");

var Node = /*#__PURE__*/function (_ObjectClass) {
  (0, _inherits2["default"])(Node, _ObjectClass);

  var _super = _createSuper(Node);

  function Node() {
    var _this;

    (0, _classCallCheck2["default"])(this, Node);
    _this = _super.call(this);
    _this.CullingActive = true;
    _this.NodeMask = 0xffffffff;
    _this.Descriptions = [];
    _this.InitialBound = null;
    _this.StateSet = null;
    _this.Type = "Osg::Node";
    return _this;
  }

  return Node;
}(ObjectClass);

module.exports = Node;

},{"o_64":61,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],61:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

// todo rename to SsgClass
var Log = require("._29");

var ObjectClass = /*#__PURE__*/function () {
  function ObjectClass() {
    (0, _classCallCheck2["default"])(this, ObjectClass);
    this.Name = "";
    this.DataVariance = null;
    /** @type {UserDataContainer} */

    this.UserDataContainer = null;
    this.Type = "Osg::Object";
  }
  /**
   * @param {string} name
   * @param {*} value
   */


  (0, _createClass2["default"])(ObjectClass, [{
    key: "setProperty",
    value: function setProperty(name, value) {
      // TODO all properties in all objects should start whit LowerCase
      if (this[name] === undefined) {
        Log.warn("setProperty: " + this.Type + "." + name + " have not been defined");
      }

      this[name] = value;
    }
    /**
     * @param {string} name
     * @return {*}
     */

  }, {
    key: "getProperty",
    value: function getProperty(name) {
      // TODO all properties in all objects should start whit LowerCase
      if (this[name] === undefined) {
        Log.warn("getProperty: " + this.Type + "." + name + " have not been defined");
      }

      return this[name];
    }
  }]);
  return ObjectClass;
}();

module.exports = ObjectClass;

},{"._29":26,"m_10":4,"M_11":5,"o_9":8}],62:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BufferData = require("m_109");

var OsgArray = /*#__PURE__*/function (_BufferData) {
  (0, _inherits2["default"])(OsgArray, _BufferData);

  var _super = _createSuper(OsgArray);

  function OsgArray() {
    var _this;

    (0, _classCallCheck2["default"])(this, OsgArray);
    _this = _super.call(this);
    _this.Binding = null;
    _this.Normalize = false;
    return _this;
  }

  return OsgArray;
}(BufferData);

module.exports = OsgArray;

},{"m_109":49,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],63:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LOD = require("m_153");

var PagedLOD = /*#__PURE__*/function (_LOD) {
  (0, _inherits2["default"])(PagedLOD, _LOD);

  var _super = _createSuper(PagedLOD);

  function PagedLOD() {
    var _this;

    (0, _classCallCheck2["default"])(this, PagedLOD);
    _this = _super.call(this);
    _this.DatabasePath = null;
    _this.FrameNumberOfLastTraversal = 0;
    _this.NumChildrenThatCannotBeExpired = 0;
    _this.DisableExternalChildrenPaging = false;
    _this.PriorityOffsets = null;
    _this.PriorityScales = null;
    _this.FileNames = null;
    _this.Type = "Osg::Group";
    return _this;
  }

  return PagedLOD;
}(LOD);

module.exports = PagedLOD;

},{"m_153":57,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],64:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StateAttribute = require("-_70");

var ShadeModel = /*#__PURE__*/function (_StateAttribute) {
  (0, _inherits2["default"])(ShadeModel, _StateAttribute);

  var _super = _createSuper(ShadeModel);

  function ShadeModel() {
    var _this;

    (0, _classCallCheck2["default"])(this, ShadeModel);
    _this = _super.call(this);
    _this.Mode = null;
    return _this;
  }

  return ShadeModel;
}(StateAttribute);

module.exports = ShadeModel;

},{"-_70":65,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],65:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ObjectClass = require("o_64");

var StateAttribute = /*#__PURE__*/function (_ObjectClass) {
  (0, _inherits2["default"])(StateAttribute, _ObjectClass);

  var _super = _createSuper(StateAttribute);

  function StateAttribute() {
    var _this;

    (0, _classCallCheck2["default"])(this, StateAttribute);
    _this = _super.call(this);
    _this.Type = "Osg::StateAttribute";
    return _this;
  }

  (0, _createClass2["default"])(StateAttribute, [{
    key: "getMember",
    value: function getMember() {
      return 0;
    }
  }, {
    key: "getTypeMemberPair",
    value: function getTypeMemberPair() {
      return {
        type: this.Type,
        member: this.getMember()
      };
    }
  }]);
  return StateAttribute;
}(ObjectClass);

module.exports = StateAttribute;

},{"o_64":61,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],66:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// ObjectClass = require("o_64");
// RenderingHint = require("C_173");
// RenderBinMode = require("o_174");
var ObjectClass = require("o_64");

var RenderingHint = require("C_173");

var RenderBinMode = require("o_174");

var StateSet = /*#__PURE__*/function (_ObjectClass) {
  (0, _inherits2["default"])(StateSet, _ObjectClass);

  var _super = _createSuper(StateSet);

  function StateSet() {
    var _this;

    (0, _classCallCheck2["default"])(this, StateSet);
    _this = _super.call(this);
    _this.ModeList = [];
    _this.AttributeList = [];
    _this.TextureModeList = [];
    _this.TextureAttributeList = [];
    _this.UniformList = [];
    _this.RenderingHint = RenderingHint.DEFAULT_BIN;
    _this.RenderBinMode = RenderBinMode.INHERIT_RENDERBIN_DETAILS;
    _this.BinNumber = 0;
    _this.BinName = "";
    _this.NestRenderBins = true;
    _this.DefineList = {};
    _this.Type = "Osg::StateSet";
    return _this;
  }

  return StateSet;
}(ObjectClass);

module.exports = StateSet;

},{"o_174":38,"C_173":39,"o_64":61,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],67:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StateAttribute = require("-_70");

var GLEnum = require("D_28");

var InternalFormatMode = require("m_186");

var ShadowCompareFuncEnum = require("M_187");

var ShadowTextureModeEnum = require("e_188");

var Texture = /*#__PURE__*/function (_StateAttribute) {
  (0, _inherits2["default"])(Texture, _StateAttribute);

  var _super = _createSuper(Texture);

  function Texture() {
    var _this;

    (0, _classCallCheck2["default"])(this, Texture);
    _this = _super.call(this);
    _this.InternalFormatMode = 0;
    _this.InternalFormat = 0;
    _this.WrapS = GLEnum.CLAMP_TO_EDGE;
    _this.WrapT = GLEnum.CLAMP_TO_EDGE;
    _this.WrapR = GLEnum.CLAMP_TO_EDGE;
    _this.MinFilter = GLEnum.LINEAR_MIPMAP_LINEAR;
    _this.MagFilter = GLEnum.LINEAR;
    _this.MaxAnisotropy = 1;
    _this.UseHardwareMipMapGeneration = true;
    _this.UnRefImageDataAfterApply = false;
    _this.ClientStorageHint = false;
    _this.ResizeNonPowerOfTwoHint = true;
    _this.BorderColor = [0, 0, 0, 0];
    _this.BorderWidth = 1;
    _this.ShadowComparison = false;
    _this.ShadowCompareFunc = ShadowCompareFuncEnum.LEQUAL;
    _this.ShadowTextureMode = ShadowTextureModeEnum.LUMINANCE;
    _this.ShadowAmbient = 0;
    _this.Type = "Osg::Texture";
    return _this;
  }

  (0, _createClass2["default"])(Texture, [{
    key: "computeInternalFormatType",
    value: function computeInternalFormatType() {// TODO
    }
  }, {
    key: "setInternalFormat",
    value: function setInternalFormat(internalFormat) {
      this.InternalFormatMode = InternalFormatMode.USE_USER_DEFINED_FORMAT;
      this.InternalFormat = internalFormat;
      computeInternalFormatType();
    }
  }]);
  return Texture;
}(StateAttribute);

module.exports = Texture;

},{"D_28":30,"m_186":40,"M_187":41,"e_188":42,"-_70":65,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],68:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Texture = require("._194");

var Texture2D = /*#__PURE__*/function (_Texture) {
  (0, _inherits2["default"])(Texture2D, _Texture);

  var _super = _createSuper(Texture2D);

  function Texture2D() {
    var _this;

    (0, _classCallCheck2["default"])(this, Texture2D);
    _this = _super.call(this);
    _this.Image = null;
    _this.TextureWidth = 0;
    _this.TextureHeight = 0;
    _this.Type = "Osg::Texture";
    return _this;
  }

  return Texture2D;
}(Texture);

module.exports = Texture2D;

},{"._194":67,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],69:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Group = require("s_90");

var Transform = /*#__PURE__*/function (_Group) {
  (0, _inherits2["default"])(Transform, _Group);

  var _super = _createSuper(Transform);

  function Transform() {
    var _this;

    (0, _classCallCheck2["default"])(this, Transform);
    _this = _super.call(this);
    _this.Type = "osg::Transform";
    _this.ReferenceFrame = 0;
    return _this;
  }

  return Transform;
}(Group);

module.exports = Transform;

},{"s_90":55,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],70:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// ObjectClass = require("o_64");
var ObjectClass = require("o_64");

var UserDataContainer = /*#__PURE__*/function (_ObjectClass) {
  (0, _inherits2["default"])(UserDataContainer, _ObjectClass);

  var _super = _createSuper(UserDataContainer);

  function UserDataContainer() {
    var _this;

    (0, _classCallCheck2["default"])(this, UserDataContainer);
    _this = _super.call(this);
    _this.DescriptionList = [];
    _this.ObjectList = [];
    _this.UserData = null;
    _this.Type = "Osg::UserDataContainer";
    return _this;
  }

  return UserDataContainer;
}(ObjectClass);

module.exports = UserDataContainer;

},{"o_64":61,"m_10":4,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],71:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var Associate = function Associate(_name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _classCallCheck2["default"])(this, Associate);
  this.name = _name;
  this.minVersion = options.minVersion || 0;
  this.maxVersion = options.maxVersion || 100000000;
};

module.exports = Associate;

},{"m_10":4,"o_9":8}],72:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var BaseSerializer = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {string} name
   * @param options
   * @param {number} options.minVersion first osgb/osgb version in which this serializer is defind
   * @param {number} options.maxVersion last osgb/osgb version in which this serializer is defind
   */
  function BaseSerializer(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, BaseSerializer);
    this._options = options;
    this._name = name;
  }
  /**
   *
   * @returns {string}
   */


  (0, _createClass2["default"])(BaseSerializer, [{
    key: "getName",
    value: function getName() {
      return this._name;
    }
    /**
     *
     * @returns {number}
     */

  }, {
    key: "getMinVersion",
    value: function getMinVersion() {
      // TODO replace getMinVersion & getMaxVersion --> is supported in version
      return this._options.minVersion || 0;
    }
    /**
     *
     * @returns {number}
     */

  }, {
    key: "getMaxVersion",
    value: function getMaxVersion() {
      return this._options.maxVersion || 1000000000;
    }
    /**
     *
     * @param {InputStream} inputStream
     * @param {ObjectClass} object
     */

  }, {
    key: "read",
    value: function read(inputStream, object) {
      throw "BaseSerializer.read not implemented";
    }
  }]);
  return BaseSerializer;
}();

module.exports = BaseSerializer;

},{"m_10":4,"M_11":5,"o_9":8}],73:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Log = require("._29");

var BaseSerializer = require("M_220");

function reverseMap(map) {
  // ret = {};
  var ret = {};
  Object.keys(map).forEach(function (key) {
    var val = map[key];
    if (ret[val]) Log.warn("EnumSerializer: Duplicate value: " + ret[val] + ", " + key);
    ret[val] = key;
  });
  return ret;
}

var EnumSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(EnumSerializer, _BaseSerializer);

  var _super = _createSuper(EnumSerializer);

  function EnumSerializer(name, enumMap, defaultValue, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, EnumSerializer);
    _this = _super.call(this, name, options);
    _this._defaultValue = defaultValue;
    _this._enumMap = enumMap;
    _this._reverseMap = reverseMap(enumMap);
    return _this;
  }
  /** @override */


  (0, _createClass2["default"])(EnumSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      if (inputStream.isBinary()) {
        var value = inputStream.inputOperator.readInt();

        if (!this._reverseMap.hasOwnProperty(value)) {
          Log.warn("EnumSerializer: failed to find ENUM value " + value + " for serializer " + this.getName() + ". Setting to default value.");
          value = this._defaultValue;
        }

        object.setProperty(this.getName(), value);
      } else if (inputStream.inputOperator.matchString(this.getName())) {
        var key = inputStream.inputOperator.readString();
        var _value = this._enumMap[key];

        if (!this._enumMap.hasOwnProperty(key)) {
          Log.warn("EnumSerializer: failed to find ENUM key " + key + " for serializer " + this.getName() + ". Setting to default value.");
          _value = this._defaultValue;
        }

        object.setProperty(this.getName(), _value);
      }
    }
  }]);
  return EnumSerializer;
}(BaseSerializer);

module.exports = EnumSerializer;

},{"._29":26,"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],74:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//const Log = require("._29");
var BaseSerializer = require("M_220");

var ImageSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(ImageSerializer, _BaseSerializer);

  var _super = _createSuper(ImageSerializer);

  function ImageSerializer(name, defaultValue, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageSerializer);
    _this = _super.call(this, name, options);
    _this._defaultValue = defaultValue;
    return _this;
  }
  /** @override */


  (0, _createClass2["default"])(ImageSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      if (inputStream.isBinary()) {
        var hasImage = inputStream.inputOperator.readBool();

        if (hasImage) {
          object.setProperty(this.getName(), inputStream.readImage());
        }
      } else if (inputStream.inputOperator.matchString(this.getName())) {
        var _hasImage = inputStream.inputOperator.readBool();

        if (_hasImage) {
          inputStream.readBeginBracket();
          object.setProperty(this.getName(), inputStream.readImage());
          inputStream.readEndBracket();
        }
      }
    }
  }]);
  return ImageSerializer;
}(BaseSerializer);

module.exports = ImageSerializer;

},{"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],75:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BaseSerializer = require("M_220");
/**
 *
 * @param {InputStream} inputStream
 * @param {string} type
 * @return {function}
 */


function getTypeReaderFunction(inputStream, type) {
  var funcName = "read" + type; // if the function exists in the InputOperator

  var typeReaderFunction = inputStream.inputOperator[funcName];
  if (typeReaderFunction) return typeReaderFunction.bind(inputStream.inputOperator); // if the function exists in the InputStream

  typeReaderFunction = inputStream[funcName];
  if (typeReaderFunction) return typeReaderFunction.bind(inputStream);
  throw "reader type: " + type + " not found";
}

var MatrixSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(MatrixSerializer, _BaseSerializer);

  var _super = _createSuper(MatrixSerializer);

  function MatrixSerializer(name) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, MatrixSerializer);
    _this = _super.call(this, name, options);
    _this._type = options.type || "Double";
    return _this;
  }
  /** @override */


  (0, _createClass2["default"])(MatrixSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      var matrix = [];

      if (inputStream.isBinary()) {
        inputStream.readMatrix(this._type);
      } else if (inputStream.inputOperator.matchString(this.getName())) {
        inputStream.readMatrix(this._type);
      }

      if (matrix) {
        object.setProperty(this.getName(), matrix);
      }
    }
  }]);
  return MatrixSerializer;
}(BaseSerializer);

module.exports = MatrixSerializer;

},{"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],76:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BaseSerializer = require("M_220");

var ObjectCallbackSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(ObjectCallbackSerializer, _BaseSerializer);

  var _super = _createSuper(ObjectCallbackSerializer);

  function ObjectCallbackSerializer(name, options) {
    (0, _classCallCheck2["default"])(this, ObjectCallbackSerializer);
    return _super.call(this, name, options);
  }

  (0, _createClass2["default"])(ObjectCallbackSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      var hasObject = false;

      if (inputStream.isBinary()) {
        hasObject = inputStream.inputOperator.readBool();
      } else if (inputStream.inputOperator.matchString(this.getName())) {
        hasObject = inputStream.inputOperator.readBool();
      }

      if (hasObject) {
        throw "callback object serializing is NOT SUPPORTED - property: " + this.getName();
      }
    }
  }]);
  return ObjectCallbackSerializer;
}(BaseSerializer);

module.exports = ObjectCallbackSerializer;

},{"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],77:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BaseSerializer = require("M_220");

var ObjectSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(ObjectSerializer, _BaseSerializer);

  var _super = _createSuper(ObjectSerializer);

  function ObjectSerializer(name, defaultValue, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, ObjectSerializer);
    _this = _super.call(this, name, options);
    _this._defaultValue = defaultValue;
    return _this;
  }

  (0, _createClass2["default"])(ObjectSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      if (inputStream.isBinary()) {
        var hasObject = inputStream.inputOperator.readBool();

        if (hasObject) {
          object.setProperty(this._name, inputStream.readObjectOfType());
        }
      } else if (inputStream.inputOperator.matchString(this._name)) {
        var _hasObject = inputStream.inputOperator.readBool();

        if (_hasObject) {
          inputStream.readBeginBracket();
          object.setProperty(this._name, inputStream.readObjectOfType());
          inputStream.readEndBracket();
        }
      }
    }
  }]);
  return ObjectSerializer;
}(BaseSerializer);

module.exports = ObjectSerializer;

},{"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],78:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

// const assert = require('assert');
var Associate = require("M_253");

var Log = require("._29");

var ObjectWrapper = /*#__PURE__*/function () {
  /**
   * constructor of ObjectWrapper
   * @param {string} name
   * @param {string[]|Associate[]}associates
   * @param {function} typeConstructor
   * @param {object} [options]
   */
  function ObjectWrapper(name, associates, typeConstructor) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck2["default"])(this, ObjectWrapper);
    this._name = name;
    this._typeCtor = typeConstructor;
    this.associates = associates.map(function (associate) {
      if (typeof associate === "string") return new Associate(associate);else return associate;
    });
    /**
     *
     * @type {Array<BaseSerializer>}
     * @private
     */

    this._serializers = options.serializers || [];
  }

  (0, _createClass2["default"])(ObjectWrapper, [{
    key: "read",
    value: function read(inputStream, obj) {
      var _this = this;

      var inputVersion = inputStream.getVersion();

      this._serializers.forEach(function (serializer) {
        if (serializer.getMinVersion() <= inputVersion && inputVersion <= serializer.getMaxVersion() //&& serializer.supportsReadWrite()
        ) {
          try {
            serializer.read(inputStream, obj);
          } catch (e) {
            if (e.stack) {
              e = e.toString() + "\n" + e.stack;
            }

            Log.fatal(e);
            throw "ObjectWrapper.read: Error reading property " + _this._name + "." + serializer.getName();
          }
        } else {// version mismatch
        }
      });
    }
  }, {
    key: "addSerializer",
    value: function addSerializer(serializer) {
      if (!serializer) throw new Error('serializer is required');
      if (!serializer.getName) throw new Error('serializer.getName is required');
      if (!serializer.read) throw new Error('serializer.read is required'); // assert(serializer);
      // assert(serializer.getName);
      // assert(serializer.read);

      this._serializers.push(serializer);
    }
  }, {
    key: "createInstance",
    value: function createInstance() {
      var typeCtor = this._typeCtor;
      if (typeCtor) return new typeCtor();else return null;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this._name;
    }
  }]);
  return ObjectWrapper;
}();

module.exports = ObjectWrapper;

},{"._29":26,"M_253":71,"m_10":4,"M_11":5,"o_9":8}],79:[function(require,module,exports){
"use strict";

var GLEnum = require("D_28");

var ArrayTableEnum = require("h_256");

var PrimitiveTableEnum = require("-_257");

var _globalMap = {
  ArrayType: ArrayTableEnum,
  PrimitiveType: PrimitiveTableEnum,
  GL: GLEnum
};
var ObjectWrapperDictionary = {};

function readWrapperObject(wrapperName) {
  return function (inputStream, obj) {
    wrapperObject = ObjectWrapperDictionary[wrapperName];
    if (!wrapperObject) throw "ObjectWrapperManager.readWrapperObject : " + wrapperName;
  };
}

module.exports = {
  getValue: function getValue(group, str) {
    var map = _globalMap[group] || GLEnum;
    return map[str];
  },
  findWrapper: function findWrapper(classname) {
    return ObjectWrapperDictionary[classname];
  },
  addWrapper: function addWrapper(objectWrapper) {
    var classname = objectWrapper.getName();
    ObjectWrapperDictionary[classname] = objectWrapper;
  },
  readWrapperObject: readWrapperObject
};

},{"h_256":28,"D_28":30,"-_257":35}],80:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// const assert = require('assert');
var BaseSerializer = require("M_220");

function getTypeReaderFunction(reader, type) {
  var funcName = "read" + type;
  var typeReaderFunction = reader[funcName];
  if (!typeReaderFunction) throw "reader type: " + type + " not found";
  return typeReaderFunction.bind(reader);
}

var equalTypesDictionary = {
  HEXINT: "UInt",
  GLInt: "Int" // TODO validate GLInt defined as "Int"

};
var vectorDictionary = {
  Vec4d: {
    size: 4,
    type: "Double"
  }
};

var PropByValSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(PropByValSerializer, _BaseSerializer);

  var _super = _createSuper(PropByValSerializer);

  function PropByValSerializer(type, name, defaultValue) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck2["default"])(this, PropByValSerializer);
    _this = _super.call(this, name, options);
    _this._defaultValue = defaultValue;
    _this._useHex = false;
    _this._vectorSize = 0;

    if (vectorDictionary[type]) {
      _this._vectorSize = vectorDictionary[type].size;
      _this._type = vectorDictionary[type].type;
    } else if (equalTypesDictionary[type]) {
      _this._type = equalTypesDictionary[type];
      _this._useHex = true;
    } else {
      _this._type = type;
    }

    return _this;
  }

  (0, _createClass2["default"])(PropByValSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      var value;

      if (this._vectorSize > 0) {
        value = inputStream.readVectorOfType(this._vectorSize, this._type);
      } else if (inputStream.isBinary()) {
        var typeReaderFunction = getTypeReaderFunction(inputStream.inputOperator, this._type);
        value = typeReaderFunction();
      } else if (inputStream.inputOperator.matchString(this._name)) {
        if (this._useHex) // the type doesn't metter - its all Number
          value = inputStream.inputOperator.readHex();else {
          var _typeReaderFunction = getTypeReaderFunction(inputStream.inputOperator, this._type);

          value = _typeReaderFunction();
        }
      }

      object.setProperty(this._name, value);
    }
  }]);
  return PropByValSerializer;
}(BaseSerializer);

module.exports = PropByValSerializer;

},{"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],81:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BaseSerializer = require("M_220");

var UserSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(UserSerializer, _BaseSerializer);

  var _super = _createSuper(UserSerializer);

  function UserSerializer(name, reader, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, UserSerializer);
    _this = _super.call(this, name, options);
    _this._reader = reader;
    return _this;
  }

  (0, _createClass2["default"])(UserSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      if (inputStream.isBinary()) {
        if (!inputStream.inputOperator.readBool()) {
          return;
        }
      } else {
        if (!inputStream.inputOperator.matchString(this.getName())) return;
      }

      this._reader(inputStream, object);
    }
  }]);
  return UserSerializer;
}(BaseSerializer);

module.exports = UserSerializer;

},{"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],82:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _classCallCheck2 = _interopRequireDefault(require("m_10"));

var _createClass2 = _interopRequireDefault(require("M_11"));

var _inherits2 = _interopRequireDefault(require("e_23"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("s_24"));

var _getPrototypeOf2 = _interopRequireDefault(require("h_25"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BaseSerializer = require("M_220");
/**
 *
 * @param {InputStream} inputStream
 * @param {string} type
 * @return {function}
 */


function getTypeReaderFunction(inputStream, type) {
  var funcName = "read" + type; // if the function exists in the InputOperator

  var typeReaderFunction = inputStream.inputOperator[funcName];
  if (typeReaderFunction) return typeReaderFunction.bind(inputStream.inputOperator); // if the function exists in the InputStream

  typeReaderFunction = inputStream[funcName];
  if (typeReaderFunction) return typeReaderFunction.bind(inputStream);
  throw "reader type: " + type + " not found";
}

var VectorSerializer = /*#__PURE__*/function (_BaseSerializer) {
  (0, _inherits2["default"])(VectorSerializer, _BaseSerializer);

  var _super = _createSuper(VectorSerializer);

  function VectorSerializer(name, type, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, VectorSerializer);
    _this = _super.call(this, name, options);
    _this._type = type;
    return _this;
  }
  /** @override */


  (0, _createClass2["default"])(VectorSerializer, [{
    key: "read",
    value: function read(inputStream, object) {
      var typeReaderFunction = getTypeReaderFunction(inputStream, this._type);
      var list = [];

      if (inputStream.isBinary()) {
        var size = inputStream.inputOperator.readUInt();

        for (var i = 0; i < size; i++) {
          list.push(typeReaderFunction());
        }
      } else if (inputStream.inputOperator.matchString(this.getName())) {
        var _size = inputStream.inputOperator.readUInt();

        if (_size > 0) {
          inputStream.readBeginBracket();

          for (var _i = 0; _i < _size; _i++) {
            list.push(typeReaderFunction());
          }

          inputStream.readEndBracket();
        }
      }

      if (list.length > 0) {
        object.setProperty(this._name, list);
      }
    }
  }]);
  return VectorSerializer;
}(BaseSerializer);

module.exports = VectorSerializer;

},{"M_220":72,"m_10":4,"M_11":5,"h_25":6,"e_23":7,"o_9":8,"s_24":11}],83:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var EnumSerializer = require("3_280");

var ObjectWrapper = require("D_281");

var CullFace = require("._282");

var FaceMode = require("3_71");

var objectWrapper = new ObjectWrapper("osg::CullFace", ["osg::Object", "osg::StateAttribute", "osg::CullFace"], CullFace);
objectWrapper.addSerializer(new EnumSerializer("Mode", FaceMode, FaceMode.BACK));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"3_71":29,"._282":50,"3_280":73,"D_281":78,"3_27":79}],84:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var ObjectSerializer = require("m_285");

var UserSerializer = require("M_286");

var ObjectCallbackSerializer = require("e_287");

var PropByValSerializer = require("s_288");

var ObjectWrapper = require("D_281");

var Associate = require("-_290");

var Drawable = require("3_291");

var objectWrapper = new ObjectWrapper("osg::Drawable", ["osg::Object", new Associate("osg::Node", {
  minVersion: 154
}), "osg::Drawable"], Drawable);

function readInitialBound() {
  // TODO
  throw "InitialBound not yet implemented";
}

objectWrapper.addSerializer(new ObjectSerializer("StateSet", null));
objectWrapper.addSerializer(new UserSerializer("InitialBound", readInitialBound));
objectWrapper.addSerializer(new ObjectCallbackSerializer("ComputeBoundingBoxCallback"));
objectWrapper.addSerializer(new ObjectSerializer("Shape", null));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "SupportsDisplayList", true));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "UseDisplayList", true));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "UseVertexBufferObjects", false));
objectWrapper.addSerializer(new ObjectCallbackSerializer("UpdateCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("EventCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("CullCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("DrawCallback"));
objectWrapper.addSerializer(new PropByValSerializer("HEXINT", "NodeMask", 0xffffffff, {
  minVersion: 142
}));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "CullingActive", true, {
  minVersion: 145
}));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"3_291":52,"-_290":71,"e_287":76,"m_285":77,"D_281":78,"3_27":79,"s_288":80,"M_286":81}],85:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var UserSerializer = require("M_286");

var ObjectWrapper = require("D_281");

var Geode = require("o_295");

var objectWrapper = new ObjectWrapper("osg::Geode", ["osg::Object", "osg::Node", "osg::Geode"], Geode);

function readDrawables(inputStream, geodeNode) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var obj = inputStream.readObjectOfType("osg::Drawable");

    if (obj) {
      geodeNode.Children.push(obj);
    }
  }

  inputStream.readEndBracket();
}

objectWrapper.addSerializer(new UserSerializer("Drawables", readDrawables));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"o_295":53,"D_281":78,"3_27":79,"M_286":81}],86:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var VectorSerializer = require("M_297");

var ObjectSerializer = require("m_285");

var UserSerializer = require("M_286");

var ObjectWrapper = require("D_281");

var Geometry = require("-_301");

var OsgArray = require("3_302");

var Associate = require("-_290");

var DefaultUserDataContainer = require("._304");

var objectWrapper = new ObjectWrapper("osg::Geometry", ['osg::Object', new Associate("osg::Node", {
  minVersion: 154
}), 'osg::Drawable', 'osg::Geometry'], Geometry);
var AttributeBindingMap = {
  BIND_OFF: 0,
  BIND_OVERALL: 1,
  BIND_PER_PRIMITIVE_SET: 2,
  BIND_PER_PRIMITIVE: 3,
  BIND_PER_VERTEX: 4
};
/**
 *
 * @param {InputStream} inputStream
 * @return {number}
 */

function readAttributeBinding(inputStream) {
  var value = 0;
  if (inputStream.isBinary()) value = inputStream.inputOperator.readInt();else {
    var key = inputStream.inputOperator.readString();
    value = AttributeBindingMap[key];
  }
  return value;
}
/**
 * @param {InputStream} inputStream
 * @return {OsgArray}
 */


function readArray(inputStream) {
  var array = new OsgArray();
  inputStream.readProperty("Array");
  var hasArray = inputStream.inputOperator.readBool();

  if (hasArray) {
    array = inputStream.readArray();
  }

  inputStream.readProperty("Indices");
  var hasIndices = inputStream.inputOperator.readBool();

  if (hasIndices) {
    var indices_array = inputStream.readArray();

    if (indices_array) {
      if (!array.UserDataContainer) // Init UserDataContainer
        array.UserDataContainer = new DefaultUserDataContainer();
      array.UserDataContainer.UserData = indices_array;
    }
  }

  inputStream.readProperty("Binding");
  array.Binding = readAttributeBinding(inputStream);
  inputStream.readProperty("Normalize");
  array.Normalize = inputStream.inputOperator.readInt() !== 0;
  return array;
}

function getReadArrayDataFunction(property) {
  return function (inputStream, geometry) {
    inputStream.readBeginBracket();
    var array = readArray(inputStream);
    geometry.setProperty(property, array);
    inputStream.readEndBracket();
  };
}

function getReadArrayListFunction(property) {
  return function (inputStream, geometry) {
    var size = inputStream.inputOperator.readUInt();
    inputStream.readBeginBracket();
    var ArrayList = [];

    for (var i = 0; i < size; i++) {
      inputStream.readProperty("Data");
      inputStream.readBeginBracket();
      var array = readArray(inputStream);
      ArrayList.push(array);
      inputStream.readEndBracket();
    }

    inputStream.readEndBracket();
    geometry.setProperty(property, ArrayList);
    inputStream.readEndBracket();
  };
}
/**
 * @param {InputStream} inputStream
 * @param {Geometry} Geometry
 */


function readFastPathHint(inputStream, Geometry) {
  if (!inputStream.isBinary()) return inputStream.inputOperator.readBool();
}

objectWrapper.addSerializer(new VectorSerializer("PrimitiveSetList", "PrimitiveSet")); // Until Version 111

objectWrapper.addSerializer(new UserSerializer("VertexData", getReadArrayDataFunction("VertexArray"), {
  maxVersion: 111
}));
objectWrapper.addSerializer(new UserSerializer("NormalData", getReadArrayDataFunction("NormalArray"), {
  maxVersion: 111
}));
objectWrapper.addSerializer(new UserSerializer("ColorData", getReadArrayDataFunction("ColorArray"), {
  maxVersion: 111
}));
objectWrapper.addSerializer(new UserSerializer("SecondaryColorData", getReadArrayDataFunction("SecondaryColorArray"), {
  maxVersion: 111
}));
objectWrapper.addSerializer(new UserSerializer("FogCoordData", getReadArrayDataFunction("FogCoordArray"), {
  maxVersion: 111
}));
objectWrapper.addSerializer(new UserSerializer("TexCoordData", getReadArrayListFunction("TexCoordArray"), {
  maxVersion: 111
}));
objectWrapper.addSerializer(new UserSerializer("VertexAttribData", getReadArrayListFunction("VertexAttribArray"), {
  maxVersion: 111
}));
objectWrapper.addSerializer(new UserSerializer("FastPathHint ", readFastPathHint, {
  maxVersion: 111
})); // From Version 112

objectWrapper.addSerializer(new ObjectSerializer("VertexArray", null, {
  minVersion: 112
}));
objectWrapper.addSerializer(new ObjectSerializer("NormalArray", null, {
  minVersion: 112
}));
objectWrapper.addSerializer(new ObjectSerializer("ColorArray", null, {
  minVersion: 112
}));
objectWrapper.addSerializer(new ObjectSerializer("SecondaryColorArray", null, {
  minVersion: 112
}));
objectWrapper.addSerializer(new ObjectSerializer("FogCoordArray", null, {
  minVersion: 112
}));
objectWrapper.addSerializer(new VectorSerializer("TexCoordArrayList", "Array", {
  minVersion: 112
}));
objectWrapper.addSerializer(new VectorSerializer("VertexAttribArrayList", "Array", {
  minVersion: 112
}));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"._304":51,"-_301":54,"3_302":62,"-_290":71,"m_285":77,"D_281":78,"3_27":79,"M_286":81,"M_297":82}],87:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var UserSerializer = require("M_286");

var ObjectWrapper = require("D_281");

var Group = require("D_17");

var objectWrapper = new ObjectWrapper("osg::Group", ["osg::Object", "osg::Node", "osg::Group"], Group);

function readChildren(inputStream, groupNode) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var obj = inputStream.readObject();

    if (obj) {
      groupNode.Children.push(obj);
    }
  }

  inputStream.readEndBracket();
}

objectWrapper.addSerializer(new UserSerializer("Children", readChildren));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"D_17":55,"D_281":78,"3_27":79,"M_286":81}],88:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var EnumSerializer = require("3_280");

var UserSerializer = require("M_286");

var ObjectWrapper = require("D_281");

var LOD = require("3_313");

var CenterMode = require("._117");

var RangeMode = require("C_118");

var objectWrapper = new ObjectWrapper("osg::LOD", ["osg::Object", "osg::Node", "osg::Group", "osg::LOD"], LOD);

function readRangeList(inputStream, lod) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();
  var ranges = [];

  for (var i = 0; i < size; i++) {
    var min = inputStream.inputOperator.readFloat();
    var max = inputStream.inputOperator.readFloat();
    ranges.push({
      min: min,
      max: max
    });
  }

  inputStream.readEndBracket();
  lod.setProperty("RangeList", ranges);
}

function readUserCenter(inputStream, groupNode) {
  var center = inputStream.readVectorOfType(3, "Double");
  var radius = inputStream.inputOperator.readDouble();
  groupNode.setProperty("Radius", radius);
  groupNode.setProperty("Center", center);
}

objectWrapper.addSerializer(new EnumSerializer("CenterMode", CenterMode, CenterMode.USE_BOUNDING_SPHERE_CENTER));
objectWrapper.addSerializer(new UserSerializer("UserCenter", readUserCenter));
objectWrapper.addSerializer(new EnumSerializer("RangeMode", RangeMode, RangeMode.DISTANCE_FROM_EYE_POINT));
objectWrapper.addSerializer(new UserSerializer("RangeList", readRangeList));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"._117":31,"C_118":32,"3_313":57,"3_280":73,"D_281":78,"3_27":79,"M_286":81}],89:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var EnumSerializer = require("3_280");

var UserSerializer = require("M_286");

var ObjectWrapper = require("D_281");

var Material = require("e_320"); // = require("e_320");


var ColorMode = require("h_322"); // = require("e_320");


var objectWrapper = new ObjectWrapper("osg::Material", ["osg::Object", "osg::StateAttribute", "osg::Material"], Material);

function readMaterialFunc(property, type) {
  function reader(inputStream, material) {
    // todo create function "readType" this in inputStream; also exist in typeReaderFunction
    var readerFunc;

    if (type === "Float") {
      readerFunc = inputStream.inputOperator.readFloat.bind(inputStream.inputOperator);
    } else if (type === "Vec4f") {
      readerFunc = function readerFunc() {
        return inputStream.readVectorOfType(4, "Float");
      };
    } else {
      throw "serializeMaterial - type not supported";
    }

    var frontAndBack = inputStream.inputOperator.readBool();
    inputStream.readProperty("Front");
    var value1 = readerFunc();
    inputStream.readProperty("Back");
    var value2 = readerFunc();

    if (frontAndBack) {
      material[property + "FrontAndBack"] = true;
      material[property + "Front"] = value1;
      material[property + "Back"] = value1;
    } else {
      material[property + "FrontAndBack"] = false;
      material[property + "Front"] = value1;
      material[property + "Back"] = value2;
    }
  }

  return reader;
}

objectWrapper.addSerializer(new EnumSerializer("ColorMode", ColorMode, ColorMode.OFF));
objectWrapper.addSerializer(new UserSerializer("Ambient", readMaterialFunc("Ambient", "Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Diffuse", readMaterialFunc("Ambient", "Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Specular", readMaterialFunc("Ambient", "Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Emission", readMaterialFunc("Ambient", "Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Shininess", readMaterialFunc("Ambient", "Float")));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"h_322":33,"e_320":58,"3_280":73,"D_281":78,"3_27":79,"M_286":81}],90:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var MatrixSerializer = require("D_325");

var ObjectWrapper = require("D_281");

var MatrixTransform = require("C_327");

var objectWrapper = new ObjectWrapper("osg::MatrixTransform", ["osg::Object", "osg::Node", "osg::Group", "osg::Transform", "osg::MatrixTransform"], MatrixTransform);
objectWrapper.addSerializer(new MatrixSerializer("Mode"));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"C_327":59,"D_325":75,"D_281":78,"3_27":79}],91:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var ObjectCallbackSerializer = require("e_287");

var ObjectSerializer = require("m_285");

var UserSerializer = require("M_286");

var PropByValSerializer = require("s_288");

var ObjectWrapper = require("D_281");

var Node = require("-_334");

var objectWrapper = new ObjectWrapper("osg::Node", ["osg::Object", "osg::Node"], Node);

function readInitialBound(inputStream, node) {
  // todo check if readVectorOfType is right
  var center, radius;
  inputStream.readBeginBracket();
  inputStream.readProperty("Center");
  center = inputStream.readVectorOfType(3, "Double");
  inputStream.readProperty("Radius");
  radius = inputStream.inputOperator.readDouble();
  inputStream.readEndBracket();
  node.InitialBound = {
    center: center,
    radius: radius
  };
}

function readDescriptions(inputStream, node) {
  var size = inputStream.inputOperator.readUInt();

  for (var i = 0; i < size; ++i) {
    var value = inputStream.inputOperator.readWrappedString();
    node.descriptions.push(value);
  }

  inputStream.readEndBracket();
}

objectWrapper.addSerializer(new UserSerializer("InitialBound", readInitialBound));
objectWrapper.addSerializer(new ObjectCallbackSerializer("ComputeBoundingSphereCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("UpdateCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("EventCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("CullCallback"));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "CullingActive", true));
objectWrapper.addSerializer(new PropByValSerializer("HEXINT", "NodeMask", 0xffffffff));
objectWrapper.addSerializer(new UserSerializer("Descriptions", readDescriptions, {
  maxVersion: 76
}));
objectWrapper.addSerializer(new ObjectSerializer("StateSet", null));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"-_334":60,"e_287":76,"m_285":77,"D_281":78,"3_27":79,"s_288":80,"M_286":81}],92:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var EnumSerializer = require("3_280");

var ObjectSerializer = require("m_285");

var UserSerializer = require("M_286");

var PropByValSerializer = require("s_288");

var ObjectWrapper = require("D_281");

var ObjectClass = require("M_341");

var ObjectDataVariance = require("e_342");

var objectWrapper = new ObjectWrapper("osg::Object", ["osg::Object"], ObjectClass);

function UserDataReader() {
  // TODO
  throw "UserDataReader not yet supported";
}

objectWrapper.addSerializer(new PropByValSerializer("String", "Name", ""));
objectWrapper.addSerializer(new EnumSerializer("DataVariance", ObjectDataVariance, ObjectDataVariance.UNSPECIFIED));
objectWrapper.addSerializer(new UserSerializer("UserData", UserDataReader, {
  maxVersion: 76
}));
objectWrapper.addSerializer(new ObjectSerializer("UserDataContainer", null, {
  minVersion: 77
}));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"e_342":34,"M_341":61,"3_280":73,"m_285":77,"D_281":78,"3_27":79,"s_288":80,"M_286":81}],93:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var PropByValSerializer = require("s_288");

var UserSerializer = require("M_286");

var ObjectWrapper = require("D_281");

var PagedLOD = require("D_347");

var objectWrapper = new ObjectWrapper("osg::PagedLOD", ["osg::Object", "osg::Node", "osg::LOD", "osg::PagedLOD"], PagedLOD);

function readRangeDataList(inputStream, lod) {
  var fileNames = [],
      priorityOffsets = [],
      priorityScales = [];
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var name = inputStream.inputOperator.readWrappedString();
    fileNames.push(name);
  }

  inputStream.readEndBracket();
  inputStream.readProperty("PriorityList");
  size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var _i = 0; _i < size; _i++) {
    priorityOffsets.push(inputStream.inputOperator.readFloat());
    priorityScales.push(inputStream.inputOperator.readFloat());
  }

  inputStream.readEndBracket();
  lod.setProperty("FileNames", fileNames);
  lod.setProperty("PriorityOffsets", priorityOffsets);
  lod.setProperty("PriorityScales", priorityScales);
}

function readChildren(inputStream, lod) {
  var size = inputStream.inputOperator.readUInt();

  if (size > 0) {
    var children = [];
    inputStream.readBeginBracket();

    for (var i = 0; i < size; i++) {
      var child = inputStream.readObjectOfType("osg::Node");

      if (child) {
        children.push(child);
      }
    }

    inputStream.readEndBracket();
    lod.setProperty("Children", children);
  }
}

function readDatabasePath(inputStream, pagedLod) {
  var hasPath = inputStream.inputOperator.readBool();
  var databasePath;

  if (hasPath) {
    databasePath = inputStream.inputOperator.readWrappedString();
    pagedLod.setProperty("DatabasePath", databasePath);
  } else {// todo
    // if empty databasePath setted in https://github.com/openscenegraph/OpenSceneGraph/blob/31d78b7bb3994065462fb1163d006c8649e7144f/src/osgDB/Registry.cpp#L1169
  }
}

objectWrapper.addSerializer(new UserSerializer("DatabasePath", readDatabasePath));
objectWrapper.addSerializer(new PropByValSerializer("UInt", "FrameNumberOfLastTraversal", 0, {
  maxVersion: 69
}));
objectWrapper.addSerializer(new PropByValSerializer("UInt", "NumChildrenThatCannotBeExpired", 0));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "DisableExternalChildrenPaging", false));
objectWrapper.addSerializer(new UserSerializer("RangeDataList", readRangeDataList));
objectWrapper.addSerializer(new UserSerializer("Children", readChildren));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"D_347":63,"D_281":78,"3_27":79,"s_288":80,"M_286":81}],94:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var EnumSerializer = require("3_280");

var ObjectWrapper = require("D_281");

var ShadeModel = require("m_351");

var ShadeModel_Mode = require("M_352");

var objectWrapper = new ObjectWrapper("osg::ShadeModel", ["osg::Object", "osg::StateAttribute", "osg::ShadeModel"], ShadeModel);
objectWrapper.addSerializer(new EnumSerializer("Mode", ShadeModel_Mode, ShadeModel_Mode.SMOOTH));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"M_352":36,"m_351":64,"3_280":73,"D_281":78,"3_27":79}],95:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var ObjectCallbackSerializer = require("e_287");

var ObjectWrapper = require("D_281");

var StateAttribute = require("-_356");

var objectWrapper = new ObjectWrapper("osg::StateAttribute", ["osg::Object", "osg::StateAttribute"], StateAttribute);
objectWrapper.addSerializer(new ObjectCallbackSerializer("UpdateCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("EventCallback"));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"-_356":65,"e_287":76,"D_281":78,"3_27":79}],96:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("o_9");

var _toConsumableArray2 = _interopRequireDefault(require("3_16"));

var ObjectWrapperManager = require("3_27");

var UserSerializer = require("M_286");

var EnumSerializer = require("3_280");

var PropByValSerializer = require("s_288");

var ObjectCallbackSerializer = require("e_287");

var ObjectWrapper = require("D_281");

var StateSet = require("s_365");

var RenderingHintEnum = require("C_173");

var RenderBinModeEnum = require("o_174");

var StateAttributeValueEnum = require("3_368");

var DataTypes = require("e_45");

var objectWrapper = new ObjectWrapper("osg::StateSet", ["osg::Object", "osg::StateSet"], StateSet); // TODO ALL of reader functions are not exactly like in OGS repo. maybe need to be rewriten
// readModeList, readAttributeList, readTextureModeList, readTextureAttributeList,readUniformList,readDefineList

function readModes(inputStream) {
  var size = inputStream.inputOperator.readUInt();
  var modes = [];

  if (size > 0) {
    inputStream.readBeginBracket();

    for (var i = 0; i < size; i++) {
      var mode = new DataTypes.ObjectGLEnum();
      inputStream.inputOperator.readGLEnum(mode);
      modes.push({
        key: mode.value,
        value: readValue(inputStream)
      });
    }

    inputStream.readEndBracket();
  }

  return modes;
}

function readAttributes(inputStream) {
  var attributes = [];
  var size = inputStream.inputOperator.readUInt();

  if (size > 0) {
    inputStream.readBeginBracket();

    for (var i = 0; i < size; i++) {
      var sa = inputStream.readObjectOfType("osg::StateAttribute");
      inputStream.readProperty("Value");
      var value = readValue(inputStream);

      if (sa) {
        attributes.push({
          key: sa.getTypeMemberPair(),
          value: {
            StateAttribute: sa,
            Value: value
          }
        });
      }
    }

    inputStream.readEndBracket();
  }

  return attributes;
}

function readValue(inputStream) {
  if (inputStream.isBinary()) return inputStream.inputOperator.readInt();else {
    var enumValue = inputStream.inputOperator.readString();
    var value = 0;
    if (enumValue.indexOf("OFF") >= 0) value = StateAttributeValueEnum.OFF;
    if (enumValue.indexOf("ON") >= 0) value = StateAttributeValueEnum.ON;
    if (enumValue.indexOf("OVERRIDE") >= 0) value = value | StateAttributeValueEnum.OVERRIDE;
    if (enumValue.indexOf("PROTECTED") >= 0) value = value | StateAttributeValueEnum.PROTECTED;
    if (enumValue.indexOf("INHERIT") >= 0) value = value | StateAttributeValueEnum.INHERIT;
    return value;
  }
}

function readModeList(inputStream, stateSet) {
  var _stateSet$ModeList;

  var modes = readModes(inputStream);

  (_stateSet$ModeList = stateSet.ModeList).push.apply(_stateSet$ModeList, (0, _toConsumableArray2["default"])(modes));

  return true;
}

function readAttributeList(inputStream, stateSet) {
  var _stateSet$AttributeLi;

  var modes = readAttributes(inputStream);

  (_stateSet$AttributeLi = stateSet.AttributeList).push.apply(_stateSet$AttributeLi, (0, _toConsumableArray2["default"])(modes));
}

function readTextureModeList(inputStream, stateSet) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var _stateSet$TextureMode;

    inputStream.readProperty("Data");

    (_stateSet$TextureMode = stateSet.TextureModeList).push.apply(_stateSet$TextureMode, (0, _toConsumableArray2["default"])(readModes(inputStream)));
  }
}

function readTextureAttributeList(inputStream, stateSet) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var _stateSet$TextureAttr;

    inputStream.readProperty("Data");

    (_stateSet$TextureAttr = stateSet.TextureAttributeList).push.apply(_stateSet$TextureAttr, (0, _toConsumableArray2["default"])(readAttributes(inputStream)));
  }

  inputStream.readEndBracket();
}

function readDefineList(inputStream, stateSet) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var defineName = inputStream.inputOperator.readWrappedString();
    var defineValue = inputStream.inputOperator.readWrappedString();
    inputStream.inputOperator.readObjectProperty(inputStream.PROPERTY.set("Value"));
    var overrideValue = readValue(inputStream);
    stateSet.DefineList[defineName] = {
      DefineValue: defineValue,
      OverrideValue: overrideValue
    };
  }

  inputStream.readEndBracket();
}

function readUniformList(inputStream, stateSet) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var uniform = inputStream.readObjectOfType("osg::Uniform");
    inputStream.inputOperator.readObjectProperty(inputStream.PROPERTY.set("Value"));
    var value = readValue(inputStream);

    if (uniform) {
      stateSet.UniformList.push({
        Uniform: uniform,
        Value: value
      });
    }
  }

  inputStream.readEndBracket();
}

objectWrapper.addSerializer(new UserSerializer("ModeList", readModeList));
objectWrapper.addSerializer(new UserSerializer("AttributeList", readAttributeList));
objectWrapper.addSerializer(new UserSerializer("TextureModeList", readTextureModeList));
objectWrapper.addSerializer(new UserSerializer("TextureAttributeList", readTextureAttributeList));
objectWrapper.addSerializer(new UserSerializer("UniformList", readUniformList));
objectWrapper.addSerializer(new PropByValSerializer("Int", "RenderingHint", RenderingHintEnum.DEFAULT_BIN));
objectWrapper.addSerializer(new EnumSerializer("RenderBinMode", RenderBinModeEnum, RenderBinModeEnum.DEFAULT_BIN));
objectWrapper.addSerializer(new PropByValSerializer("Int", "BinNumber", 0));
objectWrapper.addSerializer(new PropByValSerializer("String", "BinName", ""));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "NestRenderBins", true));
objectWrapper.addSerializer(new ObjectCallbackSerializer("UpdateCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("EventCallback"));
objectWrapper.addSerializer(new UserSerializer("DefineList", readDefineList, {
  minVersion: 151
}));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"e_45":25,"3_368":37,"o_174":38,"C_173":39,"s_365":66,"3_280":73,"e_287":76,"D_281":78,"3_27":79,"s_288":80,"M_286":81,"o_9":8,"3_16":13}],97:[function(require,module,exports){
"use strict";

var UserSerializer = require("M_286");

var PropByValSerializer = require("s_288");

var EnumSerializer = require("3_280");

var Texture = require("m_373");

var InternalFormatModeEnum = require("m_186");

var ShadowCompareFuncEnum = require("M_187");

var ShadowTextureModeEnum = require("e_188");

var _require = require("e_45"),
    ObjectGLEnum = _require.ObjectGLEnum;

var ObjectWrapper = require("D_281");

var ObjectWrapperManager = require("3_27");

var objectWrapper = new ObjectWrapper("osg::Texture", ["osg::Object", "osg::StateAttribute", "osg::Texture"], Texture);
var swizzleDictionary = {
  "R": 0x1903,
  "G": 0x1904,
  "B": 0x1905,
  "A": 0x1906,
  "0": 0,
  "1": 1
};

function readInternalFormat(inputStream, texture) {
  var mode = new ObjectGLEnum();
  inputStream.inputOperator.readGLEnum(mode);

  if (texture.getProperty("InternalFormatMode") === InternalFormatModeEnum.USE_USER_DEFINED_FORMAT) {
    texture.setInternalFormat(mode.value);
  }
}

function readGLEnum(property) {
  return function (inputStream, texture) {
    var mode = new ObjectGLEnum();
    inputStream.inputOperator.readGLEnum(mode);
    texture.setProperty(property, mode);
  };
}

function readSwizzle(inputStream, texture) {
  var swizzleString = inputStream.inputOperator.readString();
  var swizzle = [];

  for (var i = 0; i < 4; i++) {
    swizzle.push(swizzleDictionary[swizzleString.charAt(i)]);
  }

  texture.setProperty("Swizzle", swizzle);
}

function readImageAttachment(inputStream) {
  inputStream.inputOperator.readUInt();
  inputStream.inputOperator.readInt();
  inputStream.inputOperator.readBool();
  inputStream.inputOperator.readInt();
  inputStream.inputOperator.readInt();
  inputStream.inputOperator.readInt();
} // todo add all properties to Texture class


objectWrapper.addSerializer(new UserSerializer("WRAP_S", readGLEnum("WrapS")));
objectWrapper.addSerializer(new UserSerializer("WRAP_T", readGLEnum("WrapT")));
objectWrapper.addSerializer(new UserSerializer("WRAP_R", readGLEnum("WrapR")));
objectWrapper.addSerializer(new UserSerializer("MIN_FILTER", readGLEnum("MinFilter")));
objectWrapper.addSerializer(new UserSerializer("MAG_FILTER", readGLEnum("MinFilter")));
objectWrapper.addSerializer(new PropByValSerializer("Float", "MaxAnisotropy", 1));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "UseHardwareMipMapGeneration", true));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "UnRefImageDataAfterApply", false));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "ClientStorageHint", false));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "ResizeNonPowerOfTwoHint", true));
objectWrapper.addSerializer(new PropByValSerializer("Vec4d", "BorderColor", [0, 0, 0, 0]));
objectWrapper.addSerializer(new PropByValSerializer("GLInt", "BorderWidth", 0));
objectWrapper.addSerializer(new EnumSerializer("InternalFormatMode", InternalFormatModeEnum, InternalFormatModeEnum.USE_IMAGE_DATA_FORMAT));
objectWrapper.addSerializer(new UserSerializer("InternalFormat", readInternalFormat));
objectWrapper.addSerializer(new UserSerializer("SourceFormat", readGLEnum("SourceFormat")));
objectWrapper.addSerializer(new UserSerializer("SourceType", readGLEnum("SourceType")));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "ShadowComparison", false));
objectWrapper.addSerializer(new EnumSerializer("ShadowCompareFunc", ShadowCompareFuncEnum, ShadowCompareFuncEnum.LEQUAL));
objectWrapper.addSerializer(new EnumSerializer("ShadowTextureMode", ShadowTextureModeEnum, ShadowTextureModeEnum.LUMINANCE));
objectWrapper.addSerializer(new PropByValSerializer("Float", "ShadowAmbient", 0)); // From version 95. removed in version 153

objectWrapper.addSerializer(new UserSerializer("ImageAttachment", readImageAttachment, {
  minVersion: 95,
  maxVersion: 152
})); // From version 98

objectWrapper.addSerializer(new UserSerializer("Swizzle", readSwizzle, {
  minVersion: 98
})); // From version 155

objectWrapper.addSerializer(new PropByValSerializer("Float", "MinLOD", 0, {
  minVersion: 155
}));
objectWrapper.addSerializer(new PropByValSerializer("Float", "MaxLOD", -1, {
  minVersion: 155
}));
objectWrapper.addSerializer(new PropByValSerializer("Float", "LODBias", 0, {
  minVersion: 155
}));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"e_45":25,"m_186":40,"M_187":41,"e_188":42,"m_373":67,"3_280":73,"D_281":78,"3_27":79,"s_288":80,"M_286":81}],98:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var PropByValSerializer = require("s_288");

var ImageSerializer = require("C_382");

var ObjectWrapper = require("D_281");

var Texture2D = require("m_384");

var objectWrapper = new ObjectWrapper("osg::Texture2D", ["osg::Object", "osg::StateAttribute", "osg::Texture", "osg::Texture2D"], Texture2D);
objectWrapper.addSerializer(new ImageSerializer("Image", null));
objectWrapper.addSerializer(new PropByValSerializer("Int", "TextureWidth", 0));
objectWrapper.addSerializer(new PropByValSerializer("Int", "TextureHeight", 0));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"m_384":68,"C_382":74,"D_281":78,"3_27":79,"s_288":80}],99:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var EnumSerializer = require("3_280");

var ObjectWrapper = require("D_281");

var Transform = require("h_388");

var ReferenceFrameEnum = require("-_389");

var objectWrapper = new ObjectWrapper("osg::Transform", ["osg::Object", "osg::Node", "osg::Group", "osg::Transform"], Transform);
objectWrapper.addSerializer(new EnumSerializer("Mode", ReferenceFrameEnum, ReferenceFrameEnum.RELATIVE_RF));
ObjectWrapperManager.addWrapper(objectWrapper);

},{"-_389":43,"h_388":69,"3_280":73,"D_281":78,"3_27":79}],100:[function(require,module,exports){
"use strict";

var ObjectWrapperManager = require("3_27");

var UserSerializer = require("M_286");

var ObjectWrapper = require("D_281");

var DefaultUserDataContainer = require("._304");

var UDCobjectWrapper = new ObjectWrapper("osg::UserDataContainer", ["osg::Object", "osg::UserDataContainer"], null // UserDataContainer
);
var DUDCobjectWrapper = new ObjectWrapper("osg::DefaultUserDataContainer", ["osg::Object", "osg::UserDataContainer", "osg::DefaultUserDataContainer"], DefaultUserDataContainer);

function readUserData(inputStream, obj) {
  inputStream.readBeginBracket();
  obj.UserData = inputStream.readObject();
  inputStream.readEndBracket();
}

function readDescriptions(inputStream, obj) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var description = inputStream.inputOperator.readWrappedString();
    obj.DescriptionList.push(description);
  }

  inputStream.readEndBracket();
}

function readUserObject(inputStream, obj) {
  var size = inputStream.inputOperator.readUInt();
  inputStream.readBeginBracket();

  for (var i = 0; i < size; i++) {
    var objReaded = inputStream.inputOperator.readWrappedString();
    obj.ObjectList.push(objReaded);
  }

  inputStream.readEndBracket();
}

DUDCobjectWrapper.addSerializer(new UserSerializer("UDC_UserData", readUserData));
DUDCobjectWrapper.addSerializer(new UserSerializer("UDC_Descriptions", readDescriptions));
DUDCobjectWrapper.addSerializer(new UserSerializer("UDC_UserObjects", readUserObject));
ObjectWrapperManager.addWrapper(DUDCobjectWrapper);
ObjectWrapperManager.addWrapper(UDCobjectWrapper);

},{"._304":51,"D_281":78,"3_27":79,"M_286":81}],101:[function(require,module,exports){
"use strict";

require("o_394");

require("C_96");

require("M_396");

require("e_397");

require("s_90");

require("m_153");

require("-_400");

require("3_401");

require("._84");

require("o_64");

require("C_404");

require("o_405");

require("-_70");

require("M_407");

require("._194");

require("s_409");

require("o_130");

require("M_77");

},{"o_394":83,"C_96":84,"M_396":85,"e_397":86,"s_90":87,"m_153":88,"-_400":89,"3_401":90,"._84":91,"o_64":92,"C_404":93,"o_405":94,"-_70":95,"M_407":96,"._194":97,"s_409":98,"o_130":99,"M_77":100}],102:[function(require,module,exports){
"use strict";

var Log = require("3_412");

var TraverseNodes = require("D_413");

var _require = require("._414"),
    readBuffer = _require.readBuffer,
    readFile = _require.readFile;

var BufferData = require("C_415");

var CullFace = require("o_416");

var DefaultUserDataContainer = require("m_417");

var Drawable = require("M_418");

var Geode = require("e_419");

var Geometry = require("s_420");

var Group = require("h_421");

var Image = require("-_422");

var LOD = require("3_423");

var Material = require("D_424");

var MatrixTransform = require("._425");

var Node = require("C_426");

var Object = require("o_427");

var OsgArray = require("m_428");

var PagedLOD = require("M_429");

var ShadeModel = require("e_430");

var StateAttribute = require("s_431");

var StateSet = require("h_432");

var Texture2D = require("-_433");

var Texture = require("3_434");

var Transform = require("D_435");

var UserDataContainer = require("._436");

module.exports = {
  Log: Log,
  TraverseNodes: TraverseNodes,
  readBuffer: readBuffer,
  readFile: readFile,
  OsgTypes: {
    BufferData: BufferData,
    CullFace: CullFace,
    DefaultUserDataContainer: DefaultUserDataContainer,
    Drawable: Drawable,
    Geode: Geode,
    Geometry: Geometry,
    Group: Group,
    Image: Image,
    LOD: LOD,
    Material: Material,
    MatrixTransform: MatrixTransform,
    Node: Node,
    Object: Object,
    OsgArray: OsgArray,
    PagedLOD: PagedLOD,
    ShadeModel: ShadeModel,
    StateAttribute: StateAttribute,
    StateSet: StateSet,
    Texture2D: Texture2D,
    Texture: Texture,
    Transform: Transform,
    UserDataContainer: UserDataContainer
  }
};
/*module.exports.readFile('./Samples/grass1.osgb',function (err, data) {
    console.log(err,data)
});*/

},{"3_412":26,"D_413":27,"._414":47,"C_415":49,"o_416":50,"m_417":51,"M_418":52,"e_419":53,"s_420":54,"h_421":55,"-_422":56,"3_423":57,"D_424":58,"._425":59,"C_426":60,"o_427":61,"m_428":62,"M_429":63,"e_430":64,"s_431":65,"h_432":66,"3_434":67,"-_433":68,"D_435":69,"._436":70}],103:[function(require,module,exports){
(function (process,global,setImmediate){(function (){
/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2018 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.7.2
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

Async.prototype.invokeLater = AsyncInvokeLater;
Async.prototype.invoke = AsyncInvoke;
Async.prototype.settlePromises = AsyncSettlePromises;


function _drainQueue(queue) {
    while (queue.length() > 0) {
        _drainQueueStep(queue);
    }
}

function _drainQueueStep(queue) {
    var fn = queue.shift();
    if (typeof fn !== "function") {
        fn._settlePromises();
    } else {
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
}

Async.prototype._drainQueues = function () {
    _drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    _drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (!true) {
var makeMethodCaller = function (methodName) {
    return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
};

var makeGetter = function (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
};

var getCompiled = function(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
};

getMethodCaller = function(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
};

getGetter = function(name) {
    return getCompiled(name, makeGetter, getterCache);
};
}

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (!true) {
        if (canEvaluate) {
            var maybeCaller = getMethodCaller(methodName);
            if (maybeCaller !== null) {
                return this._then(
                    maybeCaller, undefined, undefined, args, undefined);
            }
        }
    }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context,
    enableAsyncHooks, disableAsyncHooks) {
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var es5 = _dereq_("./es5");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

var deferUnhandledRejectionCheck;
(function() {
    var promises = [];

    function unhandledRejectionCheck() {
        for (var i = 0; i < promises.length; ++i) {
            promises[i]._notifyUnhandledRejection();
        }
        unhandledRejectionClear();
    }

    function unhandledRejectionClear() {
        promises.length = 0;
    }

    deferUnhandledRejectionCheck = function(promise) {
        promises.push(promise);
        setTimeout(unhandledRejectionCheck, 1);
    };

    es5.defineProperty(Promise, "_unhandledRejectionCheck", {
        value: unhandledRejectionCheck
    });
    es5.defineProperty(Promise, "_unhandledRejectionClear", {
        value: unhandledRejectionClear
    });
})();

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    deferUnhandledRejectionCheck(this);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var context = Promise._getContext();
    possiblyUnhandledRejection = util.contextBind(context, fn);
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var context = Promise._getContext();
    unhandledRejectionHandled = util.contextBind(context, fn);
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        var Promise_dereferenceTrace = Promise.prototype._dereferenceTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Promise.prototype._dereferenceTrace = Promise_dereferenceTrace;
            Context.deactivateLongStackTraces();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Promise.prototype._dereferenceTrace = longStackTracesDereferenceTrace;
        Context.activateLongStackTraces();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};


var legacyHandlers = {
    unhandledrejection: {
        before: function() {
            var ret = util.global.onunhandledrejection;
            util.global.onunhandledrejection = null;
            return ret;
        },
        after: function(fn) {
            util.global.onunhandledrejection = fn;
        }
    },
    rejectionhandled: {
        before: function() {
            var ret = util.global.onrejectionhandled;
            util.global.onrejectionhandled = null;
            return ret;
        },
        after: function(fn) {
            util.global.onrejectionhandled = fn;
        }
    }
};

var fireDomEvent = (function() {
    var dispatch = function(legacy, e) {
        if (legacy) {
            var fn;
            try {
                fn = legacy.before();
                return !util.global.dispatchEvent(e);
            } finally {
                legacy.after(fn);
            }
        } else {
            return !util.global.dispatchEvent(e);
        }
    };
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var eventData = {
                    detail: event,
                    cancelable: true
                };
                var domEvent = new CustomEvent(name, eventData);
                es5.defineProperty(
                    domEvent, "promise", {value: event.promise});
                es5.defineProperty(
                    domEvent, "reason", {value: event.reason});

                return dispatch(legacyHandlers[name], domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var domEvent = new Event(name, {
                    cancelable: true
                });
                domEvent.detail = event;
                es5.defineProperty(domEvent, "promise", {value: event.promise});
                es5.defineProperty(domEvent, "reason", {value: event.reason});
                return dispatch(legacyHandlers[name], domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name, false, true,
                    event);
                return dispatch(legacyHandlers[name], domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    if ("asyncHooks" in opts && util.nodeSupportsAsyncResource) {
        var prev = config.asyncHooks;
        var cur = !!opts.asyncHooks;
        if (prev !== cur) {
            config.asyncHooks = cur;
            if (cur) {
                enableAsyncHooks();
            } else {
                disableAsyncHooks();
            }
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._dereferenceTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function longStackTracesDereferenceTrace() {
    this._trace = undefined;
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = (firstLineError.stack || "").split("\n");
    var lastStackLines = (lastLineError.stack || "").split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false,
    asyncHooks: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    asyncHooks: function() {
        return config.asyncHooks;
    },
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./es5":13,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (!true) {
if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var promiseSetter = function(i) {
        return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
    };

    var generateHolderClass = function(total) {
        var props = new Array(total);
        for (var i = 0; i < props.length; ++i) {
            props[i] = "this.p" + (i+1);
        }
        var assignment = props.join(" = ") + " = null;";
        var cancellationCode= "var promise;\n" + props.map(function(prop) {
            return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
        }).join("\n");
        var passedArguments = props.join(", ");
        var name = "Holder$" + total;


        var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

        code = code.replace(/\[TheName\]/g, name)
            .replace(/\[TheTotal\]/g, total)
            .replace(/\[ThePassedArguments\]/g, passedArguments)
            .replace(/\[TheProperties\]/g, assignment)
            .replace(/\[CancellationCode\]/g, cancellationCode);

        return new Function("tryCatch", "errorObj", "Promise", "async", code)
                           (tryCatch, errorObj, Promise, async);
    };

    var holderClasses = [];
    var thenCallbacks = [];
    var promiseSetters = [];

    for (var i = 0; i < 8; ++i) {
        holderClasses.push(generateHolderClass(i + 1));
        thenCallbacks.push(thenCallback(i + 1));
        promiseSetters.push(promiseSetter(i + 1));
    }

    reject = function (reason) {
        this._reject(reason);
    };
}}

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (!true) {
            if (last <= 8 && canEvaluate) {
                var ret = new Promise(INTERNAL);
                ret._captureStackTrace();
                var HolderClass = holderClasses[last - 1];
                var holder = new HolderClass(fn);
                var callbacks = thenCallbacks;

                for (var i = 0; i < last; ++i) {
                    var maybePromise = tryConvertToPromise(arguments[i], ret);
                    if (maybePromise instanceof Promise) {
                        maybePromise = maybePromise._target();
                        var bitField = maybePromise._bitField;
                        ;
                        if (((bitField & 50397184) === 0)) {
                            maybePromise._then(callbacks[i], reject,
                                               undefined, ret, holder);
                            promiseSetters[i](maybePromise, holder);
                            holder.asyncNeeded = false;
                        } else if (((bitField & 33554432) !== 0)) {
                            callbacks[i].call(ret,
                                              maybePromise._value(), holder);
                        } else if (((bitField & 16777216) !== 0)) {
                            ret._reject(maybePromise._reason());
                        } else {
                            ret._cancel();
                        }
                    } else {
                        callbacks[i].call(ret, maybePromise, holder);
                    }
                }

                if (!ret._isFateSealed()) {
                    if (holder.asyncNeeded) {
                        var context = Promise._getContext();
                        holder.fn = util.contextBind(context, holder.fn);
                    }
                    ret._setAsyncGuaranteed();
                    ret._setOnCancel(holder);
                }
                return ret;
            }
        }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var context = Promise._getContext();
    this._callback = util.contextBind(context, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
    if (util.isArray(promises)) {
        for (var i = 0; i < promises.length; ++i) {
            var maybePromise = promises[i];
            if (maybePromise instanceof Promise) {
                maybePromise.suppressUnhandledRejections();
            }
        }
    }
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");
util.setReflectHandler(reflectHandler);

var getDomain = function() {
    var domain = process.domain;
    if (domain === undefined) {
        return null;
    }
    return domain;
};
var getContextDefault = function() {
    return null;
};
var getContextDomain = function() {
    return {
        domain: getDomain(),
        async: null
    };
};
var AsyncResource = util.isNode && util.nodeSupportsAsyncResource ?
    _dereq_("async_hooks").AsyncResource : null;
var getContextAsyncHooks = function() {
    return {
        domain: getDomain(),
        async: new AsyncResource("Bluebird::Promise")
    };
};
var getContext = util.isNode ? getContextDomain : getContextDefault;
util.notEnumerableProp(Promise, "_getContext", getContext);
var enableAsyncHooks = function() {
    getContext = getContextAsyncHooks;
    util.notEnumerableProp(Promise, "_getContext", getContextAsyncHooks);
};
var disableAsyncHooks = function() {
    getContext = getContextDomain;
    util.notEnumerableProp(Promise, "_getContext", getContextDomain);
};

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;

var debug = _dereq_("./debuggability")(Promise, Context,
    enableAsyncHooks, disableAsyncHooks);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];

        if (typeof fn !== "function") {
            throw new TypeError("The last argument to .catch() " +
                "must be a function, got " + util.toString(fn));
        }
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var context = getContext();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: util.contextBind(context, handler),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise,
                receiver, context);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    var bitField = this._bitField;
    this._bitField = bitField |
        (((bitField & 536870912) >> 2) ^
        134217728);
};

Promise.prototype._setNoAsyncGuarantee = function() {
    this._bitField = (this._bitField | 536870912) &
        (~134217728);
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    context
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 = util.contextBind(context, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 = util.contextBind(context, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                util.contextBind(context, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                util.contextBind(context, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);


    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(maybePromise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
        this._dereferenceTrace();
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    es5.defineProperty(Promise.prototype, Symbol.toStringTag, {
        get: function () {
            return "Object";
        }
    });
}

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async);
Promise.Promise = Promise;
Promise.version = "3.7.2";
_dereq_('./call_get.js')(Promise);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./any.js')(Promise);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./filter.js')(Promise, INTERNAL);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36,"async_hooks":undefined}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
        values.suppressUnhandledRejections();
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (!true) {
var switchCaseArgumentOrder = function(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 3);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
        ret.push(i);
    }
    return ret;
};

var argumentSequence = function(argumentCount) {
    return util.filledRange(argumentCount, "_arg", "");
};

var parameterDeclaration = function(parameterCount) {
    return util.filledRange(
        Math.max(parameterCount, 3), "_arg", "");
};

var parameterCount = function(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
};

makeNodePromisifiedEval =
function(callback, receiver, originalName, fn, _, multiArgs) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (shouldProxyThis) {
            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
        } else {
            ret = receiver === undefined
                ? "ret = callback({{args}}, nodeback); break;\n"
                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
        }
        return ret.replace("{{args}}", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for (var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", (shouldProxyThis
                                ? "ret = callback.apply(this, args);\n"
                                : "ret = callback.apply(receiver, args);\n"));
        return ret;
    }

    var getFunctionCode = typeof callback === "string"
                                ? ("this != null ? this['"+callback+"'] : fn")
                                : "fn";
    var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
        .replace("[GetFunctionCode]", getFunctionCode);
    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
    return new Function("Promise",
                        "fn",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "tryCatch",
                        "errorObj",
                        "notEnumerableProp",
                        "INTERNAL",
                        body)(
                    Promise,
                    fn,
                    receiver,
                    withAppended,
                    maybeWrapAsError,
                    nodebackForPromise,
                    util.tryCatch,
                    util.errorObj,
                    util.notEnumerableProp,
                    INTERNAL);
};
}

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var context = Promise._getContext();
    this._fn = util.contextBind(context, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined &&
        this._eachValues !== null &&
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    for (var j = i; j < length; ++j) {
        var maybePromise = values[j];
        if (maybePromise instanceof Promise) {
            maybePromise.suppressUnhandledRejections();
        }
    }

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };

            value = value._then(gotAccum, undefined, undefined, ctx, undefined);

            if ((i & 127) === 0) {
                value._setNoAsyncGuarantee();
            }
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova)) &&
          ("classList" in document.documentElement)) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.allSettled = function (promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var receiver = new FakeConstructor();
    function ic() {
        return typeof receiver.foo;
    }
    ic();
    ic();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj instanceof Error ||
        (obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string");
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if (classString(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

var reflectHandler;
function contextBind(ctx, cb) {
    if (ctx === null ||
        typeof cb !== "function" ||
        cb === reflectHandler) {
        return cb;
    }

    if (ctx.domain !== null) {
        cb = ctx.domain.bind(cb);
    }

    var async = ctx.async;
    if (async !== null) {
        var old = cb;
        cb = function() {
            var args = (new Array(2)).concat([].slice.call(arguments));;
            args[0] = old;
            args[1] = this;
            return async.runInAsyncScope.apply(async, args);
        };
    }
    return cb;
}

var ret = {
    setReflectHandler: function(fn) {
        reflectHandler = fn;
    },
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    contextBind: contextBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version;
    if (process.versions && process.versions.node) {
        version = process.versions.node.split(".").map(Number);
    } else if (process.version) {
        version = process.version.split(".").map(Number);
    }
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();
ret.nodeSupportsAsyncResource = ret.isNode && (function() {
    var supportsAsync = false;
    try {
        var res = _dereq_("async_hooks").AsyncResource;
        supportsAsync = typeof res.prototype.runInAsyncScope === "function";
    } catch (e) {
        supportsAsync = false;
    }
    return supportsAsync;
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13,"async_hooks":undefined}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("timers").setImmediate)

},{"_process":21,"timers":22}]},{},[102])(102)
});
//# sourceMappingURL=osg.js.map
