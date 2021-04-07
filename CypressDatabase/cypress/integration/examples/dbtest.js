/// <reference types="Cypress" />

context('Window', () => {

  it('Database Interaction', () =>{

    cy.sqlServer("select * from Person1").then(function(result){

         console.log(result[1][3])

    })


       })//end of it case 

} )//end of context