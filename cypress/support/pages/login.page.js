class LoginPage {
    //Selectors
    usernameInput = '[name="username"]'
    passwordInput = '[name="password"]'
    loginButton = '#submit'
    loginError = '#error'

    goto() {
        cy.visit('/practice-test-login')
    }
    
    fillUsername(username) {
        cy.get(this.usernameInput).type(username)
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    submitLogin() {
        cy.get(this.loginButton).click()
    }

    validateLoginError(text) {
        cy.get(this.loginError).should('contain.text', text)
    }
}

export default new LoginPage()