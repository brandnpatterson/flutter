/*
  Flutter Sign in
*/

import placeholders from './handlers/placeholders';
import test from './handlers/test-for-element';
import validation from './handlers/validation';

var auth = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
    placeholders.init(this.required);
  },
  cacheDOM: function () {
    this.form = document.querySelector('.form');
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#phone');
    var address = document.querySelector('#address');
    this.required = [
      name, email, phone, address
    ];
  },
  bindEvents: function () {
    // test.forElement found in handlers folder
    test.forElement(this.form, 'click', this.liveValidation.bind(this));
    test.forElement(this.form, 'click', this.placeholdersToggle.bind(this));
  },
  liveValidation: function (e) {
    if (e.target.type === 'radio') {
      return;
    } else {
      validation.liveValidation(this.required);
    }
  },
  placeholdersToggle: function (e) {
    placeholders.toggle(this.required);
  }
}
auth.init();
