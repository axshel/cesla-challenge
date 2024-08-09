/// <reference types="cypress"/>

describe('DELETE student feature', () => {

    it('Delete a student register', () => {
        // Creates a new register to be deleted
        const body = {
            "name": "Alex Test",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Gets the id
        cy.get('@postStudentResult').then((response_post) => {
            expect(response_post.status).equal(201)

            cy.request({
                method: 'DELETE',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${response_post.body.id}`,
                failOnStatusCode: false
            }).as('deleteStudentResult')

            // Validations
            cy.get('@deleteStudentResult').then((response_del) => {
                expect(response_del.status).equal(200)
                console.log(response_del.body)
            })

            // Checking that the register will not be found anymore
            cy.request({
                method: 'GET',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${response_post.body.id}`,
                failOnStatusCode: false
            }).as('getStudentResult')
            
            cy.get('@getStudentResult').then((response) => {
                expect(response.status).equal(404)
            })
        })
    })
})