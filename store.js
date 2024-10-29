const { Assertion } = require("chai")
const cypress = require("cypress")
const { CypressTestComponentRenderer } = require("cypress/angular")

pageLoadTimeout: 90000, 
//input[@placeholder='Username']
username
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
cy.get('.oxd-button')
cy.get(':nth-child(5) > .oxd-main-menu-item')
cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)')
cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
.oxd-table-filter
div[role='listbox']
div[role='listbox']

https://www.openstreetmap.org/
cy.get('.d-inline-flex > .geolink')

//input[@id='username']

//a[@title='Software Testing']

//GURU99BANK
//input[@name='uid'] mngr587928
//input[@name='password'] EsEmYtA

// CLASS NOTE ON ASSERTION
IMPLICIT Assertion are inbiuld
FYI implicit is build into CypressTestComponentRenderer
cy.get()
cy.contains()  this is use when you want to check a particular thing that contains a botton
cy.visit()

EXPLICIT. you will have o defind
cy.url().should().and()
cy.url(saucedemo.com).should("have.text", "saucedemo");
the .should() assertion is EXPLICIT
# represent ID
. represent class 
e.g cy.get(".....").should("exist");
cy.get(".login-password").should("contain", "secret sauce");

//FYI: evry text that your see in a web page,  there is a web element attached to it
e.g cy.get("input[type=password]").should("have.attr", "placeholder", "password");

e.g cy.get("login-..").should("have.css", "background-color", "rgb(61,54,23))").and("have.value, "Login")

fyi: background colors are css

//a[contains(text(),'Login or register')]
cy.get('#accountFrm > fieldset > .btn')
#AccountFrm_firstname
