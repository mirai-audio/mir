/* eslint-disable quotes, quote-props */

export default {
  login: {
    other: "エラーが発生しました後でやり直してください",
    unauthorized: "メールアドレスまたはパスワードが正しくない",

    // POST to /users
    "server-internal-error": "エラーが発生しました後でやり直してください",
    "email-has-invalid-format": "有効な電子メールアドレスでなければなりません",
    "email-should-be-at-least-7-character(s)":
      "メールは7文字以上でなければなりません",
    "email-has-already-been-taken":
      "その電子メールを持つユーザーがすでに存在しています",
    "password-confirmation-does-not-match-confirmation":
      "パスワードの確認がパスワードと一致しません",
    "password-should-be-at-least-12-characters":
      "パスワードは12文字以上にする必要があります"
  }
};
