/// <reference types="Cypress" />


describe('My Checkbox & Dropdown test suite', function() 
{
//all tests cases go inside of this area

it('Open web page', function()   {

  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  //check box and confirm check box is checked as expected us ' should and be'.  
  //Confirm the correct box has been chosen (use .and)  and the value is what we expect it to be
  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')


//How to uncheck the checkbox. Assert that it is unchecked. 
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')


//How to select a group of checkboxes  using  'type' in cypress.io.  Then check SPECFIC checkboxes
cy.get('input[type="checkbox"]').check(['option2', 'option3'])


//static Check Boxes in Cypress

//Select an option and Confirm the RIGHT option has been chosen
cy.get('select').select('option2').should('have.value', 'option2')

//Dynamic dropdowns: locate the country india from the drop down list

cy.get('#autocomplete').type('ind')

//in order to find the country india from dynamic dropdown we will need to go into an array 
cy.get('.ui-menu-item div').each(($e1, index, $list) => {

  //then  find the text  we are looking for 'India' by using a promise

  if ($e1.text()==='India')

  {//perform the action of clicking

      $e1.click()

  }
})//end of array loop

//Use and assertion here to confirm that India is the country selected 
cy.get('#autocomplete').should('have.value','India')


// Finding visible and invisble elements on a page 

//This assertion proves that the text box is visible 
cy.get('#displayed-text').should('be.visible')

//Now hide the text box 
cy.get('#hide-textbox').click()
// use an assertion to confirm the text box is hidden
cy.get('#displayed-text').should('not.be.visible')

//Click on the Show button to reveal text 
cy.get('#show-textbox').click()

//this assertion will confirm that the ext box is displayed as expected.
cy.get('#displayed-text').should('be.visible')
 
//Checking/Selecting Radio buttons and confirming it is checked/selected

cy.get('[value="radio2"]').check().should('be.checked')


//Auto Handle Alerts syntax





})//end of my first test case 







})//end of Describe 