/// <reference types = "cypress"/>
describe("picking every code and elements off hand", function(){
    it("navigate to site under test url", function(){

        //ORANGEHRM playground test
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/auth/login"); 
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        // cy.get('.oxd-button').click()
        // cy.get(':nth-child(5) > .oxd-main-menu-item').click();
        // cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        // cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        // // cy.get("div[role='listbox']").click()

        //cy.visit("https://opensource.com/")
        // cy.visit("https://www.openstreetmap.org/");
        // cy.get('.d-inline-flex > .geolink').click()

        //DEMO-APPLITOOLS.COM REAL-TIME TEST
        //cy.visit("https://demo.applitools.com")
        // cy.get("#username").type("username");
        // cy.get("#password").type("password");
        // cy.get("log-in").click()
        // cy.xpath("//input[@id='username']").type("username");
        // cy.xpath("//input[@id='password']").type("password");
        // cy.xpath("//input[@type='checkbox']").click();
        // cy.xpath("//a[@id='log-in']").click()

        //GURU99 REAL-TIME TEST with XPATH METHOD
        // cy.visit("https://www.guru99.com/");
        // cy.xpath("//a[@title='Software Testing']").click();
        // cy.xpath("//div[@class='kt_simple_share_container kt_share_shortcode kt_share_location_after kt_share_location_mobile_after']//a[contains(@aria-label,'Facebook')]").click();
        //cy.xpath("//div[@aria-label='Close']//i[@class='x1b0d499 x1d69dk1']").click()

        // cy.visit('https://demo.guru99.com/V3/');
        // cy.xpath("//body/div[1]/div[1]/div[1]/div[1]");
        // cy.xpath("//input[@name='uid']").type("mngr587928");
        // cy.xpath("//input[@name='password']").type("EsEmYtA");
        // cy.xpath("//input[@name='btnLogin']").click()
        // cy.xpath("//a[normalize-space()='New Customer']").click();
        // cy.xpath("//input[@name='name']").type("NdifrekeEtuknwa");
        // cy.xpath("//tbody/tr[5]/td[2]/input[2]").click();
        // cy.xpath("//input[@id='dob']").click();
        // cy.xpath("//textarea[@name='addr']").type("Sani Abacha Road, GRA, Port Harcourt");
        // cy.xpath("//input[@name='city']").type("PortHarcourt");
        // cy.xpath("//input[@name='state']").type("Rivers");
        // cy.xpath("//input[@name='pinno']").type("225599");
        // cy.xpath("//input[@name='telephoneno']").type("+2348027297945");
        // cy.xpath("//input[@name='emailid']").type("whiteplatedirector@gmail.com");
        // cy.xpath("//input[@name='password']").type("Console.1log");
        // cy.xpath("//input[@name='sub']").click();
        // cy.xpath("//a[normalize-space()='Home']")

        //ORANGEHRM REAL-TIME TEST WITH XPATH METHOD
        //cy.visit("https://opensource-demo.orangehrmlive.com/")
        //cy.xpath("//input[@placeholder='Username']").type("Admin");
        //cy.xpath("//input[@placeholder='Password']").type("admin123")

        cy.visit("https://automationteststore.com/");
        //cy.xpath("//a[contains(text(),'Login or register')]").click();
        //cy.get('#accountFrm > fieldset > .btn').click();
        //cy.get("#AccountFrm_firstname").type('Ndifreke')
    })
})