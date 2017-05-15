/*
  Flutter Toggle Modal
*/

var toggleModal = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM: function () {
    this.modal     = document.querySelector('.modal');
    this.showModal = document.querySelector('.show-modal');
    this.closeBtn  = document.querySelector('.close-btn');
  },
  bindEvents: function () {
    this.ifElAddEvent = function (el, event, method) {
      if (el) {
        el.addEventListener(event, method);
      }
    }
    var ifElAddEvent = this.ifElAddEvent;
    ifElAddEvent(this.showModal, 'click', this.handleToggleModal.bind(this));
    ifElAddEvent(this.closeBtn, 'click', this.handleToggleModal.bind(this));
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
