/// <reference types="Cypress" />

import HomePage from '../../support/pageOjbects/HomePage'
import ProductPage from '../../support/pageOjbects/ProductPage'
import CheckoutOrderPage from '../../support/pageOjbects/CheckOrderPage'


describe('Automation Framework Part1', function() 
{

//1. Add your before function here!!
before(function() {
    // runs once before all tests in the block

    cy.fixture('example').then(function(data){ // using a promise go to file to retrieve data
 
          this.data=data  //make the data global through the spec file  in this promise  using 'this'

    })//end of promise

  })

it('Framework  Test 1', function()   {

    //Cypress.config('defaultCommandTimeout', 9000) // cypress config = implicit wait:  Local to specific test.

  const homePage=  new HomePage()
  const productPage = new ProductPage()
  const orderPage = new CheckoutOrderPage()

  cy.visit(Cypress.env('url')+"/angularpractice/")

  //getting data from a file 
 homePage.getEditBox().type(this.data.name) //add new user name  Jennifer  
 homePage.getGender().select(this.data.gender) //add gender (female)

  //assertions: 
  homePage.getTwoWayDataBinding().should('have.value',this.data.name )//2 way binding   the name in box
  homePage.getEditBox().should('have.attr', 'minlength','2')//confirm min characters for 'name'
  homePage.getEntrepreneur().should('be.disabled')//Is the entrepreneur radio button disabled. 

 //Pausing Test before entering shop on E-commerce site - GREAT for Trouble Shooting a test.
 //cy.pause()

  //add wait to load the SHOP PAGE. Local THIS STEP in the test. 
  Cypress.config('defaultCommandTimeout', 8000)
  
  //customised commands 
  homePage.getShopTab().click()//find the SHOP element and click on it 

  //Custom command to add items to shopping cart
  //cy.selectProduct('Blackberry')
  //cy.selectProduct('Nokia Edge')

   //Peramatising test data = Getting data to multiple things

  this.data.productName.forEach(function(element) {//place the data from the data.json file and place in the forEach this loop

    cy.selectProduct(element)  //using the customised command add the shopping items to the cart.
  });
 
 
  productPage.getCheckoutButton().click()

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



})//end of my first test case 







})//end of Describe 