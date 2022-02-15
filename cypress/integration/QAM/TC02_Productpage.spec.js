
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
    
  it("select product", () => {
    cy.get('Sauce Labs Backpack > .pricebar > .btn_primary').click();
    cy.get('Sauce Labs Backpack > .pricebar > .btn_secondary')
    .should("contain","REMOVE")
   
    })


it("check cart", () => {
    cy.get('https://www.saucedemo.com/static/media/cart3x.d236358a.svg').click();
    cy.get('.subheader').should("contain","Your Cart");
    cy.get('.inventory_item_name').should("have.length",1) 
    .should("contain","Sauce Labs Backpack");
    cy.get('.inventory_item_price').should("have.length",1) 
    .should('contain',"29.99")
})

it("select 2nd product", () => {
  cy.get('Sauce Labs Fleece Jacket > .pricebar > .btn_primary').click();
    cy.get('Sauce Labs Fleece Jacket > .pricebar > .btn_secondary')
    .should("contain","REMOVE")
  cy.get('.fa-layers-counter')
  .should("contain","2")
  })


it("check cart", () => {
  cy.get('https://www.saucedemo.com/static/media/cart3x.d236358a.svg').click();
  cy.get('.subheader').should("contain","Your Cart");
  cy.get('.inventory_item_name').should("have.length",2) 
  .should("contain","Sauce Labs Fleece Jacket");
  cy.get('.inventory_item_price').should("have.length",2) 
  .should('contain',"49.99")
})

 it('Test: should logout it', () => {
  cy.get("button[id='logout']").should('be.visible').click();
  })

})

describe('Login Page', () => {
  it ('Verify URL', () => {   
     cy.visit('https://www.saucedemo.com/')
    
 })

 it ('Load the site', () => {   
  cy.get('.login_logo')
  cy.get('[data-test=username]').type('problrm__user').should ('have.value', 'problem_user')
  cy.get('[data-test=password]').type('secret_sauce').should ('have.value', 'secret_sauce')
  cy.get('#login-button').click()
  
 })

 
})
