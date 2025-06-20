import loginPages from '../pages/loginPages';
import loginData from '../fixtures/loginData.json';

//block penggelompokkan pengujian
describe('Login Positive Case', () => {
  it('TC_Login_01 - Verif Login Valid Credentials', () => {
    //Intercept login positive API
    cy.intercept('GET', '/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');

    loginPages.visit();
    loginPages.fillUsername(loginData.validUser.username);
    loginPages.fillPassword(loginData.validUser.password);
    loginPages.clickLogin();

    //Tunggu permintaan login selesai
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    //verifikasi setelah login berhasil mengandung URL /dashboard
    cy.url().should('include', '/dashboard');
  })
})