/*
  Flutter Sign in
*/

import formValidation from './form-validation';

var signIn_signUp = {
  init: function () {
    console.log(formValidation);
    this.cacheDOM();
    this.bindEvents();
    this.initPlaceholders();
  },
  cacheDOM: function () {
    this.closeBtn   = document.querySelector('.close-btn');
    this.formSignIn = document.querySelector('.form-sign-in');
    this.modal      = document.querySelector('.modal');
    this.showModal  = document.querySelector('.show-modal');
    var emailSignIn = document.querySelector('.email-sign-in');
    var passSignIn  = document.querySelector('.password-sign-in');
    var emailSignUp = document.querySelector('.email-sign-up');
    var passSignUp  = document.querySelector('.password-sign-up');
    this.requiredInputs = [
      emailSignIn,
      passSignIn,
      emailSignUp,
      passSignUp
    ];
  },
  initPlaceholders: function () {
    this.requiredInputs.map(function (input, index) {
      input.placeholder = formValidation.data[index].placeholder;
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
    ifElAddEvent(this.showModal, 'click', this.handleToggleModal.bind(this));
    ifElAddEvent(this.closeBtn, 'click', this.handleToggleModal.bind(this));
    ifElAddEvent(this.formSignIn , 'click', this.handleLiveValidation.bind(this));
    ifElAddEvent(document, 'click', this.onInputSelect.bind(this));
  },
  handleToggleModal: function () {
    if (this.modal.classList.contains('hidden')) {
      this.modal.classList.remove('hidden');
      this.modal.classList.add('fade-in');
    } else {
      this.modal.classList.remove('fade-in');
      this.modal.classList.add('hidden');
    }
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
signIn_signUp.init();
