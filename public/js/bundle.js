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
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Flutter App
	*/
	
	var flutter = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	  },
	  data: [{
	    placeholder: 'email',
	    regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
	    error: 'Must be a valid email'
	  }, {
	    placeholder: 'password',
	    regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
	    error: 'Include upper / lower case and number'
	  }],
	  cacheDOM: function cacheDOM() {
	    this.closeBtn = document.querySelector('.close-btn');
	    this.loginform = document.querySelector('form');
	    this.modal = document.querySelector('.modal');
	    this.signIn = document.querySelector('.sign-in');
	    var inputEmail = document.querySelector('input[type="text"]');
	    var inputPass = document.querySelector('input[type="password"]');
	    this.requiredInputs = [inputEmail, inputPass];
	    this.requiredInputs.map(function (input, index) {
	      input.placeholder = this.data[index].placeholder;
	    }, this);
	  },
	  bindEvents: function bindEvents() {
	    function ifElement(element, method) {
	      if (element) {
	        element.addEventListener('click', method);
	      }
	    }
	    ifElement(document, this.onInputSelect.bind(this));
	    ifElement(this.signIn, this.handleToggleModal.bind(this));
	    ifElement(this.closeBtn, this.handleToggleModal.bind(this));
	    ifElement(this.loginform, this.handleLiveValidation.bind(this));
	    // ifElement(this.submitBtn, this.onFormSubmit.bind(this));
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
	      } else if (input.value.match(this.data[index].regex)) {
	        input.parentNode.classList.add('flex');
	        validationMessage.textContent = '√';
	        validationMessage.classList.remove('input-fail');
	        validationMessage.classList.add('input-success');
	      } else {
	        event.preventDefault();
	        input.parentNode.classList.remove('flex');
	        validationMessage.textContent = this.data[index].error;
	        validationMessage.classList.remove('input-success');
	        validationMessage.classList.add('input-fail');
	      }
	    }, this);
	  },
	  onInputSelect: function onInputSelect(event) {
	    this.requiredInputs.map(function (input, index) {
	      var validationMessage = input.nextSibling;
	      if (event.target != input) {
	        input.placeholder = this.data[index].placeholder;
	      } else {
	        input.placeholder = '';
	      }
	    }, this);
	  }
	};
	flutter.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWNmYTVmNjU1NjQ2NDc3NjEyY2EiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbImZsdXR0ZXIiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwiZGF0YSIsInBsYWNlaG9sZGVyIiwicmVnZXgiLCJlcnJvciIsImNsb3NlQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9naW5mb3JtIiwibW9kYWwiLCJzaWduSW4iLCJpbnB1dEVtYWlsIiwiaW5wdXRQYXNzIiwicmVxdWlyZWRJbnB1dHMiLCJtYXAiLCJpbnB1dCIsImluZGV4IiwiaWZFbGVtZW50IiwiZWxlbWVudCIsIm1ldGhvZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbklucHV0U2VsZWN0IiwiYmluZCIsImhhbmRsZVRvZ2dsZU1vZGFsIiwiaGFuZGxlTGl2ZVZhbGlkYXRpb24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImV2ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJuZXh0U2libGluZyIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsInBhcmVudE5vZGUiLCJ0ZXh0Q29udGVudCIsInRhcmdldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDSkE7Ozs7QUFJQSxLQUFJQSxVQUFVO0FBQ1pDLFNBQU0sZ0JBQVk7QUFDaEIsVUFBS0MsUUFBTDtBQUNBLFVBQUtDLFVBQUw7QUFDRCxJQUpXO0FB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MkJBQWtCTSxXQUFsQixHQUFnQyxHQUFoQztBQUNBTiwyQkFBa0JMLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxZQUFuQztBQUNBRywyQkFBa0JMLFNBQWxCLENBQTRCRyxHQUE1QixDQUFnQyxlQUFoQztBQUNELFFBTE0sTUFLQTtBQUNMQyxlQUFNSSxjQUFOO0FBQ0FsQixlQUFNb0IsVUFBTixDQUFpQlYsU0FBakIsQ0FBMkJFLE1BQTNCLENBQWtDLE1BQWxDO0FBQ0FHLDJCQUFrQk0sV0FBbEIsR0FBZ0MsS0FBS25DLElBQUwsQ0FBVWUsS0FBVixFQUFpQlosS0FBakQ7QUFDQTBCLDJCQUFrQkwsU0FBbEIsQ0FBNEJFLE1BQTVCLENBQW1DLGVBQW5DO0FBQ0FHLDJCQUFrQkwsU0FBbEIsQ0FBNEJHLEdBQTVCLENBQWdDLFlBQWhDO0FBQ0Q7QUFDRixNQWpCRCxFQWlCRyxJQWpCSDtBQWtCRCxJQXhFVztBQXlFWlAsa0JBQWUsdUJBQVVRLEtBQVYsRUFBaUI7QUFDOUIsVUFBS2hCLGNBQUwsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQzlDLFdBQUljLG9CQUFvQmYsTUFBTWdCLFdBQTlCO0FBQ0EsV0FBSUYsTUFBTVEsTUFBTixJQUFnQnRCLEtBQXBCLEVBQTJCO0FBQ3pCQSxlQUFNYixXQUFOLEdBQW9CLEtBQUtELElBQUwsQ0FBVWUsS0FBVixFQUFpQmQsV0FBckM7QUFDRCxRQUZELE1BRU87QUFDTGEsZUFBTWIsV0FBTixHQUFvQixFQUFwQjtBQUNEO0FBQ0YsTUFQRCxFQU9HLElBUEg7QUFRRDtBQWxGVyxFQUFkO0FBb0ZBTCxTQUFRQyxJQUFSLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWNmYTVmNjU1NjQ2NDc3NjEyY2EiLCIvKlxuICBXZWJwYWNrIGVudHJ5IHBvaW50XG4qL1xuXG5pbXBvcnQgJy4vYXBwLmpzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLypcbiAgRmx1dHRlciBBcHBcbiovXG5cbnZhciBmbHV0dGVyID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBkYXRhOiBbXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdlbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05LiEjJCUmXFwnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJCcsXG4gICAgICBlcnJvcjogJ011c3QgYmUgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAncGFzc3dvcmQnLFxuICAgICAgcmVnZXg6ICdeKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pLiokJyxcbiAgICAgIGVycm9yOiAnSW5jbHVkZSB1cHBlciAvIGxvd2VyIGNhc2UgYW5kIG51bWJlcidcbiAgICB9XG4gIF0sXG4gIGNhY2hlRE9NOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbG9zZUJ0biAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuICAgIHRoaXMubG9naW5mb3JtICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICB0aGlzLm1vZGFsICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0aGlzLnNpZ25JbiAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1pbicpO1xuICAgIHZhciBpbnB1dEVtYWlsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG4gICAgdmFyIGlucHV0UGFzcyAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IFtcbiAgICAgIGlucHV0RW1haWwsXG4gICAgICBpbnB1dFBhc3NcbiAgICBdO1xuICAgIHRoaXMucmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGlmRWxlbWVudCAoZWxlbWVudCwgbWV0aG9kKSB7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWV0aG9kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWZFbGVtZW50KGRvY3VtZW50LCB0aGlzLm9uSW5wdXRTZWxlY3QuYmluZCh0aGlzKSk7XG4gICAgaWZFbGVtZW50KHRoaXMuc2lnbkluLCB0aGlzLmhhbmRsZVRvZ2dsZU1vZGFsLmJpbmQodGhpcykpO1xuICAgIGlmRWxlbWVudCh0aGlzLmNsb3NlQnRuLCB0aGlzLmhhbmRsZVRvZ2dsZU1vZGFsLmJpbmQodGhpcykpO1xuICAgIGlmRWxlbWVudCh0aGlzLmxvZ2luZm9ybSwgdGhpcy5oYW5kbGVMaXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAvLyBpZkVsZW1lbnQodGhpcy5zdWJtaXRCdG4sIHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcykpO1xuICB9LFxuICBoYW5kbGVUb2dnbGVNb2RhbDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlTGl2ZVZhbGlkYXRpb246IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMucmVxdWlyZWRJbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uTWVzc2FnZSA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLm1hdGNoKHRoaXMuZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9ICfiiJonO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YVtpbmRleF0uZXJyb3I7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuICBvbklucHV0U2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT0gaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuZmx1dHRlci5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9