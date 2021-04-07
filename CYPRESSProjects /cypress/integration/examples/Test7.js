/// <reference types="Cypress" />


describe('Mouse Hover Pop ups', function() 
{
//all tests cases go inside of this area

it('Open web page', function()   {


  cy.visit(Cypress.env('url')+"/AutomationPractice/")

//Open a child window

cy.get('#opentab').then(function(e1)// 1. find window button and use promise to use prop
{

       const url = e1.prop('href')// 2. use prop to find window link
       cy.visit(url)  //3. open window

})





})//end of my first test case 







})//end of Describe 