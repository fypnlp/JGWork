describe('My XHR API REQUEST Suite', function() 
{

it('Make Fake Api Request',function() {

    cy.request('POST', 'http://216.10.245.166/Addbook.php '
    , {

        "name":"Learn Appium Automation with Java",
        "isbn":"sdkjlsfj",
        "aisle":"227",
        "author":"John foe"
        }).then(function(response)//use promise to confirm that item was added. 

        {
           expect(response.body).to.have.property('Msg', 'successfully added')
           expect(response.status).to.eq(200)

        })



     




})//end of it case 


})//end of describe