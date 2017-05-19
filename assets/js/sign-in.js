/*
  Flutter Sign in
*/

import test from './handlers/test-for-element';
import placeholders from './handlers/placeholders';
import validation from './handlers/validation';

var auth = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
    placeholders.init(this.requiredSignIn);
  },
  cacheDOM: function () {
    this.closeBtn   = document.querySelector('.close-btn');
    this.formSignIn = document.querySelector('.form-sign-in');
    this.failEmail  = document.querySelector('.input-fail-email');
    var emailSignIn = document.querySelector('.email-sign-in');
    var passSignIn  = document.querySelector('.password-sign-in');
    this.requiredSignIn = [
      emailSignIn,
      passSignIn
    ];
  },
  bindEvents: function () {
    // test.forElement found in handlers folder
    test.forElement(this.formSignIn , 'click', this.liveValidation.bind(this));
    test.forElement(this.formSignIn, 'click', this.placeholdersToggle.bind(this));
  },
  liveValidation: function () {
    validation.liveValidation(this.requiredSignIn);
  },
  placeholdersToggle: function () {
    placeholders.toggle(this.requiredSignIn);
  }
}
auth.init();
