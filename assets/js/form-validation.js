var formValidation = module.exports = {
  data: [
    {
      name: 'email-sign-in',
      placeholder: 'email',
      regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      error: 'Must be a valid email'
    },
    {
      name: 'password-sign-in',
      placeholder: 'password',
      regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
      error: 'Include upper / lower case and number'
    },
    {
      name: 'email-sign-up',
      placeholder: 'email',
      regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      error: 'Must be a valid email'
    },
    {
      name: 'password-sign-up',
      placeholder: 'password',
      regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
      error: 'Include upper / lower case and number'
    }
  ],
}
