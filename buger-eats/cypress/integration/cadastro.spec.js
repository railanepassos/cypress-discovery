describe('Cadastro', () => {
    it('deve ser possivel que usuário possa se tornar um entregador', () => {
        cy.viewport(1366, 768);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('a[href="/deliver"]').click();

        // have bug here
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

        var entregador = {
            name: 'Railane Passos',
            email: 'railanepassos@emailteste.com',
            cpf: '42335124668',
            whatsapp: '7186257195',
            endereco: {
                cep: '01009999',
                rua: 'Rua Líbero Badaró',
                numero: '595',
                complemento: 'Predio Marilia, Ap 255',
                bairro: 'Centro',
                cidade_uf: 'São Paulo/SP'

            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpeg'

        }
        // Fill Data
        cy.get('input[name="name"]').type(entregador.name);
        cy.get('input[name="email"]').type(entregador.email);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp);

        // Fill Address
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
        cy.get('input[type="button"][value="Buscar CEP"]').type(entregador.endereco.cep);
        cy.get('input[name="address-number"]').type(entregador.endereco.numero);
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento);

        // Check Inputs Autofill 
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua);
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro);
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf);

        // Select Send Method
        cy.contains('.delivery-method li', entregador.metodo_entrega).click();

        // Upload CNH
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh);
        

    })
})