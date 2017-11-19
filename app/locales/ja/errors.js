/* eslint-disable quotes, quote-props */

export default {
  login: {
    other: 'エラーが発生しました後でやり直してください',
    unauthorized: 'メールアドレスまたはパスワードが正しくない',

    // POST to /users
    'email-has-invalid-format': '有効な電子メールアドレスでなければなりません',
    'email-should-be-at-least-7-character(s)':
      'メールは7文字以上でなければなりません',
    'email-has-already-been-taken':
      'その電子メールを持つユーザーがすでに存在しています',
    'password-confirmation-does-not-match-confirmation':
      'パスワードの確認がパスワードと一致しません',
    'password-should-be-at-least-12-characters':
      'パスワードは12文字以上にする必要があります',
  },

  // ember-cp-validation messages
  description: 'このフィールド',
  inclusion: '{{description}} is not included in the list',
  exclusion: '{{description}} is reserved',
  invalid: '{{description}} is invalid',
  confirmation: '{{description}}は{{on}}と一致しません',
  accepted: '{{description}} must be accepted',
  empty: "{{description}} can't be empty",
  blank: '{{description}}は空白にできません',
  present: '{{description}} must be blank',
  collection: '{{description}} must be a collection',
  singular: "{{description}} can't be a collection",
  tooLong: '{{description}} is too long (maximum is {{max}} characters)',
  tooShort: '{{description}}が短すぎます（最小{{min}}文字です）',
  before: '{{description}} must be before {{before}}',
  after: '{{description}} must be after {{after}}',
  wrongDateFormat: '{{description}} must be in the format of {{format}}',
  wrongLength:
    '{{description}}の長さが間違っています（{{is}}文字にする必要があります）',
  notANumber: '{{description}} must be a number',
  notAnInteger: '{{description}} must be an integer',
  greaterThan: '{{description}} must be greater than {{gt}}',
  greaterThanOrEqualTo:
    '{{description}} must be greater than or equal to {{gte}}',
  equalTo: '{{description}} must be equal to {{is}}',
  lessThan: '{{description}} must be less than {{lt}}',
  lessThanOrEqualTo: '{{description}} must be less than or equal to {{lte}}',
  otherThan: '{{description}} must be other than {{value}}',
  odd: '{{description}} must be odd',
  even: '{{description}} must be even',
  positive: '{{description}} must be positive',
  date: '{{description}} must be a valid date',
  email: '{{description}} 有効な電子メールアドレスでなければなりません',
  phone: '{{description}} must be a valid phone number',
  url: '{{description}} must be a valid url',
};
