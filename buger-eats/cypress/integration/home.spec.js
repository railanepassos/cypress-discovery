describe('Home page', () => {
    it('page is expected to be online', () => {
        cy.viewport(1366,768);
        cy.visit('/');
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');

    });

});