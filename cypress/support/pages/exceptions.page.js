class ExceptionsPage {
    //Selectors
    addNewRowButton = '[name="Add"]'
    loadingSpinner = '#loading'
    row = '#row'
    saveButton = '[name="Save"]'
    editButton = '[name="Edit"]'
    removeButton = '[name="Remove"]'


    goto(){
        cy.visit('/practice-test-exceptions')
    }

    addNewRow(){
        cy.get(this.addNewRowButton).click()
        cy.get(this.loadingSpinner, { timeout: 10000 }).should('not.visible')
    }

    fillinputrow(rowIndex, value){
        cy.get(`${this.row}${rowIndex} > .input-field`).type(value)
    }

    saveRow(rowIndex){
        cy.get(`${this.row}${rowIndex} > ${this.saveButton}`).click()
    }

    editRow(rowIndex){
        cy.get(`${this.row}${rowIndex} > ${this.editButton}`).click()

    }
    removeRow(rowIndex){
        cy.get(`${this.row}${rowIndex} > ${this.removeButton}`).click()
    }

    validateconfirmationMessage(text){
        cy.get('#confirmation').should('contain.text', text)
    }

    ValidateRowNotVisible(rowIndex){
        cy.get(`${this.row}${rowIndex}`).should('not.visible')
    }

}

export default new ExceptionsPage()