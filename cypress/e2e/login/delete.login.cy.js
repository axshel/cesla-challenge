/// <reference types="cypress"/>

describe('DELETE login feature', () => {

    it('Delete a login register', () => {
        // Creates a new register to be deleted
        const body = {
            "email": "alxtest@email.com",
            "password": "alextest"
        }

        cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login',
            failOnStatusCode: false,
            body: body        
        }).as('postLoginResult')

        // Gets the id
        cy.get('@postLoginResult').then((response_post) => {
            expect(response_post.status).equal(201)

            cy.request({
                method: 'DELETE',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login/${response_post.body.id}`,
                failOnStatusCode: false
            }).as('deleteLoginResult')

            // Validations
            cy.get('@deleteLoginResult').then((response_del) => {
                expect(response_del.status).equal(200)
                console.log(response_del.body)
            })

            // Checking that the register will not be found anymore
            cy.request({
                method: 'GET',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login/${response_post.body.id}`,
                failOnStatusCode: false
            }).as('getLoginResult')
            
            cy.get('@getLoginResult').then((response) => {
                expect(response.status).equal(404)
            })
        })
    })
})