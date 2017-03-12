/* eslint-disable quotes, quote-props */

export default {
  'login': {
    'other': 'An error occurred, try again later.',
    'unauthorized': 'Email or password is incorrect.',

    // POST to /users
    'email-has-invalid-format': 'Email format invalid.',
    'email-should-be-at-least-7-character(s)':
      'Email must be at least 7 characters',
    'email-has-already-been-taken': 'A user with that email already exists.',
    'password-confirmation-does-not-match-confirmation':
      'Password confirmation does not match the password.',
    'password-should-be-at-least-12-character(s)':
      'Password should be at least 12 characters',
  },

  // ember-cp-validation messages
  'description': 'This field',
  'inclusion': '{{description}} is not included in the list',
  'exclusion': '{{description}} is reserved',
  'invalid': '{{description}} is invalid',
  'confirmation': '{{description}} doesn\'t match {{on}}',
  'accepted': '{{description}} must be accepted',
  'empty': '{{description}} can\'t be empty',
  'blank': '{{description}} can\'t be blank',
  'present': '{{description}} must be blank',
  'collection': '{{description}} must be a collection',
  'singular': '{{description}} can\'t be a collection',
  'tooLong': '{{description}} is too long (maximum is {{max}} characters)',
  'tooShort': '{{description}} is too short (minimum is {{min}} characters)',
  'before': '{{description}} must be before {{before}}',
  'after': '{{description}} must be after {{after}}',
  'wrongDateFormat': '{{description}} must be in the format of {{format}}',
  'wrongLength': '{{description}} is the wrong length (should be {{is}} characters)',
  'notANumber': '{{description}} must be a number',
  'notAnInteger': '{{description}} must be an integer',
  'greaterThan': '{{description}} must be greater than {{gt}}',
  'greaterThanOrEqualTo': '{{description}} must be greater than or equal to {{gte}}',
  'equalTo': '{{description}} must be equal to {{is}}',
  'lessThan': '{{description}} must be less than {{lt}}',
  'lessThanOrEqualTo': '{{description}} must be less than or equal to {{lte}}',
  'otherThan': '{{description}} must be other than {{value}}',
  'odd': '{{description}} must be odd',
  'even': '{{description}} must be even',
  'positive': '{{description}} must be positive',
  'date': '{{description}} must be a valid date',
  'email': '{{description}} must be a valid email address',
  'phone': '{{description}} must be a valid phone number',
  'url': '{{description}} must be a valid url',
};
