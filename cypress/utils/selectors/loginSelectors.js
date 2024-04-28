export const selectors = {
    loginPageLink: 'a[href="/login"]',
    emailField: 'input[data-qa="login-email"]',
    passwordField: 'input[data-qa="login-password"]',
    submitLoginBtn: 'button[data-qa="login-button"]',
    loggedInUserText: 'ul.nav > li:nth-child(10) > a',
    logoutLink: 'a[href="/logout"]',
    errorMessage: 'form[action="/login"] > p',
}