/// <reference types="Cypress" />


describe('My Checkbox Alerts', function() 
{
//all tests cases go inside of this area

it('Open web page', function()   {

  cy.visit("http://qaclickacademy.com/practice.php")

 //Alerts and auto accepts with OK button
  cy.get('#alertbtn').click()
  cy.get('[value="Confirm"]').click()

  //confirm alerts text by using an event called 'window alert'
  cy.on('window:alert',(str)=>
  {
     //using correct mocha syntax to be able to compare 2 strings
       
    expect(str).to.equal('Hello , share this practice page and share your knowledge')

  })
  
  //Confirm text in the confirm alert using window:confirm

  cy.on('window:confirm',(str)=>
  {
     //using correct mocha syntax to be able to compare 2 strings
       
    expect(str).to.equal('Hello , Are you sure you want to confirm?')

  })
//opening a new tab in the same browser window using INVOKE
  cy.get('#opentab').invoke('removeAttr', 'target').click()

 //verify the page we are currently on

 //Confirm web page title
 cy.url().should('include','qaclickacademy')
 
 //to navigate back  to the previous page. 
cy.go('back')

})//end of my first test case 







})//end of Describe 