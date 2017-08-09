/*
  Form data
*/

var formData = module.exports = {
  data: [
    {
      placeholder: 'Name',
      regex: '[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
      error: 'Please enter letters only'
    },
    {
      placeholder: 'Email',
      regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      error: 'Please enter a valid email'
    },
    {
      placeholder: 'Phone',
      regex: '^[2-9]{2}[0-9]{8}$',
      error: 'Please enter be a valid 10 digit phone number'
    },
    {
      placeholder: 'Address'
    }
  ]
}
