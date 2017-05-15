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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	/*
	  Post a new Flutter
	*/
	
	var newPost = {};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formValidation = __webpack_require__(4);
	
	var _formValidation2 = _interopRequireDefault(_formValidation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signIn_signUp = {
	  init: function init() {
	    console.log(_formValidation2.default);
	    this.cacheDOM();
	    this.bindEvents();
	    this.initPlaceholders();
	  },
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.formSignIn = document.querySelector('.form-sign-in');
	    this.modal = document.querySelector('.modal');
	    this.showModal = document.querySelector('.show-modal');
	    var emailSignIn = document.querySelector('.email-sign-in');
	    var passSignIn = document.querySelector('.password-sign-in');
	    var emailSignUp = document.querySelector('.email-sign-up');
	    var passSignUp = document.querySelector('.password-sign-up');
	    this.requiredInputs = [emailSignIn, passSignIn, emailSignUp, passSignUp];
	  },
	  initPlaceholders: function initPlaceholders() {
	    this.requiredInputs.map(function (input, index) {
	      input.placeholder = _formValidation2.default.data[index].placeholder;
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
	    ifElAddEvent(this.showModal, 'click', this.handleToggleModal.bind(this));
	    ifElAddEvent(this.closeBtn, 'click', this.handleToggleModal.bind(this));
	    ifElAddEvent(this.formSignIn, 'click', this.handleLiveValidation.bind(this));
	    ifElAddEvent(document, 'click', this.onInputSelect.bind(this));
	  },
	  handleToggleModal: function handleToggleModal() {
	    if (this.modal.classList.contains('hidden')) {
	      this.modal.classList.remove('hidden');
	      this.modal.classList.add('fade-in');
	    } else {
	      this.modal.classList.remove('fade-in');
	      this.modal.classList.add('hidden');
	    }
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
	
	signIn_signUp.init();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	var formValidation = module.exports = {
	  data: [{
	    name: 'email-sign-in',
	    placeholder: 'email',
	    regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
	    error: 'Must be a valid email'
	  }, {
	    name: 'password-sign-in',
	    placeholder: 'password',
	    regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
	    error: 'Include upper / lower case and number'
	  }, {
	    name: 'email-sign-up',
	    placeholder: 'email',
	    regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
	    error: 'Must be a valid email'
	  }, {
	    name: 'password-sign-up',
	    placeholder: 'password',
	    regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
	    error: 'Include upper / lower case and number'
	  }]
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWE5ODg3YTk5NWM0NGRlY2YyMDciLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvbmV3LXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2lnbi1pbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mb3JtLXZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsibmV3UG9zdCIsInNpZ25Jbl9zaWduVXAiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImNhY2hlRE9NIiwiYmluZEV2ZW50cyIsImluaXRQbGFjZWhvbGRlcnMiLCJjbG9zZUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm1TaWduSW4iLCJtb2RhbCIsInNob3dNb2RhbCIsImVtYWlsU2lnbkluIiwicGFzc1NpZ25JbiIsImVtYWlsU2lnblVwIiwicGFzc1NpZ25VcCIsInJlcXVpcmVkSW5wdXRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImlmRWxBZGRFdmVudCIsImVsIiwiZXZlbnQiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlVG9nZ2xlTW9kYWwiLCJiaW5kIiwiaGFuZGxlTGl2ZVZhbGlkYXRpb24iLCJvbklucHV0U2VsZWN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIm5leHRTaWJsaW5nIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIm1hdGNoIiwicmVnZXgiLCJwYXJlbnROb2RlIiwidGV4dENvbnRlbnQiLCJlcnJvciIsInRhcmdldCIsImZvcm1WYWxpZGF0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFF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VixFQUFpQkMsS0FBakIsRUFBd0I7QUFDOUMsV0FBSWdCLG9CQUFvQmpCLE1BQU1rQixXQUE5QjtBQUNBLFdBQUlaLE1BQU1vQixNQUFOLElBQWdCMUIsS0FBcEIsRUFBMkI7QUFDekJBLGVBQU1FLFdBQU4sR0FBb0IseUJBQWVDLElBQWYsQ0FBb0JGLEtBQXBCLEVBQTJCQyxXQUEvQztBQUNELFFBRkQsTUFFTztBQUNMRixlQUFNRSxXQUFOLEdBQW9CLEVBQXBCO0FBQ0Q7QUFDRixNQVBELEVBT0csSUFQSDtBQVFEO0FBL0VpQixFQUFwQixDLENBTkE7Ozs7QUF1RkFyQixlQUFjQyxJQUFkLEc7Ozs7Ozs7O0FDdkZBLEtBQUk2QyxpQkFBaUJDLE9BQU9DLE9BQVAsR0FBaUI7QUFDcEMxQixTQUFNLENBQ0o7QUFDRTJCLFdBQU0sZUFEUjtBQUVFNUIsa0JBQWEsT0FGZjtBQUdFb0IsWUFBTyx1SUFIVDtBQUlFRyxZQUFPO0FBSlQsSUFESSxFQU9KO0FBQ0VLLFdBQU0sa0JBRFI7QUFFRTVCLGtCQUFhLFVBRmY7QUFHRW9CLFlBQU8sdUNBSFQ7QUFJRUcsWUFBTztBQUpULElBUEksRUFhSjtBQUNFSyxXQUFNLGVBRFI7QUFFRTVCLGtCQUFhLE9BRmY7QUFHRW9CLFlBQU8sdUlBSFQ7QUFJRUcsWUFBTztBQUpULElBYkksRUFtQko7QUFDRUssV0FBTSxrQkFEUjtBQUVFNUIsa0JBQWEsVUFGZjtBQUdFb0IsWUFBTyx1Q0FIVDtBQUlFRyxZQUFPO0FBSlQsSUFuQkk7QUFEOEIsRUFBdEMsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYTk4ODdhOTk1YzQ0ZGVjZjIwNyIsIi8qXG4gIFdlYnBhY2sgZW50cnkgcG9pbnRcbiovXG5cbmltcG9ydCAnLi9uZXctcG9zdC5qcyc7XG5pbXBvcnQgJy4vc2lnbi1pbi5qcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qXG4gIFBvc3QgYSBuZXcgRmx1dHRlclxuKi9cblxudmFyIG5ld1Bvc3QgPSB7XG4gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvbmV3LXBvc3QuanMiLCIvKlxuICBGbHV0dGVyIFNpZ24gaW5cbiovXG5cbmltcG9ydCBmb3JtVmFsaWRhdGlvbiBmcm9tICcuL2Zvcm0tdmFsaWRhdGlvbic7XG5cbnZhciBzaWduSW5fc2lnblVwID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coZm9ybVZhbGlkYXRpb24pO1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB0aGlzLmluaXRQbGFjZWhvbGRlcnMoKTtcbiAgfSxcbiAgY2FjaGVET006IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsb3NlQnRuICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gICAgdGhpcy5mb3JtU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbi1pbicpO1xuICAgIHRoaXMubW9kYWwgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIHRoaXMuc2hvd01vZGFsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vZGFsJyk7XG4gICAgdmFyIGVtYWlsU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLXNpZ24taW4nKTtcbiAgICB2YXIgcGFzc1NpZ25JbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtc2lnbi1pbicpO1xuICAgIHZhciBlbWFpbFNpZ25VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1zaWduLXVwJyk7XG4gICAgdmFyIHBhc3NTaWduVXAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3JkLXNpZ24tdXAnKTtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gW1xuICAgICAgZW1haWxTaWduSW4sXG4gICAgICBwYXNzU2lnbkluLFxuICAgICAgZW1haWxTaWduVXAsXG4gICAgICBwYXNzU2lnblVwXG4gICAgXTtcbiAgfSxcbiAgaW5pdFBsYWNlaG9sZGVyczogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBBdm9pZHMgZXJyb3JzIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSBET01cbiAgICB0aGlzLmlmRWxBZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpZkVsQWRkRXZlbnQgPSB0aGlzLmlmRWxBZGRFdmVudDtcbiAgICBpZkVsQWRkRXZlbnQodGhpcy5zaG93TW9kYWwsICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gICAgaWZFbEFkZEV2ZW50KHRoaXMuY2xvc2VCdG4sICdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlTW9kYWwuYmluZCh0aGlzKSk7XG4gICAgaWZFbEFkZEV2ZW50KHRoaXMuZm9ybVNpZ25JbiAsICdjbGljaycsIHRoaXMuaGFuZGxlTGl2ZVZhbGlkYXRpb24uYmluZCh0aGlzKSk7XG4gICAgaWZFbEFkZEV2ZW50KGRvY3VtZW50LCAnY2xpY2snLCB0aGlzLm9uSW5wdXRTZWxlY3QuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVRvZ2dsZU1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVMaXZlVmFsaWRhdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9ICfiiJonO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1WYWxpZGF0aW9uLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgb25JbnB1dFNlbGVjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgdmFyIHZhbGlkYXRpb25NZXNzYWdlID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybVZhbGlkYXRpb24uZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5zaWduSW5fc2lnblVwLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NpZ24taW4uanMiLCJ2YXIgZm9ybVZhbGlkYXRpb24gPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdlbWFpbC1zaWduLWluJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnZW1haWwnLFxuICAgICAgcmVnZXg6ICdeW2EtekEtWjAtOS4hIyQlJlxcJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQnLFxuICAgICAgZXJyb3I6ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncGFzc3dvcmQtc2lnbi1pbicsXG4gICAgICBwbGFjZWhvbGRlcjogJ3Bhc3N3b3JkJyxcbiAgICAgIHJlZ2V4OiAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKS4qJCcsXG4gICAgICBlcnJvcjogJ0luY2x1ZGUgdXBwZXIgLyBsb3dlciBjYXNlIGFuZCBudW1iZXInXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZW1haWwtc2lnbi11cCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ2VtYWlsJyxcbiAgICAgIHJlZ2V4OiAnXlthLXpBLVowLTkuISMkJSZcXCcqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokJyxcbiAgICAgIGVycm9yOiAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Bhc3N3b3JkLXNpZ24tdXAnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdwYXNzd29yZCcsXG4gICAgICByZWdleDogJ14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkuKiQnLFxuICAgICAgZXJyb3I6ICdJbmNsdWRlIHVwcGVyIC8gbG93ZXIgY2FzZSBhbmQgbnVtYmVyJ1xuICAgIH1cbiAgXSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Zvcm0tdmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=