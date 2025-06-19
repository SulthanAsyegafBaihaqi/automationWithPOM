import loginPages from '../pages/loginPages';
import loginData from '../fixtures/loginData.json';

//block penggelompokkan pengujian
describe('Login Positive Case', () => {

  //it() -> mendefinisikan satu test case
  it('TC_Login_01 - Verif Login Valid Credentials', () => {
    loginPages.visit();
    loginPages.fillUsername(loginData.validUser.username);
    loginPages.fillPassword(loginData.validUser.password);
    loginPages.clickLogin();

    //verifikasi setelah login berhasil mengandung URL /dashboard
    cy.url().should('include', '/dashboard');
  })
})