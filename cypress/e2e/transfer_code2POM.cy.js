/// <reference types = "cypress" />
describe("code the passed in the morning and fail in the evening, WONDER", function(){
    it("Naivigate to the site", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //cy.get(".orangehrm-login-branding")
        //.should("exist");
        cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title")
        .should("have.text", "Login");
        cy.get(".orangehrm-login-error")
        .should("exist");
        cy.get(".orangehrm-login-logo")
        .should("exist");
        cy.get(".oxd-label")
        .should("be.visible", "Username");
        cy.get("input[placeholder='Username']")
        .type("Admin");
        cy.get(".oxd-icon.bi-key.oxd-input-group__label-icon")
        .should("be.visible");
        cy.get("input[placeholder='Password']")
        .type("admin123");
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header")
        .should("exist");
        cy.get("button[type='submit']")
        .should("exist")
        .click();
        cy.url()
        .should("include", "dashboard");
        cy.get(".oxd-userdropdown-img")
        .should("exist");
        //cy.get("i[class='oxd-icon bi-stopwatch']")
        //.click();
        cy.wait(2000);
        cy.get("div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot > h5.oxd-text.oxd-text--h5.orangehrm-login-title")
        .click();
        cy.wait(2000);
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1) > span:nth-child(2)")
        .click();
        cy.url()
        .should("include", "directory")
        cy.get("input[placeholder='Type for hints...']")
        .type("Ranga Akunuri");
        //cy.xpath("//div[@class='oxd-table-filter-area']//div[2]//div[1]//div[2]//div[1]//div[1]//div[1]")
        //.click()
       //cy.get("#Job Title")
       //.should("exist")
       cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1) > span:nth-child(2)")
       .should("be.visible")
       .and("have.text", "Maintenance");
       cy.wait(2000);
       cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1) > span:nth-child(2)")
       .click(),
       cy.url()
       .should("include", "purgeEmployee")
       cy.get(".oxd-form")
       .should("exist");
       //.should("contain.text", "You have requested to access a critical Administrator function in OrangeHRM and are required to validate your credentials below")
       cy.wait(2000);
       cy.get(".oxd-text.oxd-text--h6.orangehrm-admin-access-title")
       .should("have.text", "Administrator Access");
       cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)")
       .should("exist");
       cy.get(".oxd-icon.bi-person.oxd-input-group__label-icon")
       .should("exist");
       cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)")
       .should("have.text", "Username");
       cy.get("input[name='username']")
       .should("be.disabled");
       //.and("have.text", "Admin")
       cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)")
       .should("have.text", "Password");
       cy.get("input[name='password']")
       .should("be.enabled")
       .type("admin123")
       //.should('be.hidden')
       cy.get("button[type='button']")
       .should("contain", "Cancel")
       .should("exist");
       cy.get("button[type='submit']")
       //.should("have.text", "confirm")
       .and("exist")
       .click();
       cy.get(".oxd-icon.bi-chevron-down")
       .should("exist")
       .click()
       cy.get("li[class='--active oxd-topbar-body-nav-tab --parent --visited'] li:nth-child(2) a:nth-child(1)")
       .should("be.visible")
       .click();
       cy.get(".oxd-label.oxd-input-field-required")
       .should("exist");
       cy.get("input[placeholder='Type for hints...']")
       .should("exist")
       .type("Software Engineer"),
       cy.get(".orangehrm-maintenance-note")
       //.should("include.value", 'Users who seek access to their data, or who seek to correct, amend, or delete the given information should direct their requests to Data@orangehrm.com with the subject "Purge Records (Instance Identifier: T3JhbmdlSFJNX3Rlc3RAb3JhbmdlaHJtLmNvbV9PcmFuZ2VfVGVzdF9vcGVuc291cmNlLWRlbW8tbWFzdGVyLm9yYW5nZWhybWxpdmUuY29tX180LjU=)')


    })
})