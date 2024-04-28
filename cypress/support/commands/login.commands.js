import { selectors } from "../../utils/selectors/loginSelectors";

Cypress.Commands.add('submitLogin', (email, password) => {
    if (email !== '') cy.get(selectors.emailField).type(email)
    if (password !== '') cy.get(selectors.passwordField).type(password)
    cy.get(selectors.submitLoginBtn).click()
})