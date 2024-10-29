class LoginPage{
    verifyLoginPageTitle(){
        cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title")
        .should("have.text", "Login")
    }
    verifyloginPageError(){
        cy.get(".orangehrm-login-error")
        .should("exist")
    }
    checkLoginPageLogo(){
        cy.get(".orangehrm-login-logo")
        .should("exist")
    }
    enterUsername(){
        cy.get(".oxd-label")
        .should("be.visible", "Username");
        cy.get("input[placeholder='Username']")
        .type("Admin")
    }
    enterPassword(){
        cy.get(".oxd-icon.bi-key.oxd-input-group__label-icon")
        .should("be.visible");
        cy.get("input[placeholder='Password']")
        .type("admin123");
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header")
        .should("exist");
        cy.get("button[type='submit']")
        .should("exist")
        .click()
    }
}export default LoginPage