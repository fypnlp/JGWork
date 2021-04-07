/// <reference types="Cypress" />


describe('Interrogate Web Tables', function() 
{
//all tests cases go inside of this area

it('Open web page', function()   {

  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

 //Cypress Web Tables 

 //step 1. Go  through the array of the table to find your chosen colum (which is the 2nd one in this example)
 cy.get('tr td:nth-child(2)').each(($e1, index, $list) =>
  {
    const text = $e1.text() // step 2.travel though the text in second row
     
      if(text.includes("Python")) // step 3. find word:locate the word phython
         {
          cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)//step 4.use the next fuction to find sibling
          {
            
             const priceText= price.text() // step5. then use a promise to find to the price 
             expect(priceText).to.equal('25') //step 6. then use expect eq to find confirm the price.

          })//end of promise for price 
         
                
          }


 })



})//end of my first test case 







})//end of Describe 