class LogoutPages {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    fillUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    fillPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickLogin() {
        cy.get('button[type="submit"]').click();
    }

    clickUserDropdown() {
        cy.get('.oxd-userdropdown').click();
    }

    clickLogout() {
        cy.contains('Logout').click();
    }
}

export default new LogoutPages;