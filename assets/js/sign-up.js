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
    placeholders.init(this.requiredSignUp);
  },
  cacheDOM: function () {
    this.closeBtn   = document.querySelector('.close-btn');
    this.formSignUp = document.querySelector('.form-sign-up');
    this.failEmail  = document.querySelector('.input-fail-email');
    var emailSignUp = document.querySelector('.email-sign-up');
    var passSignUp  = document.querySelector('.password-sign-up');
    this.requiredSignUp = [
      emailSignUp,
      passSignUp
    ];
  },
  bindEvents: function () {
    // test.forElement found in handlers folder
    test.forElement(this.formSignUp , 'click', this.liveValidation.bind(this));
    test.forElement(this.formSignUp, 'click', this.placeholdersToggle.bind(this));
  },
  liveValidation: function () {
    validation.liveValidation(this.requiredSignUp);
  },
  placeholdersToggle: function () {
    placeholders.toggle(this.requiredSignUp);
  }
}
auth.init();
