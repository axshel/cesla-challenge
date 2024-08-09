/// <reference types="cypress"/>

describe('GET login feature', () => {

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
})


describe('GET login register', () => {

    it('Get a specific login', () => {

        const login_id = '31'

        cy.request({
            method: 'GET',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/login/${login_id}`,
            failOnStatusCode: false
        }).as('getLoginResult')

        // Valiations
        cy.get('@getLoginResult').then((response) => {
            let expectedResult = {
                createdAt: "2024-08-09T05:01:37.020Z",
                email: "alextest@email.com",
                password: "alextest",
                token: "65f130aafdd8bd8ed9cfb34a",
                id: "31"
              }

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
            
            expect(response.body).to.deep.equal(expectedResult)
        })
    })
})