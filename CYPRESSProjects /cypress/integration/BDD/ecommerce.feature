Feature: Add items to shopping cart and add delivery address

    using cypress and BDD we are going to add a number of items to shopping basket and checkout 
    
    @Regression
    Scenario: Ecommerce Product delivery REGRESSION TEST

    Given I am on the Ecommerce page 
    When I add mobile phones to the shopping cart 
    And I validate the total price in cart 
    Then I add my chosen delivery country and verify a thank you message 

    @Smoke
    Scenario: Ecommerce Product delivery SMOKE test

    Given I am on the Ecommerce page 
    When I add mobile phones to the shopping cart 
    And I validate the total price in cart 
    Then I add my chosen delivery country and verify a thank you message 