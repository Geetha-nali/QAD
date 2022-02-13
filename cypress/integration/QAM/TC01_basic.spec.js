

describe('Login', function(){
    it('Sign in', function(){
        cy.visit('http://a.testaddressbook.com/sign_in')
        cy.get('input [type="email"]').type('geetha.nali@gmail.com')
        cy.get('input [type="password"]').type('admin123')
        cy.get('.btn').contains('Sign up').should('be.visible').click()
    })
})