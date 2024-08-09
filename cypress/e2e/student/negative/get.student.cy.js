/// <reference types="cypress"/>

describe('GET students feature failure test: getting a non-existing record', () => {
    it('Fail to get a non-existing student', () => {

        const student_id = '0'

        cy.request({
            method: 'GET',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${student_id}`,
            failOnStatusCode: false
        }).as('getStudentResult')

        //Valiations
        cy.get('@getStudentResult').then((response) => {
            expect(response.status).equal(404)
        })
    })
})