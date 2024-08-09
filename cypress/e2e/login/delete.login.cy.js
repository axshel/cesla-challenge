/// <reference types="cypress"/>

describe('Login endpoint: DELETE method', () => {
    it('Delete unused login register', () => {
        for (let i = 28; i <= 34; i++) {
            cy.request({
                method: 'DELETE',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login/${i}`,
                failOnStatusCode: false
            }).as('deleteLoginResult')

            // Validations
            cy.get('@deleteLoginResult').then((response_del) => {
                expect(response_del.status).equal(200)
            })
        }
    })

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

            let id = parseInt(response_post.body.id)

            cy.request({
                method: 'DELETE',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login/${id}`,
                failOnStatusCode: false
            }).as('deleteLoginResult')

            // Validations
            cy.get('@deleteLoginResult').then((response_del) => {
                expect(response_del.status).equal(200)
            })

            // Checking that the register will not be found anymore
            cy.request({
                method: 'GET',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login/${id}`,
                failOnStatusCode: false
            }).as('getLoginResult')
            
            cy.get('@getLoginResult').then((response) => {
                expect(response.status).equal(404)
            })
        })
    })
})