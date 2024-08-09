/// <reference types="cypress"/>

describe('POST student feature', () => {

    it('Crate a new student register successfully', () => {

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

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(201)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty

            expect(response.body.name).string
            expect(response.body.name).equal('Alex Test')
            
            expect(response.body.birthdate).string
            expect(response.body.birthdate).equal('1980-01-01')
            
            expect(response.body.cpf).string
            expect(response.body.cpf).equal('00271700040')
            
            expect(response.body.email).string
            expect(response.body.email).equal('alextest@email.com')
            
            expect(response.body.academic_record).string
            expect(response.body.academic_record).equal('1234')
        })
    })
})