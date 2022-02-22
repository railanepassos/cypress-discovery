
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

    })
    it('it should be possible to see the message when delivery person type invalid CPF', function () {

        const deliver = signupFactory.deliver();
        deliver.cpf = 'X233X124668';

        signupPage.accessDeliverPage();
        signupPage.fillFormRegister(deliver);
        signupPage.submitFormRegister();
        signupPage.alertMessageShouldBe('Oops! CPF inválido');
  
    })
    it('it should be possible to see the message when delivery person type invalid Email', function () {

        const deliver = signupFactory.deliver();
        deliver.email = 'davibury.com.br';

        signupPage.accessDeliverPage();
        signupPage.fillFormRegister(deliver);
        signupPage.submitFormRegister();
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.');
  
    })
})