var faker = require ('faker');
var cpf = require ('gerador-validador-cpf');

export default {
    deliver: function () {

        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();

        var data = {
            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName),
            cpf: cpf.generate(),
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

        return data
    }
}