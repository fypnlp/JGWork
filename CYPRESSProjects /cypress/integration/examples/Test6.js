/// <reference types="Cypress" />


describe('Mouse Hover Pop ups', function() 
{
//all tests cases go inside of this area

it('Open web page', function()   {

  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Method 1: Mouse hover pop ups using Jquery Show

//1. Select popup menu item and use show 
cy.get('div.mouse-hover-content').invoke('show')

//2. Select item 'top' from menu and click
cy.contains('Top').click()

//3.Confirm Url text includes top 
cy.url().should('include', 'top')

//Method 2: Another way to find invisible item or menu items  in cypress is to use force:true
//Syntax example of above code

//cy.get('button').click({ force: true })

//2. Select item 'top' from menu and click
cy.contains('Top').click({ force: true })

//3.Confirm Url text includes top 
cy.url().should('include', 'top')



})//end of my first test case 







})//end of Describe 