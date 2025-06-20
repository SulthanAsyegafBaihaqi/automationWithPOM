import loginPages from "../pages/loginPages";
import loginData from "../fixtures/loginData.json";

describe('Login Negative Case', () => {

    // menggunakan beforeEach() karena test memakai API yang sama
    beforeEach(() => {
        cy.intercept('GET', '/web/index.php/core/i18n/messages').as('getMessage');
    });

    it('TC_Login_02 - Verif Login Invalid Password Credentials', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidPassword.username);
        loginPages.fillPassword(loginData.invalidPassword.password);
        loginPages.clickLogin();

        cy.wait('@getMessage').its('response.statusCode').should('eq', 200);

        loginPages.getErrorMessage();
    });

    it('TC_Login_03 - Verif Login Invalid Username Credentials', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidUsername.username);
        loginPages.fillPassword(loginData.invalidUsername.password);
        loginPages.clickLogin();

        cy.wait('@getMessage').its('response.statusCode').should('eq', 200);

        loginPages.getErrorMessage();
    });

    it('TC_Login_04 - Verif Login Invalid Username & Password credentials', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidUsernamePassword.username);
        loginPages.fillPassword(loginData.invalidUsernamePassword.password);
        loginPages.clickLogin();

        cy.wait('@getMessage').its('response.statusCode').should('eq', 200);

        loginPages.getErrorMessage();
    });

    it('TC_Login_05 - Verif Empty Credentials', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidEmpty.username);
        loginPages.fillPassword(loginData.invalidEmpty.password);
        loginPages.clickLogin();

        loginPages.getRequiredMessage().should('contain', 'Required');
    });
});