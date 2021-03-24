/// <reference types="cypress" />

describe('Email input test',function(){
    it('.type() - type into a Email form', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        // https://on.cypress.io/type
        cy.get('#email_create')
          .type('fake@email.com').should('have.value', 'fake@email.com')
    
          // .type() with special character sequences
          .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          .type('{del}{selectall}{backspace}')
    
          // .type() with key modifiers
          .type('{alt}{option}') //these are equivalent
          .type('{ctrl}{control}') //these are equivalent
          .type('{meta}{command}{cmd}') //these are equivalent
          .type('{shift}')
    
          // Delay each keypress by 0.1 sec
          .type('slow.typing@email.com', { delay: 100 })
          .should('have.value', 'slow.typing@email.com')
    
        
      })
    
})
describe('Going to next page',function(){
it('Should go to the next page after click', () => {
    cy.get('#SubmitCreate > span').click()
    
})

})