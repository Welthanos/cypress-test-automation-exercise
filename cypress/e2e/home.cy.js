describe('home', () => {
    it('webapp deve estar online', () => {
        cy.visit('/')
        cy.title().should('eq', 'Automation Exercise')
    })
})