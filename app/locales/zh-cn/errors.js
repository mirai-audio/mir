/* eslint-disable quotes, quote-props */

export default {
  login: {
    other: "发生了未知的错误，请稍后再试。",
    unauthorized: "Email或者密码错误。",

    // POST to /users
    "server-internal-error": "发生了未知的错误，请稍后再试。",
    "email-has-invalid-format": "Email格式不正确。",
    "email-should-be-at-least-7-character(s)": "Email必须包含至少7个字符。",
    "email-has-already-been-taken": "该Email已被注册。",
    "password-confirmation-does-not-match-confirmation": "两次密码输入不一致。",
    "password-should-be-at-least-12-character(s)": "密码必须包含至少12个字符。"
  },

  // ember-cp-validation messages
  description: "该字段",
  inclusion: "{{description}}并未被包含在列表中",
  exclusion: "{{description}}是保留字段",
  invalid: "{{description}}无效",
  confirmation: "{{description}}与{{on}}不一致",
  accepted: "{{description}}必须选择接受",
  empty: "{{description}}不可以为空",
  blank: "{{description}}不可以为空白",
  present: "{{description}}必须是空白",
  collection: "{{description}}必须是集合",
  singular: "{{description}}不可以是集合",
  tooLong: "{{description}}太长了(最长为{{max}}个字符)",
  tooShort: "{{description}}太短了(最短为{{min}}个字符)",
  before: "{{description}}必须在{{before}}之前",
  after: "{{description}}必须在{{after}}之后",
  wrongDateFormat: "{{description}}必须使用类似{{format}}的格式",
  wrongLength: "{{description}}长度错误(必须是{{is}}个字符)",
  notANumber: "{{description}}必须是数字",
  notAnInteger: "{{description}}必须是整数",
  greaterThan: "{{description}}必须大于{{gt}}",
  greaterThanOrEqualTo: "{{description}}必须大于或等于{{gte}}",
  equalTo: "{{description}}必须等于{{is}}",
  lessThan: "{{description}}必须小于{{lt}}",
  lessThanOrEqualTo: "{{description}}必须小于或等于{{lte}}",
  otherThan: "{{description}}不可以是{{value}}",
  odd: "{{description}}必须是奇数",
  even: "{{description}}必须是偶数",
  positive: "{{description}}必须大于零",
  date: "{{description}}必须是正确的日期格式",
  email: "{{description}}必须是有效的Email地址",
  phone: "{{description}}必须是有效的电话号码",
  url: "{{description}}必须是有效的URL"
};
