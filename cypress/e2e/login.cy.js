/// <reference types="cypress" />

describe('login', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/login"]').click()
    })

    it('TC01 - deve fazer login com email e senha válidos', () => {
        cy.get('input[data-qa="login-email"]').type('weltonsts15@gmail.com')
        cy.get('input[data-qa="login-password"]').type('12345678')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('ul.nav > li:nth-child(10) > a').invoke('text')
            .should(text => expect(text.trim()).to.eq('Logged in as José Welton dos Santos'))
    })

    it('TC02 - não deve fazer login com email válido e senha inválida', () => {
        cy.get('input[data-qa="login-email"]').type('weltonsts15@gmail.com')
        cy.get('input[data-qa="login-password"]').type('0123456789')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('form[action="/login"] > p')
            .should('have.text', 'Your email or password is incorrect!')
            .should('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('TC03 - não deve fazer login com campo email vazio e campo senha preenchido', () => {
        cy.get('input[data-qa="login-password"]').type('12345678')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('input[data-qa="login-email"]').invoke('prop', 'validationMessage')
            .should('eq', 'Preencha este campo.')
    })

    it('TC04 - não deve fazer login com campo email preenchido e campo senha vazio', () => {
        cy.get('input[data-qa="login-email"]').type('weltonsts15@gmail.com')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('input[data-qa="login-password"]').invoke('prop', 'validationMessage')
            .should('eq', 'Preencha este campo.')
    })
})