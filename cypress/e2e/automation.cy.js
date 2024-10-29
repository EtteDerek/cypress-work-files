cy/// <reference types= "cypress"/>
describe("Automation in Derek's Laptop", function(){
    it("navigate to whitePlate url", function(){
        cy.visit("https://demo.guru99.com/V3/")
        // cy.xpath("//input[@name='uid']").type("mngr588097");
        // cy.xpath("//input[@name='password']").type("anEnejY")
        cy.get(':nth-child(1) > :nth-child(2) > input').type("mngr588097");
        cy.get(':nth-child(2) > :nth-child(2) > input').type("anEnejY");
        cy.get('[type="submit"]').click();
        //cy.get('.menusubnav > :nth-child(4) > a').click();
        // cy.get('.menusubnav > :nth-child(3) > a').click();
        cy.get('.menusubnav > :nth-child(5) > a').click();
        cy.get('.menusubnav > :nth-child(2) > a').click();
        cy.get(':nth-child(4) > :nth-child(2) > input').type("Mboutidem Ikot");
        cy.get('[value="f"]').click();
        cy.get('#dob').click();
        cy.get('textarea').type("Abacha Road, off Cassablanca, GRA");
        cy.get(':nth-child(8) > :nth-child(2) > input').type("Port Harcourt");
        cy.get(':nth-child(9) > :nth-child(2) > input').type("Rivers");
        cy.get(':nth-child(10) > :nth-child(2) > input').type("232311");
        cy.get(':nth-child(11) > :nth-child(2) > input').type("+2348027297945");
        cy.get(':nth-child(12) > :nth-child(2) > input').type("etuknwa@yahoo.com");
        cy.get(':nth-child(13) > :nth-child(2) > input').type("two2two")
        //cy.wait(7000);
        //cy.get('[type="submit"]').click();
        
        
        
       // cy.wait(3000);
        //cy.get('.menusubnav > :nth-child(8) > a').click();
        // cy.wait(3000);
        //cy.get('.menusubnav > :nth-child(9) > a').click()
        // cy.get('.menusubnav > :nth-child(10) > a').click();
        // cy.wait(2000);
        // cy.get('.menusubnav > :nth-child(12) > a').click();
        // cy.get('.menusubnav > :nth-child(10) > a').click();
        // cy.wait(3000);
        // cy.get('.menusubnav > :nth-child(14) > a').click();
        // cy.get('.menusubnav > :nth-child(15) > a').click()
    })
})