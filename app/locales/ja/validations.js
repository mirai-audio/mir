/* eslint-disable quotes, quote-props */

export default {
  /* overrides for ember-changeset-validation messages
   * see: ember-changeset-validations/utils/messages
   */
  accepted: "{description} must be accepted",
  after: "{description} must be after {after}",
  before: "{description} must be before {before}",
  between: "{description}は{min}〜{max}文字の間でなければなりません",
  blank: "{description}は空白にできません",
  collection: "{description} must be a collection",
  confirmation: "{description}は{on}と一致しません",
  date: "{description} must be a valid date",
  description: "このフィールド",
  email: "{description} 有効な電子メールアドレスでなければなりません",
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
  tooShort: "{description}が短すぎます（最小{min}文字です）",
  url: "{description} must be a valid url",
  wrongDateFormat: "{description} must be in the format of {format}",
  wrongLength:
    "{description}の長さが間違っています（{is}文字にする必要があります）"
};
