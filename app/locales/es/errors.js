/* eslint-disable quotes, quote-props */
/* es Spain*/
export default {
  'login': {
    'other': 'Hemos tenido un error. Intentelo de nuevo mas tarde.',
    'unauthorized': 'Email o contraseña incorrecta.',

    // POST to /users
    'email-has-invalid-format': 'Email invalido.',
    'email-should-be-at-least-7-character(s)': 'Email tiene que tener al menos 7 caracteres',
    'email-has-already-been-taken': 'Este email ya existe.',
    'password-confirmation-does-not-match-confirmation': 'No hemos encontrado ninguna contraseña',
    'password-should-be-at-least-12-character(s)': 'La contraseña tiene que tener al menos 12 caracteres.',
  },

  // ember-cp-validation messages
  'description': 'Este campo',
  'inclusion': '{{description}} no esta incluido en la lista',
  'exclusion': '{{description}} esta reservado',
  'invalid': '{{description}} es invalido',
  'confirmation': '{{description}} no se encontró {{on}}',
  'accepted': '{{description}} tiene que ser aceptado',
  'empty': '{{description}}no puede estar vacio',
  'blank': '{{description}} no puede estar en blanco',
  'present': '{{description}} debe de estar en blanco',
  'collection': '{{description}} tiene que ser una collecón',
  'singular': '{{description}} no puede ser una colleción',
  'tooLong': '{{description}} es demasiado largo (maximo {{max}} characteres)',
  'tooShort': '{{description}} es demasiado corto (minimo {{min}} characteres)',
  'before': '{{description}} tiene que ser antes {{before}}',
  'after': '{{description}} tiene que ser despues {{after}}',
  'wrongDateFormat': '{{description}} el formato tiene que ser {{format}}',
  'wrongLength': '{{description}}la longitud incorrecta (tiene que ser {{is}} characteres)',
  'notANumber': '{{description}} tiene que ser un numbero',
  'notAnInteger': '{{description}} tiene que ser un integer',
  'greaterThan': '{{description}} tiene que ser mayor que {{gt}}',
  'greaterThanOrEqualTo': '{{description}} debe ser mayor que o igual que {{gte}}',
  'equalTo': '{{description}} tiene que ser igual que {{is}}',
  'lessThan': '{{description}} tiene que ser menos que {{lt}}',
  'lessThanOrEqualTo': '{{description}} tiene que ser menor que o igual que {{lte}}',
  'otherThan': '{{description}} tiene que ser diferente a {{value}}',
  'odd': '{{description}} debe ser impar',
  'even': '{{description}} debe ser incluso',
  'positive': '{{description}} tiene que ser positivo',
  'date': '{{description}} debe de ser una fecha valida',
  'email': '{{description}} Debe ser una dirección de correo electrónico válida',
  'phone': '{{description}} Debe ser un numero de telefono válida',
  'url': '{{description}} debe ser una URL válida',
};
