import tablePage from "../../support/pages/table.page"
import TablePage from "../../support/pages/table.page"

describe('TableTests', () => {

    it('Filter by language', () => {
        TablePage.goto()
        TablePage.selectLanguageFilter('Java')
        tablePage.validateColumnValue(3, 'Java')
    })

    it('Filter by level', () => {
        TablePage.goto()
        TablePage.selectLevelFilter('Beginner')
        tablePage.validateColumnValue(4, 'Beginner')
    })

    it('Filter by minimum enrollments', () => {
        TablePage.goto()
        TablePage.selectMinEnrollmentsFilter('5,000+')
        tablePage.validateColumnValueGreaterThan(5, 5000)
    })

    it('Combine filters', () => {
        TablePage.goto()
        TablePage.selectLanguageFilter('Java')
        TablePage.selectLevelFilter('Beginner')
        TablePage.selectMinEnrollmentsFilter('5,000+')
        tablePage.validateColumnValue(3, 'Java')
        tablePage.validateColumnValue(4, 'Beginner')
        tablePage.validateColumnValueGreaterThan(5, 5000)
    })

    it('No results scenario', () => {
        TablePage.goto()
        TablePage.selectLanguageFilter('Python')
        TablePage.selectLevelFilter('Advanced')
        cy.contains('No matching courses.').should('be.visible')
    })

    it('Reset filters', () => {
        tablePage.goto()
        tablePage.resetFilters()
        tablePage.validateResetFilters()
    })

    it('sort by course name', () => {
        tablePage.goto()
        tablePage.selectSortBy('Course Name')
        tablePage.validateColumnAlphabeticalOrder(2)
    })

    it('sort by enrollments', () => {
        tablePage.goto()
        tablePage.selectSortBy('Enrollments')
        tablePage.validateColumnAscendingOrder(5)
    })
})  