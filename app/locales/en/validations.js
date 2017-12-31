/* eslint-disable quotes, quote-props */

export default {
  /* overrides for ember-changeset-validation messages
   * see: ember-changeset-validations/utils/messages
   */
  accepted: "{description} must be accepted",
  after: "{description} must be after {after}",
  before: "{description} must be before {before}",
  between: "{description} must be between {min} and {max} characters",
  blank: "{description} can't be blank",
  collection: "{description} must be a collection",
  confirmation: "{description} doesn't match {on}",
  date: "{description} must be a valid date",
  description: "This field",
  email: "{description} must be a valid email address",
  empty: "{description} can't be empty",
  equalTo: "{description} must be equal to {is}",
  even: "{description} must be even",
  exclusion: "{description} is reserved",
  greaterThan: "{description} must be greater than {gt}",
  greaterThanOrEqualTo: "{description} must be greater than or equal to {gte}",
  inclusion: "{description} is not included in the list",
  invalid: "{description} is invalid",
  lessThan: "{description} must be less than {lt}",
  lessThanOrEqualTo: "{description} must be less than or equal to {lte}",
  multipleOf: "{description} must be a multiple of {multipleOf}",
  notANumber: "{description} must be a number",
  notAnInteger: "{description} must be an integer",
  odd: "{description} must be odd",
  onOrAfter: "{description} must be on or after {onOrAfter}",
  onOrBefore: "{description} must be on or before {onOrBefore}",
  otherThan: "{description} must be other than {value}",
  phone: "{description} must be a valid phone number",
  positive: "{description} must be positive",
  present: "{description} must be blank",
  singular: "{description} can't be a collection",
  tooLong: "{description} is too long (maximum is {max} characters)",
  tooShort: "{description} is too short (minimum is {min} characters)",
  url: "{description} must be a valid url",
  wrongDateFormat: "{description} must be in the format of {format}",
  wrongLength: "{description} is the wrong length (should be {is} characters)"
};
