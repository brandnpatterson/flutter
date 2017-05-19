/*
  Flutter Toggle Modal
*/

import test from './handlers/test-for-element.js';

var toggleModal = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM: function () {
    this.modal     = document.querySelector('.modal');
    this.showModal = document.querySelector('.show-modal');
    this.closeBtn  = document.querySelector('.close-btn');
    this.fadeIn    = document.querySelector('.fade-in');
  },
  bindEvents: function () {
    // test.forElement found in handlers folder
    test.forElement(this.showModal, 'click', this.handleToggleModal.bind(this));
    test.forElement(this.closeBtn, 'click', this.handleToggleModal.bind(this));
  },
  consoleLog: function () {
    console.log('hi');
  },
  handleToggleModal: function () {
    if (this.modal.classList.contains('hidden')) {
      this.modal.classList.remove('hidden');
      this.modal.classList.add('fade-in');
    } else {
      this.modal.classList.remove('fade-in');
      this.modal.classList.add('hidden');
    }
  }
}
toggleModal.init();
