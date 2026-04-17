import ExceptionsPage from '../../support/pages/exceptions.page'

describe('ExceptionsTests', () => {

  it('Add a new row successfully', () => {
    ExceptionsPage.goto()
    ExceptionsPage.addNewRow()
    ExceptionsPage.validateconfirmationMessage('Row 2 was added')
  })

  it('Save a row successfully', () =>{
    ExceptionsPage.goto()
    ExceptionsPage.addNewRow()
    ExceptionsPage.fillinputrow(2, 'Test')
    ExceptionsPage.saveRow(2)
    ExceptionsPage.validateconfirmationMessage('Row 2 was saved')
  })

  it('Edit a row successfully', () => {
    ExceptionsPage.goto()
    ExceptionsPage.editRow(1)
    ExceptionsPage.fillinputrow(1, 'Edited')
    ExceptionsPage.saveRow(1)
    ExceptionsPage.validateconfirmationMessage('Row 1 was saved')
  })

  it('Remove a row successfully', () => {
    ExceptionsPage.goto()
    ExceptionsPage.addNewRow()
    ExceptionsPage.fillinputrow(2, 'Test')
    ExceptionsPage.saveRow(2)
    ExceptionsPage.removeRow(2)
    ExceptionsPage.validateconfirmationMessage('Row 2 was removed')
    ExceptionsPage.ValidateRowNotVisible(2)
  })

})

