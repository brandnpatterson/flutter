/*
  Flutter Sign Up
*/

import formValidation from './form-validation';

var signUp = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
    this.initPlaceholders();
  },
  cacheDOM: function () {
    this.closeBtn   = document.querySelector('.close-btn');
    this.formSignUp = document.querySelector('.form-sign-up');
    var emailSignUp = document.querySelector('.email-sign-up');
    var passSignUp  = document.querySelector('.password-sign-up');
    this.requiredInputs = [
      emailSignUp,
      passSignUp
    ];
  },
  initPlaceholders: function () {
    this.requiredInputs.map(function (input, index) {
      if (input) {
        input.placeholder = formValidation.data[index].placeholder;
      }
    }, this);
  },
  bindEvents: function () {
    // Avoids errors if the element is not present in the DOM
    this.ifElAddEvent = function (el, event, method) {
      if (el) {
        el.addEventListener(event, method);
      }
    }
    var ifElAddEvent = this.ifElAddEvent;
    ifElAddEvent(this.formSignUp , 'click', this.handleLiveValidation.bind(this));
    ifElAddEvent(document, 'click', this.onInputSelect.bind(this));
  },
  handleLiveValidation: function (event) {
    this.requiredInputs.map(function (input, index) {
      var validationMessage = input.nextSibling;
      if (input.value === '') {
        event.preventDefault();
        return;
      } else if (input.value.match(formValidation.data[index].regex)) {
        input.parentNode.classList.add('flex');
        validationMessage.textContent = '√';
        validationMessage.classList.remove('input-fail');
        validationMessage.classList.add('input-success');
      } else {
        event.preventDefault();
        input.parentNode.classList.remove('flex');
        validationMessage.textContent = formValidation.data[index].error;
        validationMessage.classList.remove('input-success');
        validationMessage.classList.add('input-fail');
      }
    }, this);
  },
  onInputSelect: function (event) {
    this.requiredInputs.map(function (input, index) {
      var validationMessage = input.nextSibling;
      if (event.target != input) {
        input.placeholder = formValidation.data[index].placeholder;
      } else {
        input.placeholder = '';
      }
    }, this);
  }
}
signUp.init();
