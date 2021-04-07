/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

 cy.visit('https://example.cypress.io/commands/network-requests')
 
 cy.server()

 cy.route(

  {
    method: 'PUT',
    url: 'comments/*',
    status: 404,
    response:{

        error: "404 error: Sorry your comment was not posted :0("// get error message from your DEV
    },

    delay: 1000
    // add options here IF necessary
  }).as('UpdateComment')

  cy.get('.network-put').click()

 //note:  ask dev to give you the HTML locator where you can find the error message. 
 //from the that we should find the css for the error messagage
 
cy.get('.network-put-comment').should('contain', '404 error: Sorry your comment was not posted :0(' )

})

})

