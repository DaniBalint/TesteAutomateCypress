describe('SuitaSite Google.com 1', () => {

    // testul numarul 1
    it('functionare cu o cautare basic', () => {
        cy.visit('https://google.com'); // functia visit acceseaza un link
        cy.get('#L2AGLb').click(); // se selecteaza un element din pagina si se da click
        cy.get('.gLFyf').type('digi sport').type('{enter}'); // se selecteaza un element din pagina, se introduce un text si se da eeter

        cy.get('.IsZvec').should('exist'); // se face o asertie, se verifica existenta unui obiect in pagina

    }) 

    

})