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
	
	__webpack_require__(6);

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
	    ifElAddEvent(this.formSignIn, 'click', this.onInputSelect.bind(this));
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
	
	/*
	  Form validation data
	*/
	var formValidation = module.exports = {
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
	    this.failEmail = document.querySelector('.input-fail-email');
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
	    ifElAddEvent(this.formSignUp, 'click', this.onInputSelect.bind(this));
	  },
	  handleLiveValidation: function handleLiveValidation(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (input.value === '') {
	        event.preventDefault();
	        return;
	      } else if (input.value.match(_formValidation2.default.data[index].regex)) {
	        input.parentNode.classList.add('flex');
	        this.failEmail ? validationMessage.textContent = '' : validationMessage.textContent = '√';
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Delete post - currently only deletes from DOM
	*/
	
	var deleteSelectedPost = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	  },
	  cacheDOM: function cacheDOM() {
	    this.deleteFlutterPost = document.querySelectorAll('.delete-flutter');
	  },
	  bindEvents: function bindEvents() {
	    for (var i = 0; i < this.deleteFlutterPost.length; i++) {
	      this.deleteFlutterPost[i].addEventListener('click', this.deleteSelectedPost.bind(this));
	    }
	  },
	  deleteSelectedPost: function deleteSelectedPost(event) {
	    event.target.closest('.post').remove();
	  }
	
	};
	deleteSelectedPost.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTE3ZTdjNjIwNzJiMzg4OWM3MWQiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9nZ2xlLW1vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3NpZ24taW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybS12YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL3NpZ24tdXAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGVsZXRlLXNlbGVjdGVkLXBvc3QuanMiXSwibmFtZXMiOlsidG9nZ2xlTW9kYWwiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzaG93TW9kYWwiLCJjbG9zZUJ0biIsImlmRWxBZGRFdmVudCIsImVsIiwiZXZlbnQiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlVG9nZ2xlTW9kYWwiLCJiaW5kIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJzaWduSW4iLCJpbml0UGxhY2Vob2xkZXJzIiwiZm9ybVNpZ25JbiIsImVtYWlsU2lnbkluIiwicGFzc1NpZ25JbiIsInJlcXVpcmVkSW5wdXRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImhhbmRsZUxpdmVWYWxpZGF0aW9uIiwib25JbnB1dFNlbGVjdCIsInZhbGlkYXRpb25NZXNzYWdlIiwibmV4dFNpYmxpbmciLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwibWF0Y2giLCJyZWdleCIsInBhcmVudE5vZGUiLCJ0ZXh0Q29udGVudCIsImVycm9yIiwidGFyZ2V0IiwiZm9ybVZhbGlkYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnblVwIiwiZm9ybVNpZ25VcCIsImZhaWxFbWFpbCIsImVtYWlsU2lnblVwIiwicGFzc1NpZ25VcCIsImRlbGV0ZVNlbGVjdGVkUG9zdCIsImRlbGV0ZUZsdXR0ZXJQb3N0IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJjbG9zZXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFDQTs7QUFDQTs7QUFDQSx3Qjs7Ozs7Ozs7QUNQQTs7OztBQUlBLEtBQUlBLGNBQWM7QUFDaEJDLFNBQU0sZ0JBQVk7QUFDaEIsVUFBS0MsUUFBTDtBQUNBLFVBQUtDLFVBQUw7QUFDRCxJQUplO0FBS2hCRCxhQUFVLG9CQUFZO0FBQ3BCLFVBQUtFLEtBQUwsR0FBaUJDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCRixTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWpCO0FBQ0EsVUFBS0UsUUFBTCxHQUFpQkgsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNELElBVGU7QUFVaEJILGVBQVksc0JBQVk7QUFDdEIsVUFBS00sWUFBTCxHQUFvQixVQUFVQyxFQUFWLEVBQWNDLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQy9DLFdBQUlGLEVBQUosRUFBUTtBQUNOQSxZQUFHRyxnQkFBSCxDQUFvQkYsS0FBcEIsRUFBMkJDLE1BQTNCO0FBQ0Q7QUFDRixNQUpEO0FBS0EsU0FBSUgsZUFBZSxLQUFLQSxZQUF4QjtBQUNBQSxrQkFBYSxLQUFLRixTQUFsQixFQUE2QixPQUE3QixFQUFzQyxLQUFLTyxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBdEM7QUFDQU4sa0JBQWEsS0FBS0QsUUFBbEIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBS00saUJBQUwsQ0FBdUJD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QjtBQUNEOztBQWZzQixFQUF6QjtBQWtCQWlDLG9CQUFtQmxELElBQW5CLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTE3ZTdjNjIwNzJiMzg4OWM3MWQiLCIvKlxuICBXZWJwYWNrIGVudHJ5IHBvaW50XG4qL1xuXG5pbXBvcnQgJy4vdG9nZ2xlLW1vZGFsJztcbmltcG9ydCAnLi9zaWduLWluLmpzJztcbmltcG9ydCAnLi9zaWduLXVwLmpzJztcbmltcG9ydCAnLi9kZWxldGUtc2VsZWN0ZWQtcG9zdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qXG4gIEZsdXR0ZXIgVG9nZ2xlIE1vZGFsXG4qL1xuXG52YXIgdG9nZ2xlTW9kYWwgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5tb2RhbCAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0aGlzLnNob3dNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vZGFsJyk7XG4gICAgdGhpcy5jbG9zZUJ0biAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlmRWxBZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpZkVsQWRkRXZlbnQgPSB0aGlzLmlmRWxBZGRFdmVudDtcbiAgICBpZkVsQWRkRXZlbnQodGhpcy5zaG93TW9kYWwsICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gICAgaWZFbEFkZEV2ZW50KHRoaXMuY2xvc2VCdG4sICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVRvZ2dsZU1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59XG50b2dnbGVNb2RhbC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy90b2dnbGUtbW9kYWwuanMiLCIvKlxuICBGbHV0dGVyIFNpZ24gaW5cbiovXG5cbmltcG9ydCBmb3JtVmFsaWRhdGlvbiBmcm9tICcuL2Zvcm0tdmFsaWRhdGlvbic7XG5cbnZhciBzaWduSW4gPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5pbml0UGxhY2Vob2xkZXJzKCk7XG4gIH0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbG9zZUJ0biAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuICAgIHRoaXMuZm9ybVNpZ25JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNpZ24taW4nKTtcbiAgICB2YXIgZW1haWxTaWduSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtc2lnbi1pbicpO1xuICAgIHZhciBwYXNzU2lnbkluICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1zaWduLWluJyk7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IFtcbiAgICAgIGVtYWlsU2lnbkluLFxuICAgICAgcGFzc1NpZ25JblxuICAgIF07XG4gIH0sXG4gIGluaXRQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtVmFsaWRhdGlvbi5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIC8vIEF2b2lkcyBlcnJvcnMgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTVxuICAgIHRoaXMuaWZFbEFkZEV2ZW50ID0gZnVuY3Rpb24gKGVsLCBldmVudCwgbWV0aG9kKSB7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGlmRWxBZGRFdmVudCA9IHRoaXMuaWZFbEFkZEV2ZW50O1xuICAgIGlmRWxBZGRFdmVudCh0aGlzLmZvcm1TaWduSW4gLCAnY2xpY2snLCB0aGlzLmhhbmRsZUxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIGlmRWxBZGRFdmVudCh0aGlzLmZvcm1TaWduSW4sICdjbGljaycsIHRoaXMub25JbnB1dFNlbGVjdC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlTGl2ZVZhbGlkYXRpb246IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMucmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uTWVzc2FnZSA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLm1hdGNoKGZvcm1WYWxpZGF0aW9uLmRhdGFbaW5kZXhdLnJlZ2V4KSkge1xuICAgICAgICBpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UudGV4dENvbnRlbnQgPSAn4oiaJztcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZmFpbCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UudGV4dENvbnRlbnQgPSBmb3JtVmFsaWRhdGlvbi5kYXRhW2luZGV4XS5lcnJvcjtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1mYWlsJyk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIG9uSW5wdXRTZWxlY3Q6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMucmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uTWVzc2FnZSA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1WYWxpZGF0aW9uLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuc2lnbkluLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NpZ24taW4uanMiLCIvKlxuICBGb3JtIHZhbGlkYXRpb24gZGF0YVxuKi9cbnZhciBmb3JtVmFsaWRhdGlvbiA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiBbXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdlbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05LiEjJCUmXFwnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJCcsXG4gICAgICBlcnJvcjogJ011c3QgYmUgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAncGFzc3dvcmQnLFxuICAgICAgcmVnZXg6ICdeKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pLiokJyxcbiAgICAgIGVycm9yOiAnTXVzdCBoYXZlIHVwcGVyLCBsb3dlciBjYXNlICYgbnVtYmVyJ1xuICAgIH1cbiAgXSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIi8qXG4gIEZsdXR0ZXIgU2lnbiBVcFxuKi9cblxuaW1wb3J0IGZvcm1WYWxpZGF0aW9uIGZyb20gJy4vZm9ybS12YWxpZGF0aW9uJztcblxudmFyIHNpZ25VcCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB0aGlzLmluaXRQbGFjZWhvbGRlcnMoKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsb3NlQnRuICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gICAgdGhpcy5mb3JtU2lnblVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbi11cCcpO1xuICAgIHRoaXMuZmFpbEVtYWlsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1mYWlsLWVtYWlsJyk7XG4gICAgdmFyIGVtYWlsU2lnblVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLXNpZ24tdXAnKTtcbiAgICB2YXIgcGFzc1NpZ25VcCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtc2lnbi11cCcpO1xuICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBbXG4gICAgICBlbWFpbFNpZ25VcCxcbiAgICAgIHBhc3NTaWduVXBcbiAgICBdO1xuICB9LFxuICBpbml0UGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBBdm9pZHMgZXJyb3JzIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSBET01cbiAgICB0aGlzLmlmRWxBZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpZkVsQWRkRXZlbnQgPSB0aGlzLmlmRWxBZGRFdmVudDtcbiAgICBpZkVsQWRkRXZlbnQodGhpcy5mb3JtU2lnblVwICwgJ2NsaWNrJywgdGhpcy5oYW5kbGVMaXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICBpZkVsQWRkRXZlbnQodGhpcy5mb3JtU2lnblVwLCAnY2xpY2snLCB0aGlzLm9uSW5wdXRTZWxlY3QuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZUxpdmVWYWxpZGF0aW9uOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS5tYXRjaChmb3JtVmFsaWRhdGlvbi5kYXRhW2luZGV4XS5yZWdleCkpIHtcbiAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gICAgICAgIHRoaXMuZmFpbEVtYWlsID8gdmFsaWRhdGlvbk1lc3NhZ2UudGV4dENvbnRlbnQgPSAnJyA6IHZhbGlkYXRpb25NZXNzYWdlLnRleHRDb250ZW50ID0gJ+KImic7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4Jyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLnRleHRDb250ZW50ID0gZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0uZXJyb3I7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuICBvbklucHV0U2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT0gaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtVmFsaWRhdGlvbi5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cbnNpZ25VcC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zaWduLXVwLmpzIiwiLypcbiAgRGVsZXRlIHBvc3QgLSBjdXJyZW50bHkgb25seSBkZWxldGVzIGZyb20gRE9NXG4qL1xuXG52YXIgZGVsZXRlU2VsZWN0ZWRQb3N0ID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYWNoZURPTTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVsZXRlRmx1dHRlclBvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWZsdXR0ZXInKTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kZWxldGVGbHV0dGVyUG9zdC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kZWxldGVGbHV0dGVyUG9zdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlU2VsZWN0ZWRQb3N0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfSxcbiAgZGVsZXRlU2VsZWN0ZWRQb3N0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBvc3QnKS5yZW1vdmUoKTtcbiAgfSxcblxufVxuZGVsZXRlU2VsZWN0ZWRQb3N0LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2RlbGV0ZS1zZWxlY3RlZC1wb3N0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==