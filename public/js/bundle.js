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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _placeholders = __webpack_require__(3);
	
	var _placeholders2 = _interopRequireDefault(_placeholders);
	
	var _testForElement = __webpack_require__(5);
	
	var _testForElement2 = _interopRequireDefault(_testForElement);
	
	var _validation = __webpack_require__(6);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var auth = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    _placeholders2.default.init(this.required);
	  },
	  cacheDOM: function cacheDOM() {
	    this.form = document.querySelector('.form');
	    var name = document.querySelector('#name');
	    var email = document.querySelector('#email');
	    var phone = document.querySelector('#phone');
	    var address = document.querySelector('#address');
	    this.required = [name, email, phone, address];
	  },
	  bindEvents: function bindEvents() {
	    // test.forElement found in handlers folder
	    _testForElement2.default.forElement(this.form, 'click', this.liveValidation.bind(this));
	    _testForElement2.default.forElement(this.form, 'click', this.placeholdersToggle.bind(this));
	  },
	  liveValidation: function liveValidation(e) {
	    if (e.target.type === 'radio') {
	      return;
	    } else {
	      _validation2.default.liveValidation(this.required);
	    }
	  },
	  placeholdersToggle: function placeholdersToggle(e) {
	    _placeholders2.default.toggle(this.required);
	  }
	}; /*
	     Flutter Sign in
	   */
	
	auth.init();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(4);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var placeholders = module.exports = {
	  // set initial input placeholder values
	  init: function init(required, event) {
	    required.map(function (input, index) {
	      if (input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      }
	    }, this);
	  },
	  toggle: function toggle(required) {
	    required.map(function (input, index) {
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
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Form data
	*/
	
	var formData = module.exports = {
	  data: [{
	    placeholder: 'Name',
	    regex: '[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
	    error: 'Please enter letters only'
	  }, {
	    placeholder: 'Email',
	    regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
	    error: 'Please enter a valid email'
	  }, {
	    placeholder: 'Phone',
	    regex: '^[2-9]{2}[0-9]{8}$',
	    error: 'Please enter be a valid 10 digit phone number'
	  }, {
	    placeholder: 'Address'
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
	
	var validation = module.exports = {
	  liveValidation: function liveValidation(required) {
	    required.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (input.value === '') {
	        event.preventDefault();
	        return;
	      } else if (input.value.match(_formData2.default.data[index].regex)) {
	        this.failEmail ? validationMessage.textContent = '' : validationMessage.textContent = '√';
	        validationMessage.classList.remove('input-fail');
	        validationMessage.classList.add('input-success');
	      } else {
	        event.preventDefault();
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDg5ZWE5ODRkY2JjOWFjNjNjNjkiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbImF1dGgiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwiZm9yRWxlbWVudCIsImxpdmVWYWxpZGF0aW9uIiwiYmluZCIsInBsYWNlaG9sZGVyc1RvZ2dsZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwidG9nZ2xlIiwicGxhY2Vob2xkZXJzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImZvcm1EYXRhIiwicmVnZXgiLCJlcnJvciIsInRlc3QiLCJlbCIsImV2ZW50VHlwZSIsIm1ldGhvZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWxpZGF0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJuZXh0U2libGluZyIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsImZhaWxFbWFpbCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7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ZCxFQUFxQkssS0FBckQ7QUFDQU8sMkJBQWtCTyxTQUFsQixDQUE0QkMsTUFBNUIsQ0FBbUMsZUFBbkM7QUFDQVIsMkJBQWtCTyxTQUFsQixDQUE0QkUsR0FBNUIsQ0FBZ0MsWUFBaEM7QUFDRDtBQUNGLE1BZkQsRUFlRyxJQWZIO0FBZ0JEO0FBbEIrQixFQUFsQyxDLENBUEE7Ozs7QUFJQSxvRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwODllYTk4NGRjYmM5YWM2M2M2OSIsIi8qXG4gIFdlYnBhY2sgZW50cnkgcG9pbnRcbiovXG5cbmltcG9ydCAnLi9mb3JtLmpzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLypcbiAgRmx1dHRlciBTaWduIGluXG4qL1xuXG5pbXBvcnQgcGxhY2Vob2xkZXJzIGZyb20gJy4vaGFuZGxlcnMvcGxhY2Vob2xkZXJzJztcbmltcG9ydCB0ZXN0IGZyb20gJy4vaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2hhbmRsZXJzL3ZhbGlkYXRpb24nO1xuXG52YXIgYXV0aCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBwbGFjZWhvbGRlcnMuaW5pdCh0aGlzLnJlcXVpcmVkKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgIHZhciBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcbiAgICB2YXIgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmUnKTtcbiAgICB2YXIgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzJyk7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtcbiAgICAgIG5hbWUsIGVtYWlsLCBwaG9uZSwgYWRkcmVzc1xuICAgIF07XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0ZXN0LmZvckVsZW1lbnQgZm91bmQgaW4gaGFuZGxlcnMgZm9sZGVyXG4gICAgdGVzdC5mb3JFbGVtZW50KHRoaXMuZm9ybSwgJ2NsaWNrJywgdGhpcy5saXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0LmZvckVsZW1lbnQodGhpcy5mb3JtLCAnY2xpY2snLCB0aGlzLnBsYWNlaG9sZGVyc1RvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgbGl2ZVZhbGlkYXRpb246IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5saXZlVmFsaWRhdGlvbih0aGlzLnJlcXVpcmVkKTtcbiAgICB9XG4gIH0sXG4gIHBsYWNlaG9sZGVyc1RvZ2dsZTogZnVuY3Rpb24gKGUpIHtcbiAgICBwbGFjZWhvbGRlcnMudG9nZ2xlKHRoaXMucmVxdWlyZWQpO1xuICB9XG59XG5hdXRoLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Zvcm0uanMiLCIvKlxuICBTZXQgaW5pdGlhbCBwbGFjZWhvbGRlcnMgZm9yIGlucHV0c1xuKi9cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxudmFyIHBsYWNlaG9sZGVycyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBzZXQgaW5pdGlhbCBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZXNcbiAgaW5pdDogZnVuY3Rpb24gKHJlcXVpcmVkLCBldmVudCkge1xuICAgIHJlcXVpcmVkLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgdG9nZ2xlOiBmdW5jdGlvbiAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdG9nZ2xlIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlIHRvIGJsYW5rIG9ubHkgd2hlbiB1c2VyIHNlbGVjdHMgaW5wdXRcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvcGxhY2Vob2xkZXJzLmpzIiwiLypcbiAgRm9ybSBkYXRhXG4qL1xuXG52YXIgZm9ybURhdGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXG4gICAgICByZWdleDogJ1thLXpBLVpdKygoW1xcJywuIC1dW2EtekEtWiBdKT9bYS16QS1aXSopKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgbGV0dGVycyBvbmx5J1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05LiEjJCUmXFwnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJCcsXG4gICAgICBlcnJvcjogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdQaG9uZScsXG4gICAgICByZWdleDogJ15bMi05XXsyfVswLTldezh9JCcsXG4gICAgICBlcnJvcjogJ1BsZWFzZSBlbnRlciBiZSBhIHZhbGlkIDEwIGRpZ2l0IHBob25lIG51bWJlcidcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnQWRkcmVzcydcbiAgICB9XG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2RhdGEvZm9ybS1kYXRhLmpzIiwiLypcbiAgRGVsZXRlIHBvc3RcbiovXG5cbnZhciB0ZXN0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIHRlc3QuZm9yRWxlbWVudCBjcmVhdGVkIHRvIGF2b2lkIGVycm9ycyBpZiB0aGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NXG4gIGZvckVsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgZXZlbnRUeXBlLCBtZXRob2QpIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBtZXRob2QpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIi8qXG4gIEhhbmRsZXJzIHVzZWQgaW4gbXVsdGlwbGUgb2JqZWN0c1xuKi9cblxuLy8gZm9ybURhdGEgdXNlZCB0byBtYXRjaCB1c2VyIGlucHV0IGZvciB2YWxpZGF0aW9uXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG52YXIgdmFsaWRhdGlvbiA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBsaXZlVmFsaWRhdGlvbjogZnVuY3Rpb24gKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uTWVzc2FnZSA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLm1hdGNoKGZvcm1EYXRhLmRhdGFbaW5kZXhdLnJlZ2V4KSkge1xuICAgICAgICB0aGlzLmZhaWxFbWFpbCA/IHZhbGlkYXRpb25NZXNzYWdlLnRleHRDb250ZW50ID0gJycgOiB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9ICfiiJonO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLnRleHRDb250ZW50ID0gZm9ybURhdGEuZGF0YVtpbmRleF0uZXJyb3I7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==