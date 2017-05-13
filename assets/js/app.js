/*
  Flutter App
*/

var flutter = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },
  data: [
    {
      placeholder: 'email',
      regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      error: 'Must be a valid email'
    },
    {
      placeholder: 'password',
      regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
      error: 'Include upper / lower case and number'
    }
  ],
  cacheDOM: function () {
    this.closeBtn   = document.querySelector('.close-btn');
    this.loginform  = document.querySelector('form');
    this.modal      = document.querySelector('.modal');
    this.signIn     = document.querySelector('.sign-in');
    var inputEmail  = document.querySelector('input[type="text"]');
    var inputPass   = document.querySelector('input[type="password"]');
    this.requiredInputs = [
      inputEmail,
      inputPass
    ];
    this.requiredInputs.map(function (input, index) {
      input.placeholder = this.data[index].placeholder;
    }, this);
  },
  bindEvents: function () {
    function ifElement (element, method) {
      if (element) {
        element.addEventListener('click', method);
      }
    }
    ifElement(document, this.onInputSelect.bind(this));
    ifElement(this.signIn, this.handleToggleModal.bind(this));
    ifElement(this.closeBtn, this.handleToggleModal.bind(this));
    ifElement(this.loginform, this.handleLiveValidation.bind(this));
    // ifElement(this.submitBtn, this.onFormSubmit.bind(this));
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
      } else if (input.value.match(this.data[index].regex)) {
        input.parentNode.classList.add('flex');
        validationMessage.textContent = '√';
        validationMessage.classList.remove('input-fail');
        validationMessage.classList.add('input-success');
      } else {
        event.preventDefault();
        input.parentNode.classList.remove('flex');
        validationMessage.textContent = this.data[index].error;
        validationMessage.classList.remove('input-success');
        validationMessage.classList.add('input-fail');
      }
    }, this);
  },
  onInputSelect: function (event) {
    this.requiredInputs.map(function (input, index) {
      var validationMessage = input.nextSibling;
      if (event.target != input) {
        input.placeholder = this.data[index].placeholder;
      } else {
        input.placeholder = '';
      }
    }, this);
  }
}
flutter.init();
