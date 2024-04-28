/// <reference types="cypress" />
import { selectors } from '../utils/selectors/loginSelectors';
import { user } from '../fixtures/user.data';

describe('login', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get(selectors.loginPageLink).click()
    })

    it('TC01 - deve fazer login com email e senha válidos', () => {
        cy.submitLogin(user.email.existing, user.password.existing)
        cy.get(selectors.loggedInUserText).invoke('text')
            .should(text => expect(text.trim()).to.eq('Logged in as José Welton dos Santos'))
    })

    it('TC02 - não deve fazer login com email válido e senha inválida', () => {
        cy.submitLogin(user.email.existing, user.password.valid())
        cy.get(selectors.errorMessage)
            .should('have.text', 'Your email or password is incorrect!')
            .should('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('TC03 - não deve fazer login com campo email vazio e campo senha preenchido', () => {
        cy.submitLogin('', user.password.existing)
        cy.get(selectors.emailField).invoke('prop', 'validationMessage')
            .should('eq', 'Preencha este campo.')
    })

    it('TC04 - não deve fazer login com campo email preenchido e campo senha vazio', () => {
        cy.submitLogin(user.email.existing, '')
        cy.get(selectors.passwordField).invoke('prop', 'validationMessage')
            .should('eq', 'Preencha este campo.')
    })

    context('logout', () => {

        it('TC05 - deve fazer logout e retornar à página de login', () => {
            cy.submitLogin(user.email.existing, user.password.existing)
            cy.get(selectors.logoutLink).click()
            cy.url()
                .should('eq', 'https://automationexercise.com/login')
        })
    })
})