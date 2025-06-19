
class LoginPage {
    visit() {
        //navigation ke halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    //function 
    fillUsername(username) { //menerima username sebagai parameter

        //mencari elemen berdasarkan selector
        if (username) {
            cy.get('input[name="username"]').type(username); //mengetik nilai yang dikirimkan lewat parameter username ke dalam input
        }
    }

    fillPassword(password) {
        if (password) {
            cy.get('input[name="password"]').type(password);
        }
    }

    clickLogin() {
        cy.get('button[type="submit"]').click();
    }

    getErrorMessage() {
        // validasi UI (error login)
        return cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials');
    }

    getRequiredMessagee() {
        return cy.get('.oxd-input-field-error-message').should('be.visible').contains('Required');
    }
}

export default new LoginPage();