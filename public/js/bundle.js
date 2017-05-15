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
	
	__webpack_require__(5);

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
	
	var _formValidation = __webpack_require__(4);
	
	var _formValidation2 = _interopRequireDefault(_formValidation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signIn = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    this.initPlaceholders();
	  },
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.formSignIn = document.querySelector('.form-sign-in');
	    var emailSignIn = document.querySelector('.email-sign-in');
	    var passSignIn = document.querySelector('.password-sign-in');
	    this.requiredInputs = [emailSignIn, passSignIn];
	  },
	  initPlaceholders: function initPlaceholders() {
	    this.requiredInputs.map(function (input, index) {
	      if (input) {
	        input.placeholder = _formValidation2.default.data[index].placeholder;
	      }
	    }, this);
	  },
	  bindEvents: function bindEvents() {
	    // Avoids errors if the element is not present in the DOM
	    this.ifElAddEvent = function (el, event, method) {
	      if (el) {
	        el.addEventListener(event, method);
	      }
	    };
	    var ifElAddEvent = this.ifElAddEvent;
	    ifElAddEvent(this.formSignIn, 'click', this.handleLiveValidation.bind(this));
	    ifElAddEvent(document, 'click', this.onInputSelect.bind(this));
	  },
	  handleLiveValidation: function handleLiveValidation(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (input.value === '') {
	        event.preventDefault();
	        return;
	      } else if (input.value.match(_formValidation2.default.data[index].regex)) {
	        input.parentNode.classList.add('flex');
	        validationMessage.textContent = '√';
	        validationMessage.classList.remove('input-fail');
	        validationMessage.classList.add('input-success');
	      } else {
	        event.preventDefault();
	        input.parentNode.classList.remove('flex');
	        validationMessage.textContent = _formValidation2.default.data[index].error;
	        validationMessage.classList.remove('input-success');
	        validationMessage.classList.add('input-fail');
	      }
	    }, this);
	  },
	  onInputSelect: function onInputSelect(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (event.target != input) {
	        input.placeholder = _formValidation2.default.data[index].placeholder;
	      } else {
	        input.placeholder = '';
	      }
	    }, this);
	  }
	}; /*
	     Flutter Sign in
	   */
	
	signIn.init();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	var formValidation = module.exports = {
	  data: [{
	    placeholder: 'email',
	    regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
	    error: 'Must be a valid email'
	  }, {
	    placeholder: 'password',
	    regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
	    error: 'Include upper / lower case and number'
	  }]
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formValidation = __webpack_require__(4);
	
	var _formValidation2 = _interopRequireDefault(_formValidation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signUp = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    this.initPlaceholders();
	  },
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.formSignUp = document.querySelector('.form-sign-up');
	    var emailSignUp = document.querySelector('.email-sign-up');
	    var passSignUp = document.querySelector('.password-sign-up');
	    this.requiredInputs = [emailSignUp, passSignUp];
	  },
	  initPlaceholders: function initPlaceholders() {
	    this.requiredInputs.map(function (input, index) {
	      if (input) {
	        input.placeholder = _formValidation2.default.data[index].placeholder;
	      }
	    }, this);
	  },
	  bindEvents: function bindEvents() {
	    // Avoids errors if the element is not present in the DOM
	    this.ifElAddEvent = function (el, event, method) {
	      if (el) {
	        el.addEventListener(event, method);
	      }
	    };
	    var ifElAddEvent = this.ifElAddEvent;
	    ifElAddEvent(this.formSignUp, 'click', this.handleLiveValidation.bind(this));
	    ifElAddEvent(document, 'click', this.onInputSelect.bind(this));
	  },
	  handleLiveValidation: function handleLiveValidation(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (input.value === '') {
	        event.preventDefault();
	        return;
	      } else if (input.value.match(_formValidation2.default.data[index].regex)) {
	        input.parentNode.classList.add('flex');
	        validationMessage.textContent = '√';
	        validationMessage.classList.remove('input-fail');
	        validationMessage.classList.add('input-success');
	      } else {
	        event.preventDefault();
	        input.parentNode.classList.remove('flex');
	        validationMessage.textContent = _formValidation2.default.data[index].error;
	        validationMessage.classList.remove('input-success');
	        validationMessage.classList.add('input-fail');
	      }
	    }, this);
	  },
	  onInputSelect: function onInputSelect(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (event.target != input) {
	        input.placeholder = _formValidation2.default.data[index].placeholder;
	      } else {
	        input.placeholder = '';
	      }
	    }, this);
	  }
	}; /*
	     Flutter Sign Up
	   */
	
	signUp.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzk0OGFlYzYwY2YzMDU5OTU2ZjIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9nZ2xlLW1vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3NpZ24taW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybS12YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL3NpZ24tdXAuanMiXSwibmFtZXMiOlsidG9nZ2xlTW9kYWwiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzaG93TW9kYWwiLCJjbG9zZUJ0biIsImlmRWxBZGRFdmVudCIsImVsIiwiZXZlbnQiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlVG9nZ2xlTW9kYWwiLCJiaW5kIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJzaWduSW4iLCJpbml0UGxhY2Vob2xkZXJzIiwiZm9ybVNpZ25JbiIsImVtYWlsU2lnbkluIiwicGFzc1NpZ25JbiIsInJlcXVpcmVkSW5wdXRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImhhbmRsZUxpdmVWYWxpZGF0aW9uIiwib25JbnB1dFNlbGVjdCIsInZhbGlkYXRpb25NZXNzYWdlIiwibmV4dFNpYmxpbmciLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwibWF0Y2giLCJyZWdleCIsInBhcmVudE5vZGUiLCJ0ZXh0Q29udGVudCIsImVycm9yIiwidGFyZ2V0IiwiZm9ybVZhbGlkYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnblVwIiwiZm9ybVNpZ25VcCIsImVtYWlsU2lnblVwIiwicGFzc1NpZ25VcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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RUFBMkJDLFdBQS9DO0FBQ0QsUUFGRCxNQUVPO0FBQ0xGLGVBQU1FLFdBQU4sR0FBb0IsRUFBcEI7QUFDRDtBQUNGLE1BUEQsRUFPRyxJQVBIO0FBUUQ7QUEvRFUsRUFBYixDLENBTkE7Ozs7QUF1RUFpQixRQUFPN0MsSUFBUCxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc5NDhhZWM2MGNmMzA1OTk1NmYyIiwiLypcbiAgV2VicGFjayBlbnRyeSBwb2ludFxuKi9cblxuaW1wb3J0ICcuL3RvZ2dsZS1tb2RhbCc7XG5pbXBvcnQgJy4vc2lnbi1pbi5qcyc7XG5pbXBvcnQgJy4vc2lnbi11cC5qcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qXG4gIEZsdXR0ZXIgVG9nZ2xlIE1vZGFsXG4qL1xuXG52YXIgdG9nZ2xlTW9kYWwgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5tb2RhbCAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0aGlzLnNob3dNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vZGFsJyk7XG4gICAgdGhpcy5jbG9zZUJ0biAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlmRWxBZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpZkVsQWRkRXZlbnQgPSB0aGlzLmlmRWxBZGRFdmVudDtcbiAgICBpZkVsQWRkRXZlbnQodGhpcy5zaG93TW9kYWwsICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gICAgaWZFbEFkZEV2ZW50KHRoaXMuY2xvc2VCdG4sICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVRvZ2dsZU1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59XG50b2dnbGVNb2RhbC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy90b2dnbGUtbW9kYWwuanMiLCIvKlxuICBGbHV0dGVyIFNpZ24gaW5cbiovXG5cbmltcG9ydCBmb3JtVmFsaWRhdGlvbiBmcm9tICcuL2Zvcm0tdmFsaWRhdGlvbic7XG5cbnZhciBzaWduSW4gPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5pbml0UGxhY2Vob2xkZXJzKCk7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbG9zZUJ0biAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuICAgIHRoaXMuZm9ybVNpZ25JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNpZ24taW4nKTtcbiAgICB2YXIgZW1haWxTaWduSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtc2lnbi1pbicpO1xuICAgIHZhciBwYXNzU2lnbkluICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1zaWduLWluJyk7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IFtcbiAgICAgIGVtYWlsU2lnbkluLFxuICAgICAgcGFzc1NpZ25JblxuICAgIF07XG4gIH0sXG4gIGluaXRQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtVmFsaWRhdGlvbi5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIC8vIEF2b2lkcyBlcnJvcnMgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTVxuICAgIHRoaXMuaWZFbEFkZEV2ZW50ID0gZnVuY3Rpb24gKGVsLCBldmVudCwgbWV0aG9kKSB7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGlmRWxBZGRFdmVudCA9IHRoaXMuaWZFbEFkZEV2ZW50O1xuICAgIGlmRWxBZGRFdmVudCh0aGlzLmZvcm1TaWduSW4gLCAnY2xpY2snLCB0aGlzLmhhbmRsZUxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIGlmRWxBZGRFdmVudChkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5vbklucHV0U2VsZWN0LmJpbmQodGhpcykpO1xuICB9LFxuICBoYW5kbGVMaXZlVmFsaWRhdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9ICfiiJonO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1WYWxpZGF0aW9uLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgb25JbnB1dFNlbGVjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5zaWduSW4uaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2lnbi1pbi5qcyIsInZhciBmb3JtVmFsaWRhdGlvbiA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiBbXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdlbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05LiEjJCUmXFwnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJCcsXG4gICAgICBlcnJvcjogJ011c3QgYmUgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAncGFzc3dvcmQnLFxuICAgICAgcmVnZXg6ICdeKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pLiokJyxcbiAgICAgIGVycm9yOiAnSW5jbHVkZSB1cHBlciAvIGxvd2VyIGNhc2UgYW5kIG51bWJlcidcbiAgICB9XG4gIF0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9mb3JtLXZhbGlkYXRpb24uanMiLCIvKlxuICBGbHV0dGVyIFNpZ24gVXBcbiovXG5cbmltcG9ydCBmb3JtVmFsaWRhdGlvbiBmcm9tICcuL2Zvcm0tdmFsaWRhdGlvbic7XG5cbnZhciBzaWduVXAgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5pbml0UGxhY2Vob2xkZXJzKCk7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbG9zZUJ0biAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuICAgIHRoaXMuZm9ybVNpZ25VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNpZ24tdXAnKTtcbiAgICB2YXIgZW1haWxTaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtc2lnbi11cCcpO1xuICAgIHZhciBwYXNzU2lnblVwICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1zaWduLXVwJyk7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IFtcbiAgICAgIGVtYWlsU2lnblVwLFxuICAgICAgcGFzc1NpZ25VcFxuICAgIF07XG4gIH0sXG4gIGluaXRQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtVmFsaWRhdGlvbi5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIC8vIEF2b2lkcyBlcnJvcnMgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTVxuICAgIHRoaXMuaWZFbEFkZEV2ZW50ID0gZnVuY3Rpb24gKGVsLCBldmVudCwgbWV0aG9kKSB7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGlmRWxBZGRFdmVudCA9IHRoaXMuaWZFbEFkZEV2ZW50O1xuICAgIGlmRWxBZGRFdmVudCh0aGlzLmZvcm1TaWduVXAgLCAnY2xpY2snLCB0aGlzLmhhbmRsZUxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIGlmRWxBZGRFdmVudChkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5vbklucHV0U2VsZWN0LmJpbmQodGhpcykpO1xuICB9LFxuICBoYW5kbGVMaXZlVmFsaWRhdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9ICfiiJonO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1WYWxpZGF0aW9uLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgb25JbnB1dFNlbGVjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5zaWduVXAuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2lnbi11cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=