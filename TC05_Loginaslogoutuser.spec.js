describe('Login Page', () => {
    it ('Verify URL', () => {   
       cy.visit('https://www.saucedemo.com/')
      
   })

   it ('Verify User can not login to the system with user name locked_out_user', () => {
       cy.get('.login_logo')
       cy.get('[data-test=username]').type('problrm__user').should ('have.value', 'problem_user')
       cy.get('[data-test=password]').type('secret_sauce').should ('have.value', 'secret_sauce')
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })

    })