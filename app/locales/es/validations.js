/* eslint-disable quotes, quote-props */

export default {
  /* overrides for ember-changeset-validation messages
   * see: ember-changeset-validations/utils/messages
   */
  accepted: "{description} tiene que ser aceptado",
  after: "{description} tiene que ser despues {after}",
  before: "{description} tiene que ser antes {before}",
  between: "{description} debe estar entre {min} y {max} caracteres",
  blank: "{description} no puede estar en blanco",
  collection: "{description} tiene que ser una collecón",
  confirmation: "{description} no se encontró {on}",
  date: "{description} debe de ser una fecha valida",
  description: "Este campo",
  email: "{description} Debe ser una dirección de correo electrónico válida",
  empty: "{description}no puede estar vacio",
  equalTo: "{description} tiene que ser igual que {is}",
  even: "{description} debe ser incluso",
  exclusion: "{description} esta reservado",
  greaterThan: "{description} tiene que ser mayor que {gt}",
  greaterThanOrEqualTo: "{description} debe ser mayor que o igual que {gte}",
  inclusion: "{description} no esta incluido en la lista",
  invalid: "{description} es invalido",
  lessThan: "{description} tiene que ser menos que {lt}",
  lessThanOrEqualTo: "{description} tiene que ser menor que o igual que {lte}",
  multipleOf: "{description} must be a multiple of {multipleOf}",
  notANumber: "{description} tiene que ser un numbero",
  notAnInteger: "{description} tiene que ser un integer",
  odd: "{description} debe ser impar",
  onOrAfter: "{description} must be on or after {onOrAfter}",
  onOrBefore: "{description} must be on or before {onOrBefore}",
  otherThan: "{description} tiene que ser diferente a {value}",
  phone: "{description} Debe ser un numero de telefono válida",
  positive: "{description} tiene que ser positivo",
  present: "{description} debe de estar en blanco",
  singular: "{description} no puede ser una colleción",
  tooLong: "{description} es demasiado largo (maximo {max} characteres)",
  tooShort: "{description} es demasiado corto (minimo {min} characteres)",
  url: "{description} debe ser una URL válida",
  wrongDateFormat: "{description} el formato tiene que ser {format}",
  wrongLength:
    "{description}la longitud incorrecta (tiene que ser {is} characteres)"
};
