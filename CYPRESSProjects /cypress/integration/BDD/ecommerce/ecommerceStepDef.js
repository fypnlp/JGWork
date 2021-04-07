/// <reference types="Cypress" />
import HomePage from '../../../support/pageOjbects/HomePage'
import ProductPage from '../../../support/pageOjbects/ProductPage'
import CheckoutOrderPage from '../../../support/pageOjbects/CheckOrderPage'
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
const homePage=  new HomePage()
const productPage = new ProductPage()
const orderPage = new CheckoutOrderPage()

Given ( 'I am on the Ecommerce page', () => {

//add your page objects selector here
cy.visit(Cypress.env('url')+"/angularpractice/")

})


When('I add mobile phones to the shopping cart', function() {
//add code 

homePage.getShopTab().click()//find the SHOP selector and click on it 


  this.data.productName.forEach(function(element) {//place the data from the data.json file and place in the forEach this loop

    cy.selectProduct(element)  //using the customised command add the shopping items to the cart.
  });
 
 
  productPage.getCheckoutButton().click()


})//end

And( 'I validate the total price in cart', () =>{

    //add code here
    var sum=0//start calculation of shopping cart total 
  
  //Add total cost in shopping cart  of item in shopping cart
  cy.get('tr td:nth-child(4) strong') .each(($e1, index, $list) =>{//to calculate items in an array with javascript
   
    const unitCost=$e1.text()  //find text
    var res= unitCost.split(" ") //split text from the currency sign
    res= res[1].trim() //remove any white spaces 
    sum=Number(sum)+Number(res)//convert into a Integer number
    
}).then(function()//stop us giving the result BEFORE calculating we will add a promise 
{
    cy.log(sum)//End calculation of shopping cart total

})

cy.get('h3 strong').then(function(element)
{
    const shopCartTotal=element.text()  //find text
    var res= shopCartTotal.split(" ") //split from the currency sign
    var total= res[1].trim()//remove any white spaces 
    expect(Number(total)).to.equal(sum)//assertion to state total in cart and calculation is correct.

})
        
    })//end of step 

Then('I add my chosen delivery country and verify a thank you message',() =>{

// Add code for step
orderPage.getOrderButton().click()
  cy.get('#country').type('United Kingdom')
  cy.get('  .suggestions > ul > li > a').click()
  cy.get('#checkbox2').click({force: true})
  cy.get('input[type="submit"]').click() 
  //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
  cy.get('.alert').then(function(element){

   //How confirm a text element exists
    const actualText= element.text()
   expect(actualText.includes('Success')).to.be.true
  })//end of promise 


})//end of step















