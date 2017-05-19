/*
  Flutter Sign Up
*/

import formData from './form-data';
import test from './test-for-element';
import placeholders from './placeholders';
import validation from './validation';

var signUp = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
    placeholders.init(this.requiredInputs);
  },
  cacheDOM: function () {
    this.closeBtn   = document.querySelector('.close-btn');
    this.formSignUp = document.querySelector('.form-sign-up');
    this.failEmail  = document.querySelector('.input-fail-email');
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
        input.placeholder = formData.data[index].placeholder;
      }
    }, this);
  },
  bindEvents: function () {
    test.forElement(this.formSignUp , 'click', validation.liveValidation.bind(this));
    test.forElement(this.formSignUp, 'click', this.onInputSelect.bind(this));
  },
  onInputSelect: function (event) {
    this.requiredInputs.map(function (input, index) {
      var validationMessage = input.nextSibling;
      if (event.target != input) {
        input.placeholder = formData.data[index].placeholder;
      } else {
        input.placeholder = '';
      }
    }, this);
  }
}
signUp.init();
