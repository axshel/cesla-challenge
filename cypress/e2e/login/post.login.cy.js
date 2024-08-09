/// <reference types="cypress"/>

describe('Login endpoint: POST method', () => {

    it('Crate a new login register', () => {

        const body = {
            "email": "alextest@email.com",
            "password": "alextest",
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login',
            failOnStatusCode: false,
            body: body        
        }).as('postLoginResult')

        // Validations
        cy.get('@postLoginResult').then((response) => {
            expect(response.status).equal(201)
            expect(response.body.id).not.empty
            expect(response.body.token).not.empty
            expect(response.body.createdAt).not.empty

            expect(response.body.email).equal('alextest@email.com')
            expect(response.body.password).equal('alextest')
        })
    })
})