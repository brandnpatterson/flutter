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
	  // set initial input placeholder values
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
	        // toggle input placeholder value to blank only when user selects input
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
	
	// formData used to match user input for validation

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
	     Flutter Sign ins
	   */
	
	auth.init();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _testForElement = __webpack_require__(4);
	
	var _testForElement2 = _interopRequireDefault(_testForElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toggleModal = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	  },
	  cacheDOM: function cacheDOM() {
	    this.modal = document.querySelector('.modal');
	    this.showModal = document.querySelector('.show-modal');
	    this.closeBtn = document.querySelector('.close-btn');
	    this.fadeIn = document.querySelector('.fade-in');
	  },
	  bindEvents: function bindEvents() {
	    // test.forElement found in handlers folder
	    _testForElement2.default.forElement(this.showModal, 'click', this.handleToggleModal.bind(this));
	    _testForElement2.default.forElement(this.closeBtn, 'click', this.handleToggleModal.bind(this));
	  },
	  consoleLog: function consoleLog() {
	    console.log('hi');
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
	}; /*
	     Flutter Toggle Modal
	   */
	
	toggleModal.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDc3ZDk0MTQ5ZmEzNTk5NzIzMjAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGVsZXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2lnbi1pbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZXJzL3BsYWNlaG9sZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zaWduLXVwLmpzIiwid2VicGFjazovLy8uL2pzL3RvZ2dsZS1tb2RhbC5qcyJdLCJuYW1lcyI6WyJkZWxldGVQb3N0IiwiaW5pdCIsImNhY2hlRE9NIiwiYmluZEV2ZW50cyIsImRlbGV0ZUZsdXR0ZXJQb3N0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiYXV0aCIsInJlcXVpcmVkU2lnbkluIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yIiwiZm9ybVNpZ25JbiIsImZhaWxFbWFpbCIsImVtYWlsU2lnbkluIiwicGFzc1NpZ25JbiIsImZvckVsZW1lbnQiLCJsaXZlVmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyc1RvZ2dsZSIsInRvZ2dsZSIsInRlc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJwbGFjZWhvbGRlcnMiLCJyZXF1aXJlZElucHV0cyIsIm1hcCIsImlucHV0IiwiaW5kZXgiLCJwbGFjZWhvbGRlciIsImRhdGEiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIm5leHRTaWJsaW5nIiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidmFsaWRhdGlvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInJlcXVpcmVkU2lnblVwIiwiZm9ybVNpZ25VcCIsImVtYWlsU2lnblVwIiwicGFzc1NpZ25VcCIsInRvZ2dsZU1vZGFsIiwibW9kYWwiLCJzaG93TW9kYWwiLCJmYWRlSW4iLCJoYW5kbGVUb2dnbGVNb2RhbCIsImNvbnNvbGVMb2ciLCJjb25zb2xlIiwibG9nIiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOztBQUNBOztBQUNBOztBQUNBLHdCOzs7Ozs7OztBQ1BBOzs7O0FBSUEsS0FBSUEsYUFBYTtBQUNmQyxTQUFNLGdCQUFZO0FBQ2hCLFVBQUtDLFFBQUw7QUFDQSxVQUFLQyxVQUFMO0FBQ0QsSUFKYztBQUtmRCxhQUFVLG9CQUFZO0FBQ3BCLFVBQUtFLGlCQUFMLEdBQXlCQyxTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBekI7QUFDRCxJQVBjO0FBUWZILGVBQVksc0JBQVk7QUFDdEIsVUFBSyxJQUFJSSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS0gsaUJBQUwsQ0FBdUJJLE1BQTNDLEVBQW1ERCxHQUFuRCxFQUF3RDtBQUN0RCxZQUFLSCxpQkFBTCxDQUF1QkcsQ0FBdkIsRUFBMEJFLGdCQUExQixDQUEyQyxPQUEzQyxFQUFvRCxLQUFLVCxVQUFMLENBQWdCVSxJQUFoQixDQUFxQixJQUFyQixDQUFwRDtBQUNEO0FBQ0YsSUFaYztBQWFmVixlQUFZLG9CQUFVVyxLQUFW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QUFDQSxZQUFLNEMsS0FBTCxDQUFXUixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixTQUF6QjtBQUNELE1BSEQsTUFHTztBQUNMLFlBQUtPLEtBQUwsQ0FBV1IsU0FBWCxDQUFxQnBDLE1BQXJCLENBQTRCLFNBQTVCO0FBQ0EsWUFBSzRDLEtBQUwsQ0FBV1IsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsUUFBekI7QUFDRDtBQUNGO0FBM0JlLEVBQWxCLEMsQ0FOQTs7OztBQW1DQU0sYUFBWXhELElBQVosRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNzdkOTQxNDlmYTM1OTk3MjMyMCIsIi8qXG4gIFdlYnBhY2sgZW50cnkgcG9pbnRcbiovXG5cbmltcG9ydCAnLi9kZWxldGUtcG9zdCc7XG5pbXBvcnQgJy4vc2lnbi1pbi5qcyc7XG5pbXBvcnQgJy4vc2lnbi11cC5qcyc7XG5pbXBvcnQgJy4vdG9nZ2xlLW1vZGFsJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLypcbiAgRGVsZXRlIHBvc3RcbiovXG5cbnZhciBkZWxldGVQb3N0ID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYWNoZURPTTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVsZXRlRmx1dHRlclBvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWZsdXR0ZXInKTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kZWxldGVGbHV0dGVyUG9zdC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kZWxldGVGbHV0dGVyUG9zdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlUG9zdC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0sXG4gIGRlbGV0ZVBvc3Q6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIGN1cnJlbnRseSBvbmx5IGRlbGV0ZXMgZnJvbSBET01cbiAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBvc3QnKS5yZW1vdmUoKTtcbiAgfSxcblxufVxuZGVsZXRlUG9zdC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9kZWxldGUtcG9zdC5qcyIsIi8qXG4gIEZsdXR0ZXIgU2lnbiBpblxuKi9cblxuaW1wb3J0IHRlc3QgZnJvbSAnLi9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50JztcbmltcG9ydCBwbGFjZWhvbGRlcnMgZnJvbSAnLi9oYW5kbGVycy9wbGFjZWhvbGRlcnMnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9oYW5kbGVycy92YWxpZGF0aW9uJztcblxudmFyIGF1dGggPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgcGxhY2Vob2xkZXJzLmluaXQodGhpcy5yZXF1aXJlZFNpZ25Jbik7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbG9zZUJ0biAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuICAgIHRoaXMuZm9ybVNpZ25JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNpZ24taW4nKTtcbiAgICB0aGlzLmZhaWxFbWFpbCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmFpbC1lbWFpbCcpO1xuICAgIHZhciBlbWFpbFNpZ25JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1zaWduLWluJyk7XG4gICAgdmFyIHBhc3NTaWduSW4gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3JkLXNpZ24taW4nKTtcbiAgICB0aGlzLnJlcXVpcmVkU2lnbkluID0gW1xuICAgICAgZW1haWxTaWduSW4sXG4gICAgICBwYXNzU2lnbkluXG4gICAgXTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIC8vIHRlc3QuZm9yRWxlbWVudCBmb3VuZCBpbiBoYW5kbGVycyBmb2xkZXJcbiAgICB0ZXN0LmZvckVsZW1lbnQodGhpcy5mb3JtU2lnbkluICwgJ2NsaWNrJywgdGhpcy5saXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0LmZvckVsZW1lbnQodGhpcy5mb3JtU2lnbkluLCAnY2xpY2snLCB0aGlzLnBsYWNlaG9sZGVyc1RvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgbGl2ZVZhbGlkYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB2YWxpZGF0aW9uLmxpdmVWYWxpZGF0aW9uKHRoaXMucmVxdWlyZWRTaWduSW4pO1xuICB9LFxuICBwbGFjZWhvbGRlcnNUb2dnbGU6IGZ1bmN0aW9uICgpIHtcbiAgICBwbGFjZWhvbGRlcnMudG9nZ2xlKHRoaXMucmVxdWlyZWRTaWduSW4pO1xuICB9XG59XG5hdXRoLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NpZ24taW4uanMiLCIvKlxuICBEZWxldGUgcG9zdFxuKi9cblxudmFyIHRlc3QgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gdGVzdC5mb3JFbGVtZW50IGNyZWF0ZWQgdG8gYXZvaWQgZXJyb3JzIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSBET01cbiAgZm9yRWxlbWVudDogZnVuY3Rpb24gKGVsLCBldmVudFR5cGUsIG1ldGhvZCkge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIG1ldGhvZCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50LmpzIiwiLypcbiAgU2V0IGluaXRpYWwgcGxhY2Vob2xkZXJzIGZvciBpbnB1dHNcbiovXG5cbmltcG9ydCBmb3JtRGF0YSBmcm9tICcuLi9mb3JtLWRhdGEnO1xuXG52YXIgcGxhY2Vob2xkZXJzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIHNldCBpbml0aWFsIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlc1xuICBpbml0OiBmdW5jdGlvbiAocmVxdWlyZWRJbnB1dHMpIHtcbiAgICByZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIHRvZ2dsZTogZnVuY3Rpb24gKHJlcXVpcmVkSW5wdXRzKSB7XG4gICAgcmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uTWVzc2FnZSA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdG9nZ2xlIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlIHRvIGJsYW5rIG9ubHkgd2hlbiB1c2VyIHNlbGVjdHMgaW5wdXRcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvcGxhY2Vob2xkZXJzLmpzIiwiLypcbiAgRm9ybSBkYXRhXG4qL1xuXG52YXIgZm9ybURhdGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnZW1haWwnLFxuICAgICAgcmVnZXg6ICdeW2EtekEtWjAtOS4hIyQlJlxcJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQnLFxuICAgICAgZXJyb3I6ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ3Bhc3N3b3JkJyxcbiAgICAgIHJlZ2V4OiAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKS4qJCcsXG4gICAgICBlcnJvcjogJ011c3QgaGF2ZSB1cHBlciwgbG93ZXIgY2FzZSAmIG51bWJlcidcbiAgICB9XG4gIF0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9mb3JtLWRhdGEuanMiLCIvKlxuICBIYW5kbGVycyB1c2VkIGluIG11bHRpcGxlIG9iamVjdHNcbiovXG5cbi8vIGZvcm1EYXRhIHVzZWQgdG8gbWF0Y2ggdXNlciBpbnB1dCBmb3IgdmFsaWRhdGlvblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2Zvcm0tZGF0YSc7XG5cbnZhciB2YWxpZGF0aW9uID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxpdmVWYWxpZGF0aW9uOiBmdW5jdGlvbiAocmVxdWlyZWRJbnB1dHMpIHtcbiAgICByZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybURhdGEuZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgICB0aGlzLmZhaWxFbWFpbCA/IHZhbGlkYXRpb25NZXNzYWdlLnRleHRDb250ZW50ID0gJycgOiB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9ICfiiJonO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIi8qXG4gIEZsdXR0ZXIgU2lnbiBpbnNcbiovXG5cbmltcG9ydCB0ZXN0IGZyb20gJy4vaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudCc7XG5pbXBvcnQgcGxhY2Vob2xkZXJzIGZyb20gJy4vaGFuZGxlcnMvcGxhY2Vob2xkZXJzJztcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbnZhciBhdXRoID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHBsYWNlaG9sZGVycy5pbml0KHRoaXMucmVxdWlyZWRTaWduVXApO1xuICB9LFxuICBjYWNoZURPTTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xvc2VCdG4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idG4nKTtcbiAgICB0aGlzLmZvcm1TaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zaWduLXVwJyk7XG4gICAgdGhpcy5mYWlsRW1haWwgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZhaWwtZW1haWwnKTtcbiAgICB2YXIgZW1haWxTaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtc2lnbi11cCcpO1xuICAgIHZhciBwYXNzU2lnblVwICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1zaWduLXVwJyk7XG4gICAgdGhpcy5yZXF1aXJlZFNpZ25VcCA9IFtcbiAgICAgIGVtYWlsU2lnblVwLFxuICAgICAgcGFzc1NpZ25VcFxuICAgIF07XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0ZXN0LmZvckVsZW1lbnQgZm91bmQgaW4gaGFuZGxlcnMgZm9sZGVyXG4gICAgdGVzdC5mb3JFbGVtZW50KHRoaXMuZm9ybVNpZ25VcCAsICdjbGljaycsIHRoaXMubGl2ZVZhbGlkYXRpb24uYmluZCh0aGlzKSk7XG4gICAgdGVzdC5mb3JFbGVtZW50KHRoaXMuZm9ybVNpZ25VcCwgJ2NsaWNrJywgdGhpcy5wbGFjZWhvbGRlcnNUb2dnbGUuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGxpdmVWYWxpZGF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFsaWRhdGlvbi5saXZlVmFsaWRhdGlvbih0aGlzLnJlcXVpcmVkU2lnblVwKTtcbiAgfSxcbiAgcGxhY2Vob2xkZXJzVG9nZ2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgcGxhY2Vob2xkZXJzLnRvZ2dsZSh0aGlzLnJlcXVpcmVkU2lnblVwKTtcbiAgfVxufVxuYXV0aC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zaWduLXVwLmpzIiwiLypcbiAgRmx1dHRlciBUb2dnbGUgTW9kYWxcbiovXG5cbmltcG9ydCB0ZXN0IGZyb20gJy4vaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyc7XG5cbnZhciB0b2dnbGVNb2RhbCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vZGFsICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIHRoaXMuc2hvd01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctbW9kYWwnKTtcbiAgICB0aGlzLmNsb3NlQnRuICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idG4nKTtcbiAgICB0aGlzLmZhZGVJbiAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWRlLWluJyk7XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0ZXN0LmZvckVsZW1lbnQgZm91bmQgaW4gaGFuZGxlcnMgZm9sZGVyXG4gICAgdGVzdC5mb3JFbGVtZW50KHRoaXMuc2hvd01vZGFsLCAnY2xpY2snLCB0aGlzLmhhbmRsZVRvZ2dsZU1vZGFsLmJpbmQodGhpcykpO1xuICAgIHRlc3QuZm9yRWxlbWVudCh0aGlzLmNsb3NlQnRuLCAnY2xpY2snLCB0aGlzLmhhbmRsZVRvZ2dsZU1vZGFsLmJpbmQodGhpcykpO1xuICB9LFxuICBjb25zb2xlTG9nOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gIH0sXG4gIGhhbmRsZVRvZ2dsZU1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59XG50b2dnbGVNb2RhbC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy90b2dnbGUtbW9kYWwuanMiXSwic291cmNlUm9vdCI6IiJ9