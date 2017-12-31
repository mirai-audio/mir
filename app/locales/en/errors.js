/* eslint-disable quotes, quote-props */

export default {
  login: {
    other: "An error occurred, try again later.",
    unauthorized: "Email or password is incorrect.",

    // POST to /users
    "server-internal-error": "An error occurred, try again later.",
    "email-has-invalid-format": "Email format invalid.",
    "email-should-be-at-least-7-character(s)":
      "Email must be at least 7 characters",
    "email-has-already-been-taken": "A user with that email already exists.",
    "password-confirmation-does-not-match-confirmation":
      "Password confirmation does not match the password.",
    "password-should-be-at-least-12-character(s)":
      "Password should be at least 12 characters"
  }
};
