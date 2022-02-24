
import signupPage from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";

describe('Register', () => {

    /*
        beforeEach(function () {
            cy.fixture('deliver').then((data) => {
                this.deliver = data;

            });

        });
    */

    it('it should be possible to register a deliver successfully', function () {

        const successMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        const deliver = signupFactory.deliver();

        signupPage.accessDeliverPage();
        signupPage.fillFormRegister(deliver);
        signupPage.submitFormRegister();
        signupPage.modalContentShouldBe(successMessage)

    });
    it('it should be possible to see the message when delivery person type invalid CPF', function () {

        const deliver = signupFactory.deliver();
        deliver.cpf = 'X233X124668';

        signupPage.accessDeliverPage();
        signupPage.fillFormRegister(deliver);
        signupPage.submitFormRegister();
        signupPage.alertMessageShouldBe('Oops! CPF inválido');

    });
    it('it should be possible to see the message when delivery person type invalid Email', function () {

        const deliver = signupFactory.deliver();
        deliver.email = 'davibury.com.br';

        signupPage.accessDeliverPage();
        signupPage.fillFormRegister(deliver);
        signupPage.submitFormRegister();
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.');

    });

    context('required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'postalCode', output: 'É necessário informar o número do endereço' },
            { field: 'deliveryMethod', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ];

        before(function () {
            signupPage.accessDeliverPage();
            signupPage.submitFormRegister();

        });

        messages.forEach(function (message) {
            it(`it should be possible to see the message ${message.field} is required`, function () {
                signupPage.alertMessageShouldBe(message.output);

            });
            
        })

        

    });
   
})