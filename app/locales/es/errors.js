/* eslint-disable quotes, quote-props */

export default {
  'login': {
    'other': 'Ha ocurrido un error, intentelo de nuevo más tarde',
    'unauthorized': 'Email o contraseña incorrectos',

    // POST to /users
    'email-has-invalid-format': 'El formato de Email no es válido.',
    'email-should-be-at-least-7-character(s)':
      'El Email debe tener por lo menos 7 caracteres.',
    'email-has-already-been-taken': 'Ya existe un usuario con este Email',
    'password-confirmation-does-not-match-confirmation':
      'La confirmación de la contraseña no coincide con la contraseña',
    'password-should-be-at-least-12-character(s)':
      'La contraseña debe tener al menos 12 caracteres',
  },

  // ember-cp-validation messages
  'description': 'Este hueco',
  'inclusion': '{{description}} no esta incluido en la lista',
  'exclusion': '{{description}} esta reservado',
  'invalid': '{{description}} es invalido',
  'confirmation': '{{description}} no contrasta {{on}}',
  'accepted': '{{description}} debe ser aceptado',
  'empty': '{{description}} no puede estar vacío',
  'blank': '{{description}} no puede estar en blanco',
  'present': '{{description}} debe estar en blanco',
  'collection': '{{description}} debe ser una colección',
  'singular': '{{description}} no puede ser una colección',
  'tooLong': '{{description}} es demasiado larga (El máximo permitido son {{max}} caracteres)',
  'tooShort': '{{description}} es demasiado corta (El minimo es {{min}} caracteres)',
  'before': '{{description}} debe de estar antes {{before}}',
  'after': '{{description}} debe de estar después {{after}}',
  'wrongDateFormat': '{{description}} debe de estar en este formato: {{format}}',
  'wrongLength': '{{description}} tiene una longitud incorrecta (debe ser {{is}} caracteres)',
  'notANumber': '{{description}} debe ser un número',
  'notAnInteger': '{{description}} debe ser un entero',
  'greaterThan': '{{description}} debe ser mayor que {{gt}}',
  'greaterThanOrEqualTo': '{{description}} debe ser mayor o igual que {{gte}}',
  'equalTo': '{{description}} debe ser igual que {{is}}',
  'lessThan': '{{description}} debe ser menor que {{lt}}',
  'lessThanOrEqualTo': '{{description}} debe ser menor o igual que {{lte}}',
  'otherThan': '{{description}} debe ser diferente a {{value}}',
  'odd': '{{description}} debe ser impar',
  'even': '{{description}} debe ser par',
  'positive': '{{description}} debe ser positivo',
  'date': '{{description}} debe ser una fecha válida',
  'email': '{{description}} debe ser un Email válido',
  'phone': '{{description}} debe ser un número de teléfono válido',
  'url': '{{description}} debe ser una url válida',
};
