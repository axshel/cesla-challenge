/// <reference types="cypress"/>

describe('Student endpoint: DELETE method', () => {
    it.skip('Delete unused student register', () => {
        for (let i = 32; i <= 102; i++) {
            cy.request({
                method: 'DELETE',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${i}`,
                failOnStatusCode: false
            }).as('deleteStudentResult')

            // Validations
            cy.get('@deleteStudentResult').then((response_del) => {
                expect(response_del.status).equal(200)
            })
        }
    })

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

            let id = parseInt(response_post.body.id);

            cy.request({
                method: 'DELETE',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${id}`,
                failOnStatusCode: false
            }).as('deleteStudentResult')

            // Validations
            cy.get('@deleteStudentResult').then((response_del) => {
                expect(response_del.status).equal(200)
            })

            // Checking that the register will not be found anymore
            cy.request({
                method: 'GET',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${id}`,
                failOnStatusCode: false
            }).as('getStudentResult')
            
            cy.get('@getStudentResult').then((response) => {
                expect(response.status).equal(404)
            })
        })
    })
})