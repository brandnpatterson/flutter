/*
  Flutter Sign in
*/

import formData from './form-data';
import test from './test-for-element';
import placeholders from './placeholders';
import validation from './validation';

var signIn = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
    placeholders.init(this.requiredInputs);
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
  bindEvents: function () {
    test.forElement(this.formSignIn , 'click', validation.liveValidation.bind(this));
    test.forElement(this.formSignIn, 'click', this.onInputSelect.bind(this));
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
signIn.init();
