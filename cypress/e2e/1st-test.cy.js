///<reference types="cypress"/>
describe("This is a test in the night", function(){
    it("navigate to the site url", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']")
        .type("Admin");
        cy.get("input[placeholder='Password']")
        .type("admin123");
        cy.get("button[type='submit']")
        .should("exist")
        .click();
        cy.get(".oxd-userdropdown-tab")
        .should("exist");
        cy.get(".oxd-userdropdown-img")
        .should("be.visible");
        cy.get(".oxd-glass-button.orangehrm-upgrade-button")
        .should("exist");
        cy.get(".oxd-main-menu-search")
        .should("exist");
        cy.get("ul[class='oxd-main-menu']")
        .should("have.text", "Admin", "PIM", "Leave", "Time", "Recruitment", "My Info", "Performance", "Dashboard", "Directory", "Maintenance", "Claim", "Buzz")

    })
})