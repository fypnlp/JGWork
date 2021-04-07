beforeEach(function(){

    cy.fixture('example').then(function(data){ // using a promise go to file to retrieve data
 
        this.data=data  //make the data global through the spec file  in this promise  using 'this'

  })//end of promise


})