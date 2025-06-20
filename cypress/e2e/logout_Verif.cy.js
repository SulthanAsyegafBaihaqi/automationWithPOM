import logoutPages from "../pages/logoutPages";
import loginData from "../fixtures/loginData.json";

describe('Logout', () => {
    it('TC_Logout_06 - Verif Logout', () => {

        cy.intercept('GET', '/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');

        cy.intercept('GET', '/web/index.php/auth/login').as('logoutRedirect');

        logoutPages.visit();
        logoutPages.fillUsername(loginData.validUser.username);
        logoutPages.fillPassword(loginData.validUser.password);
        logoutPages.clickLogin();

        cy.wait('@loginRequest');
        cy.url().should('include', '/dashboard');

        logoutPages.clickUserDropdown();
        logoutPages.clickLogout();

        cy.wait('@logoutRedirect');
        cy.url().should('include', '/auth/login');
    })
});