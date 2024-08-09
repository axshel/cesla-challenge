/// <reference types="cypress"/>

describe('Login endpoint: GET method', () => {

    it('Get a list of login registers', () => {

        cy.request({
            method: 'GET',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login`,
            failOnStatusCode: false
        }).as('getLoginResult')

        // Valiations
        cy.get('@getLoginResult').then((response) => {
            expect(response.status).equal(200)

            expect(response.body).not.empty

            expect(response.body[0].id).not.empty
            expect(response.body[0].token).not.empty
            expect(response.body[0].createdAt).not.empty

            expect(response.body[0].email).not.empty
            expect(response.body[0].email).string

            expect(response.body[0].password).not.empty
            expect(response.body[0].password).string
        })
    })

    it('Get a specific login', () => {

        const login_id = 28

        cy.request({
            method: 'GET',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login/${login_id}`,
            failOnStatusCode: false
        }).as('getLoginResult')

        // Valiations
        cy.get('@getLoginResult').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            
            expect(response.body.token).string
            expect(response.body.token).not.empty
            
            expect(response.body.createdAt).not.empty
            
            expect(response.body.name).string
            expect(response.body.email).equal('alextest@email.com')

            expect(response.body.password).not.empty
            expect(response.body.password).string
            expect(response.body.password).equal("alextest")
        })
    })
})