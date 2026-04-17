import LoginPage from '../../support/pages/login.page'

describe('LoginTests', () => {

  it('Successful login with valid credentials', () => {
    LoginPage.goto()
    LoginPage.fillUsername(Cypress.env('USERNAME'))
    LoginPage.fillPassword(Cypress.env('PASSWORD'))
    LoginPage.submitLogin()
    cy.url().should('include', '/logged-in-successfully/')
  })

  it('Failed login with invalid username', () => {
    LoginPage.goto()
    LoginPage.fillUsername('invalidUsername')
    LoginPage.fillPassword(Cypress.env('PASSWORD'))
    LoginPage.submitLogin()
    LoginPage.validateLoginError('Your username is invalid!')
  })

    it('Failed login with invalid password', () => {
    LoginPage.goto()
    LoginPage.fillUsername(Cypress.env('USERNAME'))
    LoginPage.fillPassword('InvalidPassword')
    LoginPage.submitLogin()
    LoginPage.validateLoginError('Your password is invalid!')
  })

    it('Failed login with empty credentials', () => {
    LoginPage.goto()
    LoginPage.submitLogin()
    LoginPage.validateLoginError('Your username is invalid!')
  })

  
})

