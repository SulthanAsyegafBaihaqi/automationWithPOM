import logoutPages from "../pages/logoutPages";
import loginData from "../fixtures/loginData.json";

describe('Logout', () => {
    it('TC_Logout_06 - Verif Logout', () => {
        logoutPages.visit();
        logoutPages.fillUsername(loginData.validUser.username);
        logoutPages.fillPassword(loginData.validUser.password);
        logoutPages.clickLogin();

        cy.url().should('include', '/dashboard');

        logoutPages.clickUserDropdown();
    })
});