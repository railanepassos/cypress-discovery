describe('Register', () => {
    it('it should be possible to register a delivery person successfully', () => {
        cy.viewport(1366, 768);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('a[href="/deliver"]').click();

        // have bug here
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

        var deliveryPerson = {
            name: 'Railane Passos',
            email: 'railanepassos@deliver.com',
            cpf: '42335124668',
            whatsapp: '7186257195',
            address: {
                postalCode: '01009999',
                street: 'Rua Líbero Badaró',
                number: '595',
                complement: 'Predio Marilia, Ap 255',
                district: 'Centro',
                cityState: 'São Paulo/SP'

            },
            deliveryMethod: 'Moto',
            cnh: 'cnh-digital.jpeg'

        }
        // Fill Data
        cy.get('input[name="name"]').type(deliveryPerson.name);
        cy.get('input[name="email"]').type(deliveryPerson.email);
        cy.get('input[name="cpf"]').type(deliveryPerson.cpf);
        cy.get('input[name="whatsapp"]').type(deliveryPerson.whatsapp);

        // Fill Address
        cy.get('input[name="postalcode"]').type(deliveryPerson.address.postalCode);
        cy.get('input[type="button"][value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type(deliveryPerson.address.number);
        cy.get('input[name="address-details"]').type(deliveryPerson.address.complement);

        // Check Inputs Autofill 
        cy.get('input[name="address"]').should('have.value', deliveryPerson.address.street);
        cy.get('input[name="district"]').should('have.value', deliveryPerson.address.district);
        cy.get('input[name="city-uf"]').should('have.value', deliveryPerson.address.cityState);

        // Select Send Method
        cy.contains('.delivery-method li', deliveryPerson.deliveryMethod).click();

        // Upload CNH
        cy.get('input[accept^="image"]').attachFile('/images/' + deliveryPerson.cnh);

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Check the success
        const successMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-popup .swal2-html-container').should('have.text', successMessage);
        

    })
    it('it should be possible to see the message when delivery person type invalid CPF', () => {
        cy.viewport(1366, 768);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('a[href="/deliver"]').click();

        // have bug here
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

        var deliveryPerson = {
            name: 'Railane Passos',
            email: 'railanepassos@deliver.com',
            cpf: '423351246AA',
            whatsapp: '7186257195',
            address: {
                postalCode: '01009999',
                street: 'Rua Líbero Badaró',
                number: '595',
                complement: 'Predio Marilia, Ap 255',
                district: 'Centro',
                cityState: 'São Paulo/SP'

            },
            deliveryMethod: 'Moto',
            cnh: 'cnh-digital.jpeg'

        }
        // Fill Data
        cy.get('input[name="name"]').type(deliveryPerson.name);
        cy.get('input[name="email"]').type(deliveryPerson.email);
        cy.get('input[name="cpf"]').type(deliveryPerson.cpf);
        cy.get('input[name="whatsapp"]').type(deliveryPerson.whatsapp);

        // Fill Address
        cy.get('input[name="postalcode"]').type(deliveryPerson.address.postalCode);
        cy.get('input[type="button"][value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type(deliveryPerson.address.number);
        cy.get('input[name="address-details"]').type(deliveryPerson.address.complement);

        // Check Inputs Autofill 
        cy.get('input[name="address"]').should('have.value', deliveryPerson.address.street);
        cy.get('input[name="district"]').should('have.value', deliveryPerson.address.district);
        cy.get('input[name="city-uf"]').should('have.value', deliveryPerson.address.cityState);

        // Select Send Method
        cy.contains('.delivery-method li', deliveryPerson.deliveryMethod).click();

        // Upload CNH
        cy.get('input[accept^="image"]').attachFile('/images/' + deliveryPerson.cnh);

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Check error message
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido');
    })
})