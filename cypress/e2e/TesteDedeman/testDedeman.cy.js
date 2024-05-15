describe ('testDedeman' , () => {

it ('test Login' , () => {

    cy.visit('https://dedeman.ro/ro/customer/account/login');
    cy.wait(5000);
    cy.get('.cookie-bar-bottom > .only-desktop > :nth-child(2) > .full-width').click();
    cy.get('#email').type('balint_dani@yahoo.com');
    cy.get('#pass').type('Bostik2022');
    cy.get('#send2').click();

    cy.get('.My > strong').should('exist');

   


   
   

   

    
  


})


})