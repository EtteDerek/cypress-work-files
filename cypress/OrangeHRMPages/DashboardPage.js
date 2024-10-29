class dashBoardPage{
    checkFeatures(){
        cy.url()
        .should("include", "dashboard");
        cy.get("img[alt='client brand banner']")
        .should("exist"),
        cy.get(".oxd-userdropdown-tab")
        .should("exist");
        cy.get(".oxd-userdropdown-img")
        .should("be.visible");
        cy.get(".oxd-glass-button.orangehrm-upgrade-button")
        .should("exist");
        cy.get(".oxd-main-menu-search")
        .should("exist");
        //cy.get("ul[class='oxd-main-menu']")
        //.should("have.text", "Admin", "PIM", "Leave", "Time", "Recruitment", "My Info", "Performance", "Dashboard", "Directory", "Maintenance", "Claim", "Buzz")
    }
} 
export default dashBoardPage
    
