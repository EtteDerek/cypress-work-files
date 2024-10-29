/// <reference types="cypress"/>
describe("A walkthrough on assertion practice", function(){
    it("Naivigate to the site", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     cy.get(".orangehrm-login-branding")
    //     .should("exist");
    //     cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title")
    //     .should("have.text", "Login");
    //     cy.get(".orangehrm-login-error")
    //     .should("exist");
    //     cy.get(".orangehrm-login-logo")
    //     .should("exist");
    //     cy.get(".oxd-label")
    //     .should("be.visible", "Username");
    //     cy.get("input[placeholder='Username']")
    //     .type("Admin");
    //     cy.get(".oxd-icon.bi-key.oxd-input-group__label-icon")
    //     .should("be.visible");
    //     cy.get("input[placeholder='Password']")
    //     .type("admin123");
    //     cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header")
    //     .should("exist");
    //     cy.get("button[type='submit']")
    //     //.should("have.css", "background color", "rgb(242, 154, 0)")
    //     .should("exist")
    //     .click();
    //     cy.url()
    //     .should("include", "dashboard");
    //     cy.get(".oxd-userdropdown-img")
    //     .should("be.visible");
    //     cy.get("i[class='oxd-icon bi-stopwatch']")
    //     .click();
    //     cy.get(".oxd-icon.bi-calendar.oxd-date-input-icon")
    //     //.should("be.visible")
    //     .click();
    //     cy.wait(5000);
    //    // cy.get("//span[normalize-space()='Timesheets']//i[@class='oxd-icon bi-chevron-down']")
    //     //.click()
    cy.xpath('//i[@class="oxd-icon bi-list oxd-topbar-header-hamburger"]').should("be.visible")
    })
})