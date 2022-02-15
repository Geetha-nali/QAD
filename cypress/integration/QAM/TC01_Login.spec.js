

describe('Login Page', () => {
    it ('Verify URL', () => {   
       cy.visit('https://www.saucedemo.com/')
      
   })

   it ('Verify User can not login to the system without user name and password', () => {
       cy.get('.login_logo')
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })
   

      it ('Verify User can not login to the system using invalid username', () => {       
       cy.get('.login_logo')
       cy.get('[data-test=username]').type('standard_user')
       cy.get('[data-test=password]').type('secret_sauce')
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })

   it ('Load the site', () => {   
    cy.get('.login_logo')
    cy.get('[data-test=username]').type('standard_user').should ('have.value', 'standard_user')
    cy.get('[data-test=password]').type('secret_sauce').should ('have.value', 'secret_sauce')
    cy.get('#login-button').click()
    
   })

   
})