/// <reference types ="cypress" />
import LoginPage from "../OrangeHRMPages/loginPages"
import DashBoardPage from "../OrangeHRMPages/DashboardPage"
describe("Orangehrm POM test", function(){
    const loginpage = new LoginPage
    const DashBoardPage = new DashboardPage
    it("Navigate to site under test", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        loginpage.verifyLoginPageTitle();
        loginpage.verifyloginPageError();
        loginpage.checkLoginPageLogo();
        loginpage.enterUsername();
        loginpage.enterPassword()
    })
})