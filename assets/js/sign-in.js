/*
  Flutter Sign in
*/

import formValidation from './form-validation';

var signIn = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
    this.initPlaceholders();
  },
  cacheDOM: function () {
    this.closeBtn   = document.querySelector('.close-btn');
    this.formSignIn = document.querySelector('.form-sign-in');
    var emailSignIn = document.querySelector('.email-sign-in');
    var passSignIn  = document.querySelector('.password-sign-in');
    this.requiredInputs = [
      emailSignIn,
      passSignIn
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
    ifElAddEvent(this.formSignIn , 'click', this.handleLiveValidation.bind(this));
    ifElAddEvent(this.formSignIn, 'click', this.onInputSelect.bind(this));
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
signIn.init();
