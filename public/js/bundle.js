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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(4);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	var _testForElement = __webpack_require__(5);
	
	var _testForElement2 = _interopRequireDefault(_testForElement);
	
	var _placeholders = __webpack_require__(6);
	
	var _placeholders2 = _interopRequireDefault(_placeholders);
	
	var _validation = __webpack_require__(7);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	  Flutter Sign in
	*/
	
	var signIn = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    _placeholders2.default.init(this.requiredInputs);
	  },
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.formSignIn = document.querySelector('.form-sign-in');
	    var emailSignIn = document.querySelector('.email-sign-in');
	    var passSignIn = document.querySelector('.password-sign-in');
	    this.requiredInputs = [emailSignIn, passSignIn];
	  },
	  bindEvents: function bindEvents() {
	    _testForElement2.default.forElement(this.formSignIn, 'click', _validation2.default.liveValidation.bind(this));
	    _testForElement2.default.forElement(this.formSignIn, 'click', this.onInputSelect.bind(this));
	  },
	  onInputSelect: function onInputSelect(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (event.target != input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      } else {
	        input.placeholder = '';
	      }
	    }, this);
	  }
	};
	signIn.init();

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(4);
	
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
	  toggle: function toggle(requiredInputs, event) {
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(4);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validation = module.exports = {
	  liveValidation: function liveValidation(event, requiredInputs) {
	    this.requiredInputs.map(function (input, index) {
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
	
	var _formData = __webpack_require__(4);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	var _testForElement = __webpack_require__(5);
	
	var _testForElement2 = _interopRequireDefault(_testForElement);
	
	var _placeholders = __webpack_require__(6);
	
	var _placeholders2 = _interopRequireDefault(_placeholders);
	
	var _validation = __webpack_require__(7);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	  Flutter Sign Up
	*/
	
	var signUp = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    _placeholders2.default.init(this.requiredInputs);
	  },
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.formSignUp = document.querySelector('.form-sign-up');
	    this.failEmail = document.querySelector('.input-fail-email');
	    var emailSignUp = document.querySelector('.email-sign-up');
	    var passSignUp = document.querySelector('.password-sign-up');
	    this.requiredInputs = [emailSignUp, passSignUp];
	  },
	  initPlaceholders: function initPlaceholders() {
	    this.requiredInputs.map(function (input, index) {
	      if (input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      }
	    }, this);
	  },
	  bindEvents: function bindEvents() {
	    _testForElement2.default.forElement(this.formSignUp, 'click', _validation2.default.liveValidation.bind(this));
	    _testForElement2.default.forElement(this.formSignUp, 'click', this.onInputSelect.bind(this));
	  },
	  onInputSelect: function onInputSelect(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (event.target != input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      } else {
	        input.placeholder = '';
	      }
	    }, this);
	  }
	};
	signUp.init();

/***/ }),
/* 9 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzZkYTA5NmFhNjQwZDQ0ZDAxZWIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9nZ2xlLW1vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3NpZ24taW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybS1kYXRhLmpzIiwid2VicGFjazovLy8uL2pzL3Rlc3QtZm9yLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGxhY2Vob2xkZXJzLmpzIiwid2VicGFjazovLy8uL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2lnbi11cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9kZWxldGUtcG9zdC5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVNb2RhbCIsImluaXQiLCJjYWNoZURPTSIsImJpbmRFdmVudHMiLCJtb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNob3dNb2RhbCIsImNsb3NlQnRuIiwiaWZFbEFkZEV2ZW50IiwiZWwiLCJldmVudCIsIm1ldGhvZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVUb2dnbGVNb2RhbCIsImJpbmQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInNpZ25JbiIsInJlcXVpcmVkSW5wdXRzIiwiZm9ybVNpZ25JbiIsImVtYWlsU2lnbkluIiwicGFzc1NpZ25JbiIsImZvckVsZW1lbnQiLCJsaXZlVmFsaWRhdGlvbiIsIm9uSW5wdXRTZWxlY3QiLCJtYXAiLCJpbnB1dCIsImluZGV4IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJuZXh0U2libGluZyIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImZvcm1EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZ2V4IiwiZXJyb3IiLCJ0ZXN0IiwiZXZlbnRUeXBlIiwicGxhY2Vob2xkZXJzIiwidG9nZ2xlIiwidmFsaWRhdGlvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsInBhcmVudE5vZGUiLCJmYWlsRW1haWwiLCJ0ZXh0Q29udGVudCIsInNpZ25VcCIsImZvcm1TaWduVXAiLCJlbWFpbFNpZ25VcCIsInBhc3NTaWduVXAiLCJpbml0UGxhY2Vob2xkZXJzIiwiZGVsZXRlUG9zdCIsImRlbGV0ZUZsdXR0ZXJQb3N0IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJjbG9zZXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFDQTs7QUFDQTs7QUFDQSx3Qjs7Ozs7Ozs7QUNQQTs7OztBQUlBLEtBQUlBLGNBQWM7QUFDaEJDLFNBQU0sZ0JBQVk7QUFDaEIsVUFBS0MsUUFBTDtBQUNBLFVBQUtDLFVBQUw7QUFDRCxJQUplO0FBS2hCRCxhQUFVLG9CQUFZO0FBQ3BCLFVBQUtFLEtBQUwsR0FBaUJDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCRixTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWpCO0FBQ0EsVUFBS0UsUUFBTCxHQUFpQkgsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNELElBVGU7QUFVaEJILGVBQVksc0JBQVk7QUFDdEIsVUFBS00sWUFBTCxHQUFvQixVQUFVQyxFQUFWLEVBQWNDLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQy9DLFdBQUlGLEVBQUosRUFBUTtBQUNOQSxZQUFHRyxnQkFBSCxDQUFvQkYsS0FBcEIsRUFBMkJDLE1BQTNCO0FBQ0Q7QUFDRixNQUpEO0FBS0EsU0FBSUgsZUFBZSxLQUFLQSxZQUF4QjtBQUNBQSxr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ckIsTUFBTXNCLE1BQU4sSUFBZ0JKLEtBQXBCLEVBQTJCO0FBQ3pCQSxlQUFNSyxXQUFOLEdBQW9CLG1CQUFTQyxJQUFULENBQWNMLEtBQWQsRUFBcUJJLFdBQXpDO0FBQ0QsUUFGRCxNQUVPO0FBQ0xMLGVBQU1LLFdBQU4sR0FBb0IsRUFBcEI7QUFDRDtBQUNGLE1BUEQsRUFPRyxJQVBIO0FBUUQ7QUFyQ1UsRUFBYjtBQXVDQWtCLFFBQU9uRCxJQUFQLEc7Ozs7Ozs7O0FDaERBOzs7O0FBSUEsS0FBSXdELGFBQWE7QUFDZnhELFNBQU0sZ0JBQVk7QUFDaEIsVUFBS0MsUUFBTDtBQUNBLFVBQUtDLFVBQUw7QUFDRCxJQUpjO0FBS2ZELGFBQVUsb0JBQVk7QUFDcEIsVUFBS3dELGlCQUFMLEdBQXlCckQsU0FBU3NELGdCQUFULENBQTBCLGlCQUExQixDQUF6QjtBQUNELElBUGM7QUFRZnhELGVBQVksc0JBQVk7QUFDdEIsVUFBSyxJQUFJeUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtGLGlCQUFMLENBQXVCRyxNQUEzQyxFQUFtREQsR0FBbkQsRUFBd0Q7QUFDdEQsWUFBS0YsaUJBQUwsQ0FBdUJFLENBQXZCLEVBQTBCL0MsZ0JBQTFCLENBQTJDLE9BQTNDLEVBQW9ELEtBQUs0QyxVQUFMLENBQWdCMUMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBcEQ7QUFDRDtBQUNGLElBWmM7QUFhZjBDLGVBQVksb0JBQVU5QyxLQUFWLEVBQWlCO0FBQzNCO0FBQ0FBLFdBQU1zQixNQUFOLENBQWE2QixPQUFiLENBQXFCLE9BQXJCLEVBQThCNUMsTUFBOUI7QUFDRDs7QUFoQmMsRUFBakI7QUFtQkF1QyxZQUFXeEQsSUFBWCxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM2ZGEwOTZhYTY0MGQ0NGQwMWViIiwiLypcbiAgV2VicGFjayBlbnRyeSBwb2ludFxuKi9cblxuaW1wb3J0ICcuL3RvZ2dsZS1tb2RhbCc7XG5pbXBvcnQgJy4vc2lnbi1pbi5qcyc7XG5pbXBvcnQgJy4vc2lnbi11cC5qcyc7XG5pbXBvcnQgJy4vZGVsZXRlLXBvc3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKlxuICBGbHV0dGVyIFRvZ2dsZSBNb2RhbFxuKi9cblxudmFyIHRvZ2dsZU1vZGFsID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYWNoZURPTTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW9kYWwgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgdGhpcy5zaG93TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1tb2RhbCcpO1xuICAgIHRoaXMuY2xvc2VCdG4gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuICB9LFxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pZkVsQWRkRXZlbnQgPSBmdW5jdGlvbiAoZWwsIGV2ZW50LCBtZXRob2QpIHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBtZXRob2QpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaWZFbEFkZEV2ZW50ID0gdGhpcy5pZkVsQWRkRXZlbnQ7XG4gICAgaWZFbEFkZEV2ZW50KHRoaXMuc2hvd01vZGFsLCAnY2xpY2snLCB0aGlzLmhhbmRsZVRvZ2dsZU1vZGFsLmJpbmQodGhpcykpO1xuICAgIGlmRWxBZGRFdmVudCh0aGlzLmNsb3NlQnRuLCAnY2xpY2snLCB0aGlzLmhhbmRsZVRvZ2dsZU1vZGFsLmJpbmQodGhpcykpO1xuICB9LFxuICBoYW5kbGVUb2dnbGVNb2RhbDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufVxudG9nZ2xlTW9kYWwuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdG9nZ2xlLW1vZGFsLmpzIiwiLypcbiAgRmx1dHRlciBTaWduIGluXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi9mb3JtLWRhdGEnO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi90ZXN0LWZvci1lbGVtZW50JztcbmltcG9ydCBwbGFjZWhvbGRlcnMgZnJvbSAnLi9wbGFjZWhvbGRlcnMnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi92YWxpZGF0aW9uJztcblxudmFyIHNpZ25JbiA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBwbGFjZWhvbGRlcnMuaW5pdCh0aGlzLnJlcXVpcmVkSW5wdXRzKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsb3NlQnRuICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gICAgdGhpcy5mb3JtU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbi1pbicpO1xuICAgIHZhciBlbWFpbFNpZ25JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1zaWduLWluJyk7XG4gICAgdmFyIHBhc3NTaWduSW4gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3JkLXNpZ24taW4nKTtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gW1xuICAgICAgZW1haWxTaWduSW4sXG4gICAgICBwYXNzU2lnbkluXG4gICAgXTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduSW4gLCAnY2xpY2snLCB2YWxpZGF0aW9uLmxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduSW4sICdjbGljaycsIHRoaXMub25JbnB1dFNlbGVjdC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgb25JbnB1dFNlbGVjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5zaWduSW4uaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2lnbi1pbi5qcyIsIi8qXG4gIEZvcm0gZGF0YVxuKi9cblxudmFyIGZvcm1EYXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ2VtYWlsJyxcbiAgICAgIHJlZ2V4OiAnXlthLXpBLVowLTkuISMkJSZcXCcqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokJyxcbiAgICAgIGVycm9yOiAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdwYXNzd29yZCcsXG4gICAgICByZWdleDogJ14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkuKiQnLFxuICAgICAgZXJyb3I6ICdNdXN0IGhhdmUgdXBwZXIsIGxvd2VyIGNhc2UgJiBudW1iZXInXG4gICAgfVxuICBdLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZm9ybS1kYXRhLmpzIiwiLypcbiAgRGVsZXRlIHBvc3RcbiovXG5cbnZhciB0ZXN0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIHRlc3QuZm9yRWxlbWVudCBjcmVhdGVkIHRvIGF2b2lkIGVycm9ycyBpZiB0aGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NXG4gIGZvckVsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgZXZlbnRUeXBlLCBtZXRob2QpIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBtZXRob2QpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIi8qXG4gIFNldCBpbml0aWFsIHBsYWNlaG9sZGVycyBmb3IgaW5wdXRzXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi9mb3JtLWRhdGEnO1xuXG52YXIgcGxhY2Vob2xkZXJzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIChyZXF1aXJlZElucHV0cykge1xuICAgIHJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgdG9nZ2xlOiBmdW5jdGlvbiAocmVxdWlyZWRJbnB1dHMsIGV2ZW50KSB7XG4gICAgcmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uTWVzc2FnZSA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGxhY2Vob2xkZXJzLmpzIiwiLypcbiAgSGFuZGxlcnMgdXNlZCBpbiBtdWx0aXBsZSBvYmplY3RzXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi9mb3JtLWRhdGEnO1xuXG52YXIgdmFsaWRhdGlvbiA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBsaXZlVmFsaWRhdGlvbjogZnVuY3Rpb24gKGV2ZW50LCByZXF1aXJlZElucHV0cykge1xuICAgIHRoaXMucmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uTWVzc2FnZSA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLm1hdGNoKGZvcm1EYXRhLmRhdGFbaW5kZXhdLnJlZ2V4KSkge1xuICAgICAgICBpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcbiAgICAgICAgdGhpcy5mYWlsRW1haWwgPyB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9ICcnIDogdmFsaWRhdGlvbk1lc3NhZ2UudGV4dENvbnRlbnQgPSAn4oiaJztcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZmFpbCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UudGV4dENvbnRlbnQgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5lcnJvcjtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1mYWlsJyk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3ZhbGlkYXRpb24uanMiLCIvKlxuICBGbHV0dGVyIFNpZ24gVXBcbiovXG5cbmltcG9ydCBmb3JtRGF0YSBmcm9tICcuL2Zvcm0tZGF0YSc7XG5pbXBvcnQgdGVzdCBmcm9tICcuL3Rlc3QtZm9yLWVsZW1lbnQnO1xuaW1wb3J0IHBsYWNlaG9sZGVycyBmcm9tICcuL3BsYWNlaG9sZGVycyc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG52YXIgc2lnblVwID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHBsYWNlaG9sZGVycy5pbml0KHRoaXMucmVxdWlyZWRJbnB1dHMpO1xuICB9LFxuICBjYWNoZURPTTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xvc2VCdG4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idG4nKTtcbiAgICB0aGlzLmZvcm1TaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zaWduLXVwJyk7XG4gICAgdGhpcy5mYWlsRW1haWwgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZhaWwtZW1haWwnKTtcbiAgICB2YXIgZW1haWxTaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtc2lnbi11cCcpO1xuICAgIHZhciBwYXNzU2lnblVwICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1zaWduLXVwJyk7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IFtcbiAgICAgIGVtYWlsU2lnblVwLFxuICAgICAgcGFzc1NpZ25VcFxuICAgIF07XG4gIH0sXG4gIGluaXRQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduVXAgLCAnY2xpY2snLCB2YWxpZGF0aW9uLmxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmZvcm1TaWduVXAsICdjbGljaycsIHRoaXMub25JbnB1dFNlbGVjdC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgb25JbnB1dFNlbGVjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5zaWduVXAuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2lnbi11cC5qcyIsIi8qXG4gIERlbGV0ZSBwb3N0XG4qL1xuXG52YXIgZGVsZXRlUG9zdCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlbGV0ZUZsdXR0ZXJQb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1mbHV0dGVyJyk7XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVsZXRlRmx1dHRlclBvc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGVsZXRlRmx1dHRlclBvc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVBvc3QuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9LFxuICBkZWxldGVQb3N0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBjdXJyZW50bHkgb25seSBkZWxldGVzIGZyb20gRE9NXG4gICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wb3N0JykucmVtb3ZlKCk7XG4gIH0sXG5cbn1cbmRlbGV0ZVBvc3QuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZGVsZXRlLXBvc3QuanMiXSwic291cmNlUm9vdCI6IiJ9