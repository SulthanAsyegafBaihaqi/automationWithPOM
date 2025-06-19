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
        cy.get('.oxd-dropdown-menu')
            .should('be.visible').and('contain', 'Logout')
            .click();
    }
}

export default new LogoutPages;