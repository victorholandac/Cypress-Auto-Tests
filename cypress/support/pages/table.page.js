class TablePage {
    //Selectors
    table = '#courses_table'
    inputLanguage = '[name="lang"]'
    inputLevel = '[name="level"]'
    enrollmentsDropdown = '#enrollDropdown'
    enrollmentsOption = '#enrollDropdown li'
    SortByDropdown = '#sortBy'
    sortByOptions = '#sortBy option'
    resetButton = '#resetFilters'

    goto() {
        cy.visit('/practice-test-table')
    }

    selectLanguageFilter(language) {
        cy.contains('label', language).find(this.inputLanguage).check()
    }

    selectLevelFilter(level) {
        cy.get(this.inputLevel).uncheck()
        cy.contains('label', level).find(this.inputLevel).check()
    }

    selectMinEnrollmentsFilter(minEnrollments) {
        cy.get(this.enrollmentsDropdown).click()
        cy.get(this.enrollmentsOption).contains(minEnrollments).click()
    }

    selectSortBy(sortOption) {
        cy.get(this.SortByDropdown).select(sortOption)
    }

    resetFilters() {
        cy.get(this.inputLevel).uncheck()
        cy.get(this.resetButton).click()
    }

    validateColumnValue(columnIndex, value) {
        cy.get(`#courses_table tbody tr:visible td:nth-child(${columnIndex})`)
        .each(($td) => {
            cy.wrap($td).should('contain.text', value)
        })
    }

    validateColumnValueGreaterThan(columnIndex, value) {
        cy.get(`#courses_table tbody tr:visible td:nth-child(${columnIndex})`)
        .each(($td) => {
            const cellValue = parseInt($td.text())
            expect(cellValue).to.be.greaterThan(value)
        })
    }

    validateColumnAlphabeticalOrder(columnIndex) {
        cy.get(`#courses_table tbody tr:visible td:nth-child(${columnIndex})`)
            .then(($cells) => {
            const texts = [...$cells].map(el => el.innerText.trim())

            const sorted = [...texts].sort((a, b) => a.localeCompare(b))

            expect(texts).to.deep.equal(sorted)
            })
        }
    
    validateColumnAscendingOrder(columnIndex) {
        cy.get(`#courses_table tbody tr:visible td:nth-child(${columnIndex})`)
            .then(($cells) => {
            const numbers = [...$cells].map(el => el.innerText.trim())

            const sorted = [...numbers].sort((a, b) => a - b)

            expect(numbers).to.deep.equal(sorted)
            })
        }


    validateResetFilters() {
        cy.contains('label', 'Any').find(this.inputLanguage).should('be.checked')
        cy.get(this.inputLevel).should('be.checked')
        cy.get(this.enrollmentsDropdown).should('contain.text', 'Any')
    }

}

export default new TablePage()