describe('home page', () => {
    it('pagina deve estar online', () => {
        cy.viewport(1366,768);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');

    });

});