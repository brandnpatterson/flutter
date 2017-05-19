/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(8);
	
	__webpack_require__(9);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Delete post
	*/
	
	var deletePost = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	  },
	  cacheDOM: function cacheDOM() {
	    this.deleteFlutterPost = document.querySelectorAll('.delete-flutter');
	  },
	  bindEvents: function bindEvents() {
	    for (var i = 0; i < this.deleteFlutterPost.length; i++) {
	      this.deleteFlutterPost[i].addEventListener('click', this.deletePost.bind(this));
	    }
	  },
	  deletePost: function deletePost(event) {
	    // currently only deletes from DOM
	    event.target.closest('.post').remove();
	  }
	
	};
	deletePost.init();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _testForElement = __webpack_require__(4);
	
	var _testForElement2 = _interopRequireDefault(_testForElement);
	
	var _placeholders = __webpack_require__(5);
	
	var _placeholders2 = _interopRequireDefault(_placeholders);
	
	var _validation = __webpack_require__(7);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var auth = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    _placeholders2.default.init(this.requiredSignIn);
	  },
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.formSignIn = document.querySelector('.form-sign-in');
	    this.failEmail = document.querySelector('.input-fail-email');
	    var emailSignIn = document.querySelector('.email-sign-in');
	    var passSignIn = document.querySelector('.password-sign-in');
	    this.requiredSignIn = [emailSignIn, passSignIn];
	  },
	  bindEvents: function bindEvents() {
	    // test.forElement found in handlers folder
	    _testForElement2.default.forElement(this.formSignIn, 'click', this.liveValidation.bind(this));
	    _testForElement2.default.forElement(this.formSignIn, 'click', this.placeholdersToggle.bind(this));
	  },
	  liveValidation: function liveValidation() {
	    _validation2.default.liveValidation(this.requiredSignIn);
	  },
	  placeholdersToggle: function placeholdersToggle() {
	    _placeholders2.default.toggle(this.requiredSignIn);
	  }
	}; /*
	     Flutter Sign in
	   */
	
	auth.init();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	/*
	  Delete post
	*/
	
	var test = module.exports = {
	  // test.forElement created to avoid errors if the element is not present in the DOM
	  forElement: function forElement(el, eventType, method) {
	    if (el) {
	      el.addEventListener(eventType, method);
	    }
	  }
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(6);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var placeholders = module.exports = {
	  init: function init(requiredInputs) {
	    requiredInputs.map(function (input, index) {
	      if (input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      }
	    }, this);
	  },
	  toggle: function toggle(requiredInputs) {
	    requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (event.target != input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      } else {
	        input.placeholder = '';
	      }
	    }, this);
	  }
	}; /*
	     Set initial placeholders for inputs
	   */

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Form data
	*/
	
	var formData = module.exports = {
	  data: [{
	    placeholder: 'email',
	    regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
	    error: 'Must be a valid email'
	  }, {
	    placeholder: 'password',
	    regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
	    error: 'Must have upper, lower case & number'
	  }]
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(6);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validation = module.exports = {
	  liveValidation: function liveValidation(requiredInputs) {
	    requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (input.value === '') {
	        event.preventDefault();
	        return;
	      } else if (input.value.match(_formData2.default.data[index].regex)) {
	        input.parentNode.classList.add('flex');
	        this.failEmail ? validationMessage.textContent = '' : validationMessage.textContent = '√';
	        validationMessage.classList.remove('input-fail');
	        validationMessage.classList.add('input-success');
	      } else {
	        event.preventDefault();
	        input.parentNode.classList.remove('flex');
	        validationMessage.textContent = _formData2.default.data[index].error;
	        validationMessage.classList.remove('input-success');
	        validationMessage.classList.add('input-fail');
	      }
	    }, this);
	  }
	}; /*
	     Handlers used in multiple objects
	   */

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _testForElement = __webpack_require__(4);
	
	var _testForElement2 = _interopRequireDefault(_testForElement);
	
	var _placeholders = __webpack_require__(5);
	
	var _placeholders2 = _interopRequireDefault(_placeholders);
	
	var _validation = __webpack_require__(7);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var auth = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    _placeholders2.default.init(this.requiredSignUp);
	  },
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.formSignUp = document.querySelector('.form-sign-up');
	    this.failEmail = document.querySelector('.input-fail-email');
	    var emailSignUp = document.querySelector('.email-sign-up');
	    var passSignUp = document.querySelector('.password-sign-up');
	    this.requiredSignUp = [emailSignUp, passSignUp];
	  },
	  bindEvents: function bindEvents() {
	    // test.forElement found in handlers folder
	    _testForElement2.default.forElement(this.formSignUp, 'click', this.liveValidation.bind(this));
	    _testForElement2.default.forElement(this.formSignUp, 'click', this.placeholdersToggle.bind(this));
	  },
	  liveValidation: function liveValidation() {
	    _validation2.default.liveValidation(this.requiredSignUp);
	  },
	  placeholdersToggle: function placeholdersToggle() {
	    _placeholders2.default.toggle(this.requiredSignUp);
	  }
	}; /*
	     Flutter Sign in
	   */
	
	auth.init();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Flutter Toggle Modal
	*/
	
	var toggleModal = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	  },
	  cacheDOM: function cacheDOM() {
	    this.modal = document.querySelector('.modal');
	    this.showModal = document.querySelector('.show-modal');
	    this.closeBtn = document.querySelector('.close-btn');
	  },
	  bindEvents: function bindEvents() {
	    this.ifElAddEvent = function (el, event, method) {
	      if (el) {
	        el.addEventListener(event, method);
	      }
	    };
	    var ifElAddEvent = this.ifElAddEvent;
	    ifElAddEvent(this.showModal, 'click', this.handleToggleModal.bind(this));
	    ifElAddEvent(this.closeBtn, 'click', this.handleToggleModal.bind(this));
	  },
	  handleToggleModal: function handleToggleModal() {
	    if (this.modal.classList.contains('hidden')) {
	      this.modal.classList.remove('hidden');
	      this.modal.classList.add('fade-in');
	    } else {
	      this.modal.classList.remove('fade-in');
	      this.modal.classList.add('hidden');
	    }
	  }
	};
	toggleModal.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODE5NDQ3ZjUzMmQ3NDZlYTI2ODYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGVsZXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2lnbi1pbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZXJzL3BsYWNlaG9sZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zaWduLXVwLmpzIiwid2VicGFjazovLy8uL2pzL3RvZ2dsZS1tb2RhbC5qcyJdLCJuYW1lcyI6WyJkZWxldGVQb3N0IiwiaW5pdCIsImNhY2hlRE9NIiwiYmluZEV2ZW50cyIsImRlbGV0ZUZsdXR0ZXJQb3N0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiYXV0aCIsInJlcXVpcmVkU2lnbkluIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yIiwiZm9ybVNpZ25JbiIsImZhaWxFbWFpbCIsImVtYWlsU2lnbkluIiwicGFzc1NpZ25JbiIsImZvckVsZW1lbnQiLCJsaXZlVmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyc1RvZ2dsZSIsInRvZ2dsZSIsInRlc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJwbGFjZWhvbGRlcnMiLCJyZXF1aXJlZElucHV0cyIsIm1hcCIsImlucHV0IiwiaW5kZXgiLCJwbGFjZWhvbGRlciIsImRhdGEiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIm5leHRTaWJsaW5nIiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidmFsaWRhdGlvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInJlcXVpcmVkU2lnblVwIiwiZm9ybVNpZ25VcCIsImVtYWlsU2lnblVwIiwicGFzc1NpZ25VcCIsInRvZ2dsZU1vZGFsIiwibW9kYWwiLCJzaG93TW9kYWwiLCJpZkVsQWRkRXZlbnQiLCJoYW5kbGVUb2dnbGVNb2RhbCIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFDQTs7QUFDQTs7QUFDQSx3Qjs7Ozs7Ozs7QUNQQTs7OztBQUlBLEtBQUlBLGFBQWE7QUFDZkMsU0FBTSxnQkFBWTtBQUNoQixVQUFLQyxRQUFMO0FBQ0EsVUFBS0MsVUFBTDtBQUNELElBSmM7QUFLZkQsYUFBVSxvQkFBWTtBQUNwQixVQUFLRSxpQkFBTCxHQUF5QkMsU0FBU0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXpCO0FBQ0QsSUFQYztBQVFmSCxlQUFZLHNCQUFZO0FBQ3RCLFVBQUssSUFBSUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtILGlCQUFMLENBQXVCSSxNQUEzQyxFQUFtREQsR0FBbkQsRUFBd0Q7QUFDdEQsWUFBS0gsaUJBQUwsQ0FBdUJHLENBQXZCLEVBQTBCRSxnQkFBMUIsQ0FBMkMsT0FBM0MsRUFBb0QsS0FBS1QsVUFBTCxDQUFnQlUsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBcEQ7QUFDRDtBQUNGLElBWmM7QUFhZlYsZUFBWSxvQkFBVVcsS0FBVixFQUFpQjtBQUMzQjtBQUNBQSxXQUFN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QSxZQUFLNEMsS0FBTCxDQUFXUixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixTQUF6QjtBQUNELE1BSEQsTUFHTztBQUNMLFlBQUtPLEtBQUwsQ0FBV1IsU0FBWCxDQUFxQnBDLE1BQXJCLENBQTRCLFNBQTVCO0FBQ0EsWUFBSzRDLEtBQUwsQ0FBV1IsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsUUFBekI7QUFDRDtBQUNGO0FBNUJlLEVBQWxCO0FBOEJBTSxhQUFZeEQsSUFBWixHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgxOTQ0N2Y1MzJkNzQ2ZWEyNjg2IiwiLypcbiAgV2VicGFjayBlbnRyeSBwb2ludFxuKi9cblxuaW1wb3J0ICcuL2RlbGV0ZS1wb3N0JztcbmltcG9ydCAnLi9zaWduLWluLmpzJztcbmltcG9ydCAnLi9zaWduLXVwLmpzJztcbmltcG9ydCAnLi90b2dnbGUtbW9kYWwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKlxuICBEZWxldGUgcG9zdFxuKi9cblxudmFyIGRlbGV0ZVBvc3QgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWxldGVGbHV0dGVyUG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtZmx1dHRlcicpO1xuICB9LFxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRlbGV0ZUZsdXR0ZXJQb3N0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRlbGV0ZUZsdXR0ZXJQb3N0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVQb3N0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfSxcbiAgZGVsZXRlUG9zdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gY3VycmVudGx5IG9ubHkgZGVsZXRlcyBmcm9tIERPTVxuICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucG9zdCcpLnJlbW92ZSgpO1xuICB9LFxuXG59XG5kZWxldGVQb3N0LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2RlbGV0ZS1wb3N0LmpzIiwiLypcbiAgRmx1dHRlciBTaWduIGluXG4qL1xuXG5pbXBvcnQgdGVzdCBmcm9tICcuL2hhbmRsZXJzL3Rlc3QtZm9yLWVsZW1lbnQnO1xuaW1wb3J0IHBsYWNlaG9sZGVycyBmcm9tICcuL2hhbmRsZXJzL3BsYWNlaG9sZGVycyc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2hhbmRsZXJzL3ZhbGlkYXRpb24nO1xuXG52YXIgYXV0aCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBwbGFjZWhvbGRlcnMuaW5pdCh0aGlzLnJlcXVpcmVkU2lnbkluKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsb3NlQnRuICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gICAgdGhpcy5mb3JtU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbi1pbicpO1xuICAgIHRoaXMuZmFpbEVtYWlsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1mYWlsLWVtYWlsJyk7XG4gICAgdmFyIGVtYWlsU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLXNpZ24taW4nKTtcbiAgICB2YXIgcGFzc1NpZ25JbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtc2lnbi1pbicpO1xuICAgIHRoaXMucmVxdWlyZWRTaWduSW4gPSBbXG4gICAgICBlbWFpbFNpZ25JbixcbiAgICAgIHBhc3NTaWduSW5cbiAgICBdO1xuICB9LFxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGVzdC5mb3JFbGVtZW50IGZvdW5kIGluIGhhbmRsZXJzIGZvbGRlclxuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduSW4gLCAnY2xpY2snLCB0aGlzLmxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduSW4sICdjbGljaycsIHRoaXMucGxhY2Vob2xkZXJzVG9nZ2xlLmJpbmQodGhpcykpO1xuICB9LFxuICBsaXZlVmFsaWRhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhbGlkYXRpb24ubGl2ZVZhbGlkYXRpb24odGhpcy5yZXF1aXJlZFNpZ25Jbik7XG4gIH0sXG4gIHBsYWNlaG9sZGVyc1RvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgIHBsYWNlaG9sZGVycy50b2dnbGUodGhpcy5yZXF1aXJlZFNpZ25Jbik7XG4gIH1cbn1cbmF1dGguaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2lnbi1pbi5qcyIsIi8qXG4gIERlbGV0ZSBwb3N0XG4qL1xuXG52YXIgdGVzdCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAvLyB0ZXN0LmZvckVsZW1lbnQgY3JlYXRlZCB0byBhdm9pZCBlcnJvcnMgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTVxuICBmb3JFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGV2ZW50VHlwZSwgbWV0aG9kKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbWV0aG9kKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3Rlc3QtZm9yLWVsZW1lbnQuanMiLCIvKlxuICBTZXQgaW5pdGlhbCBwbGFjZWhvbGRlcnMgZm9yIGlucHV0c1xuKi9cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2Zvcm0tZGF0YSc7XG5cbnZhciBwbGFjZWhvbGRlcnMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKHJlcXVpcmVkSW5wdXRzKSB7XG4gICAgcmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuICB0b2dnbGU6IGZ1bmN0aW9uIChyZXF1aXJlZElucHV0cykge1xuICAgIHJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT0gaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3BsYWNlaG9sZGVycy5qcyIsIi8qXG4gIEZvcm0gZGF0YVxuKi9cblxudmFyIGZvcm1EYXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ2VtYWlsJyxcbiAgICAgIHJlZ2V4OiAnXlthLXpBLVowLTkuISMkJSZcXCcqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokJyxcbiAgICAgIGVycm9yOiAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdwYXNzd29yZCcsXG4gICAgICByZWdleDogJ14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkuKiQnLFxuICAgICAgZXJyb3I6ICdNdXN0IGhhdmUgdXBwZXIsIGxvd2VyIGNhc2UgJiBudW1iZXInXG4gICAgfVxuICBdLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZm9ybS1kYXRhLmpzIiwiLypcbiAgSGFuZGxlcnMgdXNlZCBpbiBtdWx0aXBsZSBvYmplY3RzXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZm9ybS1kYXRhJztcblxudmFyIHZhbGlkYXRpb24gPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGl2ZVZhbGlkYXRpb246IGZ1bmN0aW9uIChyZXF1aXJlZElucHV0cykge1xuICAgIHJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS5tYXRjaChmb3JtRGF0YS5kYXRhW2luZGV4XS5yZWdleCkpIHtcbiAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gICAgICAgIHRoaXMuZmFpbEVtYWlsID8gdmFsaWRhdGlvbk1lc3NhZ2UudGV4dENvbnRlbnQgPSAnJyA6IHZhbGlkYXRpb25NZXNzYWdlLnRleHRDb250ZW50ID0gJ+KImic7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4Jyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLnRleHRDb250ZW50ID0gZm9ybURhdGEuZGF0YVtpbmRleF0uZXJyb3I7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwiLypcbiAgRmx1dHRlciBTaWduIGluXG4qL1xuXG5pbXBvcnQgdGVzdCBmcm9tICcuL2hhbmRsZXJzL3Rlc3QtZm9yLWVsZW1lbnQnO1xuaW1wb3J0IHBsYWNlaG9sZGVycyBmcm9tICcuL2hhbmRsZXJzL3BsYWNlaG9sZGVycyc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2hhbmRsZXJzL3ZhbGlkYXRpb24nO1xuXG52YXIgYXV0aCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBwbGFjZWhvbGRlcnMuaW5pdCh0aGlzLnJlcXVpcmVkU2lnblVwKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsb3NlQnRuICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gICAgdGhpcy5mb3JtU2lnblVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbi11cCcpO1xuICAgIHRoaXMuZmFpbEVtYWlsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1mYWlsLWVtYWlsJyk7XG4gICAgdmFyIGVtYWlsU2lnblVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLXNpZ24tdXAnKTtcbiAgICB2YXIgcGFzc1NpZ25VcCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtc2lnbi11cCcpO1xuICAgIHRoaXMucmVxdWlyZWRTaWduVXAgPSBbXG4gICAgICBlbWFpbFNpZ25VcCxcbiAgICAgIHBhc3NTaWduVXBcbiAgICBdO1xuICB9LFxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGVzdC5mb3JFbGVtZW50IGZvdW5kIGluIGhhbmRsZXJzIGZvbGRlclxuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduVXAgLCAnY2xpY2snLCB0aGlzLmxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduVXAsICdjbGljaycsIHRoaXMucGxhY2Vob2xkZXJzVG9nZ2xlLmJpbmQodGhpcykpO1xuICB9LFxuICBsaXZlVmFsaWRhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhbGlkYXRpb24ubGl2ZVZhbGlkYXRpb24odGhpcy5yZXF1aXJlZFNpZ25VcCk7XG4gIH0sXG4gIHBsYWNlaG9sZGVyc1RvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgIHBsYWNlaG9sZGVycy50b2dnbGUodGhpcy5yZXF1aXJlZFNpZ25VcCk7XG4gIH1cbn1cbmF1dGguaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2lnbi11cC5qcyIsIi8qXG4gIEZsdXR0ZXIgVG9nZ2xlIE1vZGFsXG4qL1xuXG52YXIgdG9nZ2xlTW9kYWwgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5tb2RhbCAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0aGlzLnNob3dNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vZGFsJyk7XG4gICAgdGhpcy5jbG9zZUJ0biAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlmRWxBZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpZkVsQWRkRXZlbnQgPSB0aGlzLmlmRWxBZGRFdmVudDtcbiAgICBpZkVsQWRkRXZlbnQodGhpcy5zaG93TW9kYWwsICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gICAgaWZFbEFkZEV2ZW50KHRoaXMuY2xvc2VCdG4sICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVRvZ2dsZU1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59XG50b2dnbGVNb2RhbC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy90b2dnbGUtbW9kYWwuanMiXSwic291cmNlUm9vdCI6IiJ9