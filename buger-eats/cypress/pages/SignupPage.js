
class SignupPage {

    accessHomePage() {
        cy.visit('/');
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');

    }

    accessDeliverPage() {
        cy.viewport(1366, 768);
        cy.visit('/');
        cy.get('a[href="/deliver"]').click();

        // have bug here
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

    }

    fillFormRegister(deliver) {

        // Person data
        cy.get('input[name="fullName"]').type(deliver.name);
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="cpf"]').type(deliver.cpf);
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
        
        // Address
        cy.get('input[name="postalcode"]').type(deliver.address.postalCode);
        cy.get('input[type="button"][value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type(deliver.address.number);
        cy.get('input[name="address-details"]').type(deliver.address.complement);

        // Check Inputs Autofill 
        cy.get('input[name="address"]').should('have.value', deliver.address.street);
        cy.get('input[name="district"]').should('have.value', deliver.address.district);
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.cityState);

        // Select Send Method
        cy.contains('.delivery-method li', deliver.deliveryMethod).click();

        // Upload CNH
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh);

    }

    submitFormRegister() {
        cy.get('button[type="submit"]').click();

    }

    modalContentShouldBe(expectedMessage) {
        // cy.get('.swal2-popup .swal2-html-container').should('have.text', expectedMessage);
        cy.contains('.swal2-popup .swal2-html-container', expectedMessage).should('be.visible');

    }

    alertMessageShouldBe(expectedMessage) {
        // cy.get('.alert-error').should('have.text', expectedMessage);
        cy.contains('.alert-error', expectedMessage).should('be.visible');

    }

}

export default new SignupPage;