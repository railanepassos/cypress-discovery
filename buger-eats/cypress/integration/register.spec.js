
import signupPage from "../pages/SignupPage";

describe('Register', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((data) => {
            this.deliver = data;

        });

    });

    it('it should be possible to register a deliver successfully', function () {

        const successMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

        signupPage.accessDeliverPage();
        signupPage.fillFormRegister(this.deliver.registerSuccessfully);
        signupPage.submitFormRegister();
        signupPage.modalContentShouldBe(successMessage)

    })
    it('it should be possible to see the message when delivery person type invalid CPF', function () {
        signupPage.accessDeliverPage();
        signupPage.fillFormRegister(this.deliver.invalidCpf);
        signupPage.submitFormRegister();
        signupPage.alertMessageShouldBe('Oops! CPF inválido');
  
    })
})