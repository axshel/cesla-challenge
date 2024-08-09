/// <reference types="cypress"/>

describe('Student endpoint: DELETE method negative tests', () => {

    it('Fail to delete a non-existing student register', () => {
        // Creates a new register to be deleted
        const non_existing_id = 0

        cy.request({
            method: 'DELETE',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${non_existing_id}`,
            failOnStatusCode: false
        }).as('deleteStudentResult')

        // Validations
        cy.get('@deleteStudentResult').then((response_del) => {
            expect(response_del.status).equal(404)
        })
    })
})